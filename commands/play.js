const { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const Discord = require('discord.js');
const pausejs = require(`./pause`);
const skipjs = require(`./skip`);
const stopjs = require(`./stop`);
const clearqueuejs = require(`./clearqueue`);
var titles =  ""
var owner = ""
var song = ""
var playing = false
module.exports = {
  name: "play",
  description: "Play a song in your channel!",
  async execute(message, client, fun, looped) {
    try {
      const args = message.content.split(" ");
      const queue = message.client.queue;
      const serverQueue = message.client.queue.get(message.guild.id);
      const voiceChannel = message.member.voiceChannel;
      if (!voiceChannel)
        return message.channel.send(
          "Du musst in einem Voice Channel sein, um Musik zu spielen!"
        ).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
          "Ich kann deinem Voice Channel nicht Joinen!"
        ).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
      }
	  
      const songInfo = await ytdl.getInfo(args[1]);
       song = {
        title: songInfo.title,
        url: songInfo.video_url
      };
	titles = song.title
	
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
          this.play(message, queueContruct.songs[0], client, looped);
		  owner = message.member
        } catch (err) {
          console.log(err);
          queue.delete(message.guild.id);
          return message.channel.send(err);
        }
      } else {
		
		if (message.guild.voiceConnection.channel != message.member.voiceChannel){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Fehler!");
		embed.addField("Du Musst im selben Voice Channel sein, wie ich!",`=> Wechsle bitte den Channel`)
		embed.addField("**DEIN CHANNEL: **", message.member.voiceChannel , true)
		embed.addField("**CHANNEL DES BOTS: **", message.guild.voiceConnection.channel , true)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x8B0000)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		return message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		})  
		}else{
        serverQueue.songs.push(song);
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
		embed.setColor(0x8B0000)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		return message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("▶️") 
		}) 
      }} 
    } catch (error) {
      console.log(error);
      message.channel.send(error.message);
    }
  },

  play(message, song, client, looped) {
	  
    const queue = message.client.queue;
    const guild = message.guild;
    const serverQueue = queue.get(message.guild.id);
    if (!song) {
	  playing = false
      queue.delete(guild.id);
		 setTimeout(() => {       
      serverQueue.voiceChannel.leave();
	  
	  },60000);
      return;
    }
	
	if(message.member.voiceChannel !=  message.guild.voiceConnection.channel){
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		playing = false
		return;
	}
	
		const args = message.content.split(" ");
		let vid = "https://www.youtube.com/watch?v="
		let vidid = args[1].slice(vid.length)
		let urll = "https://img.youtube.com/vi/"+vidid+"/hqdefault.jpg"
		console.log("Queued Video Icon URL: " + urll)
		console.log("Looped: " + looped)
		playing = true
		const embed = new Discord.RichEmbed()
		embed.setTitle("Song wird wiedergegeben!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.addField("Ich fange an Folgenden Song zu Spielen! **Viel Spaß!** ",`__**Titel: **__ **${song.title}**`)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setImage(urll);
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x2fe9a7)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🎵") 
		})
		
	const dispatcher = serverQueue.connection
      .playStream(ytdl(song.url))
      .on("end", () => {
		  console.log(`finished`)
		  if(looped === false){
        serverQueue.songs.shift();
		  }
        this.play(message, serverQueue.songs[0], client, looped);
		owner = message.member
      })
	 
      .on("error", error => console.error(error));
	   //wiedergabe(message, client, song)
		//dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
   // message.channel.send(`Start playing: **${song.title}**`);
		
  },  
  
   loop(message, client, looped){
	   	if (!message.member.voiceChannel){
		message.channel.send('Du musst in einem Voice Channel sein, um Lieder zu Loopen!').then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		}) 
			}else{
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		const queue = message.client.queue;
		const guild = message.guild;
		const serverQueue = queue.get(message.guild.id);
		if (!serverQueue){
			message.channel.send('Es muss ein Lied laufen, um Loop zu nutzen!').then(sentEmbed =>  {
			sentEmbed.react("🚫") 
		}) 
		}
		else{
	   if (message.guild.voiceConnection.channel != message.member.voiceChannel){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Fehler!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.addField("Du Musst im selben Voice Channel sein, wie ich!",`=> Wechsle bitte den Channel`)
		embed.addField("**DEIN CHANNEL: **", message.member.voiceChannel , true)
		embed.addField("**CHANNEL DES BOTS: **", message.guild.voiceConnection.channel , true)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x8B0000)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		return message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		})   
	   }
	   else{
      const queue = message.client.queue;
      const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um Musik zu Loopen!');
		if (!serverQueue) return message.channel.send('Es läuft kein Song!');
		if (serverQueue.connection.dispatcher){
	if(looped === true){
		console.log(`Starting Loop!`)
		const embed = new Discord.RichEmbed()
		embed.setTitle("Loop wird Gestartet!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Ich fange an Folgenden Song zu Loopen! **Viel Spaß!** ",`__**Titel: **__ **` + titles+ "**")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x2fe9a7)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🔂") 
		})   
		
	}
	
	else{
		console.log(`Loop Gestoppt!`)
		const embed = new Discord.RichEmbed()
		embed.setTitle("Loop wird Gestoppt!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Ich höre auf, Folgenden Song zu Loopen!" + "\n"+ "Wenn der Song zuende ist geht deine Playlist normal weiter!"+ "\n" + "**Viel Spaß!** ",`__**Titel: **__ **` + titles+ "**")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x2fe9a7)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("➡️") 
		})   
		
	}
			}}}}
  },
	channelleave(message, client){
		if(playing === true){
		const queue = message.client.queue;
		const guild = message.guild;
		const serverQueue = queue.get(message.guild.id);
		if(message.member.voiceChannel !=  message.guild.voiceConnection.channel){
		looped = false
		const voiceChannel = message.member.voiceChannel;
		console.log(`Verlasse CHannel! : ` + message.guild.voiceConnection.channel)
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
		}}
	},
	
	
	pause(message, client){
	  pausejs.execute(message, client, owner);
	},
	skip(message, client){
			playing = false
			looped = false
			skipjs.execute(message, client, owner, looped);
	},
	stop(message, client){
		looped = false
		playing = false
	  stopjs.execute(message, client, owner, looped);
	},
	clearqueue(message, client){
		looped = false
		playing = false
	  clearqueuejs.execute(message, client, owner, looped);
	},
  
};
