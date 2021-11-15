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
client.token = process.env.DISCORD_TOKEN;
client.prefix = process.env.PREFIX;


// ANTI CRASH MECH!
// =====================================================
process.on("unhandledRejection", (reason, p) => {
    console.log(" [antiCrash] :: Unhandled Rejection/Catch");
    console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch");
    console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
    console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
    console.log(" [antiCrash] :: Multiple Resolves");
    console.log(type, promise, reason);
});
// =====================================================


// Initializing the project
// =====================================================
require("./handler")(client);
// =====================================================


// Bot Login
// =====================================================
client.login(client.token);
// =====================================================
