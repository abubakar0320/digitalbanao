import Link from "next/link";
import { MessageCircle, CheckCircle2, Globe, ShoppingCart, GraduationCap, Utensils, User, Sparkles } from "lucide-react";

const websiteTypes = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    title: "Business Website",
    desc: "Apne business ko online showcase karein aur clients attract karein.",
    features: ["Business information", "Services showcase", "Contact & Location", "WhatsApp integration", "Responsive design"],
    msg: "Assalam-o-Alaikum, mujhe Business Website banwani hai."
  },
  {
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80",
    title: "E-Commerce Website",
    desc: "Apne products ko online store par professionally sell karein.",
    features: ["Product catalog", "Shopping Cart", "Order management", "Admin dashboard", "Payment integration"],
    msg: "Assalam-o-Alaikum, mujhe E-Commerce Website banwani hai."
  },
  {
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    title: "School / Academy",
    desc: "Educational institution ki professional online presence.",
    features: ["About institution", "Programs & Courses", "Admissions info", "Faculty details", "Announcements"],
    msg: "Assalam-o-Alaikum, mujhe School/Academy Website banwani hai."
  },
  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    title: "Restaurant Website",
    desc: "Beautiful food menu aur online presence for your restaurant.",
    features: ["Digital Menu", "Food categories", "Restaurant information", "Location map", "WhatsApp ordering"],
    msg: "Assalam-o-Alaikum, mujhe Restaurant Website banwani hai."
  },
  {
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    title: "Portfolio Website",
    desc: "Freelancers, designers, aur professionals ke liye personal brand.",
    features: ["About me", "Projects portfolio", "Skills showcase", "Resume download", "Contact form"],
    msg: "Assalam-o-Alaikum, mujhe Portfolio Website banwani hai."
  },
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    title: "Custom Website",
    desc: "Aapki unique requirement ke mutabiq completely custom built website.",
    features: ["Tailored to your needs", "Custom functionality", "Unique UI/UX design", "Specific API integrations", "Scalable architecture"],
    msg: "Assalam-o-Alaikum, mujhe ek Custom Website banwani hai."
  }
];

export default function Websites() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden border-b border-slate-200/50">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 font-bold text-sm mb-6 shadow-sm">
                <Globe size={16} />
                Web Development Services
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                Professional Websites <br/> For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Business.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-xl">
                Apne business, organization ya personal brand ke liye ek modern, fast, aur secure website banwayein jo directly aapki credibility barhaye.
              </p>
              
              <Link
                href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20website%20banwani%20hai.%20Main%20apni%20requirements%20discuss%20karna%20chahta%20hoon."
                target="_blank"
                className="inline-flex justify-center items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Discuss Your Website
              </Link>
            </div>

            {/* Right Realistic Visual */}
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white transform hover:-translate-y-2 transition-transform duration-700">
                 <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Web Development on MacBook" className="w-full h-auto object-cover" />
                 
                 {/* Floating Glass Box */}
                 <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Modern Design</div>
                      <div className="text-xs text-slate-500 font-semibold mt-0.5">100% Responsive & Fast</div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Website Categories</h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              Apni industry ke mutabiq perfect website type select karein.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                {/* Photo Header */}
                <div className="h-56 relative overflow-hidden">
                   <img src={type.img} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                   <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white leading-tight">{type.title}</h3>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 mb-8 font-medium leading-relaxed">{type.desc}</p>
                  
                  <div className="mb-8 flex-grow">
                    <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-blue-600">Key Features</h4>
                    <ul className="space-y-3">
                      {type.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`https://wa.me/923097354874?text=${encodeURIComponent(type.msg)}`}
                    target="_blank"
                    className="flex justify-center items-center gap-2 w-full bg-slate-50 hover:bg-emerald-500 text-slate-700 hover:text-white px-4 py-4 rounded-2xl font-bold transition-all shadow-sm border border-slate-200 hover:border-transparent group/btn"
                  >
                    <MessageCircle size={20} className="text-emerald-500 group-hover/btn:text-white" />
                    Discuss on WhatsApp
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
