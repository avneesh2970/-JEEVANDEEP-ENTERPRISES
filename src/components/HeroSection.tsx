import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCircleCheck, FaTruckFast, FaBuilding } from 'react-icons/fa6';
import { animate, stagger } from 'animejs';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestQuote,
  onExploreProducts,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── 1. Title words stagger slide-up reveal ──
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('.hero-word');
      animate(words, {
        opacity: [0, 1],
        translateY: ['40px', '0px'],
        duration: 700,
        delay: stagger(80, { start: 200 }),
        ease: 'outExpo',
      });
    }

    // ── 2. Subtitle fade + slide ──
    if (subtitleRef.current) {
      animate(subtitleRef.current, {
        opacity: [0, 1],
        translateY: ['24px', '0px'],
        duration: 700,
        delay: 700,
        ease: 'outCubic',
      });
    }

    // ── 3. Bottom badges stagger ──
    if (badgesRef.current) {
      const badges = badgesRef.current.querySelectorAll('.hero-badge');
      animate(badges, {
        opacity: [0, 1],
        translateY: ['20px', '0px'],
        scale: [0.9, 1],
        duration: 500,
        delay: stagger(120, { start: 900 }),
        ease: 'outBack',
      });
    }

    // ── 4. Floating particles ──
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle');
      animate(particles, {
        translateY: [
          { to: '-18px', duration: 2200, ease: 'inOutSine' },
          { to: '0px', duration: 2200, ease: 'inOutSine' },
        ],
        opacity: [0.15, 0.45, 0.15],
        duration: 4400,
        delay: stagger(600, { start: 0 }),
        loop: true,
      });
    }
  }, []);

  // Split title into individual word spans
  const titleWords = 'Complete Insulation Solutions Under One Roof'.split(' ');

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[680px] flex items-center justify-center bg-[#00132b] text-white border-b border-[#c4c6cf] overflow-hidden text-center">

      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXyQN4x_92rKoLf-usBKGIN3Dtqh7QyBhxVVMZD9CLRYr9OUYbu1JzJYVGdNfN3Dl5GJ2MksDU7RS7qdAesTd6hf5DUI_7tNLXz_wXPX5lx7i2JwdMEqFnWApvtW1mMU_BHW9_gcTxvqcbp4D9S8zFSzxKtkZIPFZ5KY8J5H8Mqdh1-w0sORSSOAFZc9mbzqTI1lhNC8ALyzPrH3EFSnBM_2mNRzPpmBeT87Dv7C5_o-sz1dUMqq1y')`,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00132b]/75 backdrop-blur-[2px]" />

      {/* Floating ambient particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-[#fea619]"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 4) * 18}%`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 max-w-[1100px] mx-auto py-20 md:py-28 flex flex-col items-center justify-center gap-6">
        <div className="max-w-4xl space-y-6 text-center">

          {/* EST 2011 • INSULATION SPECIALISTS BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fea619]/15 border border-[#fea619]/40 text-[#fea619] text-xs font-extrabold uppercase tracking-wider"
          >
            <span>EST. 2011 • INSULATION SPECIALISTS</span>
          </motion.div>

          {/* Title — word-by-word reveal */}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-extrabold text-white tracking-tight"
            style={{ opacity: 1 }}
          >
            {titleWords.map((word, i) => (
              <span
                key={i}
                className="hero-word inline-block mr-[0.25em]"
                style={{ opacity: 0, willChange: 'transform, opacity' }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal"
            style={{ opacity: 0, willChange: 'transform, opacity' }}
          >
            Providing high-quality insulation products and reliable solutions under one roof — saving you time, cost, and effort.
          </p>

          {/* Motto quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold italic text-[#fea619] tracking-wide"
          >
            "Quality is our promise, trust is our identity."
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.04, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onRequestQuote}
              className="bg-[#fea619] hover:bg-[#e69310] text-[#684000] text-xs sm:text-[13px] font-extrabold tracking-wider uppercase px-8 py-4 rounded shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Request a Quote</span>
              <FaArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreProducts}
              className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase px-8 py-4 rounded backdrop-blur-xs shadow-md transition-all duration-200 cursor-pointer"
            >
              Explore Products
            </motion.button>
          </motion.div>
        </div>

        {/* Badges row */}
        <div
          ref={badgesRef}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-8 mt-6 border-t border-white/15 w-full max-w-3xl"
        >
          {[
            { icon: <FaCircleCheck />, label: 'All-in-One Insulation' },
            { icon: <FaTruckFast />,   label: 'Punctual Delivery' },
            { icon: <FaBuilding />,    label: 'Serving Since 2011' },
          ].map(({ icon, label }) => (
            <div key={label} className="hero-badge flex items-center gap-2.5" style={{ opacity: 0, willChange: 'transform, opacity' }}>
              <span className="text-[#fea619] text-xl">{icon}</span>
              <span className="text-xs sm:text-[13px] font-semibold text-slate-200 tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
