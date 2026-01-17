import { useLanguage } from '@/hooks/useLanguage';

const About = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: 'Tentang KainBatikSpesial',
      description: 'KainBatikSpesial adalah toko kain batik terpercaya yang telah berdiri sejak 2010. Kami berkomitmen untuk menyediakan koleksi batik berkualitas tinggi dari berbagai daerah di Indonesia.',
      features: [
        { title: 'Kualitas Premium', desc: 'Hanya kain batik dengan kualitas terbaik yang kami tawarkan' },
        { title: 'Motif Autentik', desc: 'Motif tradisional asli dari pengrajin batik nusantara' },
        { title: 'Pengiriman Aman', desc: 'Dikemas dengan aman dan dikirim ke seluruh Indonesia' },
      ],
    },
    en: {
      title: 'About KainBatikSpesial',
      description: 'KainBatikSpesial is a trusted batik fabric store established since 2010. We are committed to providing high-quality batik collections from various regions across Indonesia.',
      features: [
        { title: 'Premium Quality', desc: 'Only the finest quality batik fabrics we offer' },
        { title: 'Authentic Patterns', desc: 'Traditional patterns from Indonesian batik artisans' },
        { title: 'Safe Delivery', desc: 'Safely packed and shipped across Indonesia' },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {currentContent.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            {currentContent.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
