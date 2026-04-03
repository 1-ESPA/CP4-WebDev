import React from 'react'
import '../css/global.css'
import '../css/modalidades.css'
import { GiWeightLiftingUp } from "react-icons/gi"
import { MdFitnessCenter } from "react-icons/md"
import { FaBicycle, FaSpa } from "react-icons/fa"

const Modalidades = () => {
  return (
    <section className="modalidades">

        <h2>Nossas Modalidades</h2>
        <div className="cards">
            <div className="card">
                <h3>Musculação</h3>
                <GiWeightLiftingUp className="card-icon" />
                <p>Treinos com equipamentos modernos para desenvolvimento de força e hipertrofia.</p>
            </div>

            <div className="card">
                <h3>Treino Funcional</h3>
                <MdFitnessCenter className="card-icon" />
                <p>Exercícios dinâmicos que melhoram resistência, mobilidade e equilíbrio.</p>
            </div>

            <div className="card">
                <h3>Spinning</h3>
                <FaBicycle className="card-icon" />
                <p>Aulas intensas de bicicleta que ajudam no condicionamento físico.</p>
            </div>

            <div className="card">
                <h3>Yoga</h3>
                <FaSpa className="card-icon" />
                <p>Prática focada em respiração, flexibilidade e relaxamento.</p>
            </div>
        </div>
    </section>
  )
}

export default Modalidades