const { Message, Client, MessageEmbed, MessageActionRow, MessageButton, CommandInteraction } = require("discord.js");

module.exports = {
    name: "about",
    description: "Replies with a description about the bot!",
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client,interaction, args) => {

        const GITHUB01 = `https://github.com/CaldeiraG`
        const GITHUB02 = `https://github.com/OnlyTunes`
        const REPOURL = `https://github.com/OnlyTunesRadio/bot-template`

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('CaldeiraG Github')
                    .setStyle('LINK')
                    .setURL(GITHUB01),
                new MessageButton()
                    .setLabel('OnlyTunes Github')
                    .setStyle('LINK')
                    .setURL(GITHUB02),
                new MessageButton()
                    .setLabel('REPO Link')
                    .setStyle('LINK')
                    .setURL(REPOURL),
            );
            
        
        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('About Us')
            .setDescription('This bot is using a template made by CaldeiraG and Brayd ( OnlyTunes ) If you like using the template or like this bot feel free to check us out by using the buttons below!')
            .setFooter(
                `Requested by ${interaction.user.tag}`,
                interaction.user.displayAvatarURL({
                    dynamic: true,
                })
            );

        await interaction.followUp({ ephemeral: true, embeds: [embed], components: [row] });
            
    }
}