"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    name: 'dog',
    description: '',
    execute(message, args, embedFooter) {
        return __awaiter(this, void 0, void 0, function* () {
            const { MessageEmbed } = require('discord.js');
            const randomPuppy = require('random-puppy');
            const subreddits = ['dog', 'lookatmydog'];
            const randomSub = subreddits[Math.floor(Math.random() * subreddits.length)];
            const dogPic = yield randomPuppy(randomSub);
            let dogEmbed = new MessageEmbed()
                .setColor('#32a852')
                .setTitle(`From r/${randomSub}`)
                .setURL(`https://reddit.com/r/${randomSub}`)
                .setImage(dogPic)
                .setFooter(embedFooter);
            message.channel.send(dogEmbed);
        });
    },
};
