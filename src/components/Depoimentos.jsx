import React, { useState, useEffect } from 'react'
import '../css/depoimentos.css'

const depoimentos = [
    {
        nome: "Ana Lima",
        texto: "Melhor academia que já frequentei! Os professores são atenciosos e o ambiente é incrível.",
        tempo: "Aluna há 1 ano"
    },
    {
        nome: "Carlos Souza",
        texto: "Comecei do zero e em 6 meses já vi resultados que nunca imaginei. Super recomendo!",
        tempo: "Aluno há 6 meses"
    },
    {
        nome: "Fernanda Costa",
        texto: "As aulas de yoga mudaram minha rotina completamente. Me sinto muito mais equilibrada.",
        tempo: "Aluna há 8 meses"
    },
    {
        nome: "Rafael Mendes",
        texto: "Estrutura excelente, equipamentos modernos e uma energia muito boa no lugar.",
        tempo: "Aluno há 2 anos"
    }
]

const Depoimentos = () => {
    const [atual, setAtual] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
        setAtual(prev => (prev + 1) % depoimentos.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const anterior = () => setAtual(prev => (prev - 1 + depoimentos.length) % depoimentos.length)
    const proximo = () => setAtual(prev => (prev + 1) % depoimentos.length)

    return (
        <section className="depoimentos">
            <h2>O que nossos alunos dizem</h2>
            <div className="carrossel">
                <button className="seta" onClick={anterior}>&#8592;</button>
                <div className="depoimento-card">
                    <div className="avatar">{depoimentos[atual].nome.charAt(0)}</div>
                    <h3>{depoimentos[atual].nome}</h3>
                    <span>{depoimentos[atual].tempo}</span>
                    <p>"{depoimentos[atual].texto}"</p>
                </div>
                <button className="seta" onClick={proximo}>&#8594;</button>
            </div>
            <div className="pontos">
                {depoimentos.map((_, i) => (
                <span
                key={i}
                className={`ponto ${i === atual ? 'ativo' : ''}`}
                onClick={() => setAtual(i)}
                />
                ))}
            </div>
        </section>
  )
}

export default Depoimentos