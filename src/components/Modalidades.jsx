import '../css/global.css'
import '../css/modalidades.css'

const Modalidades = () => {

    return(

        <section className="modalidades">

            <h2>Nossas Modalidades</h2>

            <div className="cards">

                <div className="card">
                    <h3>Musculação</h3>
                    <p>
                        Treinos com equipamentos modernos para
                        desenvolvimento de força e hipertrofia.
                    </p>
                </div>

                <div className="card">
                    <h3>Treino Funcional</h3>
                    <p>
                        Exercícios dinâmicos que melhoram
                        resistência, mobilidade e equilíbrio.
                    </p>
                </div>

                <div className="card">
                    <h3>Spinning</h3>
                    <p>
                        Aulas intensas de bicicleta que ajudam
                        no condicionamento físico.
                    </p>
                </div>

                <div className="card">
                    <h3>Yoga</h3>
                    <p>
                        Prática focada em respiração,
                        flexibilidade e relaxamento.
                    </p>
                </div>

            </div>

        </section>

    )

}

export default Modalidades