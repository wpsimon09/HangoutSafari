export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/fallbacks/error.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/1.962b301c.js",
  "_app/immutable/chunks/index.dada67a2.js",
  "_app/immutable/chunks/singletons.52c8995b.js",
];
export const stylesheets = [];
export const fonts = [];
