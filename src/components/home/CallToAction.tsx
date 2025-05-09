
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(91, 44, 141, 0.9), rgba(61, 90, 128, 0.9)), url('https://source.unsplash.com/photo-1493397212122-2b85dda8106b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="container-sm relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Our Community of Faith
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Be part of God's Vessels International Ministry and experience spiritual
          growth, community, and purpose in your faith journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link
            to="/events"
            className="btn-outline text-white border-white hover:bg-white/10"
          >
            Attend an Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
