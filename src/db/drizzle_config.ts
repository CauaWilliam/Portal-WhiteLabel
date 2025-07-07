import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não definida no ambiente");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export default db;


// Testando a conexão com o banco de dados
async function testarConexao() {
  const client = await pool.connect();
  try {
    await client.query('SELECT 1');
    console.log('Conexão bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
  } finally {
    client.release();
  }
}

testarConexao();
