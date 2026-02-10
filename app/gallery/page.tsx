'use client';

import { useState } from "react";
import ImageModal from "../components/ImageModal";
import GallerySection from "../components/GallerySection";
import { translations } from '../locales/translations';

const galleryImages = [
  {
    images: [
      {
        url: "/fotki/KUCHNIA_01.jpg",
      },
      {
        url: "/fotki/KUCHNIA_02.jpg",
      },
      {
        url: "/fotki/SALON_01.jpg",
      },
      {
        url: "/fotki/WC_01.jpg",
      },
      {
        url: "/fotki/WC_02.jpg",
      }
    ]
  },
  {
    images: [
      {
        url: "/gallery/image00034.jpeg",
      },
      {
        url: "/gallery/image00035.jpeg",
      },
      {
        url: "/gallery/image00036.jpeg",
      },
      {
        url: "/gallery/image00037.jpeg",
      }
    ]
  },
  {
    images: [
      {
        url: "/gallery/image00010.jpeg",
      },
      {
        url: "/gallery/image00001.jpeg",
      },
      {
        url: "/gallery/image00009.jpeg",
      }
    ]
  },
  {
    images: [
      {
        url: "/gallery/image00057.jpeg",
      },
      {
        url: "/gallery/image00058.jpeg",
      },
      {
        url: "/gallery/image00059.jpeg",
      },
      {
        url: "/gallery/image00060.jpeg",
      }
    ]
  },
  {
    images: [
      {
        url: "/gallery/image00038.jpeg",
      },
      {
        url: "/gallery/image00039.jpeg",
      },
      {
        url: "/gallery/image00040.jpeg",
      },
      {
        url: "/gallery/image00041.jpeg",
      }
    ]
  },
  {
    images: [
      {
        url: "/gallery/image00025.jpeg",
      },
      {
        url: "/gallery/image00026.jpeg",
      },
      {
        url: "/gallery/image00027.jpeg",
      },
      {
        url: "/gallery/image00028.jpeg",
      },
      {
        url: "/gallery/image00029.jpeg",
      }
    ]
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string; alt: string} | null>(null);
  const t = translations.gallery.pl;

  return (
    <main className="min-h-screen px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-12 pb-16">
        <h1 className="font-futura text-center text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3">{t.title}</h1>
        <div className="h-px w-16 bg-neutral-200 mb-8 mx-auto"></div>
        <p className="text-center text-neutral-600 text-lg md:text-xl mb-12">
          {t.subtitle}
        </p>

        {t.sections.map((section, index) => (
          <GallerySection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            images={galleryImages[index].images.map((img, imgIndex) => ({
              ...img,
              alt: section.images[imgIndex].alt
            }))}
            onImageClick={setSelectedImage}
          />
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage.url}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
} 