import css from './login.module.css'

function LoginPage() {
  return (
    <div className={css.container}>
      <div className={css.loginPage}>
        <h1 className={css.text}>UBREP</h1>
        <p className={css.text}>Uniao das bibliotecas da rede estadual pública</p>
        <div className ={css.form}>
          <form>
            <input type="text" placeholder="usuario" required/>
            <input type="password" placeholder="senha" required/>
            <button type="submit">login</button>
            <p className ={css.message}>Não resgistrado? <a href="#">Solicitar registro</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
