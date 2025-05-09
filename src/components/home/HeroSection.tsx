
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(42, 37, 75, 0.8), rgba(91, 44, 141, 0.7)), url('https://source.unsplash.com/photo-1605810230434-7631ac76ec81')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="container-sm relative z-10 text-center px-6 sm:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight animate-fade-in">
          Transforming Lives Through Faith
        </h1>
        <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Join God's Vessels International Ministry on a spiritual journey of faith, hope, and love as we spread the gospel worldwide.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/about" className="btn-primary">
            Learn More
          </Link>
          <Link to="/events" className="btn-outline text-white border-white hover:bg-white/10">
            Upcoming Events
          </Link>
        </div>

        {/* Service Times */}
        <div className="mt-16 inline-flex items-center justify-center bg-white/10 backdrop-blur-md rounded-lg px-8 py-4 border border-white/20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <p className="text-white font-semibold">Join Our Sunday Service</p>
            <p className="text-white/90">Every Sunday at 10:00 AM</p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white/80 text-sm mb-2">Scroll Down</span>
          <ArrowRight className="text-white/80 transform rotate-90" size={18} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
