// stencil.config.ts
import { Config } from '@stencil/core';
import { CopyTask } from '@stencil/core/internal';

const copyTasks = [
  {
    src: '../../../design-systems/packages/mercury/dist/bundles/css/base/base.css',
    dest: 'base.css',
  },
  {
    src: '../../../design-systems/packages/mercury/dist/bundles/css',
    dest: 'assets/css/',
  },
  {
    src: '../../../design-systems/packages/mercury/dist/assets/fonts',
    dest: 'assets/fonts/',
  },
  {
    src: '../../../design-systems/packages/mercury/dist/assets/icons',
    dest: 'assets/icons/',
  },
  {
    src: '../node_modules/@genexus/mercury/dist/',
    dest: 'mercury',
  },
  {
    src: '../node_modules/@genexus/chameleon-controls-library/dist',
    dest: 'chameleon',
  },
  {
    src: '../node_modules/@genexus/mercury/dist/assets',
    dest: 'assets',
  },
] as const satisfies CopyTask[];

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'dist',
      copy: copyTasks,
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: copyTasks,
    },
  ],
};
