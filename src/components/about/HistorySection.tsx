
const HistorySection = () => {
  const timelineEvents = [
    {
      year: "2005",
      title: "Ministry Founded",
      description: "God's Vessels International Ministry was established by Pastor John Davis with a small congregation of 25 members."
    },
    {
      year: "2007",
      title: "First Church Building",
      description: "Acquired our first permanent location, allowing for expanded services and community programs."
    },
    {
      year: "2010",
      title: "Mission Trips Begin",
      description: "Launched our international mission program with our first trip to provide aid and share the gospel in Central America."
    },
    {
      year: "2013",
      title: "Youth Center Opening",
      description: "Dedicated a new youth facility to provide a safe and nurturing environment for young people in our community."
    },
    {
      year: "2018",
      title: "Community Outreach Expansion",
      description: "Established a food pantry and counseling center to better serve the needs of our local community."
    },
    {
      year: "2022",
      title: "New Sanctuary",
      description: "Completed construction on our current sanctuary, accommodating our growing congregation and expanded ministries."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-lg">
        <h2 className="section-title">Our History</h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-lg">
          For nearly two decades, God's Vessels International Ministry has been on a journey of growth and service. 
          Here are some key milestones in our history.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ministry-purple/20 dark:bg-ministry-purple/30 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Desktop layout - alternating sides */}
                <div className="hidden md:flex items-center">
                  {/* Content left side (even indexes) */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'invisible'}`}>
                    {index % 2 === 0 && (
                      <div className="bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md inline-block">
                        <h3 className="text-xl font-bold text-ministry-purple dark:text-ministry-gold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Year indicator in the middle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ministry-purple dark:bg-ministry-gold text-white flex items-center justify-center font-bold shadow-md z-10">
                      {event.year}
                    </div>
                  </div>

                  {/* Content right side (odd indexes) */}
                  <div className={`w-1/2 ${index % 2 === 1 ? 'pl-12' : 'invisible'}`}>
                    {index % 2 === 1 && (
                      <div className="bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md inline-block">
                        <h3 className="text-xl font-bold text-ministry-purple dark:text-ministry-gold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile layout - stacked */}
                <div className="md:hidden flex">
                  <div className="w-16 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-ministry-purple dark:bg-ministry-gold text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {event.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-ministry-dark/50 p-6 rounded-lg shadow-md ml-4">
                    <h3 className="text-lg font-bold text-ministry-purple dark:text-ministry-gold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
