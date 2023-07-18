import { FC, FunctionComponent } from 'react';

type Post = {
	title: string;
	content: string;
	slug: string;
};

type Props = {
	params: { slug: string };
};

// export const generateStaticParams = async () => {
// 	const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
// 		(res) => res.json()
// 	);

// 	return {
// 		paths: posts.map((post) => ({
// 			slug: post.slug,
// 		})),
// 	};
// };

const BlogPostPage: FunctionComponent<Props> = async ({ params }) => {
  const server = process.env.SERVER;
	const posts: Post[] = await fetch(`${server}/api/content`).then(
		(res) => res.json()
	);

	const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 lg:pt-24'>
      <h1 className="text-2xl mb-10">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPostPage;