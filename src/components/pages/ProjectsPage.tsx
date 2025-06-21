import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Triddle - Fragmented Form Builder',
      description: 'Triddle is a full-stack form builder application designed to deliver a seamless experience for both creators and respondents. Built with cutting-edge technologies, it offers a dynamic, responsive frontend and a robust, secure backend—empowering users to easily create, manage, and share custom forms.',
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Express.js"],
      image: 'https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1747235154927_Screenshot2025-05-14at160546.png',
      liveDemo: 'https://new-front-repo-3e9hsb3xe-eayzexs-projects.vercel.app/',
      github: 'https://github.com/eayzex/tridlle-final-project-fr.git',
      category: 'Web App',
      icon: Globe
    },
    {
      id: 2,
      title: '1 CONFIRMED - Independent web platform',
      description: '1CONFIRMED is a dedicated independent web platform tailored for hotel bookings in Morocco. It offers travelers a seamless and intelligent experience to discover and reserve accommodations that suit all preferences—from luxury resorts to budget-friendly options.',
      tech: ["Next", "TypeScript", "Node.js", "Express", "MongoDB"],
      image: 'https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1746707185577_1confirmedphoto.png',
      liveDemo: 'https://1cnfrmd-front.vercel.app/',
      github: 'https://github.com/eayzex/1cnfrmd-front',
      category: 'Web App',
      icon:Globe
    },
    {
      id: 3,
      title: 'MorocStay - Hotel Booking Platform',
      description: 'MorocStay is a hotel booking platform that allows users to search for hotels, book rooms, and manage their bookingsMorocStay is a smart and seamless hotel booking platform designed to connect travelers with the best stays across Morocco. Whether youre planning a luxurious getaway, a family vacation, or a spontaneous weekend escape, MorocStay offers a curated selection of accommodations to suit every style and budget..',
      tech: ["ReactVite", "TypeScript", "NodeJs", "Express", "MongoDB", ],
      image: 'https://i.imgur.com/zFDRGsA.png',
      liveDemo: 'https://hotels-booking-vg4f.vercel.app/login',
      github: 'https://github.com/eayzex/hotels-booking-.git',
      category: 'Mobile App',
      icon: Globe  
    },
    {
      id: 3,
      title: 'Talaty – Smart eKYC & Business Scoring Platform',
      description: "Talaty is a smart eKYC and business scoring platform designed to streamline the process of verifying identities and assessing business credibility. It leverages advanced technologies to provide secure, efficient, and reliable solutions for businesses looking to enhance their customer onboarding and risk management processes.",
      tech: ["ReactVite", "TypeScript", "NodeJs", "Express", "MongoDB", ],
      image: 'https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1748342924063_PhotoTalatyPay.jpeg',
      liveDemo: 'https://talaty-kappa.vercel.app/',
      github: 'https://github.com/eayzex/talaty.git',
      category: 'Mobile App',
      icon: Globe  
    },
  ];

  return (  
    <div className="min-h-screen py-20 animate-page-enter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, 
            mobile apps, and innovative solutions built with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass rounded-2xl overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 glass px-3 py-1 rounded-full">
                    <project.icon size={16} className="text-teal-400" />
                    <span className="text-sm text-slate-300">{project.category}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10 glass rounded-full flex items-center justify-center
                      text-slate-300 hover:text-teal-400 cursor-hover
                      hover:bg-teal-400/20 transition-all duration-300
                    "
                    data-cursor-type="hover"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10 glass rounded-full flex items-center justify-center
                      text-slate-300 hover:text-teal-400 cursor-hover
                      hover:bg-teal-400/20 transition-all duration-300
                    "
                    data-cursor-type="hover"
                    title="View Code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-teal-400 border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex-1 bg-teal-600 hover:bg-teal-700 text-white 
                      px-6 py-3 rounded-xl font-semibold cursor-hover
                      transition-all duration-300 hover-glow hover:scale-105
                      flex items-center justify-center space-x-2
                      hover:shadow-teal-500/50
                    "
                    data-cursor-type="hover"
                  >
                    <ExternalLink size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex-1 glass border border-slate-600 hover:border-teal-400
                      text-slate-300 hover:text-white cursor-hover
                      px-6 py-3 rounded-xl font-semibold
                      transition-all duration-300 hover:scale-105
                      flex items-center justify-center space-x-2
                      hover:bg-teal-500/10
                    "
                    data-cursor-type="hover"
                  >
                    <Github size={18} className="group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
