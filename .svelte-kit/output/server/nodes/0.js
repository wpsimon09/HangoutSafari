export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_layout.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/0.6e440985.js",
  "_app/immutable/chunks/index.dada67a2.js",
];
export const stylesheets = ["_app/immutable/assets/0.77fa6d6b.css"];
export const fonts = [];
