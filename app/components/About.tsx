import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <h2 className="text-3xl font-semibold mb-8">O mnie</h2>
        <p className=" ">
          Projektuję wnętrza z charakterem. Każda przestrzeń to nowa historia - czy to przytulny dom, nowoczesne biuro czy elegancki lokal usługowy. Dbam o każdy detal.
        </p>
        
        <p className="">
          Łączę najnowsze trendy ze sprawdzonymi rozwiązaniami. Twoje marzenia i potrzeby są dla mnie priorytetem. Wspólnie stworzymy wnętrze, które będzie Cię inspirować.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[800px]">
          <Image
            src="https://utfs.io/f/wooH0SnRkga30uwRNIOWDVvJRrE9Iwm5u28joLZAnHCcPzOF"
            alt="Minimalist interior design"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[800px]">
          <Image
            src="https://utfs.io/f/wooH0SnRkga3kSY2c0dMi6jsZMbDlfQnPc49pFr7CvWEgoam"
            alt="Modern exterior design"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[800px]">
          <Image
            src="https://utfs.io/f/wooH0SnRkga3xfHYXA2RfzjVHtInU037mQMCihecBWZ1KvA8"
            alt="Luxury pool area"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
} 