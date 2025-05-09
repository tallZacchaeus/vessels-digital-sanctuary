
const MissionSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div>
            <div className="bg-white dark:bg-ministry-dark/50 p-8 rounded-xl shadow-md relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-2 bg-ministry-purple"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-ministry-purple dark:text-ministry-gold">Our Mission</h3>
              <p className="text-lg mb-4">
                God's Vessels International Ministry exists to glorify God by making disciples through gospel-centered worship, teaching, community, and service.
              </p>
              <p className="mb-0">
                We seek to transform lives by sharing the love of Christ, empowering believers to grow in their faith, and extending compassion to our local community and throughout the world.
              </p>
            </div>
          </div>
          
          {/* Vision */}
          <div>
            <div className="bg-white dark:bg-ministry-dark/50 p-8 rounded-xl shadow-md relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-2 bg-ministry-gold"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-ministry-purple dark:text-ministry-gold">Our Vision</h3>
              <p className="text-lg mb-4">
                To be a thriving, Christ-centered community that impacts our city and beyond with the transforming power of the gospel.
              </p>
              <p className="mb-0">
                We envision a diverse church family growing in faith and number, equipping disciples to serve in their spheres of influence, and partnering with other ministries to advance God's kingdom globally.
              </p>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ministry-purple/10 dark:bg-ministry-purple/20 mb-4">
                <span className="text-2xl font-bold text-ministry-purple dark:text-ministry-gold">01</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Biblical Teaching</h4>
              <p className="text-muted-foreground">
                We are committed to the faithful teaching of God's Word, which guides all our beliefs and practices.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ministry-purple/10 dark:bg-ministry-purple/20 mb-4">
                <span className="text-2xl font-bold text-ministry-purple dark:text-ministry-gold">02</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Authentic Worship</h4>
              <p className="text-muted-foreground">
                We believe in heartfelt, Spirit-led worship that honors God and inspires believers.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ministry-purple/10 dark:bg-ministry-purple/20 mb-4">
                <span className="text-2xl font-bold text-ministry-purple dark:text-ministry-gold">03</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Loving Community</h4>
              <p className="text-muted-foreground">
                We foster genuine relationships through care, support, and accountability within our church family.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ministry-purple/10 dark:bg-ministry-purple/20 mb-4">
                <span className="text-2xl font-bold text-ministry-purple dark:text-ministry-gold">04</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Compassionate Service</h4>
              <p className="text-muted-foreground">
                We serve others sacrificially, demonstrating Christ's love through practical care and generosity.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ministry-purple/10 dark:bg-ministry-purple/20 mb-4">
                <span className="text-2xl font-bold text-ministry-purple dark:text-ministry-gold">05</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Global Missions</h4>
              <p className="text-muted-foreground">
                We are dedicated to sharing the gospel around the world through partnerships and outreach initiatives.
              </p>
            </div>
            
            {/* Value 6 */}
            <div className="bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ministry-purple/10 dark:bg-ministry-purple/20 mb-4">
                <span className="text-2xl font-bold text-ministry-purple dark:text-ministry-gold">06</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Prayer & Faith</h4>
              <p className="text-muted-foreground">
                We value persistent prayer and living by faith as essential elements of our spiritual journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
