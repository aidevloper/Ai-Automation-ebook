import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const StickyPurchaseCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroBottom = heroSection?.getBoundingClientRect()?.bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePurchaseClick = () => {
    window.location.href = 'https://spf.bio/5i7WO';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-elevation w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-3">
          {/* Price and Urgency */}
          <div className="flex items-center space-x-4">
            <div className="text-center sm:text-left">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">₹799</span>
                <span className="text-sm text-gray-500 line-through">₹1499</span>
                <span className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs font-semibold">
                  46% OFF
                </span>
              </div>
              <div className="text-xs text-gray-600">Limited Time Offer</div>
            </div>
            
            {/* Countdown Timer */}
            <div className="hidden sm:flex items-center space-x-2 text-xs">
              <Icon name="Clock" size={14} className="text-warning" />
              <span className="text-gray-600">Expires in:</span>
              <div className="flex space-x-1">
                <span className="bg-gray-900 text-white px-1 py-0.5 rounded font-mono">
                  {String(timeLeft?.hours)?.padStart(2, '0')}
                </span>
                <span className="text-gray-600">:</span>
                <span className="bg-gray-900 text-white px-1 py-0.5 rounded font-mono">
                  {String(timeLeft?.minutes)?.padStart(2, '0')}
                </span>
                <span className="text-gray-600">:</span>
                <span className="bg-gray-900 text-white px-1 py-0.5 rounded font-mono">
                  {String(timeLeft?.seconds)?.padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="default"
            size="lg"
            onClick={handlePurchaseClick}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            iconName="ShoppingCart"
            iconPosition="left"
          >
            Get Instant Access
          </Button>
        </div>
        
        {/* Mobile Timer */}
        <div className="sm:hidden flex items-center justify-center space-x-2 text-xs pb-2">
          <Icon name="Clock" size={14} className="text-warning" />
          <span className="text-gray-600">Expires in:</span>
          <div className="flex space-x-1">
            <span className="bg-gray-900 text-white px-1 py-0.5 rounded font-mono">
              {String(timeLeft?.hours)?.padStart(2, '0')}
            </span>
            <span className="text-gray-600">:</span>
            <span className="bg-gray-900 text-white px-1 py-0.5 rounded font-mono">
              {String(timeLeft?.minutes)?.padStart(2, '0')}
            </span>
            <span className="text-gray-600">:</span>
            <span className="bg-gray-900 text-white px-1 py-0.5 rounded font-mono">
              {String(timeLeft?.seconds)?.padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyPurchaseCTA;