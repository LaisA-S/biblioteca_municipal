export class Leitor {
  #idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade; // Chama o setter para aplicar a validação
  }

  get idade() {
    return this.#idade;
  }

  set idade(novaIdade) {
    if (novaIdade < 12) {
      console.log("\n[ERRO] Leitor menor de 12 anos precisa do responsável para o cadastro.");
      return;
    }
    this.#idade = novaIdade;
  }
}