import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle:'./src/global/global.css',
  globalScript:'./src/global/global.ts',
  namespace: 'image-picker',
  buildDist:true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{src:'_redirects'}],
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
