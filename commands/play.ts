//! fix this later

/* const yts = require("yt-search");

module.exports = {
  name: "play",
  description: "plays music",

  async execute(message, args) {
    const res = await yts(args.join(" "));
    let video = res[0]; //getting the first video
    let connection = await message.member.voice.channel.join();
    connection.play(yts(video.url));
  },
};
 */
