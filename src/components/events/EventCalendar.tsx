
import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EventProps } from "./EventCard";
import { cn } from "@/lib/utils";

interface EventCalendarProps {
  events: EventProps[];
  onSelectDate: (date: Date) => void;
}

const EventCalendar = ({ events, onSelectDate }: EventCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Convert event dates to Date objects for comparison
  const eventDates = events.map(event => {
    try {
      return parseISO(new Date(event.date).toISOString().split('T')[0]);
    } catch {
      // Fallback for differently formatted dates
      return new Date(event.date);
    }
  });

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
    onSelectDate(day);
  };

  // Generate days for the current month view
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get day names for header
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Check if a day has events
  const dayHasEvent = (day: Date) => {
    return eventDates.some(eventDate => isSameDay(eventDate, day));
  };

  return (
    <div className="bg-white dark:bg-ministry-dark/50 rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">{format(currentMonth, "MMMM yyyy")}</h2>
        <div className="flex space-x-2">
          <button 
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {weekDays.map(day => (
          <div key={day} className="text-center text-sm font-medium py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Add empty cells for start of month offset */}
        {Array.from({ length: monthStart.getDay() }).map((_, i) => (
          <div key={`empty-start-${i}`} className="h-10"></div>
        ))}
        
        {/* Calendar days */}
        {days.map((day) => (
          <button
            key={day.toString()}
            onClick={() => handleDateClick(day)}
            className={cn(
              "h-10 rounded-full flex items-center justify-center text-sm",
              isSameDay(day, selectedDate) && "bg-ministry-purple text-white",
              !isSameDay(day, selectedDate) && dayHasEvent(day) && 
                "font-medium border border-ministry-purple dark:border-ministry-gold",
              !isSameMonth(day, currentMonth) && "text-muted-foreground opacity-50",
              "hover:bg-muted transition-colors"
            )}
          >
            {format(day, "d")}
          </button>
        ))}
        
        {/* Add empty cells for end of month offset */}
        {Array.from({ length: 6 - monthEnd.getDay() }).map((_, i) => (
          <div key={`empty-end-${i}`} className="h-10"></div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
