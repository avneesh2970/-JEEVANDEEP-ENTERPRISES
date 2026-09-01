import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Building,
  PhoneCall,
  MapPinned
} from 'lucide-react';
import { ContactSection } from './ContactSection';

interface ContactPageProps {
  onNavigateHome: () => void;
  onShowToast: (message: string) => void;
}

interface OfficeBranch {
  name: string;
  badge: string;
  tag: string;
  isHeadOffice?: boolean;
  address: string;
  phones: string[];
  landline?: string;
  email?: string;
}

const BRANCHES: OfficeBranch[] = [
  {
    name: 'Mohali (Punjab)',
    tag: 'Head Office',
    badge: 'HQ & Manufacturing Unit',
    isHeadOffice: true,
    address: 'Plot No. D-124, Industrial Area, Phase-VII, Mohali (Punjab)',
    phones: ['+91 95018 21375'],
    landline: '+91 172 5032099',
    email: 'jeevendeep.enterprises@gmail.com',
  },
  {
    name: 'Chandigarh',
    tag: 'Branch Office',
    badge: 'Industrial Area Phase 2',
    address: 'Plot No. -931, Industrial Area, Ph. - 02, Chandigarh',
    phones: ['+91 81467 91251', '+91 95018 21375'],
  },
  {
    name: 'Dehradun (Uttarakhand)',
    tag: 'Branch Office',
    badge: 'Uttarakhand Regional Hub',
    address: 'Behind Sabzi Mandi, Near Nitco Transport Company, Dehradun, 248001 (Uttrakhand)',
    phones: ['+91 88590 32220', '+91 94114 87540'],
  },
  {
    name: 'Ghaziabad (U.P.)',
    tag: 'Branch Office',
    badge: 'NCR / Uttar Pradesh',
    address: 'PLOT NO. 1 ISHI GARDEN SHIDDHARTH VIHAR, INDRAPURAM,GHAZIABAD (U.P) 201009',
    phones: ['+91 97117 35632', '+91 99585 02261', '+91 81307 97939'],
  },
  {
    name: 'Hyderabad (Telangana)',
    tag: 'Branch Office',
    badge: 'South India Hub',
    address: 'Flat No.: 5-9-262/40, Ground Floor Flat Nom -II, Kukatpally, Rajiv Gandhi Nagar, Medchal Malkajgiri, Hyderabad, Telangana - 500037',
    phones: ['+91 95018 21375'],
  },
];

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onShowToast,
}) => {
  const headOffice = BRANCHES.find((b) => b.isHeadOffice)!;
  const branchOffices = BRANCHES.filter((b) => !b.isHeadOffice);

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-[#00132b] text-white py-16 md:py-20 border-b border-[#c4c6cf] relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000a1a] via-[#00132b] to-[#002147] opacity-95" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Contact Us & Request a Quotation
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
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
                <span className="text-[11px] text-slate-400 font-medium block">Head Office Direct</span>
                <a href="tel:+919501821375" className="text-sm font-bold text-white font-mono hover:text-[#fea619] block">
                  +91 95018 21375
                </a>
                <a href="tel:+911725032099" className="text-xs text-slate-300 font-mono hover:text-[#fea619] block">
                  +91 172 5032099
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Primary E-mail</span>
                <a href="mailto:jeevendeep.enterprises@gmail.com" className="text-xs sm:text-sm font-bold text-white font-mono hover:text-[#fea619] break-all block">
                  jeevendeep.enterprises@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#fea619]/20 text-[#fea619] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Head Office</span>
                <span className="text-xs font-bold text-white leading-tight block">
                  Phase-VII, Mohali (Punjab)
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

      {/* ── BRANCH OFFICES & HEAD OFFICE NETWORK ── */}
      <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3">
            <MapPinned className="w-3.5 h-3.5 text-[#fea619]" />
            Pan-India Presence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
            Head Office & Branch Offices
          </h2>
          <p className="text-sm sm:text-base text-[#44474e] max-w-2xl mx-auto mt-2">
            Reach out to our head office or regional branch offices across India for prompt support, product inquiries, and local assistance.
          </p>
        </motion.div>

        {/* Head Office Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-gradient-to-br from-[#001738] via-[#002147] to-[#003166] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#003975] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#fea619] text-[#001738] text-xs font-extrabold tracking-wide uppercase shadow-xs">
                  <Building2 className="w-3.5 h-3.5" />
                  Head Office
                </span>
                <span className="text-xs text-slate-300 bg-white/10 px-2.5 py-0.5 rounded border border-white/10">
                  {headOffice.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {headOffice.name}
              </h3>
              <div className="flex items-start gap-2.5 text-slate-200 text-sm leading-relaxed">
                <MapPin className="w-4 h-4 text-[#fea619] shrink-0 mt-1" />
                <span>{headOffice.address}</span>
              </div>
            </div>

            {/* Head office contact pills */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0 border-t lg:border-t-0 lg:border-l border-white/15 pt-4 lg:pt-0 lg:pl-8">
              <div>
                <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider mb-1">Mobile & Phone</span>
                <div className="flex flex-wrap gap-2">
                  {headOffice.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#fea619] hover:text-[#001738] text-white px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors border border-white/10"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      {phone}
                    </a>
                  ))}
                  {headOffice.landline && (
                    <a
                      href={`tel:${headOffice.landline.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#fea619] hover:text-[#001738] text-white px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors border border-white/10"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Ph: {headOffice.landline}
                    </a>
                  )}
                </div>
              </div>

              {headOffice.email && (
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider mb-1">Email Address</span>
                  <a
                    href={`mailto:${headOffice.email}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#fea619] hover:text-[#001738] text-white px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors border border-white/10 break-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {headOffice.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Regional Branch Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branchOffices.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-[#e0e3e7] p-6 shadow-xs hover:shadow-md hover:border-[#002147]/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Branch Header */}
                <div className="flex items-center justify-between gap-3 border-b border-[#f0f2f5] pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#002147]/5 text-[#002147] flex items-center justify-center font-bold">
                      <Building className="w-4 h-4 text-[#002147]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#fea619] uppercase tracking-wider block">
                        {branch.tag}
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-[#002147]">
                        {branch.name}
                      </h4>
                    </div>
                  </div>
                  <span className="text-[11px] bg-[#f0f4f9] text-[#44474e] font-semibold px-2.5 py-1 rounded-md border border-[#e0e3e7]">
                    {branch.badge}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#002147]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#002147]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                    {branch.address}
                  </p>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="pt-4 border-t border-[#f0f2f5]">
                <span className="text-[11px] font-bold text-[#6d7178] uppercase tracking-wider block mb-2">
                  Contact Mobile
                </span>
                <div className="flex flex-wrap gap-2">
                  {branch.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 bg-[#f7f9fb] hover:bg-[#002147] text-[#002147] hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors border border-[#dde1e7]"
                    >
                      <Phone className="w-3 h-3 text-[#fea619]" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main RFQ Form Section */}
      <div className="py-4">
        <ContactSection onShowToast={onShowToast} />
      </div>

      {/* Fulfillment Hub & Location Map Banner */}
      <section className="pb-16 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        <div className="bg-white rounded-2xl border border-[#c4c6cf]/80 p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#e0e3e5] pb-6">
            <div>
              <h3 className="text-2xl font-bold text-[#002147]">
                Central Fulfillment & Dispatch Facility
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] mt-1">
                Our central warehouses and branch hubs maintain safety stock for immediate dispatch across all 28 states and union territories.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#002147] text-white px-4 py-2 rounded-xl text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
              Pan-India Express Freight Hub
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#44474e]">
            <div className="bg-[#f7f9fb] p-5 rounded-xl border border-[#e0e3e5] space-y-2">
              <span className="font-bold text-[#002147] block text-sm">Headquarters Address:</span>
              <p>Plot No. D-124, Industrial Area, Phase-VII, Mohali (Punjab), India.</p>
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

