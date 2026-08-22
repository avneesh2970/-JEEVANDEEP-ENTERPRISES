import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LegacySection } from './components/LegacySection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { CoreValuesSection } from './components/CoreValuesSection';
import { ProductCategoriesSection } from './components/ProductCategoriesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';
import { IndustriesPage } from './components/IndustriesPage';
import { ApplicationsPage } from './components/ApplicationsPage';
import { ContactPage } from './components/ContactPage';
import { Toast } from './components/Toast';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PRODUCT_CATEGORIES } from './data/mockData';

type ViewMode = 'home' | 'about' | 'products' | 'industries' | 'applications' | 'contact';

export default function App() {
  // Determine initial view based on window path
  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/about') return 'about';
      if (path === '/products') return 'products';
      if (path === '/industries') return 'industries';
      if (path === '/applications') return 'applications';
      if (path === '/contact') return 'contact';
    }
    return 'home';
  });

  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/about') return 'about';
      if (path === '/products') return 'products';
      if (path === '/industries') return 'industries';
      if (path === '/applications') return 'applications';
      if (path === '/contact') return 'contact';
    }
    return 'home';
  });

  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedQuoteCategory, setSelectedQuoteCategory] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/about') {
        setCurrentView('about');
        setActiveTab('about');
      } else if (path === '/products') {
        setCurrentView('products');
        setActiveTab('products');
      } else if (path === '/industries') {
        setCurrentView('industries');
        setActiveTab('industries');
      } else if (path === '/applications') {
        setCurrentView('applications');
        setActiveTab('applications');
      } else if (path === '/contact') {
        setCurrentView('contact');
        setActiveTab('contact');
      } else {
        setCurrentView('home');
        setActiveTab('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToView = (view: ViewMode, path = '/') => {
    setCurrentView(view);
    setActiveTab(view);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      navigateToView('home', '/');
    } else if (tabId === 'about') {
      navigateToView('about', '/about');
    } else if (tabId === 'products') {
      navigateToView('products', '/products');
    } else if (tabId === 'industries') {
      navigateToView('industries', '/industries');
    } else if (tabId === 'applications') {
      navigateToView('applications', '/applications');
    } else if (tabId === 'contact') {
      navigateToView('contact', '/contact');
    }
  };

  const handleRequestQuote = (categoryName?: string) => {
    if (categoryName) {
      setSelectedQuoteCategory(categoryName.toLowerCase());
    }
    navigateToView('contact', '/contact');
    setTimeout(() => {
      const input = document.getElementById('fullName') || document.getElementById('name');
      if (input) input.focus();
    }, 200);
  };

  const handleDirectContact = (type: 'phone' | 'mail') => {
    if (type === 'phone') {
      window.location.href = 'tel:+919411487540';
      showToast('Connecting to Sales Hotline: +91 94114 87540');
    } else {
      window.location.href = 'mailto:sales@jeevandeep.com';
      showToast('Opening email client for sales@jeevandeep.com');
    }
  };

  const handleCategoryByName = (name: string) => {
    const match = PRODUCT_CATEGORIES.find(
      (c) => c.name.toLowerCase() === name.toLowerCase() || c.id.toLowerCase() === name.toLowerCase()
    );
    if (match) {
      handleRequestQuote(match.name);
    } else {
      navigateToView('products', '/products');
    }
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]  min-h-screen flex flex-col antialiased selection:bg-[#fea619]/30 selection:text-[#002147]">
      {/* Sticky Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenQuoteModal={() => handleRequestQuote()}
        onDirectContact={handleDirectContact}
      />

      {/* Main Content View Switcher */}
      <main className="grow">
        {currentView === 'about' ? (
          /* Dedicated About Page Route (/about) */
          <AboutPage
            onNavigateHome={() => navigateToView('home', '/')}
            onRequestQuote={() => handleRequestQuote()}
            onExploreProducts={() => navigateToView('products', '/products')}
          />
        ) : currentView === 'products' ? (
          /* Dedicated Products Page Route (/products) */
          <ProductsPage
            onNavigateHome={() => navigateToView('home', '/')}
            onRequestQuote={(catName) => handleRequestQuote(catName)}
          />
        ) : currentView === 'industries' ? (
          /* Dedicated Industries Page Route (/industries) */
          <IndustriesPage
            onNavigateHome={() => navigateToView('home', '/')}
            onRequestQuote={(sector) => handleRequestQuote(sector)}
            onExploreProducts={() => navigateToView('products', '/products')}
          />
        ) : currentView === 'applications' ? (
          /* Dedicated Applications Page Route (/applications) */
          <ApplicationsPage
            onNavigateHome={() => navigateToView('home', '/')}
            onRequestQuote={(app) => handleRequestQuote(app)}
            onExploreProducts={() => navigateToView('products', '/products')}
          />
        ) : currentView === 'contact' ? (
          /* Dedicated Contact Page Route (/contact) */
          <ContactPage
            onNavigateHome={() => navigateToView('home', '/')}
            onShowToast={showToast}
          />
        ) : (
          /* Main Home Page Route View (/) */
          <>
            {/* Hero Section */}
            <HeroSection
              onRequestQuote={() => handleRequestQuote()}
              onExploreProducts={() => navigateToView('products', '/products')}
            />

            {/* Story Section: Our Legacy of Reliability */}
            <LegacySection
              onLearnMore={() => navigateToView('about', '/about')}
              onOpenAboutModal={() => navigateToView('about', '/about')}
            />

            {/* Mission & Vision Cards */}
            <MissionVisionSection />

            {/* Core Values Section */}
            <CoreValuesSection />

            {/* Our Product Categories Section */}
            <ProductCategoriesSection
              onSelectCategory={(cat) => handleRequestQuote(cat.name)}
              onRequestQuoteForCategory={(catName) => handleRequestQuote(catName)}
            />

            {/* What Our Partners Say Section */}
            <TestimonialsSection />

            {/* Frequently Asked Questions Section */}
            <FaqSection onAskDirectly={() => handleRequestQuote()} />

            {/* Get in Touch & RFQ Section */}
            <ContactSection
              initialCategory={selectedQuoteCategory}
              onShowToast={showToast}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectCategoryName={handleCategoryByName}
        onOpenLegalModal={(title) => setLegalModalTitle(title)}
      />

      {/* Legal Information Modal */}
      <LegalModal
        title={legalModalTitle}
        onClose={() => setLegalModalTitle(null)}
      />

      {/* Fixed Bottom-Right Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Toast Feedback Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
