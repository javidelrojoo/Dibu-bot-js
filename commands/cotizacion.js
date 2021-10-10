const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');

async function getValues(URL) {
	const { data } = await axios.get(URL);
	const $ = cheerio.load(data);
	const compra = $($('.value')[0]).text();
	const venta = $($('.value')[1]).text();
	const act = $($('#span')).text();
	return [compra, venta, act];
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cotizacion')
		.setDescription('Cotización de monedas'),
	async execute(interaction) {
		const URL = 'https://dolarhoy.com/cotizaciondolarblue';
		console.log(await getValues(URL));
		const [compra, venta, act] = await getValues(URL);

		const exampleEmbed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Precio Dolar')
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

