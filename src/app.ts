import fastify from "fastify";
import fastifyCors from '@fastify/cors';
import {  whitelabelRoutes } from "./routes/whitelabel.routes";
import { chipRoutes } from "./routes/chip.routes";
  
export const app = fastify({logger : true});
   
app.register(whitelabelRoutes, {prefix: "/whitelabel"});
app.register(chipRoutes, {prefix: "/chip"});
app.register(fastifyCors, {
  origin: 'http://localhost:5173/',
  credentials: true,
});
app.get('/api/ping', async (request, reply) => {
  return { message: 'API está online!' };
});
