const Discord = require('discord.js');
const client = new Discord.Client();
const Gamedig = require('gamedig');
const clientID = 'NjQ3MDk3MjQ4MjQwNjMxODE5.XdbqMQ.ARjR3Blmd7k82yoeodGyu5FP4mQ';
const prefix = '!';
const game = 'arma3',
      host = '213.32.7.106',
      port = '2362';
var player1 = 0;
var score1 = 0;

client.on('ready', () => {
  console.log(`ArmaBot has started, with ${client.users.size} users, and ${client.channels.size} channels.`)
});

function timeFormat(time) {   
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = Math.round(time % 60);
  var ret = "";
  if (hrs > 1) {
    ret += "" + hrs + " Hrs " + (mins < 10 ? "0" : "");
  } else
  if (hrs > 0) {
    ret += "" + hrs + " Hr " + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + " Mins " + (secs < 10 ? "0" : "");
  ret += "" + secs + " Secs";
  return ret;
};

client.on('message', message => {
	client.fetchUser("305734474308517898").then(myUser => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
/*
====================================================================================
Message-Deleter
====================================================================================
*/
	if (command === 'delete')	  {
	var log = client.channels.get('677587804158558236');
	 if(message.channel === client.channels.find("name", "exile_altis_online")){
		if (message.member.roles.find("name", "Admin")){
				message.channel.bulkDelete(10);
					const embed = new Discord.RichEmbed()
					embed.setTitle("Messages in " + message.channel +" Deleted by: " + message.author.tag);
					embed.setColor(0xb34141)
					embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
					log.send({embed});
		}
		else 
		{
				const embed = new Discord.RichEmbed()
				embed.setTitle("Missing Permission!")
				embed.setDescription(message.author.tag + " Tried to Use Delete in: "+ message.channel)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				log.send({embed});
		}
	 }
	 else {
		 if (message.channel != client.channels.find("name", "exile_altis_online") || message.channel != client.channels.find("name", "exile_tanoa_online") || message.channel != client.channels.find("name", "epoch_altis_online") || message.channel != client.channels.find("name", "epoch_chernarus_online")){
		
				const embed = new Discord.RichEmbed()
				embed.setTitle("You can Only use that in Altis-Online!")
				embed.setDescription(message.author.tag + " tried to use Delete-Command in: " + message.channel)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				log.send({embed});
		
		 }
	 }
  };
  /*
  =========================PING=================================
  */
  if (command === 'ping')	  {
	  var log = client.channels.get('677587804158558236');
	  var chann = message.channel;
	  
	  if(message.channel != client.channels.get("244379737290440704") && message.channel != client.channels.get("360712752286924805") && message.channel != client.channels.get("360711629698236417") && message.channel != client.channels.get("360722269393387521") && message.channel != client.channels.get("360721823748456448") && message.channel != client.channels.get("360718915791224842") && message.channel != client.channels.get("360706974221860865")){
	  
	  if(message.author.tag === "RazTazPaz#0001"){
		  
		  const embed = new Discord.RichEmbed()
				embed.setTitle("Trolled RazTazPaz")
				embed.setDescription("In: " + message.channel)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				log.send({embed});
				
				function reply(){
				const embed = new Discord.RichEmbed()
				.setTitle(message.author.tag +", Not going to Pong u pussy!")
				embed.setColor(0x086C34)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				chann.send({embed});
				}
				reply();
	  }
		   else{
		  if(message.author.tag === "Baron#0285"){
		  const embed = new Discord.RichEmbed()
				embed.setTitle("Pinged Baron")
				embed.setDescription("In: " + message.channel)
				embed.setColor(0x086C34)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				log.send({embed});
				
				function reply(){
				const embed = new Discord.RichEmbed()
				.setTitle(message.author.tag +", Pinging to the Leader! :heart: ")
				embed.setColor(0x086C34)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				chann.send({embed});
				}
				reply();
	  } else{
		  const embed = new Discord.RichEmbed()
				embed.setTitle("Ponged")
				embed.setDescription("In: " + message.channel + ", to: " + message.author.tag)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				log.send({embed});
				
				function replyn(){
				const embed = new Discord.RichEmbed()
				embed.setTitle(message.author.tag+", hehe Pong! :stuck_out_tongue: ")
				embed.setColor(0x086C34)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				chann.send({embed});
				}
				replyn();
  }}}}
	})
});
/*
=====================================================
===============DELETE LOGGER=========================
=====================================================
*/
client.on("messageDelete", (messageDelete) => {
	client.fetchUser("305734474308517898").then(myUser => {

	var user = "<@305734474308517898>";
	var dellog = client.channels.get('677587804158558236'); //bot spam
	var str = messageDelete.content;
if (messageDelete.author != client.user){
	if(client.channels.find("name", "exile_altis_online")!= messageDelete.channel && client.channels.find("name", "exile_tanoa_online")!= messageDelete.channel && client.channels.find("name", "epoch_altis_online")!= messageDelete.channel && client.channels.find("name", "dayz_epoch_online")  != messageDelete.channel){
		if(Boolean(str)){
  
  let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
  .setColor("#fc3c3c")
  DeleteEmbed.addField("Author", messageDelete.author.tag, true)
  DeleteEmbed.addField("Channel", messageDelete.channel, true)
  DeleteEmbed.addField("Message", messageDelete.content)
  DeleteEmbed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
  .setTimestamp()
  .setURL("https://www.gogsworld.com/")
  dellog.send(DeleteEmbed);
	}
	//wenn nachricht = BILD
	else {
		let DeleteEmbed = new Discord.RichEmbed()
		.setTitle("**DELETED PICTURE**")
		.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
		.setColor("#fc3c3c")
		DeleteEmbed.addField("Author", messageDelete.author.tag, true)
		DeleteEmbed.addField("Channel", messageDelete.channel, true)
		DeleteEmbed.addField("Message", "Deleted Message was a Picture!")
		DeleteEmbed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
		.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
		.setTimestamp()
		.setURL("https://www.gogsworld.com/")
		dellog.send(DeleteEmbed);
	}
}}
});
});

client.on('ready' , message => {
	client.fetchUser("305734474308517898").then(myUser => {
  var channel = client.channels.get('677151384931663882');  //online channel
  var logstart = client.channels.get('677587804158558236'); //bot spam
  channel.send("!start");
  
  	const embed = new Discord.RichEmbed()
	embed.setTitle("Bot Restarted Succsessfully!");
	embed.setColor(0x086C34)
	embed.setAuthor("GoG´s Exile Altis", myUser.displayAvatarURL)
	logstart.send({embed});
	})
})

/*
=================================================================================================================
=====000000000000000000000000000000000000===Online List===0000000000000000000000000000000000000000000000000======
=================================================================================================================
*/	

client.on('message', message => {
	client.fetchUser("305734474308517898").then(myUser => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var chan = client.channels.get("647829408932954113");
  //logging var for online interval
  var onlinelog = client.channels.get('677587804158558236');
  const mychan = "<#647829408932954113>";
  if(client.channels.find("name", "exile_altis_online")!= message.channel && client.channels.find("name", "exile_tanoa_online")!= message.channel && client.channels.find("name", "epoch_altis_online")!= message.channel && client.channels.find("name", "dayz_epoch_online")  != message.channel){

			if(command === 'start'){
    
					if (message.author !== client.user) {
						
						const embed = new Discord.RichEmbed();
						embed.setTitle("ERROR!")
						embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
						embed.setColor(0xb34141)
						embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
						embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
						embed.setTimestamp()
						embed.setURL("https://www.gogsworld.com/")
						embed.setDescription("User: " + message.author.tag + " tried to use !start in " + message.channel )
						onlinelog.send({embed});
}}}


 if(client.channels.find("name", "exile_altis_online") === message.channel){
	 
	if (message.author != client.user){
		
							const embed = new Discord.RichEmbed()
							embed.setTitle("Someone tried to Send a Message:")
							embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
							embed.setColor(0xb34141)
							embed.setFooter("Tanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
							embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
							embed.setTimestamp()
							embed.setURL("https://www.gogsworld.com/")
							embed.setDescription("User: " + message.author.tag + " sent a Message in: " + message.channel + "\n Message is: \n " +message )
							onlinelog.send({embed})
		 message.delete();
	 }
	if(command === 'start'){
		
		if(message.channel === client.channels.find("name", "exile_altis_online")){
			
			if (message.author == client.user || message.member.roles.find("name", "Admin")) {		

				message.channel.bulkDelete(10);	
							//else für client master bedingung 
							const embed = new Discord.RichEmbed()
							embed.setTitle("Bot Playerlist is about To Start:")
							embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
							embed.setColor(0x006B8B)
							embed.setFooter("Tanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
							embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
							embed.setTimestamp()
							embed.setURL("https://www.gogsworld.com/")
							embed.setDescription("The Bot is Loading the Scoreboard...\n" + "User: " + message.author.tag + "started the scoreboard in: " + message.channel +"\n Please wait a few Seconds! ")
							onlinelog.send({embed})
							
							setTimeout(log1, 60000);
							function log1(){ 
							const embed = new Discord.RichEmbed()
							embed.setTitle("First Online List of the Day Successfully Sent!")
							embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
							embed.setColor(0x086C34)
							embed.setFooter("Tanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
							embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
							embed.setTimestamp()
							embed.setURL("https://www.gogsworld.com/")
							embed.setDescription("User: " + message.author.tag + " posted the first onlinelist of the day in: " + message.channel)
							onlinelog.send({embed})
							}

/*
=====================================
======Message Deleter Ende===========
=====================================
*/	

client.setInterval(messageupdate, 60000);
/*
=======================================================
====================INTERVAL===========================
=======================================================
*/
 async function messageupdate(){
 try {
	var datum = new Date();
	var monat = datum.getMonth();
	var tag = datum.getDate();
	var monname = 0;
	if(monat == 0){
	monname = "Jauary";
	}
	else { if(monat == 1){
	monname = "February";
	}
	else { if(monat == 2){
		monname = "March";
	}
	else {if(monat == 3){
		monname = "April";
	}
	else {if(monat == 4){
		monname = "Mai";
	}
	else{ if(monat == 5){
		monname = "June";
	}
	else{ if(monat == 6){
		monname = "July";
	}
	else{if(monat == 7){
		monname = "August";
	}
	else{if(monat == 8){
		monname = "September";
	}
	else{if(monat == 9){
		monname = "Oktober";
	}
	else{if(monat == 10){
		monname = "November";
	}
	else{if(monat == 11){
		monname = "December";
	}}}}}}}}}}}}
    Gamedig.query({
      type: game,
      host: host,
      port: port
    },
    function(err, data) {
      if (err) {
        message.channel.send({embed: {
		color: 3447003,
		descriptoion: "Failed to Fetch Data! Update in 60s. If error keeps appearing please notice RazTazPaz!"}});
	  }	
	else {
	var num2 = parseInt(data.raw.numplayers);
	//NUM2 GIVES THE PLAYERCOUNT AS STRING
	//PRF = NUMBER OF PLAYERS ONLINE AT ALL
	const prf = num2;
	if (num2 < 25){
		const embed = new Discord.RichEmbed()
		//var lng = player[i].length;
		embed.setTitle("List of Players Online:")
		embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
		embed.setColor(0x006B8B)
		embed.setDescription("**Server Name: **"  + data.name + "\n" + "**Map: **" + data.map + '\n' + '**Players Online**: ' + data.raw.numplayers + '/' + data.maxplayers + '\n' + '**Server Ip/Port: **' + data.query.host + ':' + data.query.port + "\n" + "<<<============================>>>")
		embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
		embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/676899143079428106/altis_bild.jpg")
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
		embed.setTimestamp()
		embed.setURL("https://www.gogsworld.com/")
		var player = data.players;
		var n = 1;
		for (let i = 0; i < num2;++n, ++i){
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
		if (score1 < player[i].score){
		score1 = player[i].score;
		player1 = player[i].name;
		}
		/*else {if(score1 == player[i].score){
					if(player1 != player[i].name){
						let score2 = player[i].score;
						let player2 = player[i].name;
					}
		}
		*/}//CLOSES FOR TO NUM2
		moon(player1, score1);
		message.channel.send({embed});
		function moon(){
			var datum2 = new Date();
			var zeituk = datum2.getHours();
			var min2 = datum2.getMinutes();
			var zeit2 = zeituk + 1;
			const zeitt = 23;
			const mint = 59;
			if(zeit2 == zeitt){
				if(min2 == mint){
					var x = 0;
					if(score1 == 0){
						const embed = new Discord.RichEmbed()
						embed.setTitle("Leaderboard of the: " + tag + ". " + monname )
						embed.setAuthor("Exile Altis Leaderboard", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
						embed.setColor(0xEED524)
						embed.setDescription("__**Congratulations!**__")
						embed.setFooter("Thanks for using our Bot to see the Leaderboard of GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
						embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/676899143079428106/altis_bild.jpg")
						embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
						embed.setTimestamp()
						embed.setURL("https://www.gogsworld.com/")
						embed.addField("***Noone Socred Points, your bad guys...   ***", true)
						client.channels.get("649270099647266840").send({embed});
					}
					else{
					if(score1 < 15){
					x = "15000 PopTabs";
					}else {if(score1 < 20){
					x = "25000 PopTabs";
					}else{if(score1 < 30){
					x = "30000 PopTabs";
					}else{if(score1 < 40){
					x = "35000 PopTabs";
					}else{if(score1 < 50){
					x = "40000 PopTabs";
					}else{if(score1 < 65){
					x = "45000 PopTabs";
					}else{if(score1 <= 90){
					x = "50000 PopTabs";
					}else{if(score1 > 90){
					x = "Hunter HMG";
					}}}}}}}}}
				const embed = new Discord.RichEmbed()
				embed.setTitle("Leaderboard of the: " + tag + ". " + monname )
				embed.setAuthor("Exile Altis Leaderboard", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setColor(0xEED524)
				embed.setDescription("__**Congratulations!**__")
				embed.setFooter("Thanks for using our Bot to see the Leaderboard of GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/676899143079428106/altis_bild.jpg")
				embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				embed.addField("***First Place:   ***", player1 + "\n" + "**With a Score of:   **" + score1, true)
				//if(player2 != ""){
				//	embed.addField(player2 + "\n" + "Won also with a Score of" + "\n" + score2)
				//	}
				embed.addField("In Order to get the Reward of " + x +", please notify an Online Admin!", "Make sure that your __Bank__ is not __FULL__!")
				client.channels.get("649270099647266840").send({embed});
				score1 = 0;
				player1 =0;		
		}
		}	
		}
		}		//clost IF ARRAY LENGTH
/*
==================================================
=======For  more than 25Players===================
==================================================
*/	

	else{
		var k = 0;
		var l = 0;
		var players = 0;
		try {
		//TOP CHART WITH NAME ICON AND HEADER
		function msg1(){
		const embed = new Discord.RichEmbed()
		embed.setTitle("List of Players Online:")
		embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
		embed.setColor(0x006B8B)
		embed.setDescription("**Server Name: **"  + data.name + "\n" + "**Map: **" + data.map + '\n' + '**Players Online**: ' + data.raw.numplayers + '/' + data.maxplayers + '\n' + '**Server Ip/Port: **' + data.query.host + ':' + data.query.port + "\n" + "<<<============================>>>")
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
		embed.setURL("https://www.gogsworld.com/")
		var player = data.players;
		var n = 1;
		for (let i = 0; i < 24; ++n, ++i){ //set to 24!!!!!!!
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
		if (l < player[i].score){
		l = player[i].score;
		k = player[i].name;
		}
		}
		message.channel.send({embed});
		}
/*
	===============================
	=========2. Nachricht==========
	===============================
*/	
		//FUNCTION 2
		//LOWER CHART
		function msg2() {
			var m = 0;
			var d = 0;
		const embed = new Discord.RichEmbed()
		setTimeout(function(){
		embed.setColor(0x006B8B)
		embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
		embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/676899143079428106/altis_bild.jpg")
		embed.setTimestamp()
		embed.setURL("https://www.gogsworld.com/")
		var player = data.players;
		var n = 25;
		for (let i = 24; i < prf; ++n, ++i){ //set to 24!!!!!!!
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
		if (m < player[i].score){
		 m = player[i].score;
		d = player[i].name;
		}
		}
		if(m < l){
			player1 = k;
			score1 = l
		}
		else{
		player1 = d; return;
		score1 = m;   return;
		}
		message.channel.send({embed});
		},1500); }
			
		function moon(){
			var datum2 = new Date();
			var zeituk = datum2.getHours();
			var min2 = datum2.getMinutes();
			var zeit2 = zeituk + 1;
			const zeitt = 23;
			const mint = 59;
			if(zeit2 == zeitt){
				if(min2 == mint){
					var x = 0;
					if(score1 == 0){
						const embed = new Discord.RichEmbed()
						embed.setTitle("Leaderboard of the: " + tag + ". " + monname )
						embed.setAuthor("Exile Altis Leaderboard", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
						embed.setColor(0xEED524)
						embed.setDescription("__**Congratulations!**__")
						embed.setFooter("Thanks for using our Bot to see the Leaderboard of GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
						embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/676899143079428106/altis_bild.jpg")
						embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
						embed.setTimestamp()
						embed.setURL("https://www.gogsworld.com/")
						embed.addField("***Noone Socred Points, your bad guys...   ***", true)
						client.channels.get("649270099647266840").send({embed});
					}
					else{
					if(score1 < 15){
					x = "15000 PopTabs";
					}else {if(score1 < 20){
					x = "25000 PopTabs";
					}else{if(score1 < 30){
					x = "30000 PopTabs";
					}else{if(score1 < 40){
					x = "35000 PopTabs";
					}else{if(score1 < 50){
					x = "40000 PopTabs";
					}else{if(score1 < 65){
					x = "45000 PopTabs";
					}else{if(score1 <= 90){
					x = "50000 PopTabs";
					}else{if(score1 > 90){
					x = "Hunter HMG";
					}}}}}}}}}
				const embed = new Discord.RichEmbed()
				embed.setTitle("Leaderboard of the: " + tag + ". " + monname )
				embed.setAuthor("Exile Altis Leaderboard", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setColor(0xEED524)
				embed.setDescription("__**Congratulations!**__")
				embed.setFooter("Thanks for using our Bot to see the Leaderboard of GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/676899143079428106/altis_bild.jpg")
				embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				embed.addField("***First Place:   ***", player1 + "\n" + "**With a Score of:   **" + score1, true)
				//if(player2 != ""){
				//	embed.addField(player2 + "\n" + "Won also with a Score of" + "\n" + score2)
				//	}
				embed.addField("In Order to get the Reward of " + x +", please notify an Online Admin!", "Make sure that your __Bank__ is not __FULL__!")
				client.channels.get("649270099647266840").send({embed});
				score1 = 0;
				player1 =0;
				}
			
		}}
		msg1();
		msg2();
		moon();
			
		}catch(error) { console.log('caught', error.message); };
	}
	//closes else for more than 25 players
	
	  }
	  
	});
   }catch(UnhandledPromiseRejectionWarning) { e = 'Uk'
	}
 }
		}
		else{
			
				const embed = new Discord.RichEmbed()
				embed.setTitle("Missing Permission to Run the Bot Leaderboard!")
				embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
				embed.setColor(0x006B8B)
				embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				embed.setDescription("User: " + message.author.tag + " tried to start the scoreboard in: " + message.channel +" without the needed Permissons!")
				onlinelog.send({embed});
			
		}
		
		}//schliesst if Channel bedingung
		else{
			const embed = new Discord.RichEmbed()
					embed.setTitle("ERROR!")
					embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
					embed.setColor(0x006B8B)
					embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
					embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
					embed.setTimestamp()
					embed.setURL("https://www.gogsworld.com/")
					embed.setDescription("User: " + message.author.tag + " tried to start the Scoreboard in: " + message.channel +" !!")
					onlinelog.send({embed});
		}
		//message.delete(35000); 
		}//else für COMMAND START
		else{ message.delete(60000);
		}
 }
	else{
	//WAS SOLL PASSIEREN WENN NACHRICHT NICHT IN Altis ONLINE?
} 
 });
});
/*
====================================
Playing Online Update
====================================
*/

client.setInterval(activityupdate,10000);
 async function activityupdate(){
      Gamedig.query({
      type: game,
      host: host,
      port: port
	  },
  async  function(err, data) {
      if (err) {
		try {
        client.user.setActivity('Failed to Fetch Data! If the Error keeps appearing please notice RazTazPaz!', {type: 'PLAYING'});
		
		}catch(UnhandledPromiseRejectionWarning) {t = 'ERR'
		}
	  }
        var player = data.numplayers;
		var restart = new Date();
		var restartuk = restart.getHours();
		var restarth = restartuk + 1;
		if(restarth ==  24){
			restarth = 0;
		}
		var restartm = restart.getMinutes();
		var xrestarth = 0;
		var xrestartm = 0;
		if(restarth < 3){
			xrestarth = 3 - restarth;
			xrestartm = (59 - restartm);
		}else{if(restarth < 6){
			xrestarth = 6 - restarth;
			xrestartm = (59 - restartm);
		}else{if(restarth < 9){
			xrestarth = 9 - restarth;
			xrestartm = (59 - restartm);
		}else{if(restarth < 12){
			xrestarth = 12 - restarth;
			xrestartm = (59 - restartm);
		}else{if(restarth < 15){
			xrestarth = 15 - restarth;
			xrestartm = (59 - restartm);
		}else{if(restarth < 18){
			xrestarth = 18 - restarth;
			xrestartm = (59 - restartm);
		}else{if(restarth < 21){
			xrestarth = 21 - restarth;
			xrestartm = (59 - restartm);
		}else{if(restarth < 24){
			xrestarth = 24 - restarth;
			xrestartm = (59 - restartm);
		}}}}}}}}
		if(xrestarth == 1){
          client.user.setActivity('Exile Altis' + '[' + data.raw.numplayers +'/'+ data.maxplayers + ']' + 'Online' + " | Restart:  " + xrestartm + "m", {type: 'PLAYING' } );
		}else{
			if(xrestarth == 3){
				xrestarth = 2;
			}else{if(xrestarth == 2){
				xrestarth = 1;
			}
			}
        if (player == 0) {
			try {
          client.user.setActivity('Exile Altis' + '[' + data.raw.numplayers +'/'+ data.maxplayers + ']' + 'Online' + "|Restart:  " + xrestarth + "h :" + xrestartm + "min", {type: 'PLAYING' } );
       
			}catch(UnhandledPromiseRejectionWarning) { e = 'Uk'
	}
		}	
			else {
				try {
          client.user.setActivity('Exile Altis' + '[' + data.raw.numplayers +'/'+ data.maxplayers + ']' + 'Online' + " | Restart:  " + xrestarth + "h :" + xrestartm + "m", {type: 'PLAYING' } );
      }catch(UnhandledPromiseRejectionWarning) { e = 'Uk'
	}
			}
		
		}});
 }
client.login(clientID);