const Services = () => {
  return (
    <section className="py-8 px-6 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl   mb-12 text-center">Moje Usługi</h1>
      

      <div className="space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[700px] w-full">
            <img
              src="https://utfs.io/f/wooH0SnRkga3TmUSQX5hP0gC2OjH4pS9YoJeRsulcZErV1aA"
              alt="Projektowanie wnętrz"
              className="object-cover rounded-2xl absolute inset-0 w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Kompleksowy projekt wnętrz</h2>
            <p className="text-neutral-600 leading-relaxed">
              Tworzę funkcjonalne i estetyczne przestrzenie mieszkalne, które odzwierciedlają Twój styl życia i potrzeby.
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Analiza potrzeb i oczekiwań klienta
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Opracowanie układu funkcjonalnego
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Fotorealistyczne wizualizacje 3D
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Szczegółowy projekt techniczny
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Kompleksowe zestawienie materiałów
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl font-medium">Wizualizacje 3D</h2>
            <p className="text-neutral-600 leading-relaxed">
              Tworzę fotorealistyczne wizualizacje, które pozwalają zobaczyć efekt końcowy przed rozpoczęciem prac.
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Renderingi wnętrz w wysokiej rozdzielczości
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Animacje i wirtualne spacery
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Wizualizacje poszczególnych pomieszczeń
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Prezentacje różnych wariantów wykończenia
              </li>
            </ul>
          </div>
          <div className="relative h-[700px] order-1 md:order-2">
            <img
              src="https://utfs.io/f/wooH0SnRkga3UxiKppsCQ5qc1kiotnjEv0ZNsgSxBarmTFyu"
              alt="Wizualizacje 3D"
              className="object-cover rounded-2xl absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[700px] w-full">
            <img
              src="https://utfs.io/f/wooH0SnRkga34nataOVdcntR5IYSlU98iaGPCVHQAmrjvOZE"
              alt="Konsultacje i doradztwo"
              className="object-cover rounded-2xl absolute inset-0 w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Konsultacje </h2>
            <p className="text-neutral-600 leading-relaxed">
              Oferuję profesjonalne wsparcie na każdym etapie projektu.
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Analiza potrzeb
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Dobór kolorystyki i materiałów
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                Konsultacje z wykonawcami
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 