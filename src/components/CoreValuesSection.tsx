import React, { useEffect, useRef } from 'react';
import { CORE_VALUES } from '../data/mockData';
import { FaHandshake, FaAward, FaClock, FaUserGear } from 'react-icons/fa6';
import { animate, stagger } from 'animejs';

export const CoreValuesSection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'handshake':  return <FaHandshake />;
      case 'high_quality': return <FaAward />;
      case 'schedule':   return <FaClock />;
      case 'engineering': return <FaUserGear />;
      default:           return <FaAward />;
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
              translateY: ['50px', '0px'],
              scale: [0.88, 1],
              duration: 700,
              delay: stagger(110, { start: 200 }),
              ease: 'outBack',
            });
          }

          // Icons pop in with a bounce
          const icons = gridRef.current?.querySelectorAll('.value-icon');
          if (icons) {
            animate(icons, {
              scale: [0, 1.2, 1],
              rotate: ['-15deg', '0deg'],
              opacity: [0, 1],
              duration: 600,
              delay: stagger(110, { start: 450 }),
              ease: 'outBack',
            });
          }
        }
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto overflow-hidden">

      {/* Heading */}
      <div
        ref={headingRef}
        className="text-center mb-16 opacity-0"
        style={{ willChange: 'transform, opacity' }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-[44px] md:leading-[52px] font-extrabold text-[#002147] mb-4 tracking-tight">
          Core Values
        </h2>
        <p className="text-base md:text-[18px] text-[#44474e] max-w-2xl mx-auto">
          The principles that govern our operations and define our professional relationships.
        </p>
      </div>

      {/* Cards grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left"
      >
        {CORE_VALUES.map((value) => (
          <div
            key={value.id}
            className="value-card bg-white border border-[#c4c6cf]/80 p-6 md:p-8 rounded-xl hover:border-[#002147] industrial-shadow transition-all duration-300 flex flex-col group cursor-default opacity-0"
            style={{ willChange: 'transform, opacity' }}
            onMouseEnter={(e) => {
              animate(e.currentTarget, {
                translateY: '-6px',
                duration: 300,
                ease: 'outCubic',
              });
            }}
            onMouseLeave={(e) => {
              animate(e.currentTarget, {
                translateY: '0px',
                duration: 300,
                ease: 'outCubic',
              });
            }}
          >
            <div
              className="value-icon w-12 h-12 rounded-lg bg-[#fea619]/15 flex items-center justify-center mb-4 group-hover:bg-[#fea619] transition-colors duration-300 text-[#855300] group-hover:text-[#002147] opacity-0"
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="text-2xl">{renderIcon(value.icon)}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-2 tracking-tight">
              {value.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[#44474e]">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
