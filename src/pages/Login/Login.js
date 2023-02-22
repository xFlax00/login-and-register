import './Login.css'

import { useAuth } from "../../hooks/useAuth"
import { Link } from 'react-router-dom'

const Login = () => {

    const { signIn, erro } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.elements.email.value
        const pass = e.target.elements.password.value
        
        signIn(email, pass)

        e.target.reset()
    }

    return (
        <div className='Login'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="email" placeholder="Email" />
                </label>
                <label>
                    <input type="password" name="password" placeholder="Senha" />
                </label>
                <button>Entrar</button>
                <Link to='/register'>Cadastrar-se</Link>

                {erro && <p>{erro}</p>}
            </form>
        </div>
    )
}

export default Login