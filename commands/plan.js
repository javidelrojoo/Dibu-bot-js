const { SlashCommandBuilder } = require('@discordjs/builders');

const carrerasDict = {
	'fisica': 'https://cdn.discordapp.com/attachments/697915316810022950/773713786262913104/Mapa_Lic_Fisica.png',
	'compu': 'https://cdn.discordapp.com/attachments/697915316810022950/758754732906512454/planCs2.png',
	'mate pura': 'https://cdn.discordapp.com/attachments/746876013535035402/781131469325205534/planMatePura.png',
	'mate aplicada': 'https://cdn.discordapp.com/attachments/697915316810022950/762680026419167232/planMateAplicada.png',
	'oceano': 'https://cdn.discordapp.com/attachments/734919493343641611/872598511231860776/Plan_de_Estudios_Oceano_2.0-Copy_of_Page-1.png',
	'quimica': 'https://media.discordapp.net/attachments/750169342666211408/818513992531574814/planQuimica.png',
	'lcd': 'https://media.discordapp.net/attachments/767479713953742938/821216994677227580/correlatividadesLCD.png',
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('plan')
		.setDescription('plan de las carreras')
		.addStringOption(option =>
			option.setName('carrera')
				.setDescription('carreras')
				.setRequired(true)
				.addChoice('fisica', 'fisica')
				.addChoice('compu', 'compu')
				.addChoice('mate pura', 'mate pura')
				.addChoice('mate aplicada', 'mate aplicada')
				.addChoice('oceano', 'oceano')
				.addChoice('quimica', 'quimica')
				.addChoice('lcd', 'lcd')),
	async execute(interaction) {
		const carrera = interaction.options.getString('carrera');
		await interaction.reply(carrerasDict[carrera]);
	},
};
