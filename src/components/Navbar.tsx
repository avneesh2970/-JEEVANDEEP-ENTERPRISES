import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { FaPhone, FaEnvelope, FaBars, FaXmark } from 'react-icons/fa6';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenQuoteModal: () => void;
  onDirectContact: (type: 'phone' | 'mail') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenQuoteModal,
  onDirectContact,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    // { id: 'industries', label: 'Industries' },
    // { id: 'applications', label: 'Applications' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setIsMobileMenuOpen(false);
  };

  const handleCopyQuick = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    onDirectContact(type === 'phone' ? 'phone' : 'mail');
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#c4c6cf]/80 h-16 sm:h-18'
          : 'bg-[#f7f9fb] border-b border-[#c4c6cf]/60 h-20'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto h-full">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left  text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-[#000a1e] hover:text-[#002147] transition-colors flex items-center gap-2.5 cursor-pointer group"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#002147] text-[#fea619] flex items-center justify-center font-black text-sm sm:text-base shadow-xs group-hover:bg-[#000a1e] transition-colors shrink-0"
            >
              JE
            </motion.div>
            <div className="flex flex-col">
              <span className="leading-none text-[#002147] font-black">JEEVANDEEP ENTERPRISES</span>
              <span className="text-[10px]  font-semibold text-[#74777f] tracking-widest uppercase mt-0.5 hidden sm:block">
                Industrial Supplies & Engineering
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 items-center">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative  text-xs xl:text-[13px] font-bold tracking-wider transition-all duration-200 uppercase py-2 cursor-pointer ${
                  isActive
                    ? 'text-[#002147]'
                    : 'text-[#44474e] hover:text-[#000a1e]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fea619] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {/* Quick Phone Call Button */}
          <button
            onClick={() => handleCopyQuick('+919411487540', 'phone')}
            className="text-[#44474e] hover:text-[#002147] transition-all p-2 rounded-full hover:bg-[#eceef0] relative group cursor-pointer"
            title="Call Support: +91 94114 87540"
            aria-label="Call Directory"
          >
            {copiedType === 'phone' ? (
              <Check className="w-4 h-4 text-emerald-600 animate-in zoom-in" />
            ) : (
              <span className="text-base text-[#002147]">
                <FaPhone />
              </span>
            )}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-[#002147] text-white text-[10px] py-1 px-2.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 font-mono">
              +91 94114 87540
            </span>
          </button>

          {/* Quick Email Button */}
          <button
            onClick={() => handleCopyQuick('sales@jeevandeep.com', 'mail')}
            className="text-[#44474e] hover:text-[#002147] transition-all p-2 rounded-full hover:bg-[#eceef0] relative group cursor-pointer"
            title="Email Sales: sales@jeevandeep.com"
            aria-label="Email Directory"
          >
            {copiedType === 'mail' ? (
              <Check className="w-4 h-4 text-emerald-600 animate-in zoom-in" />
            ) : (
              <span className="text-base text-[#002147]">
                <FaEnvelope />
              </span>
            )}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-[#002147] text-white text-[10px] py-1 px-2.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 font-mono">
              sales@jeevandeep.com
            </span>
          </button>

          {/* Primary CTA Button */}
          <motion.button
            whileHover={{ scale: 1.03, translateY: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenQuoteModal}
            className="bg-[#002147] hover:bg-[#000a1e] text-white  text-[11px] xl:text-[12px] font-bold uppercase tracking-wider px-4 xl:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all ml-1.5 flex items-center gap-2 cursor-pointer border border-white/10"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#fea619]" />
          </motion.button>
        </div>

        {/* Mobile / Tablet Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#002147] hover:text-[#000a1e] p-2 rounded-lg hover:bg-[#eceef0] transition-colors focus:outline-hidden cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <span className="text-xl">
              <FaXmark />
            </span>
          ) : (
            <span className="text-xl">
              <FaBars />
            </span>
          )}
        </button>
      </div>

      {/* Mobile / Tablet Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-[#c4c6cf] px-6 py-5 shadow-xl overflow-hidden text-left"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-3 px-4 rounded-lg  text-[14px] font-bold tracking-wide transition-colors cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-[#002147]/10 text-[#002147] border-l-4 border-[#fea619]'
                      : 'text-[#44474e] hover:bg-[#f2f4f6] hover:text-[#000a1e]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-[#e0e3e5] flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-[#44474e] px-1 ">
                  <span>Sales Hotline:</span>
                  <a href="tel:+919411487540" className="font-bold text-[#002147] hover:underline font-mono">
                    +91 94114 87540
                  </a>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full bg-[#fea619] hover:bg-[#e69310] text-[#002147]  text-[13px] font-extrabold uppercase tracking-wider py-3.5 rounded-lg text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
