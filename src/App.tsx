import React, { useState, useEffect } from 'react';
import { Hammer, Building2, Home, Wrench, Menu, X, Phone, Mail, MapPin, ChevronRight, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type SiteImageData = { category: string; images: { id: string; name: string; url: string }[] }[];

const BrandLogo = ({ className = "w-32" }: { className?: string }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className} aspect-square`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2c56a" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b5952f" />
          </linearGradient>
          <linearGradient id="silver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#a5a9b4" />
            <stop offset="100%" stopColor="#555555" />
          </linearGradient>
        </defs>
        
        {/* Outer saw blade */}
        <path 
          d="M 50 2 L 53 7 L 59 4 L 60 10 L 67 8 L 66 14 L 73 14 L 70 20 L 78 21 L 73 27 L 81 30 L 76 35 L 84 39 L 77 44 L 85 49 L 78 52 L 85 58 L 77 60 L 83 66 L 75 68 L 80 74 L 72 75 L 75 81 L 67 80 L 69 87 L 61 85 L 62 92 L 54 89 L 53 96 L 47 92 L 44 98 L 40 93 L 36 99 L 33 93 L 28 98 L 27 92 L 20 95 L 21 88 L 15 90 L 17 83 L 10 83 L 13 77 L 7 75 L 12 69 L 5 65 L 11 60 L 4 54 L 11 50 L 4 43 L 12 40 L 7 34 L 14 32 L 10 25 L 18 25 L 16 19 L 23 20 L 23 13 L 30 16 L 32 10 L 38 14 L 42 7 L 46 12 Z" 
          fill="url(#silver)"
          className="animate-[spin_60s_linear_infinite]"
          style={{ transformOrigin: 'center' }}
        />
        
        {/* Inner black circle */}
        <circle cx="50" cy="50" r="42" fill="#0f0f0f" />
        
        {/* Inner gold ring */}
        <circle cx="50" cy="50" r="39" stroke="url(#gold)" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative z-10 w-full h-full flex flex-col items-center">
        {/* Top T */}
        <div className="absolute top-[16%] text-gold-500 font-display font-bold text-[12px] leading-none drop-shadow-md">T</div>
        
        {/* Crossed Hammers */}
        <div className="absolute top-[28%] flex justify-center w-full drop-shadow-lg z-20">
          <Hammer className="absolute w-8 h-8 text-steel-400 transform -rotate-45 -translate-x-2.5 scale-x-[-1]" strokeWidth={1.5} />
          <Hammer className="absolute w-8 h-8 text-steel-400 transform rotate-45 translate-x-2.5" strokeWidth={1.5} />
        </div>

        {/* Houses */}
        <div className="absolute top-[44%] flex items-end justify-center w-full z-10">
          <svg viewBox="0 0 100 20" className="w-16 h-4 opacity-90 drop-shadow-sm">
            <path d="M 10 20 L 10 10 L 25 0 L 40 10 L 40 20 Z" fill="url(#gold)" />
            <path d="M 40 20 L 40 5 L 50 -2 L 60 5 L 60 20 Z" fill="url(#gold)" />
            <path d="M 60 20 L 60 10 L 75 0 L 90 10 L 90 20 Z" fill="url(#gold)" />
            
            {/* Windows */}
            <rect x="18" y="12" width="3" height="3" fill="#0f0f0f" />
            <rect x="24" y="12" width="3" height="3" fill="#0f0f0f" />
            <rect x="18" y="7" width="3" height="3" fill="#0f0f0f" />
            <rect x="24" y="7" width="3" height="3" fill="#0f0f0f" />

            <rect x="47" y="12" width="3" height="3" fill="#0f0f0f" />
            <rect x="53" y="12" width="3" height="3" fill="#0f0f0f" />
            <rect x="47" y="7" width="3" height="3" fill="#0f0f0f" />
            <rect x="53" y="7" width="3" height="3" fill="#0f0f0f" />

            <rect x="73" y="12" width="3" height="3" fill="#0f0f0f" />
            <rect x="79" y="12" width="3" height="3" fill="#0f0f0f" />
            <rect x="73" y="7" width="3" height="3" fill="#0f0f0f" />
            <rect x="79" y="7" width="3" height="3" fill="#0f0f0f" />
          </svg>
        </div>
      </div>
      
      {/* Main Text Band */}
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] z-30 flex flex-col items-center drop-shadow-xl">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="bg-charcoal-950 px-2 w-full text-center py-1">
          <span className="text-white font-display font-black text-[11px] md:text-[13px] tracking-[0.08em] whitespace-nowrap">
            T.K.O CONSTRUCTION LLC
          </span>
        </div>
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      </div>

      {/* EST 2025 */}
      <div className="absolute top-[72%] z-20 drop-shadow-md">
        <div className="bg-gradient-to-b from-gold-400 to-gold-600 px-3 py-0.5" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)' }}>
          <span className="text-charcoal-950 font-bold text-[7px] tracking-widest whitespace-nowrap block pt-[1px] pb-[1px]">
            EST 2025
          </span>
        </div>
      </div>
    </div>
  );
};

const Header = ({ openContactModal }: { openContactModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 border-b border-charcoal-800 ${isScrolled ? 'bg-charcoal-950/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <BrandLogo className="w-24 mt-3" />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['SERVICES', 'PORTFOLIO', 'ABOUT US'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[11px] font-bold tracking-[0.2em] uppercase text-steel-400 hover:text-gold-500 transition-colors">
              {item}
            </a>
          ))}
          <button onClick={openContactModal} className="text-[11px] font-bold tracking-[0.2em] uppercase text-steel-400 hover:text-gold-500 transition-colors">
            CONTACT
          </button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-charcoal-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
           {['SERVICES', 'PORTFOLIO', 'ABOUT US'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest text-white hover:text-gold-500 transition-colors">
              {item}
            </a>
          ))}
          <button onClick={() => { setMobileMenuOpen(false); openContactModal(); }} className="text-sm font-medium tracking-widest text-white hover:text-gold-500 transition-colors text-left">
            CONTACT
          </button>
        </div>
      )}
    </header>
  );
};

const Hero = ({ openContactModal }: { openContactModal: () => void }) => {
  return (
    <section className="relative h-[600px] flex items-center justify-center pt-24 overflow-hidden bg-charcoal-925">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center overflow-hidden z-0">
        <div className="text-[300px] font-black text-white select-none">TKO</div>
      </div>
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
          alt="Modern commercial framing project" 
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 border border-gold-500 text-gold-500 text-[10px] tracking-[0.4em] uppercase mb-6"
        >
          General Contractor Excellence
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black italic tracking-tighter text-gold-500 leading-none mb-4 md:mb-8 drop-shadow-2xl uppercase"
        >
          We Do It All!
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-steel-400 max-w-2xl mb-12 font-light leading-relaxed px-4"
        >
          Premium craftsmanship, unwavering reliability, and visionary execution for residential spaces.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button onClick={openContactModal} className="px-12 py-4 bg-gold-500 text-charcoal-950 font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all inline-block">
            Request a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Services = ({ openContactModal, siteImages }: { openContactModal: () => void, siteImages: SiteImageData | null }) => {
  const getImageUrl = (defaultUrl: string, category: string) => {
    if (siteImages) {
      const cat = siteImages.find(c => c.category === category);
      if (cat && cat.images.length > 0) {
        return cat.images[0].url;
      }
    }
    return defaultUrl;
  };

  const services = [
    {
      title: 'Custom Homes',
      desc: 'Ground-up residential construction built to your exact specifications with premium finishes and structural integrity.',
      icon: <Home className="w-6 h-6 text-gold-500" />,
      image: getImageUrl('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', 'Services - Custom Homes')
    },
    {
      title: 'Renovations',
      desc: 'Transforming existing spaces with uncompromising quality, meticulous care, and modern design principles.',
      icon: <Wrench className="w-6 h-6 text-gold-500" />,
      image: getImageUrl('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80', 'Services - Renovations')
    },
    {
      title: 'Framing & Structural',
      desc: 'Precision residential framing and structural foundations ensuring your home is built to last generations.',
      icon: <Hammer className="w-6 h-6 text-gold-500" />,
      image: getImageUrl('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80', 'Services - Framing')
    }
  ];

  return (
    <section id="services" className="border-t border-b border-charcoal-800 bg-charcoal-900">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className={`group relative p-12 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-charcoal-800 ${i === 1 ? 'bg-charcoal-975' : ''}`}
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity z-0">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale mix-blend-luminosity" />
            </div>
            <div className="relative z-10 flex flex-col gap-4 h-full">
              <div className="flex items-center gap-2">
                {service.icon}
                <div className="text-gold-500 text-[10px] tracking-widest uppercase">
                  0{i + 1} / {service.title}
                </div>
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-sm text-steel-500 flex-1">{service.desc}</p>
              <button onClick={openContactModal} className="inline-flex items-center gap-2 text-gold-500 font-bold hover:text-gold-400 transition-colors uppercase tracking-widest text-xs mt-4">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = ({ siteImages }: { siteImages: SiteImageData | null }) => {
  const getImageUrl = (defaultUrl: string, category: string) => {
    if (siteImages) {
      const cat = siteImages.find(c => c.category === category);
      if (cat && cat.images.length > 0) {
        return cat.images[0].url;
      }
    }
    return defaultUrl;
  };

  const aboutImage = getImageUrl("https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80", "About Us");

  return (
    <section id="about-us" className="py-32 bg-charcoal-950 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="mb-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Our Journey</h2>
              <div className="w-24 h-1 bg-gold-500" />
            </div>
            
            <p className="text-steel-400 text-lg mb-12 leading-relaxed">
              Founded on the principles of rugged durability and architectural elegance, T.K.O Construction LLC delivers a knockout performance on every job site. We merge old-world craftsmanship with modern engineering to build structures that stand the test of time.
            </p>
            
            <div className="flex flex-col gap-10 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-gold-500 via-white/10 to-transparent" />
              
              <div className="relative pl-14">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-charcoal-900 border border-gold-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <HardHat className="w-4 h-4 text-gold-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Inception</h4>
                <p className="text-steel-400">EST 2025. A vision to redefine premium construction standards and bring unyielding quality to the local market.</p>
              </div>
              
              <div className="relative pl-14">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-charcoal-900 border border-white/20 flex items-center justify-center z-10">
                  <Wrench className="w-4 h-4 text-steel-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Comprehensive Capabilities</h4>
                <p className="text-steel-400">Mastering everything from detailed residential renovations to complete custom home builds.</p>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
             <div className="aspect-square rounded-full border border-white/5 absolute -inset-8 animate-[spin_120s_linear_infinite] pointer-events-none" />
             <div className="aspect-square rounded-full border border-gold-500/10 absolute -inset-16 animate-[spin_180s_linear_infinite_reverse] pointer-events-none" />
             <div className="relative z-10 overflow-hidden border border-white/10">
               <img 
                 src={aboutImage}
                 alt="Craftsmanship" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
               />
             </div>
             
             <div className="absolute -bottom-8 -right-4 lg:-right-12 w-48 h-48 bg-charcoal-900 border-[3px] border-gold-500 rounded-full flex flex-col items-center justify-center p-4 z-20 shadow-2xl">
               <div className="absolute inset-2 border border-dashed border-gold-500/30 rounded-full animate-[spin_60s_linear_infinite]" />
               <Hammer className="text-gold-500 w-10 h-10 mb-3" />
               <span className="text-xs font-bold tracking-[0.2em] text-white text-center leading-tight">CRAFTED<br/>WITH PRIDE</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ siteImages, loading }: { siteImages: SiteImageData | null, loading: boolean }) => {
  const defaultImages = [
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', title: 'Modern Estate' },
    { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', title: 'Custom Build' },
    { url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80', title: 'Luxury Renovation' },
    { url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80', title: 'Home Addition' },
  ];

  let displayImages = defaultImages;
  if (siteImages) {
    const portfolioCategories = siteImages.filter(cat => cat.category.startsWith("Portfolio - ") || ["Custom Homes", "Renovations", "Kitchens & Baths"].includes(cat.category));
    if (portfolioCategories.length > 0) {
      const flattened = portfolioCategories.flatMap(cat => 
        cat.images.map(img => ({ url: img.url, title: cat.category.replace("Portfolio - ", "") }))
      );
      if (flattened.length > 0) {
        displayImages = flattened.slice(0, 8);
      }
    }
  }

  return (
    <section id="portfolio" className="py-32 bg-charcoal-900 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gold-500" />
        </div>
        <a href="#portfolio" className="hidden md:inline-flex items-center gap-2 text-steel-400 hover:text-white transition-colors font-medium tracking-widest uppercase text-sm">
          View All <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-[400px]">
          <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(displayImages.length, 4)} w-full h-auto lg:h-[60vh] min-h-[400px] overflow-hidden`}>
          {displayImages.map((img, i) => (
            <div key={i} className="relative group overflow-hidden h-[300px] lg:h-full border border-charcoal-950">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{img.title}</h3>
                <p className="text-gold-500 text-xs font-bold tracking-widest uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  View Details <ChevronRight className="w-3 h-3" />
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;
    if (!scriptUrl || scriptUrl === 'YOUR_APPS_SCRIPT_WEB_APP_URL') {
      console.warn("Apps Script URL not configured");
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors' // Required for some Apps Script setups if CORS is tricky from localhost
      });
      
      // With no-cors, we can't read the response properly, but if it doesn't throw we assume success
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-charcoal-925 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh] md:max-h-full border border-charcoal-800"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 text-steel-500 hover:text-white transition-colors rounded-full bg-charcoal-950/50 backdrop-blur-md border border-charcoal-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-y-auto overflow-x-hidden">
              {/* Left Panel: Call to Action Info */}
              <div className="relative p-6 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-charcoal-800 overflow-hidden group">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1541888081622-19e4871032db?auto=format&fit=crop&q=80" 
                    alt="Architecture" 
                    className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal-925 via-charcoal-925/90 to-charcoal-925/40" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1 border border-gold-500 text-gold-500 text-[10px] tracking-[0.4em] uppercase mb-8">
                    Start Your Project
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter leading-none">
                    Let's Build<br />Something<br /><span className="text-gold-500 italic">Extraordinary</span>
                  </h2>
                  <p className="text-steel-400 text-xs md:text-sm lg:text-base mb-8 md:mb-12 max-w-md font-light leading-relaxed">
                    Whether you're planning a custom home from the ground up or a premium renovation, our team is ready to bring your vision to life.
                  </p>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-charcoal-800 bg-charcoal-950 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-gold-500" />
                      </div>
                      <div>
                        <div className="text-[10px] tracking-widest text-steel-500 uppercase font-bold mb-1">Direct Line</div>
                        <div className="text-white font-medium text-sm">(219) 424-0212</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-charcoal-800 bg-charcoal-950 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-gold-500" />
                      </div>
                      <div>
                        <div className="text-[10px] tracking-widest text-steel-500 uppercase font-bold mb-1">Email Us</div>
                        <div className="text-white font-medium text-sm">info@tkoconstruction.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Form */}
              <div className="p-6 md:p-12 lg:p-16 bg-charcoal-950 flex flex-col justify-center">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-charcoal-900 border border-gold-500 rounded-full flex items-center justify-center mb-6">
                      <Mail className="w-8 h-8 text-gold-500" />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white mb-4">Inquiry Received</h3>
                    <p className="text-steel-400 max-w-sm mb-8 leading-relaxed">
                      Thank you for contacting T.K.O Construction. We have sent a confirmation to your email and our team will be in touch shortly to discuss your project.
                    </p>
                    <button 
                      onClick={onClose}
                      className="px-8 py-3 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-950 font-bold text-xs tracking-[0.2em] uppercase transition-all"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-full max-w-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input 
                          type="text" 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b-2 border-charcoal-800 text-white px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors peer placeholder-transparent text-sm"
                          placeholder="Name"
                        />
                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-[10px] font-bold tracking-widest text-steel-500 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold-500 cursor-text">Name</label>
                      </div>
                      <div className="relative group">
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b-2 border-charcoal-800 text-white px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors peer placeholder-transparent text-sm"
                          placeholder="Email"
                        />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-[10px] font-bold tracking-widest text-steel-500 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold-500 cursor-text">Email</label>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-charcoal-800 text-white px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors peer placeholder-transparent text-sm"
                        placeholder="Phone"
                      />
                      <label htmlFor="phone" className="absolute left-0 -top-3.5 text-[10px] font-bold tracking-widest text-steel-500 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold-500 cursor-text">Phone</label>
                    </div>
                    
                    <div className="relative group pt-2">
                      <textarea 
                        id="message" 
                        required
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-charcoal-800 text-white px-0 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none peer placeholder-transparent text-sm"
                        placeholder="Project Details"
                      ></textarea>
                      <label htmlFor="message" className="absolute left-0 -top-3.5 text-[10px] font-bold tracking-widest text-steel-500 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold-500 cursor-text">Project Details</label>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-gold-500 text-charcoal-950 font-bold text-xs tracking-[0.2em] uppercase py-4 hover:bg-white transition-all disabled:opacity-50 mt-4 group relative overflow-hidden"
                    >
                      <span className="relative z-10">{status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}</span>
                      <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    
                    {status === 'error' && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="text-red-500 text-xs text-center font-bold tracking-widest uppercase mt-4"
                      >
                        Configuration Error. Please use phone or email.
                      </motion.p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal-950 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BrandLogo className="w-28" />
          </div>
          <p className="text-steel-400 mb-8 max-w-sm leading-relaxed mt-4">
            Premium general contracting services delivering exceptional structural integrity and architectural beauty for the modern era.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-white mb-8 tracking-widest uppercase text-sm border-l-2 border-gold-500 pl-4">Contact Us</h4>
          <ul className="space-y-6 text-steel-400">
            <li className="flex flex-start gap-4">
              <div className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center shrink-0 mt-1">
                <HardHat className="w-4 h-4 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">Cody Schleman</span>
                <span className="text-xs text-gold-500 tracking-widest uppercase mt-1">Founder / CEO</span>
              </div>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <Phone className="w-4 h-4 text-gold-500" />
              </div>
              (219) 424-0212
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <Mail className="w-4 h-4 text-gold-500" />
              </div>
              info@tkoconstruction.com
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-white mb-8 tracking-widest uppercase text-sm border-l-2 border-gold-500 pl-4">Business Hours</h4>
          <ul className="space-y-4 text-steel-400">
            <li className="flex justify-between border-b border-charcoal-800 pb-4">
              <span>Monday - Friday</span> 
              <span className="text-white">7:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-charcoal-800 pb-4">
              <span>Saturday</span> 
              <span className="text-white">8:00 AM - 2:00 PM</span>
            </li>
            <li className="flex justify-between pb-4 text-steel-500">
              <span>Sunday</span> 
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-12 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="hidden md:flex items-center gap-6">
          <div className="w-12 h-[1px] bg-charcoal-800"></div>
          <div className="text-[11px] tracking-[0.5em] text-steel-400 font-medium uppercase">
            Reliable Craftsmanship
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="text-gold-500 font-black text-2xl tracking-[0.2em]">EST 2025</div>
          <div className="text-[9px] text-steel-600 tracking-widest uppercase mt-1">© 2025 T.K.O Construction LLC. All rights reserved.</div>
        </div>

        <div className="flex gap-6 text-steel-500 text-[10px] uppercase font-bold">
          <span className="hover:text-gold-500 cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-gold-500 cursor-pointer transition-colors">LinkedIn</span>
          <button onClick={() => window.location.hash = '#admin'} className="hover:text-gold-500 cursor-pointer transition-colors opacity-30 hover:opacity-100">Admin Login</button>
        </div>
      </div>
    </footer>
  );
};

import { Admin } from './Admin';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hash, setHash] = useState(typeof window !== 'undefined' ? window.location.hash : '');
  const [siteImages, setSiteImages] = useState<SiteImageData | null>(null);
  const [imagesLoading, setImagesLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;
        if (!scriptUrl || scriptUrl === 'YOUR_APPS_SCRIPT_WEB_APP_URL' || !scriptUrl.startsWith('http')) {
          setImagesLoading(false);
          return;
        }

        const response = await fetch(scriptUrl, {
          method: 'GET',
          redirect: 'follow'
        });
        const data = await response.json();
        
        if (data.status === 'success' && data.data.length > 0) {
          setSiteImages(data.data);
        }
      } catch (err) {
        console.error('Error fetching site images:', err);
      } finally {
        setImagesLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openContactModal = () => setIsContactModalOpen(true);
  
  if (hash === '#admin') {
    return <Admin />;
  }
  
  return (
    <div className="min-h-screen bg-charcoal-950 font-sans text-white overflow-x-hidden">
      <Header openContactModal={openContactModal} />
      <Hero openContactModal={openContactModal} />
      <Services openContactModal={openContactModal} siteImages={siteImages} />
      <About siteImages={siteImages} />
      <Portfolio siteImages={siteImages} loading={imagesLoading} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
