import { c as createComponent, b as renderTemplate } from '../chunks/astro/server_DPt2DqZq.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$IndexBackup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`backup`;
}, "/mnt/c/Users/jinsm/jinnakamura/src/pages/index_backup.astro", void 0);

const $$file = "/mnt/c/Users/jinsm/jinnakamura/src/pages/index_backup.astro";
const $$url = "/jinnakamura-public/index_backup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$IndexBackup,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
