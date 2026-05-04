import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  ArrowRight, 
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const jobOpenings = [
  {
    title: "Senior Physiotherapist",
    department: "Clinical Services",
    location: "Bangalore",
    type: "Full-time",
    description: "Lead our physiotherapy team in providing expert rehabilitation care to patients with complex needs."
  },
  {
    title: "Rehabilitation Nurse",
    department: "Nursing",
    location: "Bangalore",
    type: "Full-time",
    description: "Provide compassionate and specialized nursing care to patients in our in-patient rehabilitation facility."
  },
  {
    title: "Occupational Therapist",
    department: "Clinical Services",
    location: "Bangalore",
    type: "Full-time",
    description: "Help patients regain independence in their daily activities through specialized occupational therapy."
  },
  {
    title: "Speech & Language Pathologist",
    department: "Clinical Services",
    location: "Bangalore",
    type: "Part-time",
    description: "Assess and treat patients with communication and swallowing disorders."
  }
];

const Careers = () => {
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
              <Users size={14} />
              Join Our Team
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Build a <span className="text-orange-500">Career</span> that Transforms Lives.
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed">
              At Swasthik Rehab & Pallative Care, we are looking for passionate professionals who are dedicated to excellence in rehabilitation and compassionate care.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600 fill-current">
            <path d="M100 0 L100 100 L0 100 C30 70 70 30 100 0 Z" />
          </svg>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Team at work" 
              className="rounded-[48px] shadow-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl -z-10" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Why Choose Swasthik Rehab & Pallative Care?</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We offer a supportive and dynamic environment where you can grow professionally while making a real difference in the lives of our patients.
            </p>
            <div className="space-y-4">
              {[
                "Collaborative and multidisciplinary team environment",
                "Opportunities for continuous learning and professional development",
                "State-of-the-art facilities and rehabilitation technology",
                "Competitive compensation and comprehensive benefits package",
                "A culture of compassion, excellence, and integrity"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-zinc-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Current Job Openings</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Explore our current opportunities and find the right role for you.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobOpenings.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                  <p className="text-sm text-zinc-400 font-medium">{job.department}</p>
                </div>
                <div className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  {job.type}
                </div>
              </div>
              <p className="text-zinc-600 mb-8 text-sm leading-relaxed">
                {job.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <MapPin size={14} />
                  {job.location}
                </div>
                <button className="flex items-center gap-2 text-orange-600 font-bold text-sm hover:gap-3 transition-all">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[48px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-900/10">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Don't see the right role?</h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
              We are always looking for talented and passionate individuals to join our team. Send us your resume and we'll keep you in mind for future openings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl">
                Submit Your Resume
              </button>
              <button className="px-10 py-5 bg-white/5 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
                Contact HR
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

export default Careers;
