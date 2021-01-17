module.exports = {
	name: 'cat',
	description: 'Sends a cat',

	execute(message: any, args: any, embedFooter: string) {
		const got = require('got');

		const { MessageEmbed } = require('discord.js');
		const embed = new MessageEmbed();

		got('https://www.reddit.com/r/lookatmydog/random/.json')
			.then((response: { body: string }) => {
				const [list] = JSON.parse(response.body);
				const [post] = list.data.children;

				const permalink = post.data.permalink;
				const memeUrl = `https://reddit.com${permalink}`;
				const memeImage = post.data.url;
				const memeTitle = post.data.title;
				const memeUpvotes = post.data.ups;
				const memeNumComments = post.data.num_comments;

				embed.setTitle(`${memeTitle}`);
				embed.setURL(`${memeUrl}`);
				embed.setColor('RANDOM');
				embed.setImage(memeImage);
				embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

				message.channel.send(embed);
			})
			.catch(console.error);
	},
};
