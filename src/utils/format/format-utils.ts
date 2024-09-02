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
