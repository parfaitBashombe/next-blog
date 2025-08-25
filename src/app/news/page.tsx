"use client";

import { useState } from "react";
import { posts } from "@/data/posts";
import PostCard from "@/components/post-card";

export default function NewsPage() {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">News</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-lg px-4 py-2 mb-6"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
