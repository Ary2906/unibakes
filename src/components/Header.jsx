import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Unibakes</Link>
      </div>
      <nav>
        <Link to="/">HOME</Link>
        <a href="#about">ABOUT US</a>
        <a href="#journey">OUR JOURNEY</a>
        <a href="#collections">CURATED COLLECTIONS</a>
        <a href="#cakes">CAKES</a>
        <Link to="/contact">CONTACT</Link>
        <button className="order-btn">Order Today</button>
      </nav>
    </header>
  )
}
