import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/mockData';
import { ProductItem } from '../types';
import { ChevronRight, Search, ArrowRight, RotateCcw, Box, ShieldCheck } from 'lucide-react';

interface ProductsPageProps {
  onNavigateHome: () => void;
  onRequestQuote: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigateHome,
  onRequestQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // All products catalog without categories
  const allProducts: ProductItem[] = PRODUCTS;

  const filteredProducts = allProducts.filter((prod) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      prod.name.toLowerCase().includes(query) ||
      prod.modelCode.toLowerCase().includes(query) ||
      prod.description.toLowerCase().includes(query) ||
      prod.standards.some((std) => std.toLowerCase().includes(query))
    );
  });

  const handleSelectProductCard = (productName: string) => {
    onRequestQuote(productName);
  };

  const currentYear = new Date().getFullYear();
  const yearsOfTrust = Math.max(1, currentYear - 2011);

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
            <span className="text-[#fea619] font-semibold">Products</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fea619]/15 border border-[#fea619]/30 text-[#fea619] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#fea619]" />
              EST. 2011 • INSULATION SPECIALISTS
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Complete Insulation Solutions Under One Roof
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Explore our full range of certified thermal, acoustic, cold, and refractory insulation materials. Click any product to request an instant quotation.
            </p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-6 border-t border-white/15">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-extrabold text-[#fea619]">20 Products</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Full Ready Stock</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-extrabold text-[#fea619]">ASTM &amp; IS</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Certified Standards</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-extrabold text-[#fea619]">{yearsOfTrust}+ Years</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Years of Trust</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-extrabold text-[#fea619]">Pan-India</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Regional Branch Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 md:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        {/* Search Bar */}
        <div className="bg-white p-5 rounded-2xl border border-[#c4c6cf]/80 shadow-xs mb-10">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#74777f]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, model code, or standard (e.g. Perforated Jali, Nitrile Rubber, XLPE, Nut Bolt, Cable Tray)..."
              className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:bg-white rounded-xl pl-12 pr-12 py-3.5 text-sm text-[#191c1e] outline-hidden transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#74777f] hover:text-[#000a1e] cursor-pointer bg-slate-200/70 hover:bg-slate-300 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                whileHover={{ y: -6 }}
                onClick={() => handleSelectProductCard(prod.name)}
                className="bg-[#ffffff] p-5 rounded-2xl border border-[#c4c6cf]/80 industrial-shadow transition-all duration-300 flex flex-col justify-between cursor-pointer group text-left relative overflow-hidden"
              >
                {/* Top Accent highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#fea619] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-10" />

                <div>
                  {/* Full-Bleed Product Image */}
                  {prod.imageUrl && (
                    <div className="-mx-5 -mt-5 mb-4 aspect-video w-[calc(100%+2.5rem)] overflow-hidden rounded-t-2xl bg-slate-100 border-b border-[#e0e3e5] group-hover:border-[#fea619]/60 transition-colors">
                      <img
                        src={prod.imageUrl}
                        alt={`${prod.name} - Jeevandeep Enterprises Certified Supply`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Product Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#000a1e] mb-2 tracking-tight line-clamp-2 group-hover:text-[#002147] transition-colors leading-snug">
                    {prod.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs leading-relaxed text-[#44474e] line-clamp-3">
                    {prod.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#ffffff] rounded-2xl border border-[#c4c6cf]/80 p-12 text-center max-w-xl mx-auto shadow-xs"
          >
            <div className="w-16 h-16 rounded-full bg-[#f2f4f6] text-[#002147] flex items-center justify-center mx-auto mb-4">
              <Box className="w-8 h-8 text-[#fea619]" />
            </div>
            <h3 className="text-xl font-bold text-[#002147] mb-2">
              No matching products found
            </h3>
            <p className="text-sm text-[#44474e] mb-6 leading-relaxed">
              We couldn't find any products matching "<strong>{searchQuery}</strong>". Try searching for keywords like <em>Rockwool</em>, <em>Nitrile</em>, <em>Jali</em>, or <em>Nut Bolt</em>.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#000a1e] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#fea619]" />
              <span>Clear Search & Show All Products</span>
            </button>
          </motion.div>
        )}

        {/* Custom Order / RFQ Banner */}
        <div className="mt-16 bg-[#00132b] text-white p-8 rounded-2xl border border-[#c4c6cf] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">
              Need Custom Cut Sizes, Specific Standard Grades or Bulk Tenders?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We provide custom dimension shearing, gasket punching, pre-slit pipe insulation sleeves, and Mill Test Certificates (MTC 3.1).
            </p>
          </div>
          <button
            onClick={() => onRequestQuote()}
            className="shrink-0 bg-[#fea619] hover:bg-[#e69310] text-[#002147] px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
