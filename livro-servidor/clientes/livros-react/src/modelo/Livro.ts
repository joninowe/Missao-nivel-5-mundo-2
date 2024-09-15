
export class Livro {
	titulo: string;
    resumo:string;
	codEditora: number;
    codigo:string;
    autores:string[];
	
	constructor(titulo: string, resumo:string, codEditora: number, codigo:string, autores:string[]){
		this.titulo = titulo;
        this.resumo = resumo;
		this.codEditora = codEditora;
        this.codigo = codigo;
        this.autores = autores;
	}
}
