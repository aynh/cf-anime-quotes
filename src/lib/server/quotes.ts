import { data } from './quotes.json'

export interface Quote {
	character: string
	show: string
	quote: string
}

export const quotes: Quote[] = data

export const getQuotes = (count: number): Quote[] => {
	const copy = [...quotes]

	const ret: Quote[] = []
	const max = count < 0 ? quotes.length : Math.min(count, quotes.length)
	while (ret.length < max) {
		ret.push(...copy.splice(Math.floor(Math.random() * copy.length), 1))
	}

	return ret
}
