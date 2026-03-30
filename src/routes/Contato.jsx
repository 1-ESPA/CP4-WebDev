import '../css/global.css'
import '../css/contato.css'

const Contato = () => {
  return (
    <section className="contato">
      <div className="contato-container">
        <h1>Entre em contato</h1>

        <form className="formulario">
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="campo">
            <label htmlFor="plano">Você já tem plano?</label>
            <select id="plano" name="plano">
              <option value="">Selecione uma opção</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="motivo">Motivo do contato</label>
            <textarea
              id="motivo"
              name="motivo"
              rows="5"
              placeholder="Escreva o motivo do seu contato"
            ></textarea>
          </div>

          <div className="botoes">
            <button type="submit">Enviar</button>
            <button type="reset">Limpar</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contato