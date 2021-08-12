const { Client, Collection } = require("discord.js");
require('dotenv').config();

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.aliases = new Collection();
//client.config = require("./config.json");
client.token = process.env.DISCORD_TOKEN;
client.prefix = process.env.PREFIX;

// Initializing the project
require("./handler")(client);

client.login(client.token);
