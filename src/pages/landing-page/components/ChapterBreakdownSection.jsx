import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ChapterBreakdownSection = () => {
  const [expandedChapter, setExpandedChapter] = useState(null);

  const chapters = [
    {
      id: 1,
      title: "Chapter 1 & 2: How to Build & Monetize a YouTube Automation Channel in 30 Days",
      description: "In these chapters, we cover everything you need to know about setting up and monetizing your YouTube channel in just 30 days. You'll learn the basics of automation, tools to use, and how to make your channel profitable quickly without showing your face or spending hours editing videos.",
      image: "https://i.etsystatic.com/42677351/r/il/75821c/6887012097/il_1588xN.6887012097_qwf6.jpg",
      icon: "Play",
      color: "primary",
      keyPoints: [
        "Step-by-step channel setup process",
        "Automation fundamentals for beginners",
        "Quick monetization strategies",
        "No-face content creation techniques"
      ]
    },
    {
      id: 2,
      title: "Chapter 3 to 16: How to Go Viral with the 2025 YouTube Algorithm",
      description: "These chapters dive deep into the latest 2025 YouTube algorithm changes and how you can use automation to leverage them. You'll learn how to create content that gets recommended by YouTube and go viral with minimal effort.",
      image: "https://i.etsystatic.com/42677351/r/il/02468a/6839048790/il_1588xN.6839048790_9w9s.jpg",
      icon: "TrendingUp",
      color: "secondary",
      keyPoints: [
        "2025 algorithm secrets revealed",
        "Viral content creation strategies",
        "SEO optimization techniques",
        "Recommendation system mastery"
      ]
    },
    {
      id: 3,
      title: "Chapters 4, 5 & 7: The Best Free & Paid AI Tools to Automate Your Channel",
      description: "Discover which AI tools work best for beginners to automate video creation, editing, and SEO. These tools will handle most of your channel's needs, leaving you with more time to focus on scaling your content and growing your audience.",
      image: "https://i.etsystatic.com/42677351/r/il/123ea2/6839054682/il_1588xN.6839054682_clcz.jpg",
      icon: "Bot",
      color: "accent",
      keyPoints: [
        "Free AI tools for beginners",
        "Premium automation software",
        "Video creation automation",
        "Editing and SEO tools"
      ]
    },
    {
      id: 4,
      title: "Chapters 6, 8 & 9: High-Profit Niches & AI-Generated Content That Actually Works",
      description: "In these chapters, we'll walk you through the best high-profit niches on YouTube and how to generate content that actually performs. With AI-driven content creation, you'll discover which niches have the highest earning potential.",
      image: "https://i.etsystatic.com/42677351/r/il/e8167f/6887030087/il_1588xN.6887030087_dfg7.jpg",
      icon: "Target",
      color: "warning",
      keyPoints: [
        "Most profitable YouTube niches",
        "AI content generation strategies",
        "Niche research and validation",
        "Content performance optimization"
      ]
    },
    {
      id: 5,
      title: "Chapters 10, 12 & 13: 3 Passive Income Streams with YouTube Automation",
      description: "Learn how to monetize your YouTube channel in three profitable ways. These chapters reveal strategies to create automated streams of income from ads, affiliate marketing, and digital product sales.",
      image: "https://i.etsystatic.com/42677351/r/il/a3fe72/6839058914/il_1588xN.6839058914_hf6v.jpg",
      icon: "DollarSign",
      color: "success",
      keyPoints: [
        "Ad revenue optimization",
        "Affiliate marketing strategies",
        "Digital product creation",
        "Passive income automation"
      ]
    },
    {
      id: 6,
      title: "Chapters 11 & 14: Content Schedules That Scale Your Channel to $100K+",
      description: "Discover how to schedule your content strategically to maximize reach and engagement. These chapters will teach you how to scale your channel to a six-figure business by optimizing your content production process.",
      image: "https://i.etsystatic.com/42677351/r/il/d34e16/6839062980/il_1588xN.6839062980_djcz.jpg",
      icon: "Calendar",
      color: "primary",
      keyPoints: [
        "Content scheduling strategies",
        "Scaling to six-figure revenue",
        "Production process optimization",
        "Growth acceleration techniques"
      ]
    },
    {
      id: 7,
      title: "Chapter 17: The Most Common Mistakes That Kill New YouTube Channels",
      description: "We identify and help you avoid the most common mistakes that destroy new YouTube channels. Learn what to do—and what not to do—when building your brand on YouTube.",
      image: "https://i.etsystatic.com/42677351/r/il/d46614/6887046755/il_1588xN.6887046755_50fy.jpg",
      icon: "AlertTriangle",
      color: "destructive",
      keyPoints: [
        "Common channel-killing mistakes",
        "What NOT to do on YouTube",
        "Brand building best practices",
        "Avoiding failure pitfalls"
      ]
    },
    {
      id: 8,
      title: "Chapters 18, 20 & 21: Build a Team & Future-Proof Your YouTube Business",
      description: "Learn how to build a team to support your growing YouTube business and automate the process further. These chapters help you create a sustainable, scalable business model that lasts for years.",
      image: "https://i.etsystatic.com/42677351/r/il/71126b/6839077208/il_1588xN.6839077208_9hfo.jpg",
      icon: "Users",
      color: "secondary",
      keyPoints: [
        "Team building strategies",
        "Business scalability planning",
        "Future-proofing your channel",
        "Sustainable growth models"
      ]
    }
  ];

  const toggleChapter = (chapterId) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  return (
    <section id="chapters" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            <Icon name="BookOpen" size={14} className="sm:w-4 sm:h-4" />
            <span>Complete Chapter Breakdown</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in">
            What You'll Learn in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              This Ebook
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            A comprehensive 21-chapter system that takes you from complete beginner to YouTube automation expert. 
            Each chapter builds upon the previous one, ensuring you have a complete roadmap to success.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="space-y-8 sm:space-y-12">
          {chapters?.map((chapter, index) => (
            <div
              key={chapter?.id}
              className={`bg-white rounded-2xl shadow-card border border-gray-200 overflow-hidden hover:shadow-elevation transition-all duration-300 ${
                expandedChapter === chapter?.id ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={chapter?.image}
                    alt={chapter?.title}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    style={{
                      minHeight: '200px',
                      maxHeight: '500px',
                      width: '100%'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Chapter Number Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-full bg-${chapter?.color}/90 text-white flex items-center justify-center font-bold text-lg shadow-lg`}>
                      {chapter?.id}
                    </div>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className={`w-10 h-10 rounded-full bg-white/90 text-${chapter?.color} flex items-center justify-center shadow-lg`}>
                      <Icon name={chapter?.icon} size={20} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className={`inline-flex items-center space-x-2 bg-${chapter?.color}/10 text-${chapter?.color} px-3 py-1 rounded-full text-xs font-medium mb-3`}>
                      <Icon name={chapter?.icon} size={12} />
                      <span>Chapter {chapter?.id}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {chapter?.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                      {chapter?.description}
                    </p>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Topics Covered:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {chapter?.keyPoints?.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                          <Icon name="CheckCircle" size={12} className="text-success flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleChapter(chapter?.id)}
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
                  >
                    <span>{expandedChapter === chapter?.id ? 'Show Less' : 'Learn More'}</span>
                    <Icon 
                      name="ChevronDown" 
                      size={14} 
                      className={`transform transition-transform duration-200 ${
                        expandedChapter === chapter?.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Expanded Content */}
                  {expandedChapter === chapter?.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
                      <h4 className="font-semibold text-gray-900 mb-2">What You'll Master:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Step-by-step implementation guide</li>
                        <li>• Real-world case studies and examples</li>
                        <li>• Actionable strategies you can use immediately</li>
                        <li>• Common pitfalls and how to avoid them</li>
                        <li>• Tools and resources for maximum efficiency</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 sm:p-8 max-w-4xl mx-auto animate-slide-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Ready to Master All 21 Chapters?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Get instant access to the complete YouTube automation system and start building your six-figure channel today.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">21</div>
                <div className="text-xs sm:text-sm text-gray-600">Chapters</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">200+</div>
                <div className="text-xs sm:text-sm text-gray-600">Pages</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">AI Tools</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-warning mb-1">30</div>
                <div className="text-xs sm:text-sm text-gray-600">Days</div>
              </div>
            </div>
            
            <button
              onClick={() => window.location.href = 'https://spf.bio/5i7WO'}
              className="bg-gradient-to-r from-accent to-warning hover:from-accent/90 hover:to-warning/90 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Instant Access Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterBreakdownSection; 