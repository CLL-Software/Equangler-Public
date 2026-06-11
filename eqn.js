(function () {
  'use strict';

  var current = document.currentScript;
  if (!current || !current.src) return;

  var base = new URL('.', current.src);
  Object.defineProperty(window, '__EQN_EMBED_BASE__', {
    value: base.href,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  var parts = ['eqn.cfg.js', 'eqn.core.js', 'eqn.codegen.js', 'eqn.view.js'];

  function load(i) {
    if (i >= parts.length) {
      window.dispatchEvent(new CustomEvent('eqn:ready'));
      return;
    }
    var s = document.createElement('script');
    s.src = new URL(parts[i], base).href;
    s.async = false;
    s.onload = function () { load(i + 1); };
    s.onerror = function () { load(i + 1); };
    document.head.appendChild(s);
  }

  load(0);
})();
