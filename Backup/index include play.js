const Discord = require('discord.js');
//const client = new Discord.Client();
const clientID = 'NjkwNTY0MTk1MzQ2ODA4ODgy.XnTQZA.QBlc-an4D9F7Mh5jwKE0_mLFdxY';
const prefix = '/';
const prefix2 = '?';
const Client = require('./client/Client');
const fs = require('fs')
const client = new Client();
const play = require(`./commands/play`);
const skip = require(`./commands/skip`);
const stop = require(`./commands/stop`);
const pause = require(`./commands/pause`);
const resume = require(`./commands/resume`);
const volume = require(`./commands/volume`);
const cq = require(`./commands/clearqueue`);
const np = require(`./commands/nowplaying`);
var role = 0;
var guild = ""
var membercount = ""
var looped = false
var musicowner = ""
var musicchannel = ""
var playing = false
var message = ""

const { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const pausejs = require(`./commands/pause`);
const skipjs = require(`./commands/skip`);
const stopjs = require(`./commands/stop`);
const functions = require(`./commands/functions`);
const clearqueuejs = require(`./commands/clearqueue`);
var titles =  ""
var owner = ""
var song = ""
/*
===================================
===========BOT ON RDY EVENT========
===================================
*/
client.on('ready', () => {
	 guild = client.guilds.get("640851794288836611");
     //role = guild.roles.find("name", "Leitung👑");
	 role = guild.roles.find(leitung => leitung.name === "Leitung👑")
	 //botrole = guild.roles.find("name", "Stalker");
	 botrole = guild.roles.find(bot => bot.name === "Stalker")
	 mar = guild.roles.find(m => m.name === "Mario")
	 statchannel = guild.channels.find(msgchannel => msgchannel.name === "📊statistiken")
	 statchannel.bulkDelete(10);
	 
	 client.fetchUser("305734474308517898").then(myUser => {
		membercount = guild.memberCount
		channelcount = guild.channels.size
		rollencount = guild.roles.size
		let statEmbed = new Discord.RichEmbed()
		.setTitle("**STATISTIKEN VOM JUGEND CAFÉ**")
		.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		.setColor("0x800080")
		statEmbed.addField("**Aktuelle Memberzahl: **", membercount , true)
		statEmbed.addField("**Aktuelle Channelanzahl: **", channelcount , true)
		statEmbed.addField("**Aktuelle Rollenanzahl: **", rollencount , true)
		statEmbed.setFooter("Jugend Café Bot! Code by RazTazPaz", myUser.displayAvatarURL)
		.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		.setTimestamp()
		.setURL("https://www.paypal.me/magicaldesignstv")
		statchannel.send(statEmbed).then(sentEmbed =>  {
					sentEmbed.delete(1000000);})
 })
  console.log(`Jugend Café Master wurde gestartet, mit ${client.users.size} Nutzern und ${client.channels.size} Channeln.`)
});

/*
===================================
===========VOICE CHAN EVENT========
===================================
*/

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  	function channelleave(message, client){
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
	}
   if(playing === true){
	   if(message != ""){
	   if(musicowner != "" && musicchannel != "") {
  if(oldUserChannel === undefined && newUserChannel != undefined) {

     // User Joins a voice channel

  } else if(newUserChannel === undefined || newUserChannel != musicchannel ){
		if (musicowner != newMember.id){
		}
		else{
			if(musicowner === newMember.id && musicchannel === oldUserChannel){
				musicowner = "" 
				musicchannel = ""
				channelleave(message, client)
				playing = false
				looped = false
				}
			}
   }
   }}}
    // User leaves a voice channel
	

  
})
   


/*
===================================
===========Message EVENT===========
===================================
*/

client.on('message', msg => {
	//unmute everyone
	client.fetchUser("305734474308517898").then(myUser => {
	  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const inhalt = msg.content	
		
		
		try{

  
  if(inhalt.startsWith(prefix2)) {
	console.log(`Befehlt Startete mit "? "!Ich versuche den Musik - Befehl "` + command + `" aus zu führen!`)
	let client2 = client
	 message = msg
	if (command === 'play' || command === 'spiel')	  {
		playing = true
		looped = false
		musicchannel = message.member.voiceChannel
		musicowner = message.member.id
		let fun = client.guilds.get("640851794288836611").guild
		if(!args[0]){
			return message.channel.send("Es muss ein Youtube-Link eingegeben werden!")
		}
			if(args[0].includes("www.youtube") || args[0].includes("https://www.youtube") || args[0].includes("https://www.youtu.be")) 
			{
				execute(message, client, fun, looped);
			}else{
				return message.channel.send("Es muss ein Youtube-Link eingegeben werden!")
			 }
	}	 
	async function execute(message, client, fun, looped) {
    try {
      const args = message.content.split(" ");
      const queue = message.client.queue;
      const serverQueue = message.client.queue.get(message.guild.id);
      const voiceChannel = message.member.voiceChannel;
      if (!voiceChannel)  return functions.playnotvoice(message)

      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
		functions.playnotalkpermission(message)
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
          play(message, queueContruct.songs[0], client, looped);
		  owner = message.member
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

 function play(message, song, client, looped){
    const queue = message.client.queue;
    const guild = message.guild;
    const serverQueue = queue.get(message.guild.id);
	
    if (!song && !serverQueue.connection.dispatcher) {
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
		playing = true
		functions.playsong(message, urll, song)
		
	const dispatcher = serverQueue.connection
      .playStream(ytdl(song.url))
      .on("end", () => {
		  console.log(`finished`)
		  if(looped === false){
        serverQueue.songs.shift();
		  }
        play(message, serverQueue.songs[0], client, looped);
		owner = message.member
      })
	 
      .on("error", error => console.error(error));		
  } 
  
  function loop(message, client, looped){
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
		if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um Musik zu Loopen!');
		if (!serverQueue) return message.channel.send('Es läuft kein Song!');
		if (serverQueue.connection.dispatcher){
			
	if(looped === true){
	functions.playloopstart(message, titles) 
		
	}
	
	else{
	functions.playloopstop(message, titles)
	}
			}}}}
  }
  
		
	if (command === 'skip' || command === 'vor' || command === 'next')	  {
			playing = false
			looped = false
			skipjs.execute(message, client, owner, looped);
			
		}
	if (command === 'stop')	  {
		looped = false
		playing = false
	  stopjs.execute(message, client, owner, looped);
			
		}
	if (command === 'clear' || command === 'löschen')	  {
				looped = false
				playing = false
				clearqueuejs.execute(message, client, owner, looped);
			
		}
	if (command === 'pause')	  {
	  pausejs.execute(message, client, owner);
	  functions.pausepaused(message);
			
		}
	if (command === 'weiter' || command === "resume")	  {
			resume.execute(message, client, owner, looped);
			
		}
	if (command === 'volume' || command === "lautstärke")	  {
			volume.execute(message, client, owner, looped);
			
		}
	if (command === 'loop' || command === "schleife")	  {
		if(looped === false){
			looped = true
			play.loop(message, client, owner, looped);
			console.log(`Case: FALSE => Looped = `+ looped);
		}
		else{
			looped = false
			console.log(`Case: TRUE => Looped = `+ looped);
			play.loop(message, client, owner, looped);
		}
			
		}
	if (command === 'lied' || command === "nowplaying" || command === "np")	  {
			np.execute(message, client);
	
		}

  msg.delete();
		}
		}catch (error) {
		console.log(error);}
		
			
   /*
====================================================================================
Help
====================================================================================
*/ 
	if(msg.content.startsWith(prefix)) {
	  
	  console.log(`Befehlt Startete mit "/"!Ich versuche den Befehl "` + command + `" aus zu führen!`)
	  
	if (command === 'hilfe' || command === 'help' || command === 'h')	  {
		var help1 = client.channels.get('641042957520338945');
		var help2 = client.channels.get('641043925494398997');
			let com = msg.content.slice(prefix.length);
			let word = command
			let seite = com.slice(word.length);
			console.log(`SEITE=` + seite)
			if(isNaN(seite)){
				console.log(`Es muss eine Nummer eingegeben werden!`)
			}
			else{
		if(msg.member.roles.get("640858861661847572") ||
		   msg.member.roles.find(leitung => role.name === 'Mario')){
			//if Leitung
			//embed
			if(seite == 0 || seite == 1 || seite === ""){
				seite = 1
				console.log(`Hilfe Seite: `+ seite + ` wird für die LEITUNG Angezeigt! Angefragt von: ` + msg.author.tag)
					const embed = new Discord.RichEmbed()
					embed.setTitle("Hier ist eine Liste mit verfügbaren Befehlen für die Leitung!");
					embed.addField("Wir haben Hilfe-Channel wo dir Nutzer oder Admins helfen können!", "Besuche: " + help1)
					embed.addField("Wir haben auch einen Hilfe-Channel in dem du nur von Admins Hilfe bekommst!", "Besuche: " + help2)
					//add Commands Below here
					embed.addField("**Command 1: **", "- /hilfe <seite> - /help <seite> - /h <seite>" + "\n" + "Zeigt die Hilfe an, die Seite muss eine Zahl sein!")
					embed.addField("**Command 2: **", "- /mute <<@DISCORDUSERID>> <dauer>" + "\n" +  "Muted  einen Nutzer, Nutzer muss Getaggt sein, Dauer muss eine Zahl sein!")
					embed.addField("**Command 3: **", "- /unmute <<@DISCORDUSERID>>" + "\n" + "Entmuted den Getaggten Nutzer!")
					embed.addField("**Command 4: **", "- /delete <<@DISCORDUSERID>> <anzahl>" + "\n" + "Löscht die <Anzahl> der letzten Nachrichten des Getaggten Users!")
					embed.addField("**Command 5: **", "- /purge <anzahl>" + "\n" + "Löscht die <anzahl> letzen Nachrichten im Channel!")
					embed.addField("**Command 6: **", "- /say <Nachricht>" + "\n" + "Lässt den Bot etwas im aktuellem Channel sagen!")
					embed.addField("**Command 7: **", "- /sayin <<#DISCORDCHANNELID>> <Nachricht>" + "\n" + "Lässt den Bot etwas im Getaggtem Channel sagen!")
					embed.addField("**Command 8: **", "- /suggest <Inhalt> - /vorschlag <Inhalt>" + "\n" + "Der Befehlt muss in <#690627690012737566> benutzt werden! Der erstellte Vorschlag erscheint dann in <#640985747155058708>!")
					embed.addField("**Command 9: **", "- /add @DISCORDUSER @ROLE" + "\n" + "Fügt die getaggte Person zu der Getaggten Rolle hinzu!")
					embed.addField("**Command 10: **","- /addtemp @DISCORDUSER @ROLE <Dauer>" + "\n" + "Fügt die getaggte Person für <Dauer> zur getaggten Rolle hinzu!")
					embed.addField("**Command 11: **","- /remove @DISCORDUSER @ROLE" + "\n" + "Entfernt die getaggte Person aus der Getaggten Rolle!")
					embed.addField("Nachrichten gepostet in: " , msg.channel, true) 
					embed.setColor(0x8B0000)
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					msg.channel.send({embed});
			} //closes if seite
			else{
				console.log(`Seite 2`)
			}
		}//closes if Leitung
			else
			{
				if(msg.member.roles.get("690682850353348638")){
					//if Admin
					const embed = new Discord.RichEmbed()
					embed.setTitle("Hier ist eine Liste mit verfügbaren Befehlen für die Admins!");
					//add Commands Below here
					embed.addField("**Command 1: **", "- /hilfe <seite> - /help <seite> - /h <seite>" + "\n" + "Zeigt die Hilfe an, die Seite muss eine Zahl sein!")
					embed.addField("**Command 2: **", "- /mute <<@DISCORDUSERID>> <dauer>" + "\n" +  "Muted  einen Nutzer, Nutzer muss Getaggt sein, Dauer muss eine Zahl sein!")
					embed.addField("**Command 3: **", "- /unmute <<@DISCORDUSERID>>" + "\n" + "Entmuted den Getaggten Nutzer!")
					embed.addField("**Command 4: **", "- /delete <<@DISCORDUSERID>> <anzahl>" + "\n" + "Löscht die <Anzahl> der letzten Nachrichten des Getaggten Users!")
					embed.addField("**Command 5: **", "- /purge <anzahl>" + "\n" + "Löscht die <anzahl> letzen Nachrichten im Channel!")
					embed.addField("**Command 6: **", "- /say <Nachricht>" + "\n" + "Lässt den Bot etwas im aktuellem Channel sagen!")
					embed.addField("**Command 7: **", "- /suggest <Inhalt> - /vorschlag <Inhalt>" + "\n" + "Der Befehlt muss in <#690627690012737566> benutzt werden! Der erstellte Vorschlag erscheint dann in <#640985747155058708>!")
					embed.addField("**Command 8: **", "- /add @DISCORDUSER @ROLE" + "\n" + "Fügt die getaggte Person zu der Getaggten Rolle hinzu!")
					embed.addField("**Command 9: **","- /addtemp @DISCORDUSER @ROLE <Dauer>" + "\n" + "Fügt die getaggte Person für <Dauer> zur getaggten Rolle hinzu!")
					embed.addField("**Command 10: **","- /remove @DISCORDUSER @ROLE" + "\n" + "Entfernt die getaggte Person aus der Getaggten Rolle!")
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.addField("Nachrichten gepostet in: " , msg.channel, true) 
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					msg.channel.send({embed});
					console.log(`Hilfe wird für die ADMIS Angezeigt! Angefragt von: ` + msg.author.tag)
			}//closes if admin
			else
			{
				if(msg.member.roles.get("690682719096537099")){
					//if Mod
					const embed = new Discord.RichEmbed()
					embed.setTitle("Hier ist eine Liste mit verfügbaren Befehlen für die Mods!");
					//add Commands Below here
					embed.addField("**Command 1: **", "- /hilfe <seite> - /help <seite> - /h <seite>" + "\n" + "Zeigt die Hilfe an, die Seite muss eine Zahl sein!")
					embed.addField("**Command 2: **", "- /mute <<@DISCORDUSERID>> <dauer>" + "\n" +  "Muted  einen Nutzer, Nutzer muss Getaggt sein, Dauer muss eine Zahl sein!")
					embed.addField("**Command 3: **", "- /unmute <<@DISCORDUSERID>>" + "\n" + "Entmuted den Getaggten Nutzer!")
					embed.addField("**Command 4: **", "- /delete <<@DISCORDUSERID>> <anzahl>" + "\n" + "Löscht die <Anzahl> der letzten Nachrichten des Getaggten Users!")
					embed.addField("**Command 5: **", "- /suggest <Inhalt> - /vorschlag <Inhalt>" + "\n" + "Der Befehlt muss in <#690627690012737566> benutzt werden! Der erstellte Vorschlag erscheint dann in <#640985747155058708>!")
					embed.addField("**Command 6: **", "- /add @DISCORDUSER @ROLE" + "\n" + "Fügt die getaggte Person zu der Getaggten Rolle hinzu!")
					embed.addField("**Command 7: **","- /addtemp @DISCORDUSER @ROLE <Dauer>" + "\n" + "Fügt die getaggte Person für <Dauer> zur getaggten Rolle hinzu!")
					embed.addField("**Command 8: **","- /remove @DISCORDUSER @ROLE" + "\n" + "Entfernt die getaggte Person aus der Getaggten Rolle!")	
					embed.addField("Nachrichten gepostet in: " , msg.channel, true) 
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					msg.channel.send({embed});
					console.log(`Hilfe wird für die MODERATOREN Angezeigt! Angefragt von: ` + msg.author.tag)
			}//closes if mod
			else
			{
				if(msg.member.roles.get("690682779956150334")){
					//if sup
					const embed = new Discord.RichEmbed()
					embed.setTitle("Hier ist eine Liste mit verfügbaren Befehlen für die Supporter!");
					//add Commands Below here
					embed.addField("**Command 1: **", "- /hilfe <seite> - /help <seite> - /h <seite>" + "\n" + "Zeigt die Hilfe an, die Seite muss eine Zahl sein!")
					embed.addField("**Command 2: **", "- /mute <<@DISCORDUSERID>> <dauer>" + "\n" +  "Muted  einen Nutzer, Nutzer muss Getaggt sein, Dauer muss eine Zahl sein!")
					embed.addField("**Command 3: **", "- /unmute <<@DISCORDUSERID>>" + "\n" + "Entmuted den Getaggten Nutzer!")
					embed.addField("**Command 4: **", "- /suggest <Inhalt> - /vorschlag <Inhalt>" + "\n" + "Der Befehlt muss in <#690627690012737566> benutzt werden! Der erstellte Vorschlag erscheint dann in <#640985747155058708>!")
					embed.addField("Nachrichten gepostet in: " , msg.channel, true) 
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					msg.channel.send({embed});
					console.log(`Hilfe wird für die SUPPORTER Angezeigt! Angefragt von: ` + msg.author.tag)
			}//closes if sup
			else
			{
				if(msg.member.roles.get("690879606508748841")){
					//PREMIUM
					console.log(`Hilfe wird für die PREMUIM USER Angezeigt! Angefragt von: ` + msg.author.tag)
				}
					else{
					//@everyone
					const embed = new Discord.RichEmbed()
					embed.setTitle("Hier ist eine Liste mit verfügbaren Befehlen für euch!");
					embed.addField("Wir haben Hilfe-Channel wo dir Nutzer oder Admins helfen können!", "Besuche: " + help1)
					embed.addField("Wir haben auch einen Hilfe-Channel in dem du nur von Admins Hilfe bekommst!", "Besuche: " + help2)
					//add Commands Below here
					embed.addField("**Command 1: **", "- /hilfe <seite> - /help <seite> - /h <seite>" + "\n" + "Zeigt die Hilfe an, die Seite muss eine Zahl sein!")
					embed.addField("**Command 2: **", "- /suggest <Inhalt> - /vorschlag <Inhalt>" + "\n" + "Der Befehlt muss in <#690627690012737566> benutzt werden! Der erstellte Vorschlag erscheint dann in <#640985747155058708>!")
					embed.addField("Nachrichten gepostet in: " , msg.channel, true) 
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					msg.channel.send({embed});
					console.log(`Hilfe wird für  Normale User Angezeigt! Angefragt von: ` + msg.author.tag)
					}
			}
	}
	}
	}
			}//closes else if isNaN
	}//closes if help
  
/*
====================================================================================
Message-Deleter
====================================================================================
*/

	if (command === 'purge')	  {
	var log = client.channels.get('690565752960581672');
	if(msg.channel != client.channels.get("640941207064674363") && //intro
	   msg.channel != client.channels.get("640941306771931156") && //info
	   msg.channel != client.channels.get("640941402066518017") && //ankündigungen
	   msg.channel != client.channels.get("640941631276711958") && //regeln
	   msg.channel != client.channels.get("640967138798075914") && //rollen
	   msg.channel != client.channels.get("640985747155058708") && //suggestions
	   msg.channel != client.channels.get("690627287690772661"))   //bewerbungen
	{
		if (msg.member.roles.find(leitung => role.name === 'Leitung👑') ||
			msg.member.roles.find(leitung => role.name === 'Mario') ||
			msg.member.roles.find(leitung => role.name === 'Admin⚙️')){ 
		msg.delete();
			let com = msg.content.slice(prefix.length);
			let word = "purge"
			let anzahl = com.slice(word.length);
			console.log(`ARGS=` + anzahl)
			if(isNaN(anzahl)){
				console.log(`Es muss eine Nummer eingegeben werden!`)
				
			}
			else {
				if(anzahl == "" || anzahl == 0 || anzahl == "0"){
					console.log(`Der Nutzer: ` + msg.author.tag + ` hat versucht` + anzahl + ` Nachrichten im Channel: ` + msg.channel.name + `zu löschen!`)
				}
				else{
					if(anzahl > 20){
						console.log(`Der Nutzer: ` + msg.author.tag + ` hat versucht` + anzahl + ` Nachrichten im Channel: ` + msg.channel.name + `zu löschen! Erlaubtes Maximum = 20!`)
					}
					else{
					console.log(`Der Nutzer: ` + msg.author.tag + ` hat ` + anzahl + ` Nachrichten im Channel: ` + msg.channel.name + `gelöscht!`)
				    msg.channel.bulkDelete(anzahl);
				
					const embed = new Discord.RichEmbed()
					embed.setTitle("Message Purge wurde genutzt!");
					embed.addField("Nachrichten in: " , msg.channel, true) 
					embed.addField("Gelöscht von: " , "<@"+msg.author.id+">", true)
					embed.setColor(0xb34141)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					log.send({embed});
		}}}}
		else 
		{
			console.log(`Der User: ` + msg.author.tag + ` hat versucht /purge im Channel: ` + msg.channel.name + ` zu benutzen!`)
		
		}
	 }
	 else {
		 if (msg.channel != client.channels.get("677151384931663882") || msg.channel != client.channels.get("677151721939795968") || msg.channel != client.channels.get("676928770392850433") || msg.channel != client.channels.get("676962521420136498")){
		
				console.log(`Der User: ` + msg.author.tag + ` hat versucht /purge im Channel: ` + msg.channel.name + ` zu benutzen!`)
		
		 }
	 }
  };
  /*
====================================================================================
Message-Deleter
====================================================================================
*/
  
  if(command === "delete"){
	 if(msg.channel != client.channels.get("640941207064674363") && //intro
	   msg.channel != client.channels.get("640941306771931156") && //info
	   msg.channel != client.channels.get("640941402066518017") && //ankündigungen
	   msg.channel != client.channels.get("640941631276711958") && //regeln
	   msg.channel != client.channels.get("640967138798075914") && //rollen
	   msg.channel != client.channels.get("640985747155058708") && //suggestions
	   msg.channel != client.channels.get("690627287690772661"))   //bewerbungen
	{
		if (msg.member.roles.find(leitung => role.name === 'Leitung👑') ||
			msg.member.roles.find(leitung => role.name === 'Mario') ||
			msg.member.roles.find(leitung => role.name === 'Admin⚙️')   ||
			msg.member.roles.find(leitung => role.name === 'Moderator🛠')){ 
			const user = msg.mentions.users.first();
// Parse Amount
const amount = !!parseInt(msg.content.split(' ')[1]) ? parseInt(msg.content.split(' ')[1]) : parseInt(msg.content.split(' ')[2])
if (!amount) return msg.reply('Must specify an amount to delete!');
if (!amount && !user) return msg.reply('Must specify a user and amount, or just an amount, of messages to purge!');
// Fetch 10 messages (will be filtered and lowered up to max amount requested)
msg.channel.fetchMessages({
 limit: 10,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
 console.log(`Der Nutzer` + msg.author.tag + `hat im Channel: ` + msg.channel.name + `,` + amount + `Nachrichten von: ` + user + `gelöscht!`)
});
  }
  else{
	 console.log(`Der User: ` + msg.author.tag + ` hat versucht /delete im Channel: ` + msg.channel.name + ` zu benutzen!`) 
  }
  }
  console.log(`Der User: ` + msg.author.tag + ` hat versucht /delete im Channel: ` + msg.channel.name + ` zu benutzen!`) 
  msg.delete();
  }
  
/*
====================================================================================
Say
====================================================================================
*/	
		if (command === 'say')	  {
			if (msg.member.roles.find(leitung => role.name === 'Leitung👑') || 
				msg.member.roles.find(leitung => role.name === 'Mario') ||
				msg.member.roles.find(leitung => role.name === 'Admin⚙️')){ 
				let inhalt = msg.content; 
				let comm = "/say "
				const nachricht = msg.content.slice(comm.length);
				msg.delete();
				msg.channel.send(nachricht);
			}
			else{
				msg.channel.send("Fehlende Berechtigung! " + msg.author.tag);
			}
	}
	/*
====================================================================================
Say-In
====================================================================================
*/
	if (command === 'sayin')	  {
		
			if (msg.member.roles.find(leitung => role.name === 'Leitung👑') ||
				msg.member.roles.find(leitung => role.name === 'Mario')){
				msg.delete();
				let inhalt = msg.content; 
				let comm = "/say "
				var cut = msg.content.slice(comm.length).split(" ");
				let chan = cut[1]
				const prex = "<#" 
				let chann = cut[1].slice(prex.length, -1);
				//let chann2 = chann.slice(sufx.length);
				let chenne = client.channels.get(chann);
				let pre = msg.content.slice(comm.length);
				let nachricht = pre.slice(chan.length + 2);
				console.log(`Der Bot hat eine Custom Message in den Channel:` + chenne + `gesendet. Inhalt:` + nachricht + ` ,ID des Channels: ` + chann)
				chenne.send(nachricht);
			}
			else{
				if(msg.author != client.user){
				msg.chenne.send("Fehlende Berechtigung! " + msg.author.tag);
			}}
	}
	
	
	
/*
====================================================================================
Suggest
====================================================================================
*/	
		if (command === 'suggest' || command === "vorschlag")	  {
			let msgchannel = guild.channels.find(msgchannel => msgchannel.name === "suggestion-erstellen")
			let postchannel = guild.channels.find(postchannel => postchannel.name ==="🙏suggestions")
			if(msg.channel === msgchannel){
				let inhalt = msg.content; 
				if(command === "suggest"){
					comm = "/suggest"
				}
				else{
					comm = "/vorschlag"
				}
				const nachricht = msg.content.slice(comm.length);
				console.log(`Der Nutzer:` + msg.author.tag + `hat: ` + nachricht + ` ,Vorgeschlagen!`)
				msg.delete();
				const embed = new Discord.RichEmbed()
					embed.setTitle("Hier ist ein Vorschlag!");
					//add Commands Below here
					embed.addField("**Der Nutzer: **", msg.author + ", hat folgendes vorgeschlagen!")
					embed.addField("**Vorschlag: **", nachricht)
					embed.addField("Danke für deinen Vorschlag!", "Nun darf die Community Voten, ob der Vorschlag gut oder schlecht ist!")
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					postchannel.send(embed).then(sentEmbed =>  {
					sentEmbed.react(msg.guild.emojis.find(reactup => reactup.name === "upvote"))
					sentEmbed.react(msg.guild.emojis.find(reactdown => reactdown.name === "downvote"))})
			}
			else{
				msg.channel.send("Falscher Channel für eine Suggestion! " + msg.author.tag +`Channel: ` + msg.channel);
			}
	}
/*
===================================
===========   Muter		===========
===================================
*/	
	if (command === 'mute')	  {
		
			if (msg.member.roles.find(leitung => role.name === 'Leitung👑') ||
				msg.member.roles.find(leitung => role.name === 'Mario') ||
				msg.member.roles.find(leitung => role.name === 'Admin⚙️')   ||
				msg.member.roles.find(leitung => role.name === 'Moderator🛠')||
				msg.member.roles.find(leitung => role.name === 'Support')){
				msg.delete();
				let comm = "/mute "
				var cut = msg.content.slice(comm.length).split(" ");
				let dauer = cut[1]
				//let muterole = msg.guild.roles.find(`name`, "Muted");
				let muterole = msg.guild.roles.find(mute => mute.name === "Muted")
				let member = msg.mentions.members.first();
				
				member.addRole(muterole, `Muted by ${msg.author.tag} for ${dauer} minutes.`);
				console.log(`USER: ` + member + `Dauer: ` + dauer)
				  setTimeout(() => {
				  member.removeRole(muterole, `User Entmuted.`);
                  }, dauer * 60000);
				console.log(`Der Nutzer:` + member + `wurde für: ` + dauer + ` ,gemutet!`)
					const embed = new Discord.RichEmbed()
					embed.setTitle("MUTED!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Gemuted von: " , "<@"+msg.author.id+">", true)
					embed.addField("Für (dauer in Minuten): " , "         " + dauer, true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					msg.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(msg.guild.emojis.find(reactup => reactup.name === "mute")) })
			}
			else{
				if(msg.author != client.user){
				msg.channel.send("Fehlende Berechtigung! " + msg.author.tag);
			}}
	}
		if (command === 'unmute')	  {
		
			if (msg.member.roles.find(leitung => role.name === 'Leitung👑') ||
				msg.member.roles.find(leitung => role.name === 'Mario') ||
				msg.member.roles.find(leitung => role.name === 'Admin⚙️')   ||
				msg.member.roles.find(leitung => role.name === 'Moderator🛠')||
				msg.member.roles.find(leitung => role.name === 'Support')){
				msg.delete();
				let muterole = msg.guild.roles.find(mute => mute.name === "Muted")
				let member = msg.mentions.members.first();
				
				member.removeRole(muterole, `User Entmuted.`);
				console.log(`Der Nutzer:` + member + `wurde entmutet!`)
				const embed = new Discord.RichEmbed()
					embed.setTitle("ENTMUTED!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde entmuted von: " , "<@"+msg.author.id+">", true)
					embed.setColor(0x1e6129)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					msg.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(msg.guild.emojis.find(reactup => reactup.name === "unmute")) })
			}
			else{
				if(msg.author != client.user){
				msg.channel.send("Fehlende Berechtigung! " + msg.author);
			}}
	}
/*
===================================
===========   Role Adder   ========
===================================
*/	
	if (command === 'addtemp')	  {
		
			if (msg.member.roles.find(leitung => role.name === 'Leitung👑') ||
				msg.member.roles.find(leitung => role.name === 'Mario') ||
				msg.member.roles.find(leitung => role.name === 'Admin⚙️')){
				msg.delete();
				let comm = "/addtemp "
				var cut = msg.content.slice(comm.length).split(" ");
				//let newrole = cut[1]
				let dauer = cut[2]
				//let newrole = msg.guild.roles.find(mute => mute.name === x)
				let member = msg.mentions.members.first();
				let newrole = msg.mentions.roles.first();
				console.log(`NEW ROLE:` + newrole)
				if(newrole != "<@&640858861661847572>" &&
				  newrole != "<@&640858638159839253>" &&
				  newrole != "<@&690682850353348638>" &&
				  newrole != "<@&690602986170220595>" &&
				  newrole != "<@&690565273283199076>") {
				 // newrole != msg.member.roles.find(leitung => role.name === 'Big Brother')){
				member.addRole(newrole, `Added the Role ${newrole} by ${msg.author.tag} for ${member} .`);
				console.log(`Added the Role: ` + newrole + `to: ` + member + `by: `+ msg.author.tag + `für :` + dauer)
				  setTimeout(() => {
				  member.removeRole(newrole, `User aus der Temp-Role entfernt.`);
                  }, dauer * 60000);
					const embed = new Discord.RichEmbed()
					embed.setTitle("TEMP-ROLLE HINZUGEFÜGT!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde von: " , "<@"+msg.author.id+">", true)
					embed.addField("Zu der Rolle: " , newrole , true)
					embed.addField("Für (dauer in Minuten): " , "         " + dauer, true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					msg.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(msg.guild.emojis.find(reactup => reactup.name === "glass")) })
				}
				else{
					console.log(`Tried to Add the Role: ` + newrole + `to: ` + member + `by: `+ msg.author.tag + `für :` + dauer)
				}
					}
			else{
				if(msg.author != client.user){
				msg.channel.send("Fehlende Berechtigung! " + msg.author.tag);
			}}
	}	
	
		if (command === 'add')	  {
		
			if (msg.member.roles.find(leitung => leitung.name === 'Leitung👑') ||
				msg.member.roles.find(mario => mario.name === 'Mario') ||
				msg.member.roles.find(admin => admin.name === 'Admin⚙️')){
				msg.delete();
				let comm = "/add "
				var cut = msg.content.slice(comm.length).split(" ");
				let member = msg.mentions.members.first();
				let newrole = msg.mentions.roles.first();
				console.log(`NEW ROLE:` + newrole)
				if(newrole != "<@&640858861661847572>" &&
				  newrole != "<@&640858638159839253>" &&
				  newrole != "<@&690682850353348638>" &&
				  newrole != "<@&690602986170220595>" &&
				  newrole != "<@&690565273283199076>") {
				member.addRole(newrole, `Added the Role ${newrole} by ${msg.author.tag} for ${member} .`);
				console.log(`Case 1: Added the Role: ` + newrole + `to: ` + member + `by: `+ msg.author.tag)
					const embed = new Discord.RichEmbed()
					embed.setTitle("PERM-ROLLE HINZUGEFÜGT!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde von: " , "<@"+msg.author.id+">", true)
					embed.addField("Zu der Rolle: " , newrole , true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					msg.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(msg.guild.emojis.find(reactup => reactup.name === "glass")) })
				}
				else{
					console.log(`Tried to Add the Role: ` + newrole + `to: ` + member + `by: `+ msg.author.tag)
					
				}
					}
			else{
				if (msg.member.roles.find(leitung => leitung.name === 'Moderator🛠')){
				msg.delete();
				let comm = "/add "
				var cut = msg.content.slice(comm.length).split(" ");
				let member = msg.mentions.members.first();
				let newrole = msg.mentions.roles.first();
				console.log(`NEW ROLE:` + newrole)
				if(newrole != "<@&640858861661847572>" && 
				  newrole != "<@&640858638159839253>" &&		
				  newrole != "<@&690682850353348638>" &&
				  newrole != "<@&690602986170220595>" &&
				  newrole != msg.member.roles.find(leitung => role.name === 'Moderator🛠') &&
				  newrole != "<@&690682719096537099>" &&
				  newrole != "<@&690682779956150334>" &&
				  newrole != "<@&691060585487532104>" &&
				  newrole != "<@&691055203318890497>" &&
				  newrole != "<@&690565273283199076>") {
				member.addRole(newrole, `Added the Role ${newrole} by ${msg.author.tag} for ${member} .`);
				console.log(`Case 2: Added the Role: ` + newrole + `to: ` + member + `by: `+ msg.author.tag)
					const embed = new Discord.RichEmbed()
					embed.setTitle("PERM-ROLLE HINZUGEFÜGT!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde von: " , "<@"+msg.author.id+">", true)
					embed.addField("Zu der Rolle: " , newrole , true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					msg.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(msg.guild.emojis.find(reactup => reactup.name === "glass"))
				  })
				  }
				  console.log(`Tried to Add the Role: ` + newrole + `to: ` + member + `by: `+ msg.author.tag)
				}
				else{
				if(msg.author != client.user){
				msg.channel.send("Fehlende Berechtigung! " + msg.author.tag);
				}}
	}	}
	
	if (command === 'remove')	  {
		
			if (msg.member.roles.find(leitung => role.name === 'Leitung👑') ||
				msg.member.roles.find(leitung => role.name === 'Mario') ||
				msg.member.roles.find(leitung => role.name === 'Admin⚙️')){
				msg.delete();
				let comm = "/addtemp "
				var cut = msg.content.slice(comm.length).split(" ");
				let member = msg.mentions.members.first();
				let newrole = msg.mentions.roles.first();
				console.log(`NEW ROLE:` + newrole)
				if(newrole != "<@&640858861661847572>" &&
				  newrole != "<@&640858638159839253>" &&
				  newrole != "<@&690682850353348638>" &&
				  newrole != "<@&690602986170220595>" &&
				  newrole != "<@&690565273283199076>") {
				member.removeRole(newrole, `Added the Role ${newrole} by ${msg.author.tag} for ${member} .`);
				console.log(`Added the Role: ` + newrole + `to: ` + member + `by: `+ msg.author.tag)
					const embed = new Discord.RichEmbed()
					embed.setTitle("PERM-ROLLE ENTFERNT!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde von: " , "<@"+msg.author.id+">", true)
					embed.addField("Aus der Rolle Entfernt: " , newrole , true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					msg.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(msg.guild.emojis.find(reactup => reactup.name === "sad")) })
				}
				else{
					console.log(`Tried to Add the Role: ` + newrole + `to: ` + member + `by: `+ msg.author.tag)
				}
					}
			else{
				if(msg.author != client.user){
				msg.channel.send("Fehlende Berechtigung! " + msg.author.tag);
			}}
	}
	}
	}); //closes my User
}); //closes on Message


/*
===================================
===========COLOUR UPDATE===========
===================================
*/

client.setInterval(colourupdate,60000);
 async function colourupdate(){
	 //"#420542"
	const col = [ "#7e9126", "#43a836", "#40aa93", "#6dd8ce", "#941911", "#13588f", "#711377", "#c28316", "#2ea019", "#2ea019", "#8f0a0a", "#8bc082", "#ffd600", "#ccbe64", "#138d9c", "#43cdda", "#0d535a", "#141679", "#3136c7", "#c731c0", "#d45746"]
	const pas = ["#fd9a9a", "#fdd09a", "#d6fd9a", "#9afda9", "#9afdfa", "#a09afd", "#f79afd"]
	var leng = col.length;
	var lengpas = pas.length;
		function RandomZahl(max) {
			return Math.floor(Math.random() * Math.floor(max));
				}
			let num = RandomZahl(leng)
			
			function RandomZahl2(max) {
			return Math.floor(Math.random() * Math.floor(max));
				}
			let num2 = RandomZahl2(lengpas)
			function RandomZahl3(max) {
			return Math.floor(Math.random() * Math.floor(max));
				}
			let num3 = RandomZahl3(lengpas)
	role.setColor(col[num]);
	botrole.setColor(col[num2]);
	mar.setColor(pas[num3]);
 }
/*
====================================
=====Channel ======= Stalk==========
====================================
*/
client.on("messageDelete", (messageDelete) => {
	client.fetchUser("305734474308517898").then(myUser => {

	var user = "<@305734474308517898>";
	var dellog = client.channels.get('690565752960581672'); //bot spam
	var str = messageDelete.content;
if (messageDelete.author != client.user){
	if(client.channels.get('640851794771050497')!= messageDelete.channel && client.channels.get('690565752960581672')!= messageDelete.channel){
		if(Boolean(str)){
  
  let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**GELÖSCHTE NACHRICHT**")
  .setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
  .setColor("#fc3c3c")
  DeleteEmbed.addField("Autor", "<@"+messageDelete.author.id+">", true)
  DeleteEmbed.addField("Channel", messageDelete.channel, true)
  DeleteEmbed.addField("Nachricht", messageDelete.content)
  DeleteEmbed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
  .setTimestamp()
  .setURL("https://www.paypal.me/magicaldesignstv")
  dellog.send(DeleteEmbed);
	}
	//wenn nachricht = BILD
	else {
		let DeleteEmbed = new Discord.RichEmbed()
		.setTitle("**GELÖSCHTES BILD**")
		.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		.setColor("#fc3c3c")
		DeleteEmbed.addField("Autor",	"<@"+messageDelete.author.id+">", true)
		DeleteEmbed.addField("Channel", messageDelete.channel, true)
		DeleteEmbed.addField("Nachricht", "Deleted Message was a Picture!")
		DeleteEmbed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
		.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		.setTimestamp()
		.setURL("https://www.paypal.me/magicaldesignstv")
		dellog.send(DeleteEmbed);
	}
}}
});
});

/*
=====================================================
====================EDIT LOGGER======================
=====================================================
*/
client.on("messageUpdate", (newmessage, oldmessage) => {
	client.fetchUser("305734474308517898").then(myUser => {
	var user = "<@305734474308517898>";
	var editlog = client.channels.get('690565752960581672'); //bot spam
	var str = newmessage.content;
	var str2 = oldmessage.content;
if (newmessage.author == client.user || oldmessage.author == client.user){
}
else{
	
	if(client.channels.get('640851794771050497')!= newmessage.channel && client.channels.get('690565752960581672')!= newmessage.channel){
		
		if(Boolean(str) && Boolean(str2)){
			
  function oldmsg(){
  let UpdateEmbed = new Discord.RichEmbed()
  .setTitle("**NEUE NACHRICHT**")
  .setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
  .setColor("#fc3c3c")
  UpdateEmbed.addField("Autor", "<@"+oldmessage.author.id+">", true)
  UpdateEmbed.addField("Channel", oldmessage.channel, true)
  UpdateEmbed.addField("Message", oldmessage.content)
  UpdateEmbed.setFooter("Jugend Café Bot! Code by RazTazPaz", myUser.displayAvatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
  .setTimestamp()
  .setURL("https://www.paypal.me/magicaldesignstv")
  editlog.send(UpdateEmbed);
  }
  function newmsg(){
  let UpdateEmbed = new Discord.RichEmbed()
  .setTitle("**ALTE NACHRICHT**")
  .setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
  .setColor("#fc3c3c")
  UpdateEmbed.addField("Autor", "<@"+newmessage.author.id+">", true)
  UpdateEmbed.addField("Channel", newmessage.channel, true)
  UpdateEmbed.addField("Nachricht", newmessage.content)
  UpdateEmbed.setFooter("Jugend Café Bot! Code by RazTazPaz", myUser.displayAvatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
  .setTimestamp()
  .setURL("https://www.paypal.me/magicaldesignstv")
  editlog.send(UpdateEmbed);
	}
	oldmsg();
	newmsg();
		}
	//wenn nachricht = BILD
	else {
		let UpdateEmbed = new Discord.RichEmbed()
		.setTitle("**Bearbeitete Nachricht war ein Bild oder Embed!**")
		.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		.setColor("#fc3c3c")
		UpdateEmbed.addField("Author", "<@"+newmessage.author.id+">", true)
		UpdateEmbed.addField("Channel", newmessage.channel, true)
		UpdateEmbed.addField("Nachricht", "Bearbeitete Nachricht war ein Bild oder Embed, inhalt kann nicht gezeigt werden!")
		UpdateEmbed.setFooter("Jugend Café Bot! Code by RazTazPaz", myUser.displayAvatarURL)
		.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		.setTimestamp()
		.setURL("https://www.paypal.me/magicaldesignstv")
		editlog.send(UpdateEmbed);
	}
}}
});
});
/*
====================================
=====Statistik ======= Update=======
====================================
*/
client.setInterval(statisticupdate,1000000);
 async function statisticupdate(){
	 client.fetchUser("305734474308517898").then(myUser => {
		 
		let statchannel = guild.channels.find(msgchannel => msgchannel.name === "📊statistiken")
		membercount = guild.memberCount
		channelcount = guild.channels.size
		rollencount = guild.roles.size
		let statEmbed = new Discord.RichEmbed()
		.setTitle("**STATISTIKEN VOM JUGEND CAFÉ**")
		.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		.setColor("0x800080")
		statEmbed.addField("**Aktuelle Memberzahl: **", membercount , true)
		statEmbed.addField("**Aktuelle Channelanzahl: **", channelcount , true)
		statEmbed.addField("**Aktuelle Rollenanzahl: **", rollencount , true)
		statEmbed.setFooter("Jugend Café Bot! Code by RazTazPaz", myUser.displayAvatarURL)
		.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		.setTimestamp()
		.setURL("https://www.paypal.me/magicaldesignstv")
		statchannel.send(statEmbed).then(sentEmbed =>  {
					sentEmbed.delete(1000000);})
 })
 }

/*
====================================
=====Status ======= Update==========
====================================
*/

client.setInterval(activityupdate,10000);
 async function activityupdate(){
      
		var restart = new Date();
		var restartuk = restart.getHours();
		var hr = restartuk + 1;
		var min = restart.getMinutes();
		if(min === 0){
			var min2 = "00";
		}
		else 
		{
			var min2 = min
		}
		    status = ["1", "2", "/hilfe", "Jugend Café", "Viel Spaß", "Ladet eure Freunde ein!" , "Wir suchen Teammitglieder!"]
			var len = status.length;
			function RandomZahl(max) {
			return Math.floor(Math.random() * Math.floor(max));
				}
			let numstatus = RandomZahl(len)
			if(status[numstatus] === "1"){
				if(min2 < 10 && min2 != "00"){
					min2 = "0" + min2;
				}
			client.user.setActivity("Uhrzeit: " + hr + ":" + min2 , {type: 'WATCHING' } );
			}
			else {
				if(status[numstatus] === "2"){
				client.user.setActivity("Memberanzahl: " + membercount, {type: 'WATCHING' } );
				}
			else{
			client.user.setActivity(status[numstatus] , {type: 'WATCHING' } );
			}
			client.user.setStatus("online");
 }
 }
  //closed my user fetch
client.login(clientID);