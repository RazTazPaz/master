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
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'altishelp')	  {
	  
	const embed = new Discord.RichEmbed()
	embed.setTitle("List of Commands Available:")
	embed.setAuthor("GoG´s Exile Altis", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
	embed.setColor(0x006B8B)
	embed.setDescription("__**Hello**__, \n Thanks for Using our Help!" + "\n" + "Below you can see a List of Commands you can Use!" + "\n" + "<<<============================>>>")
	embed.setFooter("Thanks for using our Bot to see a List of Commands for the GoG´s Exile Altis Server! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
	embed.setImage("hhttps://www2.pic-upload.de/img/36601434/altisbild.jpg")
	embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
  /*
   * Takes a Date object, defaults to current date.
   */
	embed.setTimestamp()
	embed.setURL("https://www.gogsworld.com/")
	embed.addField("__**Command: **__" + 1, "\n" + "Use __!altisonline__" + "\n" + "To get a List with **Server** and **Player** Information!" + "\n" + "If you have more Questions, __**Admins**__ are always up to help you!" + "\n" + "<<<============================>>>" + "\n" + "**Have Fun on The GoG´s Wolrd!**")
	embed.addBlankField(true)
  message.channel.send({embed});
  
  };
   if (command === 'altisonline') {
    Gamedig.query({
      type: game,
      host: host,
      port: port
    },
  async  function(err, data) {
      if (err) {
        message.channel.send({embed: {
		color: 3447003,
		descriptoion: "Server is offline or restarting!"}});
	  }	
    /*  else {
        message.channel.send({embed: {
		color: 02550,
		description: ("Server Name:"  + data.name + "\n" + "Map: " + data.map + '\n' + 'Players Online: ' + data.raw.numplayers + '/' + data.maxplayers + '\n' + 'Server Ip/Port: ' + data.query.host + ':' + data.query.port)}}); 
			var player = data.players;
			for (var i in player) {
			message.channel.send({embed: {
				color: 3447003,
			description: "Player: " + player[i].name + ' - Score: ' + player[i].score + ' - Time In Game: ' + timeFormat(player[i].time)}});
	  }
	  }
	});
   }
});
*/
else {
	try {
	} catch(UnhandledPromiseRejectionWarning) { e = 'Uk'
	}
	const embed = new Discord.RichEmbed()
	embed.setTitle("List of Players Online:")
	embed.setAuthor("GoG´s Exile Altis", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
	embed.setColor(0x006B8B)
	embed.setDescription("**Server Name: **"  + data.name + "\n" + "**Map: **" + data.map + '\n' + '**Players Online**: ' + data.raw.numplayers + '/' + data.maxplayers + '\n' + '**Server Ip/Port: **' + data.query.host + ':' + data.query.port + "\n" + "<<<============================>>>")
	embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
	embed.setImage("https://www2.pic-upload.de/img/36601434/altisbild.jpg")
	embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
  /*
   * Takes a Date object, defaults to current date.
   */
	embed.setTimestamp()
	embed.setURL("https://www.gogsworld.com/")
	var player = data.players;
	for (var i in player) {
	embed.addField("__**Player: **__" + i, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
	}
	embed.addBlankField(true)
 
  message.channel.send({embed});

	  }
	});
   }
});

client.on('ready' , message => {
//channel = client.channels.get("649274133162491945");
//wait channel.send('!start');
  var channel = client.channels.get('649270782366580756');
  channel.send("!start");
})

/*
=================================================================================================================
=====000000000000000000000000000000000000===Online List===0000000000000000000000000000000000000000000000000======
=================================================================================================================
*/	

client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var chan = client.channels.get("647829408932954113");
  const mychan = "<#647829408932954113>";
  if(command === 'start'){
  if(client.channels.find("name", "altis-online") != message.channel){
	  if (message.author !== client.user) {
			const embed = new Discord.RichEmbed();
  					embed.setTitle("ERROR!")
					embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
					embed.setColor(0x006B8B)
					embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
					embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
					embed.setTimestamp()
					embed.setURL("https://www.gogsworld.com/")
					embed.setDescription("Sorry, you can only run that Command in #altis-online \n Dont Worry, this window is going to Delete itself in 25 seconds! ")
					message.channel.send({embed});
  }}}
 if(message.channel === client.channels.find("name", "altis-online")){
	if(command === 'start'){
		if(message.channel === client.channels.find("name", "altis-online")){
			if (message.author == client.user || message.member.roles.find("name", "Admin")) {

					
					//message.delete(25000);	
							//else für client master bedingung 
							const embed = new Discord.RichEmbed()
							embed.setTitle("Bot Playerlist is about To Start:")
							embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
							embed.setColor(0x006B8B)
							embed.setFooter("Tanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
							embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
							embed.setTimestamp()
							embed.setURL("https://www.gogsworld.com/")
							embed.setDescription("The Bot is Loading the Scoreboard... \n Please be Patient \n t- 30 seconds... \n Dont Worry, this window is going to Delete itself! ")
							message.channel.send({embed})
							message.delete(30000);
						
	

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
		descriptoion: "Server is offline or restarting!"}});
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
		embed.setAuthor("GoG´s Exile Altis", "https://www2.pic-upload.de/img/36599350/discordexile.png")
		embed.setColor(0x006B8B)
		embed.setDescription("**Server Name: **"  + data.name + "\n" + "**Map: **" + data.map + '\n' + '**Players Online**: ' + data.raw.numplayers + '/' + data.maxplayers + '\n' + '**Server Ip/Port: **' + data.query.host + ':' + data.query.port + "\n" + "<<<============================>>>")
		embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
		embed.setImage("https://www2.pic-upload.de/img/36601434/altisbild.jpg")
		embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
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
						embed.setAuthor("Exile Altis Leaderboard", "https://www2.pic-upload.de/img/36599350/discordexile.png")
						embed.setColor(0xEED524)
						embed.setDescription("__**Congratulations!**__")
						embed.setFooter("Thanks for using our Bot to see the Leaderboard of GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
						embed.setImage("https://www2.pic-upload.de/img/36601434/altisbild.jpg")
						embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
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
				embed.setAuthor("Exile Altis Leaderboard", "https://www2.pic-upload.de/img/36599350/discordexile.png")
				embed.setColor(0xEED524)
				embed.setDescription("__**Congratulations!**__")
				embed.setFooter("Thanks for using our Bot to see the Leaderboard of GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
				embed.setImage("https://www2.pic-upload.de/img/36601434/altisbild.jpg")
				embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
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
		embed.setAuthor("GoG´s Exile Altis", "https://www2.pic-upload.de/img/36599350/discordexile.png")
		embed.setColor(0x006B8B)
		embed.setDescription("**Server Name: **"  + data.name + "\n" + "**Map: **" + data.map + '\n' + '**Players Online**: ' + data.raw.numplayers + '/' + data.maxplayers + '\n' + '**Server Ip/Port: **' + data.query.host + ':' + data.query.port + "\n" + "<<<============================>>>")
		embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
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
		embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
		embed.setImage("https://www2.pic-upload.de/img/36601434/altisbild.jpg")
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
						embed.setAuthor("Exile Altis Leaderboard", "https://www2.pic-upload.de/img/36599350/discordexile.png")
						embed.setColor(0xEED524)
						embed.setDescription("__**Congratulations!**__")
						embed.setFooter("Thanks for using our Bot to see the Leaderboard of GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
						embed.setImage("https://www2.pic-upload.de/img/36601434/altisbild.jpg")
						embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
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
				embed.setAuthor("Exile Altis Leaderboard", "https://www2.pic-upload.de/img/36599350/discordexile.png")
				embed.setColor(0xEED524)
				embed.setDescription("__**Congratulations!**__")
				embed.setFooter("Thanks for using our Bot to see the Leaderboard of GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
				embed.setImage("https://www2.pic-upload.de/img/36601434/altisbild.jpg")
				embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
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
				embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
				embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				embed.setDescription("Sorry, you  cant Run the Bot... \n Use __!altisonline__ instead!  \n Dont Worry, this window is going to Delete itself in 25 seconds! ")
				message.channel.send({embed});
				message.delete(25000);
			
		}
		
		}//schliesst if Channel bedingung
		else{
			const embed = new Discord.RichEmbed()
					embed.setTitle("ERROR!")
					embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
					embed.setColor(0x006B8B)
					embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", "https://www2.pic-upload.de/img/36596993/mypic.jpg")
					embed.setThumbnail("https://www2.pic-upload.de/img/36596997/gogsicon.png")
					embed.setTimestamp()
					embed.setURL("https://www.gogsworld.com/")
					embed.setDescription("Sorry, you cant Run the Bot in Altis-Online", "Dont Worry, this window is going to Delete itself in 25 seconds! ")
					message.channel.send({embed});
					message.delete(25000);	
		}
		//message.delete(35000); 
		}//else für COMMAND START
		else{ message.delete(60000);
		}
 }
else{
	//WAS SOLL PASSIEREN WENN NACHRICHT NICHT IN TANOA ONLINE?
} 
});
/*
====================================
Playing Online Update
====================================
*/

client.setInterval(activityupdate,30000);
 async function activityupdate(){
      Gamedig.query({
      type: game,
      host: host,
      port: port
	  },
  async  function(err, data) {
      if (err) {
		try {
        client.user.setActivity('Server is currently Restarting!', {type: 'PLAYING'});
		
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
			
			
			DiscordRichPresence = new discordPresence;
			memset(discordPresence, 0, sizeof(discordPresence));
			discordPresence.state = "GoG´s Exile";
			discordPresence.details = "Map: Altis";
			discordPresence.largeImageText = "GoG´s Exile Altis";
			discordPresence.smallImageText = "Rogue - Level 100";
			discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
			discordPresence.partySize = 1;
			discordPresence.partyMax = 5;
			discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
			Discord_UpdatePresence(discordPresence);
			
			
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