export const dynamic = 'force-dynamic';

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const server = process.env.SERVER;
  const posts: Post[] = await fetch(`${server}/api/content`).then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
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