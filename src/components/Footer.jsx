import '../css/global.css'
import '../css/footer.css'
import { BsInstagram, BsWhatsapp, BsGeoAlt, BsEnvelope } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-info">
          <div className="footer-item">
            <BsEnvelope className="footer-icon" />
            <p>glowgym@gmail.com</p>
          </div>

          <div className="footer-item">
            <BsWhatsapp className="footer-icon" />
            <p>(11) 99999-9999</p>
          </div>

          <div className="footer-item">
            <BsInstagram className="footer-icon" />
            <p>@glowgym</p>
          </div>

          <div className="footer-item">
            <BsGeoAlt className="footer-icon" />
            <p>Av. Paulista, 1000 - São Paulo, SP</p>
          </div>
        </div>

        <h6>&copy; 2026 - direitos reservados</h6>
      </div>
    </footer>
  )
}

export default Footer