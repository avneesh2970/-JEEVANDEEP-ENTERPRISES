import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, FileText, Wrench, Layers } from 'lucide-react';
import { FaFire, FaBolt, FaFan, FaVolumeHigh, FaNetworkWired, FaScrewdriverWrench } from 'react-icons/fa6';

interface ApplicationsPageProps {
  onNavigateHome: () => void;
  onRequestQuote: (applicationName?: string) => void;
  onExploreProducts: () => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({
  onNavigateHome,
  onRequestQuote,
  onExploreProducts,
}) => {
  const APPLICATIONS = [
    {
      id: 'thermal-insulation',
      title: 'High-Temperature Thermal Barrier Insulation',
      icon: <FaFire />,
      tag: 'Heat Protection & Thermal Resistance',
      description: 'Industrial thermal barrier systems engineered for extreme operating temperatures (-200°C to +1425°C) in power boilers, furnace kiln linings, steam main lagging, and thermal processing units.',
      keyAdvantages: [
        'Minimal thermal conductivity (≤ 0.033 W/m·K)',
        'Resistant to severe thermal shock and chemical vapors',
        'Low thermal mass for rapid heating cycles and fuel saving',
        'Non-combustible Class 0 / Class 1 fire propagation rating',
      ],
      recommendedProducts: [
        'High-Density Rockwool Thermal Slabs (JEP-RWOOL-18)',
        'Refractory Ceramic Fiber Blankets (JEP-CFB-1400)',
        'Woven E-Glass Fabric Glass Cloth (JEP-GCLOTH-12)',
      ],
      standards: ['IS 8183', 'ASTM C612', 'BS 476 Part 4'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'electrical-safety',
      title: 'Substation Dielectric Shock Protection & Electrical Safety',
      icon: <FaBolt />,
      tag: 'High Voltage 33kV Proofed',
      description: 'Dielectric synthetic elastomer safety matting and flameproof cable glands designed to safeguard operators working near high-voltage HT switchgear, control panels, and transformer rooms.',
      keyAdvantages: [
        'Dielectric breakdown strength ≥ 45 kV/mm',
        'Chequered anti-skid surface for firm foot grip',
        'Flame retardant, oil-resistant, and high tear strength',
        'Fully compliant with mandatory Indian & International standards',
      ],
      recommendedProducts: [
        'High Voltage Electrical Safety Mat 33kV (JEP-MAT-33KV)',
        'Double Compression Flameproof Cable Glands (Ex d) (JEP-GL-DC)',
        'Perforated Jali Cable Covers (JEP-JALI-01)',
      ],
      standards: ['IS 15652:2006', 'IEC 61111:2009', 'CE Certified'],
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'hvac-condensation',
      title: 'HVAC Chilled Water Piping & Condensation Control',
      icon: <FaFan />,
      tag: 'Class 0 Vapor Barrier',
      description: 'Closed-cell elastomeric Nitrile foam rolls, pre-slit pipe sleeves, and XLPE foam sheets formulated to eliminate moisture condensation and thermal gain in chilled water lines and HVAC AHUs.',
      keyAdvantages: [
        'High water vapor permeability resistance (μ ≥ 10,000)',
        'Class 0 fire safety rating with zero flame propagation',
        'Built-in anti-microbial protection for cleanrooms & hospitals',
        'Flexible roll and pre-slit sleeve formats for quick installation',
      ],
      recommendedProducts: [
        'Class 0 Closed-Cell Nitrile Rubber Sheet & Tube (JEP-NTR-03)',
        'Cross-Linked Polyethylene XLPE Sheet (JEP-XLPE-04)',
        'Double Aluminum Foil Air Bubble Sheet (JEP-BUBBLE-05)',
      ],
      standards: ['BS 476 Part 6 & 7', 'ASTM C534', 'ASTM C1427'],
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'acoustic-attenuation',
      title: 'Industrial Acoustic Soundproofing & Noise Attenuation',
      icon: <FaVolumeHigh />,
      tag: 'High STC Noise Barrier',
      description: 'Viscoelastic sound barrier sheets, acoustic glasswool rolls, and tissue paper backing engineered to absorb mechanical airborne noise and damp structure-borne vibration.',
      keyAdvantages: [
        'High Sound Transmission Class (STC) providing 28-36 dB reduction',
        'Optimal noise absorption for DG set canopies & auditorium walls',
        'Incombustible mineral glass wool fibers with low smoke density',
        'Lightweight and easy to apply behind acoustic partitions',
      ],
      recommendedProducts: [
        'Accosound Acoustic Damping Barrier Sheet (JEP-ACCO-16)',
        'Resin-Bonded Glass Wool Roll with FSK Facing (JEP-GWOOL-17)',
        'Glass Fiber Non-Woven Tissue Paper Facing (JEP-TISS-02)',
      ],
      standards: ['ISO 140-3', 'ASTM E90', 'BS EN 20140'],
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cable-management',
      title: 'Heavy Cable Management & Structural Power Routing',
      icon: <FaNetworkWired />,
      tag: 'Hot-Dip Galvanized Corrosion Proof',
      description: 'Heavy duty perforated and ladder type cable support systems engineered to organize and support high-voltage power cabling across refineries, power plants, and industrial buildings.',
      keyAdvantages: [
        'Hot-dip galvanized zinc coating > 80 microns for 25+ yrs life',
        'High load carrying capacity conforming to NEMA VE 1',
        'Smooth rounded rungs to prevent power cable sheath damage',
        'Complete range of fittings: bends, reducers, tees, and risers',
      ],
      recommendedProducts: [
        'Perforated & Ladder GI Cable Trays (JEP-CTRAY-07)',
        'Perforated Sheet Metal Jali (JEP-JALI-01)',
        'Slotted Strut C Channels (JEP-CCHAN-06)',
      ],
      standards: ['NEMA VE 1', 'IEC 61537', 'IS 2629'],
      image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'fastening-gasketing',
      title: 'High Tensile Fastening, Flange Sealing & Formwork',
      icon: <FaScrewdriverWrench />,
      tag: 'Heavy Engineering & Civil Works',
      description: 'Precision forged Grade 8.8/10.9/B7 fasteners, ASME spiral wound gaskets, Slotted C channels, and construction tie rods designed for high-stress pipeline flanges and civil shuttering.',
      keyAdvantages: [
        'High tensile yield strength (Min 105 ksi for B7 stud bolts)',
        'Tight sealing integrity under high pressure & thermal cycling',
        'Dywidag coarse thread tie rods with 18 Tons breaking load',
        'Slotted Unistrut C channels for modular trapeze pipe hanging',
      ],
      recommendedProducts: [
        'Nut Bolt 🔩 & Grade B7 Stud Bolts (JEP-NUTBOLT-08)',
        'Slotted Galvanized C Channel (JEP-CCHAN-06)',
        'Construction Formwork Threaded Tie Rod (JEP-TIEROD-14)',
        'Tape & CNAF Flange Joint Gaskets (JEP-TAPEGASK-09)',
      ],
      standards: ['DIN 933', 'ASME B18.2.1', 'ASTM A193 B7', 'ASME B16.20'],
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-['Inter'] min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-[#00132b] text-white py-16 md:py-24 border-b border-[#c4c6cf] relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000a1a] via-[#00132b] to-[#002147] opacity-95" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-['Inter']">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#fea619] font-semibold">Applications</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fea619]/15 border border-[#fea619]/30 text-[#fea619] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#fea619]" />
              Proven Industrial Performance
            </span>

            <h1 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Industrial Applications & Engineering Solutions
            </h1>

            <p className="font-['Inter'] text-base md:text-lg text-slate-300 leading-relaxed">
              Discover how our certified materials perform across critical thermal, dielectric, acoustic, electrical, and structural applications.
            </p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="font-['Manrope'] text-2xl font-extrabold text-[#fea619]">6 Application Areas</div>
              <div className="text-xs text-slate-300 font-medium mt-1">High-Consequence Performance</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="font-['Manrope'] text-2xl font-extrabold text-[#fea619]">33kV Tested</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Dielectric Voltage Proof</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="font-['Manrope'] text-2xl font-extrabold text-[#fea619]">Up to 1425°C</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Thermal Insulation Rating</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="font-['Manrope'] text-2xl font-extrabold text-[#fea619]">Class 0 Fire</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Certified Safety Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Cards Grid */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {APPLICATIONS.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#c4c6cf]/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Application Banner Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-[#e0e3e5]">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#002147]/90 text-white text-[11px] font-mono font-bold px-3 py-1 rounded shadow-sm backdrop-blur-xs">
                    {app.tag}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#fea619]/15 text-[#855300] flex items-center justify-center font-bold text-xl shrink-0">
                      {app.icon}
                    </div>
                    <h3 className="font-['Manrope'] text-xl sm:text-2xl font-bold text-[#002147]">
                      {app.title}
                    </h3>
                  </div>

                  <p className="font-['Inter'] text-xs sm:text-sm text-[#44474e] leading-relaxed">
                    {app.description}
                  </p>

                  {/* Key Technical Advantages */}
                  <div>
                    <h4 className="font-['Manrope'] text-xs font-bold uppercase tracking-wider text-[#002147] mb-2.5">
                      Key Technical Advantages:
                    </h4>
                    <ul className="space-y-2 font-['Inter'] text-xs text-[#44474e]">
                      {app.keyAdvantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#fea619] shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Products */}
                  <div className="bg-[#f7f9fb] p-4 rounded-xl border border-[#e0e3e5] space-y-2">
                    <span className="font-['Manrope'] text-xs font-bold uppercase tracking-wider text-[#002147] block">
                      Recommended Stock Supplies:
                    </span>
                    <div className="space-y-1 font-['Inter'] text-xs text-[#002147] font-semibold">
                      {app.recommendedProducts.map((p, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fea619]" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standards */}
                  <div className="flex flex-wrap gap-2 pt-1 border-t border-[#e0e3e5]">
                    <span className="text-xs font-semibold text-[#74777f]">Compliance Standards:</span>
                    {app.standards.map((std, i) => (
                      <span key={i} className="bg-[#eceef0] text-[#002147] text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#c4c6cf]">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onRequestQuote(app.title)}
                  className="w-full bg-[#002147] hover:bg-[#000a1e] text-white font-['Inter'] text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                >
                  <span>Request Quote for {app.title.split(' ')[0]} Application</span>
                  <ArrowRight className="w-4 h-4 text-[#fea619]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Consultation Footer Banner */}
      <section className="py-16 bg-[#00132b] text-white border-t border-[#c4c6cf] text-left">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-white">
              Need Custom Technical Fabrications or Dimensional Cutting?
            </h3>
            <p className="font-['Inter'] text-sm text-slate-300 leading-relaxed">
              Our engineering team provides pre-slit insulation tubes, custom CNC gasket punching, and specialized material testing reports for your specific project applications.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => onRequestQuote('Custom Fabrication Consultation')}
              className="bg-[#fea619] hover:bg-[#e69310] text-[#002147] font-['Inter'] text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Consult Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreProducts}
              className="bg-white/10 hover:bg-white/20 text-white font-['Inter'] text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-xl border border-white/20 cursor-pointer"
            >
              Browse Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
