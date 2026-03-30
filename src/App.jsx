import { BrowserRouter as Browser, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Contato from "./routes/Contato"
import Sobre from "./routes/Sobre"
import Plano from "./routes/Plano"
import Calculadora from "./routes/Calculadora"
import Home from "./routes/Home"
import Error from "./routes/Error"
import Footer from "./components/Footer"
import "./css/global.css"

function App() {
  
  return (
    <>
    <Browser>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/plano" element={<Plano />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Browser>
    </>
  )
}

export default App