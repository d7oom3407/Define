
import React, { useState, useEffect } from 'react';
import { translations, Language } from './translations';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const LOGO_URL = "https://ugc.production.linktr.ee/d5b1abdc-fd3d-4db4-b2e2-0fbb876665b1_18cd69b6fcc4c7c13e6b5b2a83df5026-tplv-tiktokx-cropcenter-1080-1080.jpeg?io=true&size=avatar-v3_0";
const HERO_IMG = "https://defineclinics.net/wp-content/uploads/2023/11/DSC04457-768x512.jpg";
const ABOUT_IMG = "https://defineclinics.net/wp-content/uploads/2023/11/02-1-768x768.jpg";

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  // Smooth Scroll Helper with header offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <div className={`min-h-screen bg-[#FDFCF9] text-[#2C3E50] ${isRtl ? 'font-arabic' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCF9]/95 backdrop-blur-md border-b border-[#2C3E50]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-4 group cursor-pointer" 
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#C5A059]/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              <img 
                src={LOGO_URL} 
                alt="Define Logo" 
                className="h-14 w-14 rounded-full border-2 border-[#C5A059]/20 relative z-10 shadow-sm object-cover" 
              />
            </div>
            <div className={`flex flex-col ${isRtl ? 'items-start' : 'items-start'}`}>
              <span className="text-2xl font-black tracking-[-0.02em] text-[#2C3E50] leading-none">DEFINE</span>
              <span className="text-xs tracking-[0.3em] text-[#C5A059] font-bold uppercase mt-1">
                {lang === 'ar' ? 'عيادات' : 'Clinics'}
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-sm font-bold text-[#2C3E50] hover:text-[#C5A059] transition-all transform hover:scale-105">{t.nav.home}</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-sm font-bold text-[#2C3E50] hover:text-[#C5A059] transition-all transform hover:scale-105">{t.nav.about}</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-bold text-[#2C3E50] hover:text-[#C5A059] transition-all transform hover:scale-105">{t.nav.services}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-sm font-bold text-[#2C3E50] hover:text-[#C5A059] transition-all transform hover:scale-105">{t.nav.contact}</a>
            
            <div className="h-4 w-[1px] bg-[#2C3E50]/10 mx-2"></div>
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2C3E50] hover:text-[#C5A059] transition-all bg-[#2C3E50]/5 hover:bg-[#2C3E50]/10 px-4 py-2 rounded-xl"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'العربية' : 'English'}
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#2C3E50] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#C5A059] hover:shadow-xl hover:shadow-[#C5A059]/20 transition-all active:scale-95"
            >
              {t.nav.book}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#2C3E50] hover:bg-black/5 rounded-lg transition-colors">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FDFCF9] absolute w-full top-20 left-0 border-b border-[#2C3E50]/5 py-8 px-6 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <button onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold text-right py-2 hover:text-[#C5A059]">{t.nav.home}</button>
            <button onClick={(e) => handleNavClick(e, 'about')} className="text-xl font-bold text-right py-2 hover:text-[#C5A059]">{t.nav.about}</button>
            <button onClick={(e) => handleNavClick(e, 'services')} className="text-xl font-bold text-right py-2 hover:text-[#C5A059]">{t.nav.services}</button>
            <button onClick={(e) => handleNavClick(e, 'contact')} className="text-xl font-bold text-right py-2 hover:text-[#C5A059]">{t.nav.contact}</button>
            <div className="h-[1px] bg-[#2C3E50]/5 my-2"></div>
            <button onClick={() => { toggleLang(); setIsMenuOpen(false); }} className="flex items-center justify-between font-bold text-[#C5A059] text-lg py-2">
              <span className="flex items-center gap-3"><Globe className="w-6 h-6" /> {lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#2C3E50] text-white w-full py-4 rounded-2xl font-bold text-center"
            >
              {t.nav.book}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} className="w-full h-full object-cover brightness-[0.55]" alt="Clinic Interior" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF9] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className={`max-w-3xl ${isRtl ? 'mr-0 text-right' : 'ml-0 text-left'}`}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.15] text-shadow-premium">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed font-medium text-shadow-premium max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className={`flex flex-wrap gap-4 ${isRtl ? 'justify-start' : 'justify-start'}`}>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-[#C5A059] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#B08D4B] hover:scale-105 transition-all group shadow-2xl active:scale-95"
              >
                {t.hero.cta}
                <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            {/* Background Decorative Box with Soft Rounded Corners */}
            <div className="absolute inset-0 bg-[#C5A059]/10 rounded-[3.5rem] -rotate-3 transform scale-105 transition-transform duration-700 group-hover:rotate-0"></div>
            
            {/* Main Container with overflow-hidden to ENSURE clipping of image corners */}
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl aspect-square sm:aspect-video lg:aspect-auto h-full min-h-[500px]">
              <img 
                src={ABOUT_IMG} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Define Concept" 
              />
            </div>

            {/* Floating Stats Badge */}
            <div className={`absolute -bottom-8 ${isRtl ? '-left-8' : '-right-8'} p-8 bg-[#2C3E50] text-white rounded-[2.5rem] hidden md:block shadow-2xl z-20 border-2 border-white/5`}>
              <div className="text-4xl font-serif text-[#C5A059]">99%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-bold mt-1">{t.about.successRate}</div>
            </div>
          </div>
          
          <div className={isRtl ? 'lg:text-right' : 'lg:text-left'}>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C3E50] leading-tight">{t.about.title}</h2>
            <div className="space-y-6 text-[#2C3E50]/90 font-medium leading-relaxed text-lg mb-12">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className={`text-4xl font-serif text-[#C5A059] mb-1 transition-transform group-hover:scale-110 ${isRtl ? 'origin-right' : 'origin-left'}`}>{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60 text-[#2C3E50]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">{t.services.title}</h2>
          <p className="text-[#2C3E50]/80 font-bold max-w-xl mx-auto leading-relaxed text-lg">{t.services.subtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((item, i) => (
            <div key={i} className="group bg-white p-10 rounded-[3rem] border border-[#2C3E50]/5 hover:border-[#C5A059]/30 transition-all hover:-translate-y-2 hover:shadow-xl relative overflow-hidden cursor-default">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-16 h-16 text-[#C5A059]" />
              </div>
              <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-[#C5A059] font-serif text-xl italic font-bold">0{i+1}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
              <p className="text-sm md:text-base text-[#2C3E50]/90 font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#2C3E50] rounded-[4rem] flex flex-col lg:flex-row overflow-hidden shadow-2xl">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-serif mb-12">{t.contact.title}</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C5A059] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-[#C5A059] mb-2">{t.contact.locationLabel}</div>
                    <div className="text-lg font-bold opacity-100">{t.contact.address}</div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[#C5A059] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-[#C5A059] mb-2">{t.contact.callLabel}</div>
                    <a href="tel:+966920013818" className="text-2xl md:text-3xl font-bold hover:text-[#C5A059] transition-colors block mt-1 tracking-tight">{t.contact.phone}</a>
                  </div>
                </div>
                <div className="flex gap-4 pt-6">
                  <a href="https://www.instagram.com/defineclinics.sa/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C5A059] hover:scale-110 transition-all active:scale-90" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.tiktok.com/@defineclinics.sa" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C5A059] hover:scale-110 transition-all active:scale-90" aria-label="TikTok">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1360183149594!2d46.6896172!3d24.8052917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ef910408f668f%3A0x6a08468770b099b2!2sDefine%20Clinics!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa" 
                className="w-full h-full grayscale border-0 opacity-80"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-[#2C3E50]/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Footer Logo Section */}
          <div 
            className="flex items-center gap-6 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
              <span className="text-3xl font-black tracking-[-0.03em] text-[#2C3E50] leading-none mb-2">DEFINE CLINICS</span>
              <span className="text-sm font-bold text-[#C5A059] uppercase tracking-[0.2em]">{t.footer.slogan}</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#C5A059]/5 rounded-full scale-110"></div>
              <img src={LOGO_URL} alt="Logo" className="h-20 w-20 rounded-full border border-[#C5A059]/10 relative z-10 shadow-lg object-cover" />
            </div>
          </div>
          
          <div className="flex gap-10 text-sm font-bold text-[#2C3E50]/80">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#C5A059] transition-colors">{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#C5A059] transition-colors">{t.nav.about}</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#C5A059] transition-colors">{t.nav.services}</button>
          </div>

          <div className="text-[10px] text-[#2C3E50]/50 font-bold tracking-[0.2em] uppercase">
            © 2024 Define Clinics. Riyadh, KSA.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
