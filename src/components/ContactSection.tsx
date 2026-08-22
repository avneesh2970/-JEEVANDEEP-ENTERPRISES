import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

interface ContactSectionProps {
  initialCategory?: string;
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      onShowToast('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      onShowToast('Message sent! We will get back to you shortly.');
    }, 800);
  };

  const inputClass =
    'w-full bg-white border border-[#dde1e7] rounded-xl px-4 py-3.5 font-[\'Inter\'] text-sm text-[#191c1e] placeholder-[#9ea3ab] outline-none focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/15 transition-all';

  return (
    <section id="contact" className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3 ">
          Get In Touch
        </span>
        <h2 className=" text-3xl sm:text-4xl md:text-[44px] md:leading-[52px] font-extrabold text-[#002147] mb-4 tracking-tight">
          Contact Us
        </h2>
        <p className=" text-base md:text-[18px] text-[#44474e] max-w-2xl mx-auto">
          Reach out to Jeevandeep Enterprises for product enquiries, quotations, or any business queries. We respond within 2 business hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ── LEFT CARD: Map + Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-[#e0e3e7] shadow-sm overflow-hidden flex flex-col"
        >
          {/* Google Map Embed */}
          <div className="relative w-full h-[280px] sm:h-[320px] bg-slate-100">
            {/* "Open in Maps" button overlaid on top-left */}
            <a
              href="https://www.google.com/maps/place/30%C2%B018'16.2%22N+78%C2%B000'19.1%22E/@30.3044945,78.0027316,17z"
              target="_blank"
              rel="noreferrer"
              className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 bg-white text-[#002147] text-xs font-bold px-3 py-1.5 rounded-lg shadow-md border border-[#dde1e7] hover:bg-[#f7f9fb] transition-colors"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <iframe
              title="Jeevandeep Enterprises Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.7!2d78.0027316!3d30.3044945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzE2LjIiTiA3OMKwMDAnMTkuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Info rows */}
          <div className="p-6 space-y-5">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#002147]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#002147]" />
              </div>
              <div>
                <h4 className=" text-sm font-bold text-[#000a1e] mb-0.5">Address</h4>
                <p className=" text-sm text-[#44474e] leading-relaxed">
                  Near Nitco Transport Company, Behind Sabzi Mandi,<br />
                  GMS Road, Dehradun, Uttarakhand – 248001, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#002147]/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#002147]" />
              </div>
              <div>
                <h4 className=" text-sm font-bold text-[#000a1e] mb-0.5">Email</h4>
                <a
                  href="mailto:info@jeevandeep.com"
                  className=" text-sm text-[#002147] font-semibold hover:underline"
                >
                  info@jeevandeep.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#002147]/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#002147]" />
              </div>
              <div>
                <h4 className=" text-sm font-bold text-[#000a1e] mb-0.5">Phone Number</h4>
                <a href="tel:+919411487540" className=" text-sm text-[#44474e] hover:text-[#002147] block transition-colors">
                  +91 94114 87540
                </a>
                <a href="tel:+919815376429" className=" text-sm text-[#44474e] hover:text-[#002147] block transition-colors">
                  +91 98153 76429
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 pt-1 border-t border-[#f0f2f5]">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                <span className="text-[#25D366] text-xl"><FaWhatsapp /></span>
              </div>
              <div>
                <h4 className=" text-sm font-bold text-[#000a1e] mb-0.5">WhatsApp</h4>
                <a
                  href="https://wa.me/919411487540?text=Hello%20Jeevandeep%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noreferrer"
                  className=" text-sm text-[#25D366] font-bold hover:underline"
                >
                  +91 94114 87540
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT CARD: Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-[#e0e3e7] shadow-sm p-8 flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className={inputClass}
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={inputClass}
              />
            </div>

            <div>
              <input
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Contact"
                className={inputClass}
              />
            </div>

            <div>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={inputClass}
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`${inputClass} resize-none`}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3b6fd4] hover:bg-[#2f5cba] disabled:opacity-70 text-white  text-sm font-bold py-4 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Submit</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
