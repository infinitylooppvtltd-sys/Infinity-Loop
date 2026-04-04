import { Infinity, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                <Infinity size={20} />
              </div>
              <span className="text-lg font-display font-bold tracking-tight text-slate-900">InfinityLoop Pvt Ltd</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Unlimited solutions for your digital growth. Elevate your business 
              with cutting-edge technology and innovative digital strategies.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4">
              {["Web Development", "SEO & Optimization", "Ecommerce", "Domain & Hosting", "Digital Marketing"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Process", "Case Studies", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-6">
              Subscribe to get the latest tech insights and company news.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
              <button className="bg-brand-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-700 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© {currentYear} InfinityLoop Pvt Ltd. Made in Sri Lanka.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
