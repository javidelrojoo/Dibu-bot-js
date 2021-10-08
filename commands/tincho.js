const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tinchox')
		.setDescription('Link del twitch de tinchox'),
	async execute(interaction) {
		await interaction.reply('<@229087114954801152> <https://www.twitch.tv/tinchox175>');
	},
};
