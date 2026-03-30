import '../css/global.css'
import '../css/footer.css'
import { BsInstagram, BsWhatsapp, BsGeoAlt, BsEnvelope } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h4>Contato</h4>

          <p>
            <BsEnvelope className="footer-icon" />
            glowgym@gmail.com
          </p>

          <p>
            <BsWhatsapp className="footer-icon" />
            (11) 99999-9999
          </p>

          <p>
            <BsInstagram className="footer-icon" />
            @glowgym
          </p>

          <p>
            <BsGeoAlt className="footer-icon" />
            Av. Paulista, 1000 - São Paulo, SP
          </p>
        </div>

        <h6>&copy; 2026 - direitos reservados</h6>
      </div>
    </footer>
  )
}

export default Footer