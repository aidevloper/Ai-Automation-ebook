import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [selectedPain, setSelectedPain] = useState('editing');

  const painPoints = [
    {
      id: 'editing',
      title: 'Complex Video Editing',
      description: 'Spending 8+ hours editing a single video',
      stat: '8 hours',
      statLabel: 'Average editing time per video'
    },
    {
      id: 'camera',
      title: 'Camera Anxiety',
      description: 'Fear of being on camera stops you from starting',
      stat: '84%',
      statLabel: 'Of beginners have camera anxiety'
    },
    {
      id: 'consistency',
      title: 'Content Consistency',
      description: 'Struggling to create content regularly',
      stat: '73%',
      statLabel: 'Quit within 90 days due to burnout'
    },
    {
      id: 'monetization',
      title: 'Monetization Mystery',
      description: 'No clear path to making money from videos',
      stat: '₹0',
      statLabel: 'Average earnings in first 6 months'
    }
  ];

  const selectedPainPoint = painPoints?.find(p => p?.id === selectedPain);

  return (
    <section id="problem" className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            <Icon name="AlertTriangle" size={14} className="sm:w-4 sm:h-4" />
            <span>The Hard Truth About YouTube</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in">
            Why 95% of YouTube Creators{' '}
            <span className="text-destructive">Fail</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Most aspiring creators get stuck in the same traps that prevent them from ever making their first rupee online.
          </p>
        </div>

        {/* Interactive Pain Point Selector */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start w-full">
          {/* Left - Pain Point Buttons */}
          <div className="space-y-3 sm:space-y-4 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Which challenge resonates with you most?
            </h3>
            
            {painPoints?.map((pain, index) => (
              <button
                key={pain?.id}
                onClick={() => setSelectedPain(pain?.id)}
                className={`w-full text-left p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedPain === pain?.id
                    ? 'border-primary bg-primary/5 shadow-card'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-card'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center mt-1 flex-shrink-0 ${
                    selectedPain === pain?.id
                      ? 'border-primary bg-primary' :'border-gray-300'
                  }`}>
                    {selectedPain === pain?.id && (
                      <Icon name="Check" size={12} className="text-white sm:w-3.5 sm:h-3.5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      {pain?.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      {pain?.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right - Selected Pain Point Details */}
          <div className="bg-white rounded-2xl shadow-elevation p-6 sm:p-8 border border-gray-200 order-1 lg:order-2 animate-slide-up">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingDown" size={24} className="text-destructive sm:w-8 sm:h-8" />
              </div>
              
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-destructive mb-2">
                {selectedPainPoint?.stat}
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                {selectedPainPoint?.statLabel}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                The Reality of {selectedPainPoint?.title}
              </h4>
              
              {selectedPain === 'editing' && (
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                  <p>• Learning complex editing software takes months</p>
                  <p>• Professional editors charge ₹5,000+ per video</p>
                  <p>• Most creators burn out from the editing workload</p>
                  <p>• Technical issues constantly interrupt workflow</p>
                </div>
              )}
              
              {selectedPain === 'camera' && (
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                  <p>• Fear of judgment prevents you from starting</p>
                  <p>• Expensive equipment and lighting setup required</p>
                  <p>• Multiple takes waste hours of time</p>
                  <p>• Privacy concerns about showing your face</p>
                </div>
              )}
              
              {selectedPain === 'consistency' && (
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                  <p>• Running out of content ideas quickly</p>
                  <p>• Balancing YouTube with full-time job</p>
                  <p>• Inconsistent uploads hurt channel growth</p>
                  <p>• Creator burnout leads to abandonment</p>
                </div>
              )}
              
              {selectedPain === 'monetization' && (
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                  <p>• YouTube Partner Program takes forever to qualify</p>
                  <p>• Ad revenue is unpredictable and low</p>
                  <p>• No clear strategy for multiple income streams</p>
                  <p>• Most creators never make significant money</p>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 italic">
                "I spent 6 months trying to make YouTube work the traditional way. 
                I was exhausted, broke, and ready to quit." - Former struggling creator
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <div className="text-center p-4 bg-white rounded-xl shadow-card border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-destructive mb-1 sm:mb-2">95%</div>
            <div className="text-xs sm:text-sm text-gray-600">Creators Never Monetize</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-card border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-destructive mb-1 sm:mb-2">6 Months</div>
            <div className="text-xs sm:text-sm text-gray-600">Average Time to Give Up</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-card border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-destructive mb-1 sm:mb-2">₹50,000+</div>
            <div className="text-xs sm:text-sm text-gray-600">Wasted on Equipment</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-card border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-destructive mb-1 sm:mb-2">500+</div>
            <div className="text-xs sm:text-sm text-gray-600">Hours Wasted Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;