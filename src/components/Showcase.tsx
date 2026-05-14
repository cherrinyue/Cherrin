import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { PROJECTS } from "../constants";

export const Showcase = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 gap-4">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="text-slate-400 uppercase text-xs tracking-widest font-bold">Selected AI Work • 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-500 rounded-[2.5rem] group h-full flex flex-col">
                <div className="p-8 pb-4 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {project.title.charAt(0)}
                    </div>
                    <Badge variant="secondary" className="bg-slate-50 text-slate-400 border border-slate-100 text-[10px] py-1 px-3 uppercase tracking-widest font-bold">
                      {project.type}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3 text-slate-900">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-2 py-1 bg-slate-50 rounded border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-8 py-5 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    View Product <ExternalLink className="h-3 w-3" />
                  </a>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white ring-1 ring-slate-100" />
                    <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white ring-1 ring-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">+3</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
