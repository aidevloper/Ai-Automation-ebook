import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const NextStepsSection = () => {
  const steps = [
    {
      icon: 'Download',
      title: 'Download Your eBook',
      description: 'Check your email and download the comprehensive guide to start your journey.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      delay: 'animate-fade-in'
    },
    {
      icon: 'Play',
      title: 'Follow the AI Guide',
      description: 'Use our step-by-step AI-powered system to launch your channel successfully.',
      color: 'text-success',
      bgColor: 'bg-success/10',
      delay: 'animate-fade-in'
    },
    {
      icon: 'Users',
      title: 'Join Our Community',
      description: 'Connect with 2,847+ successful students for support and motivation.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      delay: 'animate-fade-in'
    }
  ];

  const handleAccessResources = () => {
    // Track button click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: 'access_resources_button'
      });
    }
    
    // Redirect to resources or show download modal
    window.open('mailto:support@youtubeautomation.com?subject=Need Help with eBook Download', '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-8">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
          <Icon name="ArrowRight" size={24} className="text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 font-playfair mb-2">
          Get Started Now
        </h2>
        <p className="text-lg text-gray-600">
          Follow these simple steps to begin your YouTube automation journey
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 ${step.delay}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon name={step.icon} size={28} className={step.color} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Step {index + 1}: {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Button
          variant="default"
          size="xl"
          onClick={handleAccessResources}
          className="bg-gradient-to-r from-success to-emerald-600 hover:from-success/90 hover:to-emerald-600/90 text-white font-bold px-12 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
          iconName="ExternalLink"
          iconPosition="right"
        >
          Access Resources
        </Button>
        
        <p className="text-sm text-gray-500 mt-4">
          Need help? Our support team is available 24/7
        </p>
      </div>

      {/* Additional Resources */}
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center space-x-3">
            <Icon name="Video" size={20} className="text-primary" />
            <div>
              <h4 className="font-semibold text-gray-900">Video Tutorials</h4>
              <p className="text-sm text-gray-600">5+ hours of step-by-step video guides</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-accent/5 to-warning/5 rounded-lg p-4 border border-accent/20">
          <div className="flex items-center space-x-3">
            <Icon name="FileText" size={20} className="text-accent" />
            <div>
              <h4 className="font-semibold text-gray-900">Templates & Tools</h4>
              <p className="text-sm text-gray-600">Ready-to-use AI prompts and templates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsSection; 