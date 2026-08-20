import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onAskDirectly?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskDirectly }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const categories = ['All', 'Commercial', 'Logistics', 'Quality & Specs', 'Custom Engineering'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <section className="bg-[#f2f4f6] py-16 md:py-24 border-y border-[#e0e3e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3">
            Knowledge Base
          </span>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-[44px] md:leading-[52px] font-extrabold text-[#002147] mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter'] text-base md:text-[18px] text-[#44474e] max-w-2xl mx-auto">
            Clear answers regarding procurement, mill test certificates, dispatch timelines, and bulk discounts.
          </p>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-['Inter'] font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#002147] text-white shadow-xs'
                    : 'bg-white hover:bg-[#e0e3e5] text-[#44474e] border border-[#c4c6cf]/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-[#c4c6cf]/80 overflow-hidden shadow-2xs hover:border-[#002147]/40 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-hidden"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-lg bg-[#002147]/5 text-[#002147] flex items-center justify-center shrink-0 font-bold text-xs">
                      <HelpCircle className="w-4 h-4 text-[#fea619]" />
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#74777f] font-['Inter'] block mb-0.5">
                        {faq.category || 'General'}
                      </span>
                      <h3 className="font-['Manrope'] text-base sm:text-lg font-bold text-[#000a1e]">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <span className={`w-8 h-8 rounded-full bg-[#f2f4f6] flex items-center justify-center text-[#002147] transition-transform duration-300 shrink-0 ${
                    isExpanded ? 'rotate-180 bg-[#002147] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#44474e] font-['Inter'] leading-relaxed border-t border-[#f2f4f6]">
                        <p className="pl-11">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Ask Engineering Desk CTA */}
        {onAskDirectly && (
          <div className="text-center mt-12">
            <button
              onClick={onAskDirectly}
              className="inline-flex items-center gap-2 text-xs font-['Inter'] font-bold text-[#002147] hover:text-[#000a1e] bg-white px-6 py-3 rounded-lg border border-[#c4c6cf] hover:border-[#002147] transition-all cursor-pointer shadow-2xs"
            >
              <MessageSquare className="w-4 h-4 text-[#fea619]" />
              <span>Have a Technical Question Not Answered Here? Contact Sales Desk</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
