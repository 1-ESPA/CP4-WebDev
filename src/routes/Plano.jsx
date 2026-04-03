import React from 'react'
import '../css/plano.css'

const Plano = () => {
  return (
    <div className="plano-page">
      <div className="plano-header">
        <h1>Escolha seu plano</h1>
        <p>Invista em você. Sem fidelidade, cancele quando quiser.</p>
      </div>

      <div className="plano-cards">

        <div className="plano-card">
          <h2>Basic</h2>
          <p className="preco">R$ 89,90/mês</p>
          <hr />
          <ul>
            <li><span className="check">✓</span> Acesso à musculação</li>
            <li><span className="check">✓</span> Acesso nos horários padrão</li>
            <li><span className="check">✓</span> 1 avaliação física/mês</li>
            <li><span className="check">✓</span> Cancele quando quiser</li>
          </ul>
          <button className="plano-btn btn-outline">Assinar Basic</button>
        </div>

        <div className="plano-card destaque">
          <span className="badge">Mais popular</span>
          <h2>Pro</h2>
          <p className="preco">R$ 139,90/mês</p>
          <hr />
          <ul>
            <li><span className="check">✓</span> Acesso a todas as modalidades</li>
            <li><span className="check">✓</span> Acesso 24 horas</li>
            <li><span className="check">✓</span> Avaliações físicas ilimitadas</li>
            <li><span className="check">✓</span> Personal trainer 2x/semana</li>
            <li><span className="check">✓</span> Cancele quando quiser</li>
          </ul>
          <button className="plano-btn btn-primary">Assinar Pro</button>
        </div>

        <div className="plano-card">
          <h2>Elite</h2>
          <p className="preco">R$ 199,90/mês</p>
          <hr />
          <ul>
            <li><span className="check">✓</span> Tudo do plano Pro</li>
            <li><span className="check">✓</span> Personal trainer ilimitado</li>
            <li><span className="check">✓</span> Acesso a eventos exclusivos</li>
            <li><span className="check">✓</span> Desconto em suplementos</li>
            <li><span className="check">✓</span> Cancele quando quiser</li>
          </ul>
          <button className="plano-btn btn-outline">Assinar Elite</button>
        </div>

      </div>
    </div>
  )
}

export default Plano