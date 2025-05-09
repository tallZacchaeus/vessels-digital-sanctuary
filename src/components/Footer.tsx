
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, YoutubeIcon, MapPinIcon, MailIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ministry-purple text-white">
      <div className="container-lg py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">God's Vessels</h3>
            <p className="mb-4 text-ministry-light/90">
              Transforming lives through faith, hope, and love. Join us on our mission to spread God's word globally.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-ministry-gold transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-ministry-gold transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-ministry-gold transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-ministry-gold transition-colors">About Us</Link></li>
              <li><Link to="/sermons" className="hover:text-ministry-gold transition-colors">Sermons</Link></li>
              <li><Link to="/events" className="hover:text-ministry-gold transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-ministry-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-ministry-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPinIcon size={18} className="text-ministry-gold" />
                <span>123 Ministry Street, City, State 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon size={18} className="text-ministry-gold" />
                <a href="mailto:info@godsvesselsministry.org" className="hover:text-ministry-gold transition-colors">
                  info@godsvesselsministry.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon size={18} className="text-ministry-gold" />
                <a href="tel:+1234567890" className="hover:text-ministry-gold transition-colors">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Service Times</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Sunday Service:</span>
                <p>10:00 AM - 12:00 PM</p>
              </li>
              <li>
                <span className="font-semibold">Wednesday Bible Study:</span>
                <p>7:00 PM - 8:30 PM</p>
              </li>
              <li>
                <span className="font-semibold">Friday Prayer Meeting:</span>
                <p>6:30 PM - 8:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-ministry-dark py-4">
        <div className="container-lg text-center text-sm">
          <p>© {currentYear} God's Vessels International Ministry. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
