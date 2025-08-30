import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function healthCheck(app: FastifyInstance) {
  app.get(
    '/healthz',
    {
      schema: {
        tags: ['health'],
        summary: 'Health check endpoint',
        response: {
          200: z.object({
            status: z.literal('ok'),
            timestamp: z.string(),
            uptime: z.number(),
          }),
        },
      },
    },
    async () => {
      return {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      }
    },
  )
}
