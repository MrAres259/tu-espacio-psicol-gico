import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blogData";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-serif font-bold text-foreground">Artículo no encontrado</h1>
          <Link to="/blog" className="text-accent hover:underline mt-4 inline-block">Volver al blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(l => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
            {items.map((item, j) => <li key={j}>{item.replace("- ", "")}</li>)}
          </ul>
        );
      }
      if (block.match(/^\d\./)) {
        const items = block.split("\n").filter(l => l.match(/^\d\./));
        return (
          <ol key={i} className="list-decimal pl-6 space-y-2 text-foreground/80 mb-4">
            {items.map((item, j) => {
              const text = item.replace(/^\d+\.\s*/, "");
              // Handle bold
              const parts = text.split(/\*\*(.*?)\*\*/);
              return (
                <li key={j}>
                  {parts.map((part, k) => k % 2 === 1 ? <strong key={k}>{part}</strong> : part)}
                </li>
              );
            })}
          </ol>
        );
      }
      return <p key={i} className="text-foreground/80 leading-relaxed mb-4">{block}</p>;
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Volver al blog
          </Link>

          <div className="animate-fade-in-up">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
            </div>

            {/* Image placeholder */}
            <div className="aspect-video rounded-2xl bg-secondary flex items-center justify-center mb-10">
              <span className="text-muted-foreground text-sm">Imagen del artículo</span>
            </div>

            <div className="prose-warm">{renderContent(post.content)}</div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
