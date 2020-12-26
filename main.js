const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "_";

const fs = require("fs");

const embedFooter = "Bot made by ani#1481. DM him if you have a problem.";

client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync("./commands/")
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once("ready", () => {
	console.log("Ani Bot is online!");
	client.user.setActivity("you", { type: "WATCHING" });
});

function catchErr(err, message) {
	client.users.fetch("384683911873167360").then((user) => {
		user.send(
			`There was an error in channel "${message.channel}" in guild "${message.guild}".`
		);
	});

	client.users.fetch("384683911873167360").then((user) => {
		user.send("ERROR: ```" + err + "```");
	});
}

client.on("message", (message) => {
	if (message.content.startsWith(prefix) || message.author.bot) {
		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		// TODO: Add warns
		// TODO: Add RPS PvP
		try {
			switch (command) {
				case "cake":
					client.commands.get("cake").execute(message, args);
					break;
				// TODO: fix these lol
				// case "mute":
				// client.commands.get("mute").execute(message, args);
				// break;
				// case "unmute":
				// client.commands.get("unmute").execute(message, args);
				// break;
				case "meme":
				case "memes":
					client.commands
						.get("meme")
						.execute(message, args, embedFooter);
					break;
				case "cute":
					client.commands
						.get("cute")
						.execute(message, args, embedFooter);
					break;
				case "dog":
				case "puppy":
				case "dogs":
					client.commands
						.get("dog")
						.execute(message, args, embedFooter);
					break;
				case "cat":
				case "kitten":
					client.commands
						.get("cat")
						.execute(message, args, embedFooter);
					break;
				case "rps":
					client.commands
						.get("rps")
						.execute(message, args, embedFooter);
					break;
				case "nuke":
				case "delete":
					client.commands
						.get("nuke")
						.execute(message, args, embedFooter);
					break;
				case "avatar":
				case "av":
				case "pfp":
					client.commands
						.get("getAvatar")
						.execute(message, args, embedFooter);
					break;
				// case "suggest":
				// client.commands.get("suggest").execute(message, args);
				// break;
				case "help":
				case "commands":
					client.commands
						.get("help")
						.execute(message, args, embedFooter);
					break;
				case "role":
					client.commands
						.get("role")
						.execute(message, args, embedFooter);
					break;
				case "iq":
					client.commands
						.get("iq")
						.execute(message, args, embedFooter);
					break;
				case "say":
				case "echo":
					client.commands
						.get("say")
						.execute(message, args, embedFooter);
					break;
			}
		} catch (err) {
			catchErr(err, message);
		} // Make these switch cases
	} else if (message.content.toLowerCase() == "no u") {
		message.channel.send("no u");
	} else if (
		message.content.toLowerCase() == "one sec" ||
		message.content.toLowerCase() == "one second"
	) {
		message.channel.send("It's been one second");
	}
});

client.login(process.env.TOKEN);
