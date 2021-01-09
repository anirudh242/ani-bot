"use strict";
module.exports = {
    name: 'cute',
    description: '',
    execute(message, args, embedFooter) {
        const subreddits = ['cute', 'aww'];
        const randomSub = subreddits[Math.floor(Math.random() * subreddits.length)];
        const randomPuppy = require('random-puppy');
        const cutePic = randomPuppy(randomSub);
        const { MessageEmbed } = require('discord.js');
        let cuteEmbed = new MessageEmbed()
            .setColor('#32a852')
            .setTitle(`From r/${randomSub}`)
            .setURL(`https://reddit.com/r/${randomSub}`)
            .setImage(cutePic)
            .setFooter(embedFooter);
        message.channel.send(cuteEmbed);
    },
};
