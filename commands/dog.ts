module.exports = {
	name: 'dog',
	description: '',

	async execute(
		message: { channel: { send: (arg0: any) => void } },
		args: any,
		embedFooter: any
	) {
		const { MessageEmbed } = require('discord.js');
		const randomPuppy = require('random-puppy');
		const subreddits = ['dog', 'lookatmydog'];
		const randomSub = subreddits[Math.floor(Math.random() * subreddits.length)];

		const dogPic = await randomPuppy(randomSub);

		let dogEmbed = new MessageEmbed()
			.setColor('#32a852')
			.setTitle(`From r/${randomSub}`)
			.setURL(`https://reddit.com/r/${randomSub}`)
			.setImage(dogPic)
			.setFooter(embedFooter);

		message.channel.send(dogEmbed);
	},
};
