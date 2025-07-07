import { gerarHash } from './hash_generator';

async function main() {
  const senha = 'SENHA_DO_CLIENTE'; // Troque pela senha desejada
  const hash = await gerarHash(senha);
  console.log('Hash gerado:', hash);
}


