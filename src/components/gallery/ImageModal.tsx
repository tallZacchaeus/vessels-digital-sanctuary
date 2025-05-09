
import { X } from "lucide-react";
import { useEffect } from "react";
import { GalleryImageProps } from "./GalleryImage";

interface ImageModalProps {
  image: GalleryImageProps | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal = ({ image, onClose, onPrev, onNext }: ImageModalProps) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-colors"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      {/* Navigation area - left side */}
      <div
        className="absolute left-0 top-0 w-1/5 h-full cursor-w-resize z-10"
        onClick={onPrev}
      ></div>

      {/* Navigation area - right side */}
      <div
        className="absolute right-0 top-0 w-1/5 h-full cursor-e-resize z-10"
        onClick={onNext}
      ></div>

      {/* Image container */}
      <div className="relative max-w-5xl max-h-[90vh] w-full">
        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-auto h-auto max-w-full max-h-[85vh] mx-auto object-contain"
        />

        {/* Caption */}
        <div className="absolute left-0 right-0 bottom-0 bg-black/50 text-white p-4 text-center backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-1">{image.title}</h3>
          <p className="text-sm text-white/80">
            {image.category} • {image.date}
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={onPrev}
          className="bg-black/30 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/50 transition-colors"
          aria-label="Previous image"
        >
          ‹
        </button>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={onNext}
          className="bg-black/30 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/50 transition-colors"
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
