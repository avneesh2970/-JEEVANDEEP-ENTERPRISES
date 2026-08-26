import { ProductCategory, Testimonial, FaqItem, CoreValue, IndustrySector } from '../types';

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'experience',
    title: 'Industry Experience',
    icon: 'factory',
    description: 'Serving customers since 2011 with over a decade of proven expertise in the insulation industry.',
  },
  {
    id: 'all_in_one',
    title: 'All-in-One Solutions',
    icon: 'layers',
    description: 'Complete insulation range under one roof — saving clients time, cost, and procurement effort.',
  },
  {
    id: 'quality',
    title: 'Certified Quality',
    icon: 'high_quality',
    description: 'Certified and high-quality insulation products meeting rigorous ASTM, IS, and BS standards.',
  },
  {
    id: 'pricing',
    title: 'Competitive Pricing',
    icon: 'pricing',
    description: 'Value-driven, market-competitive rates backed by transparent and direct pricing.',
  },
  {
    id: 'team',
    title: 'Dedicated Team',
    icon: 'team',
    description: 'Experienced, customer-focused technical professionals guiding material selection.',
  },
  {
    id: 'delivery',
    title: 'On-Time Delivery',
    icon: 'delivery',
    description: 'Reliable, punctual project delivery across all regional branches and project sites in India.',
  },
  {
    id: 'support',
    title: 'After-Sales Support',
    icon: 'support',
    description: 'Excellent post-sale service and technical support to ensure complete satisfaction.',
  },
  {
    id: 'network',
    title: 'Expanding Network',
    icon: 'network',
    description: 'Continuously growing nationwide branch presence across Mohali, Chandigarh, Dehradun, Ghaziabad, and Hyderabad.',
  },
  {
    id: 'customer_first',
    title: 'Customer First',
    icon: 'customer',
    description: 'Customer satisfaction is our top priority. We build trust and lasting partnerships.',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-01',
    name: 'Perforated Jali (Sheet Metal Mesh)',
    category: '',
    modelCode: 'JEP-JALI-01',
    description: 'Heavy duty galvanized iron (GI) and stainless steel (SS) perforated sheet metal Jali engineered for cable tray covers, acoustic lining backing, equipment protection, and industrial ventilation.',
    grade: 'GI 120 GSM / SS304 / SS316 Grade',
    standards: ['IS 277', 'ASTM A653', 'IS 513'],
    specs: {
      'Material': 'Hot-Dip Galvanized / Stainless Steel',
      'Hole Diameter': '2mm to 10mm round/square perforations',
      'Sheet Thickness': '0.5mm to 3.0mm',
      'Sheet Size': '8ft x 4ft (2440mm x 1220mm)'
    },
    inStock: true,
    applications: ['Cable Tray Covers', 'Acoustic Duct Backing', 'Machinery Guards', 'Architectural Ventilation'],
    imageUrl: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-02',
    name: 'Tissue Paper (Glass Fiber Facing)',
    category: '',
    modelCode: 'JEP-TISS-02',
    description: 'Non-woven fiberglass tissue paper with uniform fiber distribution designed for duct insulation facing, glasswool roll backing, acoustic panel wrapping, and waterproofing membranes.',
    grade: 'E-Glass Non-Woven Grade A',
    standards: ['ASTM D579', 'IS 11262'],
    specs: {
      'Grammage': '30 g/m² to 90 g/m²',
      'Tensile Strength': '≥ 120 N/50mm',
      'Color': 'Black / White / Yellow Facing',
      'Roll Width': '1.0m / 1.2m rolls x 250m'
    },
    inStock: true,
    applications: ['Glasswool & Rockwool Facing', 'Acoustic Panel Wrapping', 'HVAC Duct Backing', 'Bituminous Roofing'],
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-03',
    name: 'Nitrile Rubber Sheet and Tube (Class 0 NBR)',
    category: '',
    modelCode: 'JEP-NTR-03',
    description: 'Closed-cell elastomeric Nitrile Butadiene Rubber (NBR) insulation sheets and pre-slit pipe insulation tubes for HVAC chilled water lines, refrigeration piping, and petroleum oil resistance.',
    grade: 'Class 0 Anti-Microbial NBR',
    standards: ['BS 476 Part 6 & 7', 'ASTM C534', 'ASTM D2000'],
    specs: {
      'Density': '45 kg/m³ to 70 kg/m³',
      'Operating Temp': '-50°C to +110°C',
      'Water Vapor Permeance': 'μ ≥ 10,000',
      'Tube Diameter': '1/4" to 4-1/4" NB (Sheet 6mm-32mm)'
    },
    inStock: true,
    applications: ['Chilled Water Piping', 'HVAC Air Handling Units', 'Oil Flange Gasket Fabrication', 'Refrigeration Lines'],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-04',
    name: 'XLPE Sheet (Cross-Linked Polyethylene)',
    category: '',
    modelCode: 'JEP-XLPE-04',
    description: 'Closed-cell cross-linked polyethylene (XLPE) foam insulation sheet offering superior thermal resistance, zero moisture absorption, and anti-fungal properties for roofs, chilled water pipes, and HVAC ducts.',
    grade: 'Class O Fire Retardant XLPE',
    standards: ['BS 476 Part 6 & 7', 'ASTM C1427'],
    specs: {
      'Density': '33 kg/m³ ± 3 kg/m³',
      'Operating Temp': '-40°C to +105°C',
      'Thermal Conductivity': '0.032 W/mK @ 23°C',
      'Thickness': '6mm, 9mm, 13mm, 19mm, 25mm, 50mm'
    },
    inStock: true,
    applications: ['Underdeck Roof Insulation', 'HVAC Air Handling Units', 'Chilled Water Ducting', 'Cleanroom Acoustic Panels'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-05',
    name: 'Air Bubbles Insulation Sheet (Aluminum Foil)',
    category: '',
    modelCode: 'JEP-BUBBLE-05',
    description: 'High reflectance thermal radiant barrier double-sided aluminum foil laminated polyethylene air bubble sheet for metal roof sheds, PEB buildings, and HVAC duct wrapping.',
    grade: 'Double Foil Pure Aluminum 99.9%',
    standards: ['ASTM E84', 'BS 476 Part 7'],
    specs: {
      'Reflectivity': '96% to 97% Radiant Heat',
      'Bubble Diameter': '10mm / 20mm',
      'Foil Layers': 'Double Pure Aluminum Foil',
      'Roll Dimension': '1.2m Width x 40m Length'
    },
    inStock: true,
    applications: ['Industrial Shed Roofs', 'Pre-Engineered Buildings (PEB)', 'HVAC Duct Insulation', 'Cold Storage Walls'],
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-06',
    name: 'C Channel (Galvanized Slotted Strut Channel)',
    category: '',
    modelCode: 'JEP-CCHAN-06',
    description: 'Continuous slotted cold-formed hot-dip galvanized structural steel C channel (Unistrut type profile) engineered for modular mechanical pipe supports, trapeze hangers, and framing.',
    grade: 'Pre-Galvanized / Hot-Dip Galvanized / SS316',
    standards: ['BS 6946', 'MFMA-4', 'IS 1079'],
    specs: {
      'Profile Dimension': '41mm x 41mm / 41mm x 21mm',
      'Thickness': '1.6mm / 2.0mm / 2.5mm',
      'Slot Size': '14mm x 28mm on 50mm centers',
      'Standard Length': '3.0m / 6.0m bars'
    },
    inStock: true,
    applications: ['HVAC Duct Hanging', 'Pipe Rack Supports', 'Cable Tray Hangers', 'Solar Inverter Framing'],
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-07',
    name: 'Cable Tray (Perforated & Ladder Type GI/SS)',
    category: '',
    modelCode: 'JEP-CTRAY-07',
    description: 'Precision engineered hot-dip galvanized (HDG), pre-galvanized, and SS316 perforated & ladder type cable trays for power distribution and heavy cabling in industrial plants.',
    grade: 'HDG 80+ Microns (IS 2629 / IS 4759)',
    standards: ['NEMA VE 1', 'IEC 61537', 'IS 2629'],
    specs: {
      'Tray Width': '50mm to 1000mm',
      'Side Rail Height': '25mm, 50mm, 75mm, 100mm, 150mm',
      'Sheet Thickness': '1.6mm / 2.0mm / 2.5mm / 3.0mm',
      'Finish Options': 'Hot-Dip Galvanized / Pre-Galvanized / Powder Coated'
    },
    inStock: true,
    applications: ['Power Generation Plants', 'Refineries & Petrochem', 'Substation Cable Routing', 'Commercial Towers'],
    imageUrl: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-08',
    name: 'Nut Bolt 🔩 (High Tensile & SS Hex Fasteners)',
    category: '',
    modelCode: 'JEP-NUTBOLT-08',
    description: 'Precision forged high tensile Grade 8.8, 10.9, 12.9, ASTM A193 B7 stud bolts, and SS304/SS316 stainless steel hex head bolts, nuts, plain washers, and spring washers.',
    grade: 'Grade 8.8 / 10.9 / ASTM A193 B7 / SS316',
    standards: ['DIN 933 / 931', 'IS 1363 / 1364', 'ASME B18.2.1'],
    specs: {
      'Size Range': 'M6 to M64 (Length 12mm to 500mm)',
      'Finish': 'Black Oxide / Zinc Galvanized / Hot-Dip Galvanized / PTFE',
      'Thread Type': 'Metric Coarse / Fine / UNC / UNF',
      'Proof Load': 'Up to 1040 MPa (Grade 10.9)'
    },
    inStock: true,
    applications: ['Structural Steel Assembly', 'Flange Bolting', 'Heavy Machinery Construction', 'Pipeline Joints'],
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-09',
    name: 'Tape and Gasket (Self-Adhesive Foam & Flange Seals)',
    category: '',
    modelCode: 'JEP-TAPEGASK-09',
    description: 'Self-adhesive closed-cell Nitrile foam tapes, aluminum foil duct sealing tapes, non-asbestos CNAF flange joint gaskets, and EPDM rubber sealing rings.',
    grade: 'Class 0 Foam Tape / CNAF Non-Asbestos',
    standards: ['ASTM C534', 'BS 2815', 'ASME B16.21'],
    specs: {
      'Tape Width': '25mm, 50mm, 75mm (Thickness 3mm / 6mm)',
      'Adhesive Facing': 'Reinforced Acrylic Pressure Sensitive',
      'Gasket Pressure': 'Class 150 / Class 300 Flange Standard',
      'Temp Resistance': '-30°C to +120°C'
    },
    inStock: true,
    applications: ['HVAC Duct Flange Sealing', 'Chilled Water Pipe Jointing', 'Pipe Vibration Isolation', 'Panel Enclosure Gasket'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-10',
    name: 'Silicon Rubber Sheet and Tubing',
    category: '',
    modelCode: 'JEP-SIL-10',
    description: 'High-purity food-grade and high-temperature silicone rubber sheets and transparent silicone tubing formulated for extreme temperatures (-60°C to +250°C), pharma, and sealing gaskets.',
    grade: 'FDA 21 CFR 177.2600 / Platinum Cured',
    standards: ['FDA Approved', 'USP Class VI', 'ISO 10993'],
    specs: {
      'Hardness': '60° ± 5° Shore A',
      'Operating Temp': '-60°C to +250°C (Intermittent 300°C)',
      'Tensile Strength': '≥ 8.5 MPa',
      'Sheet Thickness': '1.0mm to 12.0mm'
    },
    inStock: true,
    applications: ['Pharma Processing Lines', 'Oven Flange Gaskets', 'Food Grade Seals', 'High Temp Electrical Sleeve'],
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-11',
    name: 'S R 505 (Synthetic Rubber Adhesive)',
    category: '',
    modelCode: 'JEP-SR505-11',
    description: 'Heavy duty synthetic rubber-based contact adhesive SR 505 formulated specifically for instant high-tack bonding of Nitrile rubber foam, XLPE sheets, glasswool insulation, and metal ductwork.',
    grade: 'Industrial High Tack Contact Adhesive',
    standards: ['IS 4835', 'ASTM D1084'],
    specs: {
      'Viscosity': '1800 to 2400 cps @ 30°C',
      'Open Time': '2 to 10 minutes tack time',
      'Coverage': '6 to 8 m² / Liter per coat',
      'Packaging': '1 Liter, 5 Liters, 25 Liters Tins'
    },
    inStock: true,
    applications: ['Nitrile Foam Duct Bonding', 'XLPE Sheet Installation', 'Underdeck Acoustic Boarding', 'Automotive Insulation'],
    imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-12',
    name: 'Glass Cloth (Woven E-Glass Fabric)',
    category: '',
    modelCode: 'JEP-GCLOTH-12',
    description: 'Heavy duty plain weave E-glass woven fiberglass cloth fabric for high-temperature thermal lagging, removable insulation jackets, expansion joints, and pipe wrapping.',
    grade: 'E-Glass Heat Treated Grade A',
    standards: ['ASTM D578', 'IS 11262'],
    specs: {
      'Temperature Rating': 'Up to 550°C continuous',
      'Weight': '200 gsm / 400 gsm / 600 gsm',
      'Weave Pattern': 'Plain / Satin / Twill',
      'Roll Size': '1m Width x 50m / 100m Length'
    },
    inStock: true,
    applications: ['Steam Pipe Lagging', 'Removable Insulation Blankets', 'Expansion Joint Bellows', 'Fireproof Welding Curtains'],
    imageUrl: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-13',
    name: 'Star Bond (Industrial Duct & Insulation Adhesive)',
    category: '',
    modelCode: 'JEP-STARBOND-13',
    description: 'Premium water-based / synthetic rubber non-flammable duct liner sealant and insulation adhesive Star Bond for bonding acoustic glasswool liners, aluminum foil, and duct joints.',
    grade: 'Fire Retardant Duct Sealant Grade',
    standards: ['SMACNA HVAC Duct Construction', 'UL 181A-M / B-M'],
    specs: {
      'Drying Time': 'Touch dry 20 mins (Full cure 24 hrs)',
      'Flame Spread': 'Index < 25 (UL 723 / ASTM E84)',
      'Service Temp': '-20°C to +90°C',
      'Packaging': '5 kg & 25 kg Containers'
    },
    inStock: true,
    applications: ['HVAC Acoustic Liner Sealing', 'Ductwork Canvas Jointing', 'Air Handling Unit Insulation', 'Fire Dampers'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-14',
    name: 'Tie Rod (Construction & Formwork Threaded Rod)',
    category: '',
    modelCode: 'JEP-TIEROD-14',
    description: 'High tensile cold rolled coarse-threaded tie rod with cast iron anchor wing nuts and water stop plates for heavy concrete shuttering, column formwork, and civil retaining walls.',
    grade: 'High Carbon Tensile Steel 15/17mm',
    standards: ['DIN 18216', 'IS 1786'],
    specs: {
      'Diameter': '15/17mm Dywidag Thread Profile',
      'Breaking Load': '≥ 180 kN (18 Tons)',
      'Finish': 'Self Color / Zinc Plated / Black',
      'Standard Length': '1.0m, 2.0m, 3.0m, 6.0m bars'
    },
    inStock: true,
    applications: ['Concrete Shuttering Formwork', 'Bridge Pier Construction', 'Retaining Walls', 'Heavy Foundation Anchor'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-15',
    name: 'G I Sheet (Galvanized Plain & Corrugated Sheet)',
    category: '',
    modelCode: 'JEP-GISHEET-15',
    description: 'Prime grade hot-dip galvanized iron plain (GP) & corrugated (GC) steel sheet for industrial ductwork fabrication, thermal insulation metal cladding (jacketing), and roof cladding.',
    grade: 'Zero Spangle / Regular Spangle 120-275 GSM',
    standards: ['IS 277:2018', 'ASTM A653'],
    specs: {
      'Thickness': '0.35mm to 3.0mm',
      'Coating Mass': 'Zinc 120 gsm to 275 gsm',
      'Width': '900mm / 1220mm (Plain & Corrugated Profiles)',
      'Form Factor': 'Coils / Cut-to-Length Sheets'
    },
    inStock: true,
    applications: ['HVAC Rectangular Ducting', 'Insulation Aluminum/GI Cladding', 'Industrial Shed Roofing', 'Control Panel Cabinets'],
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-16',
    name: 'Acoustic Insulation 1: Accosound Sheet',
    category: '',
    modelCode: 'JEP-ACCO-16',
    description: 'Premium elastomeric viscoelastic acoustic sound barrier and vibration damping sheet Accosound engineered for high Sound Transmission Loss (STC) in auditorium walls, generator enclosures, and HVAC ducts.',
    grade: 'High Mass Density Acoustic Grade',
    standards: ['ISO 140-3', 'ASTM E90', 'BS EN 20140'],
    specs: {
      'Density': '1200 kg/m³ to 2000 kg/m³',
      'STC Rating': '28 dB to 36 dB Noise Reduction',
      'Thickness': '3mm / 5mm / 10mm',
      'Roll Dimension': '1.2m Width x 10m Length'
    },
    inStock: true,
    applications: ['DG Set Soundproofing', 'Auditorium Acoustic Walls', 'HVAC Duct Sound Damping', 'Engine Testing Cells'],
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-17',
    name: 'Acoustic Insulation 2: Glass Wool Roll',
    category: '',
    modelCode: 'JEP-GWOOL-17',
    description: 'Resin-bonded fiber glasswool insulation rolls laminated with reinforced aluminum foil facing (FSK) for acoustic drywall partition soundproofing, thermal duct lining, and industrial roof insulation.',
    grade: 'Non-Combustible Grade A (BS 476)',
    standards: ['IS 8183', 'ASTM C553', 'BS 476 Part 4'],
    specs: {
      'Density': '16, 24, 32, 48 kg/m³',
      'Thermal Conductivity': '0.033 W/mK @ 20°C',
      'Service Temp': '-50°C to +250°C',
      'Roll Size': '1.2m x 15m (Thickness 25mm / 50mm)'
    },
    inStock: true,
    applications: ['Drywall Soundproofing', 'HVAC Duct Lining', 'Underdeck Shed Thermal Barrier', 'Multiplex Cinemas'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-18',
    name: 'Acoustic Insulation 3: Rock Wool Slabs',
    category: '',
    modelCode: 'JEP-RWOOL-18',
    description: 'High-density resin bonded mineral rockwool thermal and acoustic slabs engineered for severe thermal protection in furnaces, boilers, power plants, acoustic enclosures, and fire doors.',
    grade: 'Industrial Heavy Duty - Grade A',
    standards: ['IS 8183', 'ASTM C612', 'BS 476 Part 4'],
    specs: {
      'Density': '48 kg/m³ to 144 kg/m³',
      'Service Temp': 'Up to 750°C continuous',
      'Thermal Conductivity': '0.034 W/mK @ 50°C',
      'Slab Dimension': '1000mm x 500mm (25mm / 50mm / 100mm)'
    },
    inStock: true,
    applications: ['Thermal Power Plants', 'Industrial Boilers', 'Acoustic Generator Canopies', 'Fire Rated Partitions'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-19',
    name: 'High Voltage Electrical Safety Mat (IS 15652 / IEC 61111)',
    category: '',
    modelCode: 'JEP-MAT-33KV',
    description: 'Synthetic elastomer dielectric matting for high-voltage substation switchgear safety and operator shock protection up to 33kV proof voltage.',
    grade: 'Class A, B, C Dielectric Safety',
    standards: ['IS 15652:2006', 'IEC 61111:2009', 'CE Certified'],
    specs: {
      'Working Voltage': '3.3kV to 33kV AC',
      'Dielectric Strength': '≥ 45 kV/mm',
      'Surface Texture': 'Chequered Anti-Skid / Corrugated',
      'Roll Dimension': '1m x 10m / 1m x 2m (2.0mm - 3.5mm)'
    },
    inStock: true,
    applications: ['Control Panels & HT Switchgear', 'Substation Flooring', 'Transformer Rooms', 'Power Generation Plants'],
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-20',
    name: 'Double Compression Flameproof Cable Gland (Ex d)',
    category: '',
    modelCode: 'JEP-GL-DC',
    description: 'Heavy duty brass/nickel-plated double compression gland for armored cables in Zone 1 & Zone 2 hazardous gas atmospheres.',
    grade: 'Brass CW614N / SS 316',
    standards: ['IS/IEC 60079-0 & 1', 'ATEX Certified', 'PESO Approved'],
    specs: {
      'Ingress Protection': 'IP66 / IP67 / IP68',
      'Thread Types': 'Metric (M20-M90) / NPT / BSP',
      'Armor Clamping': 'Single wire armor (SWA) & strip armor'
    },
    inStock: true,
    applications: ['Hazardous Area Wiring', 'Oil & Gas Manifolds', 'Chemical Refineries'],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'all-products',
    name: 'All Products',
    icon: 'layers',
    description: 'Complete range of industrial products and supplies under one roof.',
    itemCount: PRODUCTS.length,
    highlightSpecs: ['Certified Quality Standards', 'MTC 3.1 Traceability', 'Pan-India Supply'],
    subcategories: [],
    products: PRODUCTS
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Hemant Kumar',
    role: 'Procurement Lead',
    company: 'Jagdeep / Jeevandeep B2B Client Network',
    quote: 'Jeevandeep Enterprises supplied our complete site requirement of Rockwool, XLPE sheets, Nitrile Rubber tubes, and C Channels on time. Their certified quality and MTC dossiers give us total confidence.',
    rating: 5,
    industry: 'HVAC & MEP',
    location: 'Mumbai, Maharashtra'
  },
  {
    id: 't2',
    name: 'Amit Sharma',
    role: 'Operations Head',
    company: 'National Automotive Components',
    quote: 'Reliability is key in our manufacturing line. Jeevandeep has been our primary supplier for industrial rubber sheets, 33kV safety matting, and Grade B7 stud bolts for 5 years, never missing a critical delivery deadline.',
    rating: 5,
    industry: 'Manufacturing',
    location: 'Pune, Maharashtra'
  },
  {
    id: 't3',
    name: 'Sanjay Varma',
    role: 'Procurement Director',
    company: 'Regional Power Grid Corp',
    quote: 'Their commitment to ISO standards and certified inventory gives us the confidence we need for high-stakes government contracts. A truly professional B2B partner for cable trays and acoustic insulation.',
    rating: 5,
    industry: 'Power & Energy',
    location: 'Gujarat'
  },
  {
    id: 't4',
    name: 'Rajesh K. Kulkarni',
    role: 'Project Director',
    company: 'Apex Refineries & Petrochemicals',
    quote: 'During our emergency shutdown, Jeevandeep dispatched ASME spiral wound gaskets and SR 505 adhesives within 12 hours. Their rapid response saved us days of costly plant downtime.',
    rating: 5,
    industry: 'Oil & Gas',
    location: 'Jamnagar, Gujarat'
  },
  {
    id: 't5',
    name: 'Priya Sundaram',
    role: 'Senior MEP Consultant',
    company: 'Skyline Infrastructure Projects',
    quote: 'From Air Bubble insulation to Accosound acoustic damping sheets and slotted C channels, Jeevandeep is our single-source supplier. Excellent product specifications and MTC 3.1 documentation.',
    rating: 5,
    industry: 'HVAC & MEP',
    location: 'Bengaluru, Karnataka'
  },
  {
    id: 't6',
    name: 'Vikramaditya Singh',
    role: 'Chief Engineer',
    company: 'Vanguard Steel & Heavy Engineering',
    quote: 'The high tensile 8.8/10.9 nut bolts, tie rods, and GI sheets provided by Jeevandeep met all our structural load requirements. Certified materials with zero quality rejections.',
    rating: 5,
    industry: 'Manufacturing',
    location: 'Bhilai, Chhattisgarh'
  },
  {
    id: 't7',
    name: 'Mahesh Patel',
    role: 'Acoustic Specialist',
    company: 'SoundPro Architectural Systems',
    quote: 'We regularly procure Glasswool rolls, Tissue paper facing, and Accosound sheets from Jeevandeep. The acoustic performance and sound transmission loss (STC) ratings match exact international benchmarks.',
    rating: 5,
    industry: 'Acoustic & Building',
    location: 'Ahmedabad, Gujarat'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do you supply Perforated Jali, Cable Trays, and Nut Bolts in bulk?',
    answer: 'Yes, we maintain extensive ready stock of Perforated Jali, GI/SS Cable Trays, High Tensile Grade 8.8/10.9/B7 Nut Bolts, C Channels, and Tie Rods with volume discounts for infrastructure projects.',
    category: 'Commercial'
  },
  {
    id: 'faq-2',
    question: 'Are Nitrile Rubber, XLPE Sheets, and Air Bubble Insulation Class 0 certified?',
    answer: 'Yes, all our thermal and acoustic insulation products including Nitrile Rubber, XLPE sheets, Glass Wool, and Air Bubble Insulation conform to Class 0 / Class 1 fire rating standards (BS 476 Part 6 & 7).',
    category: 'Quality & Specs'
  },
  {
    id: 'faq-3',
    question: 'What adhesives do you recommend for Nitrile Foam and Duct installation?',
    answer: 'We supply specialized industrial adhesives including S R 505 Synthetic Rubber Contact Adhesive and Star Bond Duct Sealant engineered for high-tack bonding of foam sheets, glass cloth, and duct liners.',
    category: 'Custom Engineering'
  },
  {
    id: 'faq-4',
    question: 'What are your delivery timelines for Dehradun and Uttarakhand?',
    answer: 'For local Dehradun orders, same-day or next-day delivery is typically available. For other locations in Uttarakhand and across India, standard dispatch is within 24–48 hours via trusted logistics partners.',
    category: 'Logistics'
  },
  {
    id: 'faq-5',
    question: 'Do you provide Mill Test Certificates (MTC 3.1) for GI Sheets and Tie Rods?',
    answer: 'All shipments are accompanied by Manufacturer Test Certificates (MTC / 3.1 Mill Test Reports), ISO 9001 compliance dossiers, and third-party inspection readiness (TUV, DNV, BV).',
    category: 'Quality & Specs'
  },
  {
    id: 'faq-6',
    question: 'What is the minimum order quantity (MOQ) for your products?',
    answer: 'MOQ varies by product category. Fasteners and hardware items can be ordered in small lots, while insulation sheets and rubber matting typically have a minimum of one roll or sheet. Contact us for exact MOQ details on specific items.',
    category: 'Commercial'
  },
  {
    id: 'faq-7',
    question: 'Do you offer custom cutting and sizing for insulation sheets and rubber mats?',
    answer: 'Yes. We offer custom cutting to size for Nitrile Rubber, XLPE, Glass Wool, and dielectric safety mats. Simply share your required dimensions and we will supply pre-cut material ready for installation.',
    category: 'Custom Engineering'
  },
  {
    id: 'faq-8',
    question: 'Do you supply products on GST invoice for businesses?',
    answer: 'Absolutely. All transactions are billed with proper GST invoices. We support B2B procurement with full documentation including GST tax invoices, e-way bills, and delivery challans for audit compliance.',
    category: 'Commercial'
  },
  {
    id: 'faq-9',
    question: 'Can you supply products to government departments and PSUs?',
    answer: 'Yes, we actively supply to government departments, PSUs, defence establishments, and public sector contractors. We are registered with GeM portal and can participate in GeM orders and government tenders.',
    category: 'Commercial'
  },
  {
    id: 'faq-10',
    question: 'Do you provide after-sales technical support and product guidance?',
    answer: 'Yes. Our technical team provides free post-purchase guidance on installation methods, compatibility checks, and product selection for specific applications. Reach us via WhatsApp, phone, or email for prompt assistance.',
    category: 'Custom Engineering'
  }
];


export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 'power-energy',
    title: 'Power Generation & Energy',
    icon: 'bolt',
    description: 'Thermal, nuclear, and renewable energy facilities requiring Rockwool slabs, Accosound acoustic damping, 33kV IS 15652 safety mats, and ASTM A193 Grade B7 stud bolts.',
    keySupplies: ['Rockwool Slabs & Glass Wool', 'IS 15652 33kV Safety Mats', 'Perforated Jali & Cable Trays', 'Grade B7/2H Stud Bolts'],
    featuredProject: 'Supplied 120+ MT of thermal insulation & cable trays for 660 MW Supercritical Thermal Power Station expansion.'
  },
  {
    id: 'oil-gas-petrochem',
    title: 'Oil, Gas & Petrochemical',
    icon: 'local_gas_station',
    description: 'Refineries, offshore rigs, and chemical pipelines demanding Ex-d explosion-proof cable glands, Nitrile NBR sheets, EPDM steam sheets, and Silicone gaskets.',
    keySupplies: ['Flameproof Cable Glands (Ex-d)', 'Nitrile Rubber Sheet & Tube', 'Silicon Rubber & Gaskets', 'Star Bond & SR 505 Adhesives'],
    featuredProject: 'Annual rate contract for pipeline jointing and structural hardware across 4 petrochemical processing units.'
  },
  {
    id: 'hvac-mep',
    title: 'HVAC & Commercial MEP',
    icon: 'hvac',
    description: 'Commercial towers, airports, data centers, and cleanrooms requiring XLPE sheets, Air Bubble insulation, Slotted C channels, Tissue Paper facing, and Glass Cloth.',
    keySupplies: ['XLPE & Air Bubble Insulation', 'Slotted C Channels & GI Sheets', 'Tissue Paper & Glass Cloth', 'Star Bond Duct Adhesive'],
    featuredProject: 'Complete chiller line insulation & acoustic treatment for an international airport terminal expansion.'
  },
  {
    id: 'automotive-heavy',
    title: 'Automotive & Heavy Construction',
    icon: 'precision_manufacturing',
    description: 'Assembly plants, civil shuttering contractors, and equipment builders needing Nut Bolt sets, Tie Rods with wing nuts, and Accosound acoustic insulation.',
    keySupplies: ['Nut Bolt 🔩 Sets & Washers', 'Construction Tie Rods & Wing Nuts', 'GI Sheets & Perforated Jali', 'Accosound Acoustic Damping'],
    featuredProject: 'Supplying precision fasteners, tie rods, and acoustic insulation to major infrastructure contractors.'
  }
];
