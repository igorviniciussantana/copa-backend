import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";


export async function guessRoutes(fastify : FastifyInstance){
    fastify.get("/guesses/count", async () => {
        const count = await prisma.guess.count();
    
        return { count };
      });
}