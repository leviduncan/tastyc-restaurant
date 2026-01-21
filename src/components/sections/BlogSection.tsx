import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    category: "Recipe",
    title: "How to Make Perfect Grilled Salmon at Home",
    author: "Chef Marcus",
    date: "Jan 15, 2025",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    category: "Tips",
    title: "5 Secrets to Choosing the Freshest Seafood",
    author: "Chef Isabella",
    date: "Jan 10, 2025",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
    category: "Event",
    title: "Wine Pairing Evening: A Night to Remember",
    author: "Sommelier David",
    date: "Jan 5, 2025",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="tastyc-section tastyc-light-section">
      <div className="tastyc-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="tastyc-subheading mb-4">Latest News</p>
          <h2 className="tastyc-heading text-tastyc-dark">
            Blog & Recipes
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs uppercase tracking-wider px-3 py-1">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-tastyc-dark group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            View More Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
