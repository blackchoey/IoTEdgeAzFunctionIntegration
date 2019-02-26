module.exports = async function (context, message) {
	var timeStamp = new Date().toISOString();
	var messageString = String.fromCharCode.apply(String, message);
	context.log(messageString, 'JavaScript edgehub trigger function ran!', timeStamp); 
};