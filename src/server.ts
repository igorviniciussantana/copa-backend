import Fastify from "fastify";
import cors from "@fastify/cors";
import { z } from "zod";
import jwt from "@fastify/jwt";
import { pollRoutes } from "./routes/polls";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";


async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  const jwt_secret = process.env.JWT_SECRET || 'secret'

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: jwt_secret
  });

  await fastify.register(pollRoutes);
  await fastify.register(userRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(authRoutes);
  await fastify.register(gameRoutes);

  await fastify.listen({ port: 3333 });
}

bootstrap();
