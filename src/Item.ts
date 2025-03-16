interface Item {
    id: number;
    titulo: string;
    ano: number;
    exibirDetalhes(): void;
} 

class Item {
    constructor(id:number, titulo:string, ano:number) {
        this.id = id
        this.titulo = titulo
        this.ano = ano
    }

    exibirDetalhes() {
        console.log(`ID: ${this.id} - Título: ${this.titulo} - Ano: ${this.ano}`);
    }
}

export default Item;
