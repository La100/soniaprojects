import type { Metadata } from "next";

import ProjectCarousel from "../components/ProjectCarousel";
import { translations } from "../locales/translations";

export const metadata: Metadata = {
  title: "Realizacje",
  description:
    "Realizacje i portfolio Sonia Projects: projekty mieszkań i domów, aranżacje oraz wizualizacje wnętrz. Zobacz wybrane projekty.",
  alternates: { canonical: "https://soniaprojects.pl/projects" },
  openGraph: {
    type: "website",
    url: "https://soniaprojects.pl/projects",
    title: "Realizacje | Sonia Projects",
    description:
      "Portfolio: projekty wnętrz i wizualizacje 3D — Sonia Projects.",
    locale: "pl_PL",
  },
};

const projectImages = [
  {
    images: [
      'https://utfs.io/f/wooH0SnRkga3TmUSQX5hP0gC2OjH4pS9YoJeRsulcZErV1aA',
      'https://utfs.io/f/wooH0SnRkga3oMbYkxPLkSQ6YDUT3X7hVlg49ieJnFvWsPN0', 
      'https://utfs.io/f/wooH0SnRkga3xOBTD52RfzjVHtInU037mQMCihecBWZ1KvA8',
      'https://utfs.io/f/wooH0SnRkga3pBJRSRi7J4AMiSZwNXDRLeCYhEgGfHco0F6j',
      'https://utfs.io/f/wooH0SnRkga3E9EBctPsKO6LQZ9TFEjntUcm4WBbzpA3yHNl',
      'https://utfs.io/f/wooH0SnRkga3TmgaKVchP0gC2OjH4pS9YoJeRsulcZErV1aA',
      'https://utfs.io/f/wooH0SnRkga3Csz8Mjpr6qvcfbALYI1yxVFdSuO90DKEWJi4',
      'https://utfs.io/f/wooH0SnRkga3LcKSzDkCzY32ZJH5AgbnauxPGcw0sVflF94X',
      'https://utfs.io/f/wooH0SnRkga3CjiwqGIpr6qvcfbALYI1yxVFdSuO90DKEWJi',
    ]
  },
  {
    images: [
      'https://utfs.io/f/wooH0SnRkga3civdd4ysJoy5X2e0uwanVD1WSME346KxIzCY',
      'https://utfs.io/f/wooH0SnRkga3lG2IVE6roBQZgpTmJ5YWF6xCDjLaGnNXt9k2', 
      'https://utfs.io/f/wooH0SnRkga3kn4bnxMi6jsZMbDlfQnPc49pFr7CvWEgoam1',
      'https://utfs.io/f/wooH0SnRkga327EW2wJMnbJaQFKVs37DckBm5PAwh6IgErtG',
      'https://utfs.io/f/wooH0SnRkga38KAH0wJBgMntpfabPL4dZJ61AxEj9ICiVlkU',
      'https://utfs.io/f/wooH0SnRkga3UFKL9jIsCQ5qc1kiotnjEv0ZNsgSxBarmTFy',
    ]
  },
  {
    images: [
      'https://utfs.io/f/wooH0SnRkga34yY2XxVdcntR5IYSlU98iaGPCVHQAmrjvOZE',
      'https://utfs.io/f/wooH0SnRkga3mU3KZEluMiD1NpyG0uo4QzFEL8YfwqTZUXRt',
      'https://utfs.io/f/wooH0SnRkga3Gh2p2cgTSA8Eajf3LJvQ17Nceg0kYyGmZutU',
    ]
  },
  {
    images: [
      'https://utfs.io/f/wooH0SnRkga3rWwuqBoQkPqdvJwiUuDaF2jxQzmtZ60AGlsb',
      'https://utfs.io/f/wooH0SnRkga3rWdD7q9QkPqdvJwiUuDaF2jxQzmtZ60AGlsb',
      'https://utfs.io/f/wooH0SnRkga3X4GKHJUuGVHaPz3KxirQTNmOLqBtsyCjd1Mn',
      'https://utfs.io/f/wooH0SnRkga3res6rmQkPqdvJwiUuDaF2jxQzmtZ60AGlsb9',
      'https://utfs.io/f/wooH0SnRkga3EEsIrSPsKO6LQZ9TFEjntUcm4WBbzpA3yHNl',
    ]
  }
];

export default function Projects() {
  const t = translations.projects.pl;

  return (
    <main className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-16">
        <h1 className="font-futura text-center text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3">{t.title}</h1>
        <div className="h-px w-16 bg-neutral-200 mb-8 mx-auto"></div>
        <p className="text-center text-neutral-600 text-lg md:text-xl mb-4">
          {t.subtitle}
        </p>
      </div>
      
      <div className="space-y-16">
        {t.projectsList.map((project, index) => (
          <ProjectCarousel 
            key={index} 
            {...project} 
            images={projectImages[index].images}
            imageAlt={t.imageAlt}
          />
        ))}
      </div>
    </main>
  );
} 