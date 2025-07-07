import { FastifyInstance } from "fastify";
 
import {gerarHash} from "../script/hash_generator";
import db from "../db/drizzle_config";
import { UserDto } from "./dto/users.dto";
import { validateOrReject, ValidationError } from "class-validator";
import { whitelabel_schema } from "../db/schema/whitelabel.schema";


export async function usersRoutes(app: FastifyInstance) {
    // ... outras rotas
    app.post("/register", async (request, reply) => {

    try {

        app.log.info(request.body);

        const body = UserDto.create(request.body);
        await validateOrReject(body);
 
  
      // Gera o hash da senha
      const hash = await gerarHash(body.senha);
  
      // Insere no banco
      await db.insert(whitelabel_schema).values({
        ...body,
        senha: hash
      });
  
       reply.status(201).send({ message: "Usuário cadastrado com sucesso!" });
       app.log.info("Usuário cadastrado com sucesso!");

       } catch (error) {
        app.log.error(error);
        
        if (error instanceof ValidationError) {
            
            return reply.status(400).send({message: "Erro na validação do usuário", error});
        }
        reply.status(500).send({ error: "Erro ao cadastrar usuário" });
       }
       
    });
  }


 


