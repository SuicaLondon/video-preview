import { formatViews } from './format-utils'

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
