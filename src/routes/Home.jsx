import Modalidades from "../components/Modalidades"
import Hero from "../components/Hero"
import Depoimentos from "../components/Depoimentos"
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa"
import { Link } from 'react-router-dom'
import '../css/home.css'

const Home = () => {

    return(
        <>
        <Hero/>
        <Modalidades/>
        <Depoimentos/>

        <section className="info">

            <h2>Informações importantes</h2>
            <ul>
                <li>
                    <FaClock className="info-icon" />
                    <div>
                        <strong>Horário de funcionamento</strong>
                        <span>Segunda a sexta: 6h às 22h | Sábado: 8h às 18h | Domingo: 8h às 12h</span>
                    </div>
                </li>
                <li>
                    <FaMapMarkerAlt className="info-icon" />
                    <div>
                        <strong>Endereço</strong>
                        <span>Av. Paulista, 1000 — São Paulo, SP</span>
                    </div>
                </li>
                <li>
                    <FaStar className="info-icon" />
                    <div>
                        <strong>Diferenciais</strong>
                        <span>Equipamentos modernos, professores certificados, estacionamento gratuito e vestiários completos</span>
                    </div>
                </li>
            </ul>
        </section>

        <section className="cta">
            <h2>Pronto para começar?</h2>
            <Link to="/plano" className="cta-btn">Quero me matricular</Link>
        </section>
        </>
    )

}

export default Home
