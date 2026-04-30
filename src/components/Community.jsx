export default function Community() {
  const testimonials = [
    {
      id: 1,
      stars: "⭐⭐⭐⭐⭐",
      text: "Unibakes created the perfect cupcake for our daughter's birthday party. Stunning and delicious!",
      name: "Sarah Mitchell"
    },
    {
      id: 2,
      stars: "⭐⭐⭐⭐⭐",
      text: "Unibakes started the perfect event and we still can't stop talking about the amazing flavor!",
      name: "Event Tips"
    },
    {
      id: 3,
      stars: "⭐⭐⭐⭐⭐",
      text: "Unibakes created the perfect gift for my friend. Stunning and delicious! 5 Stars!",
      name: "Emma Rodriguez"
    }
  ]

  return (
    <section className="community-section">
      <h2>Sweet Words from Our Community</h2>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="stars">{testimonial.stars}</div>
            <p>"{testimonial.text}"</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
