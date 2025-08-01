import { d as createAstro, c as createComponent, a as addAttribute, r as renderHead, e as renderComponent, f as renderScript, b as renderTemplate } from '../../chunks/astro/server_DPt2DqZq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Navigation } from '../../chunks/Navigation_BOFBs9RQ.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

// BibTeX形式の研究実績を管理


// BibTeXデータを直接埋め込み（publications.bibと同期）
const bibtexData = `
@inproceedings{nakamura2024reservoir,
  title={Reservoir Computing-Based Model of Action Planning: Emulating Prefrontal Cortex Functions with Dynamic Synapses and Reward-Based Learning},
  author={Nakamura, Jin and Katori, Yuichi},
  booktitle={2024 IEEE World Congress on Computational Intelligence (IEEE WCCI 2024)},
  venue={PACIFICO Yokohama, Yokohama, Japan},
  year={2024},
  month={June--July},
  day={30--5},
  type={Oral Presentation},
  url={https://2024.ieeewcci.org/},
  organization={IEEE Computational Intelligence Society}
}

@inproceedings{nakamura2025siam,
  title={Reservoir Computing with Short-Term Synaptic Plasticity for Goal-Oriented Action Planning},
  author={Nakamura, Jin and Katori, Yuichi and Suzuki, Hideyuki and Shirasaka, Sho},
  booktitle={SIAM Conference on Applications of Dynamical Systems (DS25)},
  venue={Denver, Colorado, U.S.},
  year={2025},
  month={May},
  day={11--15},
  type={Oral Presentation},
  url={https://www.siam.org/conferences-events/siam-conferences/ds25/},
  publisher={SIAM}
}

@inproceedings{nakamura2024nolta,
  title={Adaptive Mechanisms in Reservoir Computing: Integrating STP for Enhanced Learning Efficiency},
  author={Nakamura, Jin and Katori, Yuichi},
  booktitle={The 2024 International Symposium on Nonlinear Theory and Its Applications (NOLTA2024)},
  venue={Ha Long Bay, Vietnam},
  year={2024},
  month={December},
  day={3--6},
  type={Oral & Poster Presentation},
  award={Best Student Paper Award},
  url={https://www.ieice.org/nolta/symposium/archive/2024/HP/index.html},
  organization={IEICE NOLTA Society}
}

@inproceedings{nakamura2024dynamics,
  title={An Analysis of Dynamics in Reservoir Computing: Reward-Based Learning and Synaptic Plasticity for Action Planning},
  author={Nakamura, Jin and Katori, Yuichi},
  booktitle={Dynamics Days Sapporo 2024 (DD2024)},
  venue={Sapporo, Japan},
  year={2024},
  month={December},
  day={10},
  type={Poster Presentation},
  url={https://sites.google.com/view/dynamicsdays24/},
  organization={Dynamics Days Network}
}

@inproceedings{nakamura2023bfbc,
  title={Information Representations Obtained by Reward-Modulated Reservoir Computing with Short-Term Synaptic Plasticity},
  author={Nakamura, Jin and Katori, Yuichi},
  booktitle={The 11th RIEC International Symposium on Brain Functions and Brain Computer (BFBC2023)},
  venue={RIEC, Tohoku University, Japan},
  year={2023},
  month={February},
  day={17--18},
  type={Poster Presentation},
  url={https://www.nanospin.riec.tohoku.ac.jp/RIEC_Sympo/2023/index.html},
  organization={RIEC, Tohoku University},
  note={Hybrid format, 104 participants from 6 countries}
}

@inproceedings{nakamura2022neuro,
  title={Construction and Analysis of a Computational Model of Motion Planning Based on Reward-Modulated Reservoir Computing with Dynamic Synapses},
  author={Nakamura, Jin and Katori, Yuichi},
  booktitle={NEURO2022},
  venue={Okinawa Convention Center, Ginowan-shi, Okinawa, Japan},
  year={2022},
  month={June--July},
  day={30--3},
  type={Poster Presentation},
  url={https://neuro2022.jnss.org/},
  organization={日本神経回路学会 (Japan Neural Network Society)},
  note={Joint conference with 45th Japan Neuroscience Society and 65th Japanese Society for Neurochemistry}
}

@inproceedings{nakamura2025nlp,
  title={リザバー計算に触発された軽量型Transformerの提案：重み共有を用いた計算の効率化と性能評価},
  author={中村仁 and 加藤万理子 and 黒岩蒼太郎 and 崎野也真人 and 田中剛平 and 山下洋史 and 鈴木秀幸 and 白坂将},
  booktitle={言語処理学会第31回年次大会（NLP2025）},
  venue={Dejima Messe Nagasaki (Hybrid format)},
  year={2025},
  month={March},
  day={10--14},
  type={Oral Presentation},
  url={https://anlp.jp/nlp2025/},
  organization={言語処理学会 (Association for Natural Language Processing)}
}

@inproceedings{nakamura2025mitou,
  title={リザバーコンピューティング技術に触発された軽量型自然言語処理モデルの開発},
  author={中村仁},
  booktitle={未踏会議2025 未踏ターゲット事業代表者発表},
  venue={Tokyo Midtown Hall, Tokyo, Japan},
  year={2025},
  month={March},
  day={9},
  type={Invited Oral Presentation},
  url={https://www.ipa.go.jp/jinzai/mitou/mitoukaigi/},
  organization={IPA 独立行政法人情報処理推進機構}
}

@inproceedings{nakamura2025mitou,
  title={リザバーコンピューティング技術に触発された軽量型自然言語処理モデルの開発},
  author={中村仁},
  booktitle={未踏会議2025 未踏ターゲット事業代表者発表},
  venue={Tokyo Midtown Hall, Tokyo, Japan},
  year={2025},
  month={March},
  day={9},
  type={Invited Oral Presentation},
  url={https://www.ipa.go.jp/jinzai/mitou/mitoukaigi/},
  organization={IPA 独立行政法人情報処理推進機構}
}

@inproceedings{nakamura2024oacis,
  title={リザバー計算を用いた行動計画の数理モデル及び自然言語処理モデル},
  author={中村仁},
  booktitle={IT連携フォーラム OACIS 第47回シンポジウム},
  year={2024},
  month={November},
  type={Oral Presentation},
  url={https://www.oacis.jp/activity/symposium047/},
  organization={IT連携フォーラム OACIS}
}

@inproceedings{nakamura2022neurodynamics,
  title={短期的シナプス可塑性を用いた報酬修飾型レザバー計算に基づく行動計画の数理モデルの構築とその分析},
  author={中村仁 and 香取勇一},
  booktitle={「脳神経系マルチセルラバイオコンピューティング」第2回領域会議},
  year={2022},
  month={March},
  day={2},
  type={Poster Presentation},
  url={https://www.mnbc.riec.tohoku.ac.jp/Areas_B/activities2021.html},
  organization={文部科学省科学研究費補助金新学術領域研究}
}

@inproceedings{nakamura2021jnns,
  title={動的シナプスを用いた報酬修飾型レザバー計算に基づく行動計画の数理モデル},
  author={中村仁 and 香取勇一},
  booktitle={第31回日本神経回路学会全国大会（JNNS2021）},
  year={2021},
  month={September},
  day={21--24},
  type={Oral \& Poster Presentation},
  organization={日本神経回路学会 (Japan Neural Network Society)},
  note={COVID-19により完全オンライン開催},
  url={https://jnns2021.brainsci.net/}
}

`;

// 簡単なBibTeXパーサー
function parseBibtexData() {
  const entries = [];
  const entryRegex = /@(\w+)\{([^,]+),\s*([\s\S]*?)\n\}/g;
  
  let match;
  while ((match = entryRegex.exec(bibtexData)) !== null) {
    const [, entryType, key, content] = match;
    const entry = { entryType: entryType, key: key };
    
    // フィールドを解析
    const fieldRegex = /(\w+)\s*=\s*\{([^}]+)\}/g;
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(content)) !== null) {
      const [, fieldName, fieldValue] = fieldMatch;
      entry[fieldName] = fieldValue.trim();
    }
    
    entries.push(entry);
  }
  
  return entries;
}

// エントリータイプ別にグループ化
function getPublicationsByType() {
  const entries = parseBibtexData();
  
  const publications = entries.filter(entry => entry.entryType === 'inproceedings');
  const theses = [];
  
  // 年と月でソート（新しい順）
  const sortByDate = (a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    if (yearA !== yearB) return yearB - yearA;
    
    const monthMap = {
      'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
      'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
    };
    
    const monthA = monthMap[a.month] || 12;
    const monthB = monthMap[b.month] || 12;
    return monthB - monthA;
  };
  
  return {
    publications: publications.sort(sortByDate),
    theses: theses.sort(sortByDate)
  };
}

// 国際学会と国内学会を分離
function getConferencesByScope() {
  const { publications } = getPublicationsByType();
  
  const international = publications.filter(pub => 
    pub.booktitle && (
      pub.booktitle.includes('IEEE') ||
      pub.booktitle.includes('SIAM') ||
      pub.booktitle.includes('International') ||
      pub.booktitle.includes('NOLTA') ||
      pub.booktitle.includes('BFBC') ||
      pub.booktitle.includes('RIEC') ||
      pub.booktitle.includes('Brain Functions') ||
      pub.booktitle.includes('World Congress') ||
      pub.booktitle.includes('Conference on Complex Systems') ||
      pub.booktitle.includes('CCS2025') ||
      pub.booktitle.includes('NEURO2022')
    )
  );
  
  const domestic = publications.filter(pub => 
    pub.booktitle && (
      pub.booktitle.includes('日本') ||
      pub.booktitle.includes('言語処理学会') ||
      pub.booktitle.includes('OACIS') ||
      pub.booktitle.includes('領域会議') ||
      pub.booktitle.includes('情報数理学') ||
      pub.booktitle.includes('神経系マルチセル') ||
      pub.booktitle.includes('Dynamics Days')
    ) && !pub.booktitle.includes('NEURO2022') && !pub.booktitle.includes('未踏会議2025')
  );
  
  return { international, domestic };
}

// 表示用のフォーマット
function formatPublication(entry) {
  // 著者名をファーストネーム・ラストネーム形式に変換
  let authors = '';
  if (entry.author) {
    const authorList = entry.author.split(' and ');
    const formattedAuthors = authorList.map(author => {
      const parts = author.split(', ');
      if (parts.length === 2) {
        // "Nakamura, Jin" -> "Jin Nakamura"
        return `${parts[1].trim()} ${parts[0].trim()}`;
      }
      return author.trim();
    });
    
    // 全ての著者名を表示（省略しない）
    authors = formattedAuthors.join(', ').replace(/, ([^,]+)$/, ' and $1');
  }
  const title = entry.title || '';
  const venue = entry.booktitle || entry.school || '';
  const year = entry.year || '';
  const month = entry.month || '';
  const type = entry.type || '';
  const award = entry.award || '';
  const note = entry.note || '';
  const url = entry.url || '';
  const doi = entry.doi || '';
  
  return {
    authors,
    title,
    venue,
    year,
    month,
    type,
    award,
    note,
    url,
    doi
  };
}

const $$Astro = createAstro("https://jinzhongcun.github.io");
const $$Research = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Research;
  const pageTitle = "Research - Jin Nakamura";
  getPublicationsByType();
  const { international, domestic } = getConferencesByScope();
  return renderTemplate`<html lang="ja" data-astro-cid-ed5bxsup> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><meta name="description" content="中村仁の研究実績、論文、学会発表の一覧。非線形ダイナミクス、リザバーコンピューティング、大規模言語モデルに関する研究。">${renderHead()}</head> <body data-astro-cid-ed5bxsup> ${renderComponent($$result, "Navigation", $$Navigation, { "current": "research", "lang": "ja", "data-astro-cid-ed5bxsup": true })} <main class="main-content" data-astro-cid-ed5bxsup> <div class="page-header" data-astro-cid-ed5bxsup> <h1 class="page-title" data-astro-cid-ed5bxsup>Research</h1> <p class="page-subtitle" data-astro-cid-ed5bxsup>研究・学会発表</p> </div> <div class="content-layout" data-astro-cid-ed5bxsup> <!-- 左側ナビゲーション --> <nav class="side-nav" data-astro-cid-ed5bxsup> <ul class="nav-switches" data-astro-cid-ed5bxsup> <li data-astro-cid-ed5bxsup><a href="#overview" class="nav-switch" data-astro-cid-ed5bxsup>研究概要</a></li> <li data-astro-cid-ed5bxsup><a href="#grants" class="nav-switch" data-astro-cid-ed5bxsup>競争的資金</a></li> <li data-astro-cid-ed5bxsup><a href="#conferences" class="nav-switch" data-astro-cid-ed5bxsup>学会発表</a></li> <li data-astro-cid-ed5bxsup><a href="#other-presentations" class="nav-switch" data-astro-cid-ed5bxsup>その他発表</a></li> </ul> </nav> <!-- メインコンテンツ --> <div class="main-sections" data-astro-cid-ed5bxsup> <!-- 研究概要 --> <section id="overview" class="research-overview" data-astro-cid-ed5bxsup> <h2 data-astro-cid-ed5bxsup>研究テーマ</h2> <p data-astro-cid-ed5bxsup>大学では、非線形ダイナミクスと機械学習を用いて、脳の数理モデルと言語モデルに関する研究を行っています。特に、リザバーコンピューティングを用いた脳の数理モデルと、軽量型Transformerの開発と解析を行っています。<br data-astro-cid-ed5bxsup>
産業技術総合研究所では、LLMを用いたアイデア発想AIエージェントに関する研究に従事しています。<br data-astro-cid-ed5bxsup>
株式会社Third Intelligenceでは、「新たな知能」の創出に向けた基礎研究に従事しています。</p> <h3 data-astro-cid-ed5bxsup>研究キーワード</h3> <div class="keywords" data-astro-cid-ed5bxsup> <span class="keyword" data-astro-cid-ed5bxsup>リザバーコンピューティング</span> <span class="keyword" data-astro-cid-ed5bxsup>非線形ダイナミクス</span> <span class="keyword" data-astro-cid-ed5bxsup>計算論的神経科学</span> <span class="keyword" data-astro-cid-ed5bxsup>強化学習</span> <span class="keyword" data-astro-cid-ed5bxsup>自然言語処理</span> <span class="keyword" data-astro-cid-ed5bxsup>ネットワーク科学</span> <span class="keyword" data-astro-cid-ed5bxsup>グラフ理論</span> <span class="keyword" data-astro-cid-ed5bxsup>計算社会科学</span> </div> <h3 data-astro-cid-ed5bxsup>研究分野</h3> <ul class="research-fields" data-astro-cid-ed5bxsup> <li data-astro-cid-ed5bxsup>情報通信 / ソフトコンピューティング / 非線形ダイナミクス</li> <li data-astro-cid-ed5bxsup>情報通信 / 数理情報学</li> <li data-astro-cid-ed5bxsup>ライフサイエンス / 神経科学一般 / 数理モデル</li> <li data-astro-cid-ed5bxsup>情報通信 / 知能情報学</li> </ul> </section> <!-- 競争的資金・研究課題 --> <section id="grants" class="grants-section" data-astro-cid-ed5bxsup> <h2 data-astro-cid-ed5bxsup>Research Grants</h2> <div class="grants-list" data-astro-cid-ed5bxsup> <div class="grant-item clickable-item" data-href="/jinnakamura-public/ja/portfolio/mitou" data-astro-cid-ed5bxsup> <div class="grant-year" data-astro-cid-ed5bxsup>2024.04 - 2025.03</div> <div class="grant-content" data-astro-cid-ed5bxsup> <div class="grant-text" data-astro-cid-ed5bxsup> <strong data-astro-cid-ed5bxsup>2024年度未踏ターゲット事業（リザバーコンピューティング技術を活用したソフトウェア開発分野）</strong><br data-astro-cid-ed5bxsup>
独立行政法人 情報処理推進機構（IPA）<br data-astro-cid-ed5bxsup>
研究代表者：中村仁<br data-astro-cid-ed5bxsup>
PM：田中剛平教授（名古屋工業大学）<br data-astro-cid-ed5bxsup>
予算：3,780,000円<br data-astro-cid-ed5bxsup>
課題：リザバーコンピューティングを用いた次世代型自然言語処理モデルの開発
</div> <div class="row-arrow" data-astro-cid-ed5bxsup></div> </div> </div> </div> </section> <!-- 学会発表 --> <section id="conferences" class="conferences-section" data-astro-cid-ed5bxsup> <h2 data-astro-cid-ed5bxsup>Conference Presentations</h2> <h3 data-astro-cid-ed5bxsup>国際学会</h3> <div class="conferences-table" data-astro-cid-ed5bxsup> <table data-astro-cid-ed5bxsup> <tbody data-astro-cid-ed5bxsup> ${international.map((conf) => {
    const formatted = formatPublication(conf);
    const monthMap = {
      "January": "01",
      "February": "02",
      "March": "03",
      "April": "04",
      "May": "05",
      "June": "06",
      "July": "07",
      "August": "08",
      "September": "09",
      "October": "10",
      "November": "11",
      "December": "12"
    };
    const displayDate = formatted.month && formatted.year ? `${formatted.year}.${monthMap[formatted.month] || "12"}` : formatted.year;
    return renderTemplate`<tr data-astro-cid-ed5bxsup> <td class="year" data-astro-cid-ed5bxsup> ${displayDate} ${(formatted.type || formatted.award) && renderTemplate`<div class="presentation-types" data-astro-cid-ed5bxsup> ${formatted.type && formatted.type.includes("Oral") && renderTemplate`<span class="presentation-type oral" data-astro-cid-ed5bxsup>Oral</span>`} ${formatted.type && formatted.type.includes("Poster") && renderTemplate`<span class="presentation-type poster" data-astro-cid-ed5bxsup>Poster</span>`} ${formatted.type && formatted.type.includes("Invited") && renderTemplate`<span class="presentation-type invited" data-astro-cid-ed5bxsup>Invited</span>`} ${formatted.award && renderTemplate`<span class="award-mark" data-astro-cid-ed5bxsup>${formatted.award}</span>`} </div>`} </td> <td class="conference" data-astro-cid-ed5bxsup> <strong data-astro-cid-ed5bxsup>${formatted.title}</strong><br data-astro-cid-ed5bxsup> ${formatted.authors}<br data-astro-cid-ed5bxsup> <em data-astro-cid-ed5bxsup> ${formatted.url && formatted.url !== "#" ? renderTemplate`<a${addAttribute(formatted.url, "href")} target="_blank" data-astro-cid-ed5bxsup>${formatted.venue}</a>` : formatted.venue} </em> </td> </tr>`;
  })} </tbody> </table> </div> <h3 data-astro-cid-ed5bxsup>国内学会</h3> <div class="conferences-table" data-astro-cid-ed5bxsup> <table data-astro-cid-ed5bxsup> <tbody data-astro-cid-ed5bxsup> ${domestic.map((conf) => {
    const formatted = formatPublication(conf);
    const monthMap = {
      "January": "01",
      "February": "02",
      "March": "03",
      "April": "04",
      "May": "05",
      "June": "06",
      "July": "07",
      "August": "08",
      "September": "09",
      "October": "10",
      "November": "11",
      "December": "12"
    };
    const displayDate = formatted.month && formatted.year ? `${formatted.year}.${monthMap[formatted.month] || "12"}` : formatted.year;
    return renderTemplate`<tr data-astro-cid-ed5bxsup> <td class="year" data-astro-cid-ed5bxsup> ${displayDate} ${(formatted.type || formatted.award) && renderTemplate`<div class="presentation-types" data-astro-cid-ed5bxsup> ${formatted.type && formatted.type.includes("Oral") && renderTemplate`<span class="presentation-type oral" data-astro-cid-ed5bxsup>Oral</span>`} ${formatted.type && formatted.type.includes("Poster") && renderTemplate`<span class="presentation-type poster" data-astro-cid-ed5bxsup>Poster</span>`} ${formatted.type && formatted.type.includes("Invited") && renderTemplate`<span class="presentation-type invited" data-astro-cid-ed5bxsup>Invited</span>`} ${formatted.award && renderTemplate`<span class="award-mark" data-astro-cid-ed5bxsup>${formatted.award}</span>`} </div>`} </td> <td class="conference" data-astro-cid-ed5bxsup> <strong data-astro-cid-ed5bxsup>${formatted.title}</strong><br data-astro-cid-ed5bxsup> ${formatted.authors}<br data-astro-cid-ed5bxsup> <em data-astro-cid-ed5bxsup> ${formatted.url && formatted.url !== "#" ? renderTemplate`<a${addAttribute(formatted.url, "href")} target="_blank" data-astro-cid-ed5bxsup>${formatted.venue}</a>` : formatted.venue} </em> </td> </tr>`;
  })} </tbody> </table> </div> </section> <!-- その他の発表 --> <section id="other-presentations" class="other-presentations-section" data-astro-cid-ed5bxsup> <h2 data-astro-cid-ed5bxsup>Other Presentations</h2> <div class="other-presentations-table" data-astro-cid-ed5bxsup> <table data-astro-cid-ed5bxsup> <tbody data-astro-cid-ed5bxsup> <tr data-astro-cid-ed5bxsup> <td class="year" data-astro-cid-ed5bxsup>
2025.03
<div class="presentation-types" data-astro-cid-ed5bxsup> <span class="presentation-type invited" data-astro-cid-ed5bxsup>Invited</span> <span class="presentation-type oral" data-astro-cid-ed5bxsup>Oral</span> </div> </td> <td class="presentation" data-astro-cid-ed5bxsup> <strong data-astro-cid-ed5bxsup>リザバーコンピューティング技術に触発された軽量型自然言語処理モデルの開発</strong><br data-astro-cid-ed5bxsup>
中村仁<br data-astro-cid-ed5bxsup> <a href="https://www.ipa.go.jp/jinzai/mitou/target/2024_reservoir/gaiyou-tg-2.html" target="_blank" data-astro-cid-ed5bxsup>未踏会議2025 未踏ターゲット事業代表者発表</a> </td> </tr> <tr data-astro-cid-ed5bxsup> <td class="year" data-astro-cid-ed5bxsup>
2024.06
</td> <td class="presentation" data-astro-cid-ed5bxsup> <strong data-astro-cid-ed5bxsup>LLMチャットbotの開発と生成AIブース展示</strong><br data-astro-cid-ed5bxsup>
株式会社松尾研究所 LLM-DX<br data-astro-cid-ed5bxsup> <a href="https://aws.amazon.com/jp/blogs/startup/booth-exhibition-report-aws-summit-japan-2024/" target="_blank" data-astro-cid-ed5bxsup>AWS Summit 2024</a> </td> </tr> </tbody> </table> </div> </section> </div> </div> </main> <footer class="site-footer" data-astro-cid-ed5bxsup> <p data-astro-cid-ed5bxsup>&copy; 2024 Jin Nakamura. All rights reserved.</p> </footer>  ${renderScript($$result, "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/research.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/research.astro", void 0);

const $$file = "/mnt/c/Users/jinsm/jinnakamura/src/pages/ja/research.astro";
const $$url = "/jinnakamura-public/ja/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Research,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
