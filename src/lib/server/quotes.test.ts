import { describe, expect, it } from 'vitest'
import { getQuotes, quotes } from './quotes'

describe('getQuotes', () => {
	it('should return correct number of quotes', () => {
		for (let i = 0; i <= 1000; i += 1) {
			const quotes = getQuotes(i)
			expect(quotes.length).toBe(i)
		}

		const allQuotes = getQuotes(-1)
		expect(allQuotes.length).toBe(quotes.length)
	})

	it('should be randomized each runs', () => {
		for (let i = 0; i <= 1000; i += 1) {
			const a = getQuotes(5)
			const b = getQuotes(5)

			expect(a).not.toStrictEqual(b)
		}
	})
})
