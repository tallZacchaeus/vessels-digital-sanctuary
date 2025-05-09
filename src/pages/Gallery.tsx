
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GalleryImage, { GalleryImageProps } from "@/components/gallery/GalleryImage";
import ImageModal from "@/components/gallery/ImageModal";
import { cn } from "@/lib/utils";

const galleryImages: GalleryImageProps[] = [
  {
    id: 1,
    title: "Sunday Worship Service",
    imageUrl: "https://source.unsplash.com/photo-1466442929976-97f336a657be",
    category: "Worship",
    date: "June 2025"
  },
  {
    id: 2,
    title: "Youth Conference",
    imageUrl: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "Youth",
    date: "May 2025"
  },
  {
    id: 3,
    title: "Community Outreach",
    imageUrl: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
    category: "Outreach",
    date: "April 2025"
  },
  {
    id: 4,
    title: "Baptism Service",
    imageUrl: "https://source.unsplash.com/photo-1551038247-3d9af20df552",
    category: "Worship",
    date: "March 2025"
  },
  {
    id: 5,
    title: "Children's Ministry",
    imageUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Children",
    date: "February 2025"
  },
  {
    id: 6,
    title: "Prayer Gathering",
    imageUrl: "https://source.unsplash.com/photo-1466442929976-97f336a657be",
    category: "Prayer",
    date: "January 2025"
  },
  {
    id: 7,
    title: "Worship Team",
    imageUrl: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "Worship",
    date: "December 2024"
  },
  {
    id: 8,
    title: "Christmas Service",
    imageUrl: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
    category: "Holiday",
    date: "December 2024"
  },
  {
    id: 9,
    title: "Men's Retreat",
    imageUrl: "https://source.unsplash.com/photo-1551038247-3d9af20df552",
    category: "Events",
    date: "November 2024"
  },
  {
    id: 10,
    title: "Women's Conference",
    imageUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Events",
    date: "October 2024"
  },
  {
    id: 11,
    title: "Fall Festival",
    imageUrl: "https://source.unsplash.com/photo-1466442929976-97f336a657be",
    category: "Events",
    date: "September 2024"
  },
  {
    id: 12,
    title: "Mission Trip",
    imageUrl: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "Missions",
    date: "August 2024"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImageProps | null>(null);
  
  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  // Filter images based on active category
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Handle image click to open modal
  const handleImageClick = (image: GalleryImageProps) => {
    setSelectedImage(image);
  };
  
  // Navigate to previous image in modal
  const handlePrevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };
  
  // Navigate to next image in modal
  const handleNextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  return (
    <Layout>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Browse through the memories and moments from our ministry events, services, and community outreach."
        backgroundImage="https://source.unsplash.com/photo-1605810230434-7631ac76ec81"
      />
      
      <section className="section-padding">
        <div className="container-lg">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all text-sm font-medium",
                  activeCategory === category
                    ? "bg-ministry-purple text-white"
                    : "bg-muted hover:bg-muted/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryImage 
                key={image.id} 
                image={image} 
                onClick={() => handleImageClick(image)}
                aspectRatio={index % 3 === 0 ? "landscape" : index % 5 === 0 ? "portrait" : "square"}
              />
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No images found in this category.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-ministry-purple dark:text-ministry-gold hover:underline"
              >
                View all images
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox modal */}
      <ImageModal 
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </Layout>
  );
};

export default Gallery;
