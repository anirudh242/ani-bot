const { execute } = require('./mute');

module.exports = {
	name: 'unmute',
	description: 'unmutes the mentioned user',

	execute(
		message: {
			guild: { roles: { cache: any[] } };
			mentions: { members: { first: () => any } };
			channel: { send: (arg0: string) => void };
		},
		args: any
	) {
		const mutedRole = message.guild.roles.cache.find(
			(role: { name: string }) => role.name === 'muted'
		);
		const target = message.mentions.members.first();

		target.roles.remove(mutedRole);
		message.channel.send(`unmuted ${target}. 🔊`);
	},
};
