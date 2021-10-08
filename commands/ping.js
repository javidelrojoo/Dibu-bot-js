const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('ping del bot'),
	async execute(interaction) {
		await interaction.reply(`Pong! ${interaction.client.ws.ping} ms`);
	},
};
