import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('api/auth/signin');
  }
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 text-center lg:pt-32'>
      <h1 className='mx-auto max-w-4xl font-display text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl'>Unlock <span className='relative whitespace-nowrap text-purple-700'>the power</span> of connection.</h1>
      <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700'>Discover a vibrant online community where you can effortlessly connect with like-minded individuals, share your passions, and engage in meaningful conversations that enrich your social experience.</p>
    </div>
  )
}
