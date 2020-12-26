const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "rps",
	description: "Play Rock, Paper, Scissors with the bot. ",

	async execute(message, args) {
		/*
        RPS PvP COMMAND STEPS-
        1) User gives command mentioning another user
        2) Bot sends an embed asking the user mentioned to react with ✅ or ❌
        3) If user says yes, bot DMs both the users
        4) Users pick one reaction, the bot stores that.
        5) Once both of them have picked, the bot messages on the channel the
            command was originally on and determines who winsp5.BandPass()

        ? If a currency system is added, we could make bets?
    */

		// PvE
		function pveRps() {
			let choices = ["rock", "paper", "scissors"];
			let playerChoice = message.content.split(" ")[1];
			let botChoice = choices[Math.floor(Math.random() * choices.length)];

			if (!choices.includes(playerChoice) || !playerChoice) {
				message.reply("Choose, rock, paper, or scissors.");
			} else {
				playerChoice = playerChoice.toLowerCase();

				const winEmbed = new MessageEmbed()
					.setColor("##35bd59")
					.setDescription("🎉 You win! 🎉")
					.setFooter(`${playerChoice} vs ${botChoice}`);

				const drawEmbed = new MessageEmbed()
					.setColor("#f5ff30")
					.setDescription("⛔ It's a draw! ⛔")
					.setFooter(`${playerChoice} vs ${botChoice}`);

				const loseEmbed = new MessageEmbed()
					.setColor("#fc1900")
					.setDescription("❌ You lose... ❌")
					.setFooter(`${playerChoice} vs ${botChoice}`);

				if (
					(playerChoice === "rock" && botChoice === "scissors") ||
					(playerChoice === "paper" && botChoice === "rock") ||
					(playerChoice === "scissors" && botChoice === "paper")
				) {
					message.channel.send(winEmbed);
				} else if (playerChoice === botChoice) {
					message.channel.send(drawEmbed);
				} else {
					message.channel.send(loseEmbed);
				}
			}
		}

		if (!message.mentions.members.first()) {
			pveRps();
		} else {
			message.channel.send("Test");
		}
	},
};
