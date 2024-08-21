// Native file

export type { DOMProps, WebViewRef } from './www-types';

// TODO: Maybe this could be a bundler global instead.
/** @returns `true` when the current JS running in a DOM Component environment. */
export const IS_DOM = false;
