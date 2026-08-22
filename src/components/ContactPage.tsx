import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { ContactSection } from './ContactSection';

interface ContactPageProps {
  onNavigateHome: () => void;
  onShowToast: (message: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onShowToast,
}) => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]  min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-[#00132b] text-white py-16 md:py-20 border-b border-[#c4c6cf] relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000a1a] via-[#00132b] to-[#002147] opacity-95" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 ">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#fea619] font-semibold">Contact Us</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fea619]/15 border border-[#fea619]/30 text-[#fea619] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#fea619]" />
              Guaranteed Response SLA &lt; 2 Hours
            </span>

            <h1 className=" text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Contact Us & Request a Quotation
            </h1>

            <p className=" text-base md:text-lg text-slate-300 leading-relaxed">
              Connect directly with Jeevandeep Enterprises' sales engineering desk. Submit your specifications for custom quotes, MTC 3.1 certificates, and rate contracts.
            </p>
          </motion.div>

          {/* Contact Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-6 border-t border-white/15">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Sales Support Hotline</span>
                <a href="tel:+919411487540" className="text-sm font-bold text-white font-mono hover:text-[#fea619]">
                  +91 94114 87540
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Sales Inquiry Email</span>
                <a href="mailto:sales@jeevandeep.com" className="text-sm font-bold text-white font-mono hover:text-[#fea619]">
                  sales@jeevandeep.com
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Office Address</span>
                <span className="text-xs font-bold text-white leading-tight block">
                  GMS Road, Dehradun, Uttarakhand
                </span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Working Hours</span>
                <span className="text-xs font-bold text-white leading-tight block">
                  Mon - Sat: 9:00 AM - 7:00 PM IST
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main RFQ Form Section */}
      <div className="py-8">
        <ContactSection onShowToast={onShowToast} />
      </div>

      {/* Fulfillment Hub & Location Map Banner */}
      <section className="pb-16 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        <div className="bg-white rounded-2xl border border-[#c4c6cf]/80 p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#e0e3e5] pb-6">
            <div>
              <h3 className=" text-2xl font-bold text-[#002147]">
                Central Fulfillment & Dispatch Facility
              </h3>
              <p className=" text-xs sm:text-sm text-[#44474e] mt-1">
                Our 25,000+ sq. ft. central warehouse in Mumbai maintains safety stock for immediate dispatch across all 28 states and union territories.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#002147] text-white px-4 py-2 rounded-xl text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
              Pan-India Express Freight Hub
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  text-xs text-[#44474e]">
            <div className="bg-[#f7f9fb] p-5 rounded-xl border border-[#e0e3e5] space-y-2">
              <span className="font-bold text-[#002147] block text-sm">Office Address:</span>
              <p>Jeevandeep Enterprises, Near Nitco Transport Company, Behind Sabzi Mandi, GMS Road, Dehradun, Uttarakhand – 248001, India.</p>
            </div>

            <div className="bg-[#f7f9fb] p-5 rounded-xl border border-[#e0e3e5] space-y-2">
              <span className="font-bold text-[#002147] block text-sm">Quality Testing Lab:</span>
              <p>In-house NABL certified dielectric voltage withstand, thermal conductivity, and hydrostatic pressure testing laboratory.</p>
            </div>

            <div className="bg-[#f7f9fb] p-5 rounded-xl border border-[#e0e3e5] space-y-2">
              <span className="font-bold text-[#002147] block text-sm">Express Logistics Desk:</span>
              <p>Direct tie-ups with VRL Logistics, TCI Express, Safexpress, and Blue Dart for guaranteed 24-48h project site delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
