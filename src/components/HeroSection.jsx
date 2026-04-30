export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-images-left">
        <div className="hero-image-large"></div>
      </div>

      <div className="hero-content">
        <h1>
          Celebrating 10 Years of Handicraft Bliss in Ahilyanagar.
          <br />
          Cakes, Cookies &<br />
          Unforgettable Indulgence.
        </h1>
        <button className="hero-btn">Start Your Sweet Journey</button>
        <div className="hero-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="hero-images-right">
        <div className="hero-image-small"></div>
        <div className="hero-image-small"></div>
      </div>
    </section>
  )
}
