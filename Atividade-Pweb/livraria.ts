interface ILivro {
    titulo: string;
    ano: number;
    autor: string;
    editora: string;
    isbn: string; 
    preco: number;
    estoque: number;

    exibirDados(): void;
    atualizarEstoque(quantidade: number): void; 
}

class Livro implements ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;
    
    constructor(titulo: string, ano: number, isbn: string, preco: number, autor: string, editora: string, estoque: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
        this.isbn = isbn;
        this.preco = preco;
        this.estoque = estoque;
    }

    exibirDados(): void {
        console.log(`\n=== LIVRO FÍSICO ===`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Estoque: ${this.estoque} unidades`); 
    }

    atualizarEstoque(quantidade: number): void {
        this.estoque += quantidade;
        console.log(`Estoque atualizado! Novo estoque de "${this.titulo}": ${this.estoque} unidades`);
    }
}

class Ebook implements ILivro {
    titulo: string;
    autor: string;
    ano: number;
    editora: string;
    isbn: string;
    preco: number;
    estoque: number;
    tamanhoArquivo: number; 

    constructor(titulo: string, autor: string, ano: number, editora: string, isbn: string, preco: number, estoque: number, tamanhoArquivo: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
        this.isbn = isbn;
        this.preco = preco;
        this.estoque = estoque;
        this.tamanhoArquivo = tamanhoArquivo;
    }

    exibirDados(): void {
        console.log(`\n=== EBOOK ===`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Estoque: ${this.estoque} unidades`);
        console.log(`Tamanho do arquivo: ${this.tamanhoArquivo} MB`); 
    }

    atualizarEstoque(quantidade: number): void {
        this.estoque += quantidade;
        console.log(`Estoque atualizado! Novo estoque de "${this.titulo}": ${this.estoque} unidades`);
    }
}

class Livraria {
    private livros: ILivro[] = [];

    adicionarLivro(livro: ILivro): void {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à livraria!`);
    }

    excluirLivro(isbn: string): boolean {
        const index = this.livros.findIndex(livro => livro.isbn === isbn);
        if (index !== -1) {
            const livroRemovido = this.livros.splice(index, 1)[0];
            console.log(`\nLivro "${livroRemovido.titulo}" removido da livraria!`);
            return true;
        } else {
            console.log(`\nLivro com ISBN ${isbn} não encontrado para exclusão!`);
            return false;
        }
    }

    venderLivro(isbn: string, quantidade: number = 1): boolean {
        const livro = this.livros.find(l => l.isbn === isbn);
        if (livro) {
            if (livro.estoque >= quantidade) {
                livro.estoque -= quantidade;
                const valorTotal = livro.preco * quantidade;
                console.log(`\nVENDA REALIZADA`);
                console.log(`Livro: ${livro.titulo}`);
                console.log(`Quantidade vendida: ${quantidade}`);
                console.log(`Valor unitário: R$ ${livro.preco.toFixed(2)}`);
                console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
                console.log(`Estoque restante: ${livro.estoque} unidades`);
                return true;
            } else {
                console.log(`\nEstoque insuficiente para "${livro.titulo}"!`);
                console.log(`Disponível: ${livro.estoque}, Solicitado: ${quantidade}`);
                return false;
            }
        } else {
            console.log(`\nLivro com ISBN ${isbn} não encontrado para venda!`);
            return false;
        }
    }

    buscarLivro(isbn: string): ILivro | undefined {
        return this.livros.find(livro => livro.isbn === isbn);
    }

    exibirLivros(): void {
        console.log(`\nCATÁLOGO DA LIVRARIA`);
        console.log(`Total de livros cadastrados: ${this.livros.length}`);
        
        if (this.livros.length === 0) {
            console.log("Nenhum livro cadastrado.");
            return;
        }
        this.livros.forEach((livro, index) => {
            console.log(`\n${index + 1}. ${livro.titulo} - ${livro.autor} (ISBN: ${livro.isbn})`);
            console.log(`Estoque: ${livro.estoque} | Preço: R$ ${livro.preco.toFixed(2)}`);
        });
    }
}
const livraria = new Livraria();

const livro1 = new Livro("Dom Casmurro", 1899, "978-85-359-0277-5", 25.90, "Machado de Assis", "Companhia das Letras", 15);
const livro2 = new Livro("Mil Beijos de Garoto", 2016, "978-14-059-5531-7", 15.00, "Tille Cole", "Outro Planeta", 21);
const ebook1 = new Ebook("O Cortiço", "Aluísio Azevedo", 1890, "Digital Books", "978-85-123-4567-8", 12.99, 100, 2.5);
const ebook2 = new Ebook("Clean Code", "Robert C. Martin", 2008, "Prentice Hall", "978-01-323-5088-4", 45.90, 50, 8.3);

livraria.adicionarLivro(livro1);
livraria.adicionarLivro(livro2);
livraria.adicionarLivro(ebook1);
livraria.adicionarLivro(ebook2);
livraria.exibirLivros();
livraria.venderLivro("978-85-359-0277-5", 3); 
livraria.venderLivro("978-01-323-5088-4", 1); 
livraria.venderLivro("978-14-059-5531-7", 20);
livraria.venderLivro("978-85-359-0277-5", 20);
console.log("\n");
livro2.atualizarEstoque(5);
livraria.excluirLivro("978-01-323-5088-4");
livraria.exibirLivros();
