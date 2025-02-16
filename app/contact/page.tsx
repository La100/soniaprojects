import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <div className="px-6 pt-20 md:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl  mb-4">
              Nawiążmy współpracę
            </h1>
            <p className="text-lg text-neutral-600 max-w-md">
              Masz pytanie lub chcesz rozpocząć współpracę? Napisz do mnie, 
              a odpowiem najszybciej jak to możliwe.
            </p>
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:soniaarchitektura@gmail.com" className="hover:underline">soniaarchitektura@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Warszawa, Polska</span>
              </div>
              <div className="flex items-center space-x-3">
                <a href="tel:+48696600364">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <span>+48 696 600 364</span>
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
            alt="Contact background"
            className="object-cover absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </main>
  );
} 