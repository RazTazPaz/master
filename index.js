const Discord = require('discord.js');
const client = new Discord.Client();
const Gamedig = require('gamedig');
const clientID = 'Njg2MTc2MzYxNDg3Nzk0MTgz.XmTZvg.rGMkPS3Hwbd0Cq_9omme2w3hEx4';
const prefix = '!';
const game = 'arma3',
      host = '89.163.135.99',
      port = '2302';
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
			client.user.setActivity('[SS]Livonia ' + '[' + rnon +'/'+ maxon + ']' + 'Online' + "|Restart:  " + xrestartm + "m", {type: 'PLAYING' } );
			}
			}
		else{
			if(xrestarth === 3){
				let xreh = 2
				if(xrestartm > 57){
					client.user.setStatus("idle");
					client.user.setActivity("THE SERVER JUST RESTARTED!", {type: 'WATCHING' } );
				}
				else
				{
			client.user.setStatus("online");
			client.user.setActivity('[SS]Livonia ' + '[' + rnon +'/'+ maxon + ']' + 'Online' + "|Restart:  "+ xreh +"h: "  + xrestartm + "m", {type: 'PLAYING' } );
			}
			}
			else
			{
				if(xrestarth === 2){
					let xreh = 1
				client.user.setStatus("online");
				client.user.setActivity('[SS]Livonia ' + '[' + rnon +'/'+ maxon + ']' + 'Online' + "|Restart:  "+ xreh +"h: "  + xrestartm + "m", {type: 'PLAYING' } );
			}
			}


	
  }
  }
  //closed my user fetch
client.login(clientID);