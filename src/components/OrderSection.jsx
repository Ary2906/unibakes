export default function OrderSection() {
  const products = [
    {
      id: 1,
      name: "Signature Brownies",
      description: "Rich, fudgy brownies with premium chocolate",
      price: "$12.00"
    },
    {
      id: 2,
      name: "Double Chocolate Bliss",
      description: "Our signature chocolate creation",
      price: "$15.00"
    },
    {
      id: 3,
      name: "Grandma's Classic Caramel",
      description: "Heritage recipe with modern twist",
      price: "$14.00"
    },
    {
      id: 4,
      name: "Spiced Ginger Spectacular",
      description: "Warm and aromatic with perfect spices",
      price: "$13.00"
    }
  ]

  return (
    <section className="order-section">
      <h2>ORDER YOUR FAVORITES</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image"></div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="card-btn">
              {product.id === 3 ? "Order Now" : "Inquire on WhatsApp"}
            </button>
          </div>
        ))}
      </div>

      <button className="order-favorites-btn">ORDER YOUR FAVORITES</button>
    </section>
  )
}
