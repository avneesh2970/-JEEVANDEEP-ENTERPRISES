import React from 'react';
import { motion } from 'framer-motion';
import { CORE_VALUES } from '../data/mockData';
import { FaHandshake, FaAward, FaClock, FaUserGear } from 'react-icons/fa6';

export const CoreValuesSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'handshake':
        return <FaHandshake />;
      case 'high_quality':
        return <FaAward />;
      case 'schedule':
        return <FaClock />;
      case 'engineering':
        return <FaUserGear />;
      default:
        return <FaAward />;
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-[44px] md:leading-[52px] font-extrabold text-[#002147] mb-4 tracking-tight">
          Core Values
        </h2>
        <p className="font-['Inter'] text-base md:text-[18px] text-[#44474e] max-w-2xl mx-auto">
          The principles that govern our operations and define our professional relationships.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left">
        {CORE_VALUES.map((value, idx) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#ffffff] border border-[#c4c6cf]/80 p-6 md:p-8 rounded-xl hover:border-[#002147] industrial-shadow transition-all duration-300 flex flex-col group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#fea619]/15 flex items-center justify-center mb-4 group-hover:bg-[#fea619] transition-colors duration-300 text-[#855300] group-hover:text-[#002147]">
              <span className="text-2xl">
                {renderIcon(value.icon)}
              </span>
            </div>

            <h3 className="font-['Manrope'] text-xl md:text-2xl font-bold text-[#002147] mb-2 tracking-tight">
              {value.title}
            </h3>

            <p className="font-['Inter'] text-[15px] leading-relaxed text-[#44474e]">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
