import type { FastifyReply, FastifyRequest } from "fastify"


export async function checkSessionIdExists(
  resquest: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = resquest.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized.',
    })
  }
}