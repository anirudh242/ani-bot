const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
	name: "cat",
	description: "",

	async execute(message, args, embedFooter) {
		const subreddits = ["cats"];
		const randomSub = subreddits[0];

		const meme = await randomPuppy(randomSub);

		let memeEmbed = new MessageEmbed()
			.setColor("#32a852")
			.setTitle(`From r/${randomSub}`)
			.setURL(`https://reddit.com/r/${randomSub}`)
			.setImage(meme)
			.setFooter(embedFooter);

		message.channel.send(memeEmbed);
	},
};
