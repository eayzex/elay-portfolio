
import React, { useState, useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import CodeBackground from '../components/CodeBackground';
import Navigation from '../components/Navigation';
import HomePage from '../components/pages/HomePage';
import AboutPage from '../components/pages/AboutPage';
import SkillsPage from '../components/pages/SkillsPage';
import ProjectsPage from '../components/pages/ProjectsPage';
import ContactPage from '../components/pages/ContactPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [previewPage, setPreviewPage] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (page: string) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePagePreview = (page: string | null) => {
    if (page && page !== currentPage) {
      setPreviewPage(page);
    } else {
      setPreviewPage(null);
    }
  };

  const renderPage = (page: string) => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const displayPage = previewPage || currentPage;

  return (
    <div className="min-h-screen cursor-custom relative overflow-hidden">
      <CustomCursor />
      <CodeBackground />
      
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onPagePreview={handlePagePreview}
      />

      <main className={`
        transition-all duration-300 ease-in-out
        ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        ${previewPage ? 'opacity-70' : 'opacity-100'}
      `}>
        {displayPage === 'home' ? (
          <HomePage onPageChange={handlePageChange} />
        ) : (
          renderPage(displayPage)
        )}
      </main>
    </div>
  );
};

export default Index;
