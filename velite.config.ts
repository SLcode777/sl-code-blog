//Ici on gère les paramètres liés à Velite, la librairie qui permet de gérer les posts au format mdx

import { defineConfig, defineCollection, s } from "velite"; //s va servir pour faire un schéma de validation des propriétés des posts
import rehypePrettyCode from "rehype-pretty-code"; //un plugin pour pouvoir avoir de jolis blocs de code dans les posts
import rehypeAutoLinkHeadings from "rehype-autolink-headings"; //pour ajouter des liens automatiques sur les headings dans les posts
import rehypeSlug from "rehype-slug"; //pour créer un slug pour les liens des headings

const computedFields = <T extends { slug: string }>(data: T) => ({
  //permet de générer un slug à partir d'un path
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  //ici on va configurer les différentes propriétés d'un post
  name: "post",
  pattern: "blog/**/*.mdx", //definit que les posts vont se trouver dans tous les sous-dossiers du dossier "blog" et au format MDX
  schema: s //definit les propriétés du post et leur type
    .object({
      slug: s.path(), //ici, ça va récupérer le chemin du fichier mdx et il sera transformé en slug juste après
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
      tags: s.array(s.string()).optional(),
      image: s.string().optional(),
    })
    .transform(computedFields), //ici, ça utilise la fonction vue plus haut pour transformer le path en slug
});

//ici ce sont les paramètres globaux de la librairie
export default defineConfig({
  root: "content", //definit dans quel dossier seront les posts
  output: {
    //et ici ça definit les différents dossiers utilisés par Velite
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts }, //definit les différentes collections
  mdx: {
    rehypePlugins: [
      //definit les plugins (vu plus haut)
      rehypeSlug,
      [rehypePrettyCode, { theme: "rose-pine" }],
      [
        rehypeAutoLinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
