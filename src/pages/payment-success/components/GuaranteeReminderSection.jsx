import React from 'react';
import Icon from '../../../components/AppIcon';

const GuaranteeReminderSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8">
      <div className="text-center">
        {/* Trust Badge */}
        <div className="w-20 h-20 bg-gradient-to-br from-accent to-warning rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Icon name="Shield" size={32} className="text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 font-playfair mb-4">
          30-Day Money-Back Guarantee
        </h2>
        
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          We're confident you'll love our system, but if you're not completely satisfied 
          within 30 days, we'll give you a full refund. No questions asked.
        </p>

        {/* Guarantee Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={20} className="text-success" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">No Risk</h4>
              <p className="text-sm text-gray-600">Try it risk-free for 30 days</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="RefreshCw" size={20} className="text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">Easy Refund</h4>
              <p className="text-sm text-gray-600">Full refund, no questions asked</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Clock" size={20} className="text-accent" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">30 Days</h4>
              <p className="text-sm text-gray-600">Plenty of time to test</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl p-6 shadow-card border border-gray-200">
          <div className="flex flex-wrap items-center justify-center space-x-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Users" size={16} className="text-primary" />
              <span>2,847+ Happy Students</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Star" size={16} className="text-warning" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span>97% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Shield" size={16} className="text-accent" />
              <span>Secure & Trusted</span>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-6">
          <p className="text-gray-600 mb-4">
            Have questions? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a 
              href="mailto:support@youtubeautomation.com" 
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <Icon name="Mail" size={16} />
              <span>support@youtubeautomation.com</span>
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="tel:+919876543210" 
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <Icon name="Phone" size={16} />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeReminderSection; 