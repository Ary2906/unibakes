export default function SocialCircle() {
  const images = [
    { id: 1, name: "Cookie 1" },
    { id: 2, name: "Brownie 1" },
    { id: 3, name: "Cake 1" },
    { id: 4, name: "Cookie 2" },
    { id: 5, name: "Brownie 2" },
    { id: 6, name: "Cake 2" },
    { id: 7, name: "Cookie 3" },
    { id: 8, name: "Brownie 3" },
    { id: 9, name: "Cake 3" },
  ]

  return (
    <section className="social-circle-section">
      <h2>The Unibakes Social Circle</h2>
      <p className="social-subtitle">Follow our delicious journey</p>

      <div className="instagram-grid">
        {images.map((image) => (
          <div key={image.id} className="instagram-item">
            <div className="instagram-image"></div>
          </div>
        ))}
      </div>

      <button className="direct-link-btn">Direct link button</button>
    </section>
  )
}
