let figlet = require('figlet');
const chalk = require('chalk');
const { table } = require('table');
const client = require("../index");

client.on("ready", async () => {

    const promises = [
        await client.shard.fetchClientValues('guilds.cache.size'),
        await client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
    ];

    return Promise.all(promises)
        .then(results => {
            const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
            const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
            const inviteURL = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`

            figlet('ONLYTUNES', function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data)
            })

            const data = [
                ["Bot Name", `${chalk.blue(client.user.tag)}`, "UserName + Tag from bot"],
                ["Guild Count", `${chalk.greenBright(totalGuilds)}`, "Total Servers"],
                ["User Count", `${chalk.greenBright(totalMembers)}`, "Total Users"],
                ["Bot Prefix", `${chalk.magenta(process.env.PREFIX)}`, "Current bot prefix"],
                ["Commands", `${client.commands.size} / ${client.slashCommands.size}`, "Commands ( TEXT / SLASH )"],
                ["Status", "✅ Now Logged In!", "You can now use my commands!"],
            ];
            const config = {
                border: {
                    topBody: `─`,
                    topJoin: `┬`,
                    topLeft: `┌`,
                    topRight: `┐`,

                    bottomBody: `─`,
                    bottomJoin: `┴`,
                    bottomLeft: `└`,
                    bottomRight: `┘`,

                    bodyLeft: `│`,
                    bodyRight: `│`,
                    bodyJoin: `│`,

                    joinBody: `─`,
                    joinLeft: `├`,
                    joinRight: `┤`,
                    joinJoin: `┼`
                },
                header: {
                    alignment: 'center',
                    content: "SIMPLE BOT TEMPLATE"
                }
            };
            console.log(table(data, config));
            console.log(chalk.redBright(`[ADMIN INVITE]  ${inviteURL}`));

        })
});
