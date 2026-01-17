import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type Language = 'id' | 'en';

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { id: 'Beranda', en: 'Home' },
  products: { id: 'Produk', en: 'Products' },
  about: { id: 'Tentang', en: 'About' },
  contact: { id: 'Hubungi Kami', en: 'Contact Us' },
  
  // Hero
  heroTitle: { id: 'Keindahan Batik Nusantara', en: 'The Beauty of Indonesian Batik' },
  heroSubtitle: { 
    id: 'Koleksi kain batik premium dengan motif tradisional dan modern yang memukau', 
    en: 'Premium batik fabric collection with stunning traditional and modern patterns' 
  },
  exploreCollection: { id: 'Jelajahi Koleksi', en: 'Explore Collection' },
  
  // Products
  ourProducts: { id: 'Produk Kami', en: 'Our Products' },
  productsSubtitle: { 
    id: 'Temukan keindahan kain batik berkualitas tinggi untuk berbagai kebutuhan Anda', 
    en: 'Discover beautiful high-quality batik fabrics for all your needs' 
  },
  viewDetails: { id: 'Lihat Detail', en: 'View Details' },
  orderNow: { id: 'Pesan Sekarang', en: 'Order Now' },
  close: { id: 'Tutup', en: 'Close' },
  description: { id: 'Deskripsi', en: 'Description' },
  price: { id: 'Harga', en: 'Price' },
  material: { id: 'Bahan', en: 'Material' },
  size: { id: 'Ukuran', en: 'Size' },
  
  // About
  aboutTitle: { id: 'Tentang Kami', en: 'About Us' },
  aboutDescription: { 
    id: 'KainBatikSpesial adalah toko kain batik terpercaya yang menyediakan berbagai koleksi batik berkualitas tinggi dari seluruh Indonesia.', 
    en: 'KainBatikSpesial is a trusted batik fabric store providing high-quality batik collections from across Indonesia.' 
  },
  
  // Footer
  followUs: { id: 'Ikuti Kami', en: 'Follow Us' },
  shopAt: { id: 'Belanja di', en: 'Shop at' },
  allRightsReserved: { id: 'Hak Cipta Dilindungi', en: 'All Rights Reserved' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (!browserLang.startsWith('id')) {
      setLanguage('en');
    }
  }, []);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
