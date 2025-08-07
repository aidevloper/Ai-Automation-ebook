import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HeaderSection from './components/HeaderSection';
import OrderSummarySection from './components/OrderSummarySection';
import PaymentFormSection from './components/PaymentFormSection';
import UrgencySection from './components/UrgencySection';
import FooterSection from './components/FooterSection';
import Icon from '../../components/AppIcon';

const CheckoutPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: 'card'
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Payment submitted:', formData);
    
    // Store user name for success page
    localStorage.setItem('userName', formData.firstName || 'Valued Customer');
    
    // Redirect to success page with user info
    const successUrl = `/payment-success?name=${encodeURIComponent(formData.firstName || 'Valued Customer')}&transaction_id=${Date.now()}`;
    window.location.href = successUrl;
  };

  return (
    <>
      <Helmet>
        <title>Secure Checkout - Build a Six-Figure YouTube Channel eBook | 50% Off Today</title>
        <meta name="description" content="Complete your purchase securely. Get instant access to our AI-powered YouTube automation system with 30-day money-back guarantee." />
        <meta name="keywords" content="YouTube automation checkout, secure payment, digital download" />
        <meta property="og:title" content="Secure Checkout - YouTube Automation eBook" />
        <meta property="og:description" content="Complete your purchase securely. 50% off today only!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/checkout" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        {/* Header */}
        <HeaderSection />
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Order Summary */}
            <div className="space-y-6">
              <OrderSummarySection />
              <UrgencySection timeLeft={timeLeft} />
            </div>
            
            {/* Right Column - Payment Form */}
            <div className="space-y-6">
              <PaymentFormSection 
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default CheckoutPage; 