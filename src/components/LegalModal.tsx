import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  title: string | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, onClose }) => {
  if (!title) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl max-h-[85vh] rounded-lg border border-[#c4c6cf] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-[#002147] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#fea619]" />
            <h3 className="font-['Manrope'] text-lg font-bold text-white">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-left font-['Inter'] text-sm text-[#44474e] leading-relaxed">
          {title === 'Privacy Policy' && (
            <>
              <p>
                <strong>1. Data Collection & Corporate Privacy</strong><br />
                Jeevandeep Enterprises respects the confidentiality of all technical drawings, material specifications, and procurement contact information submitted through our portal.
              </p>
              <p>
                <strong>2. Usage of Quotation Data</strong><br />
                All technical inquiries, bill-of-materials (BOM), and company details are strictly utilized to generate industrial quotations and coordinate deliveries with verified freight carriers.
              </p>
              <p>
                <strong>3. Non-Disclosure & Security</strong><br />
                We do not sell, rent, or transfer industrial client data to third-party commercial brokers. All engineering communications are stored in compliance with ISO 9001:2015 documentation standards.
              </p>
            </>
          )}

          {title === 'Terms of Service' && (
            <>
              <p>
                <strong>1. Quotation Validity</strong><br />
                All price quotations issued are valid for 15 calendar days from the date of issuance, subject to raw material metal index and raw polymer exchange rate variations.
              </p>
              <p>
                <strong>2. Quality & Mill Test Reports</strong><br />
                Materials are supplied with EN 10204 3.1 Mill Test Certificates and standard manufacturer warranty against manufacturing defects in accordance with Indian and international standards (IS/ASTM/BS/DIN).
              </p>
              <p>
                <strong>3. Dispatch & Freight Terms</strong><br />
                Standard delivery terms are Ex-Works Mumbai / FOB or Door Delivery across pan-India industrial clusters as agreed upon in the purchase order.
              </p>
            </>
          )}

          {title === 'ISO 9001 Quality Policy' && (
            <>
              <p>
                <strong>1. Quality Management Commitment</strong><br />
                Jeevandeep Enterprises is committed to total customer satisfaction through the timely supply of zero-defect industrial, thermal insulation, electrical, and hardware products.
              </p>
              <p>
                <strong>2. Batch Traceability</strong><br />
                Every batch of high-temperature insulation, dielectric rubber matting, and high-tensile fastener is tagged with batch numbers directly linked to certified test records.
              </p>
              <p>
                <strong>3. Continual Improvement</strong><br />
                We conduct regular vendor audits and metallurgical testing to ensure our inventory strictly conforms to customer technical guidelines.
              </p>
            </>
          )}
        </div>

        <div className="bg-[#f2f4f6] px-6 py-3 border-t border-[#c4c6cf] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#002147] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-[#000a1e]"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
