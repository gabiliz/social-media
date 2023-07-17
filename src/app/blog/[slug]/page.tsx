export const revalidate = 420;

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
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}