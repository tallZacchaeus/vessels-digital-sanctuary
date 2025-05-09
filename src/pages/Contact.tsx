
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="Reach out to us with any questions, prayer requests, or to learn more about our ministry."
        backgroundImage="https://source.unsplash.com/photo-1493397212122-2b85dda8106b"
      />
      
      <section className="section-padding">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-ministry-purple/10 dark:bg-ministry-purple/20 p-3 rounded-full">
                      <MapPin className="text-ministry-purple dark:text-ministry-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Ministry Street<br />
                        City, State 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-ministry-purple/10 dark:bg-ministry-purple/20 p-3 rounded-full">
                      <Phone className="text-ministry-purple dark:text-ministry-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+1234567890" className="hover:text-ministry-purple dark:hover:text-ministry-gold transition-colors">
                          (123) 456-7890
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Monday-Friday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-ministry-purple/10 dark:bg-ministry-purple/20 p-3 rounded-full">
                      <Mail className="text-ministry-purple dark:text-ministry-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@godsvesselsministry.org" className="hover:text-ministry-purple dark:hover:text-ministry-gold transition-colors">
                          info@godsvesselsministry.org
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We aim to respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-ministry-purple/10 dark:bg-ministry-purple/20 p-3 rounded-full hover:bg-ministry-purple/20 dark:hover:bg-ministry-purple/30 transition-colors"
                    >
                      <Facebook className="text-ministry-purple dark:text-ministry-gold" size={24} />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-ministry-purple/10 dark:bg-ministry-purple/20 p-3 rounded-full hover:bg-ministry-purple/20 dark:hover:bg-ministry-purple/30 transition-colors"
                    >
                      <Instagram className="text-ministry-purple dark:text-ministry-gold" size={24} />
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-ministry-purple/10 dark:bg-ministry-purple/20 p-3 rounded-full hover:bg-ministry-purple/20 dark:hover:bg-ministry-purple/30 transition-colors"
                    >
                      <Youtube className="text-ministry-purple dark:text-ministry-gold" size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Service Times */}
              <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Service Times</h2>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <div>
                      <span className="font-semibold">Sunday Service</span>
                      <p className="text-sm text-muted-foreground">Main Sanctuary</p>
                    </div>
                    <span>10:00 AM - 12:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <span className="font-semibold">Wednesday Bible Study</span>
                      <p className="text-sm text-muted-foreground">Fellowship Hall</p>
                    </div>
                    <span>7:00 PM - 8:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <span className="font-semibold">Friday Prayer Meeting</span>
                      <p className="text-sm text-muted-foreground">Prayer Room</p>
                    </div>
                    <span>6:30 PM - 8:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="pb-16">
        <div className="container-lg">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-xl overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1622428983553!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Church Location"
              aria-hidden="false" 
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
