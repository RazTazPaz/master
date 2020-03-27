const Discord = require('discord.js');
module.exports = {
	name: 'pause',
	description: 'Stop all songs in the queue!',
	execute(message, client, owner) {
					if (!message.member.voiceChannel){
				message.channel.send('Du musst in einem Voice Channel sein, um Lieder zu Pausieren!').then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
			}else{
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		    const queue = message.client.queue;
			const guild = message.guild;
			const serverQueue = queue.get(message.guild.id);
		//const dispatcher = serverQueue.player.dispatcher;
		if (!serverQueue){
			message.channel.send('Es muss ein Lied laufen, um Pause zu nutzen!').then(sentEmbed =>  {
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
		/*if (msg.member.roles.find(leitung => role.name === 'Leitung👑') ||
				msg.member.roles.find(leitung => role.name === 'Mario') ||
				msg.member.roles.find(leitung => role.name === 'Admin⚙️')){*/
				if (owner != message.member){
					console.log(`1: ` + message.guild.member(serverQueue.user) + `2: ` + message.member+ `3: ` + message.guild.member(serverQueue.member) + `4: ` + owner )
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
						return message.channel.send({embed}).then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
			}
			else{
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		//const dispatcher = voiceConnection.member.dispatcher;
		//const serverQueue = message.client.queue.get(message.guild.id);
		//const dispatcher = voiceConnection.player.dispatcher;
		if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um die Musik pausieren!');
		//serverQueue.songs = [];
		if (voiceConnection === null) {
			
			message.channel.send('Es läuft keine Musik!');
			/*if(dispatcher.paused){
				message.channel.send('Musik ist bereits pausiert!');
			}*/
		}
			else{	if (serverQueue.connection.dispatcher){
		serverQueue.connection.dispatcher.pause();
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
		
		return musik = "paused"
		}
		}
		}
			}}}
	},
};