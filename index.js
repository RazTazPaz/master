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
				embed.setTitle("Ponged Baron")
				embed.setDescription("In: " + message.channel)
				embed.setColor(0x086C34)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				log.send({embed});
				
				function reply(){
				const embed = new Discord.RichEmbed()
				.setTitle(message.author.tag +", Ponging to the Leader! :heart: ")
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
	/*
===========================================================
===============PUNISHMENTS=================================
===========================================================
*/
	  if (command === 'punishments')	  {
	  var logp = client.channels.get('677587804158558236');
	  var chann = message.channel;
	  
	  if(message.channel != client.channels.get("244379737290440704") && message.channel != client.channels.get("360712752286924805") && message.channel != client.channels.get("360711629698236417") && message.channel != client.channels.get("526343596434128896")/*memes*/ && message.channel != client.channels.get("360701101009534976")/*general*/ && message.channel != client.channels.get("320094820087496704")/*media*/ && message.channel != client.channels.get("529043752623407134")/*lfg*/){
	  	  
		  const embed = new Discord.RichEmbed()
				embed.setTitle("Punishments Listed")
				embed.setDescription("In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logp.send({embed});
				
				function punishments(){
				const embed = new Discord.RichEmbed()
				embed.setTitle("**Hello, " + message.author.tag + " HERE ARE OUR PUNISHMENTS FOR RULEBREAKING!**")
				embed.addField("===============================", "==========**General Rules**===========")
				embed.addField("**RULE:** ", "No Hacking", true)
				embed.addField("**PUNISHMENT**", "Permanent Ban", true)
				embed.addField("**PUNISHMENT 2. Time**", "N/A", true)
				embed.addField("**RULE:** ", "No Glitching", true)
				embed.addField("**PUNISHMENT**", "Warning and Fine* ", true)
				embed.addField("**PUNISHMENT 2. Time**", "Permanent Ban", true)
				embed.addField("**RULE:** ", "No Duping" , true)
				embed.addField("**PUNISHMENT**", "TempBan + Fine*", true)
				embed.addField("**PUNISHMENT 2.Time**", "Permanent Ban", true)
				embed.addField("**RULE:** ", "No StreamSniping" ,true)
				embed.addField("**PUNISHMENT**", "Temp Ban + Fine*", true)
				embed.addField("**PUNISHMENT 2.Time**", "Permanent Ban", true)
				embed.addField("**RULE:** ", "No Spamming",true)
				embed.addField("**PUNISHMENT**", "Warning", true)
				embed.addField("**PUNISHMENT 2.Time**", "Kick", true)
				embed.addField("===============================", "=========**SafeZone Rules**==========")
				embed.addField("**RULE:** ", "No Stealing",true)
				embed.addField("**PUNISHMENT**", "Fine*", true)
				embed.addField("**PUNISHMENT 2.Time**", "Kill + Fine*", true)
				embed.addField("**RULE:** ", "No Ramming", true)
				embed.addField("**PUNISHMENT**", "Vehicle Deleted", true)
				embed.addField("**PUNISHMENT 2.Time**", "Kill + First Action", true)
				embed.addField("Info 1: ", "Fines are Generally between 25-100% of Players Money and Respect(On EXILE)!")
				embed.addField("Info 2: ", "Excessive abuse of any of the rules above will result in a permanent ban!")
				embed.setColor(0x086C34)
				embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				chann.send({embed});
				}
				punishments();
			}
else{
			const embed = new Discord.RichEmbed()
				embed.setTitle("Punishments List Failed")
				embed.setTitle("Punishments can´t be Listed in Suggestions and General!")
				embed.addField("Someone tried to Use !Format" ,"In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logp.send({embed});
}
//CLOSES PUNISHMENTS
		}
/*
========================================
=============SPAM PROTECTION============
========================================
*/
 if (command ===  "coffee"){
	var logch = client.channels.get('677587804158558236');
	var chann = message.channel;
	var coffee = client.channels.get('496912750401028097');
	var coffee2 = client.channels.get('496912671870812161');
	var coffee3 = client.channels.get('496912427510661131');
  if (message.member.roles.find("name", "Admin")){
   if(message.channel === client.channels.get("360722269393387521") || message.channel === client.channels.get("360721823748456448") || message.channel === client.channels.get("677587804158558236") || message.channel === client.channels.get("360718915791224842") || message.channel === client.channels.get("360706974221860865")){
	 //deleted command message!
		//message.delete();
				const embed = new Discord.RichEmbed()
				embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
				embed.setTitle("**This is a HELP Channel!!**")
				embed.addField("We have set Other Channels for that sort of Discussion!", "Visit: " + coffee + "\n" + "or:    " + coffee2 + "\n" + "or:    " + coffee3 )
				embed.addField("**KEEP THIS CHANNEL CLEAN**", "If you´re not stopping this Discussion in here you´re about to Risk a Kick!")
				embed.setColor(0x8B008B)
				embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				chann.send({embed});
			
					function logging(){
					const embed = new Discord.RichEmbed()
						embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
						embed.setTitle("**Coffee Channel Order Sent**")
						embed.setColor(0x8B008B)
						embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
						embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
						embed.setTimestamp()
						embed.setURL("https://www.gogsworld.com/")
						logch.send({embed});
					}
logging();
				}
			else{
			const embed = new Discord.RichEmbed()
				embed.setTitle("Coffee Command Not Executed!")
				embed.setTitle("Can only be Used in Help Channels!")
				embed.addField("Someone tried to Use !Format" ,"In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logch.send({embed});
}
			}
}
/*
========================================
=============Go To HELP============
========================================
*/
 if (command ===  "gohelp"){
  if (message.member.roles.find("name", "Admin")){
   if(message.channel != client.channels.get("360722269393387521") || message.channel != client.channels.get("360721823748456448") || message.channel != client.channels.get("677587804158558236") || message.channel != client.channels.get("360718915791224842") || message.channel != client.channels.get("360706974221860865")){
	 //deleted command message!
		//message.delete();
	var logch = client.channels.get('677587804158558236');
	var chann = message.channel;
	var helpea = client.channels.get('360721823748456448');
	var helpet = client.channels.get('360722269393387521');
	var helpa = client.channels.get('360718915791224842');
	var helped = client.channels.get('360706974221860865');
			
				const embed = new Discord.RichEmbed()
				embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
				embed.setTitle("**This is NOT A HELP Channel!!**", "You won´t get any Help in here!")
				embed.addField("We have Help Channels where you can get Help by Admins and Players!", "Visit: " + helpea  + "\n" + "or:    " + helpet + "\n" + "or:    " + helpa + "\n" + "or: " + helped)
				embed.addField("**KEEP THE HELP CHANNELS CLEAN!!**", "__When Asking for Help make sure to Mention:__" + "\n" + "Your In Game Name:" + "\n" + "When did it Happen(if Needed):" +   "\n" + "What´s your actual Issue:" +"\n" + "Needed Video/Screen Proof(if Needed):" + "\n" + "If you don´t stick to this Format your Request might not get answerd!" )
				embed.setColor(0x8B0000)
				embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				chann.send({embed});
			
					function logging(){
					const embed = new Discord.RichEmbed()
						embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
						embed.setTitle("**Help Channel Order Sent**")
						embed.setColor(0x8B008B)
						embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
						embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
						embed.setTimestamp()
						embed.setURL("https://www.gogsworld.com/")
						logch.send({embed});
					}
logging();
				}
else{
			const embed = new Discord.RichEmbed()
				embed.setTitle("GO Help Command Not Executed!")
				embed.setTitle("Punishments can´t be Listed in Help Channels!")
				embed.addField("Someone tried to Use !Format" ,"In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logch.send({embed});
}
			}
}


if (command ===  "format"){
	var logch = client.channels.get('677587804158558236');
	var chann = message.channel;
	var helpea = client.channels.get('360721823748456448');
	var helpet = client.channels.get('360722269393387521');
	var helpa = client.channels.get('360718915791224842');
	var helped = client.channels.get('360706974221860865');
  if (message.member.roles.find("name", "Admin")){
   if(message.channel === client.channels.get("360722269393387521") || message.channel === client.channels.get("360721823748456448") || message.channel === client.channels.get("677587804158558236") || message.channel === client.channels.get("360718915791224842") || message.channel === client.channels.get("360706974221860865")){
	 //deleted command message!
		//message.delete();
			const embed = new Discord.RichEmbed()
				embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
				embed.setTitle("**This is A HELP Channel!!**", "__PLEASE KEEP IT CLEAN AND GIVE US ANY INFORMATION NEEDED__!")
				embed.addField("We Try to Help you as much as we can in Here!", "To make that Possible Please Stick to the following Format!")
				embed.addField("__**When Asking for Help make sure to Mention:**__" , "Your In Game Name:" + "\n" + "When did it Happen(if Needed):" +   "\n" + "What´s your actual Issue:" +"\n" + "Needed Video/Screen Proof(if Needed):" + "\n" + "__If you don´t stick to this Format your Request might not get answerd!__" )
				embed.setColor(0x8B0000)
				embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				chann.send({embed});
			
					function logging(){
					const embed = new Discord.RichEmbed()
						embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
						embed.setTitle("**Help Channel Order Sent**")
						embed.setColor(0x8B008B)
						embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
						embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
						embed.setTimestamp()
						embed.setURL("https://www.gogsworld.com/")
						logch.send({embed});
					}
logging();
				}
else{
			const embed = new Discord.RichEmbed()
				embed.setTitle("Format Command Not Executed!")
				embed.setTitle("Command needs to get Executed in Help Channels!")
				embed.addField("Someone tried to Use !Format" ,"In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logch.send({embed});
}
			}
}

if(command === "go"){
	var restart = new Date();	
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
		const embed = new Discord.RichEmbed()
		//var lng = player[i].length;
		embed.setTitle("**LIST OF PLAYERS ONLINE:**")
		embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
		embed.setColor(0x006B8B)
var player = data.players;
var j = [];
var result = [];
for(let k = 0; k < num2; ++k){
	j.push(k);
}
for (let z = 0; z < num2 ; ++z){
  result.push([player[z].score, j[z]])
		}
var ID_COLUMN=0
var URL_COLUMN=1

findings.sort(compareByColumnIndex(0))

function compareByColumnIndex(index) {
  return function(result, j){
    if (result[index] === j[index]) {
        return 0;
    }
    else {
        return (result[index] < j[index]) ? -1 : 1;
    }
  }
}
		var n = 1;
		for (let i = 0; i < num2;++n, ++i){
			var m = result.j[i];
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[m].name + "\n" + '**Score **: ' + player[m].score + "\n" + '**Time In Game: **' + timeFormat(player[m].time))
		//embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
		}//CLOSES FOR TO NUM2
		
		
		message.channel.send({embed});
}

	})}
	
		//clost IF ARRAY LENGTH

//closes command
//CLOST MY AVATAR FETCH
	})
//CLOST MESSAGE DETECTION
});
/*
=====================================================
====================EDIT LOGGER======================
=====================================================
*/
client.on("messageUpdate", (newmessage, oldmessage) => {
	client.fetchUser("305734474308517898").then(myUser => {
	var user = "<@305734474308517898>";
	var editlog = client.channels.get('677587804158558236'); //bot spam
	var str = newmessage.content;
	var str2 = oldmessage.content;
if (newmessage.author != client.user){
	if(client.channels.find("name", "bot-logs")!= newmessage.channel && client.channels.find("name", "exile_altis_online")!= newmessage.channel && client.channels.find("name", "exile_tanoa_online")!= newmessage.channel && client.channels.find("name", "epoch_altis_online")!= newmessage.channel && client.channels.find("name", "dayz_epoch_online")  != newmessage.channel){
		if(Boolean(str) && Boolean(str2)){
  function oldmsg(){
  let UpdateEmbed = new Discord.RichEmbed()
  .setTitle("**EDITED NEW MESSAGE**")
  .setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
  .setColor("#fc3c3c")
  UpdateEmbed.addField("Author", "<@"+oldmessage.author.id+">", true)
  UpdateEmbed.addField("Channel", oldmessage.channel, true)
  UpdateEmbed.addField("Message", oldmessage.content)
  UpdateEmbed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
  .setTimestamp()
  .setURL("https://www.gogsworld.com/")
  editlog.send(UpdateEmbed);
  }
  function newmsg(){
  let UpdateEmbed = new Discord.RichEmbed()
  .setTitle("**OLD MESSAGE**")
  .setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
  .setColor("#fc3c3c")
  UpdateEmbed.addField("Author", "<@"+newmessage.author.id+">", true)
  UpdateEmbed.addField("Channel", newmessage.channel, true)
  UpdateEmbed.addField("Message", newmessage.content)
  UpdateEmbed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
  .setTimestamp()
  .setURL("https://www.gogsworld.com/")
  editlog.send(UpdateEmbed);
	}
	oldmsg();
	newmsg();
		}
	//wenn nachricht = BILD
	else {
		let UpdateEmbed = new Discord.RichEmbed()
		.setTitle("**EDITED MESSAGE WAS A PICTURE**")
		.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
		.setColor("#fc3c3c")
		UpdateEmbed.addField("Author", "<@"+newmessage.author.id+">", true)
		UpdateEmbed.addField("Channel", newmessage.channel, true)
		UpdateEmbed.addField("Message", "Deleted Message was a Picture!")
		UpdateEmbed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
		.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
		.setTimestamp()
		.setURL("https://www.gogsworld.com/")
		editlog.send(UpdateEmbed);
	}
}}
});
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
  DeleteEmbed.addField("Author", "<@"+messageDelete.author.id+">", true)
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
		DeleteEmbed.addField("Author",	"<@"+messageDelete.author.id+">", true)
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




/*
====================================
=====Playing Online Update==========
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
        client.user.setActivity('Failed to Fetch Data! If the Error keeps appearing please notice RazTazPaz!', {type: 'PLAYING'});
	  }
	  else{
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
		
		if(xrestarth == 1{
			if(xrestartm < 6){
		client.user.setStatus("online");
		client.user.setActivity("THE SERVER IS ABOUT TO RESTART! SERVER LOCKED!" , {type: 'WATCHING' } );
			}
			else {
			client.user.setStatus("dnd");
			client.user.setActivity('Exile Altis' + '[' + data.raw.numplayers +'/'+ data.maxplayers + ']' + 'Online' + "|Restart:  " + xrestartm + "min", {type: 'PLAYING' } );
			}
			}
		else{
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
		
  }}});
 }
client.login(clientID);