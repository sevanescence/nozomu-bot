const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN || load(); 
function load() {
    require('dotenv').load();
    return process.env.TEST_TOKEN;
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// dm interaction endpoint
client.on('message', msg => {
    if (msg.channel.type === 'dm' && !msg.author.bot) {
        console.log(`dm received from ${msg.author}`);
    }
});

client.login(token);