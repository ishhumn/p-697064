
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TECH_POSTS = [
  {
    title: "The Rise of AI in Educational Technology",
    excerpt: "How artificial intelligence is transforming the way students learn and educators teach in today's digital classrooms.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    author: "Maya Patel",
    date: "27 Jan 2024",
    categories: ["AI", "EdTech"],
    slug: "ai-educational-technology"
  },
  {
    title: "Understanding Blockchain Beyond Cryptocurrency",
    excerpt: "A student's guide to blockchain technology and its applications in supply chain, healthcare, and more beyond just Bitcoin.",
    image: "https://images.unsplash.com/photo-1639815188546-c43c240de9df",
    author: "Jordan Taylor",
    date: "24 Jan 2024",
    categories: ["Blockchain", "Technology"],
    slug: "blockchain-beyond-crypto"
  },
  {
    title: "Cloud Computing Platforms Compared: AWS vs. Azure vs. GCP",
    excerpt: "A detailed comparison of the top cloud platforms from a student and beginner perspective, with free tier options highlighted.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    author: "Carlos Rodriguez",
    date: "21 Jan 2024",
    categories: ["Cloud Computing", "AWS"],
    slug: "cloud-platforms-compared"
  },
  {
    title: "The Future of Web Development: WebAssembly and WASM",
    excerpt: "Exploring how WebAssembly is changing the landscape of web development and why students should start learning it now.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    author: "Leila Johnson",
    date: "19 Jan 2024",
    categories: ["WebAssembly", "Web Development"],
    slug: "webassembly-future"
  },
  {
    title: "Cybersecurity Fundamentals Every CS Student Should Know",
    excerpt: "Learn the basic principles of cybersecurity, common vulnerabilities, and how to protect your applications from attacks.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    author: "Lucas Martinez",
    date: "17 Jan 2024",
    categories: ["Cybersecurity", "Computer Science"],
    slug: "cybersecurity-fundamentals"
  },
  {
    title: "IoT Projects Perfect for Computer Science Students",
    excerpt: "Discover engaging Internet of Things (IoT) projects that you can build to enhance your portfolio and practical skills.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    author: "Sophia Chen",
    date: "14 Jan 2024",
    categories: ["IoT", "Projects"],
    slug: "iot-student-projects"
  }
];

const Tech = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium">Hardware, AI & emerging technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Technology Insights for the Next Generation
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              Explore the latest trends, hardware innovations, and breakthroughs in technology.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-24">
        <div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Technology Articles</h2>
            <Button variant="outline" size="lg" className="border-gray-700 text-gray-300">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECH_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tech;
