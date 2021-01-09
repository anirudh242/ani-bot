module.exports = {
	name: 'cat',
	description: '',

	async execute(
		message: { channel: { send: (arg0: any) => void } },
		args: any,
		embedFooter: any
	) {
		const subreddits = ['cats'];
		const randomSub = subreddits[0];
		const { MessageEmbed } = require('discord.js');
		const randomPuppy = require('random-puppy');

		const meme = await randomPuppy(randomSub);

		let memeEmbed = new MessageEmbed()
			.setColor('#32a852')
			.setTitle(`From r/${randomSub}`)
			.setURL(`https://reddit.com/r/${randomSub}`)
			.setImage(meme)
			.setFooter(embedFooter);

		message.channel.send(memeEmbed);
	},
};
