import React from 'react';
import Icon from '../../../components/AppIcon';

const OrderSummarySection = () => {
  const originalPrice = 1999;
  const discountPrice = 999;
  const savings = originalPrice - discountPrice;

  return (
    <div className="bg-white rounded-xl shadow-card border border-gray-200 p-6 animate-fade-in">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <Icon name="ShoppingCart" size={16} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 font-playfair">
          Your eBook Purchase Summary
        </h2>
      </div>

      {/* Product Details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="w-16 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="BookOpen" size={24} className="text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">
              Build a Six-Figure YouTube Channel eBook
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Complete AI-powered system for beginners
            </p>
            <div className="flex items-center space-x-2 text-xs">
              <Icon name="FileText" size={12} className="text-gray-400" />
              <span className="text-gray-500">Digital Download</span>
              <span className="text-gray-300">•</span>
              <Icon name="Clock" size={12} className="text-gray-400" />
              <span className="text-gray-500">Instant Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-3 border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Original Price:</span>
          <span className="text-gray-400 line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Discount (50% off):</span>
          <span className="text-success font-semibold">-₹{savings.toLocaleString('en-IN')}</span>
        </div>
        
        <div className="flex justify-between items-center text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
          <span>Total Amount:</span>
          <span className="text-2xl text-primary font-bold">
            ₹{discountPrice.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
        <h4 className="font-semibold text-success mb-3 flex items-center">
          <Icon name="CheckCircle" size={16} className="mr-2" />
          What You'll Get
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-center space-x-2">
            <Icon name="Check" size={12} className="text-success" />
            <span>Complete step-by-step guide</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon name="Check" size={12} className="text-success" />
            <span>AI tools and templates</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon name="Check" size={12} className="text-success" />
            <span>30-day money-back guarantee</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon name="Check" size={12} className="text-success" />
            <span>Lifetime access to updates</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSummarySection; 