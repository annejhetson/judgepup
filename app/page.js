import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center p-8'>
      <div className='h-60 w-60 my-5 relative'>
        <Image
          src='/judge.png'
          fill='cover'
          objectFit='cover'
          alt='Judge'
          className='rounded-r-2xl'
        />
      </div>
      <h1 className='text-4xl font-bold mb-6'>Is Your Dog Judging You?</h1>
      <p className='mb-8'>
        Take this scientifically questionable quiz to find out!
      </p>
      <Link href='/quiz'>
        <div className='px-6 py-3 bg-blue-600 text-white rounded-full'>
          Take the Quiz
        </div>
      </Link>
    </div>
  );
}
