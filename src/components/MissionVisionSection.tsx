import React from 'react';
import { motion } from 'framer-motion';
import { FaFlag, FaEye } from 'react-icons/fa6';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="bg-[#f2f4f6] py-16 md:py-24 border-y border-[#e0e3e5] overflow-hidden text-left">
      <div className="px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-[#ffffff] p-8 md:p-10 rounded-xl border border-[#c4c6cf]/80 industrial-shadow transition-all duration-300 flex flex-col relative overflow-hidden group"
          >
            <div className="w-16 h-16 bg-[#002147] group-hover:bg-[#fea619] rounded-2xl flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
              <span className="text-white group-hover:text-[#002147] text-2xl transition-colors duration-300">
                <FaFlag />
              </span>
            </div>

            <h3 className=" text-2xl md:text-[28px] font-bold text-[#002147] mb-4">
              Our Mission
            </h3>

            <p className=" text-base md:text-[17px] md:leading-[28px] text-[#44474e] flex-grow">
              To provide high-quality, certified industrial solutions that empower infrastructure, manufacturing, and technical projects across India. We strive to be the invisible strength behind our clients' success.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-[#ffffff] p-8 md:p-10 rounded-xl border border-[#c4c6cf]/80 industrial-shadow transition-all duration-300 flex flex-col relative overflow-hidden group"
          >
            <div className="w-16 h-16 bg-[#fea619] group-hover:bg-[#002147] rounded-2xl flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
              <span className="text-[#684000] group-hover:text-white text-2xl transition-colors duration-300">
                <FaEye />
              </span>
            </div>

            <h3 className=" text-2xl md:text-[28px] font-bold text-[#002147] mb-4">
              Our Vision
            </h3>

            <p className=" text-base md:text-[17px] md:leading-[28px] text-[#44474e] flex-grow">
              To be the undisputed leader and most trusted name in industrial supply nationwide, recognized globally for our unwavering commitment to precision, quality, and exceptional service architecture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
