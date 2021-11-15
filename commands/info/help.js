"use strict";
const { 
    Client, 
    Message, 
    MessageEmbed, 
    MessageActionRow, 
    MessageSelectMenu, 
    Interaction
} = require("discord.js");

const PREFIX = process.env.PREFIX;

module.exports = {
    name: "help",
    description: 'help command for bot',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message) => {

        // You should only have to ever touch this! 
        // This is only for commands with prefix! Slash commands dont need a help command!
        // Format for this should be <folderName: 'Emote',>

        const emojis = {
            info: 'ℹ',
            util: '⚙',
        }
        const directories = [
            ...new Set(client.commands.map(cmd => cmd.directory)),
        ];

        const formatString = (str) => 
            `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

        const categories = directories.map((dir) => {
            const getCommands = client.commands
                .filter((cmd) => cmd.directory === dir)
                .map(cmd => {
                    return {
                        name: cmd.name || 'there is no name',
                        description:
                            cmd.description ||
                            'there is no description for this command',
                    };
                });

            return {
                directory: formatString(dir),
                commands: getCommands,
            };
        });

        const embed = new MessageEmbed().setDescription(
            "Please choose a category in the dropdown menu"
        );

        const components = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                    .setCustomId("help-menu")
                    .setPlaceholder("Please select a category")
                    .setDisabled(state)
                    .addOptions(
                        categories.map((cmd) => {
                            return {
                                label: cmd.directory,
                                value: cmd.directory.toLowerCase(),
                                description: `Commands from ${cmd.directory} category`,
                                emoji: emojis[cmd.directory.toLowerCase()] || null,
                            };
                        })
                    )
            ),
        ];

        const initialMessage = await message.channel.send({
            embeds: [embed],
            components: components(false),
        });
    

        const filter = (interaction) => interaction.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector({
            filter,
            componentType: "SELECT_MENU",
            time: 30000,
        });

        collector.on('collect', (interaction) => {
            const [directory] = interaction.values;
            const category = categories.find(
                (x) => x.directory.toLowerCase() === directory
            );

            const categoryEmbed = new MessageEmbed()
                .setTitle(`${directory} commands`)
                .setDescription("Here are the list of commands! all commands must start with <" + PREFIX + `> \nExample Usage: ${PREFIX}help`)
                .addFields(
                    category.commands.map((cmd) => {
                        return {
                            name: `\`${cmd.name}\``,
                            value: cmd.description,
                            inline: true,
                        };
                    })
                );
            interaction.update({ embeds: [categoryEmbed] });
        });

        collector.on('end', () => {
            initialMessage.edit({ components: components(true) });
        });
    },
};
