import Link from "next/link";
import { posts } from "@/data/posts";
import { ArrowRight, Calendar, User } from "lucide-react";

const FeaturedArticle = () => {
  const featured = posts?.find((post) => post.isFeatured);

  if (!featured) return null;

  return (
    <section className="w-full">
      <Link
        href={`/news/${featured.id}`}
        className="group block overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                Featured Article
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
                {featured.title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{featured.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{featured.date}</span>
                </div>
              </div>
              <div className="flex items-center text-blue-600 font-semibold">
                Read Full Story
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedArticle;
