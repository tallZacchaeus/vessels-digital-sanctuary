
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Play, Calendar, User, ArrowLeft, Download } from "lucide-react";

const sermonsData = [
  {
    id: "1",
    title: "Finding Peace in Troubled Times",
    speaker: "Pastor John Davis",
    date: "June 14, 2025",
    topic: "Faith",
    scripture: "Philippians 4:6-7",
    description: "In this powerful sermon, Pastor John explores how to maintain peace and faith during life's most challenging moments. Drawing from personal experiences and biblical teachings, he provides practical guidance for finding God's peace amidst chaos.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vitae nisl. Etiam euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vitae nisl. Etiam euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vitae nisl.",
    imageUrl: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    audioUrl: "https://example.com/sermon-audio.mp3",
  },
  {
    id: "2",
    title: "The Power of Faith",
    speaker: "Pastor Mary Johnson",
    date: "June 7, 2025",
    topic: "Faith",
    scripture: "Hebrews 11:1",
    description: "Pastor Mary shares inspiring stories of faith that moved mountains and how we can apply those principles to our daily lives. This sermon explores the biblical foundations of faith and its transformative power in our spiritual journey.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vitae nisl. Etiam euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vitae nisl. Etiam euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vitae nisl.",
    imageUrl: "https://source.unsplash.com/photo-1466442929976-97f336a657be",
    audioUrl: "https://example.com/sermon-audio.mp3",
  },
];

const SermonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const sermon = sermonsData.find(s => s.id === id);
  
  if (!sermon) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-sm text-center">
            <h1 className="text-2xl font-bold mb-4">Sermon Not Found</h1>
            <p className="mb-6">The sermon you're looking for could not be found.</p>
            <Link to="/sermons" className="btn-primary">
              Back to Sermons
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header with background image */}
      <div
        className="relative pt-20 pb-24 px-4"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(91, 44, 141, 0.85), rgba(61, 90, 128, 0.85)), url(${sermon.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-sm text-center text-white">
          <Link 
            to="/sermons" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Sermons</span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{sermon.title}</h1>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <div className="flex items-center gap-2">
              <User size={18} className="text-ministry-gold" />
              <span>{sermon.speaker}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-ministry-gold" />
              <span>{sermon.date}</span>
            </div>
          </div>
          
          {sermon.scripture && (
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md">
              <span className="text-white/80 mr-2">Scripture:</span>
              <span className="font-medium">{sermon.scripture}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main content */}
      <section className="section-padding">
        <div className="container-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main sermon content */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6 md:p-8">
                {/* Description */}
                <h2 className="text-2xl font-bold mb-4">About this Sermon</h2>
                <p className="mb-8 text-lg">{sermon.description}</p>
                
                {/* Full sermon content */}
                <div className="prose dark:prose-invert max-w-none">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vitae nisl. Praesent et ullamcorper urna. Aenean vestibulum mi a ante iaculis convallis. Sed at ultrices magna. Vivamus ornare dolor at odio ultricies pharetra. Cras ut erat urna. Quisque in arcu sagittis, blandit tortor ut, ullamcorper urna.</p>
                  
                  <h3>Finding Peace Through Scripture</h3>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec tincidunt quam. Nulla placerat arcu ac orci aliquet ultrices. Duis eu nulla at lectus dictum semper non non lacus. Vivamus fermentum magna sit amet ex posuere, vel eleifend sapien porta.</p>
                  
                  <blockquote>
                    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."
                    <footer>Philippians 4:6-7</footer>
                  </blockquote>
                  
                  <h3>Practical Application</h3>
                  <p>Sed at ultrices magna. Vivamus ornare dolor at odio ultricies pharetra. Cras ut erat urna. Quisque in arcu sagittis, blandit tortor ut, ullamcorper urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  
                  <ul>
                    <li>Daily prayer and scripture reading</li>
                    <li>Community and fellowship with other believers</li>
                    <li>Serving others as a path to inner peace</li>
                    <li>Trusting God's promises in difficult times</li>
                  </ul>
                  
                  <p>Ut nec tincidunt quam. Nulla placerat arcu ac orci aliquet ultrices. Duis eu nulla at lectus dictum semper non non lacus. Vivamus fermentum magna sit amet ex posuere, vel eleifend sapien porta.</p>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Media Player */}
              {(sermon.videoUrl || sermon.audioUrl) && (
                <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Listen or Watch</h3>
                  
                  {sermon.videoUrl && (
                    <div className="mb-6">
                      <a
                        href={sermon.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-ministry-purple text-white py-3 px-4 rounded-md hover:bg-ministry-purple/90 transition-colors"
                      >
                        <Play size={18} />
                        <span>Watch Video</span>
                      </a>
                    </div>
                  )}
                  
                  {sermon.audioUrl && (
                    <div>
                      <a
                        href={sermon.audioUrl}
                        className="w-full flex items-center justify-center gap-2 bg-ministry-blue text-white py-3 px-4 rounded-md hover:bg-ministry-blue/90 transition-colors"
                      >
                        <Download size={18} />
                        <span>Download Audio</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
              
              {/* Related Sermons */}
              <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Related Sermons</h3>
                <div className="space-y-4">
                  {sermonsData
                    .filter(s => s.id !== id && s.topic === sermon.topic)
                    .map(relatedSermon => (
                      <div key={relatedSermon.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                        <Link 
                          to={`/sermons/${relatedSermon.id}`}
                          className="group"
                        >
                          <h4 className="font-medium group-hover:text-ministry-purple dark:group-hover:text-ministry-gold transition-colors">
                            {relatedSermon.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {relatedSermon.speaker} • {relatedSermon.date}
                          </p>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SermonDetail;
