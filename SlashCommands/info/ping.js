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

        const pingEmbed = new MessageEmbed().
             setColor('GREEN').
             setTitle('Bot Ping').
             addFields(
                 { name: 'WebSocket: ', value: `${WebSocketPing <= 200 ? "<:online:879107813606055946>" : WebSocketPing <= 400 ? "<:away:879108099024228362>" : "<:dnd:879108071513817109>"} ${WebSocketPing}ms` },
                 { name: 'Message: ', value: `${MessagePing <= 200 ? "<:online:879107813606055946>" : MessagePing <= 400 ? "<:away:879108099024228362>" : "<:dnd:879108071513817109>"} ${MessagePing}ms` },
                // { name: 'API: ', value: `${APIping <= 200 ? "<:online:879107813606055946>" : APIping <= 400 ? "<:away:879108099024228362>" : "<:dnd:879108071513817109>"} ${APIping}ms` }
             ).
             setTimestamp();
         
            interaction.followUp({ embeds: [pingEmbed] });
    },
};
