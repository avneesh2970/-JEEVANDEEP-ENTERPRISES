import React, { useEffect, useRef } from 'react';
import { CORE_VALUES } from '../data/mockData';
import {
  FaIndustry,
  FaLayerGroup,
  FaAward,
  FaTag,
  FaUsers,
  FaTruckFast,
  FaHeadset,
  FaMapLocationDot,
  FaFaceSmile
} from 'react-icons/fa6';
import { animate, stagger } from 'animejs';

export const CoreValuesSection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'factory':  return <FaIndustry />;
      case 'layers':   return <FaLayerGroup />;
      case 'high_quality': return <FaAward />;
      case 'pricing':  return <FaTag />;
      case 'team':     return <FaUsers />;
      case 'delivery': return <FaTruckFast />;
      case 'support':  return <FaHeadset />;
      case 'network':  return <FaMapLocationDot />;
      case 'customer': return <FaFaceSmile />;
      default:         return <FaAward />;
    }
  };

  useEffect(() => {
    // ── Animate heading + cards when scrolled into view ──
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Heading slide up
          if (headingRef.current) {
            animate(headingRef.current, {
              opacity: [0, 1],
              translateY: ['30px', '0px'],
              duration: 600,
              ease: 'outCubic',
            });
          }

          // Cards stagger entrance
          const cards = gridRef.current?.querySelectorAll('.value-card');
          if (cards) {
            animate(cards, {
              opacity: [0, 1],
              translateY: ['40px', '0px'],
              scale: [0.92, 1],
              duration: 600,
              delay: stagger(80, { start: 150 }),
              ease: 'outBack',
            });
          }
        }
      },
      { threshold: 0.15 }
    );

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
      {/* Heading */}
      <div
        ref={headingRef}
        className="text-center mb-14"
        style={{ opacity: 0, willChange: 'transform, opacity' }}
      >
        <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3">
          Why Choose Us
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] md:leading-[50px] font-extrabold text-[#002147] mb-3 tracking-tight">
          Our Features
        </h2>
        <p className="text-base md:text-[17px] text-[#44474e] max-w-2xl mx-auto">
          Complete insulation range under one roof backed by over a decade of trust, competitive pricing, and certified quality.
        </p>
      </div>

      {/* 9 Features Cards grid (3x3 on desktop) */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
      >
        {CORE_VALUES.map((value) => (
          <div
            key={value.id}
            className="value-card bg-[#f2f4f8]/60 hover:bg-white border border-[#e0e3e7] hover:border-[#002147] p-6 rounded-2xl hover:shadow-md transition-all duration-300 flex items-start gap-4 group cursor-default"
            style={{ opacity: 0, willChange: 'transform, opacity' }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#002147] text-[#fea619] group-hover:bg-[#fea619] group-hover:text-[#002147] flex items-center justify-center shrink-0 text-xl transition-colors duration-300 shadow-xs">
              {renderIcon(value.icon)}
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#002147] tracking-tight">
                {value.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#44474e]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
