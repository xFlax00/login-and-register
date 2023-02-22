import { useAuth } from "../../hooks/useAuth"

const Home = () => {

    const { auth, logOut } = useAuth()

    const handleClick = () => {
        logOut()
    }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={handleClick}>Sair</button>
    </div>
  )
}

export default Home