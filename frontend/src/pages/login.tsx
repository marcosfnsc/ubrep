import './login.css'

function LoginPage() {
  return (
    <div className ="login-page">
      <div className ="form">
        <form className ="login-form">
          <input type="text" placeholder="usuario"/>
          <input type="password" placeholder="senha"/>
          <button>login</button>
          <p className ="message">Não resgistrado? <a href="#">Solicitar registro</a></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
