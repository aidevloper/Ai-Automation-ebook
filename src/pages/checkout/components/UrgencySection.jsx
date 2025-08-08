import React from 'react';
import Icon from '../../../components/AppIcon';

const UrgencySection = ({ timeLeft }) => {
  return (
    <div className="bg-gradient-to-r from-warning/10 to-accent/10 rounded-xl border border-warning/20 p-6 animate-pulse">
      <div className="text-center space-y-4">
        {/* Urgency Header */}
        <div className="flex items-center justify-center space-x-2">
          <Icon name="Clock" size={20} className="text-warning animate-pulse" />
          <h3 className="text-xl font-bold text-gray-900 font-playfair">
            Offer Ends Soon!
          </h3>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white rounded-lg p-4 shadow-card">
          <p className="text-sm text-gray-600 mb-3">Limited Time Remaining:</p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-warning bg-warning/10 rounded-lg px-3 py-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 mt-1">Hours</div>
            </div>
            <div className="text-2xl font-bold text-gray-400">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning bg-warning/10 rounded-lg px-3 py-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 mt-1">Minutes</div>
            </div>
            <div className="text-2xl font-bold text-gray-400">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning bg-warning/10 rounded-lg px-3 py-2">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 mt-1">Seconds</div>
            </div>
          </div>
        </div>

        {/* Offer Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2 text-success font-semibold">
            <Icon name="Tag" size={16} />
            <span>50% OFF Today Only!</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <Icon name="TrendingDown" size={16} className="text-success" />
            <span>Save ₹1,000 - Limited Time Offer</span>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="bg-white rounded-lg p-4 shadow-card border border-success/20">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-emerald-600 rounded-full flex items-center justify-center">
              <Icon name="Shield" size={20} className="text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900">30-Day Money-Back Guarantee</h4>
              <p className="text-sm text-gray-600">Not satisfied? Get a full refund, no questions asked.</p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-white rounded-lg p-4 shadow-card">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} className="text-primary" />
              <span>2,847+ Students</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} className="text-warning" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="CheckCircle" size={14} className="text-success" />
              <span>97% Success Rate</span>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200">
          <div className="flex items-center justify-center space-x-2 text-red-700 font-semibold">
            <Icon name="AlertTriangle" size={16} />
            <span>Don't Miss Out! This Offer Won't Last Long</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencySection; 