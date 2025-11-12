// src/app/(site)/blog/[slug]/page.tsx
import { getAllPosts, getPost } from "@/lib/mdx";
import type { Metadata } from "next";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { frontmatter } = await getPost(params.slug);
  return {
    title: `${frontmatter.title} — Bryan Gunawan`,
    description: frontmatter.description,
  };
}

export default async function PostPage({ params }: Params) {
  const { frontmatter, content } = await getPost(params.slug);

  return (
    <article className="prose prose-zinc dark:prose-invert">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-muted-foreground">
        {new Date(frontmatter.date).toDateString()}
      </p>
      {content /* 👈 insert element, not <Content /> */}
    </article>
  );
}
