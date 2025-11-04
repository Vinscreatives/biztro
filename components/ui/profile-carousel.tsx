"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface ProfileData {
  id: string;
  name: string;
  title: string;
  description: string;
  avatar: string;
  url: string;
  links: {
    primary: string;
    secondary: string;
    social: string;
  };
}

const baseProfiles: ProfileData[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Freelance Designer',
    description: 'Creating beautiful digital experiences for brands worldwide.',
    avatar: '/img/biztro_01.jpg',
    url: 'sarahchen',
    links: {
      primary: 'View Portfolio',
      secondary: 'Book Consultation',
      social: 'Follow on Dribbble'
    }
  },
  {
    id: '2',
    name: 'Marco\'s Pizzeria',
    title: 'Local Restaurant',
    description: 'Authentic Italian cuisine served with passion since 1995.',
    avatar: '/img/biztro_02.jpg',
    url: 'marcos-pizza',
    links: {
      primary: 'Order Online',
      secondary: 'Make Reservation',
      social: 'Follow on Instagram'
    }
  },
  {
    id: '3',
    name: 'David Park',
    title: 'Business Consultant',
    description: 'Helping startups scale with strategic growth solutions.',
    avatar: '/img/biztro_03.jpg',
    url: 'parkconsulting',
    links: {
      primary: 'Schedule Call',
      secondary: 'View Services',
      social: 'Connect on LinkedIn'
    }
  },
  {
    id: '4',
    name: 'Creative Studio Co.',
    title: 'Design Agency',
    description: 'Award-winning creative solutions for modern businesses.',
    avatar: '/img/biztro_04.jpg',
    url: 'creativestudio',
    links: {
      primary: 'See Our Work',
      secondary: 'Start Project',
      social: 'Follow on Behance'
    }
  },
  {
    id: '5',
    name: 'Alex Thompson',
    title: 'Fitness Coach',
    description: 'Transforming lives through personalized fitness programs.',
    avatar: '/img/biztro_05.jpg',
    url: 'alexfitpro',
    links: {
      primary: 'Book Session',
      secondary: 'View Programs',
      social: 'Follow on Instagram'
    }
  }
];

// Create seamless infinite scroll by duplicating profiles multiple times
const profiles: ProfileData[] = [
  ...baseProfiles,
  ...baseProfiles,
  ...baseProfiles,
  ...baseProfiles,
  ...baseProfiles,
  ...baseProfiles
];

export function ProfileCarousel() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);

  const cardHeight = 208;
  const cardWidth = 280; // Approximate width of each card for horizontal scrolling
  const setHeight = cardHeight * 5;
  const setWidth = cardWidth * 5;

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!containerRef.current || hoveredCard) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      positionRef.current += isMobile ? 1.2 : 0.6; // Slightly faster horizontal scroll

      const maxPosition = isMobile ? setWidth * 2 : setHeight * 2;

      if (positionRef.current >= maxPosition) {
        positionRef.current = positionRef.current - (isMobile ? setWidth : setHeight);
      }

      if (containerRef.current) {
        const transform = isMobile
          ? `translateX(-${positionRef.current}px)`
          : `translateY(-${positionRef.current}px)`;
        containerRef.current.style.transform = transform;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hoveredCard, cardHeight, setHeight, isMobile, setWidth]);

  const handleMouseEnter = (cardId: string) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className={`relative mx-auto ${isMobile ? 'w-full max-w-none px-4' : 'w-full max-w-xs sm:max-w-sm'}`}>
      <div className={`relative overflow-hidden flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#fffbeb]/10 to-white/20 backdrop-blur-sm border border-gray-100/30 shadow-xl ${
        isMobile ? 'h-72' : 'h-[80vh]'
      }`}>
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(to right, #282828 1px, transparent 1px), linear-gradient(to bottom, #282828 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className={`absolute inset-0 ${isMobile ? 'flex items-center' : 'flex items-center'}`}>
          <div
            ref={containerRef}
            className={`transition-transform duration-300 ease-out ${isMobile ? 'flex' : ''}`}
            style={{
              transform: isMobile ? 'translateX(0px)' : 'translateY(0px)',
              willChange: 'transform'
            }}
          >
            {profiles.map((profile, index) => (
              <div
                key={`${profile.id}-${index}`}
                className={`transition-all duration-500 ease-out ${
                  isMobile
                    ? `mx-2 flex-shrink-0 w-64 ${hoveredCard === profile.id ? 'scale-105 z-10' : hoveredCard ? 'scale-95 opacity-60' : 'scale-100'}`
                    : `mx-3 sm:mx-4 mb-2 ${hoveredCard === profile.id ? 'scale-105 z-10' : hoveredCard ? 'scale-95 opacity-60' : 'scale-100'}`
                }`}
                onMouseEnter={() => handleMouseEnter(profile.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformOrigin: 'center',
                  filter: hoveredCard === profile.id ? 'none' : hoveredCard ? 'blur(1px)' : 'none'
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-100/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-[#282828] to-[#282828]/90 px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs sm:text-sm">{profile.name}</div>
                      <div className="text-white/60 text-xs font-mono">biztro/{profile.url}</div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                    <div className="text-center space-y-2 sm:space-y-3">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-auto">
                        <Image
                          src={profile.avatar}
                          alt={profile.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover rounded-full ring-2 sm:ring-3 ring-[#fffbeb]/70"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-[#282828] mb-0.5">{profile.name}</h3>
                        <p className="text-xs text-[#282828]/70 font-medium">{profile.title}</p>
                        <p className="text-gray-600 text-xs leading-relaxed mt-1 sm:mt-2 max-w-xs mx-auto line-clamp-2">{profile.description}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <button className="w-full bg-[#282828] hover:bg-[#282828]/95 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium text-xs transition-all duration-200 hover:shadow-sm flex items-center justify-between group">
                        <span className="truncate">{profile.links.primary}</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-1" />
                      </button>
                      <button className="w-full bg-[#fffbeb]/80 hover:bg-[#fffbeb] text-[#282828] py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium text-xs border border-gray-200/60 transition-all duration-200 hover:shadow-sm flex items-center justify-between group">
                        <span className="truncate">{profile.links.secondary}</span>
                        <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#282828]/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#fffbeb]/30 rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
}
