const functions = require(`./functions`);

module.exports = {
	name: 'skip',
	description: 'Skip a song!',
	execute(message, client, owner) {
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		const serverQueue = message.client.queue.get(message.guild.id);
		const queue = message.client.queue;
		const guild = message.guild;
			
			if (!message.member.voiceChannel){
				message.channel.send('Du musst in einem Voice Channel sein, um lieder zu Skippen!').then(sentEmbed =>  {
					sentEmbed.react("🚫") 
			}) 
			}
			else{

		if (!serverQueue){
			message.channel.send('Es muss ein Lied laufen, damit ein Song geskippt werden kann!').then(sentEmbed =>  {
			sentEmbed.react("🚫") 
		}) 
		}
		else{
		if (message.guild.voiceConnection.channel != message.member.voiceChannel){
			functions.skipnotsamevoice(message, client)
		}		
		else{
		if(owner != message.member){
			functions.pausenotowner(message, owner)
			}
		else{
		if (serverQueue.connection.dispatcher){
			if(serverQueue.songs.length < 1){
				console.log(`Song Skipped! Länge = 1`)
						serverQueue.connection.dispatcher.end();
						queue.delete(guild.id);
						serverQueue.songs = [];
						functions.skipsongleng1(message, client)
			}
			else{		
		serverQueue.connection.dispatcher.end();
		console.log(`Song Skipped!`)
		functions.skipped(message, client)
			}}}}}}
	},
};