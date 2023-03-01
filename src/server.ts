import Fastify from "fastify";
import cors from "@fastify/cors";
import { z } from "zod";
import ShortUniqueId from "short-unique-id";
import { pollRoutes } from "./routes/polls";


async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

fastify.register(pollRoutes)


 



  

  await fastify.listen({ port: 3333 });
}

bootstrap();
