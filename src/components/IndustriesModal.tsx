import React from 'react';
import { INDUSTRY_SECTORS } from '../data/mockData';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { FaBolt, FaGasPump, FaFan, FaIndustry, FaBuilding } from 'react-icons/fa6';

interface IndustriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const IndustriesModal: React.FC<IndustriesModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  if (!isOpen) return null;

  const renderSectorIcon = (icon: string) => {
    switch (icon) {
      case 'bolt':
        return <FaBolt />;
      case 'local_gas_station':
        return <FaGasPump />;
      case 'hvac':
        return <FaFan />;
      case 'precision_manufacturing':
        return <FaIndustry />;
      default:
        return <FaBuilding />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-lg border border-[#c4c6cf] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#002147] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <h3 className=" text-xl md:text-2xl font-bold text-white">
              Industries & Key Sectors Served
            </h3>
            <p className=" text-xs text-[#708ab5] mt-0.5">
              Certified supply solutions for high-consequence infrastructure and manufacturing facilities
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRY_SECTORS.map((sector) => (
              <div
                key={sector.id}
                className="bg-[#ffffff] border border-[#c4c6cf] hover:border-[#002147] p-6 rounded-lg transition-all duration-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-[#002147] text-[#fea619] flex items-center justify-center">
                      <span className="text-xl">
                        {renderSectorIcon(sector.icon)}
                      </span>
                    </div>
                    <h4 className=" text-lg font-bold text-[#002147]">
                      {sector.title}
                    </h4>
                  </div>

                  <p className=" text-xs sm:text-sm text-[#44474e] leading-relaxed mb-4">
                    {sector.description}
                  </p>

                  {/* Key Supplies */}
                  <div className="mb-4">
                    <span className=" text-xs font-semibold text-[#191c1e] uppercase tracking-wider block mb-2">
                      Key Material Supplies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.keySupplies.map((sup, idx) => (
                        <span
                          key={idx}
                          className="bg-[#f2f4f6] text-[#002147] text-xs px-2.5 py-1 rounded border border-[#e0e3e5] flex items-center gap-1 font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#fea619]" />
                          {sup}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Featured Project */}
                <div className="bg-[#f7f9fb] p-3 rounded border-l-3 border-[#fea619] text-xs  text-[#44474e] mt-2">
                  <span className="font-bold text-[#002147] block mb-0.5">Project Footprint:</span>
                  {sector.featuredProject}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f2f4f6] px-6 py-4 border-t border-[#c4c6cf] flex items-center justify-between">
          <p className="text-xs text-[#74777f] ">
            Annual rate contracts and turnkey material supply schedules available.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="bg-[#fea619] hover:bg-[#ffb95f] text-[#684000] text-xs  font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow-2xs cursor-pointer flex items-center gap-1.5"
            >
              <span>Request Sector Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="bg-[#002147] text-white text-xs  font-semibold px-4 py-2.5 rounded hover:bg-[#000a1e] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
