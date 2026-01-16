
import React, { useState, useEffect } from 'react';
import { Search, Bell, ExternalLink, Download, FileText, ChevronRight, Building2, Home, Users, Info, Calendar, Layout, BookOpen, HelpCircle, Phone, CreditCard, Sparkles, Menu, Layers } from 'lucide-react';
import { NAVIGATION, NEWS, TOP_RESOURCES, ALLIANCE_PARTNERS, PARTNER_LOGOS } from './constants';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Premium Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gold/20 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="flex flex-col shrink-0">
              <span className="font-brand text-2xl font-bold tracking-[0.3em] text-white">LEBEN</span>
              <span className="text-[9px] tracking-[0.4em] text-gold font-bold uppercase">Establish</span>
            </div>
            <div className="h-8 w-[1px] bg-white/20 hidden md:block"></div>
            <span className="text-[10px] font-bold tracking-widest text-white/60 hidden lg:block uppercase whitespace-nowrap">Internal Portal</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['ALLIANCE', 'MANUAL', 'FLYER', 'Q&A'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black tracking-[0.2em] text-white/70 hover:text-gold transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 focus-within:border-gold/50 transition-all">
              <Search className="w-3.5 h-3.5" />
              <input type="text" placeholder="SEARCH" className="bg-transparent text-[10px] font-bold tracking-widest focus:outline-none w-20 placeholder:text-inherit" />
            </div>
            <button className="relative group p-2">
              <Bell className="w-5 h-5 text-white/70 group-hover:text-gold transition-colors" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-gold rounded-full ring-2 ring-black"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section (TOP image) */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
            alt="Luxury Noir House"
          />
          <div className="absolute inset-0 noir-overlay"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[7rem] font-serif-luxury leading-[1.1] text-white">
              <span className="whitespace-nowrap inline-block mb-2">レーベンホームビルド</span>
              <br />
              <span className="text-gradient-gold italic">法人提携制度</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Partner Logo Ticker - Moved here, immediately under Hero image */}
      <section className="bg-black/40 border-y border-gold/10 py-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
           <span className="text-[10px] font-black text-gold tracking-[0.5em] uppercase inline-block border-b border-gold/20 pb-2">Preferred Alliance Network</span>
        </div>
        <div className="flex space-x-12 animate-marquee-slower whitespace-nowrap">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
            <div key={idx} className="inline-block w-48 h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              {typeof logo === 'string' ? (
                <img src={logo} alt="Partner Logo" className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/40 font-black text-xs border border-white/10 uppercase tracking-widest">{logo.name}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Dashboard */}
      <main className="flex-1 max-w-7xl mx-auto px-6 w-full py-20 sm:py-32 space-y-20 sm:space-y-32">
        
        {/* News Section */}
        <section id="news" className="space-y-12">
          <div className="flex items-end justify-between border-b border-gold/10 pb-10">
            <div>
              <span className="text-[10px] font-black text-gold tracking-[0.4em] uppercase mb-4 block">Intelligence Feed</span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-white">最新ニュース・トピックス</h2>
            </div>
            <button className="text-[10px] font-black tracking-widest text-white/40 hover:text-gold flex items-center gap-2 group transition-colors">
              VIEW ARCHIVE <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gold/10 overflow-hidden border border-gold/10">
            {NEWS.map((item) => (
              <div key={item.id} className="group bg-[#121212] p-8 sm:p-10 hover:bg-[#1E1E1E] transition-all cursor-pointer border-r border-gold/5 last:border-r-0">
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-[10px] font-black text-gold border border-gold/30 px-3 py-1 rounded-sm tracking-widest uppercase">{item.badge}</span>
                  <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">{item.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white/90 group-hover:text-gold transition-colors leading-relaxed mb-6">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-white/20 group-hover:text-gold transition-colors">
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase">Read Detail</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Cards (Alliance Nav moved under News) */}
        <section id="alliance-nav" className="space-y-12">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NAVIGATION.map((item) => (
              <div key={item.id} className="luxury-card p-8 rounded-sm hover:bg-black/80 cursor-pointer group flex flex-col justify-between min-h-[180px] border-l-2 border-l-gold/20 hover:border-l-gold">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-gold p-3 rounded-sm border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div className="h-[1px] flex-1 bg-gold/10 ml-4 group-hover:bg-gold/30"></div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-wide mb-2 leading-tight uppercase">{item.label}</h4>
                  <p className="text-[11px] text-white/50 font-medium leading-relaxed tracking-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Matrix Resource Section */}
        <section id="manual" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[10px] font-black text-gold tracking-[0.4em] uppercase mb-4 block">Core Documents</span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-white leading-snug">
                実務を支える、<br className="hidden sm:block" />
                ナレッジアーカイブ
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="bg-white/5 border border-white/10 text-[10px] font-black px-6 py-3 tracking-widest uppercase hover:border-gold transition-all">Download All</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOP_RESOURCES.map((res) => (
              <div key={res.id} className="luxury-card p-8 sm:p-10 group flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="text-gold opacity-50 group-hover:opacity-100 transition-opacity">
                      <FileText className="w-8 h-8" />
                    </div>
                    <button className="text-white/20 hover:text-gold transition-colors">
                      <Download className="w-6 h-6" />
                    </button>
                  </div>
                  <h4 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors leading-snug">{res.title}</h4>
                </div>
                <div className="pt-8 border-t border-gold/5 flex justify-between items-center">
                  <span className="text-[9px] font-black text-white/30 tracking-widest uppercase">REV: {res.updatedAt}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    <span className="text-[9px] font-black text-gold tracking-widest uppercase">OFFICIAL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Preferred Partners Section */}
        <section id="alliance" className="space-y-12 pb-24">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black text-gold tracking-[0.5em] uppercase mb-6 block">Elite Partners Network</span>
            <h2 className="text-4xl sm:text-5xl font-serif-luxury text-white">提携ネットワーク詳細</h2>
          </div>

          <div className="space-y-10">
            {ALLIANCE_PARTNERS.map((partner, idx) => (
              <div key={idx} className="group bg-[#121212] border border-white/5 overflow-hidden flex flex-col lg:flex-row hover:border-gold/30 transition-all">
                <div className="lg:w-96 h-80 lg:h-auto overflow-hidden relative shrink-0">
                  <img src={partner.logo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={partner.name} />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="flex-1 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                      <h4 className="text-xl sm:text-2xl font-serif-luxury text-white group-hover:text-gold transition-colors">{partner.name}</h4>
                      <span className="px-4 py-1.5 bg-gold/10 text-gold text-[9px] font-black rounded-sm border border-gold/20 uppercase tracking-widest whitespace-nowrap">Premium Alliance</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-2xl font-light">
                      {partner.description}
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {partner.benefits.map((benefit, i) => (
                        <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-black text-white/60 flex items-center gap-3 uppercase tracking-tighter">
                          <div className="w-1 h-1 bg-gold rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between">
                    <button className="text-[10px] font-black tracking-[0.2em] text-gold hover:text-white uppercase transition-colors">View Detailed Guidelines</button>
                    <button className="p-4 bg-white/5 border border-white/10 text-white hover:bg-gold hover:text-black transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-20 sm:py-32 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-20 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex flex-col mb-10">
                <span className="font-brand text-3xl sm:text-4xl font-bold tracking-[0.4em] text-white">LEBEN</span>
                <span className="text-[11px] tracking-[0.6em] text-gold font-black uppercase mt-2">Noir Portal</span>
              </div>
              <p className="text-white/30 text-xs max-w-sm leading-relaxed font-medium">
                タカラレーベンは、住まう人の誇りをデザインします。<br />
                このポータルは、洗練された提携ビジネスを実現するための、<br />
                エグゼクティブ・プラットフォームです。
              </p>
            </div>
            <div>
              <h5 className="text-gold text-[10px] font-black tracking-widest uppercase mb-8 sm:mb-10">Internal Nav</h5>
              <ul className="space-y-4 sm:space-y-6 text-[10px] font-black tracking-widest text-white/40 uppercase">
                <li><a href="#" className="hover:text-gold transition-colors">Partner DB</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Sales Manual</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Marketing Tools</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Admin Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-gold text-[10px] font-black tracking-widest uppercase mb-8 sm:mb-10">Resources</h5>
              <ul className="space-y-4 sm:space-y-6 text-[10px] font-black tracking-widest text-white/40 uppercase">
                <li><a href="#" className="hover:text-gold transition-colors">IT Help Desk</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">General Affairs</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Human Resources</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[9px] text-white/20 tracking-[0.3em] font-black uppercase text-center md:text-left">© 2024 TAKARA LEBEN CO., LTD. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 sm:gap-12">
               {['TERMS', 'PRIVACY', 'SECURITY'].map(s => (
                 <a key={s} href="#" className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-gold transition-all">{s}</a>
               ))}
            </div>
          </div>
        </div>
      </footer>

      <ChatBot />

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.15); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slower {
          animation: marquee 50s linear infinite;
        }
        html {
          background-color: #050505;
        }
        main section {
          scroll-margin-top: 100px;
        }
      `}</style>
    </div>
  );
};

export default App;
