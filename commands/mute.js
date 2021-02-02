"use strict";
module.exports = {
    name: 'mute',
    description: 'mutes the mentioned user',
    execute(message, args) {
        const mutedRole = message.guild.roles.cache.find((role) => role.name.toLowerCase() === 'muted');
        let cachedUserRoles = {};
        const target = message.mentions.members.first();
        const ms = require('ms');
        // TODO: Make seperate messages for these errors
        if (!mutedRole) {
            return message.channel.send(`Cannot find the muted role. Please make a role named "Muted" or "muted" and try again.`);
        }
        else if (!target) {
            return message.channel.send('Please mention a user to mute');
        }
        else if (!args[1]) {
            return message.channel.send('Please specify an amount of time.');
        }
        else {
            cachedUserRoles[target.id] = target.roles.cache;
            target.roles
                .set([])
                .then((member) => member.roles.add(mutedRole))
                .catch(console.error);
            message.channel.send(`Muted ${target}. 🔈`);
        }
        if (args[1]) {
            setTimeout(function () {
                target.roles.set(cachedUserRoles[target.id]).catch(console.error);
                message.channel.send(`Unmuted ${target} because given mute time ran out. 🔊`);
            }, ms(args[1]));
        }
    },
};
