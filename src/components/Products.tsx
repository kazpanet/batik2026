import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

// Import product images
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

interface Product {
  id: number;
  name: string;
  nameEn: string;
  //price: string;
  image: string;
  description: string;
  descriptionEn: string;
  material: string;
  materialEn: string;
  size: string;
  orderLink: string;
}

const productsData: Product[] = [
  {
    id: 1,
    name: 'Batik Premium Dobi',
    nameEn: 'Classic Phoenix Batik',
    //price: 'Rp 350.000',
    image: product1,
    description:
      'Kain batik motif Phoenix klasik dengan warna cokelat dan krem yang elegan. Cocok untuk acara formal dan tradisional.',
    descriptionEn:
      'Classic Phoenix pattern batik fabric with elegant brown and cream colors. Perfect for formal and traditional events.',
    material: 'Dobi Premium',
    materialEn: 'Premium Dobi',
    size: 'Lebar 115 cm',
    orderLink: 'https://www.tokopedia.com/kainbatikspecial',
  },
  {
    id: 2,
    name: 'Batik Lontar ',
    nameEn: 'Lontar Batik',
    //price: 'Rp 425.000',
    image: product2,
    description:
      'Batik khas Sulawesi dengan motif lontar bergaya yang menawan. Warna  gradasi yang memukau.',
    descriptionEn:
      'Signature Sulaweis batik with captivating lontar pattern. Stunning  gradient colors.',
    material: 'Dobi Premium',
    materialEn: 'Premium Dobi',
    size: 'Lebar 115 cm',
    orderLink: 'https://www.tokopedia.com/kainbatikspecial',
  },
  {
    id: 3,
    name: 'Batik Sutra Fatayat',
    nameEn: 'Modern Fatayat Batik',
    //price: 'Rp 380.000',
    image: product3,
    description:
      'Interpretasi modern dari motif nasional . Perpaduan warna kontemporer yang segar.',
    descriptionEn:
      'Modern interpretation of nasional pattern. Fresh contemporary color combination.',
    material: 'Sutra Paris',
    materialEn: 'Paris Silk',
    size: '115 cm',
    orderLink: 'https://www.tokopedia.com/kainbatikspecial',
  },
  {
    id: 4,
    name: 'Batik Seragam Sekolah',
    nameEn: 'Uniform School Batik',
    //price: 'Rp 395.000',
    image: product4,
    description:
      'Motif Batik Sekolah  custom. Cocok buat sekolah yang ingin menampilkan indentitas sekolahnya dengan logo dan custom design',
    descriptionEn:
      'Custom school batik motifs. Perfect for schools that want to display their identity with a logo and custom design.',
    material: 'Bsy Premium',
    materialEn: 'Premium Bsy',
    size: 'Lebar cm',
    orderLink: 'https://www.tokopedia.com/kainbatikspecial',
  },
  {
    id: 5,
    name: 'Batik Couples',
    nameEn: 'Couples Batik',
    //price: 'Rp 40.000/mtr',
    image: product5,
    description:
      'Batik mewah dengan motif sekar burung yang melambangkan keberagaman dan persatuan Indonesia.',
    descriptionEn:
      'Luxurious batik with bird pattern symbolizing Indonesian diversity and unity.',
    material: 'Sutra Premium',
    materialEn: 'Premium Silk',
    size: 'Lebar 115 cm',
    orderLink: 'https://www.tokopedia.com/kainbatikspecial',
  },
  {
    id: 6,
    name: 'Batik  Kontemporer',
    nameEn: 'Contemporary Batik',
    //price: 'Rp 50.000/mtr',
    image: product6,
    description:
      'Batik Kontemporer dengan sentuhan modern. Warna merah khas yang berani dan memukau.',
    descriptionEn:
      'Contemporary batik with modern touch. Bold and stunning signature red color.',
    material: 'Katun 40s',
    materialEn: '40s Cotton',
    size: '115 cm',
    orderLink: 'https://www.tokopedia.com/kainbatikspecial',
  },
];

const Products = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('ourProducts')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('productsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productsData.map((product, index) => (
            <div
              key={product.id}
              className="slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Products;
