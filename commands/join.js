module.exports = {
  name: "join",
  description: "joins a channel",

  execute(message, args) {
    let userChannel = message.member.voice.channel;

    if (userChannel) {
      userChannel.join();
      message.channel.send("Joined the voice channel! ✅");
    }
  },
};
