"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Mail, Smartphone, Instagram, Users, Eye, MousePointerClick, Activity, Clock } from "lucide-react";
import { DisplayCards } from "@/components/ui/display-cards";
import { Meteors } from "@/components/ui/meteors";

export function FeaturedAdSpaces() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({
    website: false,
    mobileApp: false,
    socialMedia: false,
  });

  const toggleFlip = (card: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  // Website Card Data
  const websiteCard = {
    front: {
      icon: <Monitor className="size-5 text-[#9575ff]" />,
      category: "Website",
      cardKey: "website",
      title: "Tech Blog Premium Banner",
      description: "500K monthly visitors",
      stats: [
        { label: "Avg. Time on Site", value: "4.2 minutes" },
        { label: "Page Views", value: "2.5M monthly" },
        { label: "Target Audience", value: "Tech Professionals" }
      ],
      date: "R 8,500/month",
      iconClassName: "text-[#9575ff]",
      titleClassName: "text-[#9575ff]",
    },
    back: {
      icon: <Users className="size-5 text-[#9575ff]" />,
      category: "Website",
      cardKey: "website",
      title: "Visitors & Impressions",
      description: "500K visitors • 2.5M impressions",
      stats: [
        { label: "Click-Through Rate", value: "3.2%" },
        { label: "Conversion Rate", value: "2.8%" },
        { label: "Bounce Rate", value: "15%" }
      ],
      date: "Premium Position Available",
      iconClassName: "text-[#9575ff]",
      titleClassName: "text-[#9575ff]",
    }
  };

  // Mobile App Card Data
  const mobileAppCard = {
    front: {
      icon: <Smartphone className="size-5 text-[#F9CA56]" />,
      category: "Mobile App",
      cardKey: "mobileApp",
      title: "Fitness App In-App Ads",
      description: "200K active users",
      stats: [
        { label: "Daily Active Users", value: "85K" },
        { label: "Avg. Session Time", value: "25 mins" },
        { label: "User Demographics", value: "18-35 age" }
      ],
      date: "R 12,000/week",
      iconClassName: "text-[#F9CA56]",
      titleClassName: "text-[#F9CA56]",
    },
    back: {
      icon: <Activity className="size-5 text-[#F9CA56]" />,
      category: "Mobile App",
      cardKey: "mobileApp",
      title: "Users & Activity",
      description: "1.2M sessions per week",
      stats: [
        { label: "Ad Engagement", value: "4.5%" },
        { label: "Retention Rate", value: "78%" },
        { label: "User Rating", value: "4.8/5" }
      ],
      date: "Premium Slots Available",
      iconClassName: "text-[#F9CA56]",
      titleClassName: "text-[#F9CA56]",
    }
  };

  // Social Media Card Data
  const socialMediaCard = {
    front: {
      icon: <Instagram className="size-5 text-[#53E2D2]" />,
      category: "Social Media",
      cardKey: "socialMedia",
      title: "Travel Influencer Promotion",
      description: "350K followers",
      stats: [
        { label: "Engagement Rate", value: "4.8%" },
        { label: "Audience Reach", value: "120K avg" },
        { label: "Content Type", value: "Photos & Reels" }
      ],
      date: "R 15,000/post",
      iconClassName: "text-[#53E2D2]",
      titleClassName: "text-[#53E2D2]",
    },
    back: {
      icon: <Users className="size-5 text-[#53E2D2]" />,
      category: "Social Media",
      cardKey: "socialMedia",
      title: "Reach & Engagement",
      description: "High-quality travel content",
      stats: [
        { label: "Story Views", value: "85K avg" },
        { label: "Save Rate", value: "12%" },
        { label: "Comment Rate", value: "3.2%" }
      ],
      date: "Collab Opportunities Open",
      iconClassName: "text-[#53E2D2]",
      titleClassName: "text-[#53E2D2]",
    }
  };

  const CardContent = ({ data, isFlipped, color }: any) => (
    <div className="w-full h-full relative transform-gpu transition-all duration-700" style={{
      transformStyle: 'preserve-3d',
      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    }}>
      {/* Front */}
      <div className="absolute inset-0 w-full h-full backface-hidden">
        <div className="h-full bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all">
          <div className="flex flex-col h-full">
            {/* Header with Icon and Category */}
            <div className="flex items-center justify-between mb-2">
              <div className={`w-10 h-10 rounded-lg ${data.front.iconClassName} bg-black/30 backdrop-blur-sm flex items-center justify-center`}>
                {data.front.icon}
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${data.front.iconClassName} bg-black/30 backdrop-blur-sm`}>
                {data.front.category}
              </span>
            </div>

            {/* Title and Description */}
            <div className="mb-3">
              <h3 className={`text-xl font-bold text-white mb-1`}>{data.front.title}</h3>
              <p className="text-base text-white/90">{data.front.description}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 flex-grow">
              {data.front.stats.map((stat, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-2 hover:bg-black/40 transition-colors">
                  <div className="text-white/70 text-xs mb-0.5">{stat.label}</div>
                  <div className="text-white font-semibold text-sm">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
              <div>
                <div className="text-white/70 text-xs mb-0.5">Price</div>
                <div className={`text-lg font-bold ${data.front.iconClassName}`}>{data.front.date}</div>
              </div>
              <button 
                className={`px-4 py-1.5 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/40 
                  transition-all flex items-center gap-1 text-white font-medium group border border-white/10 hover:border-white/30`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFlip(data.front.cardKey);
                }}
              >
                <span>Flip</span>
                <span className="text-base group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="absolute inset-0 w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
        <div className="h-full bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all">
          <div className="flex flex-col h-full">
            {/* Header with Icon and Category */}
            <div className="flex items-center justify-between mb-2">
              <div className={`w-10 h-10 rounded-lg ${data.back.iconClassName} bg-black/30 backdrop-blur-sm flex items-center justify-center`}>
                {data.back.icon}
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${data.back.iconClassName} bg-black/30 backdrop-blur-sm`}>
                {data.back.category}
              </span>
            </div>

            {/* Title and Description */}
            <div className="mb-3">
              <h3 className={`text-xl font-bold text-white mb-1`}>{data.back.title}</h3>
              <p className="text-base text-white/90">{data.back.description}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 flex-grow">
              {data.back.stats.map((stat, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-2 hover:bg-black/40 transition-colors">
                  <div className="text-white/70 text-xs mb-0.5">{stat.label}</div>
                  <div className="text-white font-semibold text-sm">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
              <div>
                <div className="text-white/70 text-xs mb-0.5">Status</div>
                <div className={`text-lg font-bold ${data.back.iconClassName}`}>{data.back.date}</div>
              </div>
              <button 
                className={`px-4 py-1.5 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/40 
                  transition-all flex items-center gap-1 text-white font-medium group border border-white/10 hover:border-white/30`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFlip(data.back.cardKey);
                }}
              >
                <span className="text-base group-hover:-translate-x-0.5 transition-transform">←</span>
                <span>Flip</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-b from-[#32147f]/20 to-transparent" />
      <Meteors number={20} className="absolute inset-0" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-purple-400 mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Featured Ad Spaces
            </motion.h2>
            <motion.p 
              className="text-base text-purple-300/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  delay: 0.2
                }
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Discover premium advertising opportunities across various platforms
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {/* Website Card */}
            <motion.div 
              className="relative h-[350px] perspective"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-full h-full">
                <CardContent data={websiteCard} isFlipped={flippedCards.website} color="#9575ff" />
              </div>
            </motion.div>

            {/* Mobile App Card */}
            <motion.div 
              className="relative h-[350px] perspective"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full h-full">
                <CardContent data={mobileAppCard} isFlipped={flippedCards.mobileApp} color="#F9CA56" />
              </div>
            </motion.div>

            {/* Social Media Card */}
            <motion.div 
              className="relative h-[350px] perspective"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-full h-full">
                <CardContent data={socialMediaCard} isFlipped={flippedCards.socialMedia} color="#53E2D2" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .perspective {
          perspective: 2000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
} 