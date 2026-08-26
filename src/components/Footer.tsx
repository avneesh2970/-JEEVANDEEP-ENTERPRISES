import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectProductName: (name: string) => void;
  onOpenLegalModal: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectProductName,
  onOpenLegalModal,
}) => {
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
            <span className="text-lg font-extrabold text-white tracking-tight">
              JEEVANDEEP ENTERPRISES
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
            Complete Insulation Solutions Under One Roof. Serving customers across India since 2011 with certified thermal, acoustic, cold, and high-temperature insulation materials.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#fea619] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#fea619]" />
            <span>EST. 2011 • INSULATION SPECIALISTS</span>
          </div>

          <p className="text-xs text-slate-500 pt-2">
            © 2026 Jeevandeep Enterprises. All rights reserved.
          </p>
        </div>

        {/* Column 2: Products Directory (Col 3) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-[#fea619] uppercase tracking-wider">
            Insulation Solutions
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {[
              'Rockwool Slabs & Rolls',
              'Glass Wool Acoustic Rolls',
              'Nitrile Rubber Foam',
              'XLPE Foam Sheets',
              'Ceramic Fiber Blankets',
              'Accosound Sound Barrier',
            ].map((prod) => (
              <li key={prod}>
                <button
                  onClick={() => onSelectProductName(prod)}
                  className="text-slate-300 hover:text-[#fea619] transition-colors text-left cursor-pointer"
                >
                  {prod}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal & Governance (Col 2) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold text-[#fea619] uppercase tracking-wider">
            Governance &amp; Specs
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
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
                onClick={() => onOpenLegalModal('Terms of Supply & Warranty')}
                className="text-slate-300 hover:text-[#fea619] transition-colors cursor-pointer"
              >
                Terms of Supply
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegalModal('Material Test Certificate (MTC 3.1) Protocol')}
                className="text-slate-300 hover:text-[#fea619] transition-colors cursor-pointer"
              >
                MTC Traceability
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegalModal('Anti-Corruption & Industrial Compliance')}
                className="text-slate-300 hover:text-[#fea619] transition-colors cursor-pointer"
              >
                Compliance Code
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Contact (Col 3) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-[#fea619] uppercase tracking-wider">
            Head Office (Mohali)
          </h4>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5" />
              <span className="text-slate-300">
                Plot No. D-124, Industrial Area, Phase-VII, Mohali (Punjab)
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#fea619] shrink-0" />
              <span className="text-slate-300">+91 95018 21375 / +91 172 5032099</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#fea619] shrink-0" />
              <a href="mailto:jeevendeep.enterprises@gmail.com" className="text-slate-300 hover:text-[#fea619] transition-colors">
                jeevendeep.enterprises@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Motto & Back-to-Top */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-slate-300 text-center sm:text-left font-medium italic">
          "Quality is our promise, trust is our identity."
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-slate-300 hover:text-[#fea619] transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
