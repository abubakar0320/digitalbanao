import Link from "next/link";
import { ArrowRight, Globe, Code2, Smartphone, CheckCircle2, MessageCircle, MousePointerClick, ClipboardList, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-16 pb-16 lg:pt-24 lg:pb-28 overflow-hidden border-b border-gray-200/50">
        {/* Subtle Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 flex justify-center">
          <div className="w-[800px] h-[500px] bg-gradient-to-r from-blue-400/20 to-emerald-400/20 blur-[100px] rounded-full mix-blend-multiply opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold text-sm mb-6 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Transform Your Business Digitally
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Apne Business Ko <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
                  Digital Banao.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-xl">
                High-performance Websites, Custom Business Software, aur Modern Mobile Apps — tailored exclusively for your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/business-solutions"
                  className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Explore Services
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20Digital%20Banao%20se%20apne%20project%20ke%20baare%20mein%20discuss%20karna%20hai."
                  target="_blank"
                  className="inline-flex justify-center items-center gap-2 bg-white border border-gray-200 hover:border-emerald-500 text-slate-800 hover:text-emerald-600 px-8 py-3.5 rounded-xl font-bold transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <MessageCircle size={20} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
                <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500"/> Custom Built</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500"/> Mobile Ready</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500"/> SEO Optimized</div>
              </div>
            </div>
            
            {/* Right Content / Real Visuals Collage */}
            <div className="hidden lg:block relative h-[450px] w-full">
              
              {/* Decorative background glow behind mockups */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 blur-3xl rounded-full -z-10"></div>

              {/* Main Image (Jamia Sher-e-Rabbani) */}
              <div className="absolute top-8 right-0 w-[80%] bg-white rounded-xl shadow-2xl border-4 border-white overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 z-10">
                <img src="https://api.microlink.io/?url=https://jamiashererabbani.com&screenshot=true&meta=false&embed=screenshot.url" alt="Web Portal" className="w-full h-auto object-cover" />
              </div>

              {/* Overlapping Image Bottom Left (MobileHub Pro) */}
              <div className="absolute -bottom-4 left-4 w-[60%] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 z-20">
                <img src="https://api.microlink.io/?url=https://mobilehub-pro.vercel.app&screenshot=true&meta=false&embed=screenshot.url" alt="E-Commerce App" className="w-full h-auto object-cover" />
              </div>

              {/* Overlapping Image Top Left (DiabetFree Pakistan) */}
              <div className="absolute -top-4 left-10 w-[45%] bg-white rounded-xl shadow-xl border-4 border-white overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 z-20">
                <img src="https://api.microlink.io/?url=https://diabetfreepakistan.site&screenshot=true&meta=false&embed=screenshot.url" alt="Healthcare Platform" className="w-full h-auto object-cover" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Do You Want To Build? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">What Do You Want To Build?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Hum aapke business ki zaroorat ke mutabiq best digital solution provide karte hain. Real results ke liye real solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {/* Website Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-32 sm:h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Website Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-8 flex-1 flex flex-col">
                <div className="bg-blue-50 text-blue-700 font-bold text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full w-max mb-2 sm:mb-4 uppercase tracking-wider">Online Presence</div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Website</h3>
                <p className="text-slate-600 text-xs sm:text-base mb-4 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-none">
                  Apne business ke liye professional, fast, aur modern website banwayein jo customers ko attract kare.
                </p>
                <Link href="/websites" className="inline-flex items-center text-blue-600 font-semibold hover:gap-3 gap-2 transition-all mt-auto text-sm sm:text-base">
                  Explore <span className="hidden sm:inline">Websites</span> <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>

            {/* Software Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-32 sm:h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="Software Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-8 flex-1 flex flex-col">
                <div className="bg-indigo-50 text-indigo-700 font-bold text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full w-max mb-2 sm:mb-4 uppercase tracking-wider line-clamp-1">Business Management</div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Software</h3>
                <p className="text-slate-600 text-xs sm:text-base mb-4 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-none">
                  Apne daily business operations, inventory aur sales ko manage karne ke liye custom software.
                </p>
                <Link href="/software" className="inline-flex items-center text-indigo-600 font-semibold hover:gap-3 gap-2 transition-all mt-auto text-sm sm:text-base">
                  Explore <span className="hidden sm:inline">Software</span> <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>

            {/* Mobile App Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col sm:col-span-1 col-span-2 md:col-span-1">
              <div className="h-40 sm:h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                  alt="Mobile App Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-8 flex-1 flex flex-col">
                <div className="bg-emerald-50 text-emerald-700 font-bold text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full w-max mb-2 sm:mb-4 uppercase tracking-wider">Customer Engagement</div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Mobile App</h3>
                <p className="text-slate-600 text-xs sm:text-base mb-4 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-none">
                  Apne customers ki pocket tak pohanchne ke liye Android aur iOS applications banwayein.
                </p>
                <Link href="/apps" className="inline-flex items-center text-emerald-600 font-semibold hover:gap-3 gap-2 transition-all mt-auto text-sm sm:text-base">
                  Explore <span className="hidden sm:inline">Apps</span> <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Not Sure What You Need? (CTA Banner) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Not Sure Which Solution Is Right For You?
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 mb-0 font-medium">
                  Koi problem nahi. Apne business aur requirement ke baare mein humein batayein. Hum aapko suitable digital solution suggest karenge.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <Link
                  href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20apne%20business%20ke%20liye%20digital%20solution%20chahiye,%20guide%20kar%20dein."
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 w-full md:w-auto"
                >
                  <MessageCircle size={24} />
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Business Solutions */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Solutions For Different Businesses</h2>
              <p className="text-lg text-slate-600 font-medium">
                Har business ki needs different hoti hain. Hum aapke business ke according website, software ya mobile app develop karte hain.
              </p>
            </div>
            <Link href="/business-solutions" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:bg-blue-50 px-6 py-3 rounded-full transition-colors whitespace-nowrap">
              Explore All Industries
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {[
              { name: 'Education', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
              { name: 'Retail', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600' },
              { name: 'Restaurant', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600' },
              { name: 'Healthcare', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600' },
              { name: 'Real Estate', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600' },
              { name: 'Small Business', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600' }
            ].map((solution, i) => (
              <div key={i} className="relative h-32 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                <img src={solution.img} alt={solution.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-6">
                  <span className="text-sm sm:text-xl font-bold text-white tracking-wide">{solution.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Recent Work</h2>
            <p className="text-lg text-slate-600 font-medium">Kuch selected projects jo humne success ke sath develop kiye hain.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
            {[
              { 
                title: "Jamia Sher-e-Rabbani", 
                desc: "Website + ERP", 
                tag: "Education",
                domain: "jamiashererabbani.com",
                imgUrl: "https://api.microlink.io/?url=https://jamiashererabbani.com&screenshot=true&meta=false&embed=screenshot.url"
              },
              { 
                title: "MobileHub Pro", 
                desc: "E-Commerce Platform", 
                tag: "E-Commerce",
                domain: "mobilehub-pro.vercel.app",
                imgUrl: "https://api.microlink.io/?url=https://mobilehub-pro.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
              },
              { 
                title: "DiabetFree Pakistan", 
                desc: "Healthcare Platform", 
                tag: "Healthcare",
                domain: "diabetfreepakistan.site",
                imgUrl: "https://api.microlink.io/?url=https://diabetfreepakistan.site&screenshot=true&meta=false&embed=screenshot.url"
              },
              { 
                title: "Personal Portfolio", 
                desc: "Portfolio Website", 
                tag: "Portfolio",
                domain: "iamabubakar.site",
                imgUrl: "https://api.microlink.io/?url=https://iamabubakar.site&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000"
              }
            ].map((project, i) => (
              <div key={i} className="bg-slate-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                {/* Browser Window Frame */}
                <div className="h-24 sm:h-48 w-full flex flex-col bg-white overflow-hidden border-b border-slate-100 relative">
                  <div className="h-5 sm:h-7 w-full bg-slate-100 flex items-center px-2 sm:px-3 gap-1 sm:gap-1.5 shrink-0 border-b border-slate-200/50 absolute top-0 z-10">
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="pt-5 sm:pt-7 w-full h-full">
                    <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="p-3 sm:p-6 flex-1 flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-blue-600 uppercase mb-1 sm:mb-2 block">{project.tag}</span>
                  <h3 className="text-sm sm:text-xl font-bold text-slate-900 mb-1 leading-tight">{project.title}</h3>
                  <a href={`https://${project.domain}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-blue-500 hover:text-blue-700 hover:underline mb-2 block truncate">
                    {project.domain}
                  </a>
                  <p className="text-slate-600 text-xs sm:text-sm mt-auto line-clamp-2 sm:line-clamp-none">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/our-work" className="inline-flex justify-center items-center gap-2 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-8 py-3.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">How We Work</h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              Ek simple aur transparent process. Har step ko real-time mein experience karein.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 justify-center">
            {[
              { 
                step: "01", title: "Choose Service", desc: "Aapko website, software ya app jo chahiye wo select karein.", 
                img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600" 
              },
              { 
                step: "02", title: "Discuss Details", desc: "WhatsApp par requirements aur ideas detail mein discuss karein.", 
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600" 
              },
              { 
                step: "03", title: "Plan & Proposal", desc: "Hum aapko best features, timeline aur pricing ka roadmap dengay.", 
                img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600" 
              },
              { 
                step: "04", title: "Development", desc: "Agreement ke baad humari team project ki coding start karegi.", 
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" 
              },
              { 
                step: "05", title: "Launch", desc: "Testing ke baad aapka final digital solution live ho jayega!", 
                img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600" 
              },
            ].map((s, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col ${i === 4 ? 'col-span-2 lg:col-span-1 lg:col-start-2 w-1/2 mx-auto lg:w-full' : ''}`}
              >
                 <div className="h-28 sm:h-56 relative overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm text-slate-900 font-extrabold px-2 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-lg text-[10px] sm:text-sm tracking-wide">
                      Step {s.step}
                    </div>
                 </div>
                 <div className="p-4 sm:p-8 flex-1 flex flex-col">
                    <h3 className="text-sm sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{s.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-base font-medium leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">{s.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Digital Banao? */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content Grid */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Choose Digital Banao?</h2>
              <p className="text-lg text-slate-600 font-medium mb-12">
                Humara focus sirf code likhna nahi, balke aapke business ke liye ek profitable digital ecosystem banana hai jo actual results de.
              </p>
              
              <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10">
                {[
                  { title: "Simple Process", desc: "No complicated tech jargon. Sirf simple aur clear baat cheet." },
                  { title: "Business Focused", desc: "Sirf design nahi, aapki business growth ko primary focus rakhte hain." },
                  { title: "Custom Solutions", desc: "Har business unique hai, is liye exact requirement ke according solution." },
                  { title: "Direct Connect", desc: "Direct WhatsApp communication with developer, no middlemen." },
                  { title: "Modern Tech", desc: "Latest technologies for lightning fast speed aur security." },
                  { title: "Reliable Support", desc: "Project delivery ke baad 24/7 dedicated maintenance aur support." },
                ].map((reason, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4 group">
                    <div className="shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{reason.title}</h3>
                      <p className="text-slate-600 text-[10px] sm:text-sm leading-snug sm:leading-relaxed font-medium">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Realistic Trust Image with Floating Stats */}
            <div className="order-1 lg:order-2 relative">
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[600px] border-[8px] border-slate-50 transform hover:-translate-y-2 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                    alt="Trust and Professionalism" 
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Stats Card for Reality Vibe */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white flex justify-around items-center">
                     <div className="text-center">
                        <div className="text-4xl font-black text-blue-600 mb-1">100%</div>
                        <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">Custom Built</div>
                     </div>
                     <div className="w-px h-16 bg-slate-200"></div>
                     <div className="text-center">
                        <div className="text-4xl font-black text-emerald-600 mb-1">24/7</div>
                        <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">Direct Support</div>
                     </div>
                  </div>
               </div>
               
               {/* Decorative Background Glow */}
               <div className="absolute -z-10 top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border-4 border-white">
            
            {/* Subtle glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,transparent_70%)] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                Have An Idea? <br/> Let's Build It Together.
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-8 font-medium leading-relaxed">
                Start your digital journey today. Apni requirement WhatsApp par share karein aur seedha developer se apne project par baat shuru karein.
              </p>
              
              <Link
                href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20Digital%20Banao%20se%20project%20discuss%20karna%20hai."
                target="_blank"
                className="inline-flex justify-center items-center gap-3 bg-white text-blue-700 hover:text-blue-800 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle size={24} className="text-emerald-500" />
                Message on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
