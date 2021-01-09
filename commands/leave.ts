module.exports = {
	name: 'leave',
	description: 'leaves the voice channel',

	execute(
		message: {
			member: { voice: { channel: any } };
			channel: { send: (arg0: string) => void };
		},
		args: any
	) {
		let userChannel = message.member.voice.channel;

		if (userChannel) {
			userChannel.leave();
			message.channel.send('Left channel.');
		} else {
			message.channel.send("You're not in the same channel as me! ❌");
		}
	},
};
