import { json } from '@sveltejs/kit';
import { getQuotes, quotes } from '$lib/server/quotes';
import type { RequestHandler } from './$types';

export const GET = ((request) => {
	const count =
		request.params.count !== undefined ? Number.parseInt(request.params.count) : quotes.length;

	const ret = { count, data: getQuotes(count) };
	return json(ret, {
		headers: {
			'Access-Control-Request-Method': 'GET',
			'Access-Control-Allow-Origin': '*'
		}
	});
}) satisfies RequestHandler;
