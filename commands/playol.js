const { Util } = require("discord.js");
const ytdl = require("ytdl-core");

module.exports = {
  name: "play",
  description: "Play a song in your channel!",
  async execute(msg, client2) {
    try {
      const args = msg.content.split(" ");
      const queue = msg.client.queue;
      const serverQueue = msg.client2.queue.get(msg.guild.id);

      const voiceChannel = msg.member.voiceChannel;
      if (!voiceChannel)
        return msg.channel.send(
          "You need to be in a voice channel to play music!"
        );
      const permissions = voiceChannel.permissionsFor(msg.client2.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return msg.channel.send(
          "I need the permissions to join and speak in your voice channel!"
        );
      }

      const songInfo = await ytdl.getInfo(args[1]);
      const song = {
        title: songInfo.title,
        url: songInfo.video_url
      };

      if (!serverQueue) {
        const queueContruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [],
          volume: 5,
          playing: true
        };

        queue.set(msg.guild.id, queueContruct);

        queueContruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueContruct.connection = connection;
          this.play(msg, queueContruct.songs[0], connection, voiceChannel);
        } catch (err) {
          console.log(err);
          queue.delete(msg.guild.id);
          return msg.channel.send(err);
        }
      } else {
        serverQueue.songs.push(song);
        return msg.channel.send(
          `${song.title} has been added to the queue!`
        );
      }
    } catch (error) {
      console.log(error);
      msg.channel.send(error.msg);
    }
  },

  play(msg, song, connection, voiceChannel, client2) {
    const queue = msg.client2.queue;
    const guild = msg.guild;
    const serverQueue = queue.get(msg.guild.id);

    if (!song) {
      msg.guild.voiceConnection.disconnect();
      queue.delete(guild.id);
      return;
    }

    const dispatcher = connection.playStream(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        this.play(msg, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
  }
};
