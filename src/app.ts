import fastify from "fastify";
 
import {  whitelabelRoutes } from "./routes/whitelabel.routes";
  
export const app = fastify({logger : true});
   
app.register(whitelabelRoutes, {prefix: "/whitelabel"});
 