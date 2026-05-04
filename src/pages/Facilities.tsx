import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Stethoscope, 
  Heart, 
  Users, 
  Activity,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';

const facilities = [
  {
    title: "In-patient Rehabilitation",
    description: "Comprehensive 24/7 care for patients requiring intensive rehabilitation after surgery, stroke, or severe injury. Our facility provides a supportive environment with round-the-clock medical supervision.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600",
    features: ["Private & Semi-private rooms", "24/7 Nursing care", "On-site diagnostic services", "Specialized nutrition plans"]
  },
  {
    title: "Out-patient Rehabilitation",
    description: "Flexible therapy sessions for patients who are living at home but require specialized rehabilitation services. We offer scheduled appointments to fit your daily routine.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600",
    features: ["Flexible scheduling", "State-of-the-art gym", "Specialized therapy equipment", "Progress tracking"]
  },
  {
    title: "Home-based Care",
    description: "Bringing expert rehabilitation services to the comfort of your home. Ideal for patients with mobility challenges or those who prefer a familiar environment.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800&h=600",
    features: ["Personalized home visits", "Family caregiver training", "Home safety assessment", "Equipment rental support"]
  },
  {
    title: "Tele-Rehabilitation",
    description: "Remote therapy sessions via secure video conferencing. Access our specialists from anywhere, ensuring continuity of care without the need for travel.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600",
    features: ["Secure video calls", "Digital exercise programs", "Remote monitoring", "Expert consultations"]
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 text-orange-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-orange-500/20">
              <Building2 size={14} />
              Our Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              World-Class <span className="text-orange-500">Facilities</span> for Your Recovery.
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed">
              Swasthik Rehab & Pallative Care combines state-of-the-art technology with compassionate care in a healing environment designed for optimal recovery.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600 fill-current">
            <path d="M100 0 L100 100 L0 100 C30 70 70 30 100 0 Z" />
          </svg>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {facilities.map((facility, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="relative">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="rounded-[48px] shadow-2xl w-full h-[500px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl -z-10" />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-bold tracking-tight">{facility.title}</h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {facility.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facility.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm font-medium text-zinc-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all group">
                  Learn more about this facility <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-orange-600 rounded-[48px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-600/20">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to visit our facility?</h2>
            <p className="text-orange-100 text-lg mb-12 max-w-2xl mx-auto">
              Schedule a personalized tour of our rehabilitation center and meet our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all shadow-xl">
                Book a Tour
              </button>
              <button className="px-10 py-5 bg-orange-700 text-white rounded-2xl font-bold text-lg hover:bg-orange-800 transition-all">
                Contact Admissions
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <circle cx="0" cy="0" r="50" />
              <circle cx="100" cy="100" r="50" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
