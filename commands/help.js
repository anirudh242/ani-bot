"use strict";
module.exports = {
    name: 'help',
    description: 'Shows all the commands the bot has.',
    execute(message, args, embedFooter) {
        const { MessageEmbed } = require('discord.js');
        const helpEmbed = new MessageEmbed()
            .setColor('#FFFF')
            .setTitle('All Ani Bot Commands:')
            .addField('meme, memes:', 'Sends a meme from reddit.')
            .addField('dog, dogs, puppy:', 'Sends a cute picture of a dog/puppy from Reddit.')
            .addField('rps:', 'Play Rock, Paper, Scissors with the bot.')
            .addField('nuke, delete:', 'Members who have the permissions can delete a specified amount of messages fast.')
            .addField('avatar, pfp, av:', "Sends the specified user's avatar.")
            .addField('role:', 'Adds or removes the specified role from a user.')
            .addField('iq:', 'Sends the specified users iq.')
            .addField('say, echo:', "Sends what the user want the bot to send. Example: '_say Hi' would make the bot say 'Hi'.")
            .setFooter(embedFooter);
        message.channel.send(helpEmbed);
    },
};
