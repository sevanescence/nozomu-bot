const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', msg => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    if (msg.author.username === "MakotoMiyamoto" && msg.channel === ChannelType.dm) {
        msg.channel.send("Hey there, Makoto!");
    }
});

client.login(process.env.BOT_TOKEN);