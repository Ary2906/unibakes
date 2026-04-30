export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Contact</h4>
          <p>📞 9075643210</p>
          <p>📍 Bake Street, Ahilyanagar</p>
          <p>📧 orders@unibakes.com</p>
        </div>

        <div className="footer-column">
          <h4>Legal Link</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About Us</h4>
          <p>Celebrating 10 years of handcrafted excellence in baking.</p>
        </div>

        <div className="footer-column social-column">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#facebook">f</a>
            <a href="#instagram">📷</a>
            <a href="#twitter">𝕏</a>
          </div>
          <button className="whatsapp-btn">💬 Needing WhatsApp CTA</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Unibakes. All rights reserved.</p>
      </div>
    </footer>
  )
}
