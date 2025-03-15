import Item from "./Item";

interface IUsuario {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    itensEmprestados: Item[];
}

class Usuario implements IUsuario {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: string;
    private _itensEmprestados: Item[];

    constructor(id:number, nome:string, email:string, telefone:string) {
        this._id = id
        this._nome = nome
        this._email = email
        this._telefone = telefone
        this._itensEmprestados = []
    }

    // Gettters e Setters
    get id():number {
        return this._id
    }

    get nome():string {
        return this._nome
    }

    set nome(nome:string) {
        this._nome = nome
    }

    get email():string {
        return this._email
    }

    // Validando o email com Regex
    set email(email:string) {
        const emailReges = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (!emailReges.test(email)) {
            throw new Error('E-mail do usuário é inválido.');
        }
        this._email = email
    }
    
    get telefone():string {
        return this._telefone
    }

    set telefone(telefone:string) {
        this._telefone = telefone
    }

    get itensEmprestados():Item[] {
        return this._itensEmprestados;
    }

    // Métodos da classe
    // Método para emprestar um item
    emprestarItem(item:Item):boolean {
        if (this._itensEmprestados.some(empItem => empItem.id === item.id)) {
            console.log("Este itme já foi emprestado para este usuário.");
            return false; // Item já emprestado
        }
        this.itensEmprestados.push(item);
        return true; // Item emprestado com sucesso
    }

    // Método para devolver um item
    devolverItem(id:number):boolean {
        const index = this._itensEmprestados.findIndex(item => item.id === id);

        if (index === -1) {
            return false;; // Item não encontrado
        }
        this._itensEmprestados.splice(index, 1);
        return true; // Item devolvido com sucesso
    }
}

// Exemplos de classe

const item1 = new Item(1, "O Senhor dos Anéis", 1954);
const monalisa = new Usuario(1, "Monalisa", "monalisa.moura@email.com", "11 99999-9999");

console.log(monalisa.emprestarItem(item1)); // true (item emprestado com sucesso)
console.log(monalisa.emprestarItem(item1)); // false (item já emprestado)
console.log(monalisa.devolverItem(1)); // true (item devolvido com sucesso)
console.log(monalisa.devolverItem(2)); // false (item não encontrado)