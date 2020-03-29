const Discord = require('discord.js');
module.exports = {
	name: 'embeds',
	description: 'Stop all songs in the queue!',
	/*=====================================================
	============ PLAYING MESSAGES=======================
	=====================================================*/
	playnotvoice(message){
	message.channel.send("Du musst in einem Voice Channel sein, um Musik zu spielen!").then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		}) 
	},
	playnotalkpermission(message){
	 message.channel.send( "Ich kann deinem Voice Channel nicht Joinen!").then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		}) 
	},
	playnotsamevoice(message){
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
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
	},
	playsongaddedtoqueue(message, urll, song){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Song zur Queue hinzugefügt!");
		embed.addField("Ich habe den Folgenden Song zur Queue hinzugefügt! **Viel Spaß!** ",`__**Titel: **__           **${song.title}**`)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x00ff1e)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("▶️") 
		}) 
	},
	playsong(message, urll, song){
		
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
	},
	/*=====================================================
	============LOOPING MESSAGES=======================
	=====================================================*/
	playloopnotinvoice(message){
		message.channel.send('Du musst in einem Voice Channel sein, um Lieder zu Loopen!').then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		}) 
	},
	playloopnosong(message){
		message.channel.send('Es muss ein Lied laufen, um Loop zu nutzen!').then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		}) 
	},
	playloopnotsamechannel(message){
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
	    message.channel.send({embed}).then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		})   
	},
	playloopstart(message, titles){
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
	},
	playloopstop(message, titles){
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
	},
	/*=====================================================
	============SONG PAUSED MESSAGES=======================
	=====================================================*/
	pausenotsamevoice(message){
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
		message.channel.send({embed}).then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		}) 
	},
	pausenotowner(message, owner){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Fehler!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.addField("Nur die Person die den Musikbot gecallt hat, kann Befehle nutzen!",`=> Warte, bis du der Queue Owner bist!`)
		embed.addField("**QUEUE OWNER: **", owner , true)
		embed.addField("**DU: **", message.member , true)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x8B0000)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		}) 
	},
	pausepaused(message){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Musik Pausiert!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Deine Playlist wurde Pausiert! Schreibe ?weiter, um sie fort zu setzen!", " **Viel Spaß!** ")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0xe9a72f)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
		sentEmbed.react("⏸️") 
		})
	},
	/*=====================================================
	============NOW PLAYING MESSAGES=======================
	=====================================================*/
	npnotsamevoice(message, client){
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
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		})  
	},
	npsong(message, client, serverQueue){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Now Playing!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Du hörst gerade: ", `${serverQueue.songs[0].title}`+ " Viel Spaß! ")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x2fe9a7)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🎵") 
		}) 
	},
	/*=====================================================
	============CLEAR QUEUE MESSAGES=======================
	=====================================================*/
	cqnotsamevoice(message, client){
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
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
	},
	cqdeleted(message, client){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Queue Gelöscht!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Deine Playlist wurde gelöscht!", " **Such dir neue Lieder aus!** ")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x8B0000)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("❌") 
		})  
	},
	/*=====================================================
	============RESUME SONG MESSAGES=======================
	=====================================================*/
	resumenotsamevoice(message, client){
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
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		})
	},
	resume(message, client){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Musik Fortgesetzt!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Deine Playlist wird Fortgesetzt!", " **Viel Spaß!** ")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x2f71e9)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("⏯️") 
		})
	},
	/*=====================================================
	============SKIP SONG MESSAGES=======================
	=====================================================*/
	skipnotsamevoice(message, client){
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
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		})
	},
	skipsongleng1(message, client){
		setTimeout(() => {
		const embed = new Discord.RichEmbed()
		embed.setTitle("Lied Übersprungen!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Ich habe den Song Übersprungen!", " **Viel Spaß!** ")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x2fcee9)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("⏩") 
		})
		}, 1500)
	},
	skipped(message, client){
		setTimeout(() => {
		const embed = new Discord.RichEmbed()
		embed.setTitle("Lied Übersprungen!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Ich habe den Song Übersprungen!", " **Viel Spaß!** ")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x2fcee9)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("⏩") 
		})
		},1500)
	},
	/*=====================================================
	============STOP SONG MESSAGES=======================
	=====================================================*/
	stopnovoice(message, client){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Fehler!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.addField("Ich bin in keinem Voice Channel!",`=> Starte Musik`)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
		sentEmbed.react("🚫") 
		})
	},
	stopnotsamevoice(message, client){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Fehler!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.addField("Du Musst im selben Voice Channel sein, wie ich!",`=> Wechsle bitte den Channel`)
		embed.addField("**DEIN CHANNEL: **", message.member.voiceChannel , true)
		embed.addField("**CHANNEL DES BOTS: **", message.guild.voiceConnection.channel , true)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		return message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		})
	},
	stopped(message, client){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Musik Gestoppt!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Deine Playlist wurde gelöscht!", " **Auf wiedersehen!** ")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x8B0000)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🛑") 
		})
	},
	/*=====================================================
	============VOLUME SONG MESSAGES=======================
	=====================================================*/
	volumenotsamevoice(message, client){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Fehler!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.addField("Du Musst im selben Voice Channel sein, wie ich!",`=> Wechsle bitte den Channel`)
		embed.addField("**DEIN CHANNEL: **", message.member.voiceChannel , true)
		embed.addField("**CHANNEL DES BOTS: **", message.guild.voiceConnection.channel , true)
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
							sentEmbed.react("🚫") 
		})  
	},
	volumechange(message, client, suffix){
		const embed = new Discord.RichEmbed()
		embed.setTitle("Lautstärke geändert!");
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/691010390921838742/coffee2.png")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.addField("Deine Lautstärke wurde auf: ", suffix +"% geändert! **Viel Spaß!** ")
		embed.setAuthor("Jugend Café", "https://cdn.discordapp.com/attachments/578932721531748392/691018002673434634/servericon.png")
		embed.setFooter("Danke, dass ihr unsern Bot nutzt! Code by RazTazPaz", message.author.displayAvatarURL)
		embed.setTimestamp()
		embed.setColor(0x2fe9a7)
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		message.channel.send({embed}).then(sentEmbed =>  {
							sentEmbed.react("🔊") 
		}) 
	},
};     

