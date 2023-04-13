// const fs = require('node:fs');
// const path = require('node:path');
// const { Client, Collection, GatewayIntentBits } = require('discord.js');

// const client = new Client({ intents: [GatewayIntentBits.Guilds] });
// client.commands = new Collection();
// const token = process.env.TOKEN;

// // Events
// const eventsPath = path.join(__dirname, 'events');
// const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

// for (const file of eventFiles) {
// 	const filePath = path.join(eventsPath, file);
// 	const event = require(filePath);
// 	if (event.once) {
// 		client.once(event.name, (...args) => event.execute(...args));
// 	}
// 	else {
// 		client.on(event.name, (...args) => event.execute(...args));
// 	}
// }

// client.on("message", msg => {
// 	if (msg.content === "ping") {
// 	  msg.reply("pong");
// 	}
//   });

// // Commands
// const commandsPath = path.join(__dirname, 'commands');
// const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
// 	const filePath = path.join(commandsPath, file);
// 	const command = require(filePath);
// 	// Set a new item in the Collection with the key as the command name and the value as the exported module
// 	if ('data' in command && 'execute' in command) {
// 		client.commands.set(command.data.name, command);
// 	}
// 	else {
// 		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
// 	}
// }

// // Log in to Discord with your client's token
// client.login(token);

const Discord = require('discord.js');
const fs = require('fs');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);

const TOKEN = process.env.TOKEN
const prefix = config.prefix

// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot)
//         return;
//     const args = message.content.slice(prefix.lenght).split(/ +/)
//     const command = args[1].toLowerCase()
//     console.log(args)
//     // Command test!
// })

client.on("message", msg => {
	if (msg.content === "ping") {
	  msg.reply("pong");
	}
  })

client.once('ready', () => {
    console.log("Discord bot online")
});

client.on("message", msg => {
	if (msg.content === "ping") {
	  msg.reply("pong");
	}
  })

client.login(TOKEN)