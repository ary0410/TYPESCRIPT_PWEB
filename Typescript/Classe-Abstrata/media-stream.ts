abstract class MediaStream{
    //classes filhas tem acesso a proṕriedade

    protected titulo:string;
    protected autor: string;
    protected tempoS: number;
    protected status: 'Tocando' | 'Pausado' | 'Parado';

    constructor(tiluto: string, autor: string, tempoS: number){
        this.autor = autor;
        this.titulo = tiluto;
        this.tempoS = tempoS;
        this.status = 'Parado';
    }

    play() : void {
        if (this.status !== 'Tocando'){
            this.status = 'Tocando'
            console.log(`Tocando ${this.titulo} by ${this.autor}`);
        }
    }
    pause() : void {
        if(this.status === 'Tocando'){
            this.status = 'Pausado';
            console.log(`Pausando ${this.titulo}`);
        }
    }
    stop(): void{
        if (this.status !== 'Parado'){
            this.status = 'Parado';
            console.log(`Parando ${this.titulo}`);
        }
    }
 }