import Fastify from 'fastify';
import { fruitRoutes } from './routes/fruit.route';

const app = Fastify({
  logger: true
});

// Register routes
app.register(fruitRoutes, { prefix: '/api' });

// Global error handler
app.setErrorHandler((error, request, reply) => {
  app.log.error(error);
  reply.status(500).send({ error: 'Internal Server Error' });
});

export default app;