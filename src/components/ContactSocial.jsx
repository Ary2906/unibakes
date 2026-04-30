export default function ContactSocial() {
  return (
    <section className="contact-social-section">
      <h2>The Unibakes Social Circle</h2>

      <div className="contact-social-grid">
        {/* Contact Form */}
        <div className="contact-form-box">
          <h3>Contact Form</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Social Links */}
        <div className="social-box">
          <h3>Social Links</h3>
          <div className="social-icons-large">
            <a href="#facebook" title="Facebook">f</a>
            <a href="#instagram" title="Instagram">📷</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info-box">
          <h3>Contact</h3>
          <p>📞 9075643210</p>
          <p>📍 Bake Street, Ahilyanagar</p>
          <p>📧 orders@unibakes.com</p>
        </div>

        {/* Map */}
        <div className="map-box">
          <div className="map-placeholder">
            <div className="map-marker">📍</div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links-box">
          <h4>Contact</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links-box">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#cookies">Cookies</a></li>
          </ul>
        </div>

        <div className="footer-links-box">
          <h4>Social Us</h4>
          <div className="social-icons-footer">
            <a href="#fb">f</a>
            <a href="#ig">📷</a>
            <a href="#tw">𝕏</a>
            <a href="#in">in</a>
          </div>
        </div>
      </div>
    </section>
  )
}
