export class Leitor {
  #idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.#idade = idade; // Chama o setter para aplicar a validação
  }

  get idade() {
    return this.#idade;
  }

  validarIdade (novaIdade) {
    if(typeof novaIdade !== 'number' || isNaN(novaIdade)){
      throw new Error("ERR_TIPO_IDADE_INVALIDO");
    }

    if(novaIdade <= 12){
      throw new Error("ERR_LEITOR_MENOR_DE_IDADE");
    }

    this.#idade = novaIdade;
    return this.#idade;
  }
}