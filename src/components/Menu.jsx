import { NavLink } from 'react-router-dom'
import '../css/global.css'
import '../css/menu.css'
import logo from '../assets/logo.png'

const Menu = () => {
  return (
    <header className="menu">
      <div className="menu-container">
        <div className="esquerda">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <nav className="direita">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/calculadora">Calculadora</NavLink>
          <NavLink to="/plano">Planos</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Menu