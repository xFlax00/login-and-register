import { useAuth } from "../../hooks/useAuth"

const Profile = () => {

    const { logOut } = useAuth()

    const handleClick = () => {
        logOut()
    }

  return (
    <div>
        <h1>Profile</h1>
        <button onClick={handleClick}>Sair</button>
    </div>
  )
}

export default Profile