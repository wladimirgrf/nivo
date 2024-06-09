import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { authenticateWithPassword } from './routes/auth/authenticate-with-password'
import { createAccount } from './routes/auth/create-account'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(swagger, {
  openapi: {
    info: {
      title: 'Nivo',
      description: 'Full-stack SaaS app with multi-tenant & RBAC.',
      version: '1.0.0',
    },
    servers: [],
  },
  transform: jsonSchemaTransform,
})

app.register(swaggerUI, {
  routePrefix: '/docs',
})

app.register(jwt, {
  secret: 'my-jwt-secret',
})

app.register(cors)

app.register(createAccount)
app.register(authenticateWithPassword)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})
