import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/mockData';
import { ProductItem } from '../types';
import { Search, ArrowRight, RotateCcw, Box, ChevronDown, ChevronUp } from 'lucide-react';
import { FaShieldHalved } from 'react-icons/fa6';

interface ProductCategoriesSectionProps {
  onRequestQuoteForCategory: (productName: string) => void;
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onRequestQuoteForCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllProducts, setShowAllProducts] = useState(false);

  // All products list without category grouping
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowAllProducts(false);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setShowAllProducts(false);
  };

  // Display limit: 2 rows of 4 items = 8 products
  const DISPLAY_LIMIT = 8;
  const displayedProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, DISPLAY_LIMIT);
  const hasMoreProducts = filteredProducts.length > DISPLAY_LIMIT;

  const handleSelectProductCard = (productName: string) => {
    onRequestQuoteForCategory(productName);
  };

  return (
    <section id="products" className="bg-[#f2f4f6] py-16 md:py-24 border-y border-[#e0e3e5] overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-[#002147] uppercase tracking-wider bg-[#002147]/10 px-3.5 py-1 rounded-full mb-3">
            Complete Insulation Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] md:leading-[52px] font-extrabold text-[#002147] mb-4 tracking-tight">
            Our Insulation Products Range
          </h2>
          <p className="text-base md:text-[18px] text-[#44474e] max-w-2xl mx-auto">
            Comprehensive range of certified thermal, acoustic, cold, and refractory insulation materials under one roof. Click any item to request a quote.
          </p>
        </motion.div>

        {/* Real-time Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#c4c6cf]/80 shadow-xs mb-10">
          <div className="relative w-full max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#74777f]" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search insulation products (e.g. Rockwool, Glasswool, Nitrile Rubber, XLPE, Ceramic)..."
              className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:bg-white rounded-lg pl-11 pr-10 py-3 text-xs sm:text-sm text-[#191c1e] outline-hidden transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#74777f] hover:text-[#000a1e] cursor-pointer bg-slate-200/70 hover:bg-slate-300 px-2 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {displayedProducts.map((prod, idx) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => handleSelectProductCard(prod.name)}
                  className="bg-[#ffffff] p-5 rounded-xl border border-[#c4c6cf]/80 industrial-shadow transition-all duration-300 flex flex-col justify-between cursor-pointer group text-left relative overflow-hidden"
                >
                  {/* Top Accent highlight on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#fea619] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-10" />

                  <div>
                    {/* Full-Bleed Product Image */}
                    {prod.imageUrl && (
                      <div className="-mx-5 -mt-5 mb-4 aspect-video w-[calc(100%+2.5rem)] overflow-hidden rounded-t-xl bg-slate-100 border-b border-[#e0e3e5] group-hover:border-[#fea619]/60 transition-colors">
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

            {/* View All Products Button */}
            {hasMoreProducts && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-12"
              >
                <button
                  onClick={() => setShowAllProducts(!showAllProducts)}
                  className="inline-flex items-center gap-2.5 bg-[#002147] hover:bg-[#000a1e] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-white/10"
                >
                  <span>{showAllProducts ? 'Show Less Products' : `View All Products (${filteredProducts.length})`}</span>
                  {showAllProducts ? (
                    <ChevronUp className="w-4 h-4 text-[#fea619]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#fea619]" />
                  )}
                </button>
              </motion.div>
            )}
          </>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#ffffff] rounded-xl border border-[#c4c6cf]/80 p-10 text-center max-w-xl mx-auto shadow-xs"
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
              onClick={clearFilters}
              className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#000a1e] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#fea619]" />
              <span>Clear Search & Show All Products</span>
            </button>
          </motion.div>
        )}

        {/* Specialized Gaskets Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-[#ffffff] p-6 rounded-xl border border-[#c4c6cf]/80 flex flex-col sm:flex-row items-center justify-between gap-4 industrial-shadow"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-lg bg-[#002147] text-[#fea619] flex items-center justify-center shrink-0 shadow-sm">
              <span className="text-2xl">
                <FaShieldHalved />
              </span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#000a1e]">
                Specialized Gaskets & High-Pressure Sealing Range
              </h4>
              <p className="text-xs md:text-sm text-[#44474e]">
                CNAF non-asbestos sheets, ASME B16.20 spiral wound gaskets, PTFE joint sealants for severe service pipelines.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestQuoteForCategory('Specialized Gaskets')}
            className="shrink-0 bg-[#f2f4f6] hover:bg-[#002147] hover:text-white text-[#000a1e] px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Sealing Range</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
