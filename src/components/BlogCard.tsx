
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  categories: string[];
  slug: string;
}

const BlogCard = ({ title, excerpt, image, author, date, categories, slug }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="group">
      <article className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-800">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            {categories.map((category) => (
              <span
                key={category}
                className="text-xs font-medium px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 text-white">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="text-gray-400">{author}</span>
            <span className="mx-2 text-gray-600">•</span>
            <span className="text-gray-400">{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
