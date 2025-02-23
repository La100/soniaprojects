'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 text-sm font-medium text-gray-700 hover:text-gray-900"
      aria-label="Toggle language"
    >
      {language === 'pl' ? 'English' : 'Polish'}
    </button>
  );
} 