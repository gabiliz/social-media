"use client"

import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { FunctionComponent } from 'react';

type Post = {
	title: string;
	content: string;
	slug: string;
};

type Props = {
	params: { slug: string };
};

const Blog: FunctionComponent<Props> = async () => {
  const server = process.env.SERVER;
	const posts: Post[] = await fetch(`${server}/api/content`).then(
		(res) => res.json()
	);

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 lg:pt-24'>
      <ul className='divide-y'>
        {posts.map((post: any) => (
          <div className='p-8' key={post.slug}>
            <li className='text-2xl' key={post.slug}>
              <Link className='flex items-center' href={`/blog/${post.slug}`}>
                <p className='text-gray-800'>{post.title}</p>
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
              </Link>
            </li>
            <p className='pl-2 text-gray-500'>{post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Blog;