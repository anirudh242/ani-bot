const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'getAvatar',
	description: "Gets the user's avatar.",

	async execute(
		message: { author: any; guild: any; channel: { send: (arg0: any) => any } },
		args: any[],
		embedFooter: any
	) {
		let user = !args[0]
			? message.author
			: await findMember(args[0], message.guild);

		// Create embed and send user the avatar with links
		let embed = new MessageEmbed()
			.setTitle(`Avatar for ${user.tag}`)
			.setImage(`${user.displayAvatarURL()}?size=1024`)
			.setColor('#FFFF')
			.setFooter(embedFooter);
		return message.channel.send(embed);

		async function findMember(
			query: any,
			guild: {
				members: {
					cache: {
						get: (arg0: string) => any;
						find: (arg0: (m: any) => boolean) => any;
					};
				};
				fetch: () => any;
			}
		) {
			let member = null;
			if (!query || typeof query !== 'string') return;
			// Try to search using ID
			if (query.match(/^<@!?(\d+)>$/)) {
				const id: string | number = query.match(/^<@!?(\d+)>$/)![1];
				member = await guild.members.cache.get(id);
				if (member) return member.user;
			}
			// Try to search using discrim
			if (query.match(/^!?(\w+)#(\d+)$/)) {
				guild = await guild.fetch();
				member = guild.members.cache.find(
					(m: { user: { tag: string } }) => m.user.tag === query
				);
				if (member) return member.user;
			}
			// Try to find the user itself
			member = await guild.members.cache.get(query);
			// If member doesn't exist return as message.author
			if (!member) {
				return message.author;
			}
			return member.user;
		}
	},
};
