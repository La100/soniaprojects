'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations.services[language];

  return (
    <main className="min-h-screen px-6 pt-12 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl mb-12 text-center">{t.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://utfs.io/f/wooH0SnRkga3WALGGNQo1nONrkxFKAstWJDBwmVhLiYqe0zl"
            alt={t.interiorDesign.imageAlt}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">{t.interiorDesign.title}</h2>
            <p className="text-neutral-600 leading-relaxed">
              {t.interiorDesign.description}
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              {t.interiorDesign.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://utfs.io/f/wooH0SnRkga3UxiKppsCQ5qc1kiotnjEv0ZNsgSxBarmTFyu"
            alt={t.visualization3d.imageAlt}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">{t.visualization3d.title}</h2>
            <p className="text-neutral-600 leading-relaxed">
              {t.visualization3d.description}
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              {t.visualization3d.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://utfs.io/f/wooH0SnRkga34nataOVdcntR5IYSlU98iaGPCVHQAmrjvOZE"
            alt={t.consultation.imageAlt}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">{t.consultation.title}</h2>
            <p className="text-neutral-600 leading-relaxed">
              {t.consultation.description}
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              {t.consultation.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 