
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, UserCircle, Share2 } from "lucide-react";
import RatingSystem from "@/components/RatingSystem";

// Separate the data fetching logic
const getBlogPost = (slug: string) => {
  const allPosts = [
    {
      title: "The Future of Design Systems in 2024",
      content: `Design systems are evolving rapidly as digital products become more complex and teams grow larger. In 2024, we're seeing a shift towards more intelligent, adaptive design systems that can scale with organizations while maintaining consistency and efficiency.

      One of the key trends is the integration of AI-powered components that can adapt to user behavior and context. This means design systems are becoming more dynamic and responsive to user needs, while still maintaining the core principles of consistency and usability.
      
      Another significant development is the emphasis on accessibility and inclusive design. Modern design systems are being built with accessibility in mind from the ground up, ensuring that digital products can be used by everyone, regardless of their abilities.`,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      author: "Sarah Johnson",
      date: "22 Jan 2024",
      categories: ["Design Systems", "Technology"],
      slug: "future-of-design-systems"
    },
    {
      title: "Conversations with Our Favorite London Studio",
      content: `In a recent sit-down with one of London's fastest-growing brand and product design studios, we uncovered fascinating insights into how they've leveraged our platform to double their revenue in just one year.

      The studio, known for its innovative approach to digital product design, shared their journey of transformation and the key strategies that led to their success. From implementing efficient workflow processes to adopting cutting-edge design tools, their story is both inspiring and instructive.
      
      What stood out most was their emphasis on collaboration and client communication. By using our platform's features to streamline their design review process, they were able to significantly reduce feedback cycles and improve client satisfaction.`,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      categories: ["Design", "Research"],
      slug: "london-studio-conversation"
    },
    {
      title: "A Relentless Pursuit of Perfection in Product Design",
      content: `The journey of product design is one of constant refinement and attention to detail. Through years of experience, I've come to appreciate the stark contrast between well-crafted products and those that fall short of excellence.

      This observation extends beyond mere aesthetics – it's about the entire user experience, from the initial interaction to long-term usage. The difference often lies in the dedication of the teams behind these products and their commitment to quality.
      
      In this article, we'll explore the principles that guide exceptional product design and the methodologies that separate outstanding products from mediocre ones.`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      categories: ["Product", "Design"],
      slug: "perfection-in-product-design"
    },
    {
      title: "How to Run a Successful Business With Your Partner",
      content: `Starting a business with your spouse or significant other can be both rewarding and challenging. This comprehensive guide explores the essential elements of maintaining a healthy business partnership while preserving your personal relationship.

      We'll discuss practical strategies for setting boundaries, defining roles, and managing conflicts effectively. Drawing from real-world examples and expert advice, this article provides valuable insights for couples considering or currently running a business together.
      
      Learn how successful couples navigate the complexities of mixing business with pleasure, and discover key principles for maintaining both professional and personal harmony.`,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      categories: ["Business", "Research"],
      slug: "business-with-partner"
    },
    {
      title: "The Impact of AI on Modern Software Development",
      content: `Artificial Intelligence is revolutionizing the software development landscape, introducing new tools and methodologies that are changing how we build and maintain applications.

      From automated code generation to intelligent testing systems, AI is enhancing developer productivity and code quality. This article explores the latest trends and tools that are shaping the future of software development.
      
      We'll examine real-world applications of AI in development workflows and discuss how teams can effectively integrate these technologies into their existing processes.`,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      author: "Alex Chen",
      date: "17 Jan 2024",
      categories: ["Technology", "AI"],
      slug: "ai-impact-software-development"
    }
  ];

  return allPosts.find((post) => post.slug === slug);
};

// Author card component
const AuthorCard = ({ author, date }: { author: string; date: string }) => (
  <Card className="p-6 lg:sticky lg:top-8 bg-gray-900 border-gray-800 text-white">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-gray-800 mb-4 overflow-hidden">
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
          alt={author}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg mb-2">{author}</h3>
      <p className="text-sm text-gray-400 mb-4">Student Contributor</p>
      <div className="w-full h-px bg-gray-800 my-4" />
      <div className="text-sm text-gray-400">
        <div className="flex items-center justify-center mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <p>Published on</p>
        </div>
        <p className="font-medium text-gray-300">{date}</p>
      </div>
      <Button className="w-full mt-4" variant="outline">
        Follow Author
      </Button>
    </div>
  </Card>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Post not found</h1>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Navbar />
      
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </Link>
          </div>

          {/* Main content and author info container */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1">
              <div className="flex gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="text-xs font-medium px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-bold mb-8 text-white">{post.title}</h1>

              <div className="flex items-center mb-6 text-sm text-gray-400">
                <div className="flex items-center mr-4">
                  <UserCircle className="w-4 h-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>5 min read</span>
                </div>
              </div>

              <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="prose prose-lg lg:prose-xl max-w-none prose-invert">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
                
                {/* Add more generated content for length */}
                <h2 className="text-2xl font-bold mt-10 mb-6 text-white">Exploring the Technical Details</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  As student developers, it's crucial to understand not just the theoretical aspects but also the practical implementations. The code examples below demonstrate how conceptual knowledge translates into real-world applications.
                </p>
                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                  <code className="text-sm text-gray-300">
{`// Example implementation
function implementAlgorithm(data) {
  const results = [];
  // Process the data
  for (let i = 0; i < data.length; i++) {
    results.push(processItem(data[i]));
  }
  return results;
}

// Helper function
function processItem(item) {
  return {
    ...item,
    processed: true,
    timestamp: Date.now()
  };
}`}
                  </code>
                </pre>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The efficiency of algorithms and data structures is a fundamental concept in computer science. As students develop their skills, understanding time and space complexity becomes increasingly important for building scalable applications.
                </p>
                <h2 className="text-2xl font-bold mt-10 mb-6 text-white">Future Implications</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Looking forward, the concepts discussed in this article have significant implications for emerging technologies. Students positioning themselves at the forefront of these developments will have opportunities to contribute to groundbreaking advancements in the field.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Collaboration across disciplines is becoming increasingly important as technology touches every aspect of our lives. Computer science students should seek opportunities to work with peers from other fields, bringing their technical expertise to diverse challenges.
                </p>
              </div>
              
              {/* Rating system */}
              <RatingSystem postId={slug || ""} />
              
              {/* Share buttons */}
              <div className="flex items-center justify-center mt-10 mb-10 border-t border-gray-800 pt-6">
                <span className="text-gray-400 mr-4">Share this article:</span>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Author sidebar */}
            <div className="lg:w-80">
              <AuthorCard author={post.author} date={post.date} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
