//Ce fichier configure Next.js et Webpack pour utiliser un plugin personnalisé qui optimise ou modifie le processus de compilation en fonction de l'environnement (développement ou production).
//*Webpack est un module de construction (ou "bundler") intégré à NextJS. Il analyse les applications qui contiennent beaucoup de fichiers JavaScript, CSS, et d'autres ressources et les regroupe en un ou plusieurs fichiers optimisés, plus faciles à gérer et à charger pour les navigateurs web.
//J'imagine que ce code est venu s'ajouter lorsqu'on a installé Velite ? à vérifier

import { build } from "velite";

/** @type {import('next').NextConfig} */
export default {
  // othor next config here...
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin()); //Ajoute le plugin VeliteWebpackPlugin aux plugins déjà présents dans Webpack*. 
    return config;
  },
};

class VeliteWebpackPlugin { //définit la configuration du plugin. C'est technique mais en gros ça gère la compilation et le build. 
  static started = false;
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options;
  }
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs !!!
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      this.options.watch = this.options.watch ?? dev;
      this.options.clean = this.options.clean ?? !dev;
      await build(this.options); // start velite
    });
  }
}
