'use client';

import { translations } from '../locales/translations';

export default function About() {
  const t = translations.about.pl;

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-2xl mb-12 mx-auto text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8">{t.title}</h2>
        <p className="mb-6">
          {t.description1}
        </p>
        
        <p>
          {t.description2}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[800px]">
          <img
            src="/images/wc-prysznic.jpg"
            alt={t.images.first}
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
        <div className="relative h-[800px]">
          <img
            src="/images/master_02.jpg"
            alt={t.images.second}
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
        <div className="relative h-[800px]">
          <img
            src="/images/2.jpg"
            alt={t.images.third}
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
} 