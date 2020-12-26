const Filter = require("bad-words");

module.exports = {
	name: "say",
	description: " ",
	execute(message, args, embedFooter) {
		filter = new Filter();
		let removeWords = ["hells", "hell", "shit", "shits", "sadist"];

		filter.removeWords(...removeWords);

		botMessage = args.join(" ");

		message.delete().catch();

		if (filter.isProfane(botMessage)) {
			message.channel.send("I can't say that!");
		} else {
			message.channel.send(botMessage);
		}
	},
};
