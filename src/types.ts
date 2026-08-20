export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  bannerImg?: string;
  itemCount: number;
  highlightSpecs: string[];
  subcategories: string[];
  products: ProductItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  modelCode: string;
  description: string;
  grade: string;
  standards: string[];
  specs: Record<string, string>;
  inStock: boolean;
  applications: string[];
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  industry?: string;
  location?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CoreValue {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productCategory: string;
  estimatedQuantity: string;
  additionalDetails: string;
  urgencyLevel?: 'immediate' | '1-2_weeks' | 'planning';
  deliveryCity?: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  icon: string;
  description: string;
  keySupplies: string[];
  featuredProject: string;
}
