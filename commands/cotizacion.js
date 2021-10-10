const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');

async function getValues(URL) {
	const { data } = await axios.get(URL);
	const $ = cheerio.load(data);
	const compra = $($('.value')[0]).text();
	const venta = $($('.value')[1]).text();
	const act = $('span').text();
	return [compra, venta, act];
}

const monedas = {
	dolar: ['https://www.dolarhoy.com/cotizaciondolarblue', 0x0400ff, 'dolar'],
	euro: ['https://www.dolarhoy.com/cotizacion-euro', 0xe1ff00, 'euro'],
	pesouru: ['https://www.dolarhoy.com/cotizacion-peso-uruguayo', 0x00e1ff, 'peso uruguayo'],
	pesochi: ['https://www.dolarhoy.com/cotizacion-peso-chileno', 0xff0000, 'peso chileno'],
	real: ['https://www.dolarhoy.com/cotizacion-real-brasileno', 0x04ff00, 'real'],
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cotizacion')
		.setDescription('Cotización de monedas')
		.addStringOption(option =>
			option.setName('moneda')
				.setDescription('monedas')
				.setRequired(true)
				.addChoice('Dolar', 'dolar')
				.addChoice('Euro', 'euro')
				.addChoice('Peso uruguayo', 'peso uruguayo')
				.addChoice('Peso chileno', 'peso chileno')
				.addChoice('Real', 'real')),
	async execute(interaction) {
		const [URL, color, name] = monedas[interaction.options.getString('moneda')];
		const [compra, venta, act] = await getValues(URL);

		const exampleEmbed = new MessageEmbed()
			.setColor(color)
			.setTitle(`Precio ${name}`)
			.setURL(URL)
			.addFields(
				{ name: 'Compra', value: compra },
				{ name: 'Venta', value: venta },
			)
			.setFooter(`Última actualización: ${act}`);

		// await interaction.reply(`Compra: ${compra}\nVenta: ${venta}`);
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};

