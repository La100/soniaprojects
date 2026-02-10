'use client';

import { translations } from '../locales/translations';

export default function Hero() {
  const t = translations.hero.pl;

  return (
    <div className="pt-12 md:pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-1 md:order-1">
          <h1 className="max-w-4xl text-6xl md:text-6xl lg:text-7xl tracking-tight md:pr-12 lg:pr-20">
            {t.title}
            <span className="italic"> {t.titleEmphasis}</span> 
            <br />
            <span className="block text-4xl mt-3 md:mt-4">
              {t.subtitle}
            </span>
          </h1>
          <div className="mt-8">
            <a
              href="/projects"
              className="inline-block px-6 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-gray-600"
            >
              {t.cta}
            </a>
          </div>
        </div>
        <div className="order-2 md:order-2">
          <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-xl">
            <img
              src="/fotki/WC_01.jpg"
              alt={t.imageAlt}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 