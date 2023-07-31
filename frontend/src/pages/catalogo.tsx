import css from './catalogo.module.css'

const livros_exemplo = [{
  nome: 'PETROBRAS - uma construção da inteligência brasileira',
  autor: 'Marieta de Morais Ferreira'
}, {
  nome: 'Os tradutores na História',
  autor: 'Jean Delise e Judith Woodsworth'
}, {
  nome: 'Iformática e Formações de Professores',
  autor: 'Maria Elizabeth'
}, {
  nome: 'curso de atualização para Profressores',
  autor: 'Pierre lévy'
}, {
  nome: 'Curso de atualização para Profressores',
  autor: 'Walda de Andrade Antunes'
}, {
  nome: 'O silencioso exercicio de semear bibliotecas',
  autor: 'Marize Castro'
}, {
  nome: 'Mil perguntas de direito - Serie Penal',
  autor: 'Nildo Nery dos Santos'
}, {
  nome: 'Mil perguntas de direito - criminologia - Serie Penal',
  autor: 'Nildo Nery dos Santos'
}, {
  nome: 'Mil pergunas de direito - processual - Serie Penal',
  autor: 'Gerson Silveira Arrares'
}]

const table = (livro) => {
  return (
    <tr key={livro.nome}>
      <td>{livro.nome}</td>
      <td>{livro.autor}</td>
    </tr>
  )
}

function Catalogo() {
  const list_livros = livros_exemplo.map(livro => table(livro))

  return (
    <div className={css.container}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {list_livros}
        </tbody>
      </table>
    </div>
  )
}

export default Catalogo
