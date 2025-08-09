import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [copiesLeft, setCopiesLeft] = useState(47);

  useEffect(() => {
    // Countdown timer
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

    // Simulate copies being sold
    const copiesTimer = setInterval(() => {
      setCopiesLeft(prev => Math.max(prev - Math.floor(Math.random() * 2), 25));
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(copiesTimer);
    };
  }, []);

  const packages = [
    {
      id: 'basic',
      name: 'eBook Only',
      originalPrice: 1499,
      currentPrice: 499,
      savings: 1000,
      popular: false,
      features: [
        '200+ Page Comprehensive eBook',
        'AI Tools & Software List',
        'Step-by-Step Implementation Guide',
        'Niche Selection Framework',
        'Basic Monetization Strategies',
        'Email Support',
        '30-Day Money Back Guarantee'
      ],
      bonus: null
    }
  ];

  const handlePurchase = (packageId) => {
    // Track purchase click with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: `pricing_${packageId}_button`
      });
    }

    // Track purchase click with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: `YouTube Automation eBook - ${packageId}`,
        content_category: 'eBook',
        value: 499,
        currency: 'INR'
      });
    }
    
    window.location.href = 'https://spf.bio/5i7WO';
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            <Icon name="Clock" size={14} className="sm:w-4 sm:h-4" />
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Success Package
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in">
            Get instant access to the complete AI-powered YouTube automation system. 
            30-day money-back guarantee on all packages.
          </p>

          {/* Urgency Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            {/* Countdown Timer */}
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-warning sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base text-gray-600">Offer expires in:</span>
              <div className="flex space-x-1">
                <span className="bg-gray-900 text-white px-2 py-1 rounded font-mono text-xs sm:text-sm">
                  {String(timeLeft?.hours)?.padStart(2, '0')}
                </span>
                <span className="text-gray-600">:</span>
                <span className="bg-gray-900 text-white px-2 py-1 rounded font-mono text-xs sm:text-sm">
                  {String(timeLeft?.minutes)?.padStart(2, '0')}
                </span>
                <span className="text-gray-600">:</span>
                <span className="bg-gray-900 text-white px-2 py-1 rounded font-mono text-xs sm:text-sm">
                  {String(timeLeft?.seconds)?.padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Scarcity Indicator */}
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-destructive sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base text-gray-600">Only</span>
              <span className="bg-destructive text-white px-2 py-1 rounded font-bold text-xs sm:text-sm">
                {copiesLeft}
              </span>
              <span className="text-sm sm:text-base text-gray-600">copies left at this price</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 w-full">
          {packages?.map((pkg, index) => (
            <div
              key={pkg?.id}
              className={`relative bg-white rounded-2xl shadow-card border-2 p-6 sm:p-8 transition-all duration-300 hover:scale-105 border-gray-200`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg?.name}</h3>
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">₹{pkg?.currentPrice?.toLocaleString('en-IN')}</span>
                    <span className="text-base sm:text-lg text-gray-400 line-through">₹{pkg?.originalPrice?.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-success font-semibold text-sm">Save ₹{pkg?.savings?.toLocaleString('en-IN')}</div>
                </div>
              </div>
              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg?.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                    <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Purchase Button */}
              <Button
                variant="default"
                size="lg"
                onClick={() => handlePurchase(pkg?.id)}
                className="w-full bg-gradient-to-r from-accent to-warning hover:from-accent/90 hover:to-warning/90 text-white font-bold px-6 py-3 text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                iconName="ShoppingCart"
                iconPosition="left"
              >
                Get Instant Access
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Trusted & Secure Payment</h3>
          <div className="flex flex-wrap items-center justify-center space-x-6 sm:space-x-8 opacity-60">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Shield" size={20} className="text-success sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm font-medium">SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="CreditCard" size={20} className="text-primary sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm font-medium">All Cards Accepted</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Smartphone" size={20} className="text-secondary sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm font-medium">UPI & Wallets</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="RefreshCw" size={20} className="text-accent sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm font-medium">Money Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Risk-Free Guarantee */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 sm:p-8 text-center animate-slide-up">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="ShieldCheck" size={24} className="text-success sm:w-8 sm:h-8" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            100% Risk-Free 30-Day Guarantee
          </h3>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Try our system for 30 days. If you don't see results or aren't completely satisfied, 
            we'll refund every penny. No questions asked. You have nothing to lose and everything to gain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
