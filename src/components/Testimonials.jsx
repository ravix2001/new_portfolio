import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
    const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tech Lead at Innovation Corp",
      content:
        "Outstanding Java developer with deep expertise in AI/ML. Delivered our microservices platform ahead of schedule with exceptional quality.",
      rating: 5,
      image: "https://ext.same-assets.com/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO at DataFlow Systems",
      content:
        "Exceptional problem-solving skills and innovative approach to NLP solutions. The chatbot system exceeded our expectations significantly.",
      rating: 5,
      image: "https://ext.same-assets.com/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager at AI Solutions",
      content:
        "Reliable, professional, and technically excellent. The ML classification system achieved remarkable accuracy and performance.",
      rating: 5,
      image: "https://ext.same-assets.com/avatar-3.jpg",
    },
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="section-padding bg-white dark:bg-gray-800"
      >
        <div className="container-custom">
          <h2 className="text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            What Clients Say
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="card-dark animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={`star-${testimonial.id}-${i}`}
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-400 mb-2" />
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
