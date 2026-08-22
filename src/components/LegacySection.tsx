import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldHalved } from 'react-icons/fa6';
import { animate, stagger } from 'animejs';

interface LegacySectionProps {
  onLearnMore?: () => void;
  onOpenAboutModal?: () => void;
}

const STATS = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Products in Stock' },
  { value: 1000, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
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
            const obj = { val: 0 };
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
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Warehouse Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden industrial-shadow border border-[#e0e3e5] group"
        >
          <img
            className="w-full h-[320px] sm:h-[400px] md:h-[440px] object-cover rounded-xl group-hover:scale-103 transition-transform duration-500"
            alt="Jeevandeep Enterprises Industrial Warehouse"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDix9ySWulfU9L9OLZtyIkDqHGA_E5G86DjwkuzZWDMErKCDNmwrTW-ZCskA9RrjqzR3gRBqgV0bOBe567L54TpfKdH2dg1-0iqvA8QNxjBg_KzNInG29yMsyni7sgB-EagnUdI80OWlR9J0ggOxsQVb0ND6CgaRBeTIpOgnP0-l2ylkQDIG5v6cpG3A7euR9fn1rGv7TGQorGxVDwZsSGasb_b03n4w4ScDVx5-FQ0gCqC1M26vHX3"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 bg-[#002147]/90 text-white backdrop-blur-xs px-3.5 py-1.5 rounded text-[11px] font-semibold tracking-wider uppercase flex items-center gap-2 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
            Dehradun, Uttarakhand
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#002147]/5 text-[#002147] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
            <span>Established 2001</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[34px] md:leading-[42px] font-bold text-[#002147] mb-6 tracking-tight">
            Our Legacy of Reliability &amp; Engineering Precision
          </h2>

          <p className="text-base md:text-[17px] md:leading-[28px] text-[#44474e] mb-6">
            For over two decades, Jeevandeep Enterprises has stood as a pillar of reliability
            in the Indian industrial landscape. We began with a simple mission: to bridge the
            gap between technical requirements and high-quality material supply.
          </p>

          {/* ── Animated Stats Grid ── */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="stat-card bg-[#f7f9fb] border border-[#e0e3e5] rounded-xl px-4 py-4 text-left opacity-0"
                style={{ willChange: 'transform, opacity' }}
              >
                <p className="text-2xl font-extrabold text-[#002147] leading-none mb-1 font-mono">
                  <span className="stat-number">0</span>
                  <span className="text-[#fea619]">{stat.suffix}</span>
                </p>
                <p className="text-xs text-[#74777f] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {onOpenAboutModal && (
              <button
                onClick={onOpenAboutModal}
                className="bg-[#002147] hover:bg-[#000a1e] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer border border-white/10"
              >
                <span>Read Full Corporate History</span>
                <span className="text-[#fea619] text-xs"><FaArrowRight /></span>
              </button>
            )}
          </div>

          {/* ISO Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-4 border-l-4 border-[#fea619] pl-4 p-3 bg-[#f2f4f6]/80 rounded-r-md border border-[#e0e3e5]"
          >
            <span className="text-[#002147] text-3xl shrink-0"><FaShieldHalved /></span>
            <div>
              <p className="text-lg md:text-xl font-bold text-[#002147]">ISO Certified Operations</p>
              <p className="text-xs text-[#74777f] font-medium">ISO 9001:2015 Quality Management Systems Certified</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
