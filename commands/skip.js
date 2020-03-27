const { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const Discord = require('discord.js');

module.exports = {
	name: 'skip',
	description: 'Skip a song!',
	execute(message, client) {
			if (!message.member.voiceChannel){
				message.channel.send('Du musst in einem Voice Channel sein, um lieder zu Skippen!').then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
			}else{
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		    const queue = message.client.queue;
			const guild = message.guild;
			const serverQueue = queue.get(message.guild.id);
		//const dispatcher = serverQueue.player.dispatcher;
		if (!serverQueue){
			message.channel.send('Es muss ein Lied laufen, damit ein Song geskippt werden kann!').then(sentEmbed =>  {
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

		if (serverQueue.connection.dispatcher){
			if(serverQueue.songs.length === 1){
				console.log(`Song Skipped! Länge = 1`)
						serverQueue.songs = [];
						serverQueue.connection.dispatcher.end();
						queue.delete(guild.id);
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
			}
			else{
				
		serverQueue.connection.dispatcher.end();
		console.log(`Song Skipped!`)
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
			}}}}}
	},
};