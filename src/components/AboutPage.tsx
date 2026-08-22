import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Building, Users, Clock, CheckCircle2, FileText, Truck, MapPin, ChevronRight } from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onRequestQuote,
  onExploreProducts,
}) => {
  const MILESTONES = [
    { year: '2001', title: 'Company Founded in Mumbai', desc: 'Established as a specialized mechanical hardware, fastener, and gasket supplier for heavy manufacturing facilities across Maharashtra.' },
    { year: '2008', title: 'Insulation Product Line Launch', desc: 'Expanded into high-temperature thermal and acoustic insulation, partnering with certified manufacturers for Rockwool slabs and Ceramic Fiber blankets.' },
    { year: '2014', title: '33kV Dielectric Rubber Safety Matting', desc: 'Introduced IS 15652 & IEC 61111 compliant dielectric rubber matting for high-voltage substation switchgear safety across power utilities.' },
    { year: '2019', title: 'Central Fulfillment & Logistics Hub', desc: 'Constructed a state-of-the-art 50,000 Sq. Ft. central logistics & warehousing center in Mumbai with 5,000+ certified SKUs.' },
    { year: '2023', title: 'ISO 9001:2015 Certification & MTC 3.1 System', desc: 'Achieved ISO 9001 certification for quality management, material traceability, and automated Mill Test Certificate (MTC 3.1) issuance.' },
  ];

  const LEADERS = [
    { name: 'Rajesh V. Sharma', role: 'Founder & Managing Director', experience: '25+ Years Experience', bio: 'Pioneered Jeevandeep Enterprises from a regional hardware vendor into a national industrial supply house serving power plants and refineries.' },
    { name: 'Vikram Mehta', role: 'Chief Quality Officer & Tech Lead', experience: '18+ Years Experience', bio: 'Oversees technical data validation, dielectric testing, and compliance with ASTM C612, IS 8183, and ASME B16.20 standards.' },
    { name: 'Ananya Deshmukh', role: 'Head of B2B Supply Chain', experience: '14+ Years Experience', bio: 'Manages pan-India logistics, emergency shutdown fulfillment, and same-day dispatch operations for major infrastructure clients.' },
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]  min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-[#00132b] text-white py-16 md:py-24 border-b border-[#c4c6cf] relative overflow-hidden text-left">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000a1a] via-[#00132b] to-[#002147] opacity-95" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 ">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#fea619] font-semibold">About Us</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fea619]/15 border border-[#fea619]/30 text-[#fea619] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#fea619]" />
              ISO 9001:2015 Certified Organization
            </span>

            <h1 className=" text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              About Jeevandeep Enterprises
            </h1>

            <p className=" text-base md:text-lg text-slate-300 leading-relaxed">
              Two Decades of Industrial Reliability, Precision Engineering & Certified Material Supply across Power, Oil & Gas, HVAC, and Infrastructure sectors in India.
            </p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">25+ Years</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Established 2001</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">50,000 Sq.Ft</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Mumbai Hub</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">ISO 9001</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Certified System</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">5,000+ SKUs</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Ready for Dispatch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Corporate Overview Section */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#002147]/10 text-[#002147] text-xs font-bold uppercase tracking-wider">
              <span>Corporate Heritage</span>
            </div>

            <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] tracking-tight">
              Bridging Technical Specifications & High-Quality Industrial Supply
            </h2>

            <p className=" text-sm md:text-base text-[#44474e] leading-relaxed">
              Founded in 2001 in Mumbai, Jeevandeep Enterprises has established itself as an indispensable B2B supply chain partner for engineering contractors, power utilities, petroleum refineries, and manufacturing plants across India.
            </p>

            <p className=" text-sm md:text-base text-[#44474e] leading-relaxed">
              We specialize in technical thermal insulation (Rockwool & Ceramic Fiber), dielectric safety matting up to 33kV (IS 15652 / IEC 61111), NBR/EPDM industrial rubber, HDG cable tray systems, and ASTM A193 B7 stud bolts. Every item supplied is backed by complete Mill Test Certificates (MTC 3.1) and ISO 9001 compliance dossiers.
            </p>

            <div className="p-5 bg-white rounded-xl border-l-4 border-[#fea619] border border-[#c4c6cf]/80 shadow-2xs space-y-1">
              <p className=" text-base font-bold text-[#002147]">
                ISO 9001:2015 Quality Management Systems Certified
              </p>
              <p className=" text-xs text-[#74777f]">
                Full lot traceability, chemical analysis reports, and third-party inspection readiness.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-[#c4c6cf]"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDix9ySWulfU9L9OLZtyIkDqHGA_E5G86DjwkuzZWDMErKCDNmwrTW-ZCskA9RrjqzR3gRBqgV0bOBe567L54TpfKdH2dg1-0iqvA8QNxjBg_KzNInG29yMsyni7sgB-EagnUdI80OWlR9J0ggOxsQVb0ND6CgaRBeTIpOgnP0-l2ylkQDIG5v6cpG3A7euR9fn1rGv7TGQorGxVDwZsSGasb_b03n4w4ScDVx5-FQ0gCqC1M26vHX3"
              alt="Jeevandeep Central Logistics Facility"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#002147]/95 text-white p-3 px-4 rounded-lg backdrop-blur-xs text-xs  font-semibold flex items-center gap-2.5 border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fea619] animate-pulse" />
              <span>Central Fulfillment Hub • Mumbai Logistics Park</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestone History Timeline */}
      <section className="py-16 md:py-24 bg-[#ffffff] border-y border-[#e0e3e5] text-left">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3">
              Journey of Growth
            </span>
            <h2 className=" text-3xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
              Company Milestone Timeline
            </h2>
            <p className=" text-sm sm:text-base text-[#44474e] max-w-xl mx-auto mt-2">
              Key developments that shaped Jeevandeep Enterprises over the last 25 years.
            </p>
          </div>

          <div className="relative border-l-2 border-[#fea619] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 max-w-4xl mx-auto">
            {MILESTONES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#002147] border-2 border-[#fea619] group-hover:scale-125 transition-transform" />
                <span className="text-xs font-mono font-bold bg-[#002147] text-white px-3 py-1 rounded shadow-2xs">
                  {item.year}
                </span>
                <h3 className=" text-xl font-bold text-[#000a1e] mt-3">
                  {item.title}
                </h3>
                <p className=" text-sm text-[#44474e] mt-1.5 leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Executive Management */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3">
            Experienced Team
          </span>
          <h2 className=" text-3xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
            Executive Leadership
          </h2>
          <p className=" text-sm sm:text-base text-[#44474e] max-w-xl mx-auto mt-2">
            Guided by industry veterans committed to quality compliance and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERS.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white p-7 rounded-2xl border border-[#c4c6cf]/80 shadow-2xs space-y-4 hover:border-[#002147] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#002147] text-[#fea619] flex items-center justify-center font-bold text-2xl shadow-md">
                {person.name[0]}
              </div>
              <div>
                <h3 className=" text-xl font-bold text-[#000a1e]">
                  {person.name}
                </h3>
                <p className="text-xs font-bold text-[#855300]  mt-0.5">
                  {person.role}
                </p>
                <span className="inline-block text-[11px] font-mono font-semibold text-[#002147] bg-[#f2f4f6] px-2.5 py-0.5 rounded border border-[#e0e3e5] mt-2">
                  {person.experience}
                </span>
              </div>
              <p className=" text-xs sm:text-sm text-[#44474e] leading-relaxed pt-3 border-t border-[#e0e3e5]">
                {person.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Testing Laboratory & Infrastructure */}
      <section className="py-16 md:py-24 bg-[#00132b] text-white border-t border-[#c4c6cf] text-left relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fea619]/15 border border-[#fea619]/30 text-[#fea619] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#fea619]" />
                In-House Quality Testing Desk
              </span>
              <h2 className=" text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Rigorous Material Testing & Certification
              </h2>
              <p className=" text-sm sm:text-base text-slate-300 leading-relaxed">
                Our Mumbai facility houses dedicated quality assurance equipment for evaluating dielectric breakdown voltages, thermal conductivity, and mechanical tensile strengths.
              </p>

              <div className="space-y-3  text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0" />
                  <span>33kV Dielectric Voltage Proofing for IS 15652 Substation Mats</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0" />
                  <span>Thermal Conductivity Evaluation (ASTM C612 / IS 8183 Rockwool)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0" />
                  <span>Chemical Analysis & MTC 3.1 Mill Test Certificates per shipment</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/5 p-8 rounded-2xl border border-white/15 backdrop-blur-md space-y-6">
              <h3 className=" text-xl font-bold text-white border-b border-white/15 pb-4">
                Full Page B2B Quote & Logistics Actions
              </h3>
              <p className=" text-sm text-slate-300 leading-relaxed">
                Need urgent technical datasheets, MTC records, or immediate emergency dispatch for a plant turnaround?
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onRequestQuote}
                  className="bg-[#fea619] hover:bg-[#e69310] text-[#002147]  text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Request B2B Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onExploreProducts}
                  className="bg-white/10 hover:bg-white/20 text-white  text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-lg border border-white/20 cursor-pointer"
                >
                  Browse Product Line
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
