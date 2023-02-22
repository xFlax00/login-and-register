import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Entrar</Link>
      <Link to='/register'>Cadastrar</Link>
    </nav>
  )
}

export default Navbar