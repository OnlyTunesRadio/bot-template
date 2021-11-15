var figlet = require('figlet');
const chalk = require('chalk');
const client = require("../index");

client.on("ready", async () => {



    figlet('ONLYTUNES', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    })
    await sleep(1000);
    console.log(chalk.green('==================================='))
    console.log('Welcome to the Simple Bot Template!\n  This bot is from the OnlyTunesRadio repo found here: https://github.com/OnlyTunesRadio/bot-template\n  We hope you enjoy using this Template!\n  Let us know of any issues VIA the issues section on the REPO!');
    const inviteURL = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`
    console.log(chalk.green('==================================='))
    console.log(chalk.redBright('[WARNING]  ') + `This link must only be used for your own server as it gives the bot full admin permissions!\n[Invite Link]  ${inviteURL}`)
    console.log(chalk.green('==================================='))
    console.log(`✅ ${client.user.tag} is up and ready to go!`)
    console.log(chalk.green('==================================='))

    async function sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

});
