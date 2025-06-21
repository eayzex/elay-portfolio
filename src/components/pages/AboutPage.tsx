
import React from 'react';
import { Code, Rocket, Heart, Award, Coffee, Users, Target, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const experiences = [
   
  ];

  const achievements = [
    { icon: BookOpen, title: 'Continuous Learning', description: 'Dedicated to learning new technologies and frameworks' },
    { icon: Code, title: 'Team Leadership', description: 'Leading development teams and mentoring developers' },
    { icon: Target, title: 'Goal-Oriented', description: 'Setting and achieving development milestones consistently' },
    { icon: Rocket, title: 'Problem Solving', description: 'Developing logical thinking and debugging skills' }
  ];

  const personalSkills = [
    { icon: Users, title: 'Cooperation', desc: 'Working effectively with others and contributing to team success' },
    { icon: Target, title: 'Discipline', desc: 'Maintaining consistent learning habits and meeting deadlines' },
    { icon: Heart, title: 'Patience', desc: 'Taking time to understand complex concepts thoroughly' },
    { icon: BookOpen, title: 'Adaptability', desc: 'Quickly learning new technologies and adapting to changes' }
  ];

  return (
    <div className="min-h-screen py-20 animate-page-enter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate beginner developer with a love for creating digital experiences 
            and solving problems through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Section */}
          <div className="glass rounded-2xl p-8 hover-lift">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">EY</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">El Almi Youssef</h2>
                <p className="text-teal-400 text-lg">Aspiring Full Stack Developer</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              I'm a passionate beginner in software development with a strong foundation in 
              programming concepts. My journey started with curiosity about how websites and 
              applications work, and has evolved into a dedicated pursuit of becoming a skilled developer.
            </p>

            <p className="text-slate-300 leading-relaxed mb-8">
              I'm currently learning modern web technologies including React, JavaScript, and Node.js. 
              I believe in building projects to reinforce learning and enjoy the problem-solving 
              aspect of programming.
            </p>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Coffee className="text-teal-400" size={20} />
                <span className="text-slate-300">Learning Enthusiast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-red-400" size={20} />
                <span className="text-slate-300">Problem Solver</span>
              </div>
            </div>
          </div>

          {/* Personal Skills */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Skills</h3>
              <div className="space-y-4">
                {personalSkills.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-teal-600/20 flex items-center justify-center mt-1">
                      <Icon size={16} className="text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{title}</h4>
                      <p className="text-slate-400 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text"></span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className="glass rounded-2xl p-8 hover-lift relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-teal-400 text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm text-slate-300">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full shadow-lg shadow-teal-500/50" />
              </div>
            ))}
          </div>
        </div>

        {/* Goals & Motivation */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Goals & Motivation</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="glass rounded-2xl p-8 hover-lift text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                  <achievement.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-slate-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
