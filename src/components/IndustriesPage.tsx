import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, FileText, Phone } from 'lucide-react';
import { FaBolt, FaGasPump, FaFan, FaIndustry, FaBuilding, FaShieldHalved } from 'react-icons/fa6';

interface IndustriesPageProps {
  onNavigateHome: () => void;
  onRequestQuote: (sectorName?: string) => void;
  onExploreProducts: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigateHome,
  onRequestQuote,
  onExploreProducts,
}) => {
  const SECTORS = [
    {
      id: 'power-energy',
      title: 'Power Generation & Electrical Utilities',
      icon: <FaBolt />,
      badge: 'High Voltage & Thermal',
      description: 'Thermal power stations, 33kV substations, nuclear power facilities, and solar farms requiring certified Rockwool slabs, 33kV dielectric safety matting, HDG ladder cable trays, and Grade B7 stud bolts.',
      keySupplies: [
        'Rockwool Thermal Slabs (Up to 750°C)',
        'IS 15652 33kV Dielectric Safety Mats',
        'Hot-Dip Galvanized Ladder Cable Trays',
        'ASTM A193 Grade B7 High-Temp Stud Bolts',
        'Refractory Ceramic Fiber Blankets',
      ],
      standards: ['IS 15652', 'IEC 61111', 'IS 8183', 'ASTM C612'],
      featuredProject: 'Supplied 120+ MT of thermal insulation & cable trays for a 660 MW Supercritical Thermal Power Station expansion.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'oil-gas-petrochem',
      title: 'Oil, Gas & Petrochemical Refineries',
      icon: <FaGasPump />,
      badge: 'Explosion-Proof & Severe Service',
      description: 'Refinery distillation towers, chemical processing lines, offshore platforms, and hazardous gas zones requiring Ex-d flameproof double compression glands, Nitrile NBR sheets, EPDM steam jointing, and SR 505 adhesives.',
      keySupplies: [
        'Ex-d Flameproof Double Compression Cable Glands',
        'Oil-Resistant Nitrile (NBR) Rubber Sheets & Tubes',
        'ASME B16.20 Spiral Wound Metallic Gaskets',
        'High-Temp Food & Chemical Silicone Rubber Sheets',
        'Synthetic Rubber Adhesive SR 505',
      ],
      standards: ['IS/IEC 60079', 'ATEX Certified', 'ASME B16.20', 'ASTM D2000'],
      featuredProject: 'Annual rate contract for pipeline jointing and structural hardware across 4 petrochemical processing units.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'hvac-mep',
      title: 'Commercial MEP & HVAC Infrastructure',
      icon: <FaFan />,
      badge: 'Class 0 Fire Rated',
      description: 'Airports, data centers, commercial towers, PEB sheds, and cleanroom facilities requiring Class 0 XLPE sheets, Air Bubble double aluminum foil, Slotted C channels, Tissue paper facing, and Star Bond duct adhesive.',
      keySupplies: [
        'Class 0 Closed-Cell XLPE Foam Insulation Sheets',
        'Double Aluminum Foil Air Bubble Radiant Barrier',
        'Heavy Duty Slotted C Channels (Unistrut type)',
        'Non-Woven Glass Fiber Tissue Paper Facing',
        'Star Bond Industrial Duct & Insulation Adhesive',
      ],
      standards: ['BS 476 Part 6 & 7', 'ASTM C1427', 'SMACNA HVAC', 'IS 277'],
      featuredProject: 'Complete chiller line insulation & acoustic treatment for an international airport terminal expansion.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'automotive-heavy',
      title: 'Automotive & Heavy Manufacturing',
      icon: <FaIndustry />,
      badge: 'High Tensile Structural',
      description: 'Vehicle assembly plants, heavy equipment fabricators, civil formwork shuttering, and structural steel works requiring Grade 8.8/10.9 nut bolt sets, construction tie rods with wing nuts, and Perforated Jali.',
      keySupplies: [
        'High Tensile Grade 8.8 / 10.9 Nut Bolt & Washer Sets',
        'Cold Rolled Threaded Tie Rods with Cast Wing Nuts',
        'Perforated Jali (GI/SS Sheet Metal Mesh)',
        'Hot-Dip Galvanized Iron (GI) Sheets & Coils',
      ],
      standards: ['DIN 933 / 931', 'IS 1363 / 1364', 'DIN 18216', 'IS 277'],
      featuredProject: 'Supplying precision fasteners, tie rods, and acoustic insulation to major infrastructure contractors.',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'acoustic-building',
      title: 'Acoustic & Building Architecture',
      icon: <FaBuilding />,
      badge: 'STC Soundproof Rated',
      description: 'Auditorium halls, multiplex cinemas, DG set soundproof canopies, and engine testing cells requiring Accosound acoustic damping sheets, FSK glasswool rolls, and soundproofing tissue paper.',
      keySupplies: [
        'Accosound Viscoelastic Damping & Barrier Sheets',
        'Resin-Bonded Glass Wool Rolls with FSK Facing',
        'Black Glass Fiber Tissue Paper for Wall Linings',
        'Self-Adhesive Nitrile Foam Sealing Tapes',
      ],
      standards: ['ISO 140-3', 'ASTM E90', 'BS EN 20140', 'IS 8183'],
      featuredProject: 'Complete soundproofing and acoustic transmission loss (STC) treatment for a 1,200-seat civic auditorium.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]  min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-[#00132b] text-white py-16 md:py-24 border-b border-[#c4c6cf] relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000a1a] via-[#00132b] to-[#002147] opacity-95" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 ">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#fea619] font-semibold">Industries</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fea619]/15 border border-[#fea619]/30 text-[#fea619] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#fea619]" />
              Targeted Industry Solutions
            </span>

            <h1 className=" text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Industries & Key Sectors Served
            </h1>

            <p className=" text-base md:text-lg text-slate-300 leading-relaxed">
              Certified B2B supply architecture powering Power Generation, Petrochemical Refineries, Commercial MEP, Manufacturing, and Infrastructure Projects across India.
            </p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">5 Key Sectors</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Dedicated Supply Architecture</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">120+ Projects</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Major Plant Footprint</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">100% Certified</div>
              <div className="text-xs text-slate-300 font-medium mt-1">MTC 3.1 & ISO 9001</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className=" text-2xl font-extrabold text-[#fea619]">24-48h Dispatch</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Pan-India Express Hub</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sectors Showcase */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        <div className="space-y-12">
          {SECTORS.map((sector, idx) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#c4c6cf]/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 md:p-10 items-center">
                {/* Sector Information */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#002147] text-[#fea619] flex items-center justify-center font-bold text-2xl shadow-sm">
                      {sector.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold bg-[#fea619]/20 text-[#855300] px-2.5 py-0.5 rounded">
                        {sector.badge}
                      </span>
                      <h2 className=" text-2xl sm:text-3xl font-bold text-[#002147] mt-1">
                        {sector.title}
                      </h2>
                    </div>
                  </div>

                  <p className=" text-sm sm:text-base text-[#44474e] leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Key Supplies List */}
                  <div>
                    <h4 className=" text-xs font-bold uppercase tracking-wider text-[#002147] mb-3">
                      Primary Certified Supplies:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sector.keySupplies.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-[#f2f4f6] px-3 py-2 rounded-lg text-xs font-semibold text-[#191c1e] border border-[#e0e3e5]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#fea619] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standards Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#e0e3e5]">
                    <span className="text-xs font-semibold text-[#74777f]">Tested Standards:</span>
                    {sector.standards.map((std, i) => (
                      <span key={i} className="bg-[#eceef0] text-[#002147] text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border border-[#c4c6cf]">
                        {std}
                      </span>
                    ))}
                  </div>

                  {/* Featured Project Footprint */}
                  <div className="bg-[#f7f9fb] p-4 rounded-xl border-l-4 border-[#fea619] text-xs  text-[#44474e]">
                    <span className="font-bold text-[#002147] block mb-1">Featured Site Footprint:</span>
                    {sector.featuredProject}
                  </div>

                  {/* Action CTA Button */}
                  <button
                    onClick={() => onRequestQuote(sector.title)}
                    className="inline-flex items-center gap-2 bg-[#002147] hover:bg-[#000a1e] text-white  text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-white/10"
                  >
                    <span>Request Quotation for {sector.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 text-[#fea619]" />
                  </button>
                </div>

                {/* Sector Image */}
                <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-md border border-[#c4c6cf]">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#002147]/90 text-white text-[11px] font-bold px-3 py-1 rounded backdrop-blur-xs">
                    {sector.title} • Stocked in Mumbai
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Annual Rate Contracts Banner */}
      <section className="py-16 bg-[#00132b] text-white border-t border-[#c4c6cf] text-left">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className=" text-2xl sm:text-3xl font-extrabold text-white">
              Turnkey Rate Contracts & Annual Supply Schedules
            </h3>
            <p className=" text-sm text-slate-300 leading-relaxed">
              We offer structured Annual Rate Contracts (ARC) with dedicated warehouse safety stock allocations for power plants, refineries, and major MEP EPC contractors.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => onRequestQuote('Annual Rate Contract')}
              className="bg-[#fea619] hover:bg-[#e69310] text-[#002147]  text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Setup Rate Contract</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreProducts}
              className="bg-white/10 hover:bg-white/20 text-white  text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-xl border border-white/20 cursor-pointer"
            >
              Browse Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
