import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-100 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-display font-bold text-brand-600">12+</div>
                <div className="text-sm text-slate-600 font-medium leading-tight">
                  Years of <br /> Excellence
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4">Our Story</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">
              We bridge the gap between <br /> vision and reality.
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2014, Nexus Dynamics started with a simple mission: to make 
              complex technology accessible and powerful for businesses of all sizes. 
              Today, we are a global team of engineers, designers, and strategists.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Client-centric approach to every project",
                "Dedicated R&D team for emerging technologies",
                "Agile methodology for rapid, iterative delivery",
                "Global support and maintenance 24/7"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-brand-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all shadow-lg">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
