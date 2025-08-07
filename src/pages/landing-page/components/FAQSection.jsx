import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Do I need any technical skills or experience to start?",
      answer: `Absolutely not! Our system is designed for complete beginners. You don't need any video editing skills, camera presence, or technical knowledge. The AI tools we teach handle all the complex work for you.\n\nWe provide step-by-step instructions that anyone can follow, regardless of their technical background. Many of our most successful students started with zero YouTube experience.`,
      category: "Getting Started"
    },
    {
      question: "How quickly can I start making money?",
      answer: `Most students see their first earnings within 30 days of implementing our system. However, results can vary based on your niche selection and consistency.\n\nOur fastest student made ₹50,000 in their first 2 weeks, while the average student reaches ₹1,00,000+ per month by day 45. The key is following our proven process exactly as outlined.`,
      category: "Earnings"
    },
    {
      question: "What if I don't want to show my face on camera?",answer: `Perfect! Our entire system is built around faceless YouTube channels. You'll never need to appear on camera or even use your real voice.\n\nWe teach you how to create engaging content using AI-generated voiceovers, stock footage, animations, and screen recordings. Some of the highest-earning YouTube channels are completely faceless.`,category: "Privacy"
    },
    {
      question: "Are the AI tools expensive to use?",
      answer: `Most of the AI tools we recommend have free tiers that are perfect for beginners. You can start with $0 investment in tools.\n\nAs you scale, some premium features cost ₹500-2000 per month, but by then you'll be earning much more than that. We also provide free alternatives for every paid tool mentioned.`,
      category: "Costs"
    },
    {
      question: "How much time do I need to invest daily?",answer: `With our AI automation system, you only need 30-60 minutes per day once you're set up. The initial setup takes about 2-3 hours spread over a week.\n\nTraditional YouTube creators spend 8+ hours per video. Our students create the same quality content in under 30 minutes using AI tools and templates we provide.`,category: "Time Investment"
    },
    {
      question: "What niches work best with this system?",answer: `Our system works across 50+ profitable niches including personal finance, health & fitness, technology, motivation, cooking, travel, and more.\n\nWe provide a complete niche selection framework that helps you choose based on your interests and profit potential. Some niches are more beginner-friendly than others, and we guide you to the best starting point.`,category: "Niches"
    },
    {
      question: "Is this just another get-rich-quick scheme?",
      answer: `No, this is a legitimate business model used by thousands of successful YouTubers. We teach real skills and proven strategies, not shortcuts or tricks.\n\nYou'll need to put in consistent effort and follow our system. While results can come quickly, this is about building a sustainable online business, not overnight riches.`,
      category: "Legitimacy"
    },
    {
      question: "What\'s included in the money-back guarantee?",
      answer: `We offer a full 60-day money-back guarantee. If you implement our system for 60 days and don't see results, or if you're not satisfied for any reason, we'll refund your entire purchase.\n\nNo questions asked, no hoops to jump through. Simply email us within 60 days and we'll process your refund immediately.`,
      category: "Guarantee"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="HelpCircle" size={16} />
            <span>Common Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our AI-powered YouTube automation system.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {faq?.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq?.question}
                  </h3>
                </div>
                <div className={`transform transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={20} className="text-gray-500" />
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    {faq?.answer?.split('\n\n')?.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={32} className="text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help! Get personalized answers to your specific questions 
              about our YouTube automation system.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Clock" size={16} />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Users" size={16} />
                <span>Expert support team</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="MessageSquare" size={16} />
                <span>WhatsApp support available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;