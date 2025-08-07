import React from 'react';
import Icon from '../../../components/AppIcon';

const SuccessConfirmationSection = ({ userName }) => {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-8 animate-fade-in">
      {/* Success Icon */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-success to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce-subtle">
          <Icon name="CheckCircle" size={40} className="text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-2">
          Your eBook is on Its Way! 🚀
        </h1>
        <p className="text-lg text-gray-600">
          Thank you for your purchase, {userName}!
        </p>
      </div>

      {/* Purchase Details */}
      <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-xl p-6 mb-6 border border-success/20">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="BookOpen" size={24} className="text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Build a Six-Figure YouTube Channel eBook
            </h3>
            <p className="text-gray-600 mb-3">
              Complete AI-powered system for beginners
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-success">
                <Icon name="CheckCircle" size={14} />
                <span className="font-medium">Payment Successful</span>
              </div>
              <div className="flex items-center space-x-1 text-primary">
                <Icon name="Mail" size={14} />
                <span>Download link sent to your email</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price and Transaction Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Purchase Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Product:</span>
              <span className="font-medium">YouTube Automation eBook</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount Paid:</span>
              <span className="font-bold text-success text-lg">₹999</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction ID:</span>
              <span className="font-mono text-xs">TXN_{Date.now().toString().slice(-8)}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">What's Next?</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={14} className="text-primary" />
              <span>Check your email for download link</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Download" size={14} className="text-success" />
              <span>Download your eBook instantly</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Play" size={14} className="text-accent" />
              <span>Start your YouTube journey today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Email Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Important Notice</h4>
            <p className="text-blue-800 text-sm">
              Your download link has been sent to your email address. Please check your inbox (and spam folder) 
              for the email with subject "Your YouTube Automation eBook is Ready! 🎉"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessConfirmationSection; 