import { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import ServiceDetail from './pages/ServiceDetail';
import Facilities from './pages/Facilities';
import Careers from './pages/Careers';

// ScrollToTop component to reset scroll position on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
import { 
  ChevronRight, 
  Download, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  Award,
  Menu,
  X,
  ArrowRight,
  Plus,
  CheckCircle2,
  ListChecks,
  Check,
  Info,
  Calendar,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  LayoutGrid,
  Activity as ActivityIcon,
  Stethoscope as StethoscopeIcon,
  Heart,
  Users,
  Wind as WindIcon,
  Baby as BabyIcon,
  Zap,
  ShieldCheck as OncologyIcon,
  MessageSquare,
  Timer,
  Medal,
  Droplets,
  Target,
  FileText,
  HeartHandshake,
} from 'lucide-react';
import { rehabDomains, RehabDomain } from './data/rehabData';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'domains' | 'about'>('domains');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const categories = ['All', 'Pallative', 'Specialized', 'Modern', 'Core'];
  const filteredDomains = selectedCategory === 'All' 
    ? rehabDomains 
    : rehabDomains.filter(d => d.category === selectedCategory);

  const GOOGLE_MAPS_API_KEY =
    process.env.GOOGLE_MAPS_PLATFORM_KEY ||
    (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
    (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
    '';
  const hasValidKey = Boolean(GOOGLE_MAPS_API_KEY) && GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY';

  const scrollToSection = (id: string, tab?: 'domains' | 'about') => {
    if (tab) setActiveTab(tab);
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80; // height of sticky nav
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
              <Award size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight leading-none">Swasthik</span>
              <span className="text-[10px] font-medium text-zinc-500 tracking-wider uppercase">Rehab & Pallative Care</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {/* Home Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('home')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors py-8">
                Home <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'home' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'home' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-white border border-zinc-100 rounded-2xl shadow-xl p-2"
                  >
                    <Link to="/" onClick={() => { scrollToSection('services', 'domains'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-left px-4 py-2 text-sm text-zinc-600 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all">Welcome</Link>
                    <Link to="/" onClick={() => scrollToSection('about', 'about')} className="block w-full text-left px-4 py-2 text-sm text-zinc-600 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all">Our Mission</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/facilities"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors py-8"
            >
              Facilities
            </Link>

            {/* Rehab Specialties Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('specialties')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors py-8 border-b-2 border-orange-600">
                Rehab Specialties <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'specialties' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'specialties' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-72 bg-white border border-zinc-100 rounded-2xl shadow-xl p-2 grid grid-cols-1 gap-1"
                  >
                    {[
                      { id: 'neurological', title: 'Neuro Rehab', icon: Zap },
                      { id: 'physical', title: 'Ortho Rehab', icon: ActivityIcon },
                      { id: 'pulmonary', title: 'Pulmonary Rehab', icon: WindIcon },
                      { id: 'cardiac', title: 'Cardiac Rehab', icon: Heart },
                      { id: 'pediatric', title: 'Pediatric Rehab', icon: BabyIcon },
                      { id: 'onco', title: 'Onco Rehab', icon: OncologyIcon },
                      { id: 'geriatric', title: 'Geriatric Rehab', icon: Users },
                      { id: 'post-op', title: 'Post OP Rehab', icon: StethoscopeIcon },
                    ].map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => {
                          const domain = rehabDomains.find(d => d.id === item.id);
                          if (domain) {
                            navigate(`/service/${domain.id}`);
                          }
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-zinc-600 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all flex items-center gap-3"
                      >
                        <div className="w-8 h-8 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-orange-600 group-hover:bg-orange-100 transition-colors">
                          <item.icon size={16} />
                        </div>
                        {item.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => scrollToSection('about', 'about')}
              className={`text-sm font-medium transition-colors ${activeTab === 'about' ? 'text-orange-600' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              About Us
            </button>
            <Link 
              to="/careers"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors py-8"
            >
              Careers
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              Contact Us
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
            >
              <div className="p-6 space-y-6">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Navigation</p>
                  <Link to="/" onClick={() => { setIsMenuOpen(false); scrollToSection('services', 'domains'); }} className="block w-full text-left text-lg font-bold">Home</Link>
                  <Link to="/facilities" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-lg font-bold">Facilities</Link>
                  <Link to="/careers" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-lg font-bold">Careers</Link>
                  <button onClick={() => { setIsMenuOpen(false); scrollToSection('about', 'about'); }} className="block w-full text-left text-lg font-bold">About Us</button>
                  <button onClick={() => { setIsMenuOpen(false); scrollToSection('contact'); }} className="block w-full text-left text-lg font-bold">Contact Us</button>
                </div>
                
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Rehab Specialties</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'palliative', title: 'Rehab & Pallative Care' },
                      { id: 'onco', title: 'Onco Rehab' },
                      { id: 'cardiac', title: 'Cardiac Rehab' },
                      { id: 'neurological', title: 'Neurological Rehab' },
                      { id: 'pulmonary', title: 'Pulmonary Rehab' },
                      { id: 'occupational', title: 'Occupational Rehab' },
                      { id: 'physical', title: 'Physical Rehab' },
                      { id: 'geriatric', title: 'Geriatric Rehab' },
                      { id: 'post-op', title: 'Post OP Rehab' },
                    ].map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => {
                          const domain = rehabDomains.find(d => d.id === item.id);
                          if (domain) {
                            navigate(`/service/${domain.id}`);
                          }
                          setIsMenuOpen(false);
                        }}
                        className="text-zinc-600 hover:text-orange-600 transition-colors text-sm py-1 text-left"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setActiveTab('domains');
                    setIsMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Rehab Facility" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 via-transparent to-white" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 text-orange-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-orange-200/50 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
              Healing with Compassion
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-zinc-900">
              Restoring Life at <br />
              <span className="text-orange-600 relative inline-block">
                Swasthik Rehab & Pallative Care
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-2 bg-orange-200/50 -z-10 rounded-full" 
                />
              </span>
            </h1>
            
            <p className="text-xl text-zinc-600 max-w-xl leading-relaxed mb-12 font-medium">
              A state-of-the-art facility dedicated to functional restoration, pain management, and holistic recovery for patients and families.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services', 'domains')}
                className="px-10 py-5 bg-orange-600 text-white rounded-[24px] font-bold text-lg hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/30 flex items-center gap-3 group"
              >
                View Our Services 
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-10 py-5 bg-white/80 backdrop-blur-md border border-zinc-200 text-zinc-900 rounded-[24px] font-bold text-lg hover:bg-white transition-all flex items-center gap-3 shadow-xl shadow-zinc-200/50"
              >
                <Calendar size={22} className="text-orange-600" /> 
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-64 h-64 bg-orange-400/10 rounded-full blur-[100px] -z-0 pointer-events-none" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[20%] w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] -z-0 pointer-events-none" 
        />
      </header>

      <main id="services" className="max-w-7xl mx-auto px-6 pb-24">
        {activeTab === 'domains' ? (
          <>
            {/* Category Filter */}
            <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                    ? 'bg-zinc-900 text-white shadow-md' 
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Domains Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredDomains.map((domain, index) => (
                  <motion.div
                    layout
                    key={domain.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => navigate(`/service/${domain.id}`)}
                    className="group bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:border-orange-200 hover:shadow-[0_32px_64px_-12px_rgba(251,146,60,0.15)] transition-all duration-500 cursor-pointer relative aspect-[4/3]"
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={domain.imageUrl} 
                        alt={domain.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                      
                      {/* Glass Category Tag */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl">
                          {domain.category}
                        </span>
                      </div>
                      
                      {/* Floating Icon on Image */}
                      <div className="absolute bottom-6 left-8 right-8 flex items-center gap-4">
                        <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-orange-600/40 group-hover:scale-110 transition-transform duration-500 shrink-0">
                          <domain.icon size={28} />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-white leading-tight">
                            {domain.title}
                          </h3>
                          <div className="flex items-center text-orange-400 text-xs font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                            Learn More <ArrowRight size={14} className="ml-2" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-2xl">
                        <ArrowRight size={24} />
                      </div>
                    </div>

                    {/* Subtle Shimmer Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <motion.div 
            id="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-24"
          >
            <section className="relative rounded-[60px] overflow-hidden bg-zinc-900 text-white p-12 lg:p-24">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=1000" alt="Facility" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-8 block">Our Mission</span>
                <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[0.95]">Reclaiming Life, <br />One Step at a Time.</h2>
                <p className="text-zinc-400 text-xl mb-12 leading-relaxed">
                  We believe that rehabilitation is not just about physical recovery; it's about reclaiming your life. Our interdisciplinary team works tirelessly to provide personalized care that addresses the unique needs of every patient.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  {[
                    { title: 'Expert Clinicians', icon: <Users size={20} /> },
                    { title: 'Modern Equipment', icon: <Zap size={20} /> },
                    { title: 'Holistic Approach', icon: <Heart size={20} /> },
                    { title: 'Family Support', icon: <MessageSquare size={20} /> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <span className="font-bold text-zinc-300">{item.title}</span>
                    </div>
                  ))}
                </div>
                <button className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/20">
                  Learn More About Our Mission
                </button>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  icon: <Globe size={32} />, 
                  title: "Interdisciplinary Team", 
                  color: "bg-orange-50 text-orange-600",
                  desc: "Our specialists collaborate across domains to address the whole person's recovery needs, ensuring no aspect of health is overlooked." 
                },
                { 
                  icon: <TrendingUp size={32} />, 
                  title: "Evidence-Based Care", 
                  color: "bg-emerald-50 text-emerald-600",
                  desc: "We utilize the latest clinical research and state-of-the-art technology to deliver treatments that are proven to be effective." 
                },
                { 
                  icon: <ShieldCheck size={32} />, 
                  title: "Compassionate Support", 
                  color: "bg-blue-50 text-blue-600",
                  desc: "Beyond clinical excellence, we provide emotional and psychosocial support to help patients and families navigate the journey of recovery." 
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`w-20 h-20 ${feature.color} rounded-3xl flex items-center justify-center mb-8 shadow-inner`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-zinc-500 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </section>
          </motion.div>
        )}
      </main>

      {/* Why Swasthik Rehab & Pallative Care Section */}
      <section className="py-32 relative overflow-hidden bg-zinc-900">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 -z-0" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="text-center mb-20">
                <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Excellence</span>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[0.95] text-white">
                  Why Swasthik Rehab & Pallative Care is the <br /> 
                  <span className="text-orange-600">Trusted Choice</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: <Users className="text-white" size={32} />, 
                    title: "Expert Multidisciplinary Team", 
                    desc: "Our specialists include neurologists, physiotherapists, and psychologists working in sync." 
                  },
                  { 
                    icon: <ShieldCheck className="text-white" size={32} />, 
                    title: "Evidence-Based Protocols", 
                    desc: "Every treatment plan is backed by the latest clinical research and data analytics." 
                  },
                  { 
                    icon: <Heart className="text-white" size={32} />, 
                    title: "Patient-Centric Approach", 
                    desc: "We don't just treat conditions; we care for people and their families." 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-[48px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-600/50 transition-all duration-500 group flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 bg-orange-600/20 border border-orange-600/30 rounded-3xl flex items-center justify-center shrink-0 mb-8 group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">{item.title}</h4>
                      <p className="text-zinc-400 leading-relaxed text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialists Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
            >
              Medical Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Swasthik Rehab & Pallative Care <span className="text-orange-600">Specialists</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 text-lg max-w-2xl mx-auto"
            >
              A multidisciplinary team of world-class experts dedicated to your recovery and well-being.
            </motion.p>
          </div>

          {/* The "Big Box" Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white border border-zinc-100 rounded-[60px] p-8 md:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group/bigbox"
          >
            {/* Background Effects for the Big Box */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-[100px] -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {[
                {
                  title: "Doctors",
                  icon: <StethoscopeIcon size={32} />,
                  items: ["General Physicians", "Critical Care Physicians", "Specialists on Call"],
                  gradient: "from-blue-500 to-blue-600",
                  bg: "bg-blue-50/80",
                  accent: "text-blue-600",
                  border: "border-blue-100",
                  shadow: "shadow-blue-200/40"
                },
                {
                  title: "Rehab Therapists",
                  icon: <ActivityIcon size={32} />,
                  items: ["Physiotherapists", "Speech Therapists", "Occupational Therapists", "Respiratory Therapists", "Clinical Psychologists", "Nutritionists"],
                  gradient: "from-orange-500 to-orange-600",
                  bg: "bg-orange-50/80",
                  accent: "text-orange-600",
                  border: "border-orange-100",
                  shadow: "shadow-orange-200/40"
                },
                {
                  title: "Nurses",
                  icon: <ShieldCheck size={32} />,
                  items: ["ICU Nurses", "Rehab Nurses"],
                  gradient: "from-emerald-500 to-emerald-600",
                  bg: "bg-emerald-50/80",
                  accent: "text-emerald-600",
                  border: "border-emerald-100",
                  shadow: "shadow-emerald-200/40"
                },
                {
                  title: "Paediatric Therapists",
                  icon: <BabyIcon size={32} />,
                  items: ["Paediatric Physio", "Early Intervention", "Behavioral Therapists", "Special Educators"],
                  gradient: "from-violet-500 to-violet-600",
                  bg: "bg-violet-50/80",
                  accent: "text-violet-600",
                  border: "border-violet-100",
                  shadow: "shadow-violet-200/40"
                },
                {
                  title: "Holistic Therapists",
                  icon: <WindIcon size={32} />,
                  items: ["Yoga Instructors", "Ayurvedic Therapists"],
                  gradient: "from-rose-500 to-rose-600",
                  bg: "bg-rose-50/80",
                  accent: "text-rose-600",
                  border: "border-rose-100",
                  shadow: "shadow-rose-200/40"
                }
              ].map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -12 }}
                  className={`relative p-8 rounded-[40px] border ${category.border} ${category.bg} hover:bg-white hover:shadow-xl ${category.shadow} transition-all duration-500 group flex flex-col h-full`}
                >
                  {/* Floating Icon Container */}
                  <motion.div 
                    animate={{ 
                      y: [0, -6, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: idx * 0.5
                    }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white mb-6 shadow-xl shadow-current/20 group-hover:scale-110 transition-transform duration-500`}
                  >
                    {category.icon}
                  </motion.div>

                  <h3 className={`text-2xl font-bold mb-6 ${category.accent} tracking-tight leading-tight`}>{category.title}</h3>
                  
                  <ul className="space-y-3 flex-grow">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-700 font-semibold text-base">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} shadow-md shadow-current/10`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Corner Element */}
                  <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-white/40 blur-lg group-hover:bg-gradient-to-br ${category.gradient} group-hover:opacity-10 transition-all duration-700`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-50 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Voices of <span className="text-orange-600">Recovery</span></h2>
              <p className="text-zinc-500 mt-6 text-lg">Hear from the families and individuals who have reclaimed their independence through our specialized care programs.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-end">
                <span className="text-3xl font-bold text-zinc-900">500+</span>
                <span className="text-sm text-zinc-500 font-medium">Successful Recoveries</span>
              </div>
              <div className="w-px h-12 bg-zinc-200" />
              <div className="flex flex-col items-end">
                <span className="text-3xl font-bold text-zinc-900">4.9/5</span>
                <span className="text-sm text-zinc-500 font-medium">Patient Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Kumar",
                role: "Post-Stroke Recovery",
                text: "The neurological rehab team at Swasthik Rehab & Pallative Care didn't just help me walk again; they gave me back my confidence. The interdisciplinary approach made all the difference.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                name: "Priya Sharma",
                role: "Cardiac Rehab Patient",
                text: "After my surgery, I was terrified of physical activity. The monitored exercise program and nutritional guidance here were life-changing. I feel stronger than ever.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                name: "Anita Desai",
                role: "Rehab & Pallative Care Family",
                text: "The compassion shown to my father during his final months was incredible. They managed his pain perfectly and provided our family with much-needed emotional support.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Plus key={i} size={12} className="text-orange-500 fill-orange-500" />)}
                </div>
                <p className="text-zinc-600 mb-6 italic leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-xs">{t.name}</h5>
                    <p className="text-[10px] text-zinc-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section (from screenshot) */}
      <section className="py-24 px-6 bg-white overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <motion.img 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=500" 
                  alt="Rehab 1" 
                  className="rounded-3xl shadow-2xl w-full object-cover h-64"
                  referrerPolicy="no-referrer"
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=500" 
                  alt="Rehab 2" 
                  className="rounded-3xl shadow-2xl w-full object-cover h-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <motion.img 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=400&h=500" 
                  alt="Rehab 3" 
                  className="rounded-3xl shadow-2xl w-full object-cover h-80"
                  referrerPolicy="no-referrer"
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400&h=500" 
                  alt="Rehab 4" 
                  className="rounded-3xl shadow-2xl w-full object-cover h-64"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative leaf/flower elements as seen in screenshot */}
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 100" className="text-green-800 fill-current">
                <path d="M50 0C50 0 45 20 30 35C15 50 0 50 0 50C0 50 20 55 35 70C50 85 50 100 50 100C50 100 55 80 70 65C85 50 100 50 100 50C100 50 80 45 65 30C50 15 50 0 50 0Z" />
              </svg>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
              why Choose Us ?
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Transform Your Life with <br />
              <span className="text-green-600 italic font-serif">Expert Rehab Services</span>
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              At Swasthik Rehab & Pallative Care, we provide personalized, compassionate care tailored to your needs. Our team of expert physiotherapists and specialists is dedicated to helping you regain your strength and mobility.
            </p>
            
            <div className="space-y-4">
              {[
                "Personalized rehab programs designed for your specific needs",
                "State-of-the-art equipment and facilities",
                "Experienced and certified rehab professionals",
                "Comfortable, supportive environment to aid recovery"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-zinc-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-6">
              <p className="font-bold text-zinc-900">Start Your Recovery Today – Book a Free Assessment!</p>
              <button className="px-10 py-5 bg-[#2D3E2F] text-white rounded-xl font-bold text-lg hover:bg-[#1A251C] transition-all shadow-xl shadow-zinc-900/10">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4 block">Institutional Excellence</span>
              <h2 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.9] text-zinc-900">
                Infrastructure.
              </h2>
            </div>
            <p className="text-zinc-500 text-lg max-w-xs leading-relaxed text-right">
              A definitive survey of our premium medical services and specialized rehabilitation corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[160px]">
            {/* Advanced Physiotherapy */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: '#FDF2F0' }}
              className="md:col-span-2 md:row-span-2 bg-[#E9EBEA] rounded-3xl p-6 relative overflow-hidden group transition-colors duration-300"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 block">Service 01</span>
                  <h3 className="text-3xl font-bold text-zinc-900 leading-tight mb-2">Advanced <br />Physiotherapy</h3>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs max-w-[180px] leading-relaxed">
                    Neuro-muscular integration and specialized recovery protocols.
                  </p>
                  <div className="mt-4 w-10 h-10 bg-[#004D40] rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <ArrowRight size={18} className="-rotate-45" />
                  </div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" 
                alt="Physiotherapy" 
                className="absolute right-[-5%] bottom-[-5%] w-2/3 h-2/3 object-contain opacity-40 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* 24/7 Medical Supervision */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: '#005D4E' }}
              className="md:col-span-2 bg-[#004D40] rounded-3xl p-6 relative overflow-hidden text-white transition-colors duration-300 group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">24/7 Medical Supervision</h3>
                <p className="text-emerald-100/60 text-xs max-w-xs font-medium">
                  Physician-led oversight around the clock for continuous patient safety.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
                alt="Medical Supervision" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-6 bottom-6 opacity-20 z-0">
                <StethoscopeIcon size={80} />
              </div>
            </motion.div>

            {/* Psychologist */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: '#FFD8C2' }}
              className="bg-[#FFE5D4] rounded-3xl p-5 flex flex-col justify-between transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-orange-800/60 uppercase tracking-widest mb-2 block">Mental Health</span>
                <h4 className="text-lg font-bold text-orange-900">Psychologist</h4>
              </div>
              <p className="relative z-10 text-orange-900/80 text-[10px] leading-relaxed font-medium">
                Dedicated counseling for cognitive recovery and trauma care.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" 
                alt="Psychology" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Exercise Corridor */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-zinc-200 rounded-3xl relative overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" 
                alt="Exercise Corridor" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <span className="text-white font-bold text-center px-4 uppercase tracking-widest text-xs drop-shadow-md">Exercise <br />Corridor</span>
              </div>
            </motion.div>

            {/* Inhouse Rehab Kitchen */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: '#F0F4F2' }}
              className="bg-[#E9EBEA] rounded-3xl p-6 flex flex-col justify-between transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="relative z-10 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700">
                <Droplets size={16} />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-zinc-900 text-sm mb-1">Inhouse Rehab Kitchen</h4>
                <p className="text-zinc-600 text-[10px] font-medium">Nutrition as a core pillar of recovery.</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400" 
                alt="Kitchen" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Dietician & Nutrition */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: '#005D4E' }}
              className="bg-[#004D40] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden text-white transition-colors duration-300 group"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1">Dietician & Nutrition</h3>
                <p className="text-emerald-100/80 text-[8px] uppercase tracking-widest font-bold">Custom Meal Plans</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600" 
                alt="Nutrition" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 flex justify-end">
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                  <Check size={12} />
                </div>
              </div>
            </motion.div>

            {/* 24/7 Pharmacy */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: '#FFF7ED' }}
              className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-sm border border-zinc-100 transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="relative z-10 w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-2">
                <ShieldCheck size={20} />
              </div>
              <h4 className="relative z-10 font-bold text-zinc-900 text-xs">24/7 Pharmacy</h4>
              <img 
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400" 
                alt="Pharmacy" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Diagnostic Support */}
            <motion.div 
              whileHover={{ y: -5, backgroundColor: '#F0F4F2' }}
              className="bg-[#E9EBEA] rounded-[40px] p-6 flex flex-col justify-between transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-zinc-900 mb-1">Diagnostic Support</h3>
                <p className="text-zinc-600 text-[10px] leading-relaxed font-medium">
                  Imaging and pathology located on-premise.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
                alt="Diagnostic" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* 24/7 Ambulance Support */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-[#0F172A] rounded-[40px] flex flex-col md:flex-row shadow-2xl overflow-hidden group transition-all duration-500"
            >
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=80&w=800" 
                  alt="Ambulance" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F172A]/40" />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative bg-[#0F172A]">
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.3em] mb-4 block">Emergency Logistics</span>
                <h3 className="text-3xl font-bold text-white leading-tight mb-4">24/7 Ambulance <br />Support</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Our rapid-response fleet ensures that world-class clinical care is never out of reach. Each unit is a mobile ICU.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-4 py-2 bg-white text-[#0F172A] rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors">
                    Emergency Hotline
                  </button>
                  <span className="text-red-500 font-bold text-sm">+1 (800) 911-REHAB</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Path to Recovery Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">Your Path to Recovery</h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '01', title: 'Assessment', description: 'Comprehensive clinical and functional evaluation.' },
            { number: '02', title: 'Planning', description: 'Customized multi-disciplinary recovery roadmap.' },
            { number: '03', title: 'Therapy', description: 'Intensive, tech-enabled rehabilitation sessions.' },
            { number: '04', title: 'Reintegration', description: 'Support for returning to home and work life.' },
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white text-base font-bold mb-4 shadow-lg shadow-emerald-100">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-zinc-900 rounded-[32px] overflow-hidden relative shadow-2xl shadow-orange-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 text-orange-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-orange-500/20">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                Enrollment Open
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
                Start your <span className="text-orange-500">recovery</span> today.
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-md">
                Don't wait to reclaim your health. Our specialists are ready to design a personalized path back to your best self.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Call for Appointment</p>
                    <p className="text-xl font-bold">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-20 bg-white/5 backdrop-blur-md border-l border-white/10 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award size={120} />
              </div>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Service of Interest</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                        <option className="bg-zinc-900" value="">Select a service</option>
                        {rehabDomains.map((domain) => (
                          <option key={domain.id} value={domain.id} className="bg-zinc-900">
                            {domain.title}
                          </option>
                        ))}
                        <option className="bg-zinc-900" value="other">Other Services</option>
                      </select>
                      <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-zinc-500 pointer-events-none" size={16} />
                    </div>
                  </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Message (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Briefly describe your requirements..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center gap-3">
                  Submit Enrollment Request <ArrowRight size={20} />
                </button>
                <p className="text-center text-[10px] text-zinc-500 font-medium">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Award size={32} className="text-orange-500" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">Swasthik</span>
                <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase block mt-1">Rehab & Pallative Care</span>
              </div>
            </div>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              Healing with compassion, restoring with expertise. Swasthik Rehab & Pallative Care is your partner in the journey back to health and independence.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <MapPin size={16} className="text-orange-500" />
                <span>123 Medical Enclave, Health City, Bangalore</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Phone size={16} className="text-orange-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Clock size={16} className="text-orange-500" />
                <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><button onClick={() => scrollToSection('services', 'domains')} className="hover:text-white transition-colors">Our Services</button></li>
              <li><Link to="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><button onClick={() => scrollToSection('about', 'about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Patient Stories</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Support</h5>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-zinc-500 text-xs text-center md:text-left">
          <p>© 2026 Swasthik Rehab & Pallative Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 group"
      >
        <div className="absolute -top-12 right-0 bg-white text-zinc-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-100">
          Chat with us on WhatsApp
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white rotate-45 border-r border-b border-zinc-100" />
        </div>
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </Router>
  );
}
