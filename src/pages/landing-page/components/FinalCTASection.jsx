import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FinalCTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

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

  const handleFinalPurchase = () => {
    // Track final CTA click with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: 'final_cta_button'
      });
    }

    // Track final CTA click with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'YouTube Automation eBook - Final CTA',
        content_category: 'eBook',
        value: 297,
        currency: 'INR'
      });
    }
    
    window.location.href = 'https://spf.bio/5i7WO';
  };

  const benefits = [
    {
      icon: 'Zap',
      title: 'AI-Powered Automation',
      description: 'Let AI handle content creation while you focus on strategy'
    },
    {
      icon: 'EyeOff',
      title: '100% Faceless System',
      description: 'Never show your face or use your real voice'
    },
    {
      icon: 'TrendingUp',
      title: 'Proven Results',
      description: '97% success rate with average ₹2.5L+ monthly earnings'
    },
    {
      icon: 'Clock',
      title: 'Quick Implementation',
      description: 'Start earning within 30 days of implementation'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Your YouTube Empire Awaits</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Build Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Six-Figure
            </span>{' '}
            YouTube Channel?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join 2,847+ successful students who transformed their lives with our AI-powered system. 
            Your financial freedom is just one click away.
          </p>

          {/* Urgency Timer */}
          <div className="bg-white rounded-lg shadow-card border border-gray-200 p-6 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Icon name="Clock" size={20} className="text-warning" />
              <span className="text-gray-700 font-medium">Limited Time Offer Expires In:</span>
            </div>
            <div className="flex justify-center space-x-2">
              <div className="text-center">
                <div className="bg-gray-900 text-white px-3 py-2 rounded font-mono text-xl font-bold">
                  {String(timeLeft?.hours)?.padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 mt-1">Hours</div>
              </div>
              <div className="text-2xl text-gray-400 self-center">:</div>
              <div className="text-center">
                <div className="bg-gray-900 text-white px-3 py-2 rounded font-mono text-xl font-bold">
                  {String(timeLeft?.minutes)?.padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 mt-1">Minutes</div>
              </div>
              <div className="text-2xl text-gray-400 self-center">:</div>
              <div className="text-center">
                <div className="bg-gray-900 text-white px-3 py-2 rounded font-mono text-xl font-bold">
                  {String(timeLeft?.seconds)?.padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 mt-1">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits?.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-card border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit?.title}</h3>
              <p className="text-sm text-gray-600">{benefit?.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Main CTA */}
        <div className="text-center mb-12">
          <Button
            variant="default"
            size="xl"
            onClick={handleFinalPurchase}
            className="bg-gradient-to-r from-accent to-warning hover:from-accent/90 hover:to-warning/90 text-white font-bold px-16 py-6 text-xl mb-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            iconName="ShoppingCart"
            iconPosition="left"
          >
            Start Your YouTube Journey Today!
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Icon name="Shield" size={14} className="text-success" />
              <span>60-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Lock" size={14} className="text-success" />
              <span>Secure SSL Payment</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Download" size={14} className="text-success" />
              <span>Instant Digital Delivery</span>
            </div>
          </div>
        </div>

        {/* Exclusive Bonuses */}
        <div className="bg-gradient-to-r from-accent/10 to-warning/10 rounded-2xl border border-accent/20 p-8 max-w-4xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🎁 Exclusive Bonuses (Limited Time Only!)
            </h3>
            <p className="text-gray-600">Get these valuable bonuses worth ₹5,999 absolutely FREE!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Calendar" size={20} className="text-accent" />
                <h4 className="font-bold text-gray-900">AI Content Calendar</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Complete 90-day content planning system with AI prompts and scheduling templates.</p>
              <div className="text-accent font-semibold text-sm">Value: ₹1,999</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Video" size={20} className="text-accent" />
                <h4 className="font-bold text-gray-900">Live Webinar Access</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Watch me build and automate a YouTube channel live in real-time.</p>
              <div className="text-accent font-semibold text-sm">Value: ₹2,999</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Users" size={20} className="text-accent" />
                <h4 className="font-bold text-gray-900">Private Community</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Join our exclusive WhatsApp group with 2,847+ successful students.</p>
              <div className="text-accent font-semibold text-sm">Value: ₹999</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="FileText" size={20} className="text-accent" />
                <h4 className="font-bold text-gray-900">Scaling Blueprint</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Advanced guide to scale from 1 to 10+ profitable channels.</p>
              <div className="text-accent font-semibold text-sm">Value: ₹1,000</div>
            </div>
          </div>
        </div>

        {/* Value Proposition Reminder */}
        <div className="bg-white rounded-2xl shadow-elevation border border-gray-200 p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What You Get Today:
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-gray-700">200+ Page Comprehensive eBook</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-gray-700">AI Tools Access (Lifetime)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-gray-700">Done-For-You Templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-gray-700">Monetization Blueprints</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-gray-700">Lifetime Updates & Support</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-success/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-success mb-2">₹297</div>
                <div className="text-lg text-gray-500 line-through mb-2">₹999</div>
                <div className="text-success font-semibold mb-4">Save ₹702 (66% OFF)</div>
                <div className="text-sm text-gray-600">
                  Regular price returns in:
                </div>
                <div className="text-warning font-bold">
                  {String(timeLeft?.hours)?.padStart(2, '0')}:
                  {String(timeLeft?.minutes)?.padStart(2, '0')}:
                  {String(timeLeft?.seconds)?.padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Final Guarantee */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-card border border-success/20 p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="ShieldCheck" size={24} className="text-success" />
              <h3 className="text-xl font-bold text-gray-900">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-gray-600 mb-4">
            "If you don't earn your first ₹1,00,000 within 60 days, we will refund every penny you paid. And because we believe in the effectiveness of our system, if you follow our step-by-step guide properly, you will also receive a ₹10,000 bonus. This offer is available only to those who implement the system fully. Our no-risk guarantee gives you peace of mind. Take action now and step into your path to success!"
            </p>
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-full">
              <Icon name="CheckCircle" size={16} />
              <span className="font-medium">100% Risk-Free Investment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
