
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FilterProps {
  onSearch: (value: string) => void;
  onFilterChange: (type: string, value: string) => void;
  searchValue: string;
  speakers: string[];
  topics: string[];
  activeFilters: {
    speaker: string;
    topic: string;
    sort: string;
  };
}

const SermonFilters = ({
  onSearch,
  onFilterChange,
  searchValue,
  speakers,
  topics,
  activeFilters,
}: FilterProps) => {
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);

  // Update local state when prop changes
  useEffect(() => {
    setLocalSearchValue(searchValue);
  }, [searchValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchValue);
  };

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "a-z", label: "A-Z" },
    { value: "z-a", label: "Z-A" },
  ];

  return (
    <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6">
      {/* Search */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search sermons..."
            value={localSearchValue}
            onChange={(e) => setLocalSearchValue(e.target.value)}
            className="w-full px-4 py-3 pl-10 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-md text-sm"
          >
            Search
          </button>
        </div>
      </form>

      {/* Filters */}
      <div className="space-y-5">
        {/* Speaker Filter */}
        <div>
          <h3 className="font-medium mb-2">Filter by Speaker</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange("speaker", "")}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-all",
                activeFilters.speaker === ""
                  ? "bg-ministry-purple text-white"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              )}
            >
              All
            </button>
            {speakers.map((speaker) => (
              <button
                key={speaker}
                onClick={() => onFilterChange("speaker", speaker)}
                className={cn(
                  "px-3 py-1 text-sm rounded-full transition-all",
                  activeFilters.speaker === speaker
                    ? "bg-ministry-purple text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                )}
              >
                {speaker}
              </button>
            ))}
          </div>
        </div>

        {/* Topic Filter */}
        <div>
          <h3 className="font-medium mb-2">Filter by Topic</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange("topic", "")}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-all",
                activeFilters.topic === ""
                  ? "bg-ministry-purple text-white"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              )}
            >
              All
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => onFilterChange("topic", topic)}
                className={cn(
                  "px-3 py-1 text-sm rounded-full transition-all",
                  activeFilters.topic === topic
                    ? "bg-ministry-purple text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                )}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div>
          <h3 className="font-medium mb-2">Sort By</h3>
          <select
            value={activeFilters.sort}
            onChange={(e) => onFilterChange("sort", e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-border bg-background"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SermonFilters;
