const Discord = require('discord.js');
const client = new Discord.Client();

// NOTE: prereq worker with "NODE_ENV=production"
const prod = process.env.NODE_ENV === 'production';
function loadTest() {
    require('dotenv').config();
    return process.env.TEST_TOKEN;
}
const token = prod ? process.env.BOT_TOKEN : loadTest();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} in ${prod ? 'production':'development'} mode.`);
});

// dm interaction endpoint
client.on('message', msg => {
    if (msg.channel.type === 'dm' && !msg.author.bot) {
        msg.channel.send(`Hey there ${msg.author.username}, nice to meet you!`);
    }
});


client.login(token);
