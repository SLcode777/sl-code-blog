import { cn, formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Tag } from "./tag";
import PostImage from "@/components/post-image";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  image: string;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  image,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div className="flex flex-row justify-between gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">
            <Link href={"/" + slug}>{title}</Link>
          </h2>

          <div className="flex gap-2">
            {tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="hidden md:flex max-w-[100px]">
          <PostImage
            imageUrl={image ?? "/img/postimg012.webp"}
            altText={`Image d'illustration de ${title}`}
            width={480}
            height={480}
          />
        </div>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>{" "}
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
