const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', msg => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    if (msg.channel.type === 'dm') {
        msg.channel.send('Hey there!' + 
        'Sorry, I\'m gonna say this every time you talk, I\'m still in testing phase.');
    }
});

client.login(process.env.BOT_TOKEN);