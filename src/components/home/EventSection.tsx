
import { CalendarIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface EventProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const upcomingEvents: EventProps[] = [
  {
    id: 1,
    title: "Prayer & Worship Night",
    date: "July 15, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "Join us for a powerful evening of prayer, worship, and spiritual renewal. All are welcome."
  },
  {
    id: 2,
    title: "Youth Conference",
    date: "July 22-24, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Fellowship Hall",
    description: "A three-day conference for young adults focusing on faith, leadership, and community service."
  },
  {
    id: 3,
    title: "Community Outreach",
    date: "August 5, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "City Park",
    description: "Help us serve our community through food distribution, cleanup, and fellowship activities."
  }
];

const EventCard = ({ event, highlight }: { event: EventProps; highlight?: boolean }) => {
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden shadow-md transition-all duration-300 flex flex-col card-hover",
        highlight 
          ? "bg-gradient-to-br from-ministry-purple to-ministry-blue text-white" 
          : "bg-white dark:bg-ministry-dark/50"
      )}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <CalendarIcon 
            size={16} 
            className={cn(
              highlight ? "text-ministry-gold" : "text-ministry-purple dark:text-ministry-gold"
            )}
          />
          <span className={cn(highlight ? "text-white/90" : "text-muted-foreground")}>
            {event.date}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Clock 
            size={16}
            className={cn(
              highlight ? "text-ministry-gold" : "text-ministry-purple dark:text-ministry-gold"
            )}
          />
          <span className={cn(highlight ? "text-white/90" : "text-muted-foreground")}>
            {event.time}
          </span>
        </div>
        
        <p className={cn("mb-4", highlight ? "text-white/90" : "")}>
          {event.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-4">
          <span className={cn("text-sm", highlight ? "text-white/80" : "text-muted-foreground")}>
            {event.location}
          </span>
          <Link 
            to={`/events/${event.id}`}
            className={cn(
              "font-medium hover:underline",
              highlight ? "text-ministry-gold" : "text-ministry-purple dark:text-ministry-gold"
            )}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const EventSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-lg">
        <h2 className="section-title">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              highlight={index === 0}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/events" className="btn-primary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
