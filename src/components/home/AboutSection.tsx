
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const values = [
    "Faith and spiritual growth",
    "Community outreach",
    "Biblical teachings",
    "Global missions",
    "Worship and praise",
    "Family and relationships"
  ];

  return (
    <section className="section-padding bg-ministry-light dark:bg-ministry-dark/30">
      <div className="container-lg">
        <h2 className="section-title">About Our Ministry</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://source.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Church building" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="hidden lg:block absolute -right-8 -bottom-8 w-40 h-40 bg-ministry-purple opacity-20 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute -left-8 -top-8 w-24 h-24 bg-ministry-gold opacity-20 rounded-full -z-10"></div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ministry-purple dark:text-ministry-gold">
              Welcome to God's Vessels International Ministry
            </h3>
            
            <p className="text-lg mb-4">
              Founded in 2005, God's Vessels International Ministry is dedicated to spreading the gospel 
              through inspirational worship, community outreach, and global missions.
            </p>
            
            <p className="mb-6">
              Our vision is to be a beacon of light in the community, bringing hope and spiritual 
              guidance to all who seek it, while nurturing a loving, supportive faith community.
            </p>
            
            <div className="mb-8">
              <h4 className="font-montserrat font-semibold text-lg mb-3">Our Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-ministry-blue dark:text-ministry-gold" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/about" className="btn-primary inline-flex">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
