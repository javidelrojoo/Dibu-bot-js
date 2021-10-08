const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('josetraductor')
		.setDescription('Sirve para entender a jose cuando habla como autista (siempre)')
		.addStringOption(option => option.setName('palabra').setDescription('lo que queres traducir').setRequired(true)),
	async execute(interaction) {
		const palabra = interaction.options.getString('palabra');
		await interaction.reply(`https://www.urbandictionary.com/define.php?term=${palabra}`);
	},
};
