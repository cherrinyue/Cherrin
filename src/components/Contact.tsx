import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { PERSONAL_INFO } from "../constants";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-sm">
          {/* Decorative element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-primary" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              Ready to innovate?
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-12">
              Available for high-impact AI product roles and freelance consulting. Let's transform your vision into an intelligent interface.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className={cn(
                  buttonVariants({ size: "lg" }), 
                  "rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/10 transition-all w-full md:w-auto flex items-center justify-center text-white"
                )}
              >
                Get in Touch
              </a>
              <div className="flex gap-4">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
