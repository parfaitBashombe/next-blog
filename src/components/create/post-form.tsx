"use client";

import { useState } from "react";
import { Sparkles, Send } from "lucide-react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100 sticky top-8 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a catchy title"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            placeholder="Write your amazing post content here..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2
            bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold
            px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition
            shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Send className="w-5 h-5" />
          Publish Post
        </button>
      </form>

      {content && (
        <div className="mt-8 pt-6 border-t border-gray-200 border-dashed">
          <div className="flex items-center gap-2 mb-4 text-blue-600">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xl font-bold">Live Preview</h2>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {title || "Post Title Preview"}
            </h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
