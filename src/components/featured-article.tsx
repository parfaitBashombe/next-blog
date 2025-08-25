import Link from "next/link";

import { posts } from "@/data/posts";

const Page = () => {
  const featured = posts?.find((post) => post.isFeatured);

  if (!featured) return null;

  return (
    <section className="relative group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium mb-4">
                ✨ Featured Article
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
                {featured.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                {featured.excerpt}
              </p>
              <Link
                href={`/news/${featured.id}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Read Full Story
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Page;
