module.exports = {
	name: 'mute',
	description: 'mutes the mentioned user',

	execute(
		message: {
			guild: { roles: { cache: any[] } };
			mentions: { members: { first: () => any } };
			channel: { send: (arg0: string) => void };
		},
		args: any[]
	) {
		const mutedRole = message.guild.roles.cache.find(
			(role: { name: string }) => role.name.toLowerCase() === 'muted'
		);

		let cachedUserRoles: any = {};
		const target = message.mentions.members.first();
		const ms = require('ms');

		// TODO: Make seperate messages for these errors
		if (!mutedRole) {
			message.channel.send(
				`Cannot find the muted role. Please make a role named "Muted" or "muted" and try again.`
			);
		} else if (!target) {
			message.channel.send('Please mention a user to mute');
		} else if (!args[1]) {
			message.channel.send('Please specify an amount of time.');
		} else {
			cachedUserRoles[target.id] = target.roles.cache;

			target.roles
				.set([])
				.then((member: { roles: { add: (arg0: any) => any } }) =>
					member.roles.add(mutedRole)
				)
				.catch(console.error);

			message.channel.send(`Muted ${target}. 🔈`);
		}
		if (args[1]) {
			setTimeout(function () {
				target.roles.set(cachedUserRoles[target.id]).catch(console.error);
				message.channel.send(
					`Unmuted ${target} because given mute time ran out. 🔊`
				);
			}, ms(args[1]));
		}
	},
};