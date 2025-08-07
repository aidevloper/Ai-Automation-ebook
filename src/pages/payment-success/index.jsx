import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import HeaderSection from './components/HeaderSection';
import SuccessConfirmationSection from './components/SuccessConfirmationSection';
import NextStepsSection from './components/NextStepsSection';
import GuaranteeReminderSection from './components/GuaranteeReminderSection';
import FooterSection from './components/FooterSection';
import Confetti from './components/Confetti';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [showConfetti, setShowConfetti] = useState(true);
  const [userName, setUserName] = useState('');

  // Get user name from URL params or localStorage
  useEffect(() => {
    const name = searchParams.get('name') || localStorage.getItem('userName') || 'Valued Customer';
    setUserName(name);
    
    // Store for future use
    if (name !== 'Valued Customer') {
      localStorage.setItem('userName', name);
    }

    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  // Track conversion in analytics
  useEffect(() => {
    // Google Analytics conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: searchParams.get('transaction_id') || 'success_' + Date.now(),
        value: 999,
        currency: 'INR',
        items: [{
          item_id: 'youtube_automation_ebook',
          item_name: 'Build a Six-Figure YouTube Channel eBook',
          price: 999,
          quantity: 1
        }]
      });
    }
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>Payment Successful! - Your YouTube Automation eBook is Ready | Download Now</title>
        <meta name="description" content="Congratulations! Your payment was successful. Download your AI-powered YouTube automation eBook and start building your six-figure channel today." />
        <meta name="keywords" content="payment successful, YouTube automation, eBook download, AI content creation" />
        <meta property="og:title" content="Payment Successful! - Your eBook is Ready" />
        <meta property="og:description" content="Congratulations! Download your YouTube automation eBook and start your journey to success." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/payment-success" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-success/5 via-white to-primary/5 relative overflow-hidden">
        {/* Confetti Animation */}
        {showConfetti && <Confetti />}
        
        {/* Header */}
        <HeaderSection userName={userName} />
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {/* Success Confirmation */}
            <SuccessConfirmationSection userName={userName} />
            
            {/* Next Steps */}
            <NextStepsSection />
            
            {/* Guarantee Reminder */}
            <GuaranteeReminderSection />
          </div>
        </div>
        
        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default PaymentSuccessPage; 