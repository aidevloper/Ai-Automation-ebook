import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 'automation',
      icon: 'Bot',
      title: 'Automated Content Creation',
      subtitle: 'AI Does Everything For You',
      description: 'Our advanced AI system handles every aspect of content creation - from research and scripting to voiceovers and editing.',
      features: [
        'AI-powered script generation',
        'Professional voiceover synthesis',
        'Automated video editing',
        'Smart thumbnail creation',
        'SEO-optimized descriptions'
      ],
      metric: '95%',
      metricLabel: 'Time Saved',
      tools: ['ChatGPT', 'Eleven Labs', 'Canva AI', 'TubeBuddy']
    },
    {
      id: 'monetization',
      icon: 'TrendingUp',
      title: 'Monetization Mastery',
      subtitle: 'Multiple Revenue Streams',
      description: 'Learn how to monetize your channel through various income streams beyond just YouTube ad revenue.',
      features: [
        'YouTube Partner Program optimization',
        'Affiliate marketing strategies',
        'Sponsored content opportunities',
        'Digital product sales',
        'Channel membership programs'
      ],
      metric: '₹2.5L+',
      metricLabel: 'Avg Monthly Income',
      tools: ['AdSense', 'Amazon Associates', 'ClickBank', 'Patreon']
    },
    {
      id: 'scaling',
      icon: 'Rocket',
      title: 'Scale Without Limits',
      subtitle: 'Build Your YouTube Empire',
      description: 'Scale your operation to multiple channels and niches without increasing your workload significantly.',
      features: [
        'Multi-channel management',
        'Niche diversification strategies',
        'Team building and delegation',
        'Automation workflows',
        'Performance analytics'
      ],
      metric: '10+',
      metricLabel: 'Channels Possible',
      tools: ['Social Blade', 'VidIQ', 'Hootsuite', 'Zapier']
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            <Icon name="Star" size={14} className="sm:w-4 sm:h-4" />
            <span>Core Transformations</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in">
            Three Pillars of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              YouTube Success
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Master these three core areas and you'll have everything needed to build a profitable YouTube empire.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
          {benefits?.map((benefit, index) => (
            <div
              key={benefit?.id}
              className={`bg-white rounded-2xl shadow-card border border-gray-200 p-6 sm:p-8 transition-all duration-300 cursor-pointer hover:shadow-elevation ${
                hoveredBenefit === benefit?.id 
                  ? 'shadow-elevation scale-105 border-primary/20' 
                  : ''
              }`}
              onMouseEnter={() => setHoveredBenefit(benefit?.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                  hoveredBenefit === benefit?.id
                    ? 'bg-primary text-white scale-110' :'bg-primary/10 text-primary'
                }`}>
                  <Icon name={benefit?.icon} size={24} className="sm:w-8 sm:h-8" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {benefit?.title}
                </h3>
                
                <p className="text-primary font-medium text-sm sm:text-base">
                  {benefit?.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
                {benefit?.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2 sm:space-y-3 mb-6">
                {benefit?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={14} className="text-success mt-1 flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Metric */}
              <div className="text-center mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {benefit?.metric}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {benefit?.metricLabel}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3">Key Tools Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {benefit?.tools?.map((tool, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className={`mt-6 text-center transition-all duration-300 ${
                hoveredBenefit === benefit?.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="inline-flex items-center space-x-2 text-primary text-xs sm:text-sm font-medium">
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={14} className="sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 sm:p-8 max-w-4xl mx-auto animate-slide-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Ready to Master All Three Pillars?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Our comprehensive eBook covers everything you need to know about automation, 
              monetization, and scaling your YouTube empire.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">200+</div>
                <div className="text-xs sm:text-sm text-gray-600">Pages of Content</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">AI Tools Covered</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1">30</div>
                <div className="text-xs sm:text-sm text-gray-600">Days to Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;