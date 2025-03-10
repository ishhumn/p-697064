
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface RatingSystemProps {
  postId: string;
}

const RatingSystem = ({ postId }: RatingSystemProps) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState(false);
  const { toast } = useToast();

  const handleRating = (selectedRating: number) => {
    if (hasRated) return;
    
    setRating(selectedRating);
    setHasRated(true);
    
    // Here you would typically send this rating to your backend
    console.log(`Post ${postId} rated: ${selectedRating}`);
    
    toast({
      title: "Thanks for your feedback!",
      description: `You rated this article ${selectedRating} out of 5 stars.`,
    });
  };

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => {
        const starValue = index + 1;
        const isFilled = (hoveredRating || rating || 0) >= starValue;
        
        return (
          <button
            key={index}
            type="button"
            className={`focus:outline-none transition-colors ${
              hasRated ? 'cursor-default' : 'cursor-pointer'
            }`}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => !hasRated && setHoveredRating(starValue)}
            onMouseLeave={() => !hasRated && setHoveredRating(null)}
            disabled={hasRated}
          >
            <Star
              className={`h-8 w-8 ${
                isFilled
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-400'
              }`}
            />
          </button>
        );
      });
  };

  return (
    <div className="border border-gray-800 rounded-xl p-6 bg-gray-900 my-8">
      <h3 className="text-xl font-bold mb-4 text-center text-white">How would you rate this article?</h3>
      <div className="flex justify-center space-x-2 mb-4">
        {renderStars()}
      </div>
      {hasRated ? (
        <p className="text-center text-green-400 font-medium">
          Thank you for your feedback!
        </p>
      ) : (
        <p className="text-center text-gray-400 text-sm">
          Click on a star to rate this article
        </p>
      )}
    </div>
  );
};

export default RatingSystem;
