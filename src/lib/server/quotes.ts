import { data } from './quotes.json';

export interface Quote {
	character: string;
	show: string;
	quote: string;
}

export type PartialQuote = Partial<Quote>;

export const quotes: Quote[] = data;

export const getQuotes = (count: number, match: PartialQuote = {}): Quote[] => {
	const copy = [...quotes];

	const ret: Quote[] = [];
	const filterQuote = lowercased(match);
	const max = count < 0 ? quotes.length : Math.min(count, quotes.length);
	while (ret.length < max && copy.length > 0) {
		const next = copy.splice(Math.floor(Math.random() * copy.length), 1)[0];

		const low = lowercased(next);
		if (
			low.character.includes(filterQuote.character) &&
			low.quote.includes(filterQuote.quote) &&
			low.show.includes(filterQuote.show)
		) {
			ret.push(next);
		}
	}

	return ret;
};

const lowercased = (quote: PartialQuote): Quote => ({
	character: (quote.character ?? '').toLowerCase(),
	quote: (quote.quote ?? '').toLowerCase(),
	show: (quote.show ?? '').toLowerCase()
});
