const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
	name: "cute",
	description: "",

	async execute(message, args, embedFooter) {
		const subreddits = ["cute", "aww"];
		const randomSub =
			subreddits[Math.floor(Math.random() * subreddits.length)];

		const cutePic = await randomPuppy(randomSub);

		let cuteEmbed = new MessageEmbed()
			.setColor("#32a852")
			.setTitle(`From r/${randomSub}`)
			.setURL(`https://reddit.com/r/${randomSub}`)
			.setImage(cutePic)
			.setFooter(embedFooter);

		message.channel.send(cuteEmbed);
	},
};
