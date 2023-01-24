import { Router } from 'itty-router'
import { Quote, getQuotes } from './quotes'

const router = Router()
router
	.get('/', () => getQuotes(-1))
	.get('/:count', (request) => {
		const count = Number.parseInt(request.params.count ?? '')

		if (Number.isNaN(count) || count < 0) return

		return getQuotes(count)
	})

export interface ResponseJSON {
	count: number
	data: Quote[]
}

export default <ExportedHandler>{
	fetch: (request) =>
		router.handle(request).then((data?: Quote[]): Response => {
			if (data === undefined) {
				return new Response(undefined, { status: 404 })
			}

			const json: ResponseJSON = { count: data.length, data }
			return new Response(JSON.stringify(json), {
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
			})
		}),
}
