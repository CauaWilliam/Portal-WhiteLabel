import fastify from "fastify";
import {gerarHash} from "./script/hash_generator";
import db from "./db/drizzle_config";
import  {usersRoutes}  from './routes/users'


export const app = fastify({logger : true});
  

app.register(usersRoutes, {prefix: "/users"});
 