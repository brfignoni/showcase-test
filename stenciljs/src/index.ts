/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */

// Add types from Chameleon, without importing any JS in the final bundle.
// Don't use 'import "@genexus/chameleon-controls-library"'
typeof import('@genexus/chameleon-controls-library/dist/types/index');

export { format } from './utils/utils';
export type * from './components.d.ts';
