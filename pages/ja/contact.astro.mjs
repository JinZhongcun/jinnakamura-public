import { d as createAstro, c as createComponent, a as addAttribute, r as renderHead, e as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DPt2DqZq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Navigation } from '../../chunks/Navigation_BOFBs9RQ.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://jinzhongcun.github.io");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const pageTitle = "Contact - Jin Nakamura";
  return renderTemplate`<html lang="ja" data-astro-cid-7ofr5yip> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><meta name="description" content="中村仁への連絡方法。研究協力、講演依頼、取材等のお問い合わせはこちらから。">${renderHead()}</head> <body data-astro-cid-7ofr5yip> ${renderComponent($$result, "Navigation", $$Navigation, { "current": "contact", "lang": "ja", "data-astro-cid-7ofr5yip": true })} <main class="main-content" data-astro-cid-7ofr5yip> <div class="page-header" data-astro-cid-7ofr5yip> <h1 class="page-title" data-astro-cid-7ofr5yip>Contact</h1> <p class="page-subtitle" data-astro-cid-7ofr5yip>お問い合わせフォーム</p> </div> <!-- 連絡方法 --> <section class="contact-section" data-astro-cid-7ofr5yip> <div class="contact-intro" data-astro-cid-7ofr5yip> <p data-astro-cid-7ofr5yip>研究協力、講演依頼、取材、学術交流等のお問い合わせをお待ちしております。</p> </div> <!-- メインコンタクトフォーム --> <div class="main-contact" data-astro-cid-7ofr5yip> <h2 data-astro-cid-7ofr5yip>お問い合わせフォーム</h2> <div class="contact-form-container" data-astro-cid-7ofr5yip> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkDfbo2Y0Cn71vjd03lPhRq8sn7mlOldBQ2kncj4c2x9hgrA/viewform?usp=dialog" target="_blank" rel="noopener" class="contact-form-button" data-astro-cid-7ofr5yip>
📝 お問い合わせフォームを開く
</a> <p class="form-note" data-astro-cid-7ofr5yip>※Google Formsが開きます</p> </div> </div> </section> </main> <footer class="site-footer" data-astro-cid-7ofr5yip> <p data-astro-cid-7ofr5yip>&copy; 2024 Jin Nakamura. All rights reserved.</p> </footer>  </body> </html>`;
}, "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/contact.astro", void 0);

const $$file = "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/contact.astro";
const $$url = "/jinnakamura-public/ja/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
