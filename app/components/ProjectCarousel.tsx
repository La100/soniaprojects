'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectCarouselProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

export default function ProjectCarousel({ title, subtitle, description, images }: ProjectCarouselProps) {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8 mb-16">
      <div 
        className="mb-8 cursor-pointer flex items-center justify-between" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h2 className="font-futura text-3xl md:text-4xl mb-3 text-neutral-800">{title}</h2>
          <p className="text-xl font-futura text-neutral-600">{subtitle}</p>
        </div>
        <button className="text-2xl transform transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ↓
        </button>
      </div>
      
      <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="h-px w-24 bg-neutral-300 mb-12"></div>
        
        <div className="aspect-[9/16] md:aspect-[16/9]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            loopPreventsSliding={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            className="w-full h-full select-none"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                direction: 'horizontal'
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                direction: 'horizontal'
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="cursor-grab active:cursor-grabbing">
                <div className="w-full h-full relative p-2">
                  <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-lg bg-white">
                    <img
                      src={image}
                      alt={`Projekt ${index + 1}`}
                      className="w-full h-full object-cover pointer-events-none absolute inset-0"
                      draggable="false"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12">
          <p className="text-black font-futura whitespace-pre-line leading-relaxed max-w-3xl mx-auto text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}
