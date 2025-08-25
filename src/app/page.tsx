"use client";

import { posts } from "@/data/posts";
import PostCard from "@/components/post-card";
import Link from "next/link";
import FeaturedArticle from "@/components/featured-article";
import { Mail, ArrowRight } from "lucide-react"; // Import Lucide icons

const Page = () => {
  const news = posts.filter((post) => !post.isFeatured);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-24">
        <FeaturedArticle />

        {/* Latest Stories Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Latest Stories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Dive into our most recent articles for fresh insights and
              perspectives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post, index) => (
              <div
                key={post.id}
                className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-2xl"
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-300"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative">
          <div className="relative bg-white border border-gray-200 rounded-3xl p-6 md:p-12 shadow-2xl overflow-hidden">
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Stay in the Loop
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Get our latest articles, exclusive content, and insights
                  delivered straight to your inbox. No spam, we promise.
                </p>
              </div>

              <form className="mt-8 flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-gray-500 text-sm mt-4">
                Join our community of readers.
              </p>
            </div>
            {/* Background elements for modern look */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
