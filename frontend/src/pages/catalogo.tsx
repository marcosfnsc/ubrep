import { useState } from 'react'

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

function Catalogo() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(livros_exemplo);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = livros_exemplo.filter((user) => {
        return user.nome.toLowerCase().includes(keyword.toLowerCase())
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(livros_exemplo);
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className={css.input}
        placeholder="Filtrar nome do livro"
      />

      <div className={css.container}>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.nome} className={`${css.user} ${css.list}`}>
              <span className="user-id">{user.nome}</span>
              <span className={css.author}>{user.autor}</span>
            </li>
          ))
        ) : (
          <h1>nenhum resultado encontrado</h1>
        )}
      </div>
    </div>
  );
}

export default Catalogo
