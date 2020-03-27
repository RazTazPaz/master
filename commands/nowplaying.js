const Discord = require('discord.js');
module.exports = {
	name: 'nowplaying',
	description: 'Get the song that is playing.',
	execute(message, client) {
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue){
			message.channel.send('Es läuft kein Lied!').then(sentEmbed =>  {
			sentEmbed.react("🚫") 
		}) }
		else {
		if (!message.member.voiceChannel){
			message.channel.send('Du musst in einem VoiceChannel sein um den Befehl zu nutzen!').then(sentEmbed =>  {
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
		if (voiceConnection !== null) {
			if (serverQueue.connection.dispatcher){
		//return message.channel.send(`Ich Spiele gerade: ${serverQueue.songs[0].title}`);
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
		}
		}
		}}}
	},
};