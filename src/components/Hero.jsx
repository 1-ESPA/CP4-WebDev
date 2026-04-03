import React from 'react'
import '../css/global.css'
import '../css/hero.css'

export const Hero = () => {
  return (
  
    <section className="hero">
        <div className="hero-content">
            <h1>Transforme seu corpo.<br />Transforme sua vida.</h1>
            <p>A academia que une estrutura de qualidade, professores experientes e um ambiente feito pra você evoluir.</p>
            <a href="#contato" className="hero-btn">Quero me matricular</a>
        </div>
    </section>
  )
}

export default Hero