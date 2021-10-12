module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if (message.author.id == 470723884166021120) {
			message.react('<:felis:887018949206753321>');
		}
		if (message.content.toLowerCase() == 'grande martin') {
			message.reply('grande martin');
		}
	},
};