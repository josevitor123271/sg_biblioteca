import Item from "./Item.ts";

// Definindo uma interface para Livro
interface IItem {
    id: number;
    titulo: string;
    ano: number;
}

interface ILivro extends IItem {
    autor: string;
    editora: string;
    numeroPaginas: number;
}

// Classe Livro herdando de Item
class Livro extends Item implements ILivro {
    constructor(id: number, titulo: string, ano: number, public autor: string, public editora: string, public numeroPaginas: number) {
        super(id, titulo, ano);
    }

    exibirDetalhes() {
        console.log(
            `ID: ${this.id} - Título: ${this.titulo} - Autor: ${this.autor} - Ano: ${this.ano} - Editora: ${this.editora} - Páginas: ${this.numeroPaginas}`
        );
    }
}

export default Livro;

// Exemplo de uso:
// const livro1 = new Livro(1, "1984", 1949, "George Orwell", "Secker & Warburg", 328);
// livro1.exibirDetalhes();
// Saída: ID: 1 - Título: 1984 - Autor: George Orwell - Ano: 1949 - Editora: Secker & Warburg - Páginas: 328
