import { motion } from "motion/react";
import { Code2, Search, ShoppingCart, Globe2, CreditCard, Megaphone } from "lucide-react";

const services = [
  {
    title: "Web App Development",
    description: "Custom, high-performance web applications built with the latest technologies like React and Node.js.",
    icon: <Code2 size={32} />,
    color: "bg-violet-50 text-violet-600"
  },
  {
    title: "SEO & Optimization",
    description: "Boost your search engine rankings and drive organic traffic with our data-driven SEO strategies.",
    icon: <Search size={32} />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Ecommerce Solutions",
    description: "Scalable online stores with seamless user experiences and secure checkout processes.",
    icon: <ShoppingCart size={32} />,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Domain & Hosting",
    description: "Reliable, high-speed hosting and domain management to keep your business online 24/7.",
    icon: <Globe2 size={32} />,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Payment Integration",
    description: "Secure and efficient payment gateway integrations for smooth financial transactions.",
    icon: <CreditCard size={32} />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to grow your brand presence and engage your audience.",
    icon: <Megaphone size={32} />,
    color: "bg-rose-50 text-rose-600"
  }
];

export default function Features() {
  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4">Our Services</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Comprehensive solutions for <br /> your digital success.
          </p>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            We provide a wide range of cutting-edge technology services to help your 
            business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 pt-6 border-t border-slate-50">
                <button className="text-brand-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
