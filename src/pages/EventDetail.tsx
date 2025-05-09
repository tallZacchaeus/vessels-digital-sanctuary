
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Calendar, Clock, MapPin, Share, ArrowLeft } from "lucide-react";
import EventRegistrationForm from "@/components/events/EventRegistrationForm";
import { EventProps } from "@/components/events/EventCard";

const eventsData: EventProps[] = [
  {
    id: 1,
    title: "Prayer & Worship Night",
    date: "July 15, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "Join us for a powerful evening of prayer, worship, and spiritual renewal. All are welcome to this special gathering focused on deepening our connection with God through music and prayer.",
    imageUrl: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
    featured: true
  },
  {
    id: 2,
    title: "Youth Conference",
    date: "July 22, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Fellowship Hall",
    description: "A three-day conference for young adults focusing on faith, leadership, and community service. Special guest speakers will share insights on living boldly for Christ in today's world.",
    imageUrl: "https://source.unsplash.com/photo-1487958449943-2429e8be8625"
  },
];

// Extended event data with more details
const eventDetails: Record<number, any> = {
  1: {
    organizer: "Worship Ministry",
    contact: "worship@godsvessels.org",
    schedule: [
      { time: "7:00 PM", activity: "Welcome & Opening Prayer" },
      { time: "7:15 PM", activity: "Praise & Worship" },
      { time: "7:45 PM", activity: "Scripture Reading & Reflection" },
      { time: "8:00 PM", activity: "Prayer Stations" },
      { time: "8:45 PM", activity: "Closing Worship" }
    ],
    additionalInfo: "Please bring your Bible and a notebook. Refreshments will be provided afterward in the fellowship hall."
  },
  2: {
    organizer: "Youth Ministry",
    contact: "youth@godsvessels.org",
    schedule: [
      { time: "10:00 AM", activity: "Check-in & Registration" },
      { time: "10:30 AM", activity: "Opening Session: 'Living Bold'" },
      { time: "11:30 AM", activity: "Small Group Discussions" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Workshop Sessions" },
      { time: "3:00 PM", activity: "Q&A Panel" },
      { time: "4:00 PM", activity: "Closing Remarks" }
    ],
    additionalInfo: "Lunch will be provided. Please register in advance so we can prepare materials for everyone."
  }
};

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = parseInt(id || "0");
  const event = eventsData.find(e => e.id === eventId);
  const details = eventDetails[eventId] || {};
  
  if (!event) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-sm text-center">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <p className="mb-6">The event you're looking for could not be found.</p>
            <Link to="/events" className="btn-primary">
              Back to Events
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `Join us for ${event.title} at God's Vessels International Ministry`,
        url: window.location.href
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Layout>
      {/* Header with background image */}
      <div
        className="relative pt-20 pb-24 px-4"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(91, 44, 141, 0.85), rgba(61, 90, 128, 0.85)), url(${event.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-sm text-center text-white">
          <Link 
            to="/events" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Events</span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h1>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-ministry-gold" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-ministry-gold" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-ministry-gold" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <button 
            onClick={handleShare}
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors"
          >
            <Share size={16} />
            <span>Share Event</span>
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event details */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                
                <p className="mb-8 text-lg">{event.description}</p>
                
                {/* Extended description */}
                <div className="prose dark:prose-invert max-w-none mb-8">
                  <p>Join us for a special event focused on spiritual growth and community fellowship. Whether you're a long-time member or new to our ministry, this gathering offers an opportunity to deepen your faith and connect with others.</p>
                  
                  {details.additionalInfo && (
                    <div className="bg-muted/50 p-4 rounded-md my-6">
                      <h4 className="font-semibold mb-2">Additional Information:</h4>
                      <p className="text-muted-foreground">{details.additionalInfo}</p>
                    </div>
                  )}
                </div>
                
                {/* Schedule */}
                {details.schedule && (
                  <>
                    <h3 className="text-xl font-bold mb-4">Event Schedule</h3>
                    <div className="mb-8">
                      <div className="border-l border-ministry-purple/30 dark:border-ministry-gold/30 pl-4 space-y-4">
                        {details.schedule.map((item: any, index: number) => (
                          <div key={index} className="relative">
                            {/* Timeline dot */}
                            <div className="absolute w-3 h-3 rounded-full bg-ministry-purple dark:bg-ministry-gold -left-[22px] top-1.5"></div>
                            <p className="font-semibold">{item.time}</p>
                            <p className="text-muted-foreground">{item.activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                {/* Organizer */}
                {details.organizer && (
                  <>
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div>
                      <p><strong>Organized by:</strong> {details.organizer}</p>
                      {details.contact && (
                        <p><strong>Contact:</strong> <a href={`mailto:${details.contact}`} className="text-ministry-purple dark:text-ministry-gold hover:underline">{details.contact}</a></p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Registration form */}
            <div className="lg:col-span-1">
              <EventRegistrationForm event={event} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Related events */}
      <section className="section-padding bg-muted/50">
        <div className="container-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Other Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eventsData
              .filter(e => e.id !== eventId)
              .slice(0, 3)
              .map(relatedEvent => (
                <Link key={relatedEvent.id} to={`/events/${relatedEvent.id}`}>
                  <div className="bg-white dark:bg-ministry-dark/50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={relatedEvent.imageUrl} 
                        alt={relatedEvent.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{relatedEvent.title}</h3>
                      <p className="text-sm text-muted-foreground">{relatedEvent.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
