import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck, Check } from 'lucide-react';

interface FooterProps {
  onSelectCategoryName: (name: string) => void;
  onOpenLegalModal: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategoryName,
  onOpenLegalModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000a1e] text-slate-400 border-t border-white/10 w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 px-4 sm:px-6 md:px-12 py-16 max-w-[1280px] mx-auto text-left">
        {/* Column 1: Brand & Certification (Col 4) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#fea619] text-[#002147] font-black text-sm flex items-center justify-center">
              JE
            </div>
            <span className=" text-lg font-extrabold text-white tracking-tight">
              JEEVANDEEP ENTERPRISES
            </span>
          </div>

          <p className=" text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
            Premier B2B supplier of industrial thermal insulation, dielectric safety matting, heavy electrical hardware, and certified high-tensile fasteners.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#fea619]  font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#fea619]" />
            <span>ISO 9001:2015 Certified Operations</span>
          </div>

          <p className=" text-xs text-slate-500 pt-2">
            © 2026 Jeevandeep Enterprises. All rights reserved.
          </p>
        </div>

        {/* Column 2: Products Directory (Col 2) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className=" text-xs font-bold text-[#fea619] uppercase tracking-wider">
            Product Lines
          </h4>
          <ul className="space-y-2.5  text-xs sm:text-sm">
            {['Insulation', 'Rubber', 'Electrical', 'Hardware', 'Sealing'].map((prod) => (
              <li key={prod}>
                <button
                  onClick={() => onSelectCategoryName(prod)}
                  className="text-slate-300 hover:text-[#fea619] transition-colors text-left cursor-pointer"
                >
                  {prod} Solutions
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal & Governance (Col 2) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className=" text-xs font-bold text-[#fea619] uppercase tracking-wider">
            Governance & Specs
          </h4>
          <ul className="space-y-2.5  text-xs sm:text-sm">
            <li>
              <button
                onClick={() => onOpenLegalModal('Privacy Policy')}
                className="text-slate-300 hover:text-[#fea619] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegalModal('Terms of Service')}
                className="text-slate-300 hover:text-[#fea619] transition-colors cursor-pointer"
              >
                Terms of Supply
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegalModal('ISO 9001 Quality Policy')}
                className="text-slate-300 hover:text-[#fea619] transition-colors cursor-pointer"
              >
                ISO Quality Policy
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Direct Contact (Col 4) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className=" text-xs font-bold text-[#fea619] uppercase tracking-wider">
            Technical Bulletins & RFQ Updates
          </h4>
          <p className=" text-xs text-slate-300">
            Subscribe for updated material datasheets, ASTM standard updates, and bulk inventory alerts.
          </p>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="procurement@company.com"
              className="bg-white/10 border border-white/15 focus:border-[#fea619] rounded-lg px-3.5 py-2 text-xs  text-white placeholder-slate-400 outline-hidden grow"
            />
            <button
              type="submit"
              className="bg-[#fea619] hover:bg-[#e69310] text-[#002147]  text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              {subscribed ? <Check className="w-4 h-4 text-[#002147]" /> : 'Join'}
            </button>
          </form>

          {subscribed && (
            <p className="text-[11px] text-emerald-400 font-semibold animate-in fade-in">
              ✓ Subscribed! You will receive our monthly technical bulletin.
            </p>
          )}

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Dehradun, Uttarakhand, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#fea619] hover:underline cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
