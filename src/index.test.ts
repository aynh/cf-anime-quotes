import { unstable_dev } from 'wrangler'
import type { UnstableDevWorker } from 'wrangler'
import { describe, expect, it, beforeAll, afterAll } from 'vitest'
import type { ResponseJSON } from '.'
import { quotes } from './quotes'

describe('Worker', () => {
	let worker: UnstableDevWorker

	beforeAll(async () => {
		worker = await unstable_dev('src/index.ts', {
			experimental: { disableExperimentalWarning: true },
		})
	})

	afterAll(async () => {
		await worker.stop()
	})

	it('should return 1 quote', async () => {
		const response = await worker.fetch('/1')
		const { count, data } = (await response.json()) as ResponseJSON

		expect(count).toBe(1)
		expect(data.length).toBe(1)
	})

	it('shoud return all quote', async () => {
		const response = await worker.fetch('/')
		const { count, data } = (await response.json()) as ResponseJSON

		expect(count).toBe(quotes.length)
		expect(data.length).toBe(quotes.length)
	})

	it('should return 404', async () => {
		const notANumber = await worker.fetch('/not-a-number')
		expect(notANumber.status).toBe(404)

		const lessThanZero = await worker.fetch('/-1')
		expect(lessThanZero.status).toBe(404)

		// TODO: return method not allowed instead
		const notAGetRequest = await worker.fetch('/', { method: 'HEAD' })
		expect(notAGetRequest.status).toBe(404)
	})
})
