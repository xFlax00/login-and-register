import './Profile.css'

import { useContext } from "react"
import { useAuth } from "../../hooks/useAuth"
import { AuthContext } from "../../context/AuthContext"

const Profile = () => {

  const { logOut } = useAuth()
  const { auth } = useContext(AuthContext)

  const handleClick = () => {
      logOut()
  }

  return (
    <div className="Profile">
        <h1>Profile</h1>
        <img src={auth.currentUser.photoURL} alt="perfil" />
        <p><span>Nome:</span> {auth.currentUser.displayName}</p>
        <p><span>Email:</span> {auth.currentUser.email}</p>

        <button onClick={handleClick}>Sair</button>        
    </div>
  )
}

export default Profile