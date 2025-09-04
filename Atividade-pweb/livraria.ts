/*Você foi contratado para construir um sistema para gerenciamento dos livros de uma livraria. A princípio o proprietário irá trabalhar tanto com Livros Físicos como com EBook. 
Ambos os tipos de livros possuem as seguintes 

características: titulo, ano, isbn, preço, autor, editora, estoque. 

Preciso ter 

metodos: exibir dados do livro, bem como atualizar estoque

Para os ebooks precisamos adicionar também  o tamanho do arquivo.

Precisamos ter uma classe para gerenciar os livros da livraria: ela será responsável por adicionar, excluir, vender livros da livraria. Quando eu vendo um livro o estoque do livro será diminuído.

Use os conceitos de interface e classe além dos já conhecidos em Javascript para manipular arrays. Adicione alguns dados como exemplo e rode o código que não deve apresentar erros na tipagem durante a compilação / execução.
*/
interface ILivro{
    titulo: string;
    ano: number;
    autor: string;
    editora: string;
    isbn: number;
    preco: number;
    estoque: number;

    exibirDados() : void;
    atualizarEstoque(estoque : number) : void; 
}

    class Livro implements ILivro{

        titulo: string;
        ano: number;
        isbn: number;
        preco: number;
        autor: string;
        editora: string;
        estoque: number;
        
        constructor (titulo: string, ano: number, isbn: number, preco: number,autor: string,editora: string, estoque: number){
            this.titulo = titulo;
            this.autor = autor;
            this.ano = ano;
            this.editora = editora;
            this.isbn = isbn;
            this.preco = preco;
            this.estoque = estoque;
        }

        exibirDados(): void {
            console.log(`Dados sobre o Livro:`);
            console.log(`Titulo: ${this.titulo}`);
            console.log(`Autor: ${this.autor}`);
            console.log(`Ano: ${this.ano}`);
            console.log(`Editora: ${this.editora}`);
            console.log(`Isbn: ${this.isbn}`);
            console.log(`Preço: R$${this.preco} reais`);
            console.log(`Estoque: ${this.estoque} livros`); 
        }

        atualizarEstoque(estoque: number): void {
           this.estoque += estoque;
           console.log(`O novo estoque tem: ${estoque} livros`);
        }

    }

    class Ebook implements ILivro{

        titulo: string;
        autor: string;
        ano: number;
        editora: string;
        isbn: number;
        preco: number;
        estoque: number;

        constructor (titulo: string, autor: string, ano: number, editora: string, isbn: number, preco: number, estoque: number){
            this.titulo = titulo;
            this.autor = autor;
            this.ano = ano;
            this.editora = editora;
            this.isbn = isbn;
            this.preco = preco;
            this.estoque = estoque;
        }
        exibirDados(): void {
            console.log(`Dados sobre o Ebook:`);
            console.log(`Titulo: ${this.titulo}`);
            console.log(`Autor: ${this.autor}`);
            console.log(`Ano: ${this.ano}`);
            console.log(`Editora: ${this.editora}`);
            console.log(`Isbn: ${this.isbn}`);
            console.log(`Preço: ${this.preco}`);
            console.log(`Estoque: ${this.estoque}`); 
        }
        atualizarEstoque(estoque: number): void {
            this.estoque += estoque;
            console.log(`O novo estoque tem: ${estoque} livros`);
        }


    }

        class Livraria {

            private livros: ILivro[]=[];

            adicionarLivro(livro:ILivro){
                //const livro1 = new Livro ("Mil Beijos de Garoto", 2016, 9781405955317, 15.00, "Tille Cole", "Outro Planeta", 20);
                this.livros.push(livro);
            }
         
    }
    
    const livro1 = new Livro ("Mil Beijos de Garoto", 2016, 9781405955317, 15.00, "Tille Cole", "Outro Planeta", 20);

    const livraria = new Livraria()
    livraria.adicionarLivro(livro1);

    /*const livro1 = new Livro ("Mil Beijos de Garoto", 2016, 9781405955317, 15.00, "Tille Cole", "Outro Planeta", 20)
    livro1.exibirDados();*/    
