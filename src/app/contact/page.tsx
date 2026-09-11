import { MessageCircle, Phone, Mail, MapPin, Sparkles } from "lucide-react";

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

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden border-b border-slate-200/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 font-bold text-sm mb-6 shadow-sm">
                <MessageCircle size={16} />
                24/7 Support & Consultation
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Amazing.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-xl">
                Aapke paas koi idea hai ya aap apne business ko digital le jana chahte hain? Humse connect karein. Humari team aapko completely guide karegi.
              </p>
            </div>

            {/* Right Realistic Visual */}
            <div className="relative mt-12 lg:mt-0 hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white transform hover:-translate-y-2 transition-transform duration-700">
                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Team meeting and discussion" className="w-full h-auto object-cover" />
                 
                 {/* Floating Glass Box */}
                 <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">Free Consultation</div>
                      <div className="text-xs text-slate-500 font-semibold mt-0.5">Let's discuss your idea</div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            
            {/* Primary Contact (WhatsApp) */}
            <a 
              href="https://wa.me/923097354874?text=Assalam-o-Alaikum,%20mujhe%20Digital%20Banao%20se%20apne%20project%20ke%20baare%20mein%20discuss%20karna%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 p-6 sm:p-10 bg-emerald-50 rounded-2xl sm:rounded-3xl hover:bg-emerald-100/80 transition-colors border border-emerald-100 group shadow-sm hover:shadow-md"
            >
              <div className="bg-emerald-500 text-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30 flex-shrink-0">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="text-center sm:text-left flex-grow">
                <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Chat on WhatsApp</h3>
                <p className="text-emerald-700 font-medium text-xs sm:text-lg mb-4">Fastest way to get in touch with us.</p>
                <div className="inline-flex items-center gap-2 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-slate-700 font-bold text-[10px] sm:text-sm shadow-sm">
                  Click here to start chat
                </div>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+923097354874" className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5 p-4 sm:p-8 bg-white rounded-xl sm:rounded-3xl hover:-translate-y-1 transition-transform border border-slate-100 shadow-sm hover:shadow-xl group">
              <div className="bg-blue-50 text-blue-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-sm sm:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">Phone Call</h3>
                <p className="text-[10px] sm:text-sm text-slate-500 font-medium mb-1.5 sm:mb-3">Give us a ring</p>
                <p className="text-xs sm:text-base text-blue-600 font-bold">+92 309 7354874</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:abubakr.bgnu@gmail.com" className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5 p-4 sm:p-8 bg-white rounded-xl sm:rounded-3xl hover:-translate-y-1 transition-transform border border-slate-100 shadow-sm hover:shadow-xl group">
              <div className="bg-purple-50 text-purple-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-sm sm:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">Email Us</h3>
                <p className="text-[10px] sm:text-sm text-slate-500 font-medium mb-1.5 sm:mb-3">Drop us a line</p>
                <p className="text-xs sm:text-base text-purple-600 font-bold truncate max-w-[100px] sm:max-w-[150px]">abubakr.bgnu</p>
              </div>
            </a>

            {/* Website */}
            <a href="https://digitalbanao.site/" target="_blank" rel="noopener noreferrer" className="col-span-2 lg:col-span-1 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5 p-4 sm:p-8 bg-white rounded-xl sm:rounded-3xl hover:-translate-y-1 transition-transform border border-slate-100 shadow-sm hover:shadow-xl group">
              <div className="bg-orange-50 text-orange-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div>
                <h3 className="text-sm sm:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">Website</h3>
                <p className="text-[10px] sm:text-sm text-slate-500 font-medium mb-1.5 sm:mb-3">Visit our platform</p>
                <p className="text-xs sm:text-base text-orange-600 font-bold truncate max-w-[150px]">digitalbanao.site</p>
              </div>
            </a>

            {/* Founder Box */}
            <div className="col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-2xl sm:rounded-3xl mt-4">
               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 flex-shrink-0 border-4 border-white shadow-sm overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="Professional Avatar" className="w-full h-full object-cover" />
               </div>
               <div className="text-center sm:text-left">
                 <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">Abu Bakr Siddique</h3>
                 <p className="text-xs sm:text-sm text-blue-600 font-bold mb-3">Founder & Full-Stack Developer</p>
                 <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 font-medium text-[10px] sm:text-sm">
                   <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                   Based in Pakistan, serving globally.
                 </div>
               </div>
            </div>

            {/* Social Links */}
            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center p-6 sm:p-10 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 mt-4 shadow-sm">
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-4 sm:mb-6 text-center">Connect with the Founder</h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 w-full">
                <a href="https://iamabubakar.site/" target="_blank" rel="noopener noreferrer" className="flex-grow sm:flex-grow-0 flex justify-center items-center gap-2 bg-slate-50 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-slate-700 hover:bg-slate-900 hover:text-white transition-all hover:shadow-lg font-bold text-xs sm:text-base">
                  Personal Portfolio
                </a>
                <a href="https://www.linkedin.com/in/abubakar0320/" target="_blank" rel="noopener noreferrer" className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-blue-700 hover:bg-blue-700 hover:text-white transition-all hover:shadow-lg hover:shadow-blue-700/30">
                  <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/mehmad_al_fatih.05/" target="_blank" rel="noopener noreferrer" className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-pink-600 hover:bg-pink-600 hover:text-white transition-all hover:shadow-lg hover:shadow-pink-500/30">
                  <InstagramIcon />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
