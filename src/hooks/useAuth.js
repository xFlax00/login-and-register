import { app } from '../firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

import { useState} from 'react'

export const useAuth = () => {

    const [erro, setErro] = useState('')
    const [sucess, setSucess] = useState('')

    const auth = getAuth(app)

    // Registering user
    const createUser = async (name, email, password) => {

        try {
            await createUserWithEmailAndPassword(auth, email, password)

            await updateProfile(auth.currentUser, {
                displayName: name
            })

            setSucess('Usuário cadastrado com sucesso!')
        } catch (error) {
            console.error('Erro: ', error)
            setSucess('')
            
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

        logOut()
    }

    // Sign in
    const signIn = async (email, password) => {

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error('Erro:', error)

            if(error.toString().includes('wrong-password')){
                setErro('Senha incorreta.')
            }else if(error.toString().includes('invalid-email')){
                setErro('Insira um email válido.')
            }else if(error.toString().includes('user-not-found')){
                setErro('Email não cadastrado.')
            }else{
                setErro('Erro de autenticação.')
            }
        }
        
    }

    const logOut = () => {
        signOut(auth)
    }

    return { auth, createUser, signIn, logOut, erro, sucess }
}