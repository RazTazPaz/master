const { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const pausejs = require(`./pause`);
const resumejs = require(`./resume`);
const skipjs = require(`./skip`);
const stopjs = require(`./stop`);
const functions = require(`./functions`);
const clearqueuejs = require(`./clearqueue`);
const volumejs = require(`./volume`);
var titles =  ""
var owner = ""
var playowner = ""
var playing = false
var looped = false
var msg = ""
var song = ""

module.exports = {
  name: "play",
  description: "Play a song in your channel!",
  async execute(message, client, fun) {
	  	if(owner === message.member || owner === ""){
    try {
      const args = message.content.split(" ");
      const queue = message.client.queue;
      const serverQueue = message.client.queue.get(message.guild.id);
      const voiceChannel = message.member.voiceChannel;
	  msg = message
      if (!voiceChannel)  return functions.playnotvoice(message)

      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
		functions.playnotalkpermission(message)
		return
      }
	  
      const songInfo = await ytdl.getInfo(args[1]);
       song = {
        title: songInfo.title,
        url: songInfo.video_url
      };
	titles = song.title
	
      if (!serverQueue) {
		  playowner = message.member
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
          this.play(message, connection, queueContruct.songs[0], client);
		  owner = msg.member
        } catch (err) {
          console.log(err);
          queue.delete(message.guild.id);
          return message.channel.send(err);
        }
      } else {
		
		if (message.guild.voiceConnection.channel != message.member.voiceChannel){
		functions.playnotsamevoice(message)
		}else{
        serverQueue.songs.push(song);
		let vid = "https://www.youtube.com/watch?v="
		let vidid = args[1].slice(vid.length)
		let urll = "https://img.youtube.com/vi/"+vidid+"/hqdefault.jpg"
		functions.playsongaddedtoqueue(message, urll, song)
      }} 
    } catch (error) {
      console.log(error);
      message.channel.send(error.message);
    }
		}
		else{
			functions.pausenotowner(message, owner)
		}
  },

  play(message, connection, song, client) {
 
	playing = true
	var queue = message.client.queue;
    var guild = message.guild;
    var serverQueue = message.client.queue.get(message.guild.id);
	owner = msg.member
	
	if(!song){
		console.log(message.guild.me.voiceChannel)
		if(message.guild.me.voiceChannel){
			console.log(`NOT PAUSED`)
			playing = false
			message.guild.me.voiceChannel.leave();
			if(queue){
			queue.delete(guild.id);	
			}
			return
		}
		return
	}
	
		const args = message.content.split(" ");
		let vid = "https://www.youtube.com/watch?v="
		let vidid = args[1].slice(vid.length)
		let urll = "https://img.youtube.com/vi/"+vidid+"/hqdefault.jpg"
		playing = true
		functions.playsong(message, urll, song)
	
	
	const dispatcher = serverQueue.connection
      .playStream(ytdl(song.url))
      .on("end", () => {
		  console.log(`finished`)
		  if(looped === false){
        serverQueue.songs.shift();
		  }
		this.play(message, connection, serverQueue.songs[0], client);
		owner = ""
		playing = false
		
      })
	
      .on("error", error => console.error(error));		
  },  
  
   loop(message, client){
	   	if (!message.member.voiceChannel){
		functions.playloopnotinvoice(message)
			}else{
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		const queue = message.client.queue;
		const guild = message.guild;
		const serverQueue = queue.get(message.guild.id);
		if (!serverQueue){
		functions.playloopnosong(message)
		}
		else{
	   if (message.guild.voiceConnection.channel != message.member.voiceChannel){
		functions.playloopnotsamechannel(message)
	   }
	   else{
      const queue = message.client.queue;
      const serverQueue = message.client.queue.get(message.guild.id);
	  const guild = message.guild;
		if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um Musik zu Loopen!');
		if (!serverQueue) return message.channel.send('Es läuft kein Song!');
		if (serverQueue.connection.dispatcher){
		if(owner != message.member){
		functions.pausenotowner(message, owner)
		}
		else{		
	if(looped === false){
	functions.playloopstart(message, titles) 
	looped = true
		console.log(looped)
	}
	
	else{
		looped = false
	functions.playloopstop(message, titles)
	}
			}}}}}
  },
  
	channelleave(message, client){
		const serverQueue = message.client.queue.get(message.guild.id);
		const queue = message.client.queue;
		const guild = message.guild;
		if(message.guild.voiceConnection){
		if(message.member.voiceChannel !=  message.guild.voiceConnection.channel){
		looped = false
		const voiceChannel = message.member.voiceChannel;
		console.log(`Verlasse CHannel! : ` + message.guild.voiceConnection.channel)
		serverQueue.connection.dispatcher.end();
		queue.delete(guild.id);
		serverQueue.voiceChannel.leave();
		return;
		}
		}
	},
	
	botleft(message, client){
	const queue = message.client.queue;
	const guild = message.guild;
	queue.delete(guild.id);	
	},
	
	
	pause(message, client){
		if(owner === message.member){
		pausejs.execute(message, client, owner);
		}
		else{
			//NOT OWNER
			functions.pausenotowner(message, owner)
		}
	},
	resume(message, client){
		if(owner === message.member){
		resumejs.execute(message, client, owner)
		}
		else{
			functions.pausenotowner(message, owner)
			}
	},
	skip(message, client){
		if(owner === message.member){
			playing = false
			looped = false
			skipjs.execute(message, client, owner);
			
		}
		else
		{
			functions.pausenotowner(message, owner)
		}
	},
	stop(message, client){
		if(owner === message.member){
			console.log("OWNER: " + owner + "MEMBER: " + message.member)
			playing = false
			looped = false
			stopjs.execute(message, client, owner);
		}
		else{
			console.log("OWNER: " + owner + "MEMBER: " + message.member)
			functions.pausenotowner(message, owner)
		}
	},
	volume(message, client){
		if(owner === message.member){
			console.log("OWNER: " + owner + "MEMBER: " + message.member)
			volumejs.execute(message, client, owner);
		}
		else{
			functions.pausenotowner(message, owner)
		}
	},
	clearqueue(message, client){
		if(owner === message.member){
		looped = false
		clearqueuejs.execute(message, client, owner);
		}
		else{
			functions.pausenotowner(message, owner)
		}
	},
  
};
