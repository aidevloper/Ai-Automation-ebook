import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [earningsCounter, setEarningsCounter] = useState(0);
  const [studentsCounter, setStudentsCounter] = useState(2847);
  const [recentPurchases, setRecentPurchases] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const targetEarnings = 500000; // ₹5,00,000

  // Sample purchase data for notifications
  const purchaseData = [
    { name: "Rahul S.", location: "Mumbai", time: "just now" },
    { name: "Priya K.", location: "Delhi", time: "just now" },
    { name: "Amit P.", location: "Bangalore", time: "just now" },
    { name: "Sneha M.", location: "Pune", time: "just now" },
    { name: "Vikram R.", location: "Chennai", time: "just now" },
    { name: "Anjali T.", location: "Hyderabad", time: "just now" },
    { name: "Rajesh K.", location: "Kolkata", time: "just now" },
    { name: "Meera S.", location: "Ahmedabad", time: "just now" },
    { name: "Arjun M.", location: "Jaipur", time: "just now" },
    { name: "Kavya P.", location: "Lucknow", time: "just now" },
    { name: "Siddharth B.", location: "Indore", time: "just now" },
    { name: "Zara K.", location: "Bhopal", time: "just now" },
    { name: "Aditya S.", location: "Patna", time: "just now" },
    { name: "Ishita R.", location: "Chandigarh", time: "just now" },
    { name: "Rohan D.", location: "Dehradun", time: "just now" }
  ];

  useEffect(() => {
    // Animate earnings counter
    const earningsInterval = setInterval(() => {
      setEarningsCounter(prev => {
        if (prev < targetEarnings) {
          return prev + Math.floor(Math.random() * 5000) + 1000;
        }
        return targetEarnings;
      });
    }, 100);

    // Animate students counter
    const studentsInterval = setInterval(() => {
      setStudentsCounter(prev => prev + 1);
    }, 8000);

    // Mock recent purchases for the card
    const purchases = [
      { name: "Rahul S.", location: "Mumbai", time: "2 minutes ago" },
      { name: "Priya K.", location: "Delhi", time: "5 minutes ago" },
      { name: "Amit P.", location: "Bangalore", time: "8 minutes ago" },
      { name: "Sneha M.", location: "Pune", time: "12 minutes ago" }
    ];

    setRecentPurchases(purchases);

    // Real-time notification system
    const notificationInterval = setInterval(() => {
      const randomPurchase = purchaseData[Math.floor(Math.random() * purchaseData.length)];
      const newNotification = {
        id: Date.now(),
        ...randomPurchase,
        time: "just now"
      };

      setNotifications(prev => {
        const updated = [newNotification, ...prev.slice(0, 2)]; // Keep only 3 notifications
        return updated;
      });
    }, 3000); // New notification every 3 seconds

    return () => {
      clearInterval(earningsInterval);
      clearInterval(studentsInterval);
      clearInterval(notificationInterval);
    };
  }, []);

  const handleGetAccess = () => {
    window.location.href = 'https://spf.bio/5i7WO';
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center overflow-hidden">
      {/* Background Pattern - Properly constrained */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      {/* Real-time Notifications - Hidden on mobile to prevent interference */}
      <div className="hidden sm:block fixed bottom-4 left-4 z-40 space-y-2 max-w-xs">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 animate-slide-up"
            style={{
              animationDelay: '0s',
              animationDuration: '0.5s'
            }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 truncate">
                    {notification.name}
                  </span>
                  <span className="text-xs text-success font-medium">
                    {notification.time}
                  </span>
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {notification.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left order-1 lg:order-1 w-full">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in w-auto max-w-full">
              <Icon name="CheckCircle" size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">Trusted by {studentsCounter?.toLocaleString('en-IN')} successful students</span>
            </div>

            {/* Enhanced Main Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-fade-in mobile-text">
              Build a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Profitable YouTube Channel
              </span>{' '}
              in{' '}
              <span className="text-accent">30 Days</span>{' '}
              – No Camera Required, Just AI!
            </h1>

            {/* Enhanced Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fade-in mobile-text">
              Unlock the secret to automating your YouTube channel with AI and start earning passive income in just 30 days.
              No editing skills, no camera anxiety, no technical knowledge required.
            </p>

            {/* Enhanced Earnings Counter */}
            <div className="bg-white rounded-xl shadow-card p-4 sm:p-6 mb-6 border border-gray-200 animate-slide-up w-full">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Potential Monthly Earnings</p>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-success">
                  ₹{earningsCounter?.toLocaleString('en-IN')}+
                </div>
                <p className="text-xs text-gray-500 mt-1">Based on student results</p>
              </div>
            </div>

            {/* Enhanced Key Benefits */}
            <div className="space-y-3 mb-6 sm:mb-8 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 w-full">
                <div className="flex items-center space-x-2 text-xs sm:text-sm bg-white/50 rounded-lg p-2 w-full">
                  <Icon name="Zap" size={12} className="text-accent flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">No editing skills required</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm bg-white/50 rounded-lg p-2 w-full">
                  <Icon name="Bot" size={12} className="text-accent flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">AI-powered automation</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm bg-white/50 rounded-lg p-2 w-full">
                  <Icon name="FileText" size={12} className="text-accent flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Step-by-step blueprint</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm bg-white/50 rounded-lg p-2 w-full">
                  <Icon name="TrendingUp" size={12} className="text-accent flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Quick results in 30-60 days</span>
                </div>
              </div>
            </div>

            {/* Enhanced Primary CTA */}
            <div className="space-y-4 animate-fade-in w-full">
              <Button
                variant="default"
                size="xl"
                onClick={handleGetAccess}
                className="w-full bg-gradient-to-r from-accent to-warning hover:from-accent/90 hover:to-warning/90 text-white font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                iconName="ShoppingCart"
                iconPosition="left"
              >
                Start Your YouTube Journey Today!
              </Button>

              {/* Enhanced Urgency Elements */}
              <div className="space-y-3 w-full">
                <div className="flex flex-col items-center justify-center lg:justify-start space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center space-x-1 text-center">
                    <Icon name="Clock" size={12} className="text-warning w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    <span className="mobile-text">Limited-time offer: 50% OFF today only!</span>
                  </div>
                  <div className="flex items-center space-x-1 text-center">
                    <Icon name="Shield" size={12} className="text-success w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    <span className="mobile-text">30-day money-back guarantee</span>
                  </div>
                </div>

                {/* Scarcity Indicator */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center w-full">
                  <div className="flex items-center justify-center space-x-2 text-red-700 text-xs sm:text-sm font-medium">
                    <Icon name="AlertTriangle" size={12} className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="mobile-text">Only 47 spots available – Secure your copy now!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Social Proof */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 w-full">
            {/* Enhanced Success Metrics */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
              <div className="bg-white rounded-xl shadow-card p-3 sm:p-4 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300 w-full">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-1">97%</div>
                <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white rounded-xl shadow-card p-3 sm:p-4 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300 w-full">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-secondary mb-1">30</div>
                <div className="text-xs sm:text-sm text-gray-600">Days to Profit</div>
              </div>
            </div>

            {/* Enhanced Video Testimonial Preview */}
            {/* <div className="bg-white rounded-xl shadow-card p-4 sm:p-6 border border-gray-200 animate-slide-up max-w-full">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 relative overflow-hidden"> */}
                {/* Removing the rotating border animation */}
                {/* <img 
                  src="/Images/youtube.jpg"
                  alt="Success story testimonial"
                  className="w-full h-full object-contain relative z-10 rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Icon name="Play" size={12} className="text-primary ml-0.5 sm:ml-1 lg:w-5 lg:h-5" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  "I made ₹50,000 in my first 45 days using this ebook!"
                </p>
                <p className="text-xs text-gray-500">- Rajesh Kumar, Delhi</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <Icon name="ChevronDown" size={16} className="text-gray-400 sm:w-6 sm:h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
