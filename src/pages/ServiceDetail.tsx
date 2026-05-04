import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  X, 
  Info, 
  LayoutGrid, 
  CheckCircle2, 
  Medal, 
  Check, 
  Stethoscope as StethoscopeIcon, 
  ListChecks, 
  Users, 
  Award, 
  TrendingUp, 
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { rehabDomains } from '../data/rehabData';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const domain = rehabDomains.find(d => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!domain) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Service Not Found</h2>
          <Link to="/" className="text-orange-600 font-bold hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 pb-24">
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={domain.imageUrl} 
          alt={domain.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 lg:pb-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-orange-600/40">
                  <domain.icon size={40} />
                </div>
                <div>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4 inline-block">
                    {domain.category} Service
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                    {domain.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Overview & Components */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[40px] p-8 lg:p-12 shadow-xl shadow-zinc-200/50 border border-zinc-100"
            >
              <section className="mb-16">
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                  <Info size={16} /> Program Overview
                </h4>
                <p className="text-zinc-600 leading-relaxed text-xl mb-10">
                  {domain.description}
                </p>
                
                {domain.programComponents && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {domain.programComponents.map((comp, i) => (
                      <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-orange-200 transition-colors">
                        <h5 className="font-bold text-zinc-900 mb-3 text-lg">{comp.title}</h5>
                        <p className="text-zinc-500 leading-relaxed">{comp.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className="mb-16">
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                  <LayoutGrid size={16} /> Detailed Services
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {domain.fullServices?.map((service, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-zinc-50 rounded-2xl border border-zinc-100 hover:bg-white hover:shadow-md transition-all">
                      <CheckCircle2 className="text-orange-600 mt-0.5 shrink-0" size={20} />
                      <span className="font-medium text-zinc-700">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {domain.benefits && (
                <section>
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                    <Medal size={16} /> Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {domain.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                          <Check size={20} />
                        </div>
                        <span className="font-bold text-emerald-900">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>

            {domain.conditionsTreated && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[40px] p-8 lg:p-12 shadow-xl shadow-zinc-200/50 border border-zinc-100"
              >
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                  <StethoscopeIcon size={16} /> Conditions Treated
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {domain.conditionsTreated.map((group, i) => (
                    <div key={i} className="space-y-4">
                      <h5 className="font-bold text-zinc-900 flex items-center gap-3 text-lg">
                        <span className="w-3 h-3 rounded-full bg-orange-500" />
                        {group.category}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {group.conditions.map((cond, j) => (
                          <span key={j} className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-sm font-medium text-zinc-600">
                            {cond}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Who Benefits & Requirements */}
          <div className="space-y-8">
            {domain.acceptanceCriteria && (
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[40px] p-8 shadow-xl shadow-zinc-200/50 border border-zinc-100"
              >
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                  <ListChecks size={16} /> Acceptance Criteria
                </h4>
                <div className="space-y-4">
                  {domain.acceptanceCriteria.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 text-zinc-600 p-5 bg-blue-50/50 rounded-3xl border border-blue-100/50">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                        <Check size={14} />
                      </div>
                      <span className="font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {domain.whoCanBenefit && (
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[40px] p-8 shadow-xl shadow-zinc-200/50 border border-zinc-100"
              >
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                  <Users size={16} /> Who Can Benefit?
                </h4>
                <div className="space-y-3">
                  {domain.whoCanBenefit.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-zinc-600 p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[40px] p-8 shadow-xl shadow-zinc-200/50 border border-zinc-100"
            >
              <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                <Award size={16} /> Patient Requirements
              </h4>
              <div className="space-y-4">
                {domain.customerRequirements?.map((req, i) => (
                  <div key={i} className="flex items-center gap-4 text-zinc-600">
                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                    <span className="font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-orange-600 rounded-[40px] text-white shadow-2xl shadow-orange-200"
            >
              <h4 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6 flex items-center gap-2">
                <TrendingUp size={16} /> Success Metrics
              </h4>
              <p className="font-bold text-2xl mb-4">Outcome Focus</p>
              <p className="text-orange-50 text-lg italic leading-relaxed">"{domain.successMetrics}"</p>
              
              <button className="w-full mt-8 py-4 bg-white text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                Book Consultation <ArrowRight size={20} />
              </button>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
