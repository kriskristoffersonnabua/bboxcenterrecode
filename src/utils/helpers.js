export function convertStringTimeToMilliseconds(timeString) {
	return (
		Number(timeString.split(':')[0]) * 60 * 1000 +
		Number(timeString.split(':')[1]) * 1000
	)
}
