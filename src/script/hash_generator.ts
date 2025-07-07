import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function gerarHash(senha: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.hash(senha, saltRounds, (err, hash) => {
      if (err) return reject(err);
      resolve(hash);
    });
  });
}

// ... já existe o gerarHash

export async function verificarSenha(senha: string, hash: string): Promise<boolean> {
  return bcrypt.compare(senha, hash);
}