const Filter = require("bad-words");

module.exports = {
	name: "say",
	description: " ",
	execute(message, args, embedFooter, filter) {
		// Message user wants the bot to say
		let user = message.author;
		let botMessage = args.join(" ");

		// Blacklisted words
		filter.addWords("@everyone", "@here");
		const everyonePing = botMessage.indexOf("@everyone");
		const herePing = botMessage.indexOf("@here");

		// Deleting the message
		message.delete().catch();

		// Checking the message for a bad word then sending the message
		if (filter.isProfane(botMessage)) {
			return;
		} else if (everyonePing > -1 || herePing > -1) {
			message.channel.send(
				"don't try and ping everyone in the server i'm not stupid"
			);
		} else {
			message.channel.send(botMessage);
		}
	},
};
