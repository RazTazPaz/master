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
*/🎮exile_altis_online
	if (command === 'delete')	  {
	var log = client.channels.get('677587804158558236');
	if(message.channel === client.channels.get("677151384931663882")){
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
		 if (message.channel != client.channels.find("name", "exile_altis_online") || message.channel != client.channels.find("name", "exile_tanoa_online") || message.channel != client.channels.find("name", "epoch_altis_online") || message.channel != client.channels.find("name", "dayz_epoch_online")){
		
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
		  var cut = message.content.slice(prefix.length).split(" ");
		  var part1 = cut.slice();
		  tagd = part1.length;
		  tags = tagd - 1;
		  var z = 1;
	//deleted command message!
		//message.delete();
				const embed = new Discord.RichEmbed()
				embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
				embed.setTitle("**This is a HELP/SUGGESTION Channel!!**")
				let part = cut.slice(1);
				for (let k = 0; k < tags;++z, ++k){
					
					embed.addField("User " + z +": ", part[k] + "!")
					
				}
				embed.addField("**We have set Other Channels for that sort of Discussion!**", "Visit: " + coffee + "\n" + "or:    " + coffee2 + "\n" + "or:    " + coffee3 )
				embed.addField("**KEEP THIS CHANNEL CLEAN**", "If you´re not stopping this Discussion in here you´re might to Risk a Kick!")
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
	 	  var cut = message.content.slice(prefix.length).split(" ");
		  var part1 = cut.slice(1)
	 //deleted command message!
		//message.delete();
			const embed = new Discord.RichEmbed()
				embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
				embed.setTitle("**This is A HELP Channel!!** ")
				embed.addField("__PLEASE KEEP IT CLEAN AND GIVE US ANY INFORMATION NEEDED__!",  "Thanks for asking" + part1 + ", but to Help you we need Further Information!") 
				embed.addField("We Try to Help you as much as we can in Here!", "To make that Possible Please Stick to the following Format!")
				embed.addField("__**When Asking for Help make sure to Mention:**__" , "Your In Game Name:" + "\n" + "When did it Happen(if Needed):" + "\n" + "What´s your actual Issue:" + "\n" + "Tell us the Basename if a Territory is involved:" + "\n" + "If known and needed: Whats your opponets IGN?"+"\n"+"Video or clear Screens as Proof(if Needed):")
				embed.addField("__If you don´t stick to this Format your Request might not get answerd!__", "The Admin" + "<@" + message.author.id + "> requested this Message!")
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


if (command ===  "advice"){
  if(message.channel != client.channels.get("244379737290440704") && message.channel != client.channels.get("360712752286924805") && message.channel != client.channels.get("360711629698236417") && message.channel != client.channels.get("360722269393387521") && message.channel != client.channels.get("360721823748456448") && message.channel != client.channels.get("360718915791224842") && message.channel != client.channels.get("360706974221860865")){
	 //deleted command message!
		//message.delete();
		advices = ["Did you know that Altis is called Lemnos in Real Life?", "You can´t Build higher than 30m" , "You can use !building to get a List with our Building Rules" , "There are 5 Different Rocketlaunchers in Exile" , "You can use !ping as bot command" , "You can use !punishments to get a list with the Serverrules and Punishments", "Did you know that we have 19 different custom Missions on GoG´s world?" , "Did you know that GoG´s world is already existing for 6 Years?" , "Looting isn´t always that boring!" , "The best Way to get Money is farming Vehicles or doing Missions", "There are 5 different Attack Choppers on Exile!" , "Black Markets sell Special guns, but are often Camped or Mined!" , "Claimed Vehicles Despawn after 5 days of Inactivity!", "You have to Pay your Base every 10 Days" , "You can Build up to 300 Parts in your Territory" , "Upgrading a Base to the Max. Level Costs 275K Poptabs" , "That we Love to get new Ideas via Suggestions?"] 
			var leng = advices.length;
			var chann = message.channel;
			var logch = client.channels.get('677587804158558236');
			function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
			}
			message.delete();
			let adv = getRandomInt(leng)
			const embed = new Discord.RichEmbed()
				embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
				embed.setTitle("**SENDING ADVICE!**")
				embed.addField("__Here is something for you__!",  "Thanks for asking" + "<@" + message.author.id + "> !") 
				embed.addField("The Advice of the Day is:", advices[adv] + "...")
				embed.addField("__If you know other cool things suggest them and they will be added!__")
				embed.setColor(0x8B0000)
				embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				chann.send({embed});
			
					function logging(){
					const embed = new Discord.RichEmbed()
						embed.setAuthor("GoG´s Exile Altis", "https://images-ext-2.discordapp.net/external/PPWckmifC9Rp0AR3JltvQJ_PCf8ufrL8-e0nNaDpyy8/https/cdn.discordapp.com/attachments/475855425275953153/647553970214273033/discordexile.png")
						embed.setTitle("**Advice Order Sent**")
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





/*
=====================================================
=================BUILDING RULES======================
=====================================================
*/
if (command === 'building')	  {
	  var logp = client.channels.get('677587804158558236');
	  var chann = message.channel;
	  
	  if(message.channel != client.channels.get("244379737290440704") && message.channel != client.channels.get("360712752286924805") && message.channel != client.channels.get("360711629698236417") && message.channel != client.channels.get("526343596434128896")/*memes*/ && message.channel != client.channels.get("360701101009534976")/*general*/ && message.channel != client.channels.get("320094820087496704")/*media*/ && message.channel != client.channels.get("529043752623407134")/*lfg*/){
	  	  
		  const embed = new Discord.RichEmbed()
				embed.setTitle("Building Rules Listed")
				embed.setDescription("In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logp.send({embed});
				//S"<@"+messageDelete.author.id+">"
				function buildingrules(){
				const embed = new Discord.RichEmbed()
				var cut = message.content.slice(prefix.length).split(" ");
				var part1 = cut.slice(1)
				embed.setTitle("**HELLO, HERE ARE OUR BUILDINGRULES!**")
				embed.addField("Thanks for asking!" , part1 + " Below is a List with the Buildingrules!");
				embed.addField("===============================================", "===================**ROADS**====================")
				embed.addField("**RULE 1: ** ", "No Building on Roads", false)
				embed.addField("**DEFINITION**", "No Building on Roads", true)
				embed.addField("**DEFINITION**","Not Blocking Roads", true)
				embed.addField("**DEFINITION**","No Building on/over Bridges", true)
				embed.addField("===============================================", "===================**RunWays**====================")
				embed.addField("**RULE 2: ** ", "No Building on Runways", false)
				embed.addField("**DEFINITION**", "No Building near Runways within 100m ", true)
				embed.addField("===============================================", "===================**Traders**====================")
				embed.addField("**RULE 3: **", "No Building near Traders", false)
				embed.addField("**DEFINITION:** ", "No Building within 1km to Static Traders!", true)
				embed.addField("**DEFINITION:**","No Building within 500m to Concrete Mixers" , true)
				embed.addField("===============================================", "==================**Loot Areas**===================")
				embed.addField("**RULE 4: **", "Don´t Build close to these Loot Zones", false)
				embed.addField("**DEFINITION:** ", "No Building close to Military Zones", true)
				embed.addField("**DEFINITION:**","No Building close to Industrial Areas" ,true)
				embed.addField("===============================================", "====================**Abusing**=====================")
				embed.addField("**RULE 5: **", "Reachability", false)
				embed.addField("**DEFINITION:** ", "No Building in indestrctible Objects", true)
				embed.addField("**DEFINITION:**","Bases must have a Door(Epoch)",true)
				embed.addField("Info 1: ", "Base Payments are to Pay in a 10 Day Period!")
				embed.addField("Info 2: ", "If Admins see a Base which is against the Rules, they will delete Player Built Items!")
				embed.setColor(0x086C34)
				embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				chann.send({embed});
				}
				buildingrules();
			}
else{
			const embed = new Discord.RichEmbed()
				embed.setTitle("Buildingrule List Failed")
				embed.setTitle("Buildingrule can´t be Listed in Suggestions and General!")
				embed.addField("Someone tried to Use !Format" ,"In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logp.send({embed});
}
//CLOSES building
		}
	/*
=====================================================
====================Event Annnouncer=================
=====================================================
*/	
if(command === "event"){
	if (message.member.roles.find("name", "Admin")){
	if(message.channel === client.channels.get("487701432670224394") || message.channel === client.channels.get("677587804158558236")){
	message.delete();
	  var logp = client.channels.get('677587804158558236');
	  var chann = message.channel;
	  var cut = message.content.slice(prefix.length).split(" / ");
	  var part1 = cut.slice(1); //Server
	  var partserver = part1.shift().toUpperCase();
	  var part2 = cut.slice(2); //event type
	  var parttype = part2.shift().toUpperCase();
	  var part3 = cut.slice(3); //event place
	  var placepart = part3.shift().toUpperCase();
	  var part4 = cut.slice(4);//description 
	  var despart = part4.shift().toUpperCase();
	  var part5 = part1[3];
	  var part6 = part1[4];
	  var part7 = part1[5];
	  var part8 = part1[6];
		  const embed = new Discord.RichEmbed()
				embed.setTitle("Event Announcement Listed")
				embed.setDescription("In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logp.send({embed});
				
				function event(){
				const embed = new Discord.RichEmbed()
				embed.setTitle("**Hello, " + message.author.tag + ": IS ANNOUNCING AN EVENT!**")
				embed.addField("=========================================", "================**SERVER**=================")
				embed.addField("**The EVENT will take Place on: ** ", partserver )
				embed.addField("=========================================", "================**EVENT TYPE**=================")
				embed.addField("**The EVENT will be: **", parttype)
				embed.addField("=========================================", "===================**WHERE?**====================")
				embed.addField("**The EVENT will take Place in: **",placepart)
				embed.addField("=========================================", "================**DESCRIPTION**=================")
				embed.addField("**This is how the EVENT is going to be Like: **", despart )
				embed.addField("=========================================", "================**ESTIMATED REWARD**=================")
				embed.addField("**Everyone who Joins will get a Reward for Joining of: ** ", part5 + "Poptabs!")
				embed.addField("**The Player who Wins will get a Reward of: ** ", part6 + "Poptabs!")
				embed.addField("=========================================", "================**TIME**=================")
				embed.addField("**The EVENT will take Place around: ** ", part7 )
				embed.addField("Info 1: ", "Everyone who wants to Join is Invited to. If youre not Online or Ready before it starts, it could happen that you aren´t allowed to Join!")
				embed.addField("Info 2: ", "The Actual Rewards may vary or could also contain Respect!")
				embed.addField("Info 3: ", "The Event Moderator will be" + part8 + "! Please Listen to his Commands!")
				embed.addField("Info 4: ", "Plase Notice, that " + part8 + "will only start the Event when enough Players Joined it!")
				embed.setColor(0x086C34)
				embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				chann.send({embed});
				}
				event();
			}
else{
			const embed = new Discord.RichEmbed()
				embed.setTitle("EVENT List Failed")
				embed.setTitle("Event can  only be  Listed in Event Announcements!")
				embed.addField("Someone tried to Use !Format" ,"In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logp.send({embed});
}
//CLOSES building
}	}		
//closes command

if(command === "eventhelp"){
	if (message.member.roles.find("name", "Admin")){
		if(message.channel === client.channels.get("487701432670224394") || message.channel === client.channels.get("677587804158558236")){
	  var logp = client.channels.get('677587804158558236');
	  var chann = message.channel;

		  const embed = new Discord.RichEmbed()
				embed.setTitle("Event Help Listed")
				embed.setDescription("In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logp.send({embed});
				
				function eventhelp(){
				const embed = new Discord.RichEmbed()
				embed.setTitle("**Hello, " + message.author.tag + "! This is the Event Help window!**")
				embed.addField("To Announce an Event with this bot use the following format!", "!event / server map / event type / event place / short description / joining reward / winning reward / time when you want to start / @the event moderator with discord tag ")
				embed.addField("Example Use: ", "!event / exile altis / battleroyale / gorgetown / players get dropped by a plane and have to kill each other til only one player is left alive / 15000 / 30000 / 18:00 CEWT / @RazTazPaz")
				embed.setColor(0x086C34)
				embed.setFooter("Thanks for using our Bot! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				chann.send({embed});
				}
				eventhelp();
			}
else{
			const embed = new Discord.RichEmbed()
				embed.setTitle("EVENT Help Failed")
				embed.setTitle("Event can  only be  Listed in Event Announcements!")
				embed.addField("Someone tried to Use !Format" ,"In: " + message.channel + " From: " + message.author)
				embed.setColor(0xb34141)
				embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				logp.send({embed});
}
//CLOSES building
}	}
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
	if(client.channels.find("name", "bot-logs")!= newmessage.channel && client.channels.find("name", ":video_game:exile_altis_online")!= newmessage.channel && client.channels.find("name", ":video_game:exile_tanoa_online")!= newmessage.channel && client.channels.find("name", ":video_game:epoch_altis_online")!= newmessage.channel && client.channels.find("name", ":video_game:dayz_epoch_online")  != newmessage.channel){
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
=====000000000000000000000000000000000000===NEEDED VARS===0000000000000000000000000000000000000000000000000======
=================================================================================================================
*/

	let num2 = 0;
	let servername = 0;
	let servermap = 0;
	let player = 0;
	let players = 0;
	let maxplayers = 0;
	let sip = 0;
	let sport = 0;
	let rnon = 0;
	let maxon = 0;

/*
=================================================================================================================
=====000000000000000000000000000000000000===Online List===0000000000000000000000000000000000000000000000000======
=================================================================================================================
*/	
/*
client.setInterval(messagecontent,50000);

 async function messagecontent(){
	 client.fetchUser("305734474308517898").then(myUser => {
Gamedig.query({
      type: game,
      host: host,
      port: port
    },
    function(err, data) {
      if (err) {
		  //IF ERROR? 
		    var logstart = client.channels.get('677587804158558236'); //bot spam
			const embed = new Discord.RichEmbed()
			embed.setTitle("WARNING, BOT COULDNT FETCH ONLINE LIST!");
			embed.addField(num2 + "and" + servername + "and" + servermap + "and" + players + "and" + maxplayers + "and" + sip + "and" + sport +"and" + rnon + "and" + maxon)
			embed.setColor(0x086C34)
			embed.setAuthor("GoG´s Exile Altis", myUser.displayAvatarURL)
			logstart.send({embed});
	  }	
	 
	else { 
	if(data){
	//add all vars!!
	 num2 = parseInt(data.raw.numplayers);
	 servername = data.name;
	 servermap = data.map;
	 player = data.players;
	 players = data.raw.numplayers;
	 maxplayers = data.maxplayers;
	 sip = data.query.host;
	 sport = data.query.port;
	}}
	});
 })}
 */
client.on('message', message => {
	client.fetchUser("305734474308517898").then(myUser => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var chan = client.channels.get("647829408932954113");
  //logging var for online interval
  var onlinelog = client.channels.get('677587804158558236');
  const mychan = "<#647829408932954113>";
  client.channels.get("677151384931663882")!= message.channel && client.channels.find("name", ":video_game:exile_tanoa_online")!= message.channel && client.channels.find("name", ":video_game:epoch_altis_online")!= message.channel && client.channels.find("name", ":video_game:dayz_epoch_online")  != message.channel){

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


client.channels.get("677151384931663882") === message.channel){
	 
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
		
		if(message.channel === client.channels.get("677151384931663882")){
			
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
	/*
	==================RESTART IN==============================
	*/
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
		var a = "hey";
		if(xrestarth == 1){
		 a = "**Restart in: ** ";
		}else{
			if(xrestarth == 3){
				a = "**Restart in:** 2 Hours ";
			}else{if(xrestarth == 2){
				a = "**Restart in:** 1 Hour ";
			}
		}}
		
	if(xrestarth === 3 && xrestartm > 54){
		min = xrestartm - 54;
			const embed = new Discord.RichEmbed()
				embed.setTitle("**THE SERVER HAS JUST RESTARTED!**")
				embed.setAuthor("Exile Altis Online List", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setColor(0x800080)
				embed.setDescription("__**You can see the Online List again in a few Minutes!**__")
				embed.setFooter("Thanks for using our Bot to see the Online List of GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/678991938690613261/try.gif")
				embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				embed.addField("The Server has just Restarted! Please wait while the Online List is about to Load", "List will be available in: " + min + " Minutes! Thanks for your Patience!" )
				message.channel.send({embed});
	}
	else{
	if(xrestarth != 1){
	if (num2 < 25){
		const embed = new Discord.RichEmbed()
		embed.setTitle("**LIST OF PLAYERS ONLINE:**")
		embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
		embed.setColor(0x006B8B)
		embed.setDescription("**Server Name: **"  + servername + "\n" + "**Map: **" + servermap +  "\n" + a + xrestartm + " Minutes!" + '\n' + '**Players Online**: ' + players + '/' + maxplayers + '\n' + '**Server IP/Port: **' + sip + ':' + sport + "\n" + "<<<============================>>>")
		embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
		embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/678991938690613261/try.gif")
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
		embed.setTimestamp()
		embed.setURL("https://www.gogsworld.com/")
		var n = 1;
		for (let i = 0; i < num2;++n, ++i){
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
		}//CLOSES FOR TO NUM2
		message.channel.send({embed});
		}		//clost IF ARRAY LENGTH
/*
==================================================
=======For  more than 25Players===================
==================================================
*/	

	else{

		try {
		//TOP CHART WITH NAME ICON AND HEADER
		function msg1(){
		const embed = new Discord.RichEmbed()
		embed.setTitle("**LIST OF PLAYERS ONLINE:**")
		embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
		embed.setColor(0x006B8B)
		embed.setDescription("**Server Name: **"  + servername + "\n" + "**Map: **" + servermap +  "\n" + a + xrestartm + " Minutes!" +  "\n" + '**Players Online**: ' + players + '/' + maxplayers + '\n' + '**Server IP/Port: **' + sip + ':' + sport + "\n" + "<<<============================>>>")
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
		embed.setURL("https://www.gogsworld.com/")
		var n = 1;
		for (let i = 0; i < 24; ++n, ++i){ //set to 24!!!!!!!
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
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
		const embed = new Discord.RichEmbed()
		setTimeout(function(){
		embed.setColor(0x006B8B)
		embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
		embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/678991938690613261/try.gif")
		embed.setTimestamp()
		embed.setURL("https://www.gogsworld.com/")
		var n = 25;
		for (let i = 24; i < num2; ++n, ++i){ //set to 24!!!!!!!
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
		}
		message.channel.send({embed});
		},1500); }
		msg1();
		msg2();
			
		}catch(error) { console.log('caught', error.message); };
	}
	//closes else for more than 25 players
	}
	// WAS WENN ZEIT BIS RESTART NICHT = X=?
	else{
			if(xrestartm > 5){
	if (num2 < 25){
		const embed = new Discord.RichEmbed()
		embed.setTitle("**LIST OF PLAYERS ONLINE:**")
		embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
		embed.setColor(0x006B8B)
		embed.setDescription("**Server Name: **"  + servername + "\n" + "**Map: **" + servermap + "\n" + a + xrestartm + " Minutes!" + '\n' + '**Players Online**: ' + players + '/' + maxplayers + '\n' + '**Server IP/Port: **' + sip + ':' + sport + "\n" + "<<<============================>>>")
		embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
		embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/678991938690613261/try.gif")
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
		embed.setTimestamp()
		embed.setURL("https://www.gogsworld.com/")
		var n = 1;
		for (let i = 0; i < num2;++n, ++i){
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
}
		message.channel.send(embed);
	}
	else{
		try {
		//TOP CHART WITH NAME ICON AND HEADER
		function msg1(){
		const embed = new Discord.RichEmbed()
		embed.setTitle("**LIST OF PLAYERS ONLINE:**")
		embed.setAuthor("GoG´s Exile Altis", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
		embed.setColor(0x006B8B)
		embed.setDescription("**Server Name: **"  + servername + "\n" + "**Map: **" + servermap +  "\n" + a + xrestartm + " Minutes!" +  "\n" + '**Players Online**: ' + players + '/' + maxplayers + '\n' + '**Server IP/Port: **' + sip + ':' + sport + "\n" + "<<<============================>>>")
		embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
		embed.setURL("https://www.gogsworld.com/")
		var n = 1;
		for (let i = 0; i < 24; ++n, ++i){ //set to 24!!!!!!!
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
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
		const embed = new Discord.RichEmbed()
		setTimeout(function(){
		embed.setColor(0x006B8B)
		embed.setFooter("Thanks for using our Bot to see a List of Online Players on GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
		embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/678991938690613261/try.gif")
		embed.setTimestamp()
		embed.setURL("https://www.gogsworld.com/")
		var n = 25;
		for (let i = 24; i < num2; ++n, ++i){ //set to 24!!!!!!!
		embed.addField("__**Player: **__" + n, "\n" + "**Player Name:** " + player[i].name + "\n" + '**Score **: ' + player[i].score + "\n" + '**Time In Game: **' + timeFormat(player[i].time))
		}
		message.channel.send({embed});
		},1500); }
		msg1();
		msg2();
			
		}catch(error) { console.log('caught', error.message); };
	}
		}
		else //if TIME == 0
	{
				const embed = new Discord.RichEmbed()
				embed.setTitle("**THE SERVER IS ABOUT TO RESTART!**")
				embed.setAuthor("Exile Altis Online List", "https://cdn.discordapp.com/attachments/572416781428326410/676899725135314965/discordexile.png")
				embed.setColor(0x800080)
				embed.setDescription("__**You can see the Online List again in a few Minutes!**__")
				embed.setFooter("Thanks for using our Bot to see the Online List of GoG´s Exile Altis! Code by RazTazPaz", myUser.displayAvatarURL)
				embed.setImage("https://cdn.discordapp.com/attachments/572416781428326410/678991938690613261/try.gif")
				embed.setThumbnail("https://cdn.discordapp.com/attachments/572416781428326410/676898603503058954/gogsicon.png")
				embed.setTimestamp()
				embed.setURL("https://www.gogsworld.com/")
				embed.addField("The Server is about to Restart in: " ,  xrestartm + " Minutes!")
				message.channel.send({embed});
	}
	//closed else
	}
	}
	

   }catch(UnhandledPromiseRejectionWarning) { e = 'Uk'
 }}}
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
		else{
			message.delete(60000);
		}
 }
	else{
	//WAS SOLL PASSIEREN WENN NACHRICHT NICHT IN Altis ONLINE?
} 
 });
});


/*
====================================
=====Playing Online Update==========
====================================
*/
client.setInterval(activitycontent,10000);
async function activitycontent(){
	client.fetchUser("305734474308517898").then(myUser => {
	Gamedig.query({
      type: game,
      host: host,
      port: port
	  },
  async  function(err, data) {
      if (err) {
        var logstart = client.channels.get('679866674052333616'); //bot spam
			const embed = new Discord.RichEmbed()
			embed.setTitle("WARNING, BOT COULDNT FETCH ONLINE STATUS!");
			embed.addField(num2 + "and" + servername + "and" + servermap + "and" + players + "and" + maxplayers + "and" + sip + "and" + sport +"and" + rnon + "and" + maxon)
			embed.addField("These Datas will be used in the following Update if the Error keeps appearing!" , "Thanks for using the Bot");
			embed.setColor(0x086C34)
			embed.setAuthor("GoG´s Exile Altis", myUser.displayAvatarURL)
			logstart.send({embed});
	  }
	  else{
		  if(data){
         player = data.numplayers;
		 rnon = data.raw.numplayers;
		 maxon = data.maxplayers;
		 num2 = parseInt(data.raw.numplayers);
		servername = data.name;
		servermap = data.map;
		player = data.players;
		players = data.raw.numplayers;
		maxplayers = data.maxplayers;
		sip = data.query.host;
		sport = data.query.port;
	  }
	  }
})
})}
client.setInterval(activityupdate,10000);
 async function activityupdate(){
      
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
		
		if(xrestarth === 1){
			if(xrestartm < 6){
			client.user.setStatus("dnd");
			client.user.setActivity("SERVER IS RESTARTING! SERVER LOCKED!" , {type: 'WATCHING' } );
			}
			else {
			client.user.setStatus("online");
			client.user.setActivity('Exile Altis ' + '[' + rnon +'/'+ maxon + ']' + 'Online' + "|Restart:  " + xrestartm + "m", {type: 'PLAYING' } );
			}
			}
		else{
			if(xrestarth === 3){
				let xreh = 2
				if(xrestartm > 54){
					client.user.setStatus("idle");
					client.user.setActivity("THE SERVER JUST RESTARTED!", {type: 'WATCHING' } );
				}
				else
				{
			client.user.setStatus("online");
			client.user.setActivity('Exile Altis ' + '[' + rnon +'/'+ maxon + ']' + 'Online' + "|Restart:  "+ xreh +"h: "  + xrestartm + "m", {type: 'PLAYING' } );
			}
			}
			else
			{
				if(xrestarth === 2){
					let xreh = 1
				client.user.setStatus("online");
				client.user.setActivity('Exile Altis ' + '[' + rnon +'/'+ maxon + ']' + 'Online' + "|Restart:  "+ xreh +"h: "  + xrestartm + "m", {type: 'PLAYING' } );
			}
			}


	
  }
  }
  //closed my user fetch
client.login(clientID);