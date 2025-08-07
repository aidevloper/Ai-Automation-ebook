import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">YouTube Automation</h3>
                <p className="text-sm text-gray-500">Premium eBook</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Transform your life with AI-powered YouTube automation. 
              Join thousands of successful students earning six-figure incomes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Back to Landing Page
              </Link>
              <a 
                href="#" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Refund Policy
              </a>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact & Support</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Mail" size={14} className="text-primary" />
                <span>support@youtubeautomation.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Phone" size={14} className="text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Clock" size={14} className="text-primary" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center space-x-8">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Icon name="Shield" size={14} className="text-success" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Icon name="Lock" size={14} className="text-success" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Icon name="CheckCircle" size={14} className="text-success" />
              <span>PCI Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Icon name="Star" size={14} className="text-warning" />
              <span>Trusted by 2,847+ Students</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2024 YouTube Automation. All rights reserved. 
            This is not affiliated with YouTube or Google.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 