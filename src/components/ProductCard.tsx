import { useLanguage } from '@/hooks/useLanguage';

interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: string;
  image: string;
  description: string;
  descriptionEn: string;
  material: string;
  materialEn: string;
  size: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { language } = useLanguage();

  const name = language === 'en' ? product.nameEn : product.name;

  return (
    <div className="product-card group" onClick={onClick}>
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={name}
          className="product-image"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-accent font-semibold text-lg">
          {product.price}
        </p>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-primary-foreground font-medium text-lg">
          {language === 'en' ? 'View Details' : 'Lihat Detail'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
