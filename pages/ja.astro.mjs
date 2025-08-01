import { d as createAstro, c as createComponent, a as addAttribute, r as renderHead, e as renderComponent, f as renderScript, b as renderTemplate } from '../chunks/astro/server_DPt2DqZq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Navigation } from '../chunks/Navigation_BOFBs9RQ.mjs';
import { a as getRecentNews, g as getBadgeClass } from '../chunks/newsUtils_MtQNHPDG.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://jinzhongcun.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Jin Nakamura - \u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u30C0\u30A4\u30CA\u30DF\u30AF\u30B9\u7814\u7A76\u8005";
  const recentNews = getRecentNews(3);
  return renderTemplate`<html lang="ja" data-astro-cid-6h4bbhta> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><meta name="description" content="自己組織化するネットワークの構造とそのダイナミクスに興味があります。リザバーコンピューティング、LLM、複雑系科学の研究者。">${renderHead()}</head> <body data-astro-cid-6h4bbhta> ${renderComponent($$result, "Navigation", $$Navigation, { "current": "home", "lang": "ja", "data-astro-cid-6h4bbhta": true })} <main class="main-content" data-astro-cid-6h4bbhta> <!-- Hero Section (meltingrabbit.com風の大型ビジュアル区間) --> <section class="hero-section" data-astro-cid-6h4bbhta> <div class="network-background" data-astro-cid-6h4bbhta> <canvas id="networkCanvas" data-astro-cid-6h4bbhta></canvas> </div> <div class="hero-content" data-astro-cid-6h4bbhta> <h1 class="hero-title" data-astro-cid-6h4bbhta>自己組織化するネットワークの構造と<br data-astro-cid-6h4bbhta>そのダイナミクスに興味があります</h1> </div> </section> <!-- Recent Updates Section --> <section class="updates-section" data-astro-cid-6h4bbhta> <h2 class="section-title" data-astro-cid-6h4bbhta>Recent Updates</h2> <div class="updates-list" data-astro-cid-6h4bbhta> ${recentNews.map((news) => renderTemplate`<article class="update-item" data-astro-cid-6h4bbhta> <span class="update-date" data-astro-cid-6h4bbhta>${news.month_day}</span> <span${addAttribute(`update-badge ${getBadgeClass(news.badge)}`, "class")} data-astro-cid-6h4bbhta>【${news.badge}】</span> <span class="update-content" data-astro-cid-6h4bbhta>${news.title}</span> </article>`)} </div> </section> <!-- News Link Section --> <section class="news-link-section" data-astro-cid-6h4bbhta> <div class="news-link-container" data-astro-cid-6h4bbhta> <a href="/jinnakamura-public/ja/news" class="news-link-card" data-astro-cid-6h4bbhta> <span class="news-link-text" data-astro-cid-6h4bbhta>すべてのニュースを見る</span> <div class="news-link-arrow" data-astro-cid-6h4bbhta>→</div> </a> </div> </section> <!-- Page Navigation Section --> <section class="navigation-section" data-astro-cid-6h4bbhta> <h2 class="section-title" data-astro-cid-6h4bbhta>Site Navigation</h2> <div class="navigation-grid" data-astro-cid-6h4bbhta> <a href="/jinnakamura-public/ja/about" class="nav-card" data-astro-cid-6h4bbhta> <h3 data-astro-cid-6h4bbhta>About</h3> <p data-astro-cid-6h4bbhta>プロフィール</p> <div class="nav-arrow" data-astro-cid-6h4bbhta>→</div> </a> <a href="/jinnakamura-public/ja/research" class="nav-card" data-astro-cid-6h4bbhta> <h3 data-astro-cid-6h4bbhta>Research</h3> <p data-astro-cid-6h4bbhta>研究・学会発表</p> <div class="nav-arrow" data-astro-cid-6h4bbhta>→</div> </a> <a href="/jinnakamura-public/ja/activity" class="nav-card" data-astro-cid-6h4bbhta> <h3 data-astro-cid-6h4bbhta>Activity</h3> <p data-astro-cid-6h4bbhta>プロジェクト・継続活動</p> <div class="nav-arrow" data-astro-cid-6h4bbhta>→</div> </a> <a href="/jinnakamura-public/ja/achievement" class="nav-card" data-astro-cid-6h4bbhta> <h3 data-astro-cid-6h4bbhta>Achievement</h3> <p data-astro-cid-6h4bbhta>Research・Activityの成果</p> <div class="nav-arrow" data-astro-cid-6h4bbhta>→</div> </a> <a href="/jinnakamura-public/ja/portfolio" class="nav-card" data-astro-cid-6h4bbhta> <h3 data-astro-cid-6h4bbhta>Portfolio</h3> <p data-astro-cid-6h4bbhta>Research・Activityの記事</p> <div class="nav-arrow" data-astro-cid-6h4bbhta>→</div> </a> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkDfbo2Y0Cn71vjd03lPhRq8sn7mlOldBQ2kncj4c2x9hgrA/viewform" target="_blank" class="nav-card nav-card-contact" data-astro-cid-6h4bbhta> <h3 data-astro-cid-6h4bbhta>Contact</h3> <p data-astro-cid-6h4bbhta>お問い合わせフォーム</p> <div class="nav-arrow" data-astro-cid-6h4bbhta>→</div> </a> </div> </section> </main> <footer class="site-footer" data-astro-cid-6h4bbhta> <p data-astro-cid-6h4bbhta>&copy; 2024 Jin Nakamura. All rights reserved.</p> </footer>  ${renderScript($$result, "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/index.astro", void 0);

const $$file = "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/index.astro";
const $$url = "/jinnakamura-public/ja";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
