
import React from 'react';
import { Github, Linkedin, Mail, Code, Terminal, Brackets, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onPageChange?: (page: string) => void;
}

const HomePage = ({ onPageChange }: HomePageProps) => {
  const handleContactClick = () => {
    if (onPageChange) {
      onPageChange('contact');
    }
  };

  const handleViewProjectsClick = () => {
    if (onPageChange) {
      onPageChange('projects');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center animate-page-enter pt-32 md:pt-24 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Professional Developer Logo - Smaller Card Design */}
        <div className="mb-6 relative">
          <div className="group mx-auto w-32 h-20 md:w-40 md:h-24 glass rounded-xl p-4 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl"></div>
            
            {/* Main content */}
            <div className="relative h-full flex flex-col justify-between">
              {/* Top section with dev icons */}
              <div className="flex justify-between items-start">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
                </div>
                <Terminal 
                  size={14} 
                  className="text-teal-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" 
                />
              </div>
              
              {/* Center code representation */}
              <div className="flex-1 flex items-center justify-center">
                <div className="font-mono text-sm md:text-base flex items-center space-x-1">
                  <span className="text-teal-400 group-hover:scale-110 transition-all duration-500">&lt;</span>
                  <span className="text-indigo-400 group-hover:scale-125 transition-all duration-500">DEV</span>
                  <span className="text-teal-400 group-hover:scale-110 transition-all duration-500">/&gt;</span>
                </div>
              </div>
              
              {/* Bottom section with code lines */}
              <div className="space-y-0.5">
                <div className="flex space-x-1 items-center">
                  <div className="w-1.5 h-0.5 bg-teal-400/60 rounded"></div>
                  <div className="w-6 h-0.5 bg-indigo-400/40 rounded"></div>
                  <div className="w-3 h-0.5 bg-purple-400/40 rounded"></div>
                </div>
                <div className="flex space-x-1 items-center">
                  <div className="w-2 h-0.5 bg-indigo-400/60 rounded"></div>
                  <div className="w-4 h-0.5 bg-teal-400/40 rounded"></div>
                  <div className="w-1.5 h-0.5 bg-purple-400/40 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-400/5 to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Side accent lines */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-teal-500 to-indigo-500 rounded-r opacity-60"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-4 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-l opacity-40"></div>
          </div>
          
          {/* Floating accent elements - smaller */}
          <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-teal-500 rounded-lg rotate-45 animate-pulse shadow-lg shadow-teal-500/50" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 md:w-3 md:h-3 bg-indigo-500 rounded-lg rotate-45 animate-pulse delay-150 shadow-lg shadow-indigo-500/50" />
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="gradient-text">El Almi Youssef</span>
        </h1>
        
        <div className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 font-light">
          Full Stack Developer & Software Engineer
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with cutting-edge technologies. 
          Passionate about clean code, innovative solutions, and turning ideas into reality.
        </p>

        {/* View Projects Button */}
        <div className="mb-8">
          <button
            onClick={handleViewProjectsClick}
            className="
              group bg-teal-600 hover:bg-teal-700 text-white 
              px-8 py-4 rounded-xl font-semibold cursor-hover
              transition-all duration-300 hover-glow hover-lift
              flex items-center space-x-3 mx-auto
              hover:shadow-teal-500/50 hover:scale-105
            "
            data-cursor-type="hover"
          >
            <Code size={20} className="group-hover:rotate-12 transition-all duration-300" />
            <span>View My Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>
 
        {/* Social Links with Enhanced Animations */}
        <div className="flex justify-center space-x-6 md:space-x-8">
          {[
            { icon: Github, href: 'https://github.com/eayzex', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:elalmiyoussef03@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group w-12 h-12 md:w-14 md:h-14 glass rounded-full flex items-center justify-center
                text-slate-400 hover:text-teal-400 cursor-hover
                hover-lift hover-glow transition-all duration-300
                hover:shadow-teal-500/30 hover:bg-teal-500/10
              "
              data-cursor-type="hover"
              aria-label={label}
            >
              <Icon 
                size={20} 
                className="md:w-6 md:h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" 
              />
            </a>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 md:w-3 md:h-3 bg-teal-400/30 rounded-full animate-float" 
             style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 md:w-4 md:h-4 bg-indigo-400/30 rounded-full animate-float" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400/30 rounded-full animate-float" 
             style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default HomePage;
