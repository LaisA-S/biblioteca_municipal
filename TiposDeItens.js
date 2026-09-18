import { ItemBase } from "./ItemBase.js";

export class LivroFisico extends ItemBase {
    constructor(titulo, autor, anoPublicacao, corredor){
        super(titulo, autor, anoPublicacao, corredor);
    }
    calcularMulta(diasAtraso) {
        if(diasAtraso > 0){
            let valorMulta = diasAtraso * 2.50;
            console.log("Atenção: Você recebeu uma multa devido ao atraso para a devolução do livro físico.");
            return valorMulta;
        }
    }
}

export class Ebook extends ItemBase {
    constructor(titulo, autor, anoPublicacao, formatoArquivo){
        super(titulo, autor, anoPublicacao, formatoArquivo);
    }
    calcularMulta(diasAtraso){
        if(diasAtraso > 0){
            console.log("[SISTEMA] Arquivo bloqueado. Acesso revogado no dispositivo do leitor.");
            return 0.00;
        }
    }
}