(function () {
  'use strict';

  const DEFAULT_COPY_MENU = [
    'text', 'tex', 'mathml', 'excel', 'sheets', 'python', 'csharp', 'javascript',
  ];

  const MENU_DEFS = {
    text: { section: 'Notation', label: 'Text', badge: 'TXT' },
    tex: { section: 'Notation', label: 'TeX', badge: 'TEX' },
    mathml: { section: 'Notation', label: 'MathML', badge: 'MML' },
    excel: { section: 'Spreadsheet', label: 'Excel formula', badge: 'XLS' },
    sheets: { section: 'Spreadsheet', label: 'Google Sheets formula', badge: 'GS' },
    python: { section: 'Code', label: 'Python function', badge: 'PY' },
    csharp: { section: 'Code', label: 'C# function', badge: 'C#' },
    javascript: { section: 'Code', label: 'JavaScript function', badge: 'JS' },
  };

  const HINT_ICON_PARTS = {
    excel: '<svg class="ev-hint-icon" viewBox="0 0 24 24" aria-hidden="true" title="Excel"><rect width="24" height="24" rx="2.5" fill="#107C41"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" d="M8 8l8 8M16 8l-8 8"/></svg>',
    sheets: '<svg class="ev-hint-icon" viewBox="0 0 24 24" aria-hidden="true" title="Google Sheets"><rect width="24" height="24" rx="2.5" fill="#0F9D58"/><path fill="#fff" d="M7 6h7l4 4v8H7V6zm7 0v4h4"/><path stroke="#fff" stroke-width="1.2" d="M9 11h6M9 14h6M9 17h4"/></svg>',
    python: '<svg class="ev-hint-icon" viewBox="0 0 24 24" aria-hidden="true" title="Python"><path fill="#3776AB" d="M11.914 0C5.82 0 6.28 2.657 6.28 2.657l.007 2.754h5.814v.827H4.108S0 5.847 0 11.969c0 6.173 3.586 5.946 3.586 5.946h2.144V15.07s-.094-3.594 3.548-3.594h6.138s3.448.055 3.448-3.265V2.779S18.083 0 11.914 0zM8.785 1.87a1.034 1.034 0 1 1 0 2.068 1.034 1.034 0 0 1 0-2.068z"/><path fill="#FFD43B" d="M12.086 24c6.093 0 5.637-2.657 5.637-2.657l-.007-2.754h-5.814v-.827h8.993S24 18.153 24 12.031c0-6.173-3.586-5.946-3.586-5.946h-2.144v2.845s.094 3.594-3.548 3.594h-6.138s-3.448-.055-3.448 3.265v6.868S5.917 24 12.086 24zm3.129-1.87a1.034 1.034 0 1 1 0-2.068 1.034 1.034 0 0 1 0 2.068z"/></svg>',
    csharp: '<svg class="ev-hint-icon" viewBox="0 0 24 24" aria-hidden="true" title="C#"><rect width="24" height="24" rx="2.5" fill="#68217A"/><text x="12" y="16.5" text-anchor="middle" fill="#fff" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700">C#</text></svg>',
    javascript: '<svg class="ev-hint-icon" viewBox="0 0 24 24" aria-hidden="true" title="JavaScript"><rect width="24" height="24" rx="2.5" fill="#F7DF1E"/><text x="12" y="16" text-anchor="middle" fill="#323330" font-family="Segoe UI, sans-serif" font-size="8.5" font-weight="700">JS</text></svg>',
    text: '<svg class="ev-hint-icon" viewBox="0 0 24 24" aria-hidden="true" title="Text"><rect width="24" height="24" rx="2.5" fill="#E8E8E8"/><text x="12" y="16" text-anchor="middle" fill="#616161" font-family="Segoe UI, sans-serif" font-size="9" font-weight="600">Aa</text></svg>',
    tex: '<svg class="ev-hint-icon" viewBox="0 0 24 24" aria-hidden="true" title="TeX"><rect width="24" height="24" rx="2.5" fill="#5D8090"/><text x="12" y="16.5" text-anchor="middle" fill="#fff" font-family="Georgia, serif" font-size="10" font-weight="700" font-style="italic">TeX</text></svg>',
    mathml: '<svg class="ev-hint-icon" viewBox="0 0 24 24" aria-hidden="true" title="MathML"><rect width="24" height="24" rx="2.5" fill="#E65100"/><text x="12" y="15.5" text-anchor="middle" fill="#fff" font-family="Segoe UI, sans-serif" font-size="7.5" font-weight="700">MML</text></svg>',
  };

  let allowlistReady = false;
  const instances = new Map();
  let activeFormats = null;
  let activeCopyMenu = DEFAULT_COPY_MENU;
  let menuAnchorEl = null;

  function ensureLiveRegion() {
    let live = document.getElementById('ev-copy-status');
    if (!live) {
      live = document.createElement('div');
      live.id = 'ev-copy-status';
      live.className = 'ev-sr-only';
      live.setAttribute('aria-live', 'polite');
      live.setAttribute('aria-atomic', 'true');
      document.body.appendChild(live);
    }
    return live;
  }

  function announceCopy(message) {
    const live = ensureLiveRegion();
    live.textContent = '';
    window.requestAnimationFrame(() => {
      live.textContent = message;
    });
  }

  function getMenuItems() {
    const menu = document.getElementById('ev-global-menu');
    if (!menu || menu.hidden) return [];
    return Array.from(menu.querySelectorAll('.ev-menu-item'));
  }

  function focusMenuItem(index) {
    const items = getMenuItems();
    if (!items.length) return;
    const i = Math.max(0, Math.min(index, items.length - 1));
    items[i].focus();
  }

  function onMenuKeydown(e) {
    const menu = document.getElementById('ev-global-menu');
    if (!menu || menu.hidden) return;

    const items = getMenuItems();
    if (!items.length) return;

    const current = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusMenuItem(current < 0 ? 0 : current + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusMenuItem(current < 0 ? items.length - 1 : current - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusMenuItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusMenuItem(items.length - 1);
    } else if (e.key === 'Tab') {
      hideMenu();
    }
  }

  function getAllowedDomains() {
    const list = window.__EQN_ALLOWED_DOMAINS__;
    return Array.isArray(list) ? list : [];
  }

  function primeAllowlist() {
    if (allowlistReady) return true;
    allowlistReady = getAllowedDomains().length > 0;
    return allowlistReady;
  }

  function isDomainAllowed() {
    if (!primeAllowlist()) return false;
    const host = window.location.host.toLowerCase();
    return getAllowedDomains().some((domain) => domain === host);
  }

  function scriptBaseUrl() {
    const embedBase = window.__EQN_EMBED_BASE__;
    if (embedBase) return new URL(embedBase);
    const current = document.currentScript;
    if (current?.src) {
      return new URL('.', current.src);
    }
    const scripts = document.querySelectorAll('script[src*="eqn.view.js"]');
    const last = scripts[scripts.length - 1];
    return last?.src ? new URL('.', last.src) : new URL('./embed/', window.location.href);
  }

  function resolveCardStyle(el, payload) {
    const fromPayload = payload?.style;
    const fromAttr = el.getAttribute('data-style');
    const raw = fromPayload || fromAttr || 'classic';
    return raw === 'pop' || raw === 'dark' ? raw : 'classic';
  }

  function applyCardStyle(el, style) {
    if (style === 'classic') el.removeAttribute('data-style');
    else el.setAttribute('data-style', style);
  }

  function parseEmbedDiv(el) {
    const raw = (el.textContent || '').trim();
    const lines = raw.split(/\r?\n/);
    if (!lines.length) return null;

    let start = 0;
    if (/^id_key=/i.test(lines[0].trim())) start = 1;

    const body = lines.slice(start).join('\n').trim();
    if (!body) return null;

    try {
      const parse = window.__EQN_PAYLOAD_CODEC__?.parseEmbedBody;
      const payload = parse ? parse(body) : JSON.parse(body);
      return {
        payload,
        reference: el.getAttribute('name') || payload.reference || '',
        formula: el.getAttribute('formula') || payload.equation || '',
      };
    } catch {
      return null;
    }
  }

  function buildHintIcons(copyMenu) {
    const icons = copyMenu
      .filter((type) => HINT_ICON_PARTS[type])
      .map((type) => HINT_ICON_PARTS[type])
      .join('');
    return `<span class="ev-hint-icons" role="img" aria-label="Copy formats">${icons}</span>`;
  }

  function buildMenuHtml(copyMenu) {
    const sections = new Map();
    for (const type of copyMenu) {
      const def = MENU_DEFS[type];
      if (!def) continue;
      if (!sections.has(def.section)) sections.set(def.section, []);
      sections.get(def.section).push(type);
    }

    const sectionOrder = ['Notation', 'Spreadsheet', 'Code'];
    const parts = [];

    sectionOrder.forEach((sectionName, idx) => {
      const types = sections.get(sectionName);
      if (!types?.length) return;
      if (parts.length) parts.push('<div class="ev-menu-divider"></div>');
      parts.push(`<div class="ev-menu-section"><div class="ev-menu-label">${sectionName}</div>`);
      for (const type of types) {
        const def = MENU_DEFS[type];
        parts.push(`
        <button type="button" class="ev-menu-item" data-type="${type}" role="menuitem">
          <span class="ev-menu-item-label">${def.label}</span>
          <span class="ev-menu-item-badge">${def.badge}</span>
        </button>`);
      }
      parts.push('</div>');
    });

    return parts.join('');
  }

  function ensureMenu() {
    let menu = document.getElementById('ev-global-menu');
    if (!menu) {
      menu = document.createElement('div');
      menu.id = 'ev-global-menu';
      menu.className = 'ev-menu';
      menu.hidden = true;
      menu.setAttribute('role', 'menu');
      menu.setAttribute('aria-label', 'Copy equation as');
      document.body.appendChild(menu);

      document.addEventListener('click', () => hideMenu());
      document.addEventListener('scroll', () => hideMenu(), true);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideMenu();
      });
      menu.addEventListener('keydown', onMenuKeydown);
      menu.addEventListener('contextmenu', (e) => e.preventDefault());
      menu.addEventListener('click', onMenuClick);
    }
    menu.innerHTML = buildMenuHtml(activeCopyMenu);
    return menu;
  }

  function hideMenu() {
    const menu = document.getElementById('ev-global-menu');
    if (menu) menu.hidden = true;
    if (menuAnchorEl) {
      menuAnchorEl.setAttribute('aria-expanded', 'false');
      menuAnchorEl = null;
    }
  }

  function showMenuAtAnchor(anchorEl, clientX, clientY, formats, copyMenu) {
    activeCopyMenu = copyMenu?.length ? copyMenu : DEFAULT_COPY_MENU;
    activeFormats = formats;
    menuAnchorEl = anchorEl || null;
    if (menuAnchorEl) menuAnchorEl.setAttribute('aria-expanded', 'true');

    const menu = ensureMenu();
    menu.hidden = false;
    menu.style.left = clientX + 'px';
    menu.style.top = clientY + 'px';

    const rect = menu.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      menu.style.left = Math.max(0, clientX - rect.width) + 'px';
    }
    if (rect.bottom > window.innerHeight) {
      menu.style.top = Math.max(0, clientY - rect.height) + 'px';
    }

    focusMenuItem(0);
  }

  function showMenu(clientX, clientY, formats, copyMenu) {
    showMenuAtAnchor(null, clientX, clientY, formats, copyMenu);
  }

  function decodeHtmlEntities(value) {
    const node = document.createElement('textarea');
    node.innerHTML = value;
    return node.value;
  }

  function sheetsNativeAttr(name, rawValue) {
    return `${name}="${rawValue}"`;
  }

  function repairSheetsClipboardHtml(html) {
    if (!html || !/\bdata-sheets-value\s*=/.test(html)) return html;

    const decode = (encoded) => encoded.replace(/&quot;/g, '"').replace(/&amp;/g, '&');

    const fixAttr = (name, htmlIn) => htmlIn
      .replace(
        new RegExp(`\\b${name}\\s*=\\s*'((?:\\\\'|[^'])*)'`, 'gi'),
        (_match, encoded) => sheetsNativeAttr(name, decode(encoded)),
      )
      .replace(
        new RegExp(`\\b${name}\\s*=\\s*"((?:&quot;|&amp;|[^"]*)*)"`, 'gi'),
        (_match, encoded) => {
          if (!encoded.includes('&quot;') && !encoded.includes('&amp;')) return _match;
          return sheetsNativeAttr(name, decode(encoded));
        },
      );

    let out = fixAttr('data-sheets-value', html);
    out = fixAttr('data-sheets-formula', out);
    return out;
  }

  function wrapSheetsClipboardHtml(tableHtml) {
    const style = '<style type="text/css">td{border:1px solid #ccc;}br{mso-data-placement:same-cell;}</style>';
    let table = tableHtml.trim();
    if (!/\bdata-sheets-root\s*=/.test(table)) {
      table = table.replace(
        /<table\b/i,
        '<table xmlns="http://www.w3.org/1999/xhtml" data-sheets-root="1" data-sheets-baot="1"',
      );
    }
    return `<google-sheets-html-origin><meta name="generator" content="Sheets"/>${style}${table}</google-sheets-html-origin>`;
  }

  function extractSheetsClipboardFragment(htmlDocument) {
    let body = htmlDocument;
    const frag = htmlDocument.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i);
    if (frag) body = frag[1];
    else {
      const bodyMatch = htmlDocument.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) body = bodyMatch[1];
    }
    const tableMatch = body.match(/<table[\s\S]*?<\/table>/i);
    return wrapSheetsClipboardHtml(tableMatch ? tableMatch[0] : body.trim());
  }

  function ensureSheetsClipboardHtml(html) {
    if (!html) return html;

    if (/\bdata-sheets-formula\s*=/.test(html)) {
      return extractSheetsClipboardFragment(repairSheetsClipboardHtml(html));
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');
    const table = doc.querySelector('table');
    if (!table) return html;

    table.querySelectorAll('td, th').forEach((cell) => {
      let formula =
        cell.getAttribute('x:fmla') ||
        cell.getAttribute('data-eqn-formula');
      if (!formula) {
        const text = cell.textContent.trim();
        if (text.startsWith('=')) formula = text;
      }
      if (!formula) return;

      formula = decodeHtmlEntities(formula.trim());
      if (!formula.startsWith('=')) formula = `=${formula}`;

      cell.textContent = formula;
      cell.removeAttribute('x:fmla');
      cell.removeAttribute('data-eqn-formula');
      cell.removeAttribute('x:num');
      cell.removeAttribute('x:str');
    });

    const styles = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi);
    const styleBlock = styles ? styles.join('\n') : '';
    return `<html><head><meta charset="utf-8"></head><body><!--StartFragment--><meta name="generator" content="Sheets"/>${styleBlock}${table.outerHTML}<!--EndFragment--></body></html>`;
  }

  function htmlTableToPlainText(htmlDoc) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlDoc, 'text/html');
    const rows = doc.querySelectorAll('table tr');
    if (!rows.length) return '';

    return Array.from(rows, (row) =>
      Array.from(row.querySelectorAll('th, td'), (cell) => cell.textContent.trim()).join('\t')
    ).join('\r\n');
  }

  function copyViaClipboardEvent(html, plain, options = {}) {
    return new Promise((resolve, reject) => {
      const onCopy = (event) => {
        event.preventDefault();
        event.clipboardData.setData('text/html', html);
        event.clipboardData.setData('text/plain', plain);
      };

      document.addEventListener('copy', onCopy, { once: true });

      if (options.skipDomSeed) {
        try {
          if (document.execCommand('copy')) resolve();
          else reject(new Error('execCommand copy failed'));
        } catch (error) {
          reject(error);
        }
        return;
      }

      const node = document.createElement('div');
      node.contentEditable = 'true';
      node.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
      node.innerHTML = html;
      document.body.appendChild(node);

      const range = document.createRange();
      range.selectNodeContents(node);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        if (document.execCommand('copy')) resolve();
        else reject(new Error('execCommand copy failed'));
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(node);
        selection.removeAllRanges();
      }
    });
  }

  async function copyFormat(type, output) {
    if (type === 'excel' || type === 'sheets') {
      const plain = htmlTableToPlainText(output);
      const html = type === 'sheets' ? repairSheetsClipboardHtml(output) : output;

      if (type === 'sheets') {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              'text/html': new Blob([html], { type: 'text/html' }),
              'text/plain': new Blob([plain], { type: 'text/plain' }),
            }),
          ]);
          return;
        } catch {
          /* fall through */
        }
      }

      try {
        await copyViaClipboardEvent(html, plain, { skipDomSeed: type === 'sheets' });
        return;
      } catch {
        /* fall through */
      }
      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/html': new Blob([html], { type: 'text/html' }),
            'text/plain': new Blob([plain], { type: 'text/plain' }),
          }),
        ]);
        return;
      } catch {
        /* fall through */
      }
    }
    await navigator.clipboard.writeText(output);
  }

  function ensureTexDelimiters(tex) {
    const trimmed = tex.trim();
    if (!trimmed) return trimmed;
    if (trimmed.startsWith('\\(') && trimmed.endsWith('\\)')) return trimmed;
    return `\\(${trimmed}\\)`;
  }

  async function onMenuClick(e) {
    e.stopPropagation();
    const item = e.target.closest('[data-type]');
    const type = item?.getAttribute('data-type');
    if (!type || !activeFormats) return;

    const output =
      activeFormats[type] ??
      (type === 'sheets' ? activeFormats.excel : undefined);
    if (!output) {
      hideMenu();
      return;
    }

    let clipboardOutput = type === 'sheets' ? ensureSheetsClipboardHtml(output) : output;
    if (type === 'tex') clipboardOutput = ensureTexDelimiters(clipboardOutput);

    try {
      await copyFormat(type, clipboardOutput);
      const label = MENU_DEFS[type]?.label || type;
      announceCopy(`Copied as ${label}.`);
    } catch {
      announceCopy('Copy failed — clipboard unavailable.');
    }
    hideMenu();
  }

  function renderUnauthorized(el) {
    el.innerHTML = '';
    el.classList.add('equation_view--placeholder');
    el.textContent = 'Equation embed unavailable on this domain.';
  }

  function renderCard(el, data) {
    el.classList.remove('equation_view--placeholder');
    const { payload } = data;
    const formats = payload.formats || {};
    const copyMenu = Array.isArray(payload.copyMenu) ? payload.copyMenu : DEFAULT_COPY_MENU;
    const reference = payload.reference || data.reference || '';
    const mathml = formats.mathml || '';
    const plainEquation = formats.text || data.formula || '';

    const cardLabel = reference
      ? `Equation: ${plainEquation}. ${reference}. Activate to open copy menu.`
      : `Equation: ${plainEquation}. Activate to open copy menu.`;

    const wrapper = document.createElement('div');
    wrapper.className = 'ev-card';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'button');
    wrapper.setAttribute('aria-haspopup', 'menu');
    wrapper.setAttribute('aria-expanded', 'false');
    wrapper.setAttribute('aria-label', cardLabel);
    wrapper.innerHTML = `
      <p class="ev-reference"></p>
      <div class="ev-equation" role="img" aria-label="${escapeAttr(plainEquation)}">
        <span aria-hidden="true">${mathml}</span>
      </div>
      <p class="ev-hint">
        <span>Activate to copy</span>
        ${buildHintIcons(copyMenu)}
      </p>
      <p class="ev-card-footer">Powered by Equangular tool &amp; exports</p>`;

    wrapper.querySelector('.ev-reference').textContent = reference;

    const openMenuFromPointer = (e) => {
      if (e.target.closest('.ev-card-footer')) return;
      e.stopPropagation();
      const menu = document.getElementById('ev-global-menu');
      if (menu && !menu.hidden) {
        hideMenu();
        return;
      }
      showMenuAtAnchor(wrapper, e.clientX, e.clientY, formats, copyMenu);
    };

    const openMenuFromKeyboard = (e) => {
      if (e.target.closest('.ev-card-footer')) return;
      e.preventDefault();
      e.stopPropagation();
      const menu = document.getElementById('ev-global-menu');
      if (menu && !menu.hidden) {
        hideMenu();
        return;
      }
      const rect = wrapper.getBoundingClientRect();
      showMenuAtAnchor(
        wrapper,
        rect.left + rect.width / 2,
        rect.bottom + 4,
        formats,
        copyMenu,
      );
    };

    wrapper.addEventListener('click', openMenuFromPointer);
    wrapper.addEventListener('contextmenu', (e) => {
      if (e.target.closest('.ev-card-footer')) return;
      e.preventDefault();
      openMenuFromPointer(e);
    });
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openMenuFromKeyboard(e);
    });

    el.innerHTML = '';
    el.appendChild(wrapper);
    instances.set(el, { data, formats, copyMenu });
  }

  function escapeAttr(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;');
  }

  function processElement(el) {
    const parsed = parseEmbedDiv(el);
    if (!parsed) {
      el.innerHTML = '';
      el.classList.remove('equation_view--placeholder');
      el.removeAttribute('data-style');
      return;
    }

    const cardStyle = resolveCardStyle(el, parsed.payload);
    applyCardStyle(el, cardStyle);

    if (!isDomainAllowed()) {
      renderUnauthorized(el);
      return;
    }

    renderCard(el, parsed);
  }

  function refresh(target) {
    const elements = target
      ? [target].flat()
      : Array.from(document.querySelectorAll('div.equation_view'));

    for (const el of elements) {
      instances.delete(el);
      processElement(el);
    }
  }

  function injectStylesheet() {
    if (document.querySelector('link[data-ev-styles]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('equation-view.css', scriptBaseUrl()).href;
    link.setAttribute('data-ev-styles', '1');
    document.head.appendChild(link);
  }

  function init() {
    injectStylesheet();
    refresh();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.EquationView = { refresh };
})();
