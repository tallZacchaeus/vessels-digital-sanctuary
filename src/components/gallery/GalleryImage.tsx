
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface GalleryImageProps {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
}

interface Props {
  image: GalleryImageProps;
  onClick: () => void;
  aspectRatio?: "square" | "portrait" | "landscape";
}

const GalleryImage = ({ image, onClick, aspectRatio = "square" }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg shadow-md cursor-pointer card-hover",
        aspectClasses[aspectRatio]
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image.imageUrl}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Overlay with info that appears on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
        <p className="text-white/80 text-sm">{image.date}</p>
      </div>
    </div>
  );
};

export default GalleryImage;
