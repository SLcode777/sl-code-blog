import { cn, getAllTags, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Unsbscribe page",
  description: "Unsubscribe page",
};

export default async function UnsubPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block titre text-4xl lg:text-5xl">
            TU T&apos;EN VAS DEJA ?
          </h1>
        </div>
      </div>
      <hr className="mt-4 mb-8" />
      <div className="flex flex-wrap gap-3">
        Es-tu sûr(e) de vouloir te désabonner ?{" "}
      </div>
      <Link
        href=""
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full sm:w-fit font-bold my-4 dark:hover:bg-[#FFFCDB]]"
        )}
      >
        Me désabonner
      </Link>
          </div>
  );
}
