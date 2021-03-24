const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("message", (message) => {
  if (message.content.startsWith("!contact")) {
    message.channel.send("Mon contact pro pour une proposition ou autre est liess.rezeg@gmail.com");
  }
});
client.login('ODI0MDY0NjEzODE2ODYwNjky.YFp7-g.lXalhEy57WyqgyIpwkSzk6Z9SLw');