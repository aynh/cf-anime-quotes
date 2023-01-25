import { json } from '@sveltejs/kit';
import { getQuotes, quotes } from '$lib/server/quotes';
import type { RequestHandler } from './$types';

export const GET = ((request) => {
	const count =
		request.params.count !== undefined ? Number.parseInt(request.params.count) : quotes.length;

	return json({
		count,
		data: getQuotes(count)
	});
}) satisfies RequestHandler;
