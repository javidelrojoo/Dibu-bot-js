const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('markz')
		.setDescription('Lo que le gusta a markz'),
	async execute(interaction) {
		await interaction.reply('<@710666266972651531> <https://es.pornhub.com/gayporn>');
	},
};
