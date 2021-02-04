"use strict";
module.exports = {
    name: 'ban',
    description: 'fake bans people',
    execute(message, args) {
        let target;
        if (!message.mentions.members.first()) {
            return message.channel.send('Mention someone to ban.');
        }
        else {
            target = message.mentions.members.first();
        }
        let time;
        let banMessage;
        if (!args[1]) {
            banMessage = `**Banned ${target}!**`;
        }
        else {
            time = args[1];
            banMessage = `**Banned ${target} for ${time}!**`;
        }
        return message.channel.send(banMessage);
    },
};
