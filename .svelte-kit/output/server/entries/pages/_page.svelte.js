import {
  c as create_ssr_component,
  v as validate_component,
} from "../../chunks/index.js";
const Example = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Example, "Example").$$render(
    $$result,
    {},
    {},
    {}
  )}`;
});
export { Page as default };
