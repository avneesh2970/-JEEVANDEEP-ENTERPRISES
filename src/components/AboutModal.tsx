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
    { year: '2011', title: 'Company Founded', desc: 'Established with the dedicated goal of providing customers with high-quality insulation products and reliable solutions under one roof.' },
    { year: '2014', title: 'Thermal & Cold Insulation Range Expansion', desc: 'Scaled full-spectrum inventory of Class 0 Nitrile Rubber pipe tubes, XLPE foam, and Rockwool thermal slabs.' },
    { year: '2017', title: 'High-Temperature & Acoustic Line Launch', desc: 'Introduced 1425°C refractory Ceramic Fiber blankets and Accosound viscoelastic acoustic damping systems for heavy industry.' },
    { year: '2020', title: 'Nationwide Branch Network Expansion', desc: 'Established regional hubs across Mohali, Chandigarh, Dehradun, Ghaziabad, and Hyderabad to serve projects with same-day dispatch.' },
    { year: '2023', title: 'ISO 9001:2015 Certification & Quality Standards', desc: 'Formalized ISO 9001 certified quality management with Mill Test Certificates (MTC 3.1) and complete material traceability.' },
  ];

  const LEADERS = [
    { name: 'Rajesh V. Sharma', role: 'Founder & Managing Director', experience: '15+ Years Experience', bio: 'Founded Jeevandeep Enterprises in 2011, establishing it as one of India’s foremost pure-play insulation supply partners.' },
    { name: 'Vikram Mehta', role: 'Chief Technical & Quality Lead', experience: '12+ Years Experience', bio: 'Oversees technical data validation, thermal conductivity testing, and compliance with ASTM C612, IS 8183, and BS 476 standards.' },
    { name: 'Ananya Deshmukh', role: 'Head of Nationwide Supply Chain', experience: '10+ Years Experience', bio: 'Manages pan-India dispatch and on-site delivery coordination across our regional branch network.' },
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
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  About Jeevandeep Enterprises
                </h3>
                <p className="text-xs text-slate-300">
                  EST. 2011 • Complete Insulation Solutions Under One Roof
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
              { id: 'story', label: 'Who We Are' },
              { id: 'timeline', label: 'Milestone Timeline' },
              { id: 'leadership', label: 'Executive Leadership' },
              { id: 'quality', label: 'Quality & Standards' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
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
                      EST. 2011 • INSULATION SPECIALISTS
                    </span>
                    <h4 className="text-2xl font-bold text-[#002147]">
                      Complete Insulation Solutions Under One Roof
                    </h4>
                    <p className="text-sm text-[#44474e] leading-relaxed">
                      <strong>Jeevandeep Enterprises</strong> was founded in 2011 with the goal of providing customers with high-quality insulation products and reliable solutions under one roof.
                    </p>
                    <p className="text-sm text-[#44474e] leading-relaxed">
                      For over a decade, we have made quality, integrity, and customer satisfaction our greatest strengths. Building on these values, our company has consistently scaled new heights and, by expanding its branches from time to time, has established a strong presence across the country.
                    </p>
                    <p className="text-sm text-[#002147] font-semibold italic border-l-3 border-[#fea619] pl-3 py-0.5">
                      "Today, we offer our customers a comprehensive range of insulation products and solutions under one roof — saving them time, cost, and effort."
                    </p>
                  </div>

                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-lg border border-[#c4c6cf]">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                      alt="Jeevandeep Insulation Facility"
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#002147]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-xs">
                      Head Office • Mohali (Punjab)
                    </div>
                  </div>
                </div>

                {/* Key Capability Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-[#c4c6cf]/80 shadow-2xs space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#002147]/10 text-[#002147] flex items-center justify-center font-bold">
                      <Award className="w-5 h-5 text-[#fea619]" />
                    </div>
                    <h5 className="text-lg font-bold text-[#000a1e]">
                      Certified Quality
                    </h5>
                    <p className="text-xs text-[#44474e] leading-relaxed">
                      Every insulation batch conforms to ASTM C612, IS 8183, BS 476, and ASTM C534 thermal standards.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-[#c4c6cf]/80 shadow-2xs space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#002147]/10 text-[#002147] flex items-center justify-center font-bold">
                      <Truck className="w-5 h-5 text-[#fea619]" />
                    </div>
                    <h5 className="text-lg font-bold text-[#000a1e]">
                      On-Time Delivery
                    </h5>
                    <p className="text-xs text-[#44474e] leading-relaxed">
                      Punctual project delivery from multiple regional branches in Mohali, Chandigarh, Dehradun, Ghaziabad, and Hyderabad.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-[#c4c6cf]/80 shadow-2xs space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#002147]/10 text-[#002147] flex items-center justify-center font-bold">
                      <FileText className="w-5 h-5 text-[#fea619]" />
                    </div>
                    <h5 className="text-lg font-bold text-[#000a1e]">
                      Mill Test Certificates
                    </h5>
                    <p className="text-xs text-[#44474e] leading-relaxed">
                      Full material traceability with MTC 3.1 test reports, thermal conductivity dossiers, and fire safety ratings.
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
                <h4 className=" text-xl font-bold text-[#002147]">
                  Two Decades of Growth & Milestones
                </h4>

                <div className="relative border-l-2 border-[#fea619] ml-4 pl-6 space-y-8">
                  {MILESTONES.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#002147] border-2 border-[#fea619] group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-mono font-bold bg-[#002147] text-white px-2.5 py-1 rounded">
                        {item.year}
                      </span>
                      <h5 className=" text-lg font-bold text-[#000a1e] mt-2">
                        {item.title}
                      </h5>
                      <p className=" text-xs sm:text-sm text-[#44474e] mt-1 leading-relaxed max-w-2xl">
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
                <h4 className=" text-xl font-bold text-[#002147]">
                  Executive Management Team
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {LEADERS.map((person, idx) => (
                    <div key={idx} className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5] space-y-3">
                      <div className="w-14 h-14 rounded-full bg-[#002147] text-[#fea619] flex items-center justify-center font-bold text-xl">
                        {person.name[0]}
                      </div>
                      <div>
                        <h5 className=" text-lg font-bold text-[#000a1e]">
                          {person.name}
                        </h5>
                        <p className="text-xs font-semibold text-[#855300] ">
                          {person.role}
                        </p>
                        <span className="inline-block text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-[#c4c6cf] mt-1">
                          {person.experience}
                        </span>
                      </div>
                      <p className=" text-xs text-[#44474e] leading-relaxed pt-2 border-t border-[#e0e3e5]">
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
                <h4 className=" text-xl font-bold text-[#002147]">
                  Quality Assurance & Testing Standards
                </h4>

                <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className=" text-base font-bold text-[#002147] flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#fea619]" />
                      Testing Facilities & Capabilities
                    </h5>
                    <ul className="space-y-2  text-xs text-[#44474e] list-disc pl-5">
                      <li>Dielectric Breakdown Voltage testing up to 45 kV/mm (IS 15652 / IEC 61111)</li>
                      <li>Thermal Conductivity evaluation (ASTM C612 / IS 8183)</li>
                      <li>High-Pressure Hydrostatic Gasket Sealing analysis (ASME B16.20)</li>
                      <li>Tensile Strength & Elongation testing for elastomeric sheets</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className=" text-base font-bold text-[#002147] flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#fea619]" />
                      Compliance Dossiers
                    </h5>
                    <ul className="space-y-2  text-xs text-[#44474e] list-disc pl-5">
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
            <p className="text-xs text-[#74777f] ">
              Visit our central fulfillment hub in Mumbai or request quality assurance documentation.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote();
                }}
                className="bg-[#fea619] hover:bg-[#e69310] text-[#002147] text-xs  font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <span>Request B2B Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="bg-[#002147] text-white text-xs  font-bold px-4 py-2.5 rounded-lg hover:bg-[#000a1e] cursor-pointer"
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
