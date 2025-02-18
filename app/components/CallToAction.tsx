'use client';

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export default function CallToAction() {
  const { language } = useLanguage();
  const t = translations.callToAction[language];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  mb-6">
            {t.title}
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            {t.description}{' '}
            <a 
              href="mailto:soniaarchitektura@gmail.com" 
              className="text-black hover:underline"
            >
              soniaarchitektura@gmail.com
            </a>
            {' '}{t.or}
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            {t.cta}
          </Link>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-[2.5rem] overflow-hidden">
          <img
            src="https://utfs.io/f/wooH0SnRkga3tF9uFFCQJvOTwBKqxRSeka0ImEuHbM3roNU5"
            alt={t.imageAlt}
            className="object-cover absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  )
} 