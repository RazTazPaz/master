const functions = require(`./functions`);

module.exports = {
	name: 'stop',
	description: 'Stop all songs in the queue!',
	execute(message, client, owner) {
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		const serverQueue = message.client.queue.get(message.guild.id);
		const queue = message.client.queue;
		const guild = message.guild;
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
		if(!message.guild.voiceConnection){
			functions.stopnovoice(message, client)			 
		}
		else{
		if (message.guild.voiceConnection.channel != message.member.voiceChannel){
			functions.stopnotsamevoice(message, client)	
		}
		else{
		if(owner != message.member){
			functions.pausenotowner(message, owner)
			}
		else{
		if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um die Musik zu Stoppen!');
		if (voiceConnection !== null) {
			if(serverQueue){
			if (serverQueue.connection.dispatcher){
					functions.stopped(message, client)
					queue.delete(guild.id);
					serverQueue.songs = [];
					setTimeout(() => {
						try{
						if(serverQueue.connection.dispatcher){
						serverQueue.connection.dispatcher.end();
						}
						}catch(error){
						console.log(error)
						}
					},1500)
					console.log(`Song Stopped!`)
			}
		}}}}
		}}}
	},
};