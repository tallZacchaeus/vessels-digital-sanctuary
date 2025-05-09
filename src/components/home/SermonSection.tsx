
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SermonProps {
  id: number;
  title: string;
  speaker: string;
  date: string;
  imageUrl: string;
  videoUrl?: string;
}

const featuredSermons: SermonProps[] = [
  {
    id: 1,
    title: "Finding Peace in Troubled Times",
    speaker: "Pastor John Davis",
    date: "June 14, 2025",
    imageUrl: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "The Power of Faith",
    speaker: "Pastor Mary Johnson",
    date: "June 7, 2025",
    imageUrl: "https://source.unsplash.com/photo-1466442929976-97f336a657be"
  },
  {
    id: 3,
    title: "Walking in God's Light",
    speaker: "Pastor John Davis",
    date: "May 31, 2025",
    imageUrl: "https://source.unsplash.com/photo-1551038247-3d9af20df552"
  }
];

const SermonCard = ({ sermon }: { sermon: SermonProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group rounded-xl overflow-hidden shadow-md bg-white dark:bg-ministry-dark/50 card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail with play button */}
      <div className="relative aspect-video">
        <img 
          src={sermon.imageUrl}
          alt={sermon.title}
          className="w-full h-full object-cover"
        />
        
        {/* Play button overlay */}
        {sermon.videoUrl && (
          <div 
            className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity 
              ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <a 
              href={sermon.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-ministry-gold flex items-center justify-center shadow-lg 
                transform transition-transform group-hover:scale-110"
              aria-label={`Play ${sermon.title}`}
            >
              <Play size={24} className="text-white" />
            </a>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
        <p className="text-muted-foreground mb-4">{sermon.speaker}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{sermon.date}</span>
          <Link 
            to={`/sermons/${sermon.id}`}
            className="text-ministry-purple dark:text-ministry-gold font-medium hover:underline"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SermonSection = () => {
  return (
    <section className="section-padding">
      <div className="container-lg">
        <h2 className="section-title">Latest Sermons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSermons.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/sermons" className="btn-outline">
            View All Sermons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SermonSection;
