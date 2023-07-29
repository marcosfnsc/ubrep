import './login.css'

function LoginPage() {
  return (
    <div className ="login-page">
      <h1 className="text">UBREP</h1>
      <p className="text">Uniao de bibliotecas da rede estadual pública</p>
      <div className ="form">
        <form className ="login-form">
          <input type="text" placeholder="usuario" required/>
          <input type="password" placeholder="senha" required/>
          <button type="submit">login</button>
          <p className ="message">Não resgistrado? <a href="#">Solicitar registro</a></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
