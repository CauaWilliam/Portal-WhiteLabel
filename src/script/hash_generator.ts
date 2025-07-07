import bcrypt from 'bcrypt';

const senha = process.argv[2];
const saltRounds = 10;

if (!senha) {
  console.log('Informe a senha como argumento: node hash_generator.js suaSenha');
  process.exit(1);
}

bcrypt.hash(senha, saltRounds, (err: Error | undefined, hash: string) => {
  if (err) throw err;
  console.log('Hash gerado:', hash);
});