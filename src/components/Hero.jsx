import React from 'react'
import { Link } from 'react-router-dom'
import '../css/global.css'
import '../css/hero.css'

export const Hero = () => {
  return (
  
    <section className="hero">
        <div className="hero-content">
            <h1>Transforme seu corpo.<br />Transforme sua vida.</h1>
            <p>A academia que une estrutura de qualidade, professores experientes e um ambiente feito pra você evoluir.</p>
            <Link to="/plano" className="hero-btn">Quero me matricular</Link>
        </div>
    </section>
  )
}

export default Hero