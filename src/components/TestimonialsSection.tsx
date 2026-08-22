import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/mockData';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck, MapPin, Repeat } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'infinite' | 'spotlight'>('infinite');

  const industries = ['all', 'HVAC & MEP', 'Power & Energy', 'Oil & Gas', 'Manufacturing', 'Acoustic & Building'];

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    return selectedIndustry === 'all' || (t.industry && t.industry.toLowerCase() === selectedIndustry.toLowerCase());
  });

  // Duplicate for seamless 100% infinite marquee loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  // Auto-play interval for spotlight mode
  useEffect(() => {
    if (!isAutoPlaying || filteredTestimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTestimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const handleFilterChange = (ind: string) => {
    setSelectedIndustry(ind);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  return (
    <section className="py-16 md:py-24 bg-[#ffffff] border-b border-[#e0e3e5] overflow-hidden text-left relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#002147]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10 px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3">
            Infinite Client Reviews Loop
          </span>
          <h2 className=" text-3xl sm:text-4xl md:text-[44px] md:leading-[52px] font-extrabold text-[#002147] mb-4 tracking-tight">
            What Our Partners Say
          </h2>
          <p className=" text-base md:text-[18px] text-[#44474e] max-w-2xl mx-auto mb-6">
            Trusted by leading MEP contractors, power grid utilities, oil refineries, and manufacturing plants across India.
          </p>

          {/* Mode Switcher & Industry Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="bg-[#f2f4f6] p-1 rounded-xl border border-[#c4c6cf]/60 inline-flex items-center gap-1">
              <button
                onClick={() => setViewMode('infinite')}
                className={`px-3.5 py-1.5 rounded-lg text-xs  font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'infinite'
                    ? 'bg-[#002147] text-white shadow-2xs'
                    : 'text-[#44474e] hover:text-[#000a1e]'
                }`}
              >
                <Repeat className="w-3.5 h-3.5 text-[#fea619]" />
                <span>Infinite Marquee Loop</span>
              </button>
              <button
                onClick={() => setViewMode('spotlight')}
                className={`px-3.5 py-1.5 rounded-lg text-xs  font-bold transition-all cursor-pointer ${
                  viewMode === 'spotlight'
                    ? 'bg-[#002147] text-white shadow-2xs'
                    : 'text-[#44474e] hover:text-[#000a1e]'
                }`}
              >
                <span>Spotlight View</span>
              </button>
            </div>

            {viewMode === 'spotlight' && (
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {industries.map((ind) => {
                  const isActive = selectedIndustry === ind;
                  return (
                    <button
                      key={ind}
                      onClick={() => handleFilterChange(ind)}
                      className={`px-3 py-1.5 rounded-lg text-xs  font-semibold capitalize transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#002147] text-white shadow-2xs'
                          : 'bg-[#f2f4f6] text-[#44474e] hover:bg-[#e0e3e5]'
                      }`}
                    >
                      {ind}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* INFINITE SCROLLING MARQUEE MODE */}
      {viewMode === 'infinite' ? (
        <div className="relative mt-8 py-4 overflow-hidden">
          {/* Gradient Edge Masks for Smooth Fade */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Marquee Track Continuous Animation */}
          <div
            className="flex overflow-hidden select-none"
            onMouseEnter={() => setIsMarqueePaused(true)}
            onMouseLeave={() => setIsMarqueePaused(false)}
          >
            <motion.div
              animate={isMarqueePaused ? false : { x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 35,
                repeat: Infinity,
              }}
              className="flex gap-6 shrink-0"
            >
              {marqueeItems.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="w-[320px] sm:w-[380px] shrink-0 bg-[#f7f9fb] p-6 rounded-2xl border border-[#c4c6cf]/80 shadow-2xs hover:shadow-lg hover:border-[#002147] transition-all text-left flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Stars + Industry */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-[#fea619] gap-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#fea619] text-[#fea619]" />
                        ))}
                      </div>
                      {t.industry && (
                        <span className="text-[10px] font-mono font-bold bg-[#002147] text-white px-2 py-0.5 rounded">
                          {t.industry}
                        </span>
                      )}
                    </div>

                    {/* Quote */}
                    <p className=" text-xs sm:text-sm leading-relaxed text-[#44474e] mb-4 italic line-clamp-4">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="pt-3 border-t border-[#e0e3e5] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#002147] text-[#fea619] flex items-center justify-center font-bold text-sm shadow-2xs shrink-0">
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className=" text-xs font-bold text-[#002147]">
                          {t.name}
                        </h4>
                        <p className=" text-[10px] text-[#74777f] line-clamp-1">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* <div className="text-center mt-6">
            <span className="text-[11px] text-[#74777f]  font-medium bg-[#f2f4f6] px-3 py-1 rounded-full border border-[#e0e3e5]">
              💡 Hover over any card to pause infinite scroll
            </span>
          </div> */}
        </div>
      ) : (
        /* SPOTLIGHT MODE */
        <div className="px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
          {currentTestimonial && (
            <div
              className="max-w-4xl mx-auto mb-12"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#f7f9fb] p-8 sm:p-12 rounded-2xl border border-[#c4c6cf]/80 shadow-lg relative overflow-hidden flex flex-col justify-between"
                >
                  <Quote className="absolute top-6 right-6 w-24 h-24 text-[#002147]/5 pointer-events-none" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center text-[#fea619] gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#fea619] text-[#fea619]" />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {currentTestimonial.industry && (
                          <span className="text-[11px] font-mono font-bold bg-[#002147] text-white px-2.5 py-0.5 rounded">
                            {currentTestimonial.industry}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          Verified B2B Partner
                        </span>
                      </div>
                    </div>

                    <p className=" text-lg sm:text-xl md:text-2xl leading-relaxed text-[#000a1e] font-medium mb-8 italic">
                      "{currentTestimonial.quote}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#e0e3e5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-13 h-13 rounded-full bg-[#002147] text-[#fea619] flex items-center justify-center font-bold text-xl shadow-sm shrink-0">
                        {currentTestimonial.name[0]}
                      </div>
                      <div>
                        <h3 className=" text-lg font-bold text-[#002147]">
                          {currentTestimonial.name}
                        </h3>
                        <p className=" text-xs text-[#74777f]">
                          {currentTestimonial.role} • <strong className="text-[#000a1e]">{currentTestimonial.company}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-6 px-2">
                <div className="flex items-center gap-2">
                  {filteredTestimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        currentIndex === i
                          ? 'w-8 bg-[#002147]'
                          : 'w-2.5 bg-[#c4c6cf] hover:bg-[#74777f]'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-white hover:bg-[#002147] hover:text-white border border-[#c4c6cf] flex items-center justify-center text-[#002147] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-white hover:bg-[#002147] hover:text-white border border-[#c4c6cf] flex items-center justify-center text-[#002147] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
