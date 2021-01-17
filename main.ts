// Discord
const Discord = require('discord.js');
const client = new Discord.Client();
const embedFooter: string =
  'Bot made by ani#1481. DM him if you have a problem.';
const prefix: string = '>';
client.commands = new Discord.Collection();

// FS
const fs = require('fs');

// Filter
const Filter = require('bad-words');
const filter = new Filter();
let removeWords = ['hells', 'hell', 'shit', 'shits'];
filter.removeWords(...removeWords);
const ronnyImage = './ronny.png';
const ronnyTheRapper = new Discord.MessageAttachment(ronnyImage);

const commandFiles = fs
  .readdirSync('./commands/')
  .filter((file: string) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Ani Bot is online!');
  client.user.setActivity('you', { type: 'WATCHING' });
});

// Error handling
function catchErr(err: string, message: { channel: any; guild: any }) {
  client.users
    .fetch('384683911873167360')
    .then((user: { send: (arg0: string) => void }) => {
      user.send(
        `There was an error in channel "${message.channel}" in guild "${message.guild}".`,
      );
    });

  client.users
    .fetch('384683911873167360')
    .then((user: { send: (arg0: string) => void }) => {
      user.send('ERROR: ```' + err + '```');
    });
}

client.on('message', (message: any) => {
  // Checking if a message has a bad word
  if (filter.isProfane(message.content)) {
    message.delete().catch();
    message.reply(ronnyTheRapper);
  } else if (message.content.startsWith(prefix) || message.author.bot) {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    // TODO: Add warns
    // TODO: Add RPS PvP
    try {
      switch (command) {
        case 'cake':
          client.commands.get('cake').execute(message, args);
          break;
        // TODO: fix these lol
        // case "mute":
        // client.commands.get("mute").execute(message, args);
        // break;
        // case "unmute":
        // client.commands.get("unmute").execute(message, args);
        // break;
        case 'meme':
        case 'memes':
          client.commands.get('meme').execute(message, args, embedFooter);
          break;
        case 'cute':
          client.commands.get('cute').execute(message, args, embedFooter);
          break;
        case 'dog':
        case 'puppy':
        case 'dogs':
          client.commands.get('dog').execute(message, args, embedFooter);
          break;
        case 'cat':
        case 'kitten':
          client.commands.get('cat').execute(message, args, embedFooter);
          break;
        case 'rps':
          client.commands.get('rps').execute(message, args, client);
          break;
        case 'nuke':
        case 'delete':
          client.commands.get('nuke').execute(message, args, embedFooter);
          break;
        case 'avatar':
        case 'av':
        case 'pfp':
          client.commands.get('getAvatar').execute(message, args, embedFooter);
          break;
        case 'help':
        case 'commands':
          client.commands.get('help').execute(message, args, embedFooter);
          break;
        case 'role':
          client.commands.get('role').execute(message, args, embedFooter);
          break;
        case 'iq':
          client.commands.get('iq').execute(message, args, embedFooter);
          break;
        case 'say':
        case 'echo':
          client.commands
            .get('say')
            .execute(message, args, embedFooter, filter);
          break;
      }
    } catch (err) {
      catchErr(err, message);
    }
    switch (message.content.toLowerCase()) {
      case 'no u':
        message.channel.send('no u');
      case 'one sec':
      case 'one second':
        message.channel.send("It's been one second");
    }
  }
});

// client.login(process.env.TOKEN);

// For test bot-
client.login('NzkzNzE5NTI0MjI2MzY3NTEy.X-wW6Q.WGbDD_NAAP5qho5D49i_7M6KtwQ');
