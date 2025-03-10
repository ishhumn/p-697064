
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Cpu, BookText, BookOpen } from "lucide-react";

const FEATURED_POST = {
  title: "The Future of Design Systems in 2024",
  excerpt: "Explore how design systems are evolving and shaping the future of digital product development. From atomic design to AI-powered components.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  author: "Sarah Johnson",
  date: "22 Jan 2024",
  categories: ["Design Systems", "Technology"],
  slug: "future-of-design-systems"
};

const BLOG_POSTS = [
  {
    title: "Conversations with Our Favorite London Studio",
    excerpt: "We sat down with London's fast-growing brand and product design studio to find out how they've used our platform to 2x their revenue.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    categories: ["Design", "Research"],
    slug: "london-studio-conversation"
  },
  {
    title: "A Relentless Pursuit of Perfection in Product Design",
    excerpt: "I began to notice that there was a sharp contrast between well-made, crafted products and poorly made ones, and an even greater distinction between the people who made them.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    categories: ["Product", "Design"],
    slug: "perfection-in-product-design"
  },
  {
    title: "How to Run a Successful Business With Your Partner",
    excerpt: "Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal of faith.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    categories: ["Business", "Research"],
    slug: "business-with-partner"
  },
  {
    title: "The Impact of AI on Modern Software Development",
    excerpt: "Artificial Intelligence is revolutionizing how we build software. Learn about the latest trends and tools shaping the future of development.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    author: "Alex Chen",
    date: "17 Jan 2024",
    categories: ["Technology", "AI"],
    slug: "ai-impact-software-development"
  },
  {
    title: "Creating Sustainable Design Practices",
    excerpt: "Discover how design teams are incorporating sustainability into their digital products and processes for a better future.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    author: "Emma Wilson",
    date: "16 Jan 2024",
    categories: ["Design", "Sustainability"],
    slug: "sustainable-design-practices"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium">Tech insights by students, for students</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Where Student Developers Share Their Journey
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              Join our community of student programmers, developers, and tech enthusiasts.
              Learn, contribute, and grow together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                Start Reading
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-300">
                Contribute
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <div className="bg-blue-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Code className="text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Programming</h3>
            <p className="text-gray-400 text-sm">Coding tutorials, algorithms, and programming languages.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <div className="bg-blue-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Cpu className="text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Tech</h3>
            <p className="text-gray-400 text-sm">Latest in technology, hardware, and industry trends.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <div className="bg-blue-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Courses</h3>
            <p className="text-gray-400 text-sm">Reviews and guides for computer science courses.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <div className="bg-blue-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <BookText className="text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Resources</h3>
            <p className="text-gray-400 text-sm">Learning materials, tools, and student resources.</p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-24">
        {/* Featured Post */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-left text-white">Featured Story</h2>
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-w-16 aspect-h-9 md:aspect-h-full">
                <img
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  {FEATURED_POST.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs font-medium px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">{FEATURED_POST.title}</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{FEATURED_POST.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-8">
                  <span className="font-medium text-gray-400">{FEATURED_POST.author}</span>
                  <span className="mx-2 text-gray-600">•</span>
                  <span className="text-gray-400">{FEATURED_POST.date}</span>
                </div>
                <Button size="lg" className="self-start">Read More</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Posts */}
        <div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Stories</h2>
            <Button variant="outline" size="lg" className="border-gray-700 text-gray-300">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
