import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../data/mockData';
import { ProductCategory, ProductItem } from '../types';
import { Search, ArrowRight, RotateCcw, Box, ChevronDown, ChevronUp } from 'lucide-react';
import { FaShieldHalved } from 'react-icons/fa6';

interface ProductCategoriesSectionProps {
  onSelectCategory: (category: ProductCategory) => void;
  onRequestQuoteForCategory: (categoryName: string) => void;
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onRequestQuoteForCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Flatten all products across categories with category parent reference
  const allProducts: (ProductItem & { categoryId: string; categoryIcon: string })[] = PRODUCT_CATEGORIES.flatMap(
    (cat) =>
      cat.products.map((prod) => ({
        ...prod,
        categoryId: cat.id,
        categoryIcon: cat.icon,
      }))
  );

  const filterCategories = ['all', 'insulation', 'rubber', 'electrical', 'hardware', 'sealing'];

  const filteredProducts = allProducts.filter((prod) => {
    const matchesFilter = selectedFilter === 'all' || prod.categoryId.toLowerCase() === selectedFilter;
    const matchesSearch =
      searchQuery === '' ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.standards.some((std) => std.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleFilterChange = (filter: string) => {
    setIsLoading(true);
    setSelectedFilter(filter);
    setShowAllProducts(false); // Reset to 2 rows when filter changes
    setTimeout(() => setIsLoading(false), 200);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowAllProducts(false);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedFilter('all');
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
            Certified Materials Inventory
          </span>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-[44px] md:leading-[52px] font-extrabold text-[#002147] mb-4 tracking-tight">
            Featured Industrial Products
          </h2>
          <p className="font-['Inter'] text-base md:text-[18px] text-[#44474e] max-w-2xl mx-auto">
            Browse our certified high-performance industrial supplies. Click any product to request an instant quotation.
          </p>
        </motion.div>

        {/* Real-time Search & Category Filters Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#c4c6cf]/80 shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input Box */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#74777f]" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products (e.g. Rockwool, XLPE, Nut Bolt, Cable Tray)..."
                className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:bg-white rounded-lg pl-10 pr-4 py-2.5 font-['Inter'] text-xs sm:text-sm text-[#191c1e] outline-hidden transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#74777f] hover:text-[#000a1e] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs font-semibold text-[#74777f] font-['Inter'] mr-1 hidden lg:inline">
                Category Filter:
              </span>
              {filterCategories.map((catKey) => {
                const isActive = selectedFilter === catKey;
                return (
                  <button
                    key={catKey}
                    onClick={() => handleFilterChange(catKey)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-['Inter'] font-semibold capitalize transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#002147] text-white shadow-xs'
                        : 'bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#44474e]'
                    }`}
                  >
                    {catKey}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skeleton Loader State */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="bg-white rounded-xl border border-[#e0e3e5] overflow-hidden space-y-4 animate-skeleton">
                <div className="aspect-video bg-slate-200 w-full" />
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-slate-200 rounded w-3/4" />
                  <div className="h-16 bg-slate-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <>
            {/* Products Grid (Clicking product directly triggers RFQ quote) */}
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
                    {/* 1. Full-Bleed Product Image */}
                    {prod.imageUrl && (
                      <div className="-mx-5 -mt-5 mb-4 aspect-video w-[calc(100%+2.5rem)] overflow-hidden rounded-t-xl bg-slate-100 border-b border-[#e0e3e5] group-hover:border-[#fea619]/60 transition-colors">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* 2. Category Badge */}
                    <div className="mb-2">
                      <span className="inline-block text-[11px] bg-[#f2f4f6] text-[#002147] font-semibold px-2.5 py-0.5 rounded group-hover:bg-[#fea619]/20 group-hover:text-[#855300] transition-colors">
                        {prod.category}
                      </span>
                    </div>

                    {/* 3. Product Title */}
                    <h3 className="font-['Manrope'] text-base sm:text-lg font-bold text-[#000a1e] mb-2 tracking-tight line-clamp-2 group-hover:text-[#002147] transition-colors leading-snug">
                      {prod.name}
                    </h3>

                    {/* 4. Short Description */}
                    <p className="font-['Inter'] text-xs leading-relaxed text-[#44474e] line-clamp-3">
                      {prod.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Products Button (Displayed right after 2 rows) */}
            {hasMoreProducts && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-12"
              >
                <button
                  onClick={() => setShowAllProducts(!showAllProducts)}
                  className="inline-flex items-center gap-2.5 bg-[#002147] hover:bg-[#000a1e] text-white font-['Inter'] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-white/10"
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
          /* Human-Designed Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#ffffff] rounded-xl border border-[#c4c6cf]/80 p-10 text-center max-w-xl mx-auto shadow-xs"
          >
            <div className="w-16 h-16 rounded-full bg-[#f2f4f6] text-[#002147] flex items-center justify-center mx-auto mb-4">
              <Box className="w-8 h-8 text-[#fea619]" />
            </div>
            <h3 className="font-['Manrope'] text-xl font-bold text-[#002147] mb-2">
              No matching products found
            </h3>
            <p className="font-['Inter'] text-sm text-[#44474e] mb-6 leading-relaxed">
              We couldn't find any products matching "<strong>{searchQuery}</strong>". Try searching for keywords like <em>Rockwool</em>, <em>Nitrile</em>, <em>Jali</em>, or <em>Nut Bolt</em>.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#000a1e] text-white font-['Inter'] text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
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
              <h4 className="font-['Manrope'] text-lg font-bold text-[#000a1e]">
                Specialized Gaskets & High-Pressure Sealing Range
              </h4>
              <p className="text-xs md:text-sm text-[#44474e] font-['Inter']">
                CNAF non-asbestos sheets, ASME B16.20 spiral wound gaskets, PTFE joint sealants for severe service pipelines.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestQuoteForCategory('Sealing')}
            className="shrink-0 bg-[#f2f4f6] hover:bg-[#002147] hover:text-white text-[#000a1e] px-5 py-3 rounded-lg font-['Inter'] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Sealing Range</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
