const Discord = require('discord.js');
const client = new Discord.Client();
// NOTE: prereq worker with "NODE_ENV=production"
const prod = process.env.NODE_ENV === 'production';
const token = prod ? process.env.BOT_TOKEN : () => {
    require('dotenv').config();
    return process.env.TEST_TOKEN;
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} in ${prod ? 'production':'deployment'} mode.`);
});

// dm interaction endpoint
client.on('message', msg => {
    if (msg.channel.type === 'dm' && !msg.author.bot) {
        console.log(`dm received from ${msg.author.username}#${msg.author.discriminator}`);
    }
});

client.login(token);