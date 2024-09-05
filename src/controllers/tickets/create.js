import { randomUUID } from "node:crypto"

export function create({ request, response, database }) {

   const tickets = {
      id: randomUUID(),
      ...request.body,
      status:"open",
      created_at: new Date(),
      updated_at: new Date(),
    }

    database.insert("tickets", tickets)
    
  return response.writeHead(201).end(JSON.stringify(tickets))
}