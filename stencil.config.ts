import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget, ComponentModelConfig } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['planet-input'],
    event: 'changed',
    targetAttr: 'value',
    type: 'text',
  },
];

const vueComponentModels: ComponentModelConfig[] = [];

export const config: Config = {
  namespace: 'planet',
  taskQueue: 'async',
  globalStyle: './src/global/variables.css',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@siteplanet/planet-css',
      directivesProxyFile: '../planet-ng/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    // reactOutputTarget({
    //   componentCorePackage: 'planet',
    //   proxiesFile: '../planet-react/src/components.ts',
    // }),
    // vueOutputTarget({
    //   componentCorePackage: 'planet',
    //   proxiesFile: '../planet-vue/src/proxies.ts',
    //   componentModels: vueComponentModels,
    // }),
    {
      type: 'dist',
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
  plugins: [
    sass()
  ]
};
