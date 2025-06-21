
import React, { useEffect, useState } from 'react';

const SkillsPage = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript/TypeScript', level: 70, color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML/CSS', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'Vue.js', level: 60, color: 'from-green-400 to-green-600' },
        { name: 'Tailwind CSS', level: 80, color: 'from-teal-400 to-teal-600' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 65, color: 'from-green-500 to-green-700' },
        { name: 'Python', level: 70, color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 40, color: 'from-blue-600 to-blue-800' },
        
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        
        { name: 'Git/GitHub', level: 80, color: 'from-gray-600 to-gray-800' },
        

      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 animate-page-enter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Skills</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass rounded-2xl p-8 hover-lift"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h2 className="text-2xl font-bold text-teal-400 mb-8 text-center">
                {category.title}
              </h2> 
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-teal-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`
                          h-full bg-gradient-to-r ${skill.color} 
                          rounded-full transition-all duration-1000 ease-out
                          relative overflow-hidden
                        `}
                        style={{ 
                          width: animateSkills ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.5) + (skillIndex * 0.1)}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
