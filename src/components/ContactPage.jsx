import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    orderDetails: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '', orderDetails: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Let's Connect!</h1>
          <p>We are an artisanal confectionery that specializes in Ahilyanagar's most curated help and awes your communities.</p>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Contact Us!</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <textarea 
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <select 
                  name="orderDetails"
                  value={formData.orderDetails}
                  onChange={handleChange}
                  className="order-select"
                >
                  <option value="">Order Details</option>
                  <option value="custom-cake">Custom Cake</option>
                  <option value="wedding">Wedding Cakes</option>
                  <option value="birthday">Birthday Cakes</option>
                  <option value="corporate">Corporate Orders</option>
                  <option value="other">Other</option>
                </select>
                <button type="submit" className="contact-btn">
                  {submitted ? 'Sent!' : 'Contact'}
                </button>
              </form>
            </div>

            {/* Right Side Info */}
            <div className="contact-info-section">
              {/* Contact Details */}
              <div className="info-box">
                <div className="info-item">
                  <span className="icon">📞</span>
                  <span className="text">9423242188</span>
                </div>
                <div className="info-item">
                  <span className="icon">📍</span>
                  <span className="text">Ahilyanagar</span>
                </div>
                <div className="info-item">
                  <span className="icon">📧</span>
                  <span className="text">hellounibake@gmail.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media-box">
                <h3>Social Media!</h3>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="maps-section">
          <h2>Google Maps</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.0326934545097!2d75.86433!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3961cb8f1234567%3A0x1234567890abcdef!2sAhilyanagar!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
