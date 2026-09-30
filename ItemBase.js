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
      if (typeof anoPublicacao !== 'number' || isNaN(anoPublicacao)){
        throw new Error("ERR_TIPO_ANO_INVALIDO");
      }

       if (anoPublicacao < 1000 || anoPublicacao > 2026){
        throw new Error("ERR_ANO_FORA_DO_LIMITE");
    }
    }

}

    //calcularMulta(diasAtraso){
        //throw new Error("Erro: A classe filha precisa implementar o cálculo de multa!");
    //}