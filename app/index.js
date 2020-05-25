const Discord = require('discord.js');
const client = new Discord.Client();

// TODO AWS API
// TODO guild config
// TODO guild config logger hook

// NOTE: prereq worker with "NODE_ENV=production"
const prod = process.env.NODE_ENV === 'production';
const token = prod ? process.env.BOT_TOKEN : function () {
    require('dotenv').config;
    return process.env.TEST_TOKEN;
}();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} in ${prod ? 'production':'development'} mode.`);
});

// dm interaction endpoint
client.on('message', msg => {
    if (msg.channel.type === 'dm' && !msg.author.bot) {
        console.log(`Message received from ${msg.author.username}#${msg.author.discriminator}`); //gitignore
        msg.channel.send(`Hey there ${msg.author.username}, nice to meet you!`);
        //msg.guild.channels.get(channelid);
        msg.author.na
    }
});


client.login(token);
