import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  private editoras: Array<Editora> = [
    {codEditora:1, nome:'Companhia das Letras'},
    {codEditora:2, nome:'Rocco'},
    {codEditora:3, nome:'Arqueiro'},
    { codEditora:4, nome:'Sextante'},
    {codEditora:5, nome:'FTD'}
];

  constructor() {}

  getNomeEditora = (codEditora:number) => {
    const nomeEditora = this.editoras.filter(e => (e.codEditora === codEditora));
    return nomeEditora[0].nome
    //return 'ok'
  }

  getEditoras =() => {
    return this.editoras
        
  }
}