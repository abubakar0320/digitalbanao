"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Websites", href: "/websites" },
  { name: "Software", href: "/software" },
  { name: "Apps", href: "/apps" },
  { name: "Solutions", href: "/business-solutions" },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add a slight shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100' : 'bg-white border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group py-2">
              <img src="/logo-cropped.jpg" alt="Digital Banao" className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-6 space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" 
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* WhatsApp Button Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20Digital%20Banao%20se%20apne%20project%20ke%20baare%20mein%20discuss%20karna%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-6">
              <Link
                href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20Digital%20Banao%20se%20apne%20project%20ke%20baare%20mein%20discuss%20karna%20hai."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={22} />
                <span>WhatsApp Us Instantly</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
