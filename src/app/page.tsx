import Image from 'next/image';

import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Card } from '@/app/components/Card';

const Home = () => {
  const cardCount = 10;

  return (
    <>
      <Header visibilitySearch={true} />
      <main className='h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-gray-200'>
        <div className='relative w-full aspect-[3/1]'>
          <Image src="/images/banner.png" alt="Banner" fill style={{ objectFit: 'cover' }} />
        </div>
        
        <div className='flex flex-col items-center justify-center p-4'>
          {Array.from({ length: cardCount }).map((_, index) => (
            <div key={index} className='w-full max-w-md mb-3'>
              <Card
                title={`Matsuri Concept ${index + 1}`}
                image="matsuri.png"
                price={0}
                rating={4.7}
              />
            </div>
          ))}          
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;