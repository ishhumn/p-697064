
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PROGRAMMING_POSTS = [
  {
    title: "Getting Started with React and TypeScript in 2024",
    excerpt: "A comprehensive guide to setting up a modern React project with TypeScript, including best practices and common pitfalls to avoid.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
    author: "Alex Chen",
    date: "25 Jan 2024",
    categories: ["React", "TypeScript"],
    slug: "react-typescript-2024"
  },
  {
    title: "Understanding Data Structures for Competitive Programming",
    excerpt: "Learn about essential data structures like trees, graphs, and hash tables that will help you solve complex algorithmic problems.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    author: "Priya Sharma",
    date: "22 Jan 2024",
    categories: ["Algorithms", "Data Structures"],
    slug: "data-structures-competitive-programming"
  },
  {
    title: "Python vs. JavaScript: Which Should Students Learn First?",
    excerpt: "An analysis of the pros and cons of starting your programming journey with Python or JavaScript, with insights from CS professors.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    author: "Marcus Johnson",
    date: "20 Jan 2024",
    categories: ["Python", "JavaScript"],
    slug: "python-vs-javascript"
  },
  {
    title: "Building Your First Mobile App with React Native",
    excerpt: "A step-by-step tutorial for students looking to create their first cross-platform mobile application using React Native.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    author: "Sophie Lee",
    date: "18 Jan 2024",
    categories: ["React Native", "Mobile Development"],
    slug: "first-react-native-app"
  },
  {
    title: "Version Control for Beginners: Git and GitHub",
    excerpt: "Master the basics of Git and GitHub to collaborate on code projects, manage versions, and build a portfolio that impresses recruiters.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    author: "David Wilson",
    date: "15 Jan 2024",
    categories: ["Git", "GitHub"],
    slug: "git-github-beginners"
  },
  {
    title: "Functional Programming Concepts Every Student Should Know",
    excerpt: "Explore the core principles of functional programming and how they can make your code more maintainable and less prone to bugs.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    author: "Emma Rodriguez",
    date: "12 Jan 2024",
    categories: ["Functional Programming", "Computer Science"],
    slug: "functional-programming-concepts"
  }
];

const Programming = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium">Code, algorithms & programming languages</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Programming Resources for Student Developers
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              Tutorials, guides, and insights to help you master programming concepts and languages.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-24">
        <div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Programming Articles</h2>
            <Button variant="outline" size="lg" className="border-gray-700 text-gray-300">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMMING_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programming;
