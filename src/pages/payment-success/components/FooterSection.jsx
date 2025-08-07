import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const handleShareSuccess = () => {
    // Track social sharing
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'share', {
        method: 'social',
        content_type: 'success_story'
      });
    }
    
    // Share on social media
    const text = "Just purchased the YouTube Automation eBook! 🚀 Excited to start my journey to building a six-figure faceless YouTube channel using AI. #YouTubeAutomation #PassiveIncome";
    const url = window.location.origin;
    
    if (navigator.share) {
      navigator.share({
        title: 'My YouTube Automation Journey',
        text: text,
        url: url
      });
    } else {
      // Fallback to Twitter
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }
  };

  const socialLinks = [
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com', color: 'text-red-600' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com', color: 'text-blue-400' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com', color: 'text-pink-500' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com', color: 'text-blue-600' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-success to-emerald-600 rounded-lg flex items-center justify-center">
                <Icon name="CheckCircle" size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">YouTube Automation</h3>
                <p className="text-sm text-success font-medium">Premium eBook</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Transform your life with AI-powered YouTube automation. 
              Join thousands of successful students earning six-figure incomes with our proven system.
            </p>
            
            {/* Share Success Button */}
            <Button
              variant="outline"
              size="lg"
              onClick={handleShareSuccess}
              className="border-success text-success hover:bg-success hover:text-white transition-all duration-300"
              iconName="Share2"
              iconPosition="left"
            >
              Share Your Success
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Back to Home
              </Link>
              <a 
                href="#" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Download eBook
              </a>
              <a 
                href="#" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Video Tutorials
              </a>
              <a 
                href="#" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Community Access
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Connect With Us</h4>
            
            {/* Social Media Links */}
            <div className="space-y-3">
              <h5 className="text-sm font-medium text-gray-700">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 ${social.color}`}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <h5 className="text-sm font-medium text-gray-700">Contact Support</h5>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} className="text-primary" />
                  <span>support@youtubeautomation.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} className="text-primary" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Refund Policy
              </a>
            </div>
            
            <div className="text-xs text-gray-500">
              © 2024 YouTube Automation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 