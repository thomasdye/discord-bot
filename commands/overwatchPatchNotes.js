const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('overwatch-patch-notes')
		.setDescription('Posts a link to the latest Overwatch patch notes.'),
	async execute(interaction) {
		await interaction.reply('https://overwatch.blizzard.com/en-us/news/patch-notes/');
	},
};