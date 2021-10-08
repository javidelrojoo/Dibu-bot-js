const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sensu')
		.setDescription('Link del twitch de sensu'),
	async execute(interaction) {
		await interaction.reply('<@219301336544444416> <https://www.twitch.tv/sensuky>');
	},
};
