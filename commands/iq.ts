module.exports = {
	name: 'iq',
	description: 'Gets the specified users iq',
	execute(
		message: {
			mentions: { members: { first: () => any } };
			author: any;
			channel: { send: (arg0: string) => void };
		},
		args: any,
		embedFooter: any
	) {
		// Get the user
		let user;
		let iq: any;

		if (!message.mentions.members.first()) {
			user = message.author;
		} else {
			user = message.mentions.members.first();
		}

		// Get the iq
		if (user.id == '384683911873167360') {
			iq = '99999999999999999999999999';
		} else {
			iq = Math.floor(Math.random() * 200);
		}

		// Sending message based on iq
		if (iq <= 99) {
			message.channel.send(`${user}'s IQ is ${iq}. What an idiot`);
		} else if (iq >= 100 && iq <= 169) {
			message.channel.send(`${user}'s IQ is ${iq}. Guy is pretty average tbh`);
		} else if (iq >= 170) {
			message.channel.send(`${user}'s IQ is ${iq}. What a genius`);
		}
	},
};
