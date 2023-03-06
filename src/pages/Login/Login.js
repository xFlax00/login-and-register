import './Login.css'

import { useAuth } from "../../hooks/useAuth"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const { signIn, erro, loading } = useAuth()

    const [rec, setRec] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        signIn(email, password)

        console.log(rec)

        if(!rec){
            e.target.reset()
        }
    }

    return (
        <div className='Login'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <input type="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label id='rec'>
                        <div className='rec'>
                            <input type="checkbox" name="rec" onClick={(e) => rec ? setRec(false) : setRec(true)}/>
                            <span>Lembre-se</span>
                        </div>
                        
                        <Link>Esqueceu a senha?</Link>
                </label>
                
                <button>Entrar</button>
                <Link to='/register'>Cadastrar-se</Link>

                {erro && 
                    !loading && 
                        <p className='info'>{erro}</p>
                }
                {loading && <p className='info'>Carregando...</p>}
            </form>
        </div>
    )
}

export default Login