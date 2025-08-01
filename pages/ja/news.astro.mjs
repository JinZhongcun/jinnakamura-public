import { d as createAstro, c as createComponent, a as addAttribute, r as renderHead, e as renderComponent, f as renderScript, b as renderTemplate } from '../../chunks/astro/server_DPt2DqZq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { l as loadNewsData, g as getBadgeClass } from '../../chunks/newsUtils_MtQNHPDG.mjs';
import { $ as $$Navigation } from '../../chunks/Navigation_BOFBs9RQ.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://jinzhongcun.github.io");
const $$News = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$News;
  const pageTitle = "News - Jin Nakamura";
  const allNews = loadNewsData();
  [...new Set(allNews.map((news) => news.badge))];
  const allYears = [...new Set(allNews.map((news) => news.year))].sort().reverse();
  return renderTemplate`<html lang="ja" data-astro-cid-pebrbgv2> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><meta name="description" content="中村仁の最新情報、研究発表、受賞、活動報告の一覧。">${renderHead()}</head> <body data-astro-cid-pebrbgv2> ${renderComponent($$result, "Navigation", $$Navigation, { "current": "news", "lang": "ja", "data-astro-cid-pebrbgv2": true })} <main class="main-content" data-astro-cid-pebrbgv2> <div class="page-header" data-astro-cid-pebrbgv2> <h1 class="page-title" data-astro-cid-pebrbgv2>News</h1> <p class="page-subtitle" data-astro-cid-pebrbgv2>最新情報・活動報告</p> </div> <!-- フィルターセクション --> <div class="filter-section" data-astro-cid-pebrbgv2> <!-- 年別フィルター --> <div class="filter-container" data-astro-cid-pebrbgv2> <div class="filter-label" data-astro-cid-pebrbgv2>年別</div> <div class="filter-buttons year-filters" data-astro-cid-pebrbgv2> <button class="filter-btn year-filter active" data-year="all" data-astro-cid-pebrbgv2>すべて</button> ${allYears.map((year) => renderTemplate`<button class="filter-btn year-filter"${addAttribute(year, "data-year")} data-astro-cid-pebrbgv2>${year}</button>`)} </div> </div> <!-- カテゴリ別フィルター --> <div class="filter-container" data-astro-cid-pebrbgv2> <div class="filter-label" data-astro-cid-pebrbgv2>カテゴリ別</div> <div class="filter-buttons category-filters" data-astro-cid-pebrbgv2> <button class="filter-btn category-filter active" data-filter="all" data-astro-cid-pebrbgv2>すべて</button> <button class="filter-btn category-filter" data-filter="Position" data-astro-cid-pebrbgv2>Position</button> <button class="filter-btn category-filter" data-filter="Presentation" data-astro-cid-pebrbgv2>Presentation</button> <button class="filter-btn category-filter" data-filter="Launch" data-astro-cid-pebrbgv2>Launch</button> <button class="filter-btn category-filter" data-filter="Achievement" data-astro-cid-pebrbgv2>Achievement</button> </div> </div> </div> <!-- ニュース一覧 --> <div class="news-container" data-astro-cid-pebrbgv2> ${allNews.map((news) => renderTemplate`<article${addAttribute(`news-item ${getBadgeClass(news.badge)} ${news.links && news.links !== "" ? "clickable-item" : ""}`, "class")}${addAttribute(news.badge, "data-badge")}${addAttribute(news.year, "data-year")}${addAttribute(news.links && news.links !== "" ? news.links : "", "data-href")} data-astro-cid-pebrbgv2> <div class="news-date" data-astro-cid-pebrbgv2> <span class="year" data-astro-cid-pebrbgv2>${news.year}</span> <span class="month-day" data-astro-cid-pebrbgv2>${news.month_day}</span> </div> <div class="news-badge-col" data-astro-cid-pebrbgv2> <div${addAttribute(`news-badge ${getBadgeClass(news.badge)}`, "class")} data-astro-cid-pebrbgv2>【${news.badge}】</div> </div> <h3 class="news-title" data-astro-cid-pebrbgv2>${news.title}</h3> <div class="news-links-col" data-astro-cid-pebrbgv2> ${news.links && news.links !== "" ? news.links.startsWith("/") ? renderTemplate`<div class="row-arrow" data-astro-cid-pebrbgv2></div>` : renderTemplate`<div class="news-links" data-astro-cid-pebrbgv2> <a${addAttribute(news.links, "href")} target="_blank" class="news-link" data-astro-cid-pebrbgv2>[学会リンク]</a> </div>` : renderTemplate`<div data-astro-cid-pebrbgv2></div>`} </div> </article>`)} </div> </main> <footer class="site-footer" data-astro-cid-pebrbgv2> <p data-astro-cid-pebrbgv2>&copy; 2024 Jin Nakamura. All rights reserved.</p> </footer>  ${renderScript($$result, "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/news.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/news.astro", void 0);

const $$file = "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/news.astro";
const $$url = "/jinnakamura-public/ja/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$News,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
