'use client';

import Link from "next/link";
import { translations } from '../locales/translations';

export default function Footer() {
  const t = translations.footer.pl;

  return (
    <footer className="mt-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Sonia Projects</h3>
            <p className="text-sm text-neutral-600">{t.description}</p>
          </div>
          <div>
            <h3 className="font-medium mb-4">{t.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-neutral-600 hover:text-black">
                  {t.projects}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-neutral-600 hover:text-black">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-neutral-600 hover:text-black">
                  {t.gallery}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-600 hover:text-black">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">{t.contact}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-neutral-600">soniaarchitektura@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">{t.socialMedia}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/sonia_projects/"
                  className="text-sm text-neutral-600 hover:text-black"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
