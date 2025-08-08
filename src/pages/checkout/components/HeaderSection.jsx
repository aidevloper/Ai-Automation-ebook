import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const HeaderSection = () => {
  return (
    <header className="bg-white shadow-card border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group animate-fade-in"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="BookOpen" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-playfair">
                YouTube Automation
              </h1>
              <p className="text-xs text-gray-500">Premium eBook</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200 group"
            >
              <Icon name="ArrowLeft" size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="text-sm font-medium">Back to Landing Page</span>
            </Link>
            
            {/* Trust Badge */}
            <div className="hidden sm:flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
              <Icon name="Shield" size={12} />
              <span>Secure Checkout</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection; 