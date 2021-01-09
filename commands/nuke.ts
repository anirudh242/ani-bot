module.exports = {
	name: 'nuke',
	description: '',

	execute(
		message: {
			member: { hasPermission: (arg0: string) => any };
			reply: (arg0: string) => void;
			content: string;
			channel: {
				bulkDelete: (arg0: number) => Promise<any>;
				send: (arg0: string) => any;
			};
		},
		args: any
	) {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) {
			message.reply('You need the "Manage Messages" permission to do that! ❌');
		} else {
			let deleteAmount = message.content.split(' ')[1];

			if (!deleteAmount) {
				message.reply(
					'Try again but specify the amount of messages you want to delete.'
				);
			} else {
				message.channel
					.bulkDelete(parseInt(deleteAmount))
					.then(
						message.channel.send('Deleted ' + deleteAmount + ' messages! ✅')
					);
			}
		}
	},
};
