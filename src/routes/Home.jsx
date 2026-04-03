import Modalidades from "../components/Modalidades"
import Hero from "../components/Hero"
import '../css/global.css'

const Home = () => {

    return(
        <>
        <Hero/>
        <Modalidades/>

        <section className="cta">
            <h2>Pronto para começar?</h2>
            <a href="#contato" className="cta-btn">Quero me matricular</a>
        </section>
        </>
    )

}

export default Home
