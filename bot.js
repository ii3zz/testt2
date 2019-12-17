const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("654725472688668683")
setInterval(function() {
channel.send(`Test`);
}, 30)
})

client.login('NjU2NDM0OTg1MDY2Mjk5Mzky.XfiwyA.tjr6ZCcVbi-31BpSb-aKMy26Bdw');
