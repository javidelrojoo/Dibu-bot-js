const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('javi')
		.setDescription('Link del twitch de javi'),
	async execute(interaction) {
		await interaction.reply('<@697124888879693895> <https://www.twitch.tv/javidelrojoo>');
	},
};
