import { Config } from '@stencil/core';
import { BuildCtx, CompilerCtx, OutputTargetCustom } from '@stencil/core/internal';
import fs from 'fs';
import path from 'path';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget, ComponentModelConfig } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  // {
  //   elementSelectors: ['planet-input'],
  //   targetAttr: 'value',
  //   event: 'onChange',
  //   type: 'boolean',
  // },
];

const vueComponentModels: ComponentModelConfig[] = [];

/**
 * angular-output-target-fix.ts
 *
 * @author @razvangeangu
 */
 
 const runAngularOutputTargetFix = async (outputTarget: IAngularOutputTarget) => {
   const directivesUtilsPath = path.resolve(__dirname, outputTarget.directivesUtilsFile);
 
   let directivesUtilsString = await fs.promises.readFile(directivesUtilsPath, { encoding: 'utf-8' });
   directivesUtilsString = directivesUtilsString.replace(
     "import { fromEvent } from 'rxjs';",
     "import { EventEmitter } from '@angular/core';",
   );
   directivesUtilsString = directivesUtilsString.replace(
     'instance[eventName] = fromEvent(el, eventName)',
     'instance[eventName] = new EventEmitter()',
   );
 
   await fs.promises.writeFile(directivesUtilsPath, directivesUtilsString);
 };
 
 interface IAngularOutputTarget {
   directivesUtilsFile: string;
 }
 
 export const angularOutputTargetFix = (
   outputTarget: IAngularOutputTarget,
 ): OutputTargetCustom => ({
   type: 'custom',
   name: 'angular-library-fix',
   generator: async (_config: Config, compilerCtx: CompilerCtx, buildCtx: BuildCtx) => {
     const timespan = buildCtx.createTimeSpan('generate angular proxy utils fix started', true);
 
     await new Promise<void>(resolve => {
       compilerCtx.events.on('buildLog', log => {
         if (log.messages.findIndex(elm => elm.includes('generate angular-library finished')) !== -1) {
           resolve();
         }
       });
     });
 
     compilerCtx.events.on('buildLog', log => {
       if (
         log.messages.findIndex(elm => elm.includes('build finished, watching for changes...')) !== -1
       ) {
         runAngularOutputTargetFix(outputTarget);
       }
     });
 
     await runAngularOutputTargetFix(outputTarget);
 
     timespan.finish('generate angular proxy utiils fix finished');
   },
 });

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
    angularOutputTargetFix({
      directivesUtilsFile:
        "../planet-ng/src/directives/angular-component-lib/utils.ts",
    }),
    reactOutputTarget({
      componentCorePackage:  '@siteplanet/planet-css',
      proxiesFile: '../planet-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
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
