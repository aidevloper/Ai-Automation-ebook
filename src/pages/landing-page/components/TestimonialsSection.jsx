import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      income: "₹11,23,110",
      timeframe: "65 Days",
      rating: 5,
      text: `I was skeptical about faceless YouTube channels, but this system completely changed my perspective. Within 65 days, I had 6 videos that went viral and earned my first ₹11,23,110. The AI tools mentioned in the eBook are game-changers!`,
      videoThumbnail: "https://onehourprofessor.b-cdn.net/wp-content/uploads/2021/07/make-money-on-youtube.png",
      channelStats: {
        subscribers: "65.2K",
        views: "1.1M",
        videos: 42
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      avatar: "https://t4.ftcdn.net/jpg/05/70/57/47/360_F_570574724_HWfki1q3XZt9WzVlCcQujOV5Jxe8UBG1.jpg",
      income: "₹4,57,988.60",
      timeframe: "One Month",
      rating: 5,
      text: `As a working mother, I needed something that wouldn't take away time from my family. This AI-powered approach let me create content during my lunch breaks. I'm now earning more than my full-time job!`,
      videoThumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*LzmRECP0PJGGT4NdC0bHyQ.png",
      channelStats: {
        subscribers: "36.32K",
        views: "234.2K",
        videos: 12
      }
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Bangalore",
      avatar: "https://st4.depositphotos.com/10313122/22316/i/450/depositphotos_223166560-stock-photo-young-handsome-indian-man-against.jpg",
      income: "₹2,88,006",
      timeframe: "Third Month",
      rating: 5,
      text: `I tried traditional YouTube for 2 years with zero success. This eBook taught me the AI automation secrets that big creators don't want you to know. Now I run 5 profitable channels!`,
      videoThumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*YbaW9C3BsUCSR4JeqP936A.png",
      channelStats: {
        subscribers: "27.3K",
        views: "129.4K",
        videos: 18
      }
    },
    {
      id: 4,
      name: "Sneha Gupta",
      location: "Pune",
      avatar: "https://t3.ftcdn.net/jpg/06/60/16/72/360_F_660167287_gzYr2ejTMDX1dCyj96YNFb7FiwJZPrvK.jpg",
      income: "₹14,71,661",
      timeframe: "90 Days",
      rating: 5,
      text: `The step-by-step process is so clear that even my 60-year-old father could follow it. The AI tools do all the heavy lifting while I focus on strategy. This is the future of content creation!`,
      videoThumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*qc_6nwmPzM_ZMSzs34onOQ.jpeg",
      channelStats: {
        subscribers: "62.3K",
        views: "11.7M",
        videos: 60
      }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const currentData = testimonials?.[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Real Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See What Our Students{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-secondary">
              Are Achieving
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real results. These are actual earnings from students who followed our AI-powered system.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-elevation border border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Video/Image */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <Image
                    src={currentData?.videoThumbnail}
                    alt={`${currentData?.name} success story`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Icon name="Play" size={24} className="text-primary ml-1" />
                    </div>
                  </div>
                  
                  {/* Income Badge */}
                  <div className="absolute top-4 left-4 bg-success text-white px-4 py-2 rounded-lg font-bold">
                    {currentData?.income} in {currentData?.timeframe}
                  </div>
                </div>
                
                {/* Channel Stats */}
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{currentData?.channelStats?.subscribers}</div>
                      <div className="text-sm text-gray-600">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">{currentData?.channelStats?.views}</div>
                      <div className="text-sm text-gray-600">Total Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{currentData?.channelStats?.videos}</div>
                      <div className="text-sm text-gray-600">Videos</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentData?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{currentData?.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={currentData?.avatar}
                    alt={currentData?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{currentData?.name}</div>
                    <div className="text-sm text-gray-600">{currentData?.location}</div>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-lg text-sm font-medium">
                  <Icon name="ShieldCheck" size={16} />
                  <span>Verified Income Screenshot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-elevation border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Icon name="ChevronLeft" size={20} className="text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-elevation border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <Icon name="ChevronRight" size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2,847</div>
            <div className="text-sm text-gray-600">Successful Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">₹12.5Cr+</div>
            <div className="text-sm text-gray-600">Total Earnings Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">97%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">30</div>
            <div className="text-sm text-gray-600">Avg Days to First ₹1L</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
