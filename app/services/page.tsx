export default function Services() {
  return (
    <main className="min-h-screen px-6 pt-12 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl  mb-12 text-center">Moje usługi</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl mb-16">
        <h3 className="text-2xl font-medium mb-6 text-center">Jak Pracuję?</h3>
        <p className="text-neutral-600 leading-relaxed text-center">
          Każdy projekt rozpoczynam od dokładnego poznania Twoich potrzeb i oczekiwań. 
          Następnie przechodzę przez etapy koncepcji, projektowania, wizualizacji i dokumentacji wykonawczej. 
          Wspieram Cię również podczas realizacji, aby zagwarantować najwyższą jakość wykonania.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://utfs.io/f/wooH0SnRkga3WALGGNQo1nONrkxFKAstWJDBwmVhLiYqe0zl"
            alt="Projektowanie wnętrz"
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">Kompleksowy projekt wnętrz</h2>
            <p className="text-neutral-600 leading-relaxed">
              Tworzę funkcjonalne i estetyczne przestrzenie mieszkalne, które odzwierciedlają Twój styl życia i potrzeby.
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Analiza potrzeb i oczekiwań klienta</li>
              <li>Opracowanie układu funkcjonalnego</li>
              <li>Fotorealistyczne wizualizacje 3D</li>
              <li>Szczegółowy projekt techniczny</li>
              <li>Kompleksowe zestawienie materiałów</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://utfs.io/f/wooH0SnRkga3UxiKppsCQ5qc1kiotnjEv0ZNsgSxBarmTFyu"
            alt="Wizualizacje 3D"
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">Wizualizacje 3D</h2>
            <p className="text-neutral-600 leading-relaxed">
              Tworzę fotorealistyczne wizualizacje, które pozwalają zobaczyć efekt końcowy przed rozpoczęciem prac.
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Renderingi wnętrz w wysokiej rozdzielczości</li>
              <li>Animacje i wirtualne spacery</li>
              <li>Wizualizacje poszczególnych pomieszczeń</li>
              <li>Prezentacje różnych wariantów wykończenia</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://utfs.io/f/wooH0SnRkga34nataOVdcntR5IYSlU98iaGPCVHQAmrjvOZE"
            alt="Konsultacje i doradztwo"
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-medium">Konsultacje</h2>
            <p className="text-neutral-600 leading-relaxed">
              Oferuję profesjonalne wsparcie na każdym etapie projektu.
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
              <li>Analiza potrzeb</li>
              <li>Dobór kolorystyki i materiałów</li>
              <li>Konsultacje z wykonawcami</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 