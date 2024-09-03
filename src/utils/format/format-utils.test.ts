import { formatSecondsToHHmmss, formatViews } from './format-utils'

describe('formatViews', () => {
	it('should format numbers correctly based on the shorthand map', () => {
		expect(formatViews(500)).toBe('500')
		expect(formatViews(1500)).toBe('1.5k')
		expect(formatViews(2000000)).toBe('2M')
		expect(formatViews(1230000000)).toBe('1.2B')
		expect(formatViews(1000000000000)).toBe('1T')
	})

	it('should handle string input correctly', () => {
		expect(formatViews('2500')).toBe('2.5k')
		expect(formatViews('900000')).toBe('900k')
	})

	it('should return the original number if it is less than 1000', () => {
		expect(formatViews(999)).toBe('999')
	})

	it('should handle invalid numbers gracefully', () => {
		expect(() => formatViews('abc')).toThrow(TypeError)
		expect(() => formatViews(NaN)).toThrow(TypeError)
	})
})

describe('formatSecondsToHHmmss', () => {
	it('should format the seconds to correct format in HHmmss', () => {
		const testCases = [
			{ input: 0, expected: '00:00' },
			{ input: 1, expected: '00:01' },
			{ input: 59, expected: '00:59' },
			{ input: 60, expected: '01:00' },
			{ input: 3600, expected: '01:00:00' },
			{ input: 3661, expected: '01:01:01' },
			{ input: 86399, expected: '23:59:59' },
			{ input: 86400, expected: '24:00:00' },
			{ input: 90061, expected: '25:01:01' },
			{ input: 359999, expected: '99:59:59' },
		]
		testCases.forEach((testCase) => {
			expect(formatSecondsToHHmmss(testCase.input)).toBe(testCase.expected)
		})
	})
	it('should format the seconds to correct format in HHmmss with always show hours ', () => {
		const testCases = [
			{ input: 0, expected: '00:00:00' },
			{ input: 1, expected: '00:00:01' },
			{ input: 59, expected: '00:00:59' },
			{ input: 60, expected: '00:01:00' },
			{ input: 3600, expected: '01:00:00' },
			{ input: 3661, expected: '01:01:01' },
			{ input: 86399, expected: '23:59:59' },
			{ input: 86400, expected: '24:00:00' },
			{ input: 90061, expected: '25:01:01' },
			{ input: 359999, expected: '99:59:59' },
		]
		testCases.forEach((testCase) => {
			expect(formatSecondsToHHmmss(testCase.input, true)).toBe(testCase.expected)
		})
	})
})
