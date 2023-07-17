import Link from 'next/link';

export default async function Blog() {
  const server = process.env.SERVER;
  const posts = await fetch(`${server}/api/content`).then((res) =>
    res.json()
  );
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 text-center lg:pt-32'>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}