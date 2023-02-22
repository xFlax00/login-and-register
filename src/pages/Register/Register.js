import './Register.css'

import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const Register = () => {

    const { createUser, erro, sucess } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.elements.email.value
        const pass = e.target.elements.password.value

        const newUser = {
            email,
            pass
        }
        console.log(newUser)

        createUser(email, pass)

        e.target.reset()
    }

    return (
        <div className='Register'>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    
                    <input type="text" name="email" placeholder="Email" />
                </label>
                <label>
                    
                    <input type="password" name="password" placeholder="Senha" />
                </label>
                <label id='rec'>
                        <div className='rec'>
                            <input type="checkbox" name="rec"/>
                            <span>Lembre-se</span>
                        </div>
                        
                        <span>Esqueceu a senha?</span>
                </label>
                

                <button>Cadastrar</button>

                <Link to='/'>Já tem uma conta?</Link>
                {!sucess ? erro && <p>{erro}</p> : <p>{sucess}</p>}
            </form>
        </div>
    )
}

export default Register