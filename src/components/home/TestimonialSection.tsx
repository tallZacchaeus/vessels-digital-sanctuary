
import { useState } from "react";

interface TestimonialProps {
  id: number;
  name: string;
  role?: string;
  quote: string;
  imageUrl?: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Church Member",
    quote: "God's Vessels has been a spiritual home to me for over 5 years. The genuine community and powerful teachings have transformed my life in ways I never thought possible.",
    imageUrl: "https://source.unsplash.com/random/?woman,portrait",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Youth Group Leader",
    quote: "The youth program at God's Vessels has given me the opportunity to mentor young people and see them grow in their faith. It's incredibly rewarding to be part of this ministry.",
    imageUrl: "https://source.unsplash.com/random/?man,portrait",
  },
  {
    id: 3,
    name: "Jennifer Wilson",
    role: "Community Outreach Volunteer",
    quote: "Through the community outreach programs, I've witnessed how this ministry truly lives out its mission to serve others. The impact we've made together has been life-changing.",
    imageUrl: "https://source.unsplash.com/random/?woman,face",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-ministry-purple/10 to-ministry-blue/10">
      <div className="container-sm">
        <h2 className="section-title">Testimonials</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-xl bg-white dark:bg-ministry-dark/50 shadow-lg p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-ministry-gold opacity-20 text-7xl font-serif">"</div>

            {/* Testimonial Content */}
            <blockquote className="text-lg md:text-xl relative z-10 mb-6 text-center">
              {currentTestimonial.quote}
            </blockquote>

            {/* Testimonial Author */}
            <div className="flex flex-col items-center">
              {currentTestimonial.imageUrl && (
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-ministry-gold">
                  <img
                    src={currentTestimonial.imageUrl}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="text-center">
                <p className="font-semibold text-ministry-purple dark:text-ministry-gold">
                  {currentTestimonial.name}
                </p>
                {currentTestimonial.role && (
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.role}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-ministry-gold scale-125" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
