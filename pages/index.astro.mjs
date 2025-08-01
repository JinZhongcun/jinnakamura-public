import { c as createComponent, b as renderTemplate, a as addAttribute, r as renderHead, g as defineScriptVars } from '../chunks/astro/server_DPt2DqZq.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const base = "/jinnakamura-public/";
  return renderTemplate(_a || (_a = __template(['<html lang="ja" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"', `><meta name="viewport" content="width=device-width"><title>Jin Nakamura</title><meta name="description" content="Jin Nakamura's personal website / 中村仁のウェブサイト"><script>(function(){`, "\n			// 自動的に日本語版にリダイレクト（将来的にはブラウザの言語設定を検出）\n			window.location.href = base + 'ja/';\n		})();</script>", '</head> <body data-astro-cid-j7pv25f6> <div class="language-selector" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Jin Nakamura</h1> <div class="languages" data-astro-cid-j7pv25f6> <a', ' class="lang-option" data-astro-cid-j7pv25f6> <span class="lang-code" data-astro-cid-j7pv25f6>日本語</span> <span class="lang-name" data-astro-cid-j7pv25f6>Japanese</span> </a> <a', ' class="lang-option" data-astro-cid-j7pv25f6> <span class="lang-code" data-astro-cid-j7pv25f6>English</span> <span class="lang-name" data-astro-cid-j7pv25f6>英語</span> </a> </div> </div> </body></html>'])), addAttribute(`${base}favicon.svg`, "href"), defineScriptVars({ base }), renderHead(), addAttribute(`${base}ja/`, "href"), addAttribute(`${base}en/`, "href"));
}, "/mnt/c/Users/jinsm/jinnakamura/src/pages/index.astro", void 0);
const $$file = "/mnt/c/Users/jinsm/jinnakamura/src/pages/index.astro";
const $$url = "/jinnakamura-public";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
