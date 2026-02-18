import type { Metadata } from "next";

import ContactForm from "../components/ContactForm";
import { translations } from "../locales/translations";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z Sonia Projects: zapytaj o projekt wnętrza, wizualizacje 3D lub konsultację. Warszawa i okolice — odpowiedź z kolejnymi krokami współpracy.",
  alternates: { canonical: "https://www.soniaprojects.pl/contact" },
  openGraph: {
    type: "website",
    url: "https://www.soniaprojects.pl/contact",
    title: "Kontakt | Sonia Projects",
    description:
      "Kontakt i współpraca: projektowanie wnętrz, wizualizacje 3D, konsultacje — Sonia Projects.",
    locale: "pl_PL",
  },
};

export default function Contact() {
  const t = translations.contact.pl;

  return (
    <main className="min-h-screen">
      <div className="px-6 pt-20 md:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl mb-4">{t.title}</h1>
            <p className="text-lg text-neutral-600 max-w-md">{t.description}</p>

            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:soniaarchitektura@gmail.com" className="hover:underline">
                  soniaarchitektura@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{t.location}</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="w-full h-[600px] relative mt-20 rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <img
            src="https://utfs.io/f/wooH0SnRkga3QOYpX9qRMW60Bs8qnbdYE9hzu2ZlrIw5cvox"
            alt={t.imageAlt}
            className="object-cover absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
