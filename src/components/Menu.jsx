import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <section className= "Nav">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/calculadora">Calculadora</Link>
        <Link to="/plano">Planos</Link>
        <Link to="/contato">Contato</Link>
    </section>
  )
}

export default Menu
