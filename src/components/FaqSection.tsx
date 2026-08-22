import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown } from 'lucide-react';
import { animate, stagger } from 'animejs';

// ── FaqItem defined at module level (outside FaqSection) ──
interface FaqItemProps {
  faq: (typeof FAQ_ITEMS)[0];
  expandedFaqId: string | null;
  onToggle: (id: string) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, expandedFaqId, onToggle }) => {
  const isExpanded = expandedFaqId === faq.id;
  return (
    <div
      className="faq-row border-b border-[#e8eaed] last:border-b-0"
      // Use inline style for opacity so anime.js can override it cleanly
      style={{ opacity: 0, willChange: 'transform, opacity' }}
    >
      <button
        onClick={() => onToggle(faq.id)}
        className="w-full flex items-start gap-3 py-4 text-left cursor-pointer group focus:outline-none"
      >
        <ChevronDown
          className={`w-4 h-4 shrink-0 mt-0.5 text-[#141414] transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
        <span
          className={`text-[15px] font-bold leading-snug transition-colors duration-200 ${
            isExpanded
              ? 'text-[#141414]'
              : 'text-[#141414] group-hover:text-[#000000]'
          }`}
        >
          {faq.question}
        </span>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pl-7 pb-4 text-sm text-[#44474e] leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Main FAQ Section ──
interface FaqSectionProps {
  onAskDirectly?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskDirectly }) => {
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);
  const sectionRef    = useRef<HTMLDivElement>(null);
  const headingRef    = useRef<HTMLDivElement>(null);
  const underlineRef  = useRef<SVGPathElement>(null);
  const leftColRef    = useRef<HTMLDivElement>(null);
  const rightColRef   = useRef<HTMLDivElement>(null);
  const hasAnimated   = useRef(false);

  const half      = Math.ceil(FAQ_ITEMS.length / 2);
  const leftFaqs  = FAQ_ITEMS.slice(0, half);
  const rightFaqs = FAQ_ITEMS.slice(half);

  const toggleFaq = (id: string) =>
    setExpandedFaqId((prev) => (prev === id ? null : id));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // 1. Heading slide up
          if (headingRef.current) {
            animate(headingRef.current, {
              opacity: [0, 1],
              translateY: ['28px', '0px'],
              duration: 650,
              ease: 'outCubic',
            });
          }

          // 2. SVG golden underline draw
          if (underlineRef.current) {
            const len = underlineRef.current.getTotalLength();
            underlineRef.current.style.strokeDasharray  = String(len);
            underlineRef.current.style.strokeDashoffset = String(len);
            animate(underlineRef.current, {
              strokeDashoffset: [len, 0],
              duration: 900,
              delay: 350,
              ease: 'outCubic',
            });
          }

          // 3. FAQ rows stagger slide in from left
          const leftItems  = leftColRef.current?.querySelectorAll('.faq-row')  ?? [];
          const rightItems = rightColRef.current?.querySelectorAll('.faq-row') ?? [];
          const allItems   = [...leftItems, ...rightItems];

          if (allItems.length) {
            animate(allItems, {
              opacity:    [0, 1],
              translateX: ['-20px', '0px'],
              duration:   500,
              delay:      stagger(70, { start: 280 }),
              ease:       'outCubic',
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-12">

        {/* Header — starts invisible via inline style */}
        <div
          ref={headingRef}
          className="text-center mb-14"
          style={{ opacity: 0, willChange: 'transform, opacity' }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#000a1e] mb-4 tracking-tight relative inline-block">
            Frequently Asked Questions
            {/* Animated SVG underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="6"
              viewBox="0 0 600 6"
              preserveAspectRatio="none"
            >
              <path
                ref={underlineRef}
                d="M0,3 Q150,0 300,3 Q450,6 600,3"
                fill="none"
                stroke="#fea619"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className="text-base text-[#44474e] max-w-xl mx-auto leading-relaxed mt-4">
            Get answers to the most common questions about our{' '}
            <span className="text-[#c87a00] font-medium">industrial supply</span>{' '}
            and procurement services.
          </p>
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <div ref={leftColRef}>
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                expandedFaqId={expandedFaqId}
                onToggle={toggleFaq}
              />
            ))}
          </div>
          <div ref={rightColRef}>
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                expandedFaqId={expandedFaqId}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        {onAskDirectly && (
          <div className="text-center mt-12">
            <p className="text-sm text-[#74777f] mb-3">Still have questions?</p>
            <button
              onClick={onAskDirectly}
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#002147] hover:bg-[#000a1e] px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              Contact Our Sales Desk
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
