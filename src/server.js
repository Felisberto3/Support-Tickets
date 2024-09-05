import http from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener(request, response) {
  // console.log(request.url, request.method);
  
  await jsonHandler(request, response)
  return routeHandler(request, response)
}


http.createServer(listener).listen(3333, ()=> console.log("roddando...."))