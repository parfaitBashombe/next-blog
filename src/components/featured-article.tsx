import Link from "next/link";
import { posts } from "@/data/posts";
import { ArrowRight, Calendar, User } from "lucide-react";

const FeaturedArticle = () => {
  const featured = posts?.find((post) => post.isFeatured);

  if (!featured) return null;

  return (
    <section className="relative group w-full">
      <Link href={`/news/${featured.id}`} className="block">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-900">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <div className="max-w-4xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/90 text-white mb-4 shadow">
                Featured Article
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tighter text-shadow-lg">
                {featured.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl leading-relaxed text-shadow">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{featured.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{featured.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedArticle;
