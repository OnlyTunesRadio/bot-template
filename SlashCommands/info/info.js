const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const prettyMilliseconds = require('pretty-ms');
//config Stuff
require('dotenv').config({path:'../.env'});
const EXPERIMENTAL = process.env.EXPERIMENTAL

module.exports = {
    name: 'info',
    description: 'Gives users a overview of the bot!',
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {

        let mode

        if (EXPERIMENTAL === 'yes') {
            mode = '**DEV MODE (issues can appear!)**'
        } else {
            mode = 'Normal'
        }

        const WebSocketPing = client.ws.ping;
        const MessagePing = Date.now() - interaction.createdTimestamp;
        const BOTUptime = prettyMilliseconds(client.uptime);

        const promises = [
            await client.shard.fetchClientValues('guilds.cache.size'),
            await client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];

        return Promise.all(promises)
            .then(results => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
        
        const InfoEmbed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle('Bot Info')
                .setDescription('Quick stats from the bot')
                .addFields(
                    { name: 'Servers: ', value: `\`\`\`\n${totalGuilds}\n\`\`\``, inline: true },
                    { name: 'Serving for: ', value: `\`\`\`\n${totalMembers}\n\`\`\``, inline: true },
                    { name: 'Mode: ', value: `\`\`\`\n${mode}\n\`\`\``, inline: true },
                    { name: 'WebSocket: ', value: `\`\`\`\n${WebSocketPing <= 200 ? "🟢" : WebSocketPing <= 400 ? "🟡" : "🔴"} ${WebSocketPing}ms\n\`\`\``, inline: true },
                    { name: 'ping: ', value: `\`\`\`\n${MessagePing <= 200 ? "🟢" : MessagePing <= 400 ? "🟡" : "🔴"} ${MessagePing}ms\n\`\`\``, inline: true },
                    { name: 'Uptime: ', value: `\`\`\`\n${BOTUptime}\n\`\`\``, inline: true },
                )
                .setTimestamp()
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL() });

            interaction.followUp({ embeds: [InfoEmbed] });
    })
    .catch(console.error);
    },
};