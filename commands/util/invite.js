const { Message, Client, MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");

module.exports = {
    name: "invite",
    description: "Replies with an invite for the bot!",
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run: async (client, message) => {

        const inviteURL = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=${process.env.PERMISSIONS}&scope=bot%20applications.commands`

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Invite Me')
                    .setStyle('LINK')
                    .setURL(inviteURL),
            );
        
        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('Invite Me')
            .setURL(inviteURL)
            .setDescription('Use the button provided below to add the bot to your server!')
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() });

        await message.channel.send({ ephemeral: true, embeds: [embed], components: [row] });
            
    }
}
