import css from './catalogo.module.css'

function Catalogo() {
  const example_data = [
    'bela adormecida',
    'chapeuzinho vermelho',
    'cinderela'
  ]
  const listItems = example_data.map(livro => <li key={livro}>{livro}</li>)

  return (
    <div className={css.container}>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default Catalogo
