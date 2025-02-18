'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const Services = () => {
  const { language } = useLanguage();
  const t = translations.services[language];

  return (
    <section className="py-8 px-6 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl mb-12 text-center">{t.title}</h1>
      

      <div className="space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[700px] w-full">
            <img
              src="https://utfs.io/f/wooH0SnRkga3TmUSQX5hP0gC2OjH4pS9YoJeRsulcZErV1aA"
              alt={t.interiorDesign.imageAlt}
              className="object-cover rounded-2xl absolute inset-0 w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">{t.interiorDesign.title}</h2>
            <p className="text-neutral-600 leading-relaxed">
              {t.interiorDesign.description}
            </p>
            <ul className="space-y-3 text-neutral-600">
              {t.interiorDesign.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl font-medium">{t.visualization3d.title}</h2>
            <p className="text-neutral-600 leading-relaxed">
              {t.visualization3d.description}
            </p>
            <ul className="space-y-3 text-neutral-600">
              {t.visualization3d.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[700px] order-1 md:order-2">
            <img
              src="https://utfs.io/f/wooH0SnRkga3UxiKppsCQ5qc1kiotnjEv0ZNsgSxBarmTFyu"
              alt={t.visualization3d.imageAlt}
              className="object-cover rounded-2xl absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[700px] w-full">
            <img
              src="https://utfs.io/f/wooH0SnRkga34nataOVdcntR5IYSlU98iaGPCVHQAmrjvOZE"
              alt={t.consultation.imageAlt}
              className="object-cover rounded-2xl absolute inset-0 w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">{t.consultation.title}</h2>
            <p className="text-neutral-600 leading-relaxed">
              {t.consultation.description}
            </p>
            <ul className="space-y-3 text-neutral-600">
              {t.consultation.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 