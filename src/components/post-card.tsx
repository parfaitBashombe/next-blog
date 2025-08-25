import Link from "next/link";
import { IPost } from "@/data/posts";
import { ArrowRight } from "lucide-react";

export default function PostCard({ post }: { post: IPost }) {
  return (
    <Link
      href={`/news/${post.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
    >
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-gray-600 text-base mb-6 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover mr-4 border-2 border-white shadow"
            />
            <div>
              <p className="font-semibold text-gray-800">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>

          <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
            <span className="text-sm font-medium mr-1">Read More</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
