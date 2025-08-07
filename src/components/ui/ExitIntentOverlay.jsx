import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import Icon from '../AppIcon';

const ExitIntentOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    let exitTimer;
    
    const handleMouseLeave = (e) => {
      if (e?.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollDirection = scrollTop < (window.lastScrollTop || 0) ? 'up' : 'down';
      
      if (scrollDirection === 'up' && scrollTop > 500 && !hasShown && !isVisible) {
        clearTimeout(exitTimer);
        exitTimer = setTimeout(() => {
          setIsVisible(true);
          setHasShown(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }, 1000);
      }
      
      window.lastScrollTop = scrollTop;
    };

    // Mobile: detect rapid upward scroll
    const handleTouchStart = (e) => {
      window.touchStartY = e?.touches?.[0]?.clientY;
    };

    const handleTouchMove = (e) => {
      if (!window.touchStartY) return;
      
      const touchY = e?.touches?.[0]?.clientY;
      const diff = window.touchStartY - touchY;
      
      if (diff < -100 && window.pageYOffset > 300 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(exitTimer);
    };
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      window.location.href = 'https://spf.bio/5i7WO';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 transform animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Icon name="X" size={24} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={32} className="text-warning" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Wait! Don't Miss Out on This Exclusive Offer!
              </h3>
              <p className="text-gray-600">
              Don’t leave yet! You’re just one click away from transforming your YouTube channel!
              You’re one click away from ₹100K in 30 days.
              Miss this and you’re leaving money on the table!
              Act now—this exclusive offer won’t last! 
              </p>
            </div>

            {/* Bonus Offer */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Preview Chapter
                  </h4>
                  <p className="text-sm text-gray-600">
                    1. Actionable step-by-step guide to launch your automated YouTube channel.<br/>
                    2. Proven AI tools that simplify video creation, SEO, and monetization.<br/>
                    3. Real, money-making results in 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
                className="w-full"
              />
              
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                iconName="Download"
                iconPosition="left"
              >
                Yes, I Want My YouTube Empire
              </Button>
            </form>

            {/* Trust Elements */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                No spam. Unsubscribe anytime. Your email is safe with us.
              </p>
            </div>
          </>
        ) : (
          /* Success State */
          (<div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Check Your Email!
            </h3>
            <p className="text-gray-600 mb-4">
              We've sent the free chapter to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500">
              Don't see it? Check your spam folder or promotions tab.
            </p>
          </div>)
        )}
      </div>
    </div>
  );
};

export default ExitIntentOverlay;