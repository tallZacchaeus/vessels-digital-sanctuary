
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EventCard, { EventProps } from "@/components/events/EventCard";
import EventCalendar from "@/components/events/EventCalendar";
import { format, isSameDay, parseISO } from "date-fns";

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
  {
    id: 3,
    title: "Community Outreach",
    date: "August 5, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "City Park",
    description: "Help us serve our community through food distribution, cleanup, and fellowship activities. This is a great opportunity to put faith into action and make a difference in our neighborhood.",
    imageUrl: "https://source.unsplash.com/photo-1466442929976-97f336a657be"
  },
  {
    id: 4,
    title: "Bible Study Workshop",
    date: "August 12, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "Church Library",
    description: "Learn effective methods for studying scripture and deepening your understanding of God's word. This interactive workshop will provide practical tools for personal Bible study.",
    imageUrl: "https://source.unsplash.com/photo-1551038247-3d9af20df552"
  },
  {
    id: 5,
    title: "Family Fun Day",
    date: "August 19, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Church Grounds",
    description: "A day of games, food, and fellowship for the whole family. Activities will include inflatable bounce houses, face painting, barbecue lunch, and more!",
    imageUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 6,
    title: "Women's Retreat",
    date: "September 8-10, 2025",
    time: "All Day",
    location: "Mountain View Retreat Center",
    description: "A weekend getaway for women to rest, reflect, and renew their spiritual lives. The retreat will feature worship, small group discussions, and free time for personal reflection.",
    imageUrl: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b"
  }
];

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>(eventsData);
  const [viewMode, setViewMode] = useState<"all" | "calendar">("all");
  
  // Convert event dates to Date objects for comparison
  const convertEventDates = (events: EventProps[]) => {
    return events.map(event => {
      return {
        ...event,
        dateObj: new Date(event.date.split('-')[0])
      };
    });
  };
  
  const eventsWithDates = convertEventDates(eventsData);
  
  // Filter events by selected date
  useEffect(() => {
    if (viewMode === "calendar") {
      const filtered = eventsWithDates.filter(event => {
        try {
          // First attempt to parse as ISO string
          const eventDate = parseISO(event.date);
          return isSameDay(eventDate, selectedDate);
        } catch {
          // If that fails, try to parse from our format
          const eventDateStr = new Date(event.date.split('-')[0]).toDateString();
          const selectedDateStr = selectedDate.toDateString();
          return eventDateStr === selectedDateStr;
        }
      });
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(eventsData);
    }
  }, [selectedDate, viewMode]);

  return (
    <Layout>
      <PageHeader 
        title="Events" 
        subtitle="Join us for worship services, community outreach, and special events throughout the year."
        backgroundImage="https://source.unsplash.com/photo-1551038247-3d9af20df552"
      />
      
      <section className="section-padding">
        <div className="container-lg">
          {/* View toggle */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold">Upcoming Events</h2>
            <div className="flex bg-muted rounded-lg">
              <button 
                onClick={() => setViewMode("all")} 
                className={`px-4 py-2 text-sm font-medium rounded-lg ${viewMode === "all" 
                  ? "bg-ministry-purple text-white" 
                  : "text-foreground hover:bg-muted/80"
                }`}
              >
                All Events
              </button>
              <button 
                onClick={() => setViewMode("calendar")} 
                className={`px-4 py-2 text-sm font-medium rounded-lg ${viewMode === "calendar" 
                  ? "bg-ministry-purple text-white" 
                  : "text-foreground hover:bg-muted/80"
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>
          
          {viewMode === "calendar" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calendar */}
              <div>
                <EventCalendar 
                  events={eventsData} 
                  onSelectDate={setSelectedDate}
                />
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  Selected Date: {format(selectedDate, "MMMM d, yyyy")}
                </div>
              </div>
              
              {/* Events for selected date */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-4">
                  Events on {format(selectedDate, "MMMM d, yyyy")}
                </h3>
                
                {filteredEvents.length > 0 ? (
                  <div className="space-y-6">
                    {filteredEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-8 text-center">
                    <p className="text-muted-foreground mb-4">No events scheduled for this date.</p>
                    <button 
                      onClick={() => setViewMode("all")}
                      className="text-ministry-purple dark:text-ministry-gold hover:underline"
                    >
                      View all upcoming events
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventsData.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      <section className="section-padding bg-muted/50">
        <div className="container-sm text-center">
          <h2 className="text-3xl font-bold mb-4">Host Your Event With Us</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our facilities are available for weddings, conferences, and community events. 
            Contact us to learn more about our spaces and availability.
          </p>
          <a href="/contact" className="btn-primary inline-flex">
            Contact for Bookings
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
