import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget, ComponentModelConfig } from '@stencil/vue-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
];

const vueComponentModels: ComponentModelConfig[] = [];

export const config: Config = {
  namespace: 'planet',
  globalStyle: './src/global/variables.css',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'planet-css',
      directivesProxyFile: '../planet-ng/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: 'planet-css',
      proxiesFile: '../planet-react/src/components.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'planet-css',
      proxiesFile: '../planet-vue/src/proxies.ts',
      componentModels: vueComponentModels,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
