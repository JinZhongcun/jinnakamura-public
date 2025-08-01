import { d as createAstro, c as createComponent, m as maybeRenderHead, a as addAttribute, b as renderTemplate } from './astro/server_DPt2DqZq.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://jinzhongcun.github.io");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { current = "", lang = "ja" } = Astro2.props;
  const basePath = lang === "ja" ? "/ja" : "/en";
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-pux6a34n> <nav class="main-nav" data-astro-cid-pux6a34n> <div class="nav-logo" data-astro-cid-pux6a34n> <a${addAttribute(basePath + "/", "href")} data-astro-cid-pux6a34n>Jin Nakamura</a> </div> <ul class="nav-menu" data-astro-cid-pux6a34n> <li data-astro-cid-pux6a34n><a${addAttribute(basePath + "/about", "href")}${addAttribute(current === "about" ? "current" : "", "class")} data-astro-cid-pux6a34n>About</a></li> <li data-astro-cid-pux6a34n><a${addAttribute(basePath + "/news", "href")}${addAttribute(current === "news" ? "current" : "", "class")} data-astro-cid-pux6a34n>News</a></li> <li data-astro-cid-pux6a34n><a${addAttribute(basePath + "/research", "href")}${addAttribute(current === "research" ? "current" : "", "class")} data-astro-cid-pux6a34n>Research</a></li> <li data-astro-cid-pux6a34n><a${addAttribute(basePath + "/activity", "href")}${addAttribute(current === "activity" ? "current" : "", "class")} data-astro-cid-pux6a34n>Activity</a></li> <li data-astro-cid-pux6a34n><a${addAttribute(basePath + "/achievement", "href")}${addAttribute(current === "achievement" ? "current" : "", "class")} data-astro-cid-pux6a34n>Achievement</a></li> <li data-astro-cid-pux6a34n><a${addAttribute(basePath + "/portfolio", "href")}${addAttribute(current === "portfolio" ? "current" : "", "class")} data-astro-cid-pux6a34n>Portfolio</a></li> <li data-astro-cid-pux6a34n><a${addAttribute(lang === "ja" ? "/en/" : "/ja/", "href")} class="lang-switch" data-astro-cid-pux6a34n>${lang === "ja" ? "\u{1F310}en" : "\u{1F310}ja"}</a></li> <li data-astro-cid-pux6a34n><a href="https://docs.google.com/forms/d/e/1FAIpQLSfkDfbo2Y0Cn71vjd03lPhRq8sn7mlOldBQ2kncj4c2x9hgrA/viewform" target="_blank" class="contact-special" data-astro-cid-pux6a34n>Contact</a></li> </ul> </nav> </header> `;
}, "/mnt/c/Users/jinsm/jinnakamura/src/components/Navigation.astro", void 0);

export { $$Navigation as $ };
