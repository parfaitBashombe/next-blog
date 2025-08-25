"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const links = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
  { name: "Create Post", href: "/create" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-blue-600">
          InsightPress
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-700 hover:text-blue-600 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/signin"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black opacity-30"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in menu */}
        <div className="absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg px-6 py-8 flex flex-col space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 text-lg hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/signin"
            className="mt-auto bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
