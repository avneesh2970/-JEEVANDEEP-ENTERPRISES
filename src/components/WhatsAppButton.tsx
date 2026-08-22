import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phone = '919411487540'; // WhatsApp B2B helpline

  const handleOpenWhatsApp = (customMsg?: string) => {
    const text = customMsg || message || 'Hello Jeevandeep Enterprises, I would like to inquire about industrial products and request a quote.';
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Inquiry Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="mb-4 w-72 sm:w-80 bg-white rounded-2xl border border-[#c4c6cf] shadow-2xl overflow-hidden text-left"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center font-bold text-white shadow-sm">
                    <span className="text-2xl text-white">
                      <FaWhatsapp />
                    </span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075E54]" />
                </div>
                <div>
                  <h4 className=" text-sm font-bold text-white leading-tight">
                    Jeevandeep Sales Support
                  </h4>
                  <p className=" text-[11px] text-emerald-100">
                    Typically replies within 5 mins
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#e5ddd5]/30 space-y-3  text-xs text-[#191c1e]">
              <div className="bg-white p-3 rounded-xl rounded-tl-none border border-[#e0e3e5] shadow-2xs space-y-1">
                <p className="font-semibold text-[#002147]">
                  Hello! 👋 Welcome to Jeevandeep Enterprises.
                </p>
                <p className="text-[#44474e] text-[11px] leading-relaxed">
                  How can we help with your industrial product requirements or instant RFQ today?
                </p>
              </div>

              {/* Quick Prompt Options */}
              <div className="space-y-1.5 pt-1">
                {[
                  'Request a Quote for Rockwool / Insulation',
                  'Inquire about 33kV Dielectric Rubber Mats',
                  'High Tensile Fasteners & Cable Trays Inquiry',
                ].map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOpenWhatsApp(prompt)}
                    className="w-full text-left bg-white hover:bg-[#25D366]/10 text-[#002147] hover:text-[#075E54] p-2 px-3 rounded-lg border border-[#c4c6cf]/60 text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    💬 {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input Footer */}
            <div className="p-3 bg-white border-t border-[#e0e3e5] flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleOpenWhatsApp()}
                placeholder="Type product name or inquiry..."
                className="grow bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#075E54] rounded-lg px-3 py-2 text-xs text-[#191c1e] outline-hidden "
              />
              <button
                onClick={() => handleOpenWhatsApp()}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white p-2 rounded-lg transition-colors cursor-pointer shrink-0 shadow-2xs flex items-center justify-center"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main WhatsApp Action Button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group"
      >
        {/* Pulse Ring Indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl flex items-center justify-center cursor-pointer transition-colors duration-200"
          aria-label="Chat on WhatsApp"
        >
          <span className="text-3xl text-white">
            <FaWhatsapp />
          </span>
        </button>

        {/* Hover Tooltip */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#002147] text-white text-xs  font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp (Sales Online)</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};
