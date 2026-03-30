import { BrowserRouter as Browser,Routes,Route } from "react-router-dom"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import './css/global.css'

function App() {

  return (
    <>
    <Browser>
      <Menu />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />
        <Route path="/calculadora" element={<h1>Calculadora</h1>} />
        <Route path="/plano" element={<h1>Planos</h1>} />
        <Route path="/contato" element={<h1>Contato</h1>} />
      </Routes>
      <Footer/>
    </Browser>
    </>
  )
}

export default App
