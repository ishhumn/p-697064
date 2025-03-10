
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const RESOURCES_POSTS = [
  {
    title: "Free Programming Resources Every CS Student Should Bookmark",
    excerpt: "A curated list of essential websites, tools, and platforms offering free resources for computer science students.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    author: "Nina Williams",
    date: "28 Jan 2024",
    categories: ["Resources", "Free Tools"],
    slug: "free-programming-resources"
  },
  {
    title: "Building an Effective Technical Resume for Internships",
    excerpt: "Tips and templates for creating a resume that showcases your technical skills and projects to land that dream internship.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
    author: "Daniel Kim",
    date: "26 Jan 2024",
    categories: ["Career", "Resume"],
    slug: "technical-resume-guide"
  },
  {
    title: "Open Source Projects Perfect for Student Contributors",
    excerpt: "A guide to beginner-friendly open source projects where students can contribute code and gain real-world experience.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    author: "Olivia Martinez",
    date: "23 Jan 2024",
    categories: ["Open Source", "Contribution"],
    slug: "student-open-source-projects"
  },
  {
    title: "Essential Books for Computer Science Students",
    excerpt: "A comprehensive list of must-read books covering programming languages, algorithms, system design, and career development.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    author: "Jason Lee",
    date: "20 Jan 2024",
    categories: ["Books", "Learning"],
    slug: "essential-cs-books"
  },
  {
    title: "How to Prepare for Technical Interviews as a Student",
    excerpt: "Strategies, resources, and practice techniques to help you ace technical interviews at top tech companies.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    author: "Rachel Wong",
    date: "16 Jan 2024",
    categories: ["Interviews", "Career"],
    slug: "tech-interview-prep"
  },
  {
    title: "Creating an Impressive GitHub Portfolio: A Student's Guide",
    excerpt: "Learn how to structure your GitHub profile and showcase projects to attract attention from recruiters and hiring managers.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    author: "Tyler Johnson",
    date: "13 Jan 2024",
    categories: ["GitHub", "Portfolio"],
    slug: "github-portfolio-guide"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-violet-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium">Learning materials & student resources</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Resources to Accelerate Your Learning
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              Discover tools, guides, and materials to enhance your education and career prospects.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-24">
        <div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Resource Articles</h2>
            <Button variant="outline" size="lg" className="border-gray-700 text-gray-300">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCES_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
