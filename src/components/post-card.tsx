import Link from "next/link";
import { IPost } from "@/data/posts";

export default function PostCard({ post }: { post: IPost }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
      {/* Post Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />

      {/* Post Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">{post.title}</h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

        {/* Author + Date */}
        <div className="flex items-center mb-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover mr-3"
          />
          <div className="text-sm text-gray-600">
            <p className="font-medium">{post.author.name}</p>
            <p className="text-xs text-gray-400">{post.date}</p>
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={`/news/${post.id}`}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
