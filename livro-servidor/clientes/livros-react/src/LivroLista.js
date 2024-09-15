import { useState, useEffect } from "react";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro, {livros} from "./controle/ControleLivros";
import axios from 'axios';


var controleLivro = new ControleLivro()
var controleEditora = new ControleEditora()

const LinhaLivro = (props) => {

    return (
            <tr> 
                <td className="semQuebra">{props.livro.titulo} <br></br>
                    <button onClick={props.excluir}>Excluir</button>
                    {/*<button onClick={props.excluir2}>Excluir2</button>*/}
                </td>
                <td>{props.livro.resumo}</td>
                <td className="semQuebra">{props.nomeEditora}</td>
                <td>
                    <ul>
                        {props.livro.autores.map((a, index) =>  <li className="semQuebra" key={index}>{a}</li> )}
                    </ul>
                </td>
            </tr>
    )

}

export default function LivroLista() {

    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        axios.get(livros.obterLivros())
        .then(response => {
            setLivros(response.data)
        })
        setCarregado(true)
    }, [carregado])

    return (
        <div id="main">
            <h1> Catálogo de Livros </h1>
            <table>
                <tr>
                    <th>Titulo</th>
                    <th>Resumo</th>
                    <th>Editora</th> 
                    <th>Autores</th>
                </tr>
                {livros.map((livro) => 
                    <LinhaLivro key={livro.codigo}
                        livro={livro} 
                        //excluir = {() => console.log('excluir')}
                        //setCarregado = {() => setCarregado(false)}
                        excluir = {(codigoLivro) => {
                            codigoLivro = livro.codigo
                            controleLivro.excluir(codigoLivro);
                            setCarregado(false)
                            setLivroTeste(livros)
                        }
                        }
                        codigoLivro = {livro.codigo}
                        nomeEditora={new ControleEditora().getNomeEditora(livro.codEditora)} 
                    >
                    </LinhaLivro>
                )}    
           </table>
        </div>   
    )
};
