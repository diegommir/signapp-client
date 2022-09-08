import '../css/SignUp.css'

export default function SignUp() {
    const validateForm = () => {
        const password = document.getElementById('password')
        const passwordConfirmation = document.getElementById('passwordConfirmation')

        if (password.value !== passwordConfirmation.value) {
            const msg = 'A Confirmação não confere com a Senha informada.'
            passwordConfirmation.setCustomValidity(msg)
            document.getElementById('passwordConfirmationMsg').innerHTML = msg
        } else {
            passwordConfirmation.setCustomValidity('')
        }
    }

    const signup = () => {
        const form = document.getElementById('signup-form')

        validateForm()

        if (form.checkValidity()) {
            form.classList.remove('was-validated')
        } else {
            form.classList.add('was-validated')
        }
    }

    return (
        <div className="signup-form w-100 m-auto">
            <form id="signup-form" className="needs-validation" noValidate>
                <h3 className="fw-normal text-center">Efetuar Cadastro</h3>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" 
                        className="form-control" placeholder="email@example.com"
                        required></input>
                    <div className="invalid-feedback">Insira um endereço de email válido.</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 mb-2">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" 
                            className="form-control" placeholder="Senha"
                            required minLength="8" maxLength="20"></input>
                        <div className="invalid-feedback">A senha deve conter entre 8 e 20 caracteres.</div>
                    </div>
                    <div className="col-6 mb-2">
                        <label htmlFor="password">Confirmar Senha</label>
                        <input type="password" id="passwordConfirmation" className="form-control" 
                            placeholder="Confirmar Senha"
                            required></input>
                        <div id="passwordConfirmationMsg" className="invalid-feedback">Insira uma confirmação de senha válida.</div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <label htmlFor="given-names">Nomes</label>
                        <input type="text" id="given-names" name="given-names" 
                            className="form-control" placeholder="Nomes"
                            required minLength="3" maxLength="50"></input>
                        <div className="invalid-feedback">Preencha o campo Nomes.</div>
                    </div>
                    <div className="col-6">
                        <label htmlFor="last-name">Sobrenome</label>
                        <input type="text" id="last-name" name="last-name" 
                            className="form-control" placeholder="Sobrenome"
                            required minLength="3" maxLength="50"></input>
                        <div className="invalid-feedback">Preencha o campo Sobrenome.</div>
                    </div>
                </div>
                <button type="button" onClick={signup} className="btn btn-lg btn-primary w-100 mt-5">Cadastrar</button>
            </form>
        </div>
    )
}
