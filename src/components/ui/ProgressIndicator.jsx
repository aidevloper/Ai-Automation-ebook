import React, { useState, useEffect } from 'react';

const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');

  const sections = [
    { id: 'hero', label: 'Introduction', milestone: 10 },
    { id: 'problem', label: 'Problem', milestone: 25 },
    { id: 'solution', label: 'Solution', milestone: 45 },
    { id: 'testimonials', label: 'Proof', milestone: 65 },
    { id: 'pricing', label: 'Pricing', milestone: 85 },
    { id: 'faq', label: 'FAQ', milestone: 100 }
  ];

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections?.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer?.observe(element);
    });

    window.addEventListener('scroll', calculateProgress);
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Section Milestones */}
      <div className="absolute top-0 left-0 right-0 h-1">
        {sections?.map(({ id, milestone }) => (
          <div
            key={id}
            className={`absolute top-0 w-1 h-1 transition-all duration-300 ${
              currentSection === id 
                ? 'bg-accent scale-150' 
                : progress >= milestone 
                  ? 'bg-success' :'bg-gray-300'
            }`}
            style={{ left: `${milestone}%`, transform: 'translateX(-50%)' }}
          />
        ))}
      </div>
      {/* Current Section Label - Mobile Only */}
      <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">
            {sections?.find(s => s?.id === currentSection)?.label || 'Reading...'}
          </span>
          <span className="text-gray-500 font-mono">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;