module.exports = {
	name: 'role',
	description: 'Lets moderators setroles.',
	execute(
		message: {
			mentions: { members: { first: () => any } };
			channel: { send: (arg0: string) => void };
			content: string;
			guild: { roles: { cache: any[] } };
			member: { hasPermission: (arg0: string) => any };
		},
		args: any
	) {
		let target;

		if (!message.mentions.members.first()) {
			message.channel.send('Mention someone to give the role to.');
		} else {
			target = message.mentions.members.first();
		}

		let messageSplit = message.content.split(' ');

		let targetRole = messageSplit.slice(2, messageSplit.length + 1).join(' ');

		let gRole = message.guild.roles.cache.find(
			(r: { name: string }) => r.name.toUpperCase() === targetRole.toUpperCase()
		);

		if (message.member.hasPermission('MANAGE_ROLES')) {
			if (target.roles.cache.has(gRole.id || targetRole)) {
				target.roles.remove(gRole.id || targetRole);
				message.channel.send(`Removed ${targetRole} from ${target}`);
			} else {
				target.roles.add(gRole.id || targetRole);
				message.channel.send(`Added ${targetRole} to ${target}.`);
			}
		} else {
			message.channel.send('You do not have permission to do that');
		}
	},
};
