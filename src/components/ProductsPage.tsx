import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../data/mockData';
import { ProductItem } from '../types';
import { ChevronRight, Search, ArrowRight, RotateCcw, Box, ShieldCheck } from 'lucide-react';

interface ProductsPageProps {
  onNavigateHome: () => void;
  onRequestQuote: (categoryName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigateHome,
  onRequestQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

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
    setTimeout(() => setIsLoading(false), 150);
  };

  const handleSelectProductCard = (productName: string) => {
    onRequestQuote(productName);
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]  min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-[#00132b] text-white py-16 md:py-20 border-b border-[#c4c6cf] relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000a1a] via-[#00132b] to-[#002147] opacity-95" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 ">
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
              ISO 9001:2015 Certified Stock
            </span>

            <h1 className=" text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Certified Industrial Materials Catalog
            </h1>

            <p className=" text-base md:text-lg text-slate-300 leading-relaxed">
              Explore our full range of 18+ certified high-performance industrial products. Click any product to request an instant quotation.
            </p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-6 border-t border-white/15">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">18+ Products</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Full Stock Inventory</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">MTC 3.1 Specs</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Mill Certificate Included</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">ASTM / IS / IEC</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Tested Standards</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">Same-Day Dispatch</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Central Warehouse Hub</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 md:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        {/* Real-time Search & Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-[#c4c6cf]/80 shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input Box */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#74777f]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g. Rockwool, XLPE, Nut Bolt, Cable Tray)..."
                className="w-full bg-[#f7f9fb] border border-[#c4c6cf] focus:border-[#002147] focus:bg-white rounded-xl pl-10 pr-4 py-3  text-xs sm:text-sm text-[#191c1e] outline-hidden transition-colors"
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
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold text-[#74777f]  mr-1 hidden lg:inline">
                Category Filter:
              </span>
              {filterCategories.map((catKey) => {
                const isActive = selectedFilter === catKey;
                return (
                  <button
                    key={catKey}
                    onClick={() => handleFilterChange(catKey)}
                    className={`px-4 py-2 rounded-xl text-xs  font-bold capitalize transition-all cursor-pointer ${
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

        {/* Products Grid (Clicking product directly triggers RFQ quote) */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="bg-white rounded-2xl border border-[#e0e3e5] overflow-hidden space-y-4 animate-skeleton">
                <div className="aspect-video bg-slate-200 w-full" />
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-slate-200 rounded w-3/4" />
                  <div className="h-16 bg-slate-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
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
                  {/* 1. Full-Bleed Product Image */}
                  {prod.imageUrl && (
                    <div className="-mx-5 -mt-5 mb-4 aspect-video w-[calc(100%+2.5rem)] overflow-hidden rounded-t-2xl bg-slate-100 border-b border-[#e0e3e5] group-hover:border-[#fea619]/60 transition-colors">
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
                    <span className="inline-block text-[11px] bg-[#f2f4f6] text-[#002147] font-semibold px-2.5 py-0.5 rounded-md group-hover:bg-[#fea619]/20 group-hover:text-[#855300] transition-colors">
                      {prod.category}
                    </span>
                  </div>

                  {/* 3. Product Title */}
                  <h3 className=" text-base sm:text-lg font-bold text-[#000a1e] mb-2 tracking-tight line-clamp-2 group-hover:text-[#002147] transition-colors leading-snug">
                    {prod.name}
                  </h3>

                  {/* 4. Short Description */}
                  <p className=" text-xs leading-relaxed text-[#44474e] line-clamp-3">
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
            <h3 className=" text-xl font-bold text-[#002147] mb-2">
              No matching products found
            </h3>
            <p className=" text-sm text-[#44474e] mb-6 leading-relaxed">
              We couldn't find any products matching "<strong>{searchQuery}</strong>". Try searching for keywords like <em>Rockwool</em>, <em>Nitrile</em>, <em>Jali</em>, or <em>Nut Bolt</em>.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
              }}
              className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#000a1e] text-white  text-xs font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#fea619]" />
              <span>Clear Search & Show All Products</span>
            </button>
          </motion.div>
        )}

        {/* Custom Order / RFQ Banner */}
        <div className="mt-16 bg-[#00132b] text-white p-8 rounded-2xl border border-[#c4c6cf] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className=" text-xl font-bold text-white">
              Need Custom Cut Sizes, Specific Standard Grades or Bulk Tenders?
            </h3>
            <p className=" text-xs sm:text-sm text-slate-300">
              We provide custom dimension shearing, gasket punching, pre-slit pipe insulation sleeves, and Mill Test Certificates (MTC 3.1).
            </p>
          </div>
          <button
            onClick={() => onRequestQuote()}
            className="shrink-0 bg-[#fea619] hover:bg-[#e69310] text-[#002147] px-7 py-3.5 rounded-xl  text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
