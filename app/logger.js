let log = {
    commands: false,
    debug: false,
    sendToChannel: false,
    channelPath: undefined // written as "guild_id/channel_id"
};

let send = {
    debug(str) { if (log.debug) console.log(`[DEBUG] ${str}`); },
    commandLog(author, str) {
        if (log.commands) console.log(`[DEBUG] ${author.username}#${author.discriminator} ran ${str}`);
    }
};



exports.log = log;
exports.send = send;