import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Award, Building, Users, Clock, CheckCircle2, FileText, ArrowRight, Truck, MapPin } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'story' | 'timeline' | 'leadership' | 'quality'>('story');

  if (!isOpen) return null;

  const MILESTONES = [
    { year: '2001', title: 'Company Founded', desc: 'Established in Mumbai as a specialized mechanical hardware & fastener distributor for local manufacturing plants.' },
    { year: '2008', title: 'Insulation Line Launch', desc: 'Expanded into industrial thermal insulation, partnering with certified manufacturers for Rockwool slabs and Ceramic Fiber blankets.' },
    { year: '2014', title: 'High-Voltage Rubber Matting', desc: 'Introduced IS 15652 & IEC 61111 compliant dielectric rubber matting for high-voltage substations up to 33kV.' },
    { year: '2019', title: 'Central Fulfillment Hub', desc: 'Constructed a state-of-the-art 50,000 Sq. Ft. central logistics & warehousing hub in Mumbai with 5,000+ SKUs.' },
    { year: '2023', title: 'ISO 9001:2015 Certification', desc: 'Achieved ISO 9001 certification for quality management, material traceability, and automated Mill Test Certificate (MTC 3.1) issuance.' },
  ];

  const LEADERS = [
    { name: 'Rajesh V. Sharma', role: 'Founder & Managing Director', experience: '25+ Years Experience', bio: 'Pioneered Jeevandeep Enterprises from a regional hardware vendor into a national industrial supply house serving power plants and refineries.' },
    { name: 'Vikram Mehta', role: 'Chief Quality Officer & Tech Lead', experience: '18+ Years Experience', bio: 'Oversees technical data validation, dielectric testing, and compliance with ASTM C612, IS 8183, and ASME B16.20 standards.' },
    { name: 'Ananya Deshmukh', role: 'Head of B2B Supply Chain', experience: '14+ Years Experience', bio: 'Manages pan-India logistics, emergency shutdown fulfillment, and same-day dispatch operations for major infrastructure clients.' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        {/* Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Main Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative z-10 bg-white w-full max-w-5xl max-h-[92vh] rounded-2xl border border-[#c4c6cf] shadow-2xl flex flex-col overflow-hidden text-left"
        >
          {/* Header */}
          <div className="bg-[#002147] text-white px-6 py-5 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#fea619] text-[#684000] flex items-center justify-center font-bold shadow-sm">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-xl md:text-2xl font-bold text-white leading-tight">
                  About Jeevandeep Enterprises
                </h3>
                <p className="font-['Inter'] text-xs text-slate-300">
                  Two Decades of Industrial Reliability, Precision Engineering & Certified Material Supply
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="bg-[#f2f4f6] px-6 py-3 border-b border-[#e0e3e5] flex flex-wrap items-center gap-2 shrink-0">
            {[
              { id: 'story', label: 'Company Overview' },
              { id: 'timeline', label: 'Milestone Timeline' },
              { id: 'leadership', label: 'Executive Leadership' },
              { id: 'quality', label: 'Quality & Testing Lab' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-['Inter'] font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#002147] text-white shadow-xs'
                    : 'bg-white text-[#44474e] hover:bg-[#e0e3e5] border border-[#c4c6cf]/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 grow">
            {activeTab === 'story' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Hero Story Banner */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#f7f9fb] p-6 rounded-2xl border border-[#e0e3e5]">
                  <div className="md:col-span-7 space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fea619]/20 text-[#855300] text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-[#855300]" />
                      ISO 9001:2015 Certified Operations
                    </span>
                    <h4 className="font-['Manrope'] text-2xl font-bold text-[#002147]">
                      Building Confidence in Critical Infrastructure Since 2001
                    </h4>
                    <p className="font-['Inter'] text-sm text-[#44474e] leading-relaxed">
                      Jeevandeep Enterprises was established with a singular mission: to bridge the gap between technical engineering specifications and reliable material delivery in India’s fast-paced industrial market.
                    </p>
                    <p className="font-['Inter'] text-sm text-[#44474e] leading-relaxed">
                      Today, we operate a 50,000 Sq. Ft. central fulfillment hub in Mumbai stocking over 5,000 certified SKUs across high-temperature thermal insulation, dielectric rubber safety matting, electrical cable support systems, and high-tensile Grade B7/2H fasteners.
                    </p>
                  </div>

                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-lg border border-[#c4c6cf]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDix9ySWulfU9L9OLZtyIkDqHGA_E5G86DjwkuzZWDMErKCDNmwrTW-ZCskA9RrjqzR3gRBqgV0bOBe567L54TpfKdH2dg1-0iqvA8QNxjBg_KzNInG29yMsyni7sgB-EagnUdI80OWlR9J0ggOxsQVb0ND6CgaRBeTIpOgnP0-l2ylkQDIG5v6cpG3A7euR9fn1rGv7TGQorGxVDwZsSGasb_b03n4w4ScDVx5-FQ0gCqC1M26vHX3"
                      alt="Jeevandeep Warehouse Logistics Center"
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#002147]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-xs">
                      Central Hub • Mumbai
                    </div>
                  </div>
                </div>

                {/* Key Capability Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-[#c4c6cf]/80 shadow-2xs space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#002147]/10 text-[#002147] flex items-center justify-center font-bold">
                      <Award className="w-5 h-5 text-[#fea619]" />
                    </div>
                    <h5 className="font-['Manrope'] text-lg font-bold text-[#000a1e]">
                      Certified Standards
                    </h5>
                    <p className="font-['Inter'] text-xs text-[#44474e] leading-relaxed">
                      Every batch undergoes strict quality control conforming to ASTM C612, IS 8183, IS 15652, and ASME B16.20 specifications.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-[#c4c6cf]/80 shadow-2xs space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#002147]/10 text-[#002147] flex items-center justify-center font-bold">
                      <Truck className="w-5 h-5 text-[#fea619]" />
                    </div>
                    <h5 className="font-['Manrope'] text-lg font-bold text-[#000a1e]">
                      Express B2B Logistics
                    </h5>
                    <p className="font-['Inter'] text-xs text-[#44474e] leading-relaxed">
                      Integrated logistics network ensuring 24-48h dispatch for standard items and same-day priority handling for emergency plant shutdowns.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-[#c4c6cf]/80 shadow-2xs space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#002147]/10 text-[#002147] flex items-center justify-center font-bold">
                      <FileText className="w-5 h-5 text-[#fea619]" />
                    </div>
                    <h5 className="font-['Manrope'] text-lg font-bold text-[#000a1e]">
                      Mill Test Certificates
                    </h5>
                    <p className="font-['Inter'] text-xs text-[#44474e] leading-relaxed">
                      Complete material traceability with MTC 3.1 test reports, chemical analysis dossiers, and third-party inspection readiness.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'timeline' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h4 className="font-['Manrope'] text-xl font-bold text-[#002147]">
                  Two Decades of Growth & Milestones
                </h4>

                <div className="relative border-l-2 border-[#fea619] ml-4 pl-6 space-y-8">
                  {MILESTONES.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#002147] border-2 border-[#fea619] group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-mono font-bold bg-[#002147] text-white px-2.5 py-1 rounded">
                        {item.year}
                      </span>
                      <h5 className="font-['Manrope'] text-lg font-bold text-[#000a1e] mt-2">
                        {item.title}
                      </h5>
                      <p className="font-['Inter'] text-xs sm:text-sm text-[#44474e] mt-1 leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'leadership' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h4 className="font-['Manrope'] text-xl font-bold text-[#002147]">
                  Executive Management Team
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {LEADERS.map((person, idx) => (
                    <div key={idx} className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5] space-y-3">
                      <div className="w-14 h-14 rounded-full bg-[#002147] text-[#fea619] flex items-center justify-center font-bold text-xl">
                        {person.name[0]}
                      </div>
                      <div>
                        <h5 className="font-['Manrope'] text-lg font-bold text-[#000a1e]">
                          {person.name}
                        </h5>
                        <p className="text-xs font-semibold text-[#855300] font-['Inter']">
                          {person.role}
                        </p>
                        <span className="inline-block text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-[#c4c6cf] mt-1">
                          {person.experience}
                        </span>
                      </div>
                      <p className="font-['Inter'] text-xs text-[#44474e] leading-relaxed pt-2 border-t border-[#e0e3e5]">
                        {person.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'quality' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h4 className="font-['Manrope'] text-xl font-bold text-[#002147]">
                  Quality Assurance & Testing Standards
                </h4>

                <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-['Manrope'] text-base font-bold text-[#002147] flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#fea619]" />
                      Testing Facilities & Capabilities
                    </h5>
                    <ul className="space-y-2 font-['Inter'] text-xs text-[#44474e] list-disc pl-5">
                      <li>Dielectric Breakdown Voltage testing up to 45 kV/mm (IS 15652 / IEC 61111)</li>
                      <li>Thermal Conductivity evaluation (ASTM C612 / IS 8183)</li>
                      <li>High-Pressure Hydrostatic Gasket Sealing analysis (ASME B16.20)</li>
                      <li>Tensile Strength & Elongation testing for elastomeric sheets</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-['Manrope'] text-base font-bold text-[#002147] flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#fea619]" />
                      Compliance Dossiers
                    </h5>
                    <ul className="space-y-2 font-['Inter'] text-xs text-[#44474e] list-disc pl-5">
                      <li>ISO 9001:2015 Quality Management System Certificate</li>
                      <li>Batch Traceability & 3.1 Mill Test Certificates (MTC)</li>
                      <li>Flame Propagation Class 0 & Class 1 certification (BS 476)</li>
                      <li>Third-Party Inspection Dossiers (TUV, DNV, Bureau Veritas)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-[#f2f4f6] px-6 py-4 border-t border-[#c4c6cf] flex items-center justify-between shrink-0">
            <p className="text-xs text-[#74777f] font-['Inter']">
              Visit our central fulfillment hub in Mumbai or request quality assurance documentation.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote();
                }}
                className="bg-[#fea619] hover:bg-[#e69310] text-[#002147] text-xs font-['Inter'] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <span>Request B2B Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="bg-[#002147] text-white text-xs font-['Inter'] font-bold px-4 py-2.5 rounded-lg hover:bg-[#000a1e] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
