import Item from "./Item.ts";

// Definição de interface para os itens gerais
interface IItem {
    id: number;
    titulo: string;
    ano: number;
}

// Interface específica para Revista que herda de IItem
interface IRevista extends IItem {
    edicao: number;
    periodicidade: string;
}

// Classe Revista que herda de Item e implementa IRevista
class Revista extends Item implements IRevista {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        public edicao: number,
        public periodicidade: string
    ) {
        super(id, titulo, ano); // Chama o construtor da classe pai
    }

    exibirDetalhes() {
        console.log(
            `ID: ${this.id} - Título: ${this.titulo} - Ano: ${this.ano} - Edição: ${this.edicao} - Periodicidade: ${this.periodicidade}`
        );
    }
}

// // Exemplo de uso:
// const revista1 = new Revista(1, "National Geographic", 2023, 150, "Mensal");
// revista1.exibirDetalhes();
// // Saída: ID: 1 - Título: National Geographic - Ano: 2023 - Edição: 150 - Periodicidade: Mensal
