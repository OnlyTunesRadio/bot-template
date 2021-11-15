const { Message, Client, MessageEmbed, MessageActionRow, MessageButton, Interaction } = require("discord.js");

module.exports = {
    name: "license",
    description: "Replies with a quick overview of the license!",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message) => {

        const LICENSEURL = `https://github.com/OnlyTunesRadio/bot-template/blob/master/LICENSE`
        const REPOURL = `https://github.com/OnlyTunesRadio/bot-template`

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('License Link')
                    .setStyle('LINK')
                    .setURL(LICENSEURL),
                new MessageButton()
                    .setLabel('REPO Link')
                    .setStyle('LINK')
                    .setURL(REPOURL),
            );
            
        
        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('About Us')
            .setDescription('This bot is licensed under the MIT License. This allows users to:\n- Use Commercially\n- Freely Modify\n- Freely Distrabute\n- Use privatly\n For more info use the buttons below to read it in its full extent!')
            .setFooter(
                `Requested by ${message.author.tag}`,
                message.author.displayAvatarURL({
                    dynamic: true,
                })
            );

        await message.reply({ ephemeral: true, embeds: [embed], components: [row] });
            
    }
}
