"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
  { name: "Create Post", href: "/create" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-blue-600 tracking-tight"
          >
            InsightPress
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-600 hover:text-blue-600 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}

            <Link
              href="/signin"
              className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            >
              Sign In
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
            className="mt-auto group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sign In
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
