
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface EventProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  featured?: boolean;
}

const EventCard = ({ event, compact = false }: { event: EventProps; compact?: boolean }) => {
  const { id, title, date, time, location, description, imageUrl, featured } = event;

  if (compact) {
    return (
      <div 
        className={cn(
          "rounded-xl overflow-hidden flex flex-col card-hover",
          featured 
            ? "bg-gradient-to-br from-ministry-purple to-ministry-blue text-white" 
            : "bg-white dark:bg-ministry-dark/50 shadow-md"
        )}
      >
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 line-clamp-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm mb-1">
            <Calendar 
              size={14} 
              className={cn(featured ? "text-ministry-gold" : "text-ministry-purple dark:text-ministry-gold")}
            />
            <span className={cn(featured ? "text-white/90" : "text-muted-foreground")}>
              {date}
            </span>
          </div>
          <Link 
            to={`/events/${id}`}
            className={cn(
              "text-sm font-medium hover:underline",
              featured ? "text-ministry-gold" : "text-ministry-purple dark:text-ministry-gold"
            )}
          >
            Details →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden shadow-md flex flex-col card-hover",
        featured 
          ? "bg-gradient-to-br from-ministry-purple to-ministry-blue text-white" 
          : "bg-white dark:bg-ministry-dark/50"
      )}
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Calendar 
              size={16} 
              className={cn(featured ? "text-ministry-gold" : "text-ministry-purple dark:text-ministry-gold")}
            />
            <span className={cn(featured ? "text-white/90" : "text-muted-foreground")}>
              {date}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock 
              size={16}
              className={cn(featured ? "text-ministry-gold" : "text-ministry-purple dark:text-ministry-gold")}
            />
            <span className={cn(featured ? "text-white/90" : "text-muted-foreground")}>
              {time}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin 
              size={16}
              className={cn(featured ? "text-ministry-gold" : "text-ministry-purple dark:text-ministry-gold")}
            />
            <span className={cn(featured ? "text-white/90" : "text-muted-foreground")}>
              {location}
            </span>
          </div>
        </div>
        
        <p className={cn("mb-6 flex-grow", featured ? "text-white/90" : "text-muted-foreground")}>
          {description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <Link 
            to={`/events/${id}`}
            className={cn(
              featured 
                ? "bg-white text-ministry-purple hover:bg-white/90" 
                : "bg-ministry-purple text-white hover:bg-ministry-purple/90 dark:bg-ministry-gold dark:text-ministry-dark dark:hover:bg-ministry-gold/90",
              "px-4 py-2 rounded-md font-medium transition-colors"
            )}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
