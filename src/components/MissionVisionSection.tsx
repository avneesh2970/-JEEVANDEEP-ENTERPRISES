import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye } from 'react-icons/fa6';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="bg-[#f2f4f6] py-16 md:py-24 border-y border-[#e0e3e5] overflow-hidden text-left">
      <div className="px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] md:leading-[48px] font-extrabold text-[#002147] tracking-tight">
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-[#ffffff] p-8 md:p-10 rounded-2xl border border-[#c4c6cf]/80 industrial-shadow transition-all duration-300 flex flex-col relative overflow-hidden group"
          >
            <div className="w-16 h-16 bg-[#002147] group-hover:bg-[#fea619] rounded-2xl flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
              <span className="text-white group-hover:text-[#002147] text-2xl transition-colors duration-300">
                <FaEye />
              </span>
            </div>

            <h3 className="text-2xl md:text-[28px] font-bold text-[#002147] mb-4">
              Our Vision
            </h3>

            <p className="text-base md:text-[17px] md:leading-[28px] text-[#44474e] flex-grow">
              To be the most trusted and leading company in the insulation industry through high quality innovative technology and excellent service.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-[#002147] text-white p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group"
          >
            <div className="w-16 h-16 bg-[#fea619] rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <span className="text-[#002147] text-2xl">
                <FaBullseye />
              </span>
            </div>

            <h3 className="text-2xl md:text-[28px] font-bold text-white mb-4">
              Our Mission
            </h3>

            <p className="text-base md:text-[17px] md:leading-[28px] text-slate-200 flex-grow">
              To build long-term trust and partnerships by providing quality insulation products, competitive pricing, and timely service tailored to customer needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
