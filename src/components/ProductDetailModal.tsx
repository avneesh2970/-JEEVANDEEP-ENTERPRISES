import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCategory, ProductItem } from '../types';
import { X, ArrowRight, ShieldCheck, Layers, Search, Download } from 'lucide-react';
import { FaBoxArchive } from 'react-icons/fa6';

interface ProductDetailModalProps {
  category: ProductCategory | null;
  onClose: () => void;
  onRequestQuoteForProduct: (categoryName: string, productTitle: string) => void;
  onShowToast: (msg: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  category,
  onClose,
  onRequestQuoteForProduct,
  onShowToast,
}) => {
  const [modalSearch, setModalSearch] = useState('');

  if (!category) return null;

  const filteredProducts = category.products.filter(
    (p) =>
      modalSearch === '' ||
      p.name.toLowerCase().includes(modalSearch.toLowerCase()) ||
      p.modelCode.toLowerCase().includes(modalSearch.toLowerCase()) ||
      p.grade.toLowerCase().includes(modalSearch.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm">
        {/* Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Modal Main Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative z-10 bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl border border-[#c4c6cf] shadow-2xl flex flex-col overflow-hidden text-left"
        >
          {/* Header */}
          <div className="bg-[#002147] text-white px-6 py-5 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#fea619] text-[#684000] flex items-center justify-center font-bold shadow-sm">
                <span className="text-xl">
                  <FaBoxArchive />
                </span>
              </div>
              <div>
                <h3 className=" text-xl md:text-2xl font-bold text-white leading-tight">
                  {category.name} Industrial Catalog
                </h3>
                <p className=" text-xs text-slate-300">
                  {category.itemCount}+ certified specifications available for immediate procurement
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

          {/* Modal Content Body */}
          <div className="p-6 overflow-y-auto space-y-8 grow">
            {/* Category Overview Box */}
            <div className="bg-[#f7f9fb] p-5 rounded-xl border border-[#e0e3e5] space-y-3">
              <p className=" text-sm text-[#191c1e] leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {category.highlightSpecs.map((spec, i) => (
                  <span
                    key={i}
                    className="bg-white border border-[#c4c6cf]/80 text-[#002147] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#fea619]" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Product Lines Subcategories */}
            <div>
              <h4 className=" text-xs font-bold uppercase tracking-wider text-[#002147] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#fea619]" />
                Available Product Lines & Configurations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {category.subcategories.map((sub, i) => (
                  <div
                    key={i}
                    className="bg-[#f2f4f6] text-xs  font-semibold text-[#191c1e] px-3.5 py-2.5 rounded-lg border border-[#e0e3e5] flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#002147]" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter Search inside Modal */}
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#e0e3e5]">
              <h4 className=" text-base font-bold text-[#002147]">
                Featured Standard Specifications ({filteredProducts.length})
              </h4>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#74777f]" />
                <input
                  type="text"
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  placeholder="Filter specs in modal..."
                  className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] rounded-lg pl-8 pr-3 py-1.5 text-xs  text-[#191c1e] outline-hidden"
                />
              </div>
            </div>

            {/* Technical Products List */}
            <div className="space-y-4">
              {filteredProducts.map((item: ProductItem) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#c4c6cf]/80 hover:border-[#002147] p-5 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e0e3e5] pb-3 mb-3">
                    <div>
                      <span className="text-[11px] font-mono font-bold bg-[#002147] text-white px-2.5 py-1 rounded mr-2">
                        {item.modelCode}
                      </span>
                      <span className=" text-base font-bold text-[#000a1e]">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs  text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-0.5 rounded-full self-start sm:self-auto font-bold">
                      ● In Stock & Ready for Dispatch
                    </span>
                  </div>

                  <p className=" text-xs sm:text-sm text-[#44474e] mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Standards */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-[#74777f]">Standards:</span>
                    {item.standards.map((std, idx) => (
                      <span key={idx} className="bg-[#eceef0] text-[#002147] text-[11px] px-2.5 py-0.5 rounded font-mono font-bold">
                        {std}
                      </span>
                    ))}
                  </div>

                  {/* Specs Grid */}
                  <div className="bg-[#f7f9fb] p-3.5 rounded-lg border border-[#e0e3e5] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs  mb-4">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k}>
                        <span className="text-[#74777f] block font-medium">{k}:</span>
                        <span className="font-bold text-[#191c1e]">{v}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <button
                      onClick={() => onShowToast(`Technical Data Sheet (TDS) for ${item.modelCode} queued for instant download.`)}
                      className="text-xs text-[#002147] font-bold hover:underline flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#fea619]" />
                      <span>Download TDS / MSDS Sheet</span>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onRequestQuoteForProduct(category.id, item.name);
                      }}
                      className="bg-[#fea619] hover:bg-[#e69310] text-[#002147] text-xs  font-extrabold px-5 py-2.5 rounded-lg shadow-2xs flex items-center gap-1.5 cursor-pointer uppercase tracking-wider transition-colors"
                    >
                      <span>Add to RFQ Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-[#f2f4f6] px-6 py-4 border-t border-[#c4c6cf] flex items-center justify-between shrink-0">
            <p className="text-xs text-[#74777f] ">
              Custom dimension cutting and fabrication available on request.
            </p>
            <button
              onClick={onClose}
              className="bg-[#002147] text-white text-xs  font-bold px-5 py-2.5 rounded-lg hover:bg-[#000a1e] transition-colors cursor-pointer"
            >
              Close Catalog
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
