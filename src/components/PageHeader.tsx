
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  backgroundImage?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  className,
  backgroundImage 
}: PageHeaderProps) => {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `linear-gradient(to right, rgba(91, 44, 141, 0.85), rgba(61, 90, 128, 0.85)), url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } 
    : {};
    
  return (
    <div 
      className={cn("page-header", className)}
      style={bgStyle}
    >
      <div className="container-sm text-center">
        <h1 className="page-title">{title}</h1>
        {subtitle && (
          <p className="text-white/90 mt-4 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
