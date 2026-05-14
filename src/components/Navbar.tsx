import { motion } from "motion/react";
import { PERSONAL_INFO } from "@/constants";

const PolarBearIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Head */}
    <path d="M12 21C16 21 19 18 19 13C19 8 16 5 12 5C8 5 5 8 5 13C5 18 8 21 12 21Z" fill="white" fillOpacity="0.2" />
    {/* Nose/Muzzle */}
    <path d="M12 17C13.5 17 14.5 16 14.5 14.5C14.5 13 13.5 12 12 12C10.5 12 9.5 13 9.5 14.5C9.5 16 10.5 17 12 17Z" fill="currentColor" />
    {/* Eyes */}
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    {/* Ears */}
    <path d="M7 6C6 5 4 5 4 7C4 9 5 10 6 10" />
    <path d="M17 6C18 5 20 5 20 7C20 9 19 10 18 10" />
  </svg>
);

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 p-1.5">
            <PolarBearIcon className="h-full w-full" />
          </div>
          <span className="font-bold tracking-tight text-xl text-slate-900">{PERSONAL_INFO.name}</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors">Home</a>
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
          <a href="#work" className="text-slate-600 hover:text-slate-900 transition-colors">Portfolio</a>
          <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors">Contact Me</a>
        </div>
      </div>
    </motion.nav>
  );
};
