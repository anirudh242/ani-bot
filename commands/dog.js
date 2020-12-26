const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
	name: "dog",
	description: "",

	async execute(message, args, embedFooter) {
		const subreddits = ["dog", "lookatmydog"];
		const randomSub =
			subreddits[Math.floor(Math.random() * subreddits.length)];

		const dogPic = await randomPuppy(randomSub);

		let dogEmbed = new MessageEmbed()
			.setColor("#32a852")
			.setTitle(`From r/${randomSub}`)
			.setURL(`https://reddit.com/r/${randomSub}`)
			.setImage(dogPic)
			.setFooter(embedFooter);

		message.channel.send(dogEmbed);
	},
};
