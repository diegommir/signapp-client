import '../css/SignIn.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <div className="signin-form text-center w-100 m-auto">
            <form>
                <h3 className="fw-normal">Entrar</h3>
                <div className="form-floating">
                    <input type="email" id="email" name="email" className="form-control" placeholder="email@example.com"></input>
                    <label htmlFor="email">Digite seu Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" id="password" name="password" className="form-control" placeholder="Senha"></input>
                    <label htmlFor="password">Digite sua Senha</label>
                </div>
                <div className="m-3">
                    <input type="checkbox" id="keepConnected" name="keepConnected" value={true} />
                    <label>&nbsp;Manter conectado?</label>
                </div>
                <button type="button" className="btn btn-lg btn-primary w-100">Entrar</button>
                <div className="m-3">
                    <label>Ainda não tem cadastro?&nbsp;<Link to="/signup">Cadastre-se</Link>.</label>
                </div>
            </form>
        </div>
    )
}