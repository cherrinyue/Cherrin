import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button.tsx";
import { cn } from "../lib/utils.ts";
import { PERSONAL_INFO } from "../constants.ts";

export const Hero = () => {
  return (
    <section id="home" className="pt-40 md:pt-48 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 border border-primary/20 uppercase tracking-wider">
            AI Product Specialist
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-slate-900">
            Curating the next generation of <span className="text-primary">intelligent experiences.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
            Helping clients integrate cutting-edge AI tools into their workflows. Browse my latest featured projects and products below.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#work" 
              className={cn(
                buttonVariants({ size: "lg" }), 
                "rounded-full px-8 h-14 text-md bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all font-bold text-white"
              )}
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }), 
                "rounded-full px-8 h-14 text-md border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900 transition-all font-bold"
              )}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
