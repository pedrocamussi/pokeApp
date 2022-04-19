export const objectToAray = obj => {
	return Object.keys(obj).map(function (key) {
		return obj[key];
	});
};
