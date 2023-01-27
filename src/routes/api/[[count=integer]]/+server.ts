import { json } from '@sveltejs/kit';
import { getQuotes, quotes } from '$lib/server/quotes';
import type { RequestHandler } from './$types';

export const GET = ((request) => {
	const count =
		request.params.count !== undefined ? Number.parseInt(request.params.count) : quotes.length;

	const { searchParams } = request.url;
	const data = getQuotes(count, {
		character: searchParams.get('character') ?? undefined,
		quote: searchParams.get('quote') ?? undefined,
		show: searchParams.get('show') ?? undefined
	});

	const resp = { count: data.length, data };
	return json(resp, {
		headers: {
			'Access-Control-Request-Method': 'GET',
			'Access-Control-Allow-Origin': '*'
		}
	});
}) satisfies RequestHandler;
