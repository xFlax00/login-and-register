import './Register.css'

import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'


const Register = () => {

    const { createUser, erro, sucess } = useAuth()

    const [error, setError] = useState()
    const [done, setDone] = useState()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [confirmEmail, setConfirmEmail] = useState()
    const [pass, setPass] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(email===confirmEmail){
            createUser(name, email, pass)
        }else{
            setError('Email não correspondente.')
            setDone('')
        }
        
        setName('')
        setEmail('')
        setConfirmEmail('')
        setPass('')
    }

    useEffect(() => {
        setError(erro)
        setDone(sucess)
    }, [erro, sucess])

    return (
        <div className='Register'>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="name" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name} required/>
                </label>
                <label>
                    <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                <label>
                    <input type="email" name="confirmEmail" placeholder="Confirme seu email" onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail}/>
                </label>
                <label>
                    <input type="password" name="password" placeholder="Senha" onChange={(e) => setPass(e.target.value)} value={pass}/>
                </label>
                
                <button>Cadastrar</button>

                <Link to='/'>Já tem uma conta?</Link>
                {!done ? error && <p className='info'>{error}</p> : <p className='info'>{done}</p>}
            </form>
        </div>
    )
}

export default Register