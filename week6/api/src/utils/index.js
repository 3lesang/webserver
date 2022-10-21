function logger(req, res, next) {
	const formatted_date = currentDate();
	let method = req.method;
	let url = req.url;
	let status = res.statusCode;
	let log = `[${formatted_date}] ${method}:${url} ${status}`;
	console.log(log);
	next();
}

function toSlug(str) {
	// Chuyển hết sang chữ thường
	str = str.toLowerCase();

	// xóa dấu
	str = str
		.normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
		.replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

	//Thay ký tự đĐ
	str = str.replace(/[đĐ]/g, 'd');

	// Xóa ký tự đặc biệt
	str = str.replace(/([^0-9a-z-\s])/g, '');

	// Xóa khoảng trắng thay bằng ký tự -
	str = str.replace(/(\s+)/g, '-');

	// Xóa ký tự - liên tiếp
	str = str.replace(/-+/g, '-');

	// xóa phần dư - ở đầu & cuối
	str = str.replace(/^-+|-+$/g, '');

	return str;
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
	toSlug,
};
