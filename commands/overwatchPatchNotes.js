const { SlashCommandBuilder } = require('discord.js');
const overwatchUrl = 'https://overwatch.blizzard.com/en-us/news/patch-notes/'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('overwatch')
		.setDescription('Posts a link to the latest Overwatch patch notes.'),
	async execute(interaction) {
		console.log('sending overwatch patch notes')
		await interaction.reply(overwatchUrl);
	},
};