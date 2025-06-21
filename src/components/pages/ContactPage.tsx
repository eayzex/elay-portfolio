import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Code, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Hello,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:elalmiyoussef03@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    toast({
      title: "Message Sent Successfully!",
      description: "Your email client has opened with your message. Please send the email to complete the process.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 animate-page-enter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                      w-full glass rounded-xl px-4 py-3 
                      text-white placeholder-slate-400
                      border border-slate-600 focus:border-teal-400
                      focus:outline-none focus:ring-2 focus:ring-teal-400/20
                      transition-all duration-300
                    "
                    placeholder="Alex Deo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      w-full glass rounded-xl px-4 py-3 
                      text-white placeholder-slate-400
                      border border-slate-600 focus:border-teal-400
                      focus:outline-none focus:ring-2 focus:ring-teal-400/20
                      transition-all duration-300
                    "
                    placeholder="Alex@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="
                    w-full glass rounded-xl px-4 py-3 
                    text-white placeholder-slate-400
                    border border-slate-600 focus:border-teal-400
                    focus:outline-none focus:ring-2 focus:ring-teal-400/20
                    transition-all duration-300
                  "
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="
                    w-full glass rounded-xl px-4 py-3 
                    text-white placeholder-slate-400
                    border border-slate-600 focus:border-teal-400
                    focus:outline-none focus:ring-2 focus:ring-teal-400/20
                    transition-all duration-300 resize-none
                  "
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="
                  group w-full bg-teal-600 hover:bg-teal-700 text-white 
                  px-8 py-4 rounded-xl font-semibold cursor-hover
                  transition-all duration-300 hover-glow hover:scale-105
                  flex items-center justify-center space-x-2
                  hover:shadow-2xl hover:shadow-teal-500/40
                "
                data-cursor-type="hover"
              >
                <Send 
                  size={20} 
                  className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" 
                />
                <span className="group-hover:tracking-wide transition-all duration-300">
                  Send Message
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 hover-lift">
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'elalmiyoussef03@gmail.com',
                    href: 'mailto:elalmiyoussef03@gmail.com'
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '07 08 89 87 59',
                    href: 'tel:+212708898759'
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Casablanca, Morocco',
                    href: null 
                  }
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center space-x-4">
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                      <Icon size={20} className="text-teal-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{label}</div>
                      {label === 'Email' ? (
                        <div className="flex items-center space-x-2">
                          <a
                            href={href}
                            className="text-white hover:text-teal-400 transition-colors cursor-hover"
                            data-cursor-type="hover"
                          >
                            {value}
                          </a>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(value);
                              toast({
                                title: "Copied!",
                                description: "Email address copied to clipboard.",
                              });
                            }}
                            className="
                              p-1.5
                              rounded
                              bg-transparent
                              hover:bg-teal-50/10
                              transition
                              flex items-center
                              focus:outline-none
                              focus:ring-2 focus:ring-teal-400/50
                              group
                            "
                            type="button"
                            aria-label="Copy email"
                            title="Copy email"
                          >
                            <Copy
                              size={16}
                              className="text-slate-400 group-hover:text-teal-400 transition"
                              strokeWidth={2}
                            />
                          </button>
                        </div>
                      ) : label === 'Phone' ? (
                        <div className="flex items-center space-x-2">
                          <a
                            href={href}
                            className="text-white hover:text-teal-400 transition-colors cursor-hover"
                            data-cursor-type="hover"
                          >
                            {value}
                          </a>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(value);
                              toast({
                                title: "Copied!",
                                description: "Phone number copied to clipboard.",
                              });
                            }}
                            className="
                              p-1.5
                              rounded
                              bg-transparent
                              hover:bg-teal-50/10
                              transition
                              flex items-center
                              focus:outline-none
                              focus:ring-2 focus:ring-teal-400/50
                              group
                            "
                            type="button"
                            aria-label="Copy phone"
                            title="Copy phone"
                          >
                            <Copy
                              size={16}
                              className="text-slate-400 group-hover:text-teal-400 transition"
                              strokeWidth={2}
                            />
                          </button>
                        </div>
                      ) : href ? (
                        <a 
                          href={href}
                          className="text-white hover:text-teal-400 transition-colors cursor-hover"
                          data-cursor-type="hover"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-white">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Github, label: 'GitHub Profile', href: 'https://github.com/eayzex' },
                  { icon: Mail, label: 'Email Me', href: 'mailto:elalmiyoussef03@gmail.com' },
                  { icon: Phone, label: 'Call Me', href: 'tel:+212708898759' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="
                      flex items-center space-x-3 p-4 glass rounded-xl
                      text-slate-300 hover:text-teal-400 cursor-hover
                      hover:bg-white/10 transition-all duration-300
                    "
                    data-cursor-type="hover"
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

           

            {/* Availability */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-4">Availability</h3>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-300">Available for new projects</span>
              </div>
              <p className="text-slate-400 mt-4">
                I'm currently available for freelance work and interesting project collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
