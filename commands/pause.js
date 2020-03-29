const functions = require(`./functions`);

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
		functions.pausenotsamevoice(message) 
		}
		else{
			if (owner != message.member){
			console.log("OWNER: " + owner + "MEMBER: " + message.member)
			functions.pausenotowner(msg, owner)
			}
		else{
		if (!message.message.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um die Musik pausieren!');
		if (voiceConnection === null) {		
			message.channel.send('Es läuft keine Musik!');
		}
		else{	
		if (serverQueue.connection.dispatcher){
		serverQueue.connection.dispatcher.pause();
		functions.pausepaused(message)
		console.log(`PAUSE`)
		return musik = "paused"
		}
		}
		}
		}
		}
		}
	},
};