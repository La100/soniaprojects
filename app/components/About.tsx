'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations.about[language];

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-2xl mb-12 mx-auto text-center">
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
            src="https://utfs.io/f/wooH0SnRkga30uwRNIOWDVvJRrE9Iwm5u28joLZAnHCcPzOF"
            alt={t.images.first}
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
        <div className="relative h-[800px]">
          <img
            src="https://utfs.io/f/wooH0SnRkga3kSY2c0dMi6jsZMbDlfQnPc49pFr7CvWEgoam"
            alt={t.images.second}
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
        <div className="relative h-[800px]">
          <img
            src="https://utfs.io/f/wooH0SnRkga3xfHYXA2RfzjVHtInU037mQMCihecBWZ1KvA8"
            alt={t.images.third}
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
} 