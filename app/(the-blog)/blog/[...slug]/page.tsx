import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { ProfileForm } from "@/components/newsletter-form";
import PostImage from "@/components/post-image";
import { Tag } from "@/components/tag";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }
  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,

    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <>
      <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
        <PostImage
          imageUrl={post.image ?? "/img/postimg012.webp"}
          altText={`Image d'illustration de ${post.title}`}
          width={480}
          height={480}
        />
        <h1 className="mb-2 titre text-foreground">{post.title}</h1>
        <div className="flex flex-row gap-4">
          <div className="text-sm italic leading-6">
            {formatDate(post.date)}
          </div>
          <div className="flex gap-2 mb-2">
            {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
          </div>
        </div>
        {post.description ? (
          <p className="text-xl mt-0 text-muted-foreground border-b pb-6">
            {post.description}
          </p>
        ) : null}
        <p className="text-muted-foreground text-justify">
          <MDXContent code={post.body} />
        </p>
      </article>
      <section className="container max-w-3xl py-6 lg:py-10 flex flex-col space-y-6 mt-30">
        <ProfileForm></ProfileForm>
      </section>
    </>
  );
}
