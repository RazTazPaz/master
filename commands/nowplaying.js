const functions = require(`./functions`);

module.exports = {
	name: 'nowplaying',
	description: 'Zeigt den Song an, der gerade läuft.',
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
			functions.npnotsamevoice(message, client)
		}
		else{		
		if (voiceConnection !== null) {
			if (serverQueue.connection.dispatcher){
			functions.npsong(message, client, serverQueue)
		}
		}
		}}}
	},
};