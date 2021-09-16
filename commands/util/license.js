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
        process.on('uncaughtException', (error, origin) => {
            console.log('----- Uncaught exception -----')
            console.log(error)
            console.log('----- Exception origin -----')
            console.log(origin)
        })
        
        process.on('unhandledRejection', (reason, promise) => {
            console.log('----- Unhandled Rejection at -----')
            console.log(promise)
            console.log('----- Reason -----')
            console.log(reason)
        })

        const LICENSEURL = `https://github.com/CaldeiraG/discordbot/blob/master/LICENSE`
        const REPOURL = `https://github.com/CaldeiraG/discordbot`

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