const functions = require(`./functions`);

module.exports = {
	name: 'volume',
	description: 'changes volume!',
	execute(message, client, owner) {
			const serverQueue = message.client.queue.get(message.guild.id);
			if (!serverQueue) {
				message.channel.send('Es muss ein Lied laufen, damit die Lautstärke geändert werden kann!').then(sentEmbed =>  {
				sentEmbed.react("🚫") 
		}) 
			}
			else
			{
		if (message.guild.voiceConnection.channel != message.member.voiceChannel){
			functions.volumenotsamevoice(message, client)
		}
		else{
		if(owner != message.member){
			functions.pausenotowner(message, owner)
			}
		else{
		var prefix = "/"
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
		  const args = message.content.slice(prefix.length).trim().split(/ +/g);
		  var suffix = args[1]
			if (!message.member.voiceChannel) return message.channel.send('Du musst in einem Voice Channel sein, um den Befehl zu nutzen!');

			if(!args[1]){
				message.channel.send('Es wurde keine Lautstärke definiert!');
			}
			else{
		if (suffix > 200 || suffix <= 0){
			message.channel.send('Lautstärke ist nicht im erlaubten Bereich von 0-200!');
			}
		else{
		if (serverQueue.connection.dispatcher){
		serverQueue.connection.dispatcher.setVolume((suffix / 100));
		message.client.queue.get(message.guild.id).volume = suffix;
		functions.volumechange(message, client, suffix)
		}}}
			}}}
	},
};

