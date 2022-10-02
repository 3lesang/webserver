function logger(req, res, next) {
	const formatted_date = currentDate();
	let method = req.method;
	let url = req.url;
	let status = res.statusCode;
	let log = `[${formatted_date}] ${method}:${url} ${status}`;
	console.log(log);
	next();
}

function currentDate() {
	let current_datetime = new Date();
	let formatted_date =
		current_datetime.getFullYear() +
		'/' +
		(current_datetime.getMonth() + 1) +
		'/' +
		current_datetime.getDate() +
		' ' +
		current_datetime.getHours() +
		':' +
		current_datetime.getMinutes() +
		':' +
		current_datetime.getSeconds();
	return formatted_date;
}
module.exports = {
	logger,
	currentDate,
};
