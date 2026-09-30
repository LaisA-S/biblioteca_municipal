import { Leitor } from './Leitor.js';
//import { ItemBasae } from './ItemBase.js';

export class AtendimentoBiblioteca {

cadastrarNovoLeitor(nome, idade) {
  //let novoLeitor = null;

  try {

    const novoLeitor = new Leitor(nome, idade);
    novoLeitor.validarIdade(idade)
    console.log(`Sucesso! Carteirinha do leitor gerada para: ${novoLeitor.nome}`);
  }
  
   catch (erro) {
    console.error(`Falha ao cadastrar: ${erro.message}`);
    this.traduzirCodigoDeErro(erro.message);
  } 
  
  finally {
    console.log("Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.");
  }

}

traduzirCodigoDeErro(codigoTecnicoDoErro) {
    switch (codigoTecnicoDoErro){
        case "ERR_TIPO_ANO_INVALIDO" || "ERR_TIPO_IDADE_INVALIDO":
        console.log("Atenção: Os campos de ano de publicação e idade do leitor aceitam apenas caracteres numéricos.");
        break;

        case "ERR_ANO_FORA_DO_LIMITE":
            console.log("Aviso do Sistema: O ano de publicação do catálogo deve estar situado entre 1000 e 2026.");
            break;

        case "ERR_LEITOR_MENOR_IDADE":
            console.log("Aviso do Sistema: Leitores menores de 12 anos necessitam da presença física de um responsável para efetivação do cadastro.");
            break;
            
        default:
            console.log("Serviço indisponível.");
    }
}
}