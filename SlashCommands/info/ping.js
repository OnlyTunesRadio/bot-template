const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const WebSocketPing = client.ws.ping
        const MessagePing = Date.now() - interaction.createdTimestamp;

        const pingEmbed = new MessageEmbed()
             .setColor('GREEN')
             .setTitle('Bot Ping')
             .addFields(
                 { name: 'WebSocket: ', value: `${WebSocketPing <= 200 ? "💚" : WebSocketPing <= 400 ? "🔶" : "⚠"} ${WebSocketPing}ms` },
                 { name: 'Message: ', value: `${MessagePing <= 200 ? "💚" : MessagePing <= 400 ? "🔶" : "⚠"} ${MessagePing}ms` },
             )
             .setTimestamp();
         
            interaction.followUp({ embeds: [pingEmbed] });
    },
};
