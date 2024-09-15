const Livro = require("./livro-schema");

const obterLivros = async () => {
  try {
    const livros = await find();
    return livros;
  } catch (error) {
    console.log(`Erro: ${error}`);
    return [];
  }
}

const incluir = async (livro) => {
    try {
      const novoLivro = await create(livro);
      console.log(`Livro adicionado com sucesso: ${novoLivro}`);
      return novoLivro;
    } catch (error) {
      console.log(`Erro: ${error}`);
      return null;
    }
  }
  
  const excluir = async (codigo) => {
    try {
      const resultado = await deleteOne({ _id: codigo });
      if (resultado.deletedCount === 0) {
        console.log('Livro não encontrado');
        return null;
      } else {
        console.log('Livro excluído com sucesso');
        return resultado;
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
      return null;
    }
  };
  
  module.exports = { obterLivros, incluir, excluir };