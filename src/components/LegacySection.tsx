import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa6';
import { animate, stagger } from 'animejs';

interface LegacySectionProps {
  onLearnMore?: () => void;
  onOpenAboutModal?: () => void;
}

const currentYear = new Date().getFullYear();
const yearsOfTrust = Math.max(1, currentYear - 2011);

const STATS = [
  { value: 2011, suffix: '', label: 'Year Founded', isYear: true },
  { value: yearsOfTrust, suffix: '+', label: 'Years of Trust' },
  { value: 5, suffix: '+', label: 'Branches Nationwide' },
  { value: 100, suffix: '%', label: 'Insulation Focused' },
];

export const LegacySection: React.FC<LegacySectionProps> = ({
  onLearnMore,
  onOpenAboutModal,
}) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // ── Animate stat counters when section scrolls into view ──
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const counters = statsRef.current?.querySelectorAll('.stat-number');
          counters?.forEach((el, i) => {
            const target = STATS[i].value;
            const obj = { val: STATS[i].isYear ? 2000 : 0 };
            animate(obj, {
              val: target,
              duration: 1800,
              delay: i * 150,
              ease: 'outExpo',
              onUpdate: () => {
                el.textContent = Math.floor(obj.val).toString();
              },
            });
          });

          // Stagger the stat cards in
          const cards = statsRef.current?.querySelectorAll('.stat-card');
          if (cards) {
            animate(cards, {
              opacity: [0, 1],
              translateY: ['30px', '0px'],
              scale: [0.92, 1],
              duration: 600,
              delay: stagger(120),
              ease: 'outBack',
            });
          }
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Warehouse Visual & Photo Frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden industrial-shadow border border-[#e0e3e5] group"
        >
          <img
            className="w-full h-[340px] sm:h-[420px] md:h-[460px] object-cover rounded-2xl group-hover:scale-103 transition-transform duration-500"
            alt="Jeevandeep Enterprises Insulation Warehouse"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 bg-[#002147]/90 text-white backdrop-blur-xs px-3.5 py-1.5 rounded-lg text-[11px] font-semibold tracking-wider uppercase flex items-center gap-2 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
            Complete Insulation Solutions
          </div>
        </motion.div>

        {/* Story + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fea619]/15 text-[#855300] text-xs font-bold uppercase tracking-wider mb-3 w-fit">
            <span>About Us</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[36px] md:leading-[44px] font-extrabold text-[#002147] mb-5 tracking-tight">
            Who We Are
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#44474e] leading-relaxed mb-6">
            <p>
              <strong className="text-[#002147] font-bold">Jeevandeep Enterprises</strong> was founded in 2011 with the goal of providing customers with high-quality insulation products and reliable solutions under one roof.
            </p>
            <p>
              For over a decade, we have made quality, integrity, and customer satisfaction our greatest strengths. Building on these values, our company has consistently scaled new heights and, by expanding its branches from time to time, has established a strong presence across the country.
            </p>
            <p className="italic text-[#002147] font-semibold border-l-3 border-[#fea619] pl-3 py-0.5">
              Today, we offer our customers a comprehensive range of insulation products and solutions under one roof — saving them time, cost, and effort.
            </p>
          </div>

          {/* ── Animated Stats Grid ── */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="stat-card bg-[#f7f9fb] border border-[#e0e3e5] rounded-xl px-3.5 py-3.5 text-left"
                style={{ opacity: 0, willChange: 'transform, opacity' }}
              >
                <p className="text-xl sm:text-2xl font-extrabold text-[#002147] leading-none mb-1 font-mono">
                  <span className="stat-number">0</span>
                  <span className="text-[#fea619]">{stat.suffix}</span>
                </p>
                <p className="text-[11px] text-[#74777f] font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Our Commitment Quote Card (Slide 4) */}
          <div className="bg-[#002147] text-white p-5 rounded-xl border border-white/10 relative overflow-hidden space-y-2">
            <div className="flex items-center gap-2 text-[#fea619] text-xs font-extrabold uppercase tracking-wider">
              <FaQuoteLeft className="text-sm" />
              <span>Our Commitment</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              "We believe not only in selling products, but in building trust, quality, and long-term relationships with our customers. Maintaining excellence in every product and service is our hallmark."
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#fea619] italic pt-1">
              "Quality is our promise, trust is our identity."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
