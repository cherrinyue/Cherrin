import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { Contact } from "@/components/Contact";
import { PERSONAL_INFO } from "@/constants";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white bg-slate-50 relative overflow-x-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-sky-100 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-12 bg-white text-slate-900 relative overflow-hidden z-10 border-y border-slate-100">
          {/* Futuristic Background elements */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          
          <motion.div 
            animate={{ 
              y: [-1000, 1000],
              opacity: [0, 0.4, 0]
            }} 
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 w-full h-[1px] bg-primary/20 z-0 pointer-events-none"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/10 rounded-md text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">
                    Core Intelligence
                  </div>
                  <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none text-slate-900">
                    About <span className="text-primary italic">{PERSONAL_INFO.name}</span>
                  </h2>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium">
                    Specializing in the intersection of <span className="text-slate-900 font-bold">Applied AI</span> and <span className="text-slate-900 font-bold">Human-Centric Interface Design</span>. 
                    I translate complex neural architectures into intuitive digital tools.
                  </p>
                </motion.div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {[
                  { title: "Stack", items: ["React / Vite", "Tailwind CSS", "TypeScript", "Node.js"] },
                  { title: "AI Models", items: ["Gemini 1.5 Pro", "Claude 3.5 Sonnet", "Stable Diffusion", "Whisper v3"] },
                  { title: "Expertise", items: ["UX for LLMs", "Multimodal Design", "Agentic Systems", "Rapid Prototyping"] }
                ].map((category, idx) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="p-8 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 group"
                  >
                    <h4 className="font-black text-[10px] mb-6 uppercase tracking-[0.2em] text-primary group-hover:translate-x-1 transition-transform">
                      {category.title}
                    </h4>
                    <ul className="space-y-4">
                      {category.items.map((item, i) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-slate-600 font-semibold group/item">
                          <motion.div 
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          />
                          <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="p-8 border border-primary/10 bg-primary/5 rounded-[2.5rem] flex items-center justify-center text-center shadow-inner"
                >
                  <div>
                    <div className="text-4xl font-black mb-2 text-primary">100%</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Innovation Focus</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Showcase />
        
        <Contact />
      </main>

      <footer className="h-24 px-6 md:px-12 border-t border-slate-200/60 bg-white flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] relative z-10">
        <div>© {new Date().getFullYear()} CHERRIN • DESIGNED FOR INTELLIGENCE</div>
        <div className="hidden md:flex space-x-8">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </footer>
      </div>
    </div>
  );
}

