const { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const Discord = require('discord.js');
var looped = false;
var titles =  ""
module.exports = {
  name: "play",
  description: "Play a song in your channel!",
  async execute(message, client) {
    try {
      const args = message.content.split(" ");
      const queue = message.client.queue;
      const serverQueue = message.client.queue.get(message.guild.id);

      const voiceChannel = message.member.voiceChannel;
      if (!voiceChannel)
        return message.channel.send(
          "Du musst in einem Voice Channel sein, um Musik zu spielen!"
        );
      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
          "Ich kann deinem Voice Channel nicht Joinen!"
        );
      }

      const songInfo = await ytdl.getInfo(args[1]);
      const song = {
        title: songInfo.title,
        url: songInfo.video_url
      };

      if (!serverQueue) {
        const queueContruct = {
          textChannel: message.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [],
          volume: 5,
          playing: true
        };

        queue.set(message.guild.id, queueContruct);

        queueContruct.songs.push(song);

   try {
          var connection = await voiceChannel.join();
          queueContruct.connection = connection;
          this.play(message, client, queueContruct.songs[0], connection);
        } catch (err) {
          console.log(err);
          queue.delete(message.guild.id);
          return message.channel.send(err);
        }
      } else {
        connection = serverQueue.songs.push(song);
       // return message.channel.send(
        //  `${song.title} has been added to the queue!`
		let vid = "https://www.youtube.com/watch?v="
		let vidid = args[1].slice(vid.length)
		let urll = "https://img.youtube.com/vi/"+vidid+"/hqdefault.jpg"
		console.log("Queued Video Icon URL: " + urll)
		const embed = new Discord.RichEmbed()
		embed.setTitle("Song zur Queue hinzugefügt!");
		embed.addField("Ich habe den Folgenden Song zur Queue hinzugefügt! **Viel Spaß!** ",`__**Titel: **__ **${song.title}**`)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setImage(urll);
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		return message.channel.send({embed}) 
       
      }
    } catch (error) {
      console.log(error);
      message.channel.send(error.message);
    }
  },

  play(message, client, song, connection) {
    const queue = message.client.queue;
    const guild = message.guild;
    const serverQueue = queue.get(message.guild.id);
	titles = song.title
	
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
     dispatcher.on("end", () => {
		 if(looped === false){
			serverQueue.songs.shift();
		 }
        this.play(message, client, serverQueue.songs[0], connection);
		console.log(`Bin hier`)
		message.channel.send('Finished!');
		
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    //serverQueue.textChannel.send(`Ich beginne: **${song.title}**, zu Spielen!`);
		const args = message.content.split(" ");
		let vid = "https://www.youtube.com/watch?v="
		let vidid = args[1].slice(vid.length)
		let urll = "https://img.youtube.com/vi/"+vidid+"/hqdefault.jpg"
		console.log("Queued Video Icon URL: " + urll)
		
		const embed = new Discord.RichEmbed()
		embed.setTitle("Song wird wiedergegeben!");
		embed.addField("Ich fange an Folgenden Song zu Spielen! **Viel Spaß!** ",`__**Titel: **__ **${song.title}**`)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setImage(urll);
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		serverQueue.textChannel.send({embed}) 
  },
  
  
  
   loop(message, client, song) {
      const queue = message.client.queue;
      const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um Musik zu Loopen!');
		if (!serverQueue) return message.channel.send('Es läuft kein Song!');
		if (serverQueue.connection.dispatcher){
	if(looped === false){
		looped = true
		console.log(`Starting Loop!`)
		const embed = new Discord.RichEmbed()
		embed.setTitle("Loop wird Gestartet!");
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Ich fange an Folgenden Song zu Loopen! **Viel Spaß!** ",`__**Titel: **__ **` + titles+ "**")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		serverQueue.textChannel.send({embed})
		
	}
	else{
		looped = false
		console.log(`Loop Gestoppt!`)
		const embed = new Discord.RichEmbed()
		embed.setTitle("Loop wird Gestoppt!");
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Ich höre auf, Folgenden Song zu Loopen!" + "\n"+ "Wenn der Song zuende ist geht deine Playlist normal weiter!"+ "\n" + "**Viel Spaß!** ",`__**Titel: **__ **` + titles + "**")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		serverQueue.textChannel.send({embed})
	}
		}
  },
};

