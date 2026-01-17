import { X } from 'lucide-react';
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
  orderLink: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { language, t } = useLanguage();

  const name = language === 'en' ? product.nameEn : product.name;
  const description = language === 'en' ? product.descriptionEn : product.description;
  const material = language === 'en' ? product.materialEn : product.material;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 hover:bg-secondary flex items-center justify-center transition-colors"
          aria-label={t('close')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2">
            <div className="aspect-square md:aspect-auto md:h-full">
              <img
                src={product.image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              {name}
            </h2>

            <p className="text-accent text-2xl font-bold mb-6">
              {product.price}
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  {t('description')}
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    {t('material')}
                  </h4>
                  <p className="text-foreground/80">{material}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    {t('size')}
                  </h4>
                  <p className="text-foreground/80">{product.size}</p>
                </div>
              </div>
            </div>

            {/* Order Button */}
            <a
              href={product.orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full flex items-center justify-center gap-2 text-lg"
            >
              {t('orderNow')}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
