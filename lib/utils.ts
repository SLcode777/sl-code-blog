//ici on a de petites fonctions utilitaires

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { post } from "#site/content";
import { slug } from "github-slugger";

//petite fonction qui va gérer les classes de tailwind et le "merge" des classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//fonction de formatage de dates
export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

//fonction pour trier les posts
export function sortPosts(posts: Array<post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

//fonction pour récupérer tous les tags de chaque post et les additionner afin de les compter
export function getAllTags(posts: Array<post>) {
  const tags: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });
  return tags;
}

//fonction pour trier les tags par nombre de parution
export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

//fonction pour "slugifier" les tags et filtrer les posts par tag
export function getPostsByTagSlug(posts: Array<post>, tag: string) {
  return posts.filter((post) => {
    if (!post.tags) return false;
    const slugifiedTags = post.tags.map((tag) => slug(tag));
    return slugifiedTags.includes(tag);
  });
}
