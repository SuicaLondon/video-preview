const numberShortHandMapList = [
	{ value: 1e12, symbol: 'T' },
	{ value: 1e9, symbol: 'B' },
	{ value: 1e6, symbol: 'M' },
	{ value: 1e3, symbol: 'k' },
	{ value: 1, symbol: '' },
]

export function formatViews(views: string | number) {
	const viewNumber = typeof views === 'string' ? parseInt(views, 10) : views
	if (Number.isNaN(viewNumber)) throw TypeError('Invalid number')
	const numberShortHand = numberShortHandMapList.find(
		(numberShortHandMap) => viewNumber >= numberShortHandMap.value,
	)
	if (numberShortHand) {
		const formatted = (viewNumber / numberShortHand.value)
			.toFixed(1)
			.replace(/\.0$/, '')
		return `${formatted}${numberShortHand.symbol}`
	}

	return viewNumber.toString()
}

function isInt(number: number) {
	return number % 1 === 0
}

export function addZeroToTime(time: number): string {
	console.log('Time', time)
	if (time < 0 || Number.isNaN(time) || !isInt(time))
		throw TypeError('Invalid Number')
	if (time < 10) {
		return `0${time}`
	}
	return time.toString()
}

export function formatSecondsToHHmmss(
	totalSeconds: number,
	alwaysShowHours: boolean = false,
) {
	let hours = Math.floor(totalSeconds / 3600)
	let minutes = Math.floor((totalSeconds % 3600) / 60)
	let seconds = Math.floor((totalSeconds % 3600) % 60)
	if (alwaysShowHours || hours > 0) {
		return `${addZeroToTime(hours)}:${addZeroToTime(minutes)}:${addZeroToTime(seconds)}`
	}
	return `${addZeroToTime(minutes)}:${addZeroToTime(seconds)}`
}
