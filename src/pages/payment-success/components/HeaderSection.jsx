import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const HeaderSection = ({ userName }) => {
  return (
    <header className="bg-white shadow-card border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with Bounce Animation */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group animate-bounce-subtle"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-success to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Icon name="CheckCircle" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-playfair">
                YouTube Automation
              </h1>
              <p className="text-sm text-success font-medium">Premium eBook</p>
            </div>
          </Link>

          {/* Welcome Message */}
          <div className="text-right">
            <h2 className="text-xl font-bold text-gray-900 font-playfair">
              Congratulations, {userName}! 🎉
            </h2>
            <p className="text-sm text-gray-600">
              Your journey to success begins now
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection; 