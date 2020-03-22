const Discord = require('discord.js');
const client = new Discord.Client();
const clientID = 'NjkwNTY0MTk1MzQ2ODA4ODgy.XnTQZA.QBlc-an4D9F7Mh5jwKE0_mLFdxY';
const prefix = '/';
var role = 0;
var guild = ""
var membercount = ""
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

function timeFormat(time) {   
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = Math.round(time % 60);
  var ret = "";
  if (hrs > 1) {
    ret += "" + hrs + " Hrs " + (mins < 10 ? "0" : "");
  } else
  if (hrs > 0) {
    ret += "" + hrs + " Hr " + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + " Mins " + (secs < 10 ? "0" : "");
  ret += "" + secs + " Secs";
  return ret;
};

/*
===================================
===========Message EVENT===========
===================================
*/

client.on('message', message => {
	//unmute everyone
	client.fetchUser("305734474308517898").then(myUser => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
   /*
====================================================================================
Help
====================================================================================
*/ 
  
	if (command === 'hilfe' || command === 'help' || command === 'h')	  {
		var help1 = client.channels.get('641042957520338945');
		var help2 = client.channels.get('641043925494398997');
			let com = message.content.slice(prefix.length);
			let word = command
			let seite = com.slice(word.length);
			console.log(`SEITE=` + seite)
			if(isNaN(seite)){
				console.log(`Es muss eine Nummer eingegeben werden!`)
			}
			else{
		if(message.member.roles.get("640858861661847572") ||
		   message.member.roles.find(leitung => role.name === 'Mario')){
			//if Leitung
			//embed
			if(seite == 0 || seite == 1 || seite === ""){
				seite = 1
				console.log(`Hilfe Seite: `+ seite + ` wird für die LEITUNG Angezeigt! Angefragt von: ` + message.author.tag)
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
					embed.addField("Nachrichten gepostet in: " , message.channel, true) 
					embed.setColor(0x8B0000)
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					message.channel.send({embed});
			} //closes if seite
			else{
				console.log(`Seite 2`)
			}
		}//closes if Leitung
			else
			{
				if(message.member.roles.get("690682850353348638")){
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
					embed.addField("Nachrichten gepostet in: " , message.channel, true) 
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					message.channel.send({embed});
					console.log(`Hilfe wird für die ADMIS Angezeigt! Angefragt von: ` + message.author.tag)
			}//closes if admin
			else
			{
				if(message.member.roles.get("690682719096537099")){
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
					embed.addField("Nachrichten gepostet in: " , message.channel, true) 
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					message.channel.send({embed});
					console.log(`Hilfe wird für die MODERATOREN Angezeigt! Angefragt von: ` + message.author.tag)
			}//closes if mod
			else
			{
				if(message.member.roles.get("690682779956150334")){
					//if sup
					const embed = new Discord.RichEmbed()
					embed.setTitle("Hier ist eine Liste mit verfügbaren Befehlen für die Supporter!");
					//add Commands Below here
					embed.addField("**Command 1: **", "- /hilfe <seite> - /help <seite> - /h <seite>" + "\n" + "Zeigt die Hilfe an, die Seite muss eine Zahl sein!")
					embed.addField("**Command 2: **", "- /mute <<@DISCORDUSERID>> <dauer>" + "\n" +  "Muted  einen Nutzer, Nutzer muss Getaggt sein, Dauer muss eine Zahl sein!")
					embed.addField("**Command 3: **", "- /unmute <<@DISCORDUSERID>>" + "\n" + "Entmuted den Getaggten Nutzer!")
					embed.addField("**Command 4: **", "- /suggest <Inhalt> - /vorschlag <Inhalt>" + "\n" + "Der Befehlt muss in <#690627690012737566> benutzt werden! Der erstellte Vorschlag erscheint dann in <#640985747155058708>!")
					embed.addField("Nachrichten gepostet in: " , message.channel, true) 
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					message.channel.send({embed});
					console.log(`Hilfe wird für die SUPPORTER Angezeigt! Angefragt von: ` + message.author.tag)
			}//closes if sup
			else
			{
				if(message.member.roles.get("690879606508748841")){
					//PREMIUM
					console.log(`Hilfe wird für die PREMUIM USER Angezeigt! Angefragt von: ` + message.author.tag)
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
					embed.addField("Nachrichten gepostet in: " , message.channel, true) 
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					message.channel.send({embed});
					console.log(`Hilfe wird für  Normale User Angezeigt! Angefragt von: ` + message.author.tag)
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
	if(message.channel != client.channels.get("640941207064674363") && //intro
	   message.channel != client.channels.get("640941306771931156") && //info
	   message.channel != client.channels.get("640941402066518017") && //ankündigungen
	   message.channel != client.channels.get("640941631276711958") && //regeln
	   message.channel != client.channels.get("640967138798075914") && //rollen
	   message.channel != client.channels.get("640985747155058708") && //suggestions
	   message.channel != client.channels.get("690627287690772661"))   //bewerbungen
	{
		if (message.member.roles.find(leitung => role.name === 'Leitung👑') ||
			message.member.roles.find(leitung => role.name === 'Mario') ||
			message.member.roles.find(leitung => role.name === 'Admin⚙️')){ 
		message.delete();
			let com = message.content.slice(prefix.length);
			let word = "purge"
			let anzahl = com.slice(word.length);
			console.log(`ARGS=` + anzahl)
			if(isNaN(anzahl)){
				console.log(`Es muss eine Nummer eingegeben werden!`)
				
			}
			else {
				if(anzahl == "" || anzahl == 0 || anzahl == "0"){
					console.log(`Der Nutzer: ` + message.author.tag + ` hat versucht` + anzahl + ` Nachrichten im Channel: ` + message.channel.name + `zu löschen!`)
				}
				else{
					if(anzahl > 20){
						console.log(`Der Nutzer: ` + message.author.tag + ` hat versucht` + anzahl + ` Nachrichten im Channel: ` + message.channel.name + `zu löschen! Erlaubtes Maximum = 20!`)
					}
					else{
					console.log(`Der Nutzer: ` + message.author.tag + ` hat ` + anzahl + ` Nachrichten im Channel: ` + message.channel.name + `gelöscht!`)
				    message.channel.bulkDelete(anzahl);
				
					const embed = new Discord.RichEmbed()
					embed.setTitle("Message Purge wurde genutzt!");
					embed.addField("Nachrichten in: " , message.channel, true) 
					embed.addField("Gelöscht von: " , "<@"+message.author.id+">", true)
					embed.setColor(0xb34141)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					log.send({embed});
		}}}}
		else 
		{
			console.log(`Der User: ` + message.author.tag + ` hat versucht /purge im Channel: ` + message.channel.name + ` zu benutzen!`)
		
		}
	 }
	 else {
		 if (message.channel != client.channels.get("677151384931663882") || message.channel != client.channels.get("677151721939795968") || message.channel != client.channels.get("676928770392850433") || message.channel != client.channels.get("676962521420136498")){
		
				console.log(`Der User: ` + message.author.tag + ` hat versucht /purge im Channel: ` + message.channel.name + ` zu benutzen!`)
		
		 }
	 }
  };
  /*
====================================================================================
Message-Deleter
====================================================================================
*/
  
  if(command === "delete"){
	 if(message.channel != client.channels.get("640941207064674363") && //intro
	   message.channel != client.channels.get("640941306771931156") && //info
	   message.channel != client.channels.get("640941402066518017") && //ankündigungen
	   message.channel != client.channels.get("640941631276711958") && //regeln
	   message.channel != client.channels.get("640967138798075914") && //rollen
	   message.channel != client.channels.get("640985747155058708") && //suggestions
	   message.channel != client.channels.get("690627287690772661"))   //bewerbungen
	{
		if (message.member.roles.find(leitung => role.name === 'Leitung👑') ||
			message.member.roles.find(leitung => role.name === 'Mario') ||
			message.member.roles.find(leitung => role.name === 'Admin⚙️')   ||
			message.member.roles.find(leitung => role.name === 'Moderator🛠')){ 
			const user = message.mentions.users.first();
// Parse Amount
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
// Fetch 10 messages (will be filtered and lowered up to max amount requested)
message.channel.fetchMessages({
 limit: 10,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
 console.log(`Der Nutzer` + message.author.tag + `hat im Channel: ` + message.channel.name + `,` + amount + `Nachrichten von: ` + user + `gelöscht!`)
});
  }
  else{
	 console.log(`Der User: ` + message.author.tag + ` hat versucht /delete im Channel: ` + message.channel.name + ` zu benutzen!`) 
  }
  }
  console.log(`Der User: ` + message.author.tag + ` hat versucht /delete im Channel: ` + message.channel.name + ` zu benutzen!`) 
  message.delete();
  }
  
/*
====================================================================================
Say
====================================================================================
*/	
		if (command === 'say')	  {
			if (message.member.roles.find(leitung => role.name === 'Leitung👑') || 
				message.member.roles.find(leitung => role.name === 'Mario') ||
				message.member.roles.find(leitung => role.name === 'Admin⚙️')){ 
				let inhalt = message.content; 
				let comm = "/say "
				const nachricht = message.content.slice(comm.length);
				message.delete();
				message.channel.send(nachricht);
			}
			else{
				message.channel.send("Fehlende Berechtigung! " + message.author.tag);
			}
	}
	/*
====================================================================================
Say-In
====================================================================================
*/
	if (command === 'sayin')	  {
		
			if (message.member.roles.find(leitung => role.name === 'Leitung👑') ||
				message.member.roles.find(leitung => role.name === 'Mario')){
				message.delete();
				let inhalt = message.content; 
				let comm = "/say "
				var cut = message.content.slice(comm.length).split(" ");
				let chan = cut[1]
				const prex = "<#" 
				let chann = cut[1].slice(prex.length, -1);
				//let chann2 = chann.slice(sufx.length);
				let chenne = client.channels.get(chann);
				let pre = message.content.slice(comm.length);
				let nachricht = pre.slice(chan.length + 2);
				console.log(`Der Bot hat eine Custom Message in den Channel:` + chenne + `gesendet. Inhalt:` + nachricht + ` ,ID des Channels: ` + chann)
				chenne.send(nachricht);
			}
			else{
				if(message.author != client.user){
				message.chenne.send("Fehlende Berechtigung! " + message.author.tag);
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
			if(message.channel === msgchannel){
				let inhalt = message.content; 
				if(command === "suggest"){
					comm = "/suggest"
				}
				else{
					comm = "/vorschlag"
				}
				const nachricht = message.content.slice(comm.length);
				console.log(`Der Nutzer:` + message.author.tag + `hat: ` + nachricht + ` ,Vorgeschlagen!`)
				message.delete();
				const embed = new Discord.RichEmbed()
					embed.setTitle("Hier ist ein Vorschlag!");
					//add Commands Below here
					embed.addField("**Der Nutzer: **", message.author + ", hat folgendes vorgeschlagen!")
					embed.addField("**Vorschlag: **", nachricht)
					embed.addField("Danke für deinen Vorschlag!", "Nun darf die Community Voten, ob der Vorschlag gut oder schlecht ist!")
					embed.setColor(0x8B0000)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					postchannel.send(embed).then(sentEmbed =>  {
					sentEmbed.react(message.guild.emojis.find(reactup => reactup.name === "upvote"))
					sentEmbed.react(message.guild.emojis.find(reactdown => reactdown.name === "downvote"))})
			}
			else{
				message.channel.send("Falscher Channel für eine Suggestion! " + message.author.tag +`Channel: ` + message.channel);
			}
	}
/*
===================================
===========   Muter		===========
===================================
*/	
	if (command === 'mute')	  {
		
			if (message.member.roles.find(leitung => role.name === 'Leitung👑') ||
				message.member.roles.find(leitung => role.name === 'Mario') ||
				message.member.roles.find(leitung => role.name === 'Admin⚙️')   ||
				message.member.roles.find(leitung => role.name === 'Moderator🛠')||
				message.member.roles.find(leitung => role.name === 'Support')){
				message.delete();
				let comm = "/mute "
				var cut = message.content.slice(comm.length).split(" ");
				let dauer = cut[1]
				//let muterole = message.guild.roles.find(`name`, "Muted");
				let muterole = message.guild.roles.find(mute => mute.name === "Muted")
				let member = message.mentions.members.first();
				
				member.addRole(muterole, `Muted by ${message.author.tag} for ${dauer} minutes.`);
				console.log(`USER: ` + member + `Dauer: ` + dauer)
				  setTimeout(() => {
				  member.removeRole(muterole, `User Entmuted.`);
                  }, dauer * 60000);
				console.log(`Der Nutzer:` + member + `wurde für: ` + dauer + ` ,gemutet!`)
					const embed = new Discord.RichEmbed()
					embed.setTitle("MUTED!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Gemuted von: " , "<@"+message.author.id+">", true)
					embed.addField("Für (dauer in Minuten): " , "         " + dauer, true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(message.guild.emojis.find(reactup => reactup.name === "mute")) })
			}
			else{
				if(message.author != client.user){
				message.channel.send("Fehlende Berechtigung! " + message.author.tag);
			}}
	}
		if (command === 'unmute')	  {
		
			if (message.member.roles.find(leitung => role.name === 'Leitung👑') ||
				message.member.roles.find(leitung => role.name === 'Mario') ||
				message.member.roles.find(leitung => role.name === 'Admin⚙️')   ||
				message.member.roles.find(leitung => role.name === 'Moderator🛠')||
				message.member.roles.find(leitung => role.name === 'Support')){
				message.delete();
				let muterole = message.guild.roles.find(mute => mute.name === "Muted")
				let member = message.mentions.members.first();
				
				member.removeRole(muterole, `User Entmuted.`);
				console.log(`Der Nutzer:` + member + `wurde entmutet!`)
				const embed = new Discord.RichEmbed()
					embed.setTitle("ENTMUTED!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde entmuted von: " , "<@"+message.author.id+">", true)
					embed.setColor(0x1e6129)
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(message.guild.emojis.find(reactup => reactup.name === "unmute")) })
			}
			else{
				if(message.author != client.user){
				message.channel.send("Fehlende Berechtigung! " + message.author);
			}}
	}
/*
===================================
===========   Role Adder   ========
===================================
*/	
	if (command === 'addtemp')	  {
		
			if (message.member.roles.find(leitung => role.name === 'Leitung👑') ||
				message.member.roles.find(leitung => role.name === 'Mario') ||
				message.member.roles.find(leitung => role.name === 'Admin⚙️')){
				message.delete();
				let comm = "/addtemp "
				var cut = message.content.slice(comm.length).split(" ");
				//let newrole = cut[1]
				let dauer = cut[2]
				//let newrole = message.guild.roles.find(mute => mute.name === x)
				let member = message.mentions.members.first();
				let newrole = message.mentions.roles.first();
				console.log(`NEW ROLE:` + newrole)
				if(newrole != "<@&640858861661847572>" &&
				  newrole != "<@&640858638159839253>" &&
				  newrole != "<@&690682850353348638>" &&
				  newrole != "<@&690602986170220595>" &&
				  newrole != "<@&690565273283199076>") {
				 // newrole != message.member.roles.find(leitung => role.name === 'Big Brother')){
				member.addRole(newrole, `Added the Role ${newrole} by ${message.author.tag} for ${member} .`);
				console.log(`Added the Role: ` + newrole + `to: ` + member + `by: `+ message.author.tag + `für :` + dauer)
				  setTimeout(() => {
				  member.removeRole(newrole, `User aus der Temp-Role entfernt.`);
                  }, dauer * 60000);
					const embed = new Discord.RichEmbed()
					embed.setTitle("TEMP-ROLLE HINZUGEFÜGT!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde von: " , "<@"+message.author.id+">", true)
					embed.addField("Zu der Rolle: " , newrole , true)
					embed.addField("Für (dauer in Minuten): " , "         " + dauer, true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(message.guild.emojis.find(reactup => reactup.name === "glass")) })
				}
				else{
					console.log(`Tried to Add the Role: ` + newrole + `to: ` + member + `by: `+ message.author.tag + `für :` + dauer)
				}
					}
			else{
				if(message.author != client.user){
				message.channel.send("Fehlende Berechtigung! " + message.author.tag);
			}}
	}	
	
		if (command === 'add')	  {
		
			if (message.member.roles.find(leitung => leitung.name === 'Leitung👑') ||
				message.member.roles.find(mario => mario.name === 'Mario') ||
				message.member.roles.find(admin => admin.name === 'Admin⚙️')){
				message.delete();
				let comm = "/add "
				var cut = message.content.slice(comm.length).split(" ");
				let member = message.mentions.members.first();
				let newrole = message.mentions.roles.first();
				console.log(`NEW ROLE:` + newrole)
				if(newrole != "<@&640858861661847572>" &&
				  newrole != "<@&640858638159839253>" &&
				  newrole != "<@&690682850353348638>" &&
				  newrole != "<@&690602986170220595>" &&
				  newrole != "<@&690565273283199076>") {
				member.addRole(newrole, `Added the Role ${newrole} by ${message.author.tag} for ${member} .`);
				console.log(`Case 1: Added the Role: ` + newrole + `to: ` + member + `by: `+ message.author.tag)
					const embed = new Discord.RichEmbed()
					embed.setTitle("PERM-ROLLE HINZUGEFÜGT!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde von: " , "<@"+message.author.id+">", true)
					embed.addField("Zu der Rolle: " , newrole , true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(message.guild.emojis.find(reactup => reactup.name === "glass")) })
				}
				else{
					console.log(`Tried to Add the Role: ` + newrole + `to: ` + member + `by: `+ message.author.tag)
					
				}
					}
			else{
				if (message.member.roles.find(leitung => leitung.name === 'Moderator🛠')){
				message.delete();
				let comm = "/add "
				var cut = message.content.slice(comm.length).split(" ");
				let member = message.mentions.members.first();
				let newrole = message.mentions.roles.first();
				console.log(`NEW ROLE:` + newrole)
				if(newrole != "<@&640858861661847572>" && 
				  newrole != "<@&640858638159839253>" &&		
				  newrole != "<@&690682850353348638>" &&
				  newrole != "<@&690602986170220595>" &&
				  newrole != message.member.roles.find(leitung => role.name === 'Moderator🛠') &&
				  newrole != "<@&690682719096537099>" &&
				  newrole != "<@&690682779956150334>" &&
				  newrole != "<@&691060585487532104>" &&
				  newrole != "<@&691055203318890497>" &&
				  newrole != "<@&690565273283199076>") {
				member.addRole(newrole, `Added the Role ${newrole} by ${message.author.tag} for ${member} .`);
				console.log(`Case 2: Added the Role: ` + newrole + `to: ` + member + `by: `+ message.author.tag)
					const embed = new Discord.RichEmbed()
					embed.setTitle("PERM-ROLLE HINZUGEFÜGT!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde von: " , "<@"+message.author.id+">", true)
					embed.addField("Zu der Rolle: " , newrole , true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(message.guild.emojis.find(reactup => reactup.name === "glass"))
				  })
				  }
				  console.log(`Tried to Add the Role: ` + newrole + `to: ` + member + `by: `+ message.author.tag)
				}
				else{
				if(message.author != client.user){
				message.channel.send("Fehlende Berechtigung! " + message.author.tag);
				}}
	}	}
	
	if (command === 'remove')	  {
		
			if (message.member.roles.find(leitung => role.name === 'Leitung👑') ||
				message.member.roles.find(leitung => role.name === 'Mario') ||
				message.member.roles.find(leitung => role.name === 'Admin⚙️')){
				message.delete();
				let comm = "/addtemp "
				var cut = message.content.slice(comm.length).split(" ");
				let member = message.mentions.members.first();
				let newrole = message.mentions.roles.first();
				console.log(`NEW ROLE:` + newrole)
				if(newrole != "<@&640858861661847572>" &&
				  newrole != "<@&640858638159839253>" &&
				  newrole != "<@&690682850353348638>" &&
				  newrole != "<@&690602986170220595>" &&
				  newrole != "<@&690565273283199076>") {
				member.removeRole(newrole, `Added the Role ${newrole} by ${message.author.tag} for ${member} .`);
				console.log(`Added the Role: ` + newrole + `to: ` + member + `by: `+ message.author.tag)
					const embed = new Discord.RichEmbed()
					embed.setTitle("PERM-ROLLE ENTFERNT!");
					embed.addField("Der Nutzer: " , member, true) 
					embed.addField("Wurde von: " , "<@"+message.author.id+">", true)
					embed.addField("Aus der Rolle Entfernt: " , newrole , true)
					embed.setColor(0x8B0000)
					embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setTimestamp()
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
					embed.setURL("https://www.paypal.me/magicaldesignstv")
					embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
					
					message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react(message.guild.emojis.find(reactup => reactup.name === "sad")) })
				}
				else{
					console.log(`Tried to Add the Role: ` + newrole + `to: ` + member + `by: `+ message.author.tag)
				}
					}
			else{
				if(message.author != client.user){
				message.channel.send("Fehlende Berechtigung! " + message.author.tag);
			}}
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
if (newmessage.author == client.user || oldmessage.author == client.user || message.author == client.user){
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