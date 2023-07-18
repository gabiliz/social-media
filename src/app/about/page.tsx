import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

export default async function About() {
  return (
    <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 text-center lg:pt-32'>
			<div className="flex justify-center mb-10">
				<p className="text-5xl font-semibold">Meet our Team!</p>
			</div>
			<div className="flex justify-center">
				<div className="grid grid-cols-3 gap-8">
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
						<div className="flex flex-col items-center py-10">
								<Image className="w-50 h-50 mb-3 rounded-3xl" src="/Mario.jpg" alt="Mario image"/>
								<h5 className="mb-1 text-xl font-medium text-gray-900">Mario</h5>
								<span className="text-sm text-gray-500 dark:text-gray-400">CEO</span>
						</div>
					</div>
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
						<div className="flex flex-col items-center py-10">
								<Image className="w-50 h-50 mb-3 rounded-3xl" src="/Luigi.jpg" alt="Mario image"/>
								<h5 className="mb-1 text-xl font-medium text-gray-900">Luigi</h5>
								<span className="text-sm text-gray-500 dark:text-gray-400">CEO</span>
						</div>
					</div>
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
						<div className="flex flex-col items-center py-10">
								<Image className="w-50 h-50 mb-3 rounded-3xl" src="/Peach.jpg" alt="Mario image"/>
								<h5 className="mb-1 text-xl font-medium text-gray-900">Peach</h5>
								<span className="text-sm text-gray-500 dark:text-gray-400">CTO</span>
						</div>
					</div>
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
						<div className="flex flex-col items-center py-10">
								<Image className="w-50 h-50 mb-3 rounded-3xl" src="/Yoshi.jpg" alt="Mario image"/>
								<h5 className="mb-1 text-xl font-medium text-gray-900">Yoshi</h5>
								<span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
						</div>
					</div>
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
						<div className="flex flex-col items-center py-10">
								<Image className="w-50 h-50 mb-3 rounded-3xl" src="/Donkey-Kong.jpg" alt="Mario image"/>
								<h5 className="mb-1 text-xl font-medium text-gray-900">Donkey Kong</h5>
								<span className="text-sm text-gray-500 dark:text-gray-400">Developer</span>
						</div>
					</div>
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
						<div className="flex flex-col items-center py-10">
								<Image className="w-50 h-50 mb-3 rounded-3xl" src="/Bowser.jpg" alt="Mario image"/>
								<h5 className="mb-1 text-xl font-medium text-gray-900">Bowser</h5>
								<span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
						</div>
					</div>
				</div>
			</div>
    </main>
  );
}
