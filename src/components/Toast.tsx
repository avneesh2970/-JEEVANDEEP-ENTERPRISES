import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed bottom-6 right-6 z-50 max-w-md bg-[#001733] text-white p-4 rounded-xl shadow-2xl border border-[#fea619]/40 flex items-start gap-3 text-left"
        >
          <div className="p-1 rounded-full bg-[#fea619]/20 text-[#fea619] shrink-0 mt-0.5">
            <CheckCircle2 className="w-4 h-4 text-[#fea619]" />
          </div>
          <div className="text-xs font-['Inter'] font-medium leading-relaxed flex-grow text-slate-100">
            {message}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md shrink-0 cursor-pointer transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
