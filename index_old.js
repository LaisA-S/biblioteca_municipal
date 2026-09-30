import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output} from 'node:process';
import { LivroFisico, Ebook } from './TiposDeItens.js';
import { Leitor } from './Leitor.js';
import { AtendimentoBiblioteca } from './AtendimentoBiblioteca.js';

const rl = readline.createInterface({ input, output });

async function iniciarSistema() {

    
   const nome = await rl.question("Nome do leitor: ");
   const idade = parseInt(await rl.question("idade: "));
   const leitor = new Leitor(nome, idade);

   if (!leitor.idade) return rl.close();

   console.log("1 - Livro Físico |2 - Ebook");
   const opcao = await rl.question("Escolha o tipo: ");
   const titulo = await rl.question("Título: ");
   const nomeAutor = await rl.question("Autor: ");
   const ano = parseInt(await rl.question("Ano: "));

   let livro;

   switch (opcao){
    case 1:
        const corredor = parseInt(await rl.question("Corredor: "));
        livro = new LivroFisico(titulo, nomeAutor, ano, corredor);
        break;
        
    case 2: 
    const formatoArquivo = await rl.question("formato: ");
    livro = new Ebook(titulo, nomeAutor, ano, formatoArquivo);
    break;
   }

   const diasAtraso = parseInt(await rl.question("\nDias de atraso: "));
   const multa = livro.calcularMulta(diasAtraso);
   
   console.log(`\nMulta para "${livro.titulo}": R$ ${multa.toFixed(2)}`);

    rl.close();
}

iniciarSistema();