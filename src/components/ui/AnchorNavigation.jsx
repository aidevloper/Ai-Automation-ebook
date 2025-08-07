import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const AnchorNavigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'problem', label: 'The Problem', icon: 'AlertCircle' },
    { id: 'solution', label: 'AI Solution', icon: 'Zap' },
    { id: 'chapters', label: 'Chapters', icon: 'BookOpen' },
    { id: 'testimonials', label: 'See Proof', icon: 'Star' },
    { id: 'pricing', label: 'Get Pricing', icon: 'DollarSign' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navigationItems?.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer?.observe(element);
    });

    return () => observer?.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 right-6 z-50 max-w-full">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-elevation border border-gray-200 p-2">
          <div className="flex flex-col space-y-1">
            {navigationItems?.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                  activeSection === id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <Icon name={icon} size={16} />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50 max-w-full">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white/95 backdrop-blur-sm rounded-lg shadow-elevation border border-gray-200 p-3 transition-smooth hover:bg-gray-50"
        >
          <Icon name={isMenuOpen ? 'X' : 'Menu'} size={20} />
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="absolute top-16 right-0 bg-white rounded-lg shadow-elevation border border-gray-200 p-2 min-w-[200px]">
              <div className="flex flex-col space-y-1">
                {navigationItems?.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-smooth ${
                      activeSection === id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    <Icon name={icon} size={16} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AnchorNavigation;