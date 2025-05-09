
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SermonCard, { SermonProps } from "@/components/sermons/SermonCard";
import SermonFilters from "@/components/sermons/SermonFilters";

const sermonsData: SermonProps[] = [
  {
    id: 1,
    title: "Finding Peace in Troubled Times",
    speaker: "Pastor John Davis",
    date: "June 14, 2025",
    topic: "Faith",
    description: "In this powerful sermon, Pastor John explores how to maintain peace and faith during life's most challenging moments.",
    imageUrl: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "The Power of Faith",
    speaker: "Pastor Mary Johnson",
    date: "June 7, 2025",
    topic: "Faith",
    description: "Pastor Mary shares inspiring stories of faith that moved mountains and how we can apply those principles to our daily lives.",
    imageUrl: "https://source.unsplash.com/photo-1466442929976-97f336a657be",
    audioUrl: "https://example.com/sermon-audio.mp3"
  },
  {
    id: 3,
    title: "Walking in God's Light",
    speaker: "Pastor John Davis",
    date: "May 31, 2025",
    topic: "Spiritual Growth",
    description: "Learn how to live a life illuminated by God's guidance and wisdom in this enlightening message.",
    imageUrl: "https://source.unsplash.com/photo-1551038247-3d9af20df552"
  },
  {
    id: 4,
    title: "Strengthening Family Bonds",
    speaker: "Pastor Mary Johnson",
    date: "May 24, 2025",
    topic: "Family",
    description: "Pastor Mary Johnson discusses biblical principles for nurturing strong, loving family relationships.",
    imageUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "The Path to Forgiveness",
    speaker: "Guest Speaker Michael Smith",
    date: "May 17, 2025",
    topic: "Healing",
    description: "Guest speaker Michael Smith shares his personal journey of forgiveness and the freedom it brings.",
    imageUrl: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
    audioUrl: "https://example.com/sermon-audio2.mp3"
  },
  {
    id: 6,
    title: "Living a Life of Purpose",
    speaker: "Pastor John Davis",
    date: "May 10, 2025",
    topic: "Purpose",
    description: "Discover God's unique purpose for your life and how to fulfill it in this motivational message.",
    imageUrl: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const Sermons = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSermons, setFilteredSermons] = useState<SermonProps[]>(sermonsData);
  const [activeFilters, setActiveFilters] = useState({
    speaker: "",
    topic: "",
    sort: "newest"
  });

  // Extract unique speakers and topics for filters
  const speakers = Array.from(new Set(sermonsData.map(sermon => sermon.speaker)));
  const topics = Array.from(new Set(sermonsData.map(sermon => sermon.topic).filter(Boolean))) as string[];

  // Apply filters and search whenever dependencies change
  useEffect(() => {
    let results = [...sermonsData];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(sermon => 
        sermon.title.toLowerCase().includes(query) || 
        sermon.speaker.toLowerCase().includes(query) ||
        (sermon.description && sermon.description.toLowerCase().includes(query))
      );
    }

    // Apply speaker filter
    if (activeFilters.speaker) {
      results = results.filter(sermon => sermon.speaker === activeFilters.speaker);
    }

    // Apply topic filter
    if (activeFilters.topic) {
      results = results.filter(sermon => sermon.topic === activeFilters.topic);
    }

    // Apply sorting
    switch (activeFilters.sort) {
      case "oldest":
        // For demo purposes, assuming newer sermons have higher IDs
        results.sort((a, b) => a.id - b.id);
        break;
      case "a-z":
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "newest":
      default:
        // For demo purposes, assuming newer sermons have higher IDs
        results.sort((a, b) => b.id - a.id);
    }

    setFilteredSermons(results);
  }, [searchQuery, activeFilters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (type: string, value: string) => {
    setActiveFilters(prev => ({ ...prev, [type]: value }));
  };

  return (
    <Layout>
      <PageHeader 
        title="Sermons" 
        subtitle="Explore our collection of sermons that inspire, teach, and encourage spiritual growth."
        backgroundImage="https://source.unsplash.com/photo-1466442929976-97f336a657be"
      />

      <section className="section-padding">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <SermonFilters 
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                searchValue={searchQuery}
                speakers={speakers}
                topics={topics}
                activeFilters={activeFilters}
              />
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold">
                  {filteredSermons.length} {filteredSermons.length === 1 ? 'Sermon' : 'Sermons'} {activeFilters.speaker && `by ${activeFilters.speaker}`} {activeFilters.topic && `on ${activeFilters.topic}`}
                </h2>
              </div>
              
              {filteredSermons.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg mb-4">No sermons match your search criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilters({ speaker: "", topic: "", sort: "newest" });
                    }}
                    className="btn-outline"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredSermons.map((sermon) => (
                    <SermonCard key={sermon.id} sermon={sermon} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
