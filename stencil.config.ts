import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export const config: Config = {
  namespace: 'ameh-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    // {
    //   type: 'dist-custom-elements-bundle',
    // },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      // copy: [
      //   { src: '../node_modules/bootstrap-icons/bootstrap-icons.svg', dest: 'assets/bootstrap-icons.svg' }
      // ]
    },
  ],
  plugins: [
    postcss({
      plugins: [ 
        tailwindcss("./tailwind.config.js"),
        autoprefixer()
      ],
      // injectGlobalPaths: [
      //   'src/css/ameh-web-components.css'
      // ]
    })
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  }
};