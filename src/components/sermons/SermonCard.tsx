
import { Play, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

export interface SermonProps {
  id: number;
  title: string;
  speaker: string;
  date: string;
  topic?: string;
  description?: string;
  videoUrl?: string;
  audioUrl?: string;
  imageUrl: string;
}

const SermonCard = ({ sermon }: { sermon: SermonProps }) => {
  const {
    id,
    title,
    speaker,
    date,
    topic,
    description,
    videoUrl,
    imageUrl,
  } = sermon;

  const hasMedia = videoUrl || sermon.audioUrl;

  return (
    <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md overflow-hidden card-hover">
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-ministry-gold flex items-center justify-center shadow-lg transform transition-transform hover:scale-110"
              aria-label={`Play ${title}`}
            >
              <Play size={24} className="text-white" />
            </a>
          </div>
        )}
        {/* Topic badge */}
        {topic && (
          <div className="absolute top-4 right-4 bg-ministry-purple/90 dark:bg-ministry-gold/90 text-white dark:text-ministry-dark px-2 py-1 rounded-md text-xs font-medium">
            {topic}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{speaker}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>

        {description && (
          <p className="text-muted-foreground line-clamp-3 mb-4">{description}</p>
        )}

        <div className="flex justify-between items-center">
          {hasMedia ? (
            <div className="text-sm text-ministry-purple dark:text-ministry-gold font-medium">
              {videoUrl ? "Video Available" : "Audio Available"}
            </div>
          ) : (
            <div></div>
          )}
          <Link
            to={`/sermons/${id}`}
            className="btn-outline inline-flex py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SermonCard;
