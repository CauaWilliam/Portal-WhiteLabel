import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);

async function testarConexao() {
  try {
    const result = await db.execute('SELECT 1');
    console.log('Conexão bem-sucedida!', result);
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
  }
}

testarConexao();