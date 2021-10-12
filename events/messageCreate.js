module.exports = {
	name: 'messageCreate',
	once: true,
	async execute(message) {
		if (message.author.id == 470723884166021120) {
			message.react('<:felis:887018949206753321>');
		}
		if (toLowerCase(message.content) == 'grande martin') {
			message.reply('grande martin');
		}
	},
};