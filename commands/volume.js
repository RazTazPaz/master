const Discord = require('discord.js');
module.exports = {
	name: 'volume',
	description: 'Stop all songs in the queue!',
	execute(message, client) {
			const serverQueue = message.client.queue.get(message.guild.id);
			if (!serverQueue) {
				message.channel.send('Es muss ein Lied laufen, damit die Lautstärke geändert werden kann!').then(sentEmbed =>  {
				sentEmbed.react("🚫") 
		}) 
			}
			else
			{
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
		embed.setURL("https://www.paypal.me/magicaldesignstv")
		return message.channel.send({embed}).then(sentEmbed =>  {
							sentEmbed.react("🚫") 
		})   
		}
		else{
		var prefix = "/"
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		  const args = message.content.slice(prefix.length).trim().split(/ +/g);
		  var suffix = args[1]
		//const dispatcher = voiceConnection.member.dispatcher;
	
		//const dispatcher = voiceConnection.player.dispatcher;
		if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um den Befehl zu nutzen!');
		//serverQueue.songs = [];
	
			if(!args[1]){
				message.channel.send('Es wurde keine Lautstärke definiert!');
			}
			else{
		if (suffix > 200 || suffix <= 0){
			message.channel.send('Lautstärke ist nicht im erlaubten Bereich von 0-200!');
			/*if(dispatcher.paused){
				message.channel.send('Musik ist bereits pausiert!');
			}*/
		}
		else{
		if (serverQueue.connection.dispatcher){
		serverQueue.connection.dispatcher.setVolume((suffix / 100));
		message.client.queue.get(message.guild.id).volume = suffix;
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
		serverQueue.textChannel.send({embed}).then(sentEmbed =>  {
							sentEmbed.react("🔊") 
		})  
		//message.channel.send(`Lautstärke zu:  ${suffix}% geändert!`);
		}}}
			}}
	},
};

