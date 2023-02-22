import { app } from '../firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { useState} from 'react'

export const useAuth = () => {

    const [erro, setErro] = useState('')
    const [sucess, setSucess] = useState('')

    const auth = getAuth(app)

    // Registering user
    const createUser = async (email, password) => {

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)

            setSucess('Usuário cadastrado com sucesso!')
        } catch (error) {
            console.error('Erro: ', error)
            
            if(error.toString().includes('characters')){
                setErro('Tamanho mínimo de 6 digitos para a senha.')
            }else if(error.toString().includes('invalid-email')){
                setErro('Insira um email válido.')
            }else if(error.toString().includes('email-already')){
                setErro('Email já cadastrado.')
            }else{
                setErro('Erro na autenticação.')
            }
        }
        
    }

    // Sign in
    const signIn = async (email, password) => {

        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
        } catch (error) {
            console.error('Erro:', error)

            if(error.toString().includes('wrong-password')){
                setErro('Senha incorreta.')
            }else if(error.toString().includes('invalid-email')){
                setErro('Insira um email válido.')
            }else if(error.toString().includes('user-not-found')){
                setErro('Email não cadastrado.')
            }
        }
        
    }

    const logOut = () => {
        signOut(auth)
    }

    return { auth, createUser, signIn, logOut, erro, sucess }
}