export const formatNumber = (number) => {
	if (isNaN(number) || !isFinite(number)) {
		return number;
	} else if (number >= 1000000000) {
		return (number / 1000000000).toFixed(2) + "B";
	} else if (number >= 1000000) {
		return (number / 1000000).toFixed(2) + "M";
	} else if (number >= 1000) {
		return (number / 1000).toFixed(2) + "K";
	} else {
		return number.toFixed(2);
	}
}