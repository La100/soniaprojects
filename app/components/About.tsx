export default function About() {
  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-2xl mb-12 mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Kim jestem</h2>
        <p className="mb-6">
          Projektuję wnętrza z charakterem. Każda przestrzeń to nowa historia - czy to przytulny dom, nowoczesne biuro czy elegancki lokal usługowy. Dbam o każdy detal.
        </p>
        
        <p>
          Łączę najnowsze trendy ze sprawdzonymi rozwiązaniami. Twoje marzenia i potrzeby są dla mnie priorytetem. Wspólnie stworzymy wnętrze, które będzie Cię inspirować.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[800px]">
          <img
            src="https://utfs.io/f/wooH0SnRkga30uwRNIOWDVvJRrE9Iwm5u28joLZAnHCcPzOF"
            alt="Minimalist interior design"
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
        <div className="relative h-[800px]">
          <img
            src="https://utfs.io/f/wooH0SnRkga3kSY2c0dMi6jsZMbDlfQnPc49pFr7CvWEgoam"
            alt="Modern exterior design"
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
        <div className="relative h-[800px]">
          <img
            src="https://utfs.io/f/wooH0SnRkga3xfHYXA2RfzjVHtInU037mQMCihecBWZ1KvA8"
            alt="Luxury pool area"
            className="object-cover rounded-lg absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
} 