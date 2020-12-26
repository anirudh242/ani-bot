const Filter = require("bad-words");

module.exports = {
	name: "say",
	description: " ",
	execute(message, args, embedFooter) {
		// New filter
		const filter = new Filter();

		// Message user wants the bot to say
		let user = message.author;
		let botMessage = args.join(" ");

		// Blacklisted words
		let removeWords = ["hells", "hell", "shit", "shits"];
		filter.removeWords(...removeWords);
		filter.addWords("@everyone", "@here");
		const everyonePing = botMessage.indexOf("@everyone");
		const herePing = botMessage.indexOf("@here");

		// Deleting the message
		message.delete().catch();

		// Checking the message for a bad word then sending the message
		if (filter.isProfane(botMessage)) {
			message.channel.send("I can't say that!");
		} else if (everyonePing > -1 || herePing > -1) {
			message.channel.send(
				"don't try and ping everyone in the server i'm not stupid"
			);
		} else {
			message.channel.send(botMessage);
		}
	},
};
