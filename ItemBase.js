export class ItemBase {
    #anoPublicacao;

    constructor(titulo, autor, anoPublicacao){
        if(new.target === ItemBase) {
            throw new Error("Erro: Não é permitido cadastrar um item genérico");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    get anoPublicacao() { return this.#anoPublicacao; }

    set anoPublicacao(anoPublicacao) {
        if(anoPublicacao < 1000 || anoPublicacao > 2026){
            console.log("Bloqueado: O ano da publicação não pode ser menor que 1000!");
            console.log("Bloqueado: O ano da publicação não pode ser maior que 2026!");
        }
        this.#anoPublicacao = anoPublicacao;
    }


    calcularMulta(diasAtraso){
        throw new Error("Erro: A classe filha precisa implementar o cálculo de multa!");
    }
}