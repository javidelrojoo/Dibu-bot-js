const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gravo')
		.setDescription('Link del twitch de gravitypapa'),
	async execute(interaction) {
		await interaction.reply('<@366047462655262730> <https://www.twitch.tv/gravitypapa>');
	},
};
