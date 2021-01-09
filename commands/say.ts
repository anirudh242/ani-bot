module.exports = {
	name: 'say',
	description: ' ',
	execute(
		message: {
			author: any;
			delete: () => Promise<any>;
			channel: { send: (arg0: string) => any };
		},
		args: any[],
		embedFooter: any,
		filter: {
			addWords: (arg0: string, arg1: string) => void;
			isProfane: (arg0: any) => any;
		}
	) {
		// Message user wants the bot to say
		let user = message.author;
		let botMessage = args.join(' ');

		// Blacklisted words
		filter.addWords('@everyone', '@here');
		const everyonePing = botMessage.indexOf('@everyone');
		const herePing = botMessage.indexOf('@here');

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
