module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if (message.author.bot){
			return
		}
		const msg = message.content.toLowerCase();
		if (message.author.id == 470723884166021120) {
			message.react('<:felis:887018949206753321>');
		}
		if (msg == 'grande martin') {
			message.reply('grande martin');
		}
		if (msg == 'f') {
			message.react('<:f_:768439683020488724>');
		}
		if (msg == 'si' || msg == 'sí') {
			message.react('<a:si:767567093896839179>');
		}
		if (msg == 'no') {
			message.react('<a:no:767567093482520586>');
		}
		if (msg.includes('q onda')) {
			message.react('<:degenerado:751791150364491966>');
		}
		if (msg.includes('cringe')) {
			message.react('<:cringe:832829654259859537>');
		}
		if (msg.includes('<:picardia:735101971001770055>')) {
			message.react('<:picardia:735101971001770055>');
		}
		if (msg.includes('<:picardiant:748344255906447432>')) {
			message.react('<:picardiant:748344255906447432>');
		}
		if (msg.includes('garcias') || msg.includes('gracias')) {
			message.react('<:garcias:835015498697146398>');
		}
		if (msg.includes('sape')) {
			message.react('<:sape:735262152675295343>');
		}
		if (msg.includes('messi')) {
			message.react('<a:messi:861332725247508490>');
		}
		if (msg.includes('god') || msg.includes('good') || msg.includes('goood')) {
			message.react('<a:god:861332255904759808>');
		}
		if (msg.length > 500) {
			message.react('<:mucho_texto:743541235637026818>');
		}
		if (msg.includes('uwu') || msg.includes('<:uwu:768614592699957278>')) {
			message.react('<:uwu:768614592699957278>');
		}
		if (msg.includes('jaja') && message.author.id == 452285420609339402) {
			message.react('<:joaco:788188614328713217>');
		}
		if (msg.includes('basado') || msg.includes('based')) {
			message.react('<:BASED:783045382426722344>');
		}
		if (msg.includes('cuervo')) {
			message.react('<:rojo:855269121561329704>');
		}
		if (msg.includes('jose') || msg.includes('josé')) {
			message.delete();
		}
	},
};