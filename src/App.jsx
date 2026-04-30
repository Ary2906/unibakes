import './App.css'

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">Unibakes</div>
        <nav>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#journey">OUR JOURNEY</a>
          <a href="#collections">CURATED COLLECTIONS</a>
          <a href="#cakes">CAKES</a>
          <a href="#contact">CONTACT</a>
          <button className="order-btn">ORDER NOW</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Celebrating 10 Years of Handiwork Bliss in Ahilyanagar.<br/>Cakes, Cookies & Unforgettable Indulgence.</h1>
          <p style={{fontSize: '1.1rem', marginTop: '1.5rem'}}>Discover handcrafted creations that celebrate life's sweetest moments</p>
          <button className="hero-btn">Start Your Sweet Journey</button>
        </div>
      </section>

      {/* Discover Our Curated Worlds Section */}
      <section>
        <div className="section-title">
          <h2>Discover Our Curated Worlds</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <div className="card-image">Baker's Profile</div>
            <h3>Meet the Baker: Aasawafi's Story</h3>
            <p>Discover the passion and artistry behind every creation, from her humble beginnings to becoming Ahilyanagar's most beloved baker.</p>
            <button>Meet Her Journey</button>
          </div>
          <div className="card">
            <div className="card-image">Cookie Collections</div>
            <h3>Explore our Cookie Creations</h3>
            <p>From classic chocolate delights to innovative flavors, our cookies are crafted with premium ingredients and baked with love.</p>
            <button>Explore our Cookie Creations</button>
          </div>
          <div className="card">
            <div className="card-image">Catering Services</div>
            <h3>Catering Partnerships</h3>
            <p>Make your special events memorable with our custom catering services, from intimate gatherings to grand celebrations.</p>
            <button>Inquire on WhatsApp</button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Style Section */}
      <section style={{backgroundColor: 'var(--light-tan)', padding: '3rem 2rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Sweet Snapshots From Our Kitchen</h2>
        <div className="gallery-grid">
          <div className="gallery-item">🧁 Cookie Shot 1</div>
          <div className="gallery-item">🎂 Cake Display</div>
          <div className="gallery-item">🍪 Fresh Batch</div>
          <div className="gallery-item">🎉 Special Order</div>
          <div className="gallery-item">✨ Decorated Cake</div>
          <div className="gallery-item">🤤 Pastry Close-up</div>
          <div className="gallery-item">👨‍🍳 Kitchen Shot</div>
          <div className="gallery-item">🏪 Shop Display</div>
          <div className="gallery-item">💝 Gift Pack</div>
        </div>
      </section>

      {/* Community Section */}
      <section>
        <div className="section-title">
          <h2>Sweet Words from Our Community</h2>
          <p>What our customers love about Unibakes</p>
        </div>
        <div className="card-grid">
          <div className="testimonials">
            <div className="testimonial-item">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"Unibakes created the perfect cupcake for our daughter's birthday party. Stunning and delicious!"</p>
              <div className="name">Sarah Mitchell</div>
            </div>
          </div>
          <div className="testimonials">
            <div className="testimonial-item">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"Unibakes started the perfect event and we still can't stop talking about the amazing flavor!"</p>
              <div className="name">Event Tips</div>
            </div>
          </div>
          <div className="testimonials">
            <div className="testimonial-item">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"Unibakes created the perfect gift for my friend. Stunning and delicious! 5 Stars!"</p>
              <div className="name">Emma Rodriguez</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Planning Section */}
      <section style={{backgroundColor: 'var(--light-tan)', padding: '3rem 2rem'}}>
        <div className="section-title">
          <h2>Plan Your Special Event</h2>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Ladies Groups</h3>
            <p>Perfect for all-women celebrations and gatherings. Customizable options for every taste.</p>
            <button>Plan Now</button>
          </div>
          <div className="card">
            <h3>Double Chocolate Bliss</h3>
            <p>Our signature chocolate creation that's sure to impress even the most chocolate lovers.</p>
            <button>Inquire on WhatsApp</button>
          </div>
          <div className="card">
            <h3>Spiced Ginger Spectacular</h3>
            <p>A warm and aromatic treat with the perfect balance of spices and sweetness.</p>
            <button>Inquire on WhatsApp</button>
          </div>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Grandma's Classic Caramel</h3>
            <p>Heritage recipe with modern twist. A timeless favorite that brings back memories.</p>
            <button>Order Now</button>
          </div>
          <div className="card">
            <h3>Spiced Ginger Spectacular</h3>
            <p>Our premium blend delivers authentic spice and sweetness in every bite.</p>
            <button>Inquire on WhatsApp</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>Contact</h3>
        <div className="contact-info">
          <p>📞 9075643210</p>
          <p>📍 Bake Street, Ahilyanagar</p>
          <p>📧 orders@unibakes.com</p>
        </div>

        <div className="footer-section">
          <h3>Social Links</h3>
          <div className="social-links">
            <a href="#facebook" title="Facebook">f</a>
            <a href="#instagram" title="Instagram">📷</a>
            <a href="#twitter" title="Twitter">𝕏</a>
            <a href="#linkedin" title="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Legal Link</h3>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookies</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <div className="footer-links">
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
            <a href="#terms">Terms</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <p>Celebrating 10 years of handcrafted excellence in baking. Every creation tells a story of passion and dedication.</p>
        </div>

        <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)'}}>
          <p>© 2024 Unibakes. All rights reserved.</p>
          <p style={{fontSize: '0.9rem', marginTop: '1rem'}}>Bringing joy one bite at a time 🧁</p>
        </div>
      </footer>
    </>
  )
}

export default App
