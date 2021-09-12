import type { NextPage } from 'next';
import Image from 'next/image';
import Title from '@/components/common/title';
import { DescriptionSet } from 'types/DescriptionSet.type';

const abouts: DescriptionSet = {
  img_src: '/images/future.png',
  img_alt: 'future',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};

const About: NextPage = () => {
  return (
    <div className='md:object-scale-down pt-80 lg:pt-48 mx-auto -mt-72 lg:-mt-36 bg-cover bg-future-sp lg:bg-future'>
      <section
        className=' flex flex-col lg:flex-row lg:mx-auto lg:max-w-screen-lg text-center'
        id='future'
      >
        <div className='lg:w-1/2'>
          <Title japanese='3年後にやりたいこと' english='future' position='start'></Title>
          <p className='mx-4 mb-4 lg:ml-0 text-left'>{abouts.description}</p>
        </div>

        <div className='lg:flex lg:flex-row lg:w-1/2 text-center'>
          <div className='object-bottom lg:object-center mx-auto'>
            <Image
              src={abouts.img_src}
              alt={abouts.img_alt}
              width={480}
              height={251}
              objectFit='contain'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;