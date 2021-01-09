"use strict";
const { execute } = require('./mute');
module.exports = {
    name: 'unmute',
    description: 'unmutes the mentioned user',
    execute(message, args) {
        const mutedRole = message.guild.roles.cache.find((role) => role.name === 'muted');
        const target = message.mentions.members.first();
        target.roles.remove(mutedRole);
        message.channel.send(`unmuted ${target}. 🔊`);
    },
};
