const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', msg => {
    console.log(`Logged in as ${client.user.tag}`);
});

// dm interaction endpoint
client.on('message', (msg, i) => {
    if (msg.channel.type === 'dm' && !msg.author.bot) {
        msg.channel.send('Hey there! ' + 
        'Sorry, I\'m gonna say this every time you talk, I\'m still in testing phase.');
        console.log(i);
    }
});

client.login(process.env.BOT_TOKEN);