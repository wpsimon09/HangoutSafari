import {
  c as create_ssr_component,
  e as escape,
} from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><h1>Nice example of an very simple component</h1>
	<p>${escape(data.message)}</p></div>`;
});
export { Page as default };
