module.exports = {
	name: 'cake',
	description: 'eats some cake!',

	execute(message: { reply: (arg0: string) => void }, args: any) {
		message.reply('You ate some cake! 🍰');
	},
};
