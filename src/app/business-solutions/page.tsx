import Link from "next/link";
import { MessageCircle, Briefcase, Sparkles, ArrowRight } from "lucide-react";

const solutions = [
  {
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    title: "Education",
    desc: "Schools, Colleges, Academies & Institutes.",
    solution: "Website + Management Software + Mobile App",
    msg: "Assalam-o-Alaikum, mujhe apne Education institute ke liye complete digital solution chahiye."
  },
  {
    img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=600&q=80",
    title: "Retail & Shopping",
    desc: "Shops, Super Marts & Online Stores.",
    solution: "Website + E-Commerce + POS + Inventory",
    msg: "Assalam-o-Alaikum, mujhe apne Retail business ke liye complete digital solution chahiye."
  },
  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    title: "Restaurant & Food",
    desc: "Restaurants, Cafes & Food Delivery Services.",
    solution: "Website + Online Ordering + App",
    msg: "Assalam-o-Alaikum, mujhe apne Restaurant ke liye complete digital solution chahiye."
  },
  {
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    title: "Healthcare",
    desc: "Clinics, Hospitals & Private Doctors.",
    solution: "Website + Appointment System + Patient Mgmt",
    msg: "Assalam-o-Alaikum, mujhe apne Healthcare facility ke liye complete digital solution chahiye."
  },
  {
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    title: "Real Estate",
    desc: "Agencies, Builders & Property Managers.",
    solution: "Property Website + CRM System",
    msg: "Assalam-o-Alaikum, mujhe apne Real Estate business ke liye complete digital solution chahiye."
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
    title: "Local Services",
    desc: "Agencies, Contractors & Local Service Providers.",
    solution: "Website + Booking Software + Custom App",
    msg: "Assalam-o-Alaikum, mujhe apne Local Business ke liye complete digital solution chahiye."
  }
];

export default function BusinessSolutions() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden border-b border-slate-200/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 text-orange-700 font-bold text-sm mb-6 shadow-sm">
                <Briefcase size={16} />
                Industry Specific Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                Digital Ecosystem For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Industry.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-xl">
                Aapka business kisi bhi industry mein ho, hum uske liye ek mukammal aur tailored digital solution develop karenge jo aapki growth badhaye.
              </p>
              
              <Link
                href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20main%20apne%20business%20ko%20digital%20karna%20chahta%20hoon.%20Guide%20kar%20dein."
                target="_blank"
                className="inline-flex justify-center items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Discuss Your Business
              </Link>
            </div>

            {/* Right Realistic Visual */}
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-500/20 blur-3xl rounded-full -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white transform hover:-translate-y-2 transition-transform duration-700">
                 <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Business strategy and growth" className="w-full h-auto object-cover" />
                 
                 {/* Floating Glass Box */}
                 <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shadow-sm">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Growth Focused</div>
                      <div className="text-xs text-slate-500 font-semibold mt-0.5">End-to-End Development</div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Industries We Serve</h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              Choose your industry and explore the recommended digital ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                {/* Photo Header */}
                <div className="h-56 relative overflow-hidden">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                   <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white leading-tight">{item.title}</h3>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 mb-8 font-medium leading-relaxed">{item.desc}</p>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 flex-grow">
                    <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Recommended Ecosystem</h4>
                    <p className="font-bold text-slate-900 leading-tight">{item.solution}</p>
                  </div>

                  <Link
                    href={`https://wa.me/923097354874?text=${encodeURIComponent(item.msg)}`}
                    target="_blank"
                    className="flex justify-center items-center gap-2 w-full bg-slate-50 hover:bg-emerald-500 text-slate-700 hover:text-white px-4 py-4 rounded-2xl font-bold transition-all shadow-sm border border-slate-200 hover:border-transparent group/btn"
                  >
                    <MessageCircle size={20} className="text-emerald-500 group-hover/btn:text-white" />
                    Get this solution
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border-4 border-white text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
              Not sure what your business needs?
            </h2>
            <p className="text-lg text-slate-300 mb-8 font-medium">
              Free consultation hasil karein. Hum aapko guide karenge ke aapke business ke liye best kya hai.
            </p>
            <Link
              href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20nahi%20pata%20mere%20business%20ko%20kis%20digital%20solution%20ki%20zaroorat%20hai.%20Kya%20aap%20guide%20kar%20sakte%20hain?"
              target="_blank"
              className="inline-flex justify-center items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={24} />
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
