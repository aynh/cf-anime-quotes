import { quotes } from '$lib/server/quotes';
import type { PageServerLoad } from './$types';

export const load = (() => {
	return { totalQuotes: quotes.length };
}) satisfies PageServerLoad;
