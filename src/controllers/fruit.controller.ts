import { FastifyRequest, FastifyReply } from 'fastify';
import { getFruits } from '../services/fruit.service';

export async function getFruitsHandler(
  req: FastifyRequest,
  res: FastifyReply
) {
  try {
    const result = await getFruits();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch fruits' });
  }
}