export default function CuratedWorlds() {
  return (
    <section className="curated-section">
      <h2>Discover Our Curated Worlds</h2>

      <div className="curated-grid">
        {/* Card 1 - Baker Profile */}
        <div className="curated-card">
          <div className="card-image-container">
            <div className="profile-image"></div>
          </div>
          <h3>
            Meet the Baker:
            <br />
            Aasawafi's Story
          </h3>
          <p>Discover Aasawafi's humble beginnings to becoming Ahilyanagar's most beloved baker.</p>
          <button className="card-btn">Meet Her Journey</button>
        </div>

        {/* Card 2 - Cookies */}
        <div className="curated-card">
          <div className="card-image-container large">
            <div className="cookie-grid">
              <div className="mini-image"></div>
              <div className="mini-image"></div>
              <div className="mini-image"></div>
              <div className="mini-image"></div>
              <div className="mini-image"></div>
              <div className="mini-image"></div>
            </div>
          </div>
          <h3>
            Explore our
            <br />
            Cookie Creations
          </h3>
          <p>$13.00</p>
          <button className="card-btn">Inquire on WhatsApp</button>
        </div>

        {/* Card 3 - Catering */}
        <div className="curated-card">
          <div className="card-image-container large">
            <div className="catering-image"></div>
          </div>
          <h3>
            Catering
            <br />
            Partnerships
          </h3>
          <p>Make your special events memorable with custom catering.</p>
          <button className="card-btn">Connect with Unibakes</button>
        </div>

        {/* Card 4 - Contact Form */}
        <div className="curated-card contact-card">
          <h3>Contact Us</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit" className="card-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
