/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export { default as wrapRootElement } from './src/app/redux-wrapper';

export function onInitialClientRender() {
  require('typeface-merriweather')
  require('typeface-source-sans-pro')
}
