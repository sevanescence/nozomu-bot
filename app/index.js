import { Client } from 'discord.js';
const client = new Client();

client.on('ready', msg => {
    console.log(`Logged in as ${client.user.tag}`);
});

