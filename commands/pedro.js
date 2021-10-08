const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pedro')
		.setDescription('Sapeeeeee'),
	async execute(interaction) {
		await interaction.reply('<@250611707943190529> https://ar.skokka.com/escorts/capitalfederal/');
	},
};
