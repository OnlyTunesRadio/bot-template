const { Message, Client, MessageEmbed } = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
//config Stuff
require('dotenv').config({path:'../.env'});
const EXPERIMENTAL = process.env.EXPERIMENTAL

module.exports = {
    name: 'info',
    description: 'Gives users a overview of the bot!',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message) => {

        let mode

        if (EXPERIMENTAL === 'yes') {
            mode = '**DEV MODE (issues can appear!)**'
        } else {
            mode = 'Normal'
        }

        const WebSocketPing = client.ws.ping;
        const MessagePing = Date.now() - message.createdTimestamp;
        const BOTuptime = prettyMilliseconds(client.uptime);

        const promises = [
            client.shard.fetchClientValues('guilds.cache.size'),
            client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
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
                    { name: 'Uptime: ', value: `\`\`\`\n${BOTuptime}\n\`\`\``, inline: true },
                )
                .setTimestamp()
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true,
                    })
                );

            message.channel.send({ embeds: [InfoEmbed] });
    })
    .catch(console.error);
    },
};
