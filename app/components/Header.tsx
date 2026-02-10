"use client";
import Link from "next/link";
import { useState } from "react";
import { translations } from '../locales/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations.header.pl;

  return (
    <header className="border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-8">
        <div className="flex justify-between">
          <Link href="/" className="text-xl font-medium flex items-end gap-2">
           <img src="/logosonia.png" alt="Sonia Projects" width={50} height={50} />
           <span className="mb-0">Sonia Projects</span>
          </Link>
          
          {/* Przycisk menu mobilnego */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 relative"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={isMenuOpen ? "text-black" : "text-black"}
            >
              {isMenuOpen ? (
                <path 
                  d="M6 18L18 6M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              ) : (
                <path 
                  d="M4 6H20M4 12H20M4 18H20" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>

          {/* Menu desktopowe */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/projects" className="text-sm hover:text-neutral-600">
              {t.projects}
            </Link>
            <Link href="/services" className="text-sm hover:text-neutral-600">
              {t.services}
            </Link>
            <Link href="/gallery" className="text-sm hover:text-neutral-600">
              {t.gallery}
            </Link>
            <Link href="/blog" className="text-sm hover:text-neutral-600">
              {t.blog}
            </Link>
            <Link
              href="/contact"
              className="text-sm px-4 py-2 bg-black text-white rounded-full hover:bg-neutral-800"
            >
              {t.contact}
            </Link>
          </nav>
        </div>

        {/* Menu mobilne */}
        <div 
          className={`
            fixed inset-y-0 right-0 w-72 transform transition-transform duration-300 ease-in-out bg-[hsl(36,33%,97%)]
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
            shadow-lg
          `}
          style={{ top: '0', zIndex: 40 }}
        >
          <div className="pt-24 px-8">
            <nav className="flex flex-col space-y-8">
              <Link 
                href="/projects" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.projects}
              </Link>
              <Link 
                href="/services" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.services}
              </Link>
              <Link 
                href="/gallery" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.gallery}
              </Link>
              <Link 
                href="/blog" 
                className="text-lg font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.blog}
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 inline-block text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </Link>
              {/* PL only */}
            </nav>

            {/* Dodatkowe informacje w menu mobilnym */}
            <div className="mt-16 space-y-6 text-neutral-600">
              <div>
                <h3 className="text-sm font-medium text-black mb-2">{t.mobileMenu.contact}</h3>
                <p className="text-sm">soniaarchitektura@gmail.com</p>
                <p className="text-sm">+48 696 600 364</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-black mb-2">{t.mobileMenu.socialMedia}</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/sonia_projects/" className="text-sm hover:text-black transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay dla menu mobilnego */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ zIndex: 30 }}
          />
        )}
      </div>
    </header>
  );
} 