import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const SolutionSection = () => {
  const [demoTopic, setDemoTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);

  const handleDemo = async () => {
    if (!demoTopic?.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent({
        title: `${demoTopic}: Complete Guide for Beginners in 2024`,
        description: `Discover everything you need to know about ${demoTopic?.toLowerCase()}. This comprehensive guide covers step-by-step instructions, expert tips, and proven strategies that actually work. Perfect for beginners who want to master ${demoTopic?.toLowerCase()} quickly and effectively.`,
        thumbnail: `AI-generated thumbnail concept: Bold text "${demoTopic}" with eye-catching graphics, trending colors, and professional design elements`,
        tags: ['beginner guide', demoTopic?.toLowerCase(), '2024', 'tutorial', 'step by step']
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Lightbulb" size={16} />
            <span>The AI Revolution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What If You Could{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Automate Everything?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered system eliminates every obstacle that stops creators from succeeding. 
            No camera, no editing, no guesswork - just results.
          </p>
        </div>

        {/* Traditional vs AI Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Method */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="X" size={32} className="text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Traditional Method</h3>
              <p className="text-gray-600">The hard way that 95% fail at</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={20} className="text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">8+ Hours Per Video</h4>
                  <p className="text-sm text-gray-600">Scripting, filming, editing, thumbnails</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Camera" size={20} className="text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Face-to-Camera Required</h4>
                  <p className="text-sm text-gray-600">Expensive equipment, lighting, anxiety</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="TrendingDown" size={20} className="text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Inconsistent Results</h4>
                  <p className="text-sm text-gray-600">No guarantee of views or income</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="DollarSign" size={20} className="text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">High Upfront Costs</h4>
                  <p className="text-sm text-gray-600">₹50,000+ for equipment and software</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Method */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">AI-Powered Method</h3>
              <p className="text-gray-600">The smart way that guarantees success</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={20} className="text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">30 Minutes Per Video</h4>
                  <p className="text-sm text-gray-600">AI handles everything automatically</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="EyeOff" size={20} className="text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">100% Faceless</h4>
                  <p className="text-sm text-gray-600">No camera, no anxiety, complete privacy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="TrendingUp" size={20} className="text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Predictable Growth</h4>
                  <p className="text-sm text-gray-600">Proven system with 97% success rate</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Smartphone" size={20} className="text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Just Your Phone</h4>
                  <p className="text-sm text-gray-600">No expensive equipment needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive AI Demo */}
        <div className="bg-white rounded-2xl shadow-elevation p-8 border border-gray-200 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Try Our AI Content Generator
            </h3>
            <p className="text-gray-600">
              Enter any topic and watch AI create a complete video strategy in seconds
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex space-x-4 mb-6">
              <Input
                type="text"
                placeholder="Enter a video topic (e.g., 'Digital Marketing')"
                value={demoTopic}
                onChange={(e) => setDemoTopic(e?.target?.value)}
                className="flex-1"
              />
              <Button
                variant="default"
                onClick={handleDemo}
                loading={isGenerating}
                disabled={!demoTopic?.trim() || isGenerating}
                className="bg-primary hover:bg-primary/90"
                iconName="Wand2"
                iconPosition="left"
              >
                Generate
              </Button>
            </div>

            {generatedContent && (
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI-Generated Title:</h4>
                  <p className="text-gray-700 bg-white p-3 rounded border">
                    {generatedContent?.title}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI-Generated Description:</h4>
                  <p className="text-gray-700 bg-white p-3 rounded border text-sm">
                    {generatedContent?.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Thumbnail Concept:</h4>
                  <p className="text-gray-700 bg-white p-3 rounded border text-sm">
                    {generatedContent?.thumbnail}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optimized Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedContent?.tags?.map((tag, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3-Step Process */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Our Simple 3-Step Process
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Choose Your Niche</h4>
            <p className="text-gray-600">
              Pick from 50+ profitable niches or let AI suggest the perfect one based on your interests
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary">2</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">AI Creates Everything</h4>
            <p className="text-gray-600">
              Our AI generates scripts, voiceovers, visuals, thumbnails, and descriptions automatically
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent">3</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Upload & Profit</h4>
            <p className="text-gray-600">
              Upload your videos and start earning from multiple revenue streams within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;