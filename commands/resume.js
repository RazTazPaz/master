const functions = require(`./functions`);

module.exports = {
	name: 'weiter',
	description: 'setzt den song fort!',
	execute(message, client, owner) {
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
			functions.resumenotsamevoice(message, client)
		}
		else{
		if(owner != message.member){
			functions.pausenotowner(message, owner)
			}
		else{
		if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um die Musik fort zu setzen!').then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
			if (voiceConnection === null) {
			message.channel.send('Es läuft keine Musik!').then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 

		}else{
		if (!serverQueue.connection.dispatcher.paused) {
			message.channel.send('Musik ist nicht Pausiert!').then(sentEmbed =>  {
					sentEmbed.react("🚫") 
		}) 
		
		}
		else{
		if (serverQueue.connection.dispatcher.paused){
			serverQueue.connection.dispatcher.resume();
			functions.resume(message, client)
		}}}
		}}}}
	},
};