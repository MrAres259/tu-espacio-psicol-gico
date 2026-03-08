import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blogData";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-40 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">Blog</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Artículos sobre Bienestar
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Recursos y reflexiones para tu crecimiento personal y bienestar emocional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <Card
                key={post.id}
                className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {post.image ? (
                  <img src={post.image} alt={post.title} className="aspect-[16/10] w-full object-cover" />
                ) : (
                  <div className="aspect-[16/10] bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Imagen del artículo</span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-primary transition-colors"
                  >
                    Leer más <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
