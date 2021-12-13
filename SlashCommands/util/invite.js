const { CommandInteraction, Client, MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");

module.exports = {
    name: "invite",
    description: "Replies with an invite for the bot!",
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {

        const inviteURL = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=${process.env.PERMISSIONS}&scope=bot%20applications.commands`

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Invite me')
                    .setStyle('LINK')
                    .setURL(inviteURL),
            );

        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('Invite the bot')
            .setURL(inviteURL)
            .setDescription('Use the button below to add the bot!')
            .setFooter(
                `Requested by ${interaction.user.tag}`,
                interaction.user.displayAvatarURL({
                    dynamic: true,
                })
            );

        await interaction.followUp({ ephemeral: true, embeds: [embed], components: [row] });
    }
}