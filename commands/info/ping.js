const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
    description: "Responds with the current latency!",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        const WebSocketPing = client.ws.ping
        const MessagePing = Date.now() - message.createdTimestamp;

        const pingEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('Bot Ping')
            .addFields(
               { name: 'WebSocket: ', value: `${WebSocketPing <= 200 ? "💚" : WebSocketPing <= 400 ? "🔶" : "⚠"} ${WebSocketPing}ms` },
               { name: 'Message: ', value: `${MessagePing <= 200 ? "💚" : MessagePing <= 400 ? "🔶" : "⚠"} ${MessagePing}ms` },
            )
            .setTimestamp();
    
       message.channel.send({ embeds: [pingEmbed] });
    },
};
