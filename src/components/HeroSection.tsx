import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCircleCheck, FaTruckFast, FaBuilding } from 'react-icons/fa6';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestQuote,
  onExploreProducts,
}) => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[680px] flex items-center justify-center bg-[#00132b] text-white border-b border-[#c4c6cf] overflow-hidden text-center">
      {/* Background Facility Photo */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXyQN4x_92rKoLf-usBKGIN3Dtqh7QyBhxVVMZD9CLRYr9OUYbu1JzJYVGdNfN3Dl5GJ2MksDU7RS7qdAesTd6hf5DUI_7tNLXz_wXPX5lx7i2JwdMEqFnWApvtW1mMU_BHW9_gcTxvqcbp4D9S8zFSzxKtkZIPFZ5KY8J5H8Mqdh1-w0sORSSOAFZc9mbzqTI1lhNC8ALyzPrH3EFSnBM_2mNRzPpmBeT87Dv7C5_o-sz1dUMqq1y')`,
        }}
        aria-hidden="true"
      />

      {/* Dark Semi-Transparent Overlay matching screenshot */}
      <div className="absolute inset-0 bg-[#00132b]/70 backdrop-blur-[2px]" />

      {/* Centered Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 max-w-[1100px] mx-auto py-20 md:py-28 flex flex-col items-center justify-center gap-6">
        <div className="max-w-4xl space-y-6 text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] font-extrabold text-white tracking-tight"
          >
            Your Trusted Partner for Industrial Excellence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-['Inter'] text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Precision engineering and robust industrial supplies powering India's infrastructure.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onRequestQuote}
              className="bg-[#fea619] hover:bg-[#e69310] active:scale-[0.98] text-[#684000] font-['Inter'] text-xs sm:text-[13px] font-extrabold tracking-wider uppercase px-8 py-4 rounded shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Request a Quote</span>
              <span className="text-sm">
                <FaArrowRight />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreProducts}
              className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white font-['Inter'] text-xs sm:text-[13px] font-bold tracking-wider uppercase px-8 py-4 rounded backdrop-blur-xs shadow-md transition-all duration-200 cursor-pointer"
            >
              Explore Products
            </motion.button>
          </motion.div>
        </div>

        {/* Industrial Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-8 mt-6 border-t border-white/15 w-full max-w-3xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-[#fea619] text-xl">
              <FaCircleCheck />
            </span>
            <span className="font-['Inter'] text-xs sm:text-[13px] font-semibold text-slate-200 tracking-wide">
              Quality Products
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-[#fea619] text-xl">
              <FaTruckFast />
            </span>
            <span className="font-['Inter'] text-xs sm:text-[13px] font-semibold text-slate-200 tracking-wide">
              Reliable Supply
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-[#fea619] text-xl">
              <FaBuilding />
            </span>
            <span className="font-['Inter'] text-xs sm:text-[13px] font-semibold text-slate-200 tracking-wide">
              B2B Solutions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
