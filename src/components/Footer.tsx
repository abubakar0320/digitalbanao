import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 sm:pt-24 pb-8 sm:pb-10 text-slate-600 relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-16 mb-10 sm:mb-16">
          
          <div className="col-span-3 md:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6 hover:scale-105 transition-transform">
              <img src="/logo-cropped.jpg" alt="Digital Banao" className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply" />
            </Link>
            <p className="text-slate-600 mb-6 sm:mb-8 font-medium leading-relaxed text-xs sm:text-base">
              Apne Business Ko Digital Banao. Custom digital solutions for ambitious brands.
            </p>
            
            <div className="bg-white shadow-sm border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5 sm:mb-1">Abu Bakr Siddique</p>
              <p className="text-[10px] sm:text-xs text-blue-600 font-bold tracking-wide uppercase">Founder & Developer</p>
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                <span className="sr-only">Facebook</span>
                <FacebookIcon />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-all shadow-sm">
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 transition-all shadow-sm">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 tracking-wide">Services</h3>
            <ul className="space-y-2.5 sm:space-y-4">
              <li>
                <Link href="/websites" className="text-xs sm:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all font-medium">Websites</Link>
              </li>
              <li>
                <Link href="/software" className="text-xs sm:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all font-medium">Software</Link>
              </li>
              <li>
                <Link href="/apps" className="text-xs sm:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all font-medium">Mobile Apps</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 tracking-wide">Company</h3>
            <ul className="space-y-2.5 sm:space-y-4">
              <li>
                <Link href="/business-solutions" className="text-xs sm:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all font-medium">Solutions</Link>
              </li>
              <li>
                <Link href="/our-work" className="text-xs sm:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all font-medium">Our Work</Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs sm:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-3 md:col-span-1">
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 tracking-wide">Get In Touch</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="https://wa.me/923097354874" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-slate-600 hover:text-emerald-600 transition-colors group font-medium"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-emerald-200 group-hover:bg-emerald-50 shadow-sm transition-all">
                    <MessageCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-xs sm:text-base">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:abubakr.bgnu@gmail.com" 
                  className="flex items-center gap-2 sm:gap-3 text-slate-600 hover:text-blue-600 transition-colors group font-medium"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 shadow-sm transition-all">
                    <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-xs sm:text-base truncate">abubakr.bgnu@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-6 sm:pt-8 mt-8 sm:mt-12 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-slate-500 font-medium text-xs sm:text-base">
            © {new Date().getFullYear()} Digital Banao. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-sm font-semibold text-slate-500">
            <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
