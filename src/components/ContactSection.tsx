import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuoteFormData } from '../types';
import { CheckCircle2, Copy, ExternalLink, Printer, Send, Phone, Mail, MapPin, Clock, ShieldCheck, Building2, Truck, FileText } from 'lucide-react';
import { FaWhatsapp, FaLocationDot, FaBuilding, FaPhone, FaEnvelope, FaClock, FaShieldHalved } from 'react-icons/fa6';

interface ContactSectionProps {
  initialCategory?: string;
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialCategory = '',
  onShowToast,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: initialCategory || '',
    estimatedQuantity: '',
    additionalDetails: '',
    deliveryCity: '',
  });

  const [urgency, setUrgency] = useState<'immediate' | 'standard' | 'tender'>('immediate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfq, setSubmittedRfq] = useState<{
    id: string;
    data: QuoteFormData;
    urgency: string;
    timestamp: string;
  } | null>(null);

  const categoryOptions = [
    { id: 'insulation', label: 'Thermal & Acoustic Insulation' },
    { id: 'rubber', label: 'Dielectric & Industrial Rubber' },
    { id: 'electrical', label: 'Electrical (Ex-d & Cable Trays)' },
    { id: 'hardware', label: 'High Tensile Fasteners & Hardware' },
    { id: 'sealing', label: 'Gaskets & Severe Service Sealing' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      onShowToast('Please fill in all required fields (*)');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const rfqId = `JEP-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      const newSubmission = {
        id: rfqId,
        data: { ...formData },
        urgency: urgency === 'immediate' ? 'Immediate (< 7 Days)' : urgency === 'standard' ? 'Standard (1-2 Weeks)' : 'Tender / Project Planning',
        timestamp: new Date().toLocaleString(),
      };
      setSubmittedRfq(newSubmission);
      setIsSubmitting(false);
      onShowToast(`RFQ ${rfqId} submitted! Engineering desk assigned.`);
    }, 600);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`${label} copied to clipboard!`);
  };

  return (
    <section id="contact" className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 overflow-hidden text-left">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3 font-['Inter']">
          Direct B2B Sales & Engineering
        </span>
        <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-[44px] md:leading-[52px] font-extrabold text-[#002147] mb-4 tracking-tight">
          Request a Quotation & Contact Us
        </h2>
        <p className="font-['Inter'] text-base md:text-[18px] text-[#44474e] max-w-2xl mx-auto">
          Partner with Jeevandeep Enterprises for precision engineering and certified industrial supplies. Submit your specifications for custom quotes and Mill Test Certificates (MTC 3.1).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* RFQ Form Container (Col 8) */}
        <div className="lg:col-span-8 bg-[#ffffff] rounded-2xl border border-[#c4c6cf]/80 p-6 sm:p-8 md:p-10 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e0e3e5] pb-5 mb-8">
              <div>
                <h3 className="font-['Manrope'] text-xl md:text-2xl font-bold text-[#000a1e]">
                  Request a Formal Quotation
                </h3>
                <p className="text-xs text-[#74777f] font-['Inter'] mt-0.5">
                  Guaranteed B2B SLA Response within 2 business hours
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-[#f2f4f6] px-3.5 py-1.5 rounded-lg border border-[#e0e3e5] text-[11px] font-mono text-[#002147] font-bold">
                <Clock className="w-3.5 h-3.5 text-[#fea619]" />
                <span>Average Response: &lt; 2 Hours</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submittedRfq ? (
                /* Submission Receipt Summary Card */
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#f7f9fb] border border-[#fea619]/40 rounded-2xl p-6 sm:p-8 space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#fea619]/20 text-[#855300] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-7 h-7 text-[#855300]" />
                    </div>
                    <div>
                      <h4 className="font-['Manrope'] text-xl font-bold text-[#002147]">
                        Quotation Request Received!
                      </h4>
                      <p className="font-['Inter'] text-xs sm:text-sm text-[#44474e] mt-1">
                        Reference ID:{' '}
                        <strong className="text-[#000a1e] font-mono bg-white px-2.5 py-1 border border-[#c4c6cf] rounded-md shadow-2xs">
                          {submittedRfq.id}
                        </strong>
                      </p>
                      <p className="font-['Inter'] text-xs text-[#74777f] mt-1">
                        Submitted on: {submittedRfq.timestamp}
                      </p>
                    </div>
                  </div>

                  {/* Summary Details Grid */}
                  <div className="bg-white p-6 rounded-xl border border-[#e0e3e5] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-['Inter'] shadow-2xs">
                    <div>
                      <span className="text-[#74777f] block font-medium">Client Name:</span>
                      <span className="font-bold text-[#000a1e] text-sm">{submittedRfq.data.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[#74777f] block font-medium">Company Name:</span>
                      <span className="font-bold text-[#000a1e] text-sm">{submittedRfq.data.companyName || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-[#74777f] block font-medium">Official Email:</span>
                      <span className="font-semibold text-[#002147]">{submittedRfq.data.email}</span>
                    </div>
                    <div>
                      <span className="text-[#74777f] block font-medium">Direct Phone:</span>
                      <span className="font-semibold text-[#000a1e]">{submittedRfq.data.phone}</span>
                    </div>
                    <div>
                      <span className="text-[#74777f] block font-medium">Category Interest:</span>
                      <span className="font-bold text-[#002147] capitalize">{submittedRfq.data.productCategory || 'General Industrial Supplies'}</span>
                    </div>
                    <div>
                      <span className="text-[#74777f] block font-medium">Target Delivery Urgency:</span>
                      <span className="font-bold text-emerald-700">{submittedRfq.urgency}</span>
                    </div>
                    {submittedRfq.data.deliveryCity && (
                      <div>
                        <span className="text-[#74777f] block font-medium">Delivery Destination City:</span>
                        <span className="font-bold text-[#002147]">{submittedRfq.data.deliveryCity}</span>
                      </div>
                    )}
                    {submittedRfq.data.additionalDetails && (
                      <div className="sm:col-span-2 pt-3 border-t border-[#e0e3e5]">
                        <span className="text-[#74777f] block font-medium">Technical Specs & Notes:</span>
                        <p className="text-[#44474e] mt-1 italic whitespace-pre-wrap leading-relaxed">{submittedRfq.data.additionalDetails}</p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleCopy(submittedRfq.id, 'RFQ Reference ID')}
                        className="inline-flex items-center gap-1.5 text-xs font-['Inter'] font-bold text-[#002147] bg-white border border-[#c4c6cf] hover:bg-[#f2f4f6] px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Reference #</span>
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 text-xs font-['Inter'] font-bold text-[#002147] bg-white border border-[#c4c6cf] hover:bg-[#f2f4f6] px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Receipt</span>
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setSubmittedRfq(null);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          email: '',
                          phone: '',
                          productCategory: '',
                          estimatedQuantity: '',
                          additionalDetails: '',
                          deliveryCity: '',
                        });
                      }}
                      className="text-xs font-['Inter'] font-extrabold text-[#855300] hover:underline cursor-pointer"
                    >
                      Submit Another RFQ Inquiry →
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Main B2B RFQ Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection Pills */}
                  <div className="space-y-2">
                    <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block">
                      Select Product Category Focus
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categoryOptions.map((cat) => {
                        const isSelected = formData.productCategory === cat.id || formData.productCategory.toLowerCase().includes(cat.id);
                        return (
                          <button
                            type="button"
                            key={cat.id}
                            onClick={() => setFormData((prev) => ({ ...prev, productCategory: cat.id }))}
                            className={`px-3.5 py-2 rounded-xl text-xs font-['Inter'] font-semibold transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-[#002147] text-white border-[#002147] shadow-xs font-bold'
                                : 'bg-[#f7f9fb] hover:bg-[#e0e3e5] text-[#44474e] border-[#c4c6cf]/80'
                            }`}
                          >
                            {cat.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20 focus:bg-white rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#191c1e] outline-hidden transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block" htmlFor="companyName">
                        Company Name / Organization
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Larsen & Toubro / BHEL"
                        className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20 focus:bg-white rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#191c1e] outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block" htmlFor="email">
                        Official Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20 focus:bg-white rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#191c1e] outline-hidden transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block" htmlFor="phone">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20 focus:bg-white rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#191c1e] outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block" htmlFor="estimatedQuantity">
                        Estimated Quantity / Dimensions
                      </label>
                      <input
                        id="estimatedQuantity"
                        name="estimatedQuantity"
                        type="text"
                        value={formData.estimatedQuantity}
                        onChange={handleChange}
                        placeholder="e.g. 50 Rolls / 100 Sq. Meters / 200 Sets"
                        className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20 focus:bg-white rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#191c1e] outline-hidden transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block" htmlFor="deliveryCity">
                        Delivery Destination City & Pincode
                      </label>
                      <input
                        id="deliveryCity"
                        name="deliveryCity"
                        type="text"
                        value={formData.deliveryCity}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai, Pune, Delhi, Vadodara..."
                        className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20 focus:bg-white rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#191c1e] outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Urgency Radio Selection Cards */}
                  <div className="space-y-2">
                    <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block">
                      Target Delivery Schedule & Urgency
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'immediate', label: '🚀 Immediate (< 7 Days)', desc: 'Shutdown or Plant Breakdown' },
                        { id: 'standard', label: '📅 Standard (1-2 Weeks)', desc: 'Regular Stock Procurement' },
                        { id: 'tender', label: '📋 Tender / Planning', desc: 'Future Project Budgeting' },
                      ].map((u) => (
                        <button
                          type="button"
                          key={u.id}
                          onClick={() => setUrgency(u.id as any)}
                          className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                            urgency === u.id
                              ? 'bg-[#fea619]/15 border-[#fea619] text-[#684000] font-bold shadow-2xs'
                              : 'bg-[#f7f9fb] hover:bg-[#e0e3e5] text-[#44474e] border-[#c4c6cf]/80'
                          }`}
                        >
                          <span className="font-['Inter'] text-xs block font-bold">{u.label}</span>
                          <span className="text-[10px] text-[#74777f] font-normal block mt-0.5">{u.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-['Inter'] text-xs font-bold text-[#191c1e] uppercase tracking-wider block" htmlFor="additionalDetails">
                      Technical Specifications / Material Requirements
                    </label>
                    <textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      rows={4}
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      placeholder="Mention standard requirements (IS/ASTM), operating temperatures, chemical media, required thickness, or custom dimensions..."
                      className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20 focus:bg-white rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#191c1e] outline-hidden transition-all resize-y"
                    />
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#e0e3e5]">
                    <span className="text-xs text-[#74777f] font-['Inter'] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#fea619]" />
                      <span>ISO 9001:2015 certified client data privacy</span>
                    </span>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#002147] hover:bg-[#000a1e] disabled:opacity-70 text-white font-['Inter'] text-[13px] font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer border border-white/10"
                    >
                      <span>{isSubmitting ? 'Processing RFQ...' : 'Submit Quotation Request'}</span>
                      <Send className="w-4 h-4 text-[#fea619]" />
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact Info Sidebar (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#ffffff] rounded-2xl border border-[#c4c6cf]/80 p-6 md:p-8 shadow-xs space-y-6">
            <h3 className="font-['Manrope'] text-xl font-bold text-[#000a1e] border-b border-[#e0e3e5] pb-4">
              Corporate Office Directory
            </h3>

            {/* Address */}
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-[#eceef0] rounded-xl text-[#002147] shrink-0 group-hover:bg-[#002147] group-hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#191c1e] mb-1">
                  Central Warehouse Hub
                </h4>
                <p className="font-['Inter'] text-xs sm:text-sm leading-relaxed text-[#44474e]">
                  Plot 42, Sector 18, Navi Mumbai Industrial Area, Maharashtra 400705, India
                </p>
                <button
                  onClick={() => handleCopy('Plot 42, Sector 18, Navi Mumbai Industrial Area, Maharashtra 400705, India', 'Office Address')}
                  className="text-[11px] text-[#002147] font-bold hover:underline mt-1 flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" /> Copy Address
                </button>
              </div>
            </div>

            {/* Direct Telephone */}
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-[#eceef0] rounded-xl text-[#002147] shrink-0 group-hover:bg-[#002147] group-hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#191c1e] mb-1">
                  Phone Hotline Directory
                </h4>
                <div className="font-['Inter'] text-xs sm:text-sm leading-relaxed text-[#44474e] space-y-0.5 font-mono">
                  <p>
                    Sales:{' '}
                    <a href="tel:+919876543210" className="text-[#002147] font-bold hover:underline">
                      +91 98765 43210
                    </a>
                  </p>
                  <p>
                    Support:{' '}
                    <a href="tel:+912212345678" className="text-[#002147] font-bold hover:underline">
                      +91 22 1234 5678
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-[#eceef0] rounded-xl text-[#002147] shrink-0 group-hover:bg-[#002147] group-hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#191c1e] mb-1">
                  Official Email Desk
                </h4>
                <div className="font-['Inter'] text-xs sm:text-sm leading-relaxed text-[#44474e] space-y-0.5">
                  <a href="mailto:sales@jeevandeep.com" className="text-[#002147] font-bold hover:underline block font-mono">
                    sales@jeevandeep.com
                  </a>
                  <a href="mailto:info@jeevandeep.com" className="text-[#002147] font-bold hover:underline block font-mono">
                    info@jeevandeep.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="flex items-start space-x-4 group border-t border-[#e0e3e5] pt-5">
              <div className="p-3 bg-[#25D366]/15 rounded-xl text-[#25D366] shrink-0 text-xl">
                <FaWhatsapp />
              </div>
              <div className="flex-grow">
                <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#191c1e] mb-1">
                  WhatsApp B2B Support
                </h4>
                <p className="font-['Inter'] text-xs sm:text-sm font-bold text-[#000a1e] font-mono">
                  +91 98765 43210
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Jeevandeep%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20industrial%20products."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-[#075E54] hover:text-[#25D366] font-['Inter'] font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Chat Now on WhatsApp</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Logistics Guarantee Card */}
          <div className="bg-[#00132b] text-white rounded-2xl p-6 border border-[#c4c6cf] shadow-2xs space-y-2">
            <h4 className="font-['Manrope'] text-sm font-bold text-[#fea619] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#fea619]" />
              Same-Day Dispatch & Quality Mill Certificates
            </h4>
            <p className="text-xs text-slate-300 font-['Inter'] leading-relaxed">
              Standard items dispatched within 24-48 hours with comprehensive Manufacturer Test Certificates (MTC 3.1) and live tracking.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Google Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 bg-white rounded-2xl border border-[#c4c6cf]/80 overflow-hidden shadow-sm"
      >
        <div className="bg-[#002147] text-white px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#fea619] text-[#002147] flex items-center justify-center font-bold text-lg shrink-0">
              <FaLocationDot />
            </div>
            <div>
              <h3 className="font-['Manrope'] text-lg font-bold text-white leading-snug">
                Navi Mumbai Central Fulfillment Hub & Quality Testing Lab
              </h3>
              <p className="font-['Inter'] text-xs text-slate-300">
                Plot 42, Sector 18, Industrial Area, Navi Mumbai, Maharashtra 400705, India
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Navi+Mumbai+Industrial+Area+Maharashtra+India"
            target="_blank"
            rel="noreferrer"
            className="bg-[#fea619] hover:bg-[#e69310] text-[#002147] font-['Inter'] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-2xs"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Embedded Responsive Google Map Iframe */}
        <div className="relative w-full h-[380px] sm:h-[440px] bg-slate-100">
          <iframe
            title="Jeevandeep Enterprises Central Fulfillment Hub Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7963388701977!2d73.0135!3d19.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c0a5555555%3A0x123456789abcdef!2sNavi%20Mumbai%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-[105%]"
          />
        </div>
      </motion.div>
    </section>
  );
};
