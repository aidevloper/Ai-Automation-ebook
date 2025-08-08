import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import ChapterBreakdownSection from './components/ChapterBreakdownSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import AnchorNavigation from '../../components/ui/AnchorNavigation';
import StickyPurchaseCTA from '../../components/ui/StickyPurchaseCTA';
import ProgressIndicator from '../../components/ui/ProgressIndicator';


const LandingPage = () => {
  // Analytics tracking
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'YouTube Automation eBook Landing Page',
        page_location: window.location.href
      });
    }

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent >= 25 && scrollPercent < 50) {
        window.gtag?.('event', 'scroll', { event_category: 'engagement', event_label: '25%_scroll' });
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        window.gtag?.('event', 'scroll', { event_category: 'engagement', event_label: '50%_scroll' });
      } else if (scrollPercent >= 75) {
        window.gtag?.('event', 'scroll', { event_category: 'engagement', event_label: '75%_scroll' });
      }
    };

    window.addEventListener('scroll', trackScrollDepth);
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, []);

  return (
    <>
      <Helmet>
        <title>Build a Six-Figure Faceless YouTube Channel in 30 Days Using AI | YouTube Automation eBook</title>
        <meta name="description" content="Complete step-by-step system for beginners - no camera, no editing, no technical skills required. Join 2,847+ successful students earning ₹2.5L+ monthly with AI-powered YouTube automation." />
        <meta name="keywords" content="YouTube automation, AI content creation, faceless YouTube channel, passive income, digital marketing, online business, YouTube monetization" />
        <meta name="author" content="YouTube Automation" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Build a Six-Figure Faceless YouTube Channel in 30 Days Using AI" />
        <meta property="og:description" content="Transform your life with our AI-powered YouTube automation system. 97% success rate, 30-day guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:site_name" content="YouTube Automation" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Build a Six-Figure Faceless YouTube Channel in 30 Days Using AI" />
        <meta name="twitter:description" content="Transform your life with our AI-powered YouTube automation system. 97% success rate, 30-day guarantee." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "YouTube Automation eBook",
            "description": "Complete step-by-step system for building a six-figure faceless YouTube channel using AI",
            "brand": {
              "@type": "Brand",
              "name": "YouTube Automation"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-hidden">
        {/* Progress Indicator */}
        <ProgressIndicator />
        
        {/* Anchor Navigation */}
        <AnchorNavigation />
        
        {/* Main Content Sections */}
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ChapterBreakdownSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        
        {/* Sticky Elements */}
        <StickyPurchaseCTA />
      </div>
    </>
  );
};

export default LandingPage;
