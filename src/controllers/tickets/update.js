export function update ({ request, response, database }) {
  const { id } = request.params
  // const { }
  database.update("tickets", id, {...request.body, updateupdated_at: new Date()})
  return response.end(JSON.stringify(request.params))
} 