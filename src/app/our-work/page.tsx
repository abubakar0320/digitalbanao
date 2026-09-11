"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Layout, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Jamia Sher-e-Rabbani",
    category: "Websites",
    type: "Web Portal & ERP",
    desc: "Complete digital solution for an educational institution.",
    domain: "jamiashererabbani.com",
    imgUrl: "https://api.microlink.io/?url=https://jamiashererabbani.com&screenshot=true&meta=false&embed=screenshot.url"
  },
  {
    title: "MobileHub Pro",
    category: "Websites",
    type: "E-Commerce Platform",
    desc: "Modern e-commerce platform for selling mobile accessories.",
    domain: "mobilehub-pro.vercel.app",
    imgUrl: "https://api.microlink.io/?url=https://mobilehub-pro.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
  },
  {
    title: "DiabetFree Pakistan",
    category: "Websites",
    type: "Healthcare Platform",
    desc: "Health awareness and appointment booking platform.",
    domain: "diabetfreepakistan.site",
    imgUrl: "https://api.microlink.io/?url=https://diabetfreepakistan.site&screenshot=true&meta=false&embed=screenshot.url"
  },
  {
    title: "Personal Portfolio",
    category: "Websites",
    type: "Portfolio Website",
    desc: "Personal portfolio of Abu Bakr Siddique.",
    domain: "iamabubakar.site",
    imgUrl: "https://api.microlink.io/?url=https://iamabubakar.site&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000"
  }
];

const categories = ["All", "Websites", "Software", "Mobile Apps"];

export default function OurWork() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden border-b border-slate-200/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 text-sky-700 font-bold text-sm mb-6 shadow-sm">
                <Layout size={16} />
                Our Portfolio
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                Real Projects. <br/> Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Results.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-xl">
                Humara kaam khud bolta hai. Niche hamare recent projects dekhein jo humne apne clients ke liye develop kiye hain aur unke business ko digital banaya hai.
              </p>
            </div>

            {/* Right Realistic Visual */}
            <div className="relative mt-12 lg:mt-0 hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-sky-500/20 blur-3xl rounded-full -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white transform hover:-translate-y-2 transition-transform duration-700">
                 <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80" alt="Creative portfolio workspace" className="w-full h-auto object-cover" />
                 
                 {/* Floating Glass Box */}
                 <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shadow-sm">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">High Quality</div>
                      <div className="text-xs text-slate-500 font-semibold mt-0.5">Pixel Perfect Design</div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white min-h-[60vh] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  filter === cat 
                    ? "bg-slate-900 text-white shadow-md" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-12">
            {filteredProjects.map((project, i) => (
              <div key={i} className="group flex flex-col h-full">
                
                {/* Mac OS Browser Frame */}
                <div className="rounded-t-xl sm:rounded-t-2xl bg-slate-800 border-x border-t border-slate-700/50 p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2">
                   <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                   <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                   <div className="ml-1 sm:ml-4 bg-slate-700/50 text-slate-400 text-[8px] sm:text-xs px-2 sm:px-4 py-0.5 sm:py-1 rounded-full font-mono truncate max-w-[80px] sm:max-w-[200px]">
                     {project.domain}
                   </div>
                </div>

                {/* Project Screenshot */}
                <div className="h-28 sm:h-80 bg-slate-100 w-full flex items-center justify-center overflow-hidden border-x border-slate-200 relative">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 z-10 pointer-events-none"></div>
                  <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                {/* Project Details */}
                <div className="p-3 sm:p-8 bg-white border border-slate-200 border-t-0 rounded-b-xl sm:rounded-b-2xl shadow-sm group-hover:shadow-xl transition-shadow flex flex-col flex-grow">
                  <span className="text-[9px] sm:text-xs font-bold tracking-wider text-sky-600 uppercase mb-1 sm:mb-3 block line-clamp-1">
                    {project.category} • {project.type}
                  </span>
                  <h3 className="text-sm sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">{project.title}</h3>
                  <a href={`https://${project.domain}`} target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-sm text-slate-500 hover:text-sky-600 hover:underline mb-2 sm:mb-4 inline-block font-medium truncate">
                    {project.domain}
                  </a>
                  <p className="text-slate-600 text-[11px] sm:text-base mb-4 sm:mb-8 flex-grow leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">{project.desc}</p>
                  
                  <Link 
                    href={`https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20aapka%20project%20${encodeURIComponent(project.title)}%20pasand%20aaya.%20Main%20aisi%20hi%20ek%20website%20banwana%20chahta%20hoon.`} 
                    target="_blank"
                    className="inline-flex items-center gap-1 sm:gap-2 text-sky-600 font-bold hover:gap-1.5 sm:hover:gap-3 transition-all mt-auto group/btn text-[10px] sm:text-base"
                  >
                    <span className="hidden sm:inline">Discuss similar project</span>
                    <span className="sm:hidden">Discuss</span>
                    <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-sky-500 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-100 mt-8">
              <p className="text-slate-500 text-lg font-medium">No projects found in this category yet.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
