module.exports = {
	name: 'join',
	description: 'joins a channel',

	execute(
		message: {
			member: { voice: { channel: any } };
			channel: { send: (arg0: string) => void };
		},
		args: any
	) {
		let userChannel = message.member.voice.channel;

		if (userChannel) {
			userChannel.join();
			message.channel.send('Joined the voice channel! ✅');
		}
	},
};
