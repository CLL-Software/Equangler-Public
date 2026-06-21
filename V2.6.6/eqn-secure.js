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
  Object.defineProperty(window, '__EQN_EMBED_CSS__', {
    value: ":root {\n  --ev-menu-bg: #ffffff;\n  --ev-menu-border: rgba(0, 0, 0, 0.08);\n  --ev-menu-shadow: 0 8px 28px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);\n  --ev-menu-text: #242424;\n  --ev-menu-muted: #616161;\n  --ev-menu-hover: #f5f5f5;\n  --ev-menu-accent: #0f6cbd;\n  --ev-menu-accent-soft: #ebf3fc;\n}\n\n.equation_view--placeholder,\n.table_view--placeholder {\n  display: inline-block;\n  padding: 24px 32px;\n  border-radius: 10px;\n  background: #fafafa;\n  color: var(--ev-menu-muted);\n  font-family: \"Segoe UI\", system-ui, -apple-system, sans-serif;\n  font-size: 14px;\n  border: 1px dashed #ccc;\n}\n\n.ev-table-host {\n  overflow-x: auto;\n  max-width: 100%;\n}\n\n.ev-table-host .spreadsheet-preview-table {\n  border-collapse: collapse;\n  font-family: Arial, sans-serif;\n  font-size: 10pt;\n  background: transparent;\n  width: 100%;\n  table-layout: auto;\n}\n\n.ev-table-host .spreadsheet-preview-table td,\n.ev-table-host .spreadsheet-preview-table th {\n  border: 1px solid #d0d0d0;\n  padding: 6px 10px;\n  background: transparent;\n  white-space: nowrap;\n  width: auto;\n}\n\n.table_view .ev-table-host .spreadsheet-preview-table td,\n.table_view .ev-table-host .spreadsheet-preview-table th {\n  color: var(--ev-card-subtle);\n}\n\n.ev-table-host .web-cell--formula {\n  font-family: Consolas, \"Courier New\", monospace;\n  font-size: 0.85rem;\n  color: #1565c0;\n  background: #f8fbff;\n}\n\n.table_view[data-style=\"pop\"] .ev-table-host .spreadsheet-preview-table .web-cell--formula {\n  color: #fff;\n}\n\n.ev-table-empty {\n    margin: 0;\n    color: var(--ev-menu-muted);\n    font-size: 13px;\n    text-align: center;\n}\n\n.ev-card {\n  background: white;\n  padding: 10px 40px 0;\n  border-radius: 10px;\n  display: inline-block;\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.16);\n  cursor: pointer;\n  text-align: left;\n  overflow: hidden;\n  font-family: \"Segoe UI\", system-ui, -apple-system, sans-serif;\n}\n\n/* Table embeds - flat layout; equation cards keep boxed styling above */\n.table_view .ev-card {\n  padding: 0;\n  border-radius: 0;\n  box-shadow: none;\n  border: none;\n  --ev-card-subtle: var(--ev-menu-muted);\n}\n\n.table_view .ev-reference,\n.table_view .ev-hint {\n  color: var(--ev-card-subtle);\n}\n\n.table_view .ev-card-footer {\n  margin: 1px 0 0;\n}\n\n.ev-card:focus {\n  outline: none;\n}\n\n.ev-card:focus-visible {\n  outline: 3px solid var(--ev-menu-accent);\n  outline-offset: 3px;\n}\n\n.ev-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n/* Pop - bold gradient, same layout/size as classic */\n.equation_view[data-style=\"pop\"] .ev-card,\n.table_view[data-style=\"pop\"] .ev-card {\n  background: linear-gradient(145deg, #1ee9c0 0%, #3586ff 45%, #ad47ff 100%);\n  color: #ffffff;\n  border: none;\n  box-shadow: 0 4px 22px rgba(53, 134, 255, 0.4);\n  --ev-card-subtle: rgba(255, 255, 255, 0.92);\n}\n\n.table_view[data-style=\"pop\"] .ev-card {\n  box-shadow: none;\n  color: inherit;\n}\n\n.equation_view[data-style=\"pop\"] .ev-reference {\n  color: rgba(255, 255, 255, 0.92);\n  font-weight: 600;\n}\n\n.equation_view[data-style=\"pop\"] .ev-equation {\n  color: #ffffff;\n}\n\n.equation_view[data-style=\"pop\"] .ev-equation math {\n  color: inherit;\n}\n\n.equation_view[data-style=\"pop\"] .ev-hint,\n.table_view[data-style=\"pop\"] .ev-hint {\n  border-top-color: rgba(255, 255, 255, 0.35);\n}\n\n.table_view .ev-hint {\n  border-top: none;\n  padding-top: 0;\n}\n\n.equation_view[data-style=\"pop\"] .ev-card-footer,\n.table_view[data-style=\"pop\"] .ev-card-footer {\n  color: rgba(255, 255, 255, 0.92);\n}\n\n/* Dark - dark panel, light text */\n.equation_view[data-style=\"dark\"] .ev-card,\n.table_view[data-style=\"dark\"] .ev-card {\n  background: #1c1c1c;\n  color: #f3f3f3;\n  border: 1px solid #333;\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.35);\n  --ev-card-subtle: #b8b8b8;\n}\n\n.table_view[data-style=\"dark\"] .ev-card {\n  box-shadow: none;\n  border: none;\n  color: #ffffff;\n}\n\n.equation_view[data-style=\"dark\"] .ev-reference {\n  color: #b8b8b8;\n}\n\n.equation_view[data-style=\"dark\"] .ev-equation {\n  color: #ffffff;\n}\n\n.equation_view[data-style=\"dark\"] .ev-equation math {\n  color: inherit;\n}\n\n.equation_view[data-style=\"dark\"] .ev-hint,\n.table_view[data-style=\"dark\"] .ev-hint {\n  border-top-color: #404040;\n}\n\n.equation_view[data-style=\"dark\"] .ev-card-footer,\n.table_view[data-style=\"dark\"] .ev-card-footer {\n  color: #b8b8b8;\n}\n\n.ev-card-footer {\n  margin: 1px 0 0;\n  padding: 4px 16px;\n  color: var(--ev-menu-muted);\n  font-size: 8px;\n  line-height: 1.4;\n  text-align: center;\n  cursor: default;\n  font-style: italic;\n}\n\n.ev-reference {\n    margin: auto auto 8px auto;\n    font-size: 18px;\n    color: var(--ev-menu-muted);\n    font-style: italic;\n    text-align: center;\n    max-width: 20rem;\n    font-weight: 600;\n}\n\n.ev-calc-error {\n  margin: 0 auto 12px;\n  padding: 10px 12px;\n  max-width: 28rem;\n  border-radius: 6px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n  font-size: 13px;\n  font-style: normal;\n  text-align: center;\n  font-weight: 600;\n}\n\n.table_view[data-style=\"dark\"] .ev-calc-error {\n  background: #3f1d1d;\n  border-color: #7f1d1d;\n  color: #fecaca;\n}\n\n.ev-equation {\n  font-size: 28px;\n  margin: 20px 0;\n  text-align: center;\n}\n\n.ev-hint {\n  margin: 16px 0 0;\n  padding-top: 16px;\n  border-top: 1px solid var(--ev-menu-border);\n  font-size: 13px;\n  color: var(--ev-card-subtle, var(--ev-menu-muted));\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.ev-hint-icons {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.ev-hint-icon {\n  width: 20px;\n  height: 20px;\n  display: block;\n  flex-shrink: 0;\n}\n\n.ev-menu {\n  position: fixed;\n  z-index: 10000;\n  margin: 0;\n  padding: 6px;\n  background: var(--ev-menu-bg);\n  border: 1px solid var(--ev-menu-border);\n  border-radius: 10px;\n  box-shadow: var(--ev-menu-shadow);\n  min-width: 220px;\n  font-size: 13px;\n  color: var(--ev-menu-text);\n  font-family: \"Segoe UI\", system-ui, -apple-system, sans-serif;\n  animation: ev-menu-in 0.14s ease-out;\n}\n\n@keyframes ev-menu-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .ev-menu {\n    animation: none;\n  }\n}\n\n.ev-menu[hidden] {\n  display: none !important;\n}\n\n.ev-menu-section {\n  padding: 2px 0;\n}\n\n.ev-menu-label {\n  padding: 6px 10px 4px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--ev-menu-muted);\n}\n\n.ev-menu-divider {\n  height: 1px;\n  margin: 4px 8px;\n  background: var(--ev-menu-border);\n}\n\n.ev-menu-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n  margin: 1px 0;\n  padding: 8px 10px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  white-space: nowrap;\n  user-select: none;\n  transition: background 0.12s ease, color 0.12s ease;\n}\n\n.ev-menu-item:hover,\n.ev-menu-item:focus-visible {\n  background: var(--ev-menu-hover);\n  outline: none;\n}\n\n.ev-menu-item:active {\n  background: var(--ev-menu-accent-soft);\n}\n\n.ev-menu-item-label {\n  font-weight: 500;\n}\n\n.ev-menu-item-badge {\n  flex-shrink: 0;\n  padding: 2px 7px;\n  border-radius: 4px;\n  background: #f0f0f0;\n  color: var(--ev-menu-muted);\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n}\n\n.ev-menu-item:hover .ev-menu-item-badge,\n.ev-menu-item:focus-visible .ev-menu-item-badge {\n  background: var(--ev-menu-accent-soft);\n  color: var(--ev-menu-accent);\n}\n\n.ev-menu-item[data-type=\"text\"]:hover .ev-menu-item-badge,\n.ev-menu-item[data-type=\"text\"]:focus-visible .ev-menu-item-badge {\n  background: #ffdada;\n  color: #a23a3a;\n}\n\n.ev-menu-item[data-type=\"tex\"]:hover .ev-menu-item-badge,\n.ev-menu-item[data-type=\"tex\"]:focus-visible .ev-menu-item-badge {\n  background: #9fc5de;\n  color: #37474f;\n}\n\n.ev-menu-item[data-type=\"mathml\"]:hover .ev-menu-item-badge,\n.ev-menu-item[data-type=\"mathml\"]:focus-visible .ev-menu-item-badge {\n  background: #ffe0b2;\n  color: #e65100;\n}\n\n.ev-menu-item[data-type=\"sheets\"]:hover .ev-menu-item-badge,\n.ev-menu-item[data-type=\"sheets\"]:focus-visible .ev-menu-item-badge {\n  background: #c8e6c9;\n  color: #1b5e20;\n}\n\n.ev-menu-item[data-type=\"excel\"]:hover .ev-menu-item-badge,\n.ev-menu-item[data-type=\"excel\"]:focus-visible .ev-menu-item-badge {\n  background: #c8e6c9;\n  color: #1b5e20;\n}\n\n.ev-menu-item[data-type=\"python\"]:hover .ev-menu-item-badge,\n.ev-menu-item[data-type=\"python\"]:focus-visible .ev-menu-item-badge {\n  background: #bbdefb;\n  color: #1565c0;\n}\n\n.ev-menu-item[data-type=\"csharp\"]:hover .ev-menu-item-badge,\n.ev-menu-item[data-type=\"csharp\"]:focus-visible .ev-menu-item-badge {\n  background: #e1bee7;\n  color: #6a1b9a;\n}\n\n.ev-menu-item[data-type=\"javascript\"]:hover .ev-menu-item-badge,\n.ev-menu-item[data-type=\"javascript\"]:focus-visible .ev-menu-item-badge {\n  background: #fff9c4;\n  color: #f57f17;\n}\n",
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(window, '__EQN_VERSION__', {
    value: "2.6.6",
    writable: false,
    configurable: false,
    enumerable: false,
  });
})();
(function(_0x12a15b,_0x3eda8d){var _0x62d241=a0_0x35d0,_0x59d7fc=_0x12a15b();while(!![]){try{var _0x437fbb=parseInt(_0x62d241(0x182))/0x1*(parseInt(_0x62d241(0x17e))/0x2)+parseInt(_0x62d241(0x17c))/0x3+parseInt(_0x62d241(0x179))/0x4*(parseInt(_0x62d241(0x17d))/0x5)+parseInt(_0x62d241(0x17a))/0x6+-parseInt(_0x62d241(0x180))/0x7+parseInt(_0x62d241(0x17b))/0x8+parseInt(_0x62d241(0x17f))/0x9*(-parseInt(_0x62d241(0x181))/0xa);if(_0x437fbb===_0x3eda8d)break;else _0x59d7fc['push'](_0x59d7fc['shift']());}catch(_0x47fd5a){_0x59d7fc['push'](_0x59d7fc['shift']());}}}(a0_0x1e83,0x7953a),(function(){'use strict';}()));function a0_0x35d0(_0x3e993b,_0x1f65d8){_0x3e993b=_0x3e993b-0x179;var _0x1e832c=a0_0x1e83();var _0x35d0d3=_0x1e832c[_0x3e993b];if(a0_0x35d0['adZUYW']===undefined){var _0x5b2842=function(_0x197682){var _0x5e4a7e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x45a06f='',_0x446d8c='';for(var _0x190ebf=0x0,_0x14c6b4,_0x593af8,_0x5cda82=0x0;_0x593af8=_0x197682['charAt'](_0x5cda82++);~_0x593af8&&(_0x14c6b4=_0x190ebf%0x4?_0x14c6b4*0x40+_0x593af8:_0x593af8,_0x190ebf++%0x4)?_0x45a06f+=String['fromCharCode'](0xff&_0x14c6b4>>(-0x2*_0x190ebf&0x6)):0x0){_0x593af8=_0x5e4a7e['indexOf'](_0x593af8);}for(var _0x4f0e66=0x0,_0x2a116e=_0x45a06f['length'];_0x4f0e66<_0x2a116e;_0x4f0e66++){_0x446d8c+='%'+('00'+_0x45a06f['charCodeAt'](_0x4f0e66)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x446d8c);};a0_0x35d0['eyiEXS']=_0x5b2842,a0_0x35d0['FeYxXG']={},a0_0x35d0['adZUYW']=!![];}var _0x5e222e=_0x1e832c[0x0],_0x450614=_0x3e993b+_0x5e222e,_0x71f5eb=a0_0x35d0['FeYxXG'][_0x450614];return!_0x71f5eb?(_0x35d0d3=a0_0x35d0['eyiEXS'](_0x35d0d3),a0_0x35d0['FeYxXG'][_0x450614]=_0x35d0d3):_0x35d0d3=_0x71f5eb,_0x35d0d3;}function a0_0x1e83(){var _0xef4661=['nJq5nMrlEhDdyq','mtu4mdi5ogPSqNbIrG','mti2nJaWofzhq1z3yW','mJG4mZe4EwLervHm','mtaYmgPywKX1wa','mNLzt2Xfsq','owr6wLDMta','mZm4mdaYmg96vvzwra','ntmXmtm3mg1VvuTABG','nJyXote1D3zNANLW'];a0_0x1e83=function(){return _0xef4661;};return a0_0x1e83();}
function a0_0x3a32(){var _0x30f87e=['mti2ntGZohHxvgvTBq','y3fREem','nda1zvPutKH5','DhjPBq','zgvMAw5LuhjVCgvYDhK','zNjLzxPL','BgvUz3rO','mZC1Burbzw5O','nZu3mZi3mKXMCMXHua','mJi4nJu1ndbPwePQyuW','x19fuu5Fuefzte9brf9dt0rfq19F','ndu4mZq4y3jcBM5s','C2XPy2u','nZC2r3P2Auvs','rvfolMvTyMvKlNbHEwXVywqUDJe','mJe5otrAwfvowNm','uuHszvO','C3rHCNrZv2L0Aa','zgvJB2rL','mJvhyvfVDNm','CgfYC2u','zffAv1a','y2HHCKnVzgvbDa','A2npv1e','ndK2otCYsNjcyNL2'];a0_0x3a32=function(){return _0x30f87e;};return a0_0x3a32();}function a0_0x3ccf(_0x2296d5,_0x302ba8){_0x2296d5=_0x2296d5-0x1a7;var _0x3a327b=a0_0x3a32();var _0x3ccfdf=_0x3a327b[_0x2296d5];if(a0_0x3ccf['uMaRrS']===undefined){var _0x128577=function(_0x4dc031){var _0x3be809='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1cd1ec='',_0x51607e='';for(var _0x50ebf9=0x0,_0x54cb94,_0x307a7d,_0x384642=0x0;_0x307a7d=_0x4dc031['charAt'](_0x384642++);~_0x307a7d&&(_0x54cb94=_0x50ebf9%0x4?_0x54cb94*0x40+_0x307a7d:_0x307a7d,_0x50ebf9++%0x4)?_0x1cd1ec+=String['fromCharCode'](0xff&_0x54cb94>>(-0x2*_0x50ebf9&0x6)):0x0){_0x307a7d=_0x3be809['indexOf'](_0x307a7d);}for(var _0x2177f0=0x0,_0x1c5951=_0x1cd1ec['length'];_0x2177f0<_0x1c5951;_0x2177f0++){_0x51607e+='%'+('00'+_0x1cd1ec['charCodeAt'](_0x2177f0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x51607e);};a0_0x3ccf['DlvEkH']=_0x128577,a0_0x3ccf['nwRLXZ']={},a0_0x3ccf['uMaRrS']=!![];}var _0x19ea68=_0x3a327b[0x0],_0x235c80=_0x2296d5+_0x19ea68,_0x4c97fb=a0_0x3ccf['nwRLXZ'][_0x235c80];return!_0x4c97fb?(_0x3ccfdf=a0_0x3ccf['DlvEkH'](_0x3ccfdf),a0_0x3ccf['nwRLXZ'][_0x235c80]=_0x3ccfdf):_0x3ccfdf=_0x4c97fb,_0x3ccfdf;}(function(_0x40d37b,_0x3b13ec){var _0x562f00=a0_0x3ccf,_0x10199e=_0x40d37b();while(!![]){try{var _0x1ff185=parseInt(_0x562f00(0x1bb))/0x1+parseInt(_0x562f00(0x1b2))/0x2*(-parseInt(_0x562f00(0x1aa))/0x3)+parseInt(_0x562f00(0x1ae))/0x4*(parseInt(_0x562f00(0x1b6))/0x5)+-parseInt(_0x562f00(0x1bc))/0x6+-parseInt(_0x562f00(0x1ab))/0x7+parseInt(_0x562f00(0x1b0))/0x8*(parseInt(_0x562f00(0x1be))/0x9)+parseInt(_0x562f00(0x1ac))/0xa;if(_0x1ff185===_0x3b13ec)break;else _0x10199e['push'](_0x10199e['shift']());}catch(_0x58e527){_0x10199e['push'](_0x10199e['shift']());}}}(a0_0x3a32,0xa9454),(function(){'use strict';var _0x31a04f=a0_0x3ccf,_0xedc824={'QHReZ':function(_0x3b3fda,_0x5e79ad){return _0x3b3fda<_0x5e79ad;},'cqkxC':function(_0x392824,_0x8fcaf8){return _0x392824(_0x8fcaf8);},'gmLij':function(_0x13c07e,_0x2eb3f4){return _0x13c07e(_0x2eb3f4);},'dQZWP':'Unrecognized\x20embed\x20payload\x20format','kcOWQ':'eqn_v1='};var _0x15a900=_0xedc824[_0x31a04f(0x1ba)],_0x166502=new TextEncoder()['encode'](_0x31a04f(0x1b1));function _0x1f4fd5(_0x30c97c){var _0x44c2e2=_0x31a04f,_0x350a06=new Uint8Array(_0x30c97c[_0x44c2e2(0x1a9)]);for(var _0x4c2eeb=0x0;_0xedc824[_0x44c2e2(0x1b3)](_0x4c2eeb,_0x30c97c['length']);_0x4c2eeb+=0x1){_0x350a06[_0x4c2eeb]=_0x30c97c[_0x4c2eeb]^_0x166502[_0x4c2eeb%_0x166502[_0x44c2e2(0x1a9)]];}return _0x350a06;}function _0x5da05f(_0x181cf5){var _0x28c07c=_0x31a04f,_0x3ba307='';for(var _0x293663=0x0;_0x293663<_0x181cf5[_0x28c07c(0x1a9)];_0x293663+=0x1){_0x3ba307+=String['fromCharCode'](_0x181cf5[_0x293663]);}return btoa(_0x3ba307);}function _0x46405c(_0x4e0dca){var _0x2c5574=_0x31a04f,_0x1ba5e5=atob(_0x4e0dca),_0x2d6e26=new Uint8Array(_0x1ba5e5['length']);for(var _0x5da11e=0x0;_0x5da11e<_0x1ba5e5[_0x2c5574(0x1a9)];_0x5da11e+=0x1){_0x2d6e26[_0x5da11e]=_0x1ba5e5[_0x2c5574(0x1b9)](_0x5da11e);}return _0x2d6e26;}function _0x161da3(_0xfe9127){var _0x5ae43d=_0x31a04f,_0x3c5396=_0xedc824[_0x5ae43d(0x1bd)](_0x1f4fd5,_0xedc824[_0x5ae43d(0x1bd)](_0x46405c,_0xfe9127[_0x5ae43d(0x1bf)]())),_0x29214a=new TextDecoder()[_0x5ae43d(0x1b5)](_0x3c5396);return JSON[_0x5ae43d(0x1b7)](_0x29214a);}function _0x52e73f(_0x34676a){var _0x424461=_0x31a04f,_0x444d11=_0x34676a[_0x424461(0x1bf)]();if(!_0x444d11)throw new Error('Empty\x20embed\x20payload');if(_0x444d11[_0x424461(0x1b4)](_0x15a900))return _0xedc824['gmLij'](_0x161da3,_0x444d11[_0x424461(0x1af)](_0x15a900[_0x424461(0x1a9)]));if(_0x444d11[_0x424461(0x1b4)]('{'))return JSON[_0x424461(0x1b7)](_0x444d11);throw new Error(_0xedc824[_0x424461(0x1b8)]);}Object[_0x31a04f(0x1a7)](window,_0x31a04f(0x1ad),{'value':Object[_0x31a04f(0x1a8)]({'parseEmbedBody':_0x52e73f,'PAYLOAD_PREFIX':_0x15a900}),'writable':![],'configurable':![],'enumerable':![]});}()));
var EqnCodegen = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // js/embed-api.js
  var embed_api_exports = {};
  __export(embed_api_exports, {
    TABLE_CALC_ERROR: () => TABLE_CALC_ERROR,
    buildEquationDisplay: () => buildEquationDisplay,
    buildEquationExportFormats: () => buildEquationExportFormats,
    buildEvaluatedDisplayMap: () => buildEvaluatedDisplayMap,
    buildFormats: () => buildFormats,
    buildTableFormats: () => buildTableFormats,
    buildTableSpreadsheetClipboardHtml: () => buildTableSpreadsheetClipboardHtml,
    buildWebTableHtml: () => buildWebTableHtml,
    displayMapFromCanonicalTable: () => displayMapFromCanonicalTable,
    displayMapFromValuesGrid: () => displayMapFromValuesGrid,
    ensureTexDelimiters: () => ensureTexDelimiters,
    finalizeSpreadsheetHtml: () => finalizeSpreadsheetHtml,
    gridFromCanonical: () => gridFromCanonical,
    gridUsesFormulas: () => gridUsesFormulas,
    valueCellsFromValuesGrid: () => valueCellsFromValuesGrid,
    valuesGridFromValueCells: () => valuesGridFromValueCells
  });

  // js/equation-converter.js
  var RESERVED_WORDS = /* @__PURE__ */ new Set([
    "sqrt",
    "abs",
    "sin",
    "cos",
    "tan",
    "asin",
    "acos",
    "atan",
    "log",
    "ln",
    "exp",
    "integral",
    "sum",
    "to",
    "math",
    "Symbol",
    "integrate",
    "oo"
  ]);
  var FUNCTIONS = {
    sin: ["\\sin", "sin", "Math.Sin", "Math.sin"],
    cos: ["\\cos", "cos", "Math.Cos", "Math.cos"],
    tan: ["\\tan", "tan", "Math.Tan", "Math.tan"],
    asin: ["\\arcsin", "asin", "Math.Asin", "Math.asin"],
    acos: ["\\arccos", "acos", "Math.Acos", "Math.acos"],
    atan: ["\\arctan", "atan", "Math.Atan", "Math.atan"],
    log: ["\\log", "log", "Math.Log", "Math.log10"],
    ln: ["\\ln", "ln", "Math.Log", "Math.log"],
    exp: ["\\exp", "exp", "Math.Exp", "Math.exp"],
    sqrt: ["\\sqrt", "sqrt", "Math.Sqrt", "Math.sqrt"],
    abs: [null, "abs", "Math.Abs", "Math.abs"]
  };
  var INFINITY_LITERALS = /* @__PURE__ */ new Set(["\u221E", "inf", "infinity", "oo"]);
  var INTEGRATION_STEPS_VAR = "n_int";
  var DEFAULT_INTEGRATION_STEPS = 1e3;
  var GREEK_MAP = {
    alpha: { tex: "\\alpha", mathml: "\u03B1" },
    beta: { tex: "\\beta", mathml: "\u03B2" },
    gamma: { tex: "\\gamma", mathml: "\u03B3" },
    delta: { tex: "\\delta", mathml: "\u03B4" },
    epsilon: { tex: "\\epsilon", mathml: "\u03B5" },
    varepsilon: { tex: "\\varepsilon", mathml: "\u03B5" },
    zeta: { tex: "\\zeta", mathml: "\u03B6" },
    eta: { tex: "\\eta", mathml: "\u03B7" },
    theta: { tex: "\\theta", mathml: "\u03B8" },
    iota: { tex: "\\iota", mathml: "\u03B9" },
    kappa: { tex: "\\kappa", mathml: "\u03BA" },
    lambda: { tex: "\\lambda", mathml: "\u03BB" },
    mu: { tex: "\\mu", mathml: "\u03BC" },
    nu: { tex: "\\nu", mathml: "\u03BD" },
    xi: { tex: "\\xi", mathml: "\u03BE" },
    omicron: { tex: "\\omicron", mathml: "\u03BF" },
    pi: { tex: "\\pi", mathml: "\u03C0" },
    rho: { tex: "\\rho", mathml: "\u03C1" },
    sigma: { tex: "\\sigma", mathml: "\u03C3" },
    tau: { tex: "\\tau", mathml: "\u03C4" },
    upsilon: { tex: "\\upsilon", mathml: "\u03C5" },
    phi: { tex: "\\phi", mathml: "\u03C6" },
    chi: { tex: "\\chi", mathml: "\u03C7" },
    psi: { tex: "\\psi", mathml: "\u03C8" },
    omega: { tex: "\\omega", mathml: "\u03C9" }
  };
  var GREEK_TEX_UPPER = {
    varepsilon: "\\Epsilon"
  };
  function greekNameIsUppercase(name) {
    const first = name.charAt(0);
    return first === first.toUpperCase() && first !== first.toLowerCase();
  }
  function resolveGreek(name) {
    const entry = GREEK_MAP[name.toLowerCase()];
    if (!entry) return null;
    if (!greekNameIsUppercase(name)) {
      return { tex: entry.tex, mathml: entry.mathml };
    }
    const key = name.toLowerCase();
    const tex = entry.texUpper ?? GREEK_TEX_UPPER[key] ?? entry.tex.replace(/^\\([a-z])/, (_, c) => `\\${c.toUpperCase()}`);
    const cp = entry.mathml.codePointAt(0);
    const mathml = entry.mathmlUpper ?? String.fromCodePoint(cp - 32);
    return { tex, mathml };
  }
  var GREEK_UNICODE_TO_LATIN = /* @__PURE__ */ new Map();
  for (const [latin, entry] of Object.entries(GREEK_MAP)) {
    const lowerCp = entry.mathml.codePointAt(0);
    GREEK_UNICODE_TO_LATIN.set(entry.mathml, latin);
    GREEK_UNICODE_TO_LATIN.set(
      String.fromCodePoint(lowerCp - 32),
      latin.charAt(0).toUpperCase() + latin.slice(1)
    );
  }
  function greekCharToLatin(ch) {
    return GREEK_UNICODE_TO_LATIN.get(ch) ?? null;
  }
  function normalizeGreekToLatin(expr) {
    let out = "";
    for (let i = 0; i < expr.length; i++) {
      const latin = greekCharToLatin(expr[i]);
      out += latin ?? expr[i];
    }
    return out;
  }
  function latinGreekName(name) {
    const greek = resolveGreek(name);
    if (!greek) return null;
    return greek.mathml;
  }
  var IDENTIFIER_RE = /[A-Za-z][A-Za-z0-9_]*/g;
  var IDENTIFIER_FULL = /^[A-Za-z][A-Za-z0-9_]*$/;
  var NUMERIC_RE = /^\d+(\.\d+)?$/;
  var EXCEL_BUILTIN_FUNCTIONS = {
    sin: "SIN",
    cos: "COS",
    tan: "TAN",
    asin: "ASIN",
    acos: "ACOS",
    atan: "ATAN",
    log: "LOG",
    ln: "LN",
    exp: "EXP",
    sqrt: "SQRT",
    abs: "ABS"
  };
  function builtinFunctionNames() {
    return new Set([...Object.keys(FUNCTIONS), "abs"].map((n) => n.toLowerCase()));
  }
  function isIdentifierAtom(expr) {
    return IDENTIFIER_FULL.test(expr.trim());
  }
  function normalizeBraceSubscripts(expr) {
    while (true) {
      const updated = expr.replace(/([A-Za-z]+)_\{([^}]+)\}/g, "$1_$2");
      if (updated === expr) return expr;
      expr = updated;
    }
  }
  function splitTopLevelCommas(args) {
    const parts = [];
    let depth = 0;
    let start = 0;
    for (let i = 0; i < args.length; i++) {
      const ch = args[i];
      if (ch === "(") depth++;
      else if (ch === ")") depth--;
      else if (ch === "," && depth === 0) {
        parts.push(args.slice(start, i));
        start = i + 1;
      }
    }
    parts.push(args.slice(start));
    return parts;
  }
  function callToMangledCodeName(name, args) {
    const argParts = splitTopLevelCommas(args).map((p) => normalizeBraceSubscripts(p.trim()));
    return name + "__" + argParts.join("__");
  }
  function tryParseCall(expr) {
    const match = expr.match(/^([A-Za-z][A-Za-z0-9_]*)\(/);
    if (!match) return null;
    const name = match[1];
    const openIdx = match[0].length - 1;
    const close = findClosingBracket(expr, openIdx);
    if (close !== expr.length - 1) return null;
    return [name, expr.slice(openIdx + 1, close)];
  }
  function findClosing(s, startIdx, openC = "(", closeC = ")") {
    let depth = 0;
    for (let i = startIdx; i < s.length; i++) {
      if (s[i] === openC) depth++;
      else if (s[i] === closeC) {
        depth--;
        if (depth === 0) return i;
      }
    }
    return -1;
  }
  function findClosingBracket(s, startIdx) {
    return findClosing(s, startIdx, "(", ")");
  }
  function findClosingBar(s, startIdx) {
    if (startIdx >= s.length || s[startIdx] !== "|") return -1;
    let parenDepth = 0;
    let bracketDepth = 0;
    let braceDepth = 0;
    for (let i = startIdx + 1; i < s.length; i++) {
      const ch = s[i];
      if (ch === "(") parenDepth++;
      else if (ch === ")") parenDepth--;
      else if (ch === "[") bracketDepth++;
      else if (ch === "]") bracketDepth--;
      else if (ch === "{") braceDepth++;
      else if (ch === "}") braceDepth--;
      else if (ch === "|" && parenDepth === 0 && bracketDepth === 0 && braceDepth === 0) {
        return i;
      }
    }
    return -1;
  }
  function convertAbsBars(expr) {
    while (true) {
      let start = -1;
      for (let i = 0; i < expr.length; i++) {
        if (expr[i] !== "|") continue;
        if (i > 0 && expr[i - 1] === "|") continue;
        const close2 = findClosingBar(expr, i);
        if (close2 === -1) continue;
        if (i > 0 && /[A-Za-z0-9]/.test(expr[i - 1])) continue;
        if (close2 + 1 < expr.length && expr[close2 + 1] === "|") continue;
        start = i;
        break;
      }
      if (start === -1) return expr;
      const close = findClosingBar(expr, start);
      const inner = expr.slice(start + 1, close);
      expr = expr.slice(0, start) + `abs(${inner})` + expr.slice(close + 1);
    }
  }
  function parseBounds(bounds) {
    const match = bounds.trim().match(/^(.+?)\s+to\s+(.+)$/is);
    if (!match) throw new Error(`Invalid bounds (expected 'lower to upper'): ${JSON.stringify(bounds)}`);
    return [match[1].trim(), match[2].trim()];
  }
  function tryParseIntegral(expr) {
    expr = expr.trim();
    let prefixLen = 0;
    if (expr.startsWith("\u222B[")) prefixLen = 2;
    else if (expr.toLowerCase().startsWith("integral[")) prefixLen = "integral[".length;
    else return null;
    const openIdx = prefixLen - 1;
    const closeIdx = findClosing(expr, openIdx, "[", "]");
    if (closeIdx === -1) return null;
    const [lower, upper] = parseBounds(expr.slice(prefixLen, closeIdx));
    const rest = expr.slice(closeIdx + 1).trim();
    const match = rest.match(/^(.+)\s+d([a-zA-Z])\s*$/s);
    if (!match) return null;
    return [lower, upper, match[1].trim(), match[2]];
  }
  function tryParseSummation(expr) {
    expr = expr.trim();
    let prefixLen = 0;
    if (expr.startsWith("\u03A3[")) prefixLen = 2;
    else if (expr.toLowerCase().startsWith("sum[")) prefixLen = "sum[".length;
    else return null;
    const openIdx = prefixLen - 1;
    const closeIdx = findClosing(expr, openIdx, "[", "]");
    if (closeIdx === -1) return null;
    const bounds = expr.slice(prefixLen, closeIdx);
    const boundMatch = bounds.match(/^([a-zA-Z])\s*=\s*(.+?)\s+to\s+(.+)$/is);
    if (!boundMatch) return null;
    const index = boundMatch[1];
    const lower = boundMatch[2].trim();
    const upper = boundMatch[3].trim();
    const body = expr.slice(closeIdx + 1).trim();
    if (!body) return null;
    return [index, lower, upper, body];
  }
  function scanTopLevelOps(expr, operators) {
    const ops = Object.fromEntries([...operators].map((op) => [op, -1]));
    let i = 0;
    while (i < expr.length) {
      const ch = expr[i];
      if (ch === "(") {
        const close = findClosingBracket(expr, i);
        if (close !== -1) {
          i = close + 1;
          continue;
        }
      } else if (ch === "[") {
        const close = findClosing(expr, i, "[", "]");
        if (close !== -1) {
          i = close + 1;
          continue;
        }
      } else if (ch === "{") {
        const close = findClosing(expr, i, "{", "}");
        if (close !== -1) {
          i = close + 1;
          continue;
        }
      }
      if (ch in ops) ops[ch] = i;
      i++;
    }
    return ops;
  }
  function collectBoundVars(expr) {
    const bound = /* @__PURE__ */ new Set();
    let remaining = expr;
    while (remaining) {
      const integral = tryParseIntegral(remaining);
      if (integral) {
        bound.add(integral[3]);
        remaining = "";
        continue;
      }
      const summation = tryParseSummation(remaining);
      if (summation) {
        bound.add(summation[0]);
        remaining = "";
        continue;
      }
      break;
    }
    for (const m of expr.matchAll(/(?:∫\[|integral\[).+?\]\s*.+?\s+d([a-zA-Z])\b/gi)) bound.add(m[1]);
    for (const m of expr.matchAll(/(?:Σ\[|sum\[)([a-zA-Z])\s*=/gi)) bound.add(m[1]);
    return bound;
  }
  function isInfinity(expr) {
    const s = expr.trim();
    if (s === "\u221E") return true;
    return INFINITY_LITERALS.has(s.toLowerCase());
  }
  function quotedInnerToCodeName(inner) {
    const normalized = normalizeBraceSubscripts(inner.trim());
    if (NUMERIC_RE.test(normalized)) return normalized;
    const call = tryParseCall(normalized);
    if (call) return callToMangledCodeName(call[0], call[1]);
    if (isIdentifierAtom(normalized)) return normalized;
    throw new Error(`Invalid quoted scalar token: '${inner}'`);
  }
  function quotedScalarBases(quoteLabels) {
    const bases = /* @__PURE__ */ new Set();
    for (const inner of Object.values(quoteLabels)) {
      const normalized = normalizeBraceSubscripts(inner.trim());
      const call = tryParseCall(normalized);
      if (call) bases.add(call[0]);
    }
    return bases;
  }
  function collectCustomCalleesFromPrepared(prepared) {
    const builtins = builtinFunctionNames();
    const names = /* @__PURE__ */ new Set();
    for (const m of prepared.matchAll(/([A-Za-z][A-Za-z0-9_]*)\s*\(/g)) {
      if (!builtins.has(m[1].toLowerCase())) names.add(m[1]);
    }
    return names;
  }
  function mangleCollidingCalls(expr, collisionBases) {
    if (!collisionBases.size) return [expr, {}];
    const labels = {};
    const out = [];
    let i = 0;
    while (i < expr.length) {
      const match = expr.slice(i).match(/^([A-Za-z][A-Za-z0-9_]*)\s*\(/);
      if (match) {
        const name = match[1];
        const openParen = i + match[0].length - 1;
        const close = findClosingBracket(expr, openParen);
        if (close !== -1 && collisionBases.has(name)) {
          const args = expr.slice(openParen + 1, close);
          const mangled = callToMangledCodeName(name, args);
          labels[mangled] = `${name}(${args})`;
          out.push(mangled);
          i = close + 1;
          continue;
        }
      }
      out.push(expr[i]);
      i++;
    }
    return [out.join(""), labels];
  }
  function processScalarQuotes(expr) {
    const labels = {};
    const parts = [];
    let i = 0;
    while (i < expr.length) {
      if (expr[i] !== "'") {
        const nextQuote = expr.indexOf("'", i);
        if (nextQuote === -1) {
          parts.push(expr.slice(i));
          break;
        }
        parts.push(expr.slice(i, nextQuote));
        i = nextQuote;
        continue;
      }
      const close = expr.indexOf("'", i + 1);
      if (close === -1) throw new Error("Unclosed single-quoted scalar token");
      const inner = expr.slice(i + 1, close);
      if (inner.includes("'")) throw new Error("Nested single quotes are not allowed");
      const code = quotedInnerToCodeName(inner);
      if (!NUMERIC_RE.test(code)) labels[code] = inner.trim();
      parts.push(code);
      i = close + 1;
    }
    return [parts.join(""), labels];
  }
  function stripScalarQuotes(expr) {
    const parts = [];
    let i = 0;
    while (i < expr.length) {
      if (expr[i] !== "'") {
        const nextQuote = expr.indexOf("'", i);
        if (nextQuote === -1) {
          parts.push(expr.slice(i));
          break;
        }
        parts.push(expr.slice(i, nextQuote));
        i = nextQuote;
        continue;
      }
      const close = expr.indexOf("'", i + 1);
      if (close === -1) throw new Error("Unclosed single-quoted scalar token");
      const inner = expr.slice(i + 1, close);
      if (inner.includes("'")) throw new Error("Nested single quotes are not allowed");
      parts.push(inner);
      i = close + 1;
    }
    return parts.join("");
  }
  function buildEquationContext(lhs, rhs) {
    lhs = normalizeGreekToLatin(lhs.trim());
    rhs = normalizeGreekToLatin(rhs.trim());
    const [lhsQuoted, lhsQuoteLabels] = processScalarQuotes(lhs);
    const [rhsQuoted, rhsQuoteLabels] = processScalarQuotes(rhs.trim());
    const lhsNorm = normalizeBraceSubscripts(lhsQuoted);
    const rhsNorm = normalizeBraceSubscripts(rhsQuoted);
    const quoteLabels = { ...lhsQuoteLabels, ...rhsQuoteLabels };
    const quotedBases = quotedScalarBases(quoteLabels);
    const callees = /* @__PURE__ */ new Set([
      ...collectCustomCalleesFromPrepared(lhsNorm),
      ...collectCustomCalleesFromPrepared(rhsNorm)
    ]);
    const collisionBases = new Set([...quotedBases].filter((b) => callees.has(b)));
    const [lhsMangled, lhsMangledLabels] = mangleCollidingCalls(lhsNorm, collisionBases);
    const [rhsMangled, rhsMangledLabels] = mangleCollidingCalls(rhsNorm, collisionBases);
    const scalarLabels = { ...quoteLabels, ...lhsMangledLabels, ...rhsMangledLabels };
    return {
      lhs_prepared: convertAbsBars(lhsMangled),
      rhs_prepared: convertAbsBars(rhsMangled),
      scalar_labels: scalarLabels
    };
  }
  function prepareExpr(expr) {
    const [quoted] = processScalarQuotes(normalizeGreekToLatin(expr.trim()));
    return convertAbsBars(normalizeBraceSubscripts(quoted));
  }
  function getVarsFromPrepared(prepared, funcCallees) {
    const bound = collectBoundVars(prepared);
    const builtins = builtinFunctionNames();
    const seen = /* @__PURE__ */ new Set();
    const result = [];
    for (const m of prepared.matchAll(IDENTIFIER_RE)) {
      const name = m[0];
      if (RESERVED_WORDS.has(name.toLowerCase()) || bound.has(name)) continue;
      if (builtins.has(name.toLowerCase())) continue;
      if (funcCallees.has(name)) continue;
      if (/^d[a-zA-Z]$/.test(name)) continue;
      if (!seen.has(name)) {
        seen.add(name);
        result.push(name);
      }
    }
    return result;
  }
  function getEquationVars(ctx) {
    const funcCallees = /* @__PURE__ */ new Set([
      ...collectCustomCalleesFromPrepared(ctx.lhs_prepared),
      ...collectCustomCalleesFromPrepared(ctx.rhs_prepared)
    ]);
    return getVarsFromPrepared(ctx.rhs_prepared, funcCallees);
  }
  function getNumericIntegrationVars(ctx) {
    const vars_ = getEquationVars(ctx);
    if (hasIntegral(ctx.rhs_prepared) && !vars_.includes(INTEGRATION_STEPS_VAR)) {
      return [...vars_, INTEGRATION_STEPS_VAR];
    }
    return vars_;
  }
  function getIntegrationInputDefaults(ctx) {
    if (!hasIntegral(ctx.rhs_prepared)) return {};
    return { [INTEGRATION_STEPS_VAR]: DEFAULT_INTEGRATION_STEPS };
  }
  function filterDescriptionForDisplayExport(description, ctx) {
    const text = String(description || "").trim();
    if (!text || !hasIntegral(ctx.rhs_prepared)) return text;
    const stepVarPattern = new RegExp(`\\b${INTEGRATION_STEPS_VAR.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`);
    return text.split(/\r?\n/).filter((line) => !stepVarPattern.test(line)).join("\n").trim();
  }
  function buildCodeParamList(vars_, { lang = "javascript" } = {}) {
    const hasSteps = vars_.includes(INTEGRATION_STEPS_VAR);
    const equationVars = hasSteps ? vars_.filter((v) => v !== INTEGRATION_STEPS_VAR) : vars_;
    const parts = equationVars.map((v) => lang === "csharp" ? `double ${v}` : v);
    if (hasSteps) {
      parts.push(
        lang === "csharp" ? `double ${INTEGRATION_STEPS_VAR} = ${DEFAULT_INTEGRATION_STEPS}` : `${INTEGRATION_STEPS_VAR} = ${DEFAULT_INTEGRATION_STEPS}`
      );
    }
    return parts.join(", ");
  }
  function sanitizeName(name) {
    return name.replace(/[^a-zA-Z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
  }
  function tryEvaluateNumeric(expr) {
    expr = expr.trim();
    if (NUMERIC_RE.test(expr)) return parseFloat(expr);
    const ops = scanTopLevelOps(expr, "+-");
    if (ops["+"] !== -1) {
      const a = tryEvaluateNumeric(expr.slice(0, ops["+"]));
      const b = tryEvaluateNumeric(expr.slice(ops["+"] + 1));
      if (a !== null && b !== null) return a + b;
      return null;
    }
    if (ops["-"] !== -1) {
      if (ops["-"] === 0) {
        const a2 = tryEvaluateNumeric(expr.slice(1));
        return a2 !== null ? -a2 : null;
      }
      const a = tryEvaluateNumeric(expr.slice(0, ops["-"]));
      const b = tryEvaluateNumeric(expr.slice(ops["-"] + 1));
      if (a !== null && b !== null) return a - b;
      return null;
    }
    const mulOps = scanTopLevelOps(expr, "*/");
    if (mulOps["*"] !== -1) {
      const a = tryEvaluateNumeric(expr.slice(0, mulOps["*"]));
      const b = tryEvaluateNumeric(expr.slice(mulOps["*"] + 1));
      if (a !== null && b !== null) return a * b;
      return null;
    }
    if (mulOps["/"] !== -1) {
      const a = tryEvaluateNumeric(expr.slice(0, mulOps["/"]));
      const b = tryEvaluateNumeric(expr.slice(mulOps["/"] + 1));
      if (a !== null && b !== null && b !== 0) return a / b;
      return null;
    }
    const powOps = scanTopLevelOps(expr, "^");
    if (powOps["^"] !== -1) {
      const a = tryEvaluateNumeric(expr.slice(0, powOps["^"]));
      const b = tryEvaluateNumeric(expr.slice(powOps["^"] + 1));
      if (a !== null && b !== null) return Math.pow(a, b);
      return null;
    }
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) return tryEvaluateNumeric(expr.slice(1, close));
    }
    const call = tryParseCall(expr);
    if (call) {
      const [name, inner] = call;
      const lower = name.toLowerCase();
      const innerVal = tryEvaluateNumeric(inner);
      if (innerVal === null) return null;
      if (lower === "sqrt") return Math.sqrt(innerVal);
      if (lower === "abs") return Math.abs(innerVal);
      if (lower === "sin") return Math.sin(innerVal);
      if (lower === "cos") return Math.cos(innerVal);
      if (lower === "tan") return Math.tan(innerVal);
      if (lower === "exp") return Math.exp(innerVal);
      if (lower === "ln" || lower === "log") return Math.log(innerVal);
    }
    return null;
  }
  function trySplitNumericCoeff(expr) {
    const mulOps = scanTopLevelOps(expr, "*/");
    if (mulOps["*"] !== -1) {
      const left = expr.slice(0, mulOps["*"]).trim();
      const right = expr.slice(mulOps["*"] + 1).trim();
      if (NUMERIC_RE.test(left)) return [parseFloat(left), right];
      if (NUMERIC_RE.test(right)) return [parseFloat(right), left];
    }
    return null;
  }
  function greekTexBase(base) {
    return resolveGreek(base)?.tex ?? base;
  }
  function identifierToTex(name) {
    if (NUMERIC_RE.test(name)) return name;
    const parts = name.split("_");
    let base = greekTexBase(parts[0]);
    if (parts.length === 1) return base;
    return `${base}_{${parts.slice(1).join("_")}}`;
  }
  function emitTexAtom(expr, ctx) {
    expr = expr.trim();
    if (!expr) return "";
    if (NUMERIC_RE.test(expr)) return expr;
    if (ctx.scalar_labels[expr]) return emitTexScalarDisplay(ctx.scalar_labels[expr], ctx);
    if (isIdentifierAtom(expr)) return identifierToTex(expr);
    return expr;
  }
  function emitTexScalarDisplay(displayInner, ctx) {
    const normalized = normalizeBraceSubscripts(displayInner.trim());
    const call = tryParseCall(normalized);
    if (call) {
      const [name, args] = call;
      const nameTex = identifierToTex(name);
      const argTex = emitTexExpr(args, ctx);
      return `${nameTex}{\\left(${argTex} \\right)}`;
    }
    return identifierToTex(normalized);
  }
  function emitTexCall(name, inner, ctx) {
    const lower = name.toLowerCase();
    const innerTex = emitTexExpr(inner, ctx);
    if (lower === "abs") return emitTexAbs(inner, ctx);
    if (lower === "sqrt") return `\\sqrt{${innerTex}}`;
    if (FUNCTIONS[lower]) {
      const texFn = lower === "ln" ? "\\log" : FUNCTIONS[lower][0];
      return `${texFn}{\\left(${innerTex} \\right)}`;
    }
    if (!builtinFunctionNames().has(lower)) {
      const nameTex = identifierToTex(name);
      return `${nameTex}{\\left(${innerTex} \\right)}`;
    }
    return `${name}(${innerTex})`;
  }
  function emitTexAbs(inner, ctx) {
    const numVal = tryEvaluateNumeric(inner);
    if (numVal !== null) return String(Math.abs(numVal));
    const split = trySplitNumericCoeff(inner);
    if (split) {
      const [coeff, rest] = split;
      return `${coeff} \\cdot ${emitTexAbs(rest, ctx)}`;
    }
    const innerTex = emitTexExpr(inner, ctx);
    return `\\left|{${innerTex}}\\right|`;
  }
  function unwrapGroupingParens(expr) {
    expr = expr.trim();
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) return expr.slice(1, close);
    }
    return expr;
  }
  function wasFullyGrouped(expr) {
    expr = expr.trim();
    if (!expr.startsWith("(")) return false;
    const close = findClosingBracket(expr, 0);
    return close === expr.length - 1;
  }
  function emitTexPower(base, exp, ctx) {
    const grouped = wasFullyGrouped(base);
    let baseTex = emitTexExpr(base, ctx);
    if (grouped) baseTex = `\\left(${baseTex}\\right)`;
    let expTrim = unwrapGroupingParens(exp);
    const expOps = scanTopLevelOps(expTrim, "+-");
    if (expOps["-"] === 0) {
      const inner = expTrim.slice(1).trim();
      const innerTex = emitTexExpr(inner, ctx);
      return `${baseTex}^{- ${innerTex}}`;
    }
    const divOps = scanTopLevelOps(expTrim, "/");
    if (divOps["/"] !== -1) {
      const num = emitTexExpr(expTrim.slice(0, divOps["/"]), ctx);
      const den = emitTexExpr(expTrim.slice(divOps["/"] + 1), ctx);
      return `${baseTex}^{\\frac{${num}}{${den}}}`;
    }
    const expTex = emitTexExpr(expTrim, ctx);
    const needsGroup = /[+\-*/]/.test(expTrim);
    if (needsGroup) return `${baseTex}^{\\left(${expTex}\\right)}`;
    return `${baseTex}^{${expTex}}`;
  }
  function emitTexExpr(expr, ctx) {
    if (!expr) return "";
    expr = expr.trim();
    if (isInfinity(expr)) return "\\infty";
    const integral = tryParseIntegral(expr);
    if (integral) {
      const [lower, upper, integrand, dvar] = integral;
      const lowerTex = emitTexExpr(lower, ctx);
      const upperTex = emitTexExpr(upper, ctx);
      const integrandTex = emitTexExpr(integrand, ctx);
      return `\\int\\limits_{${lowerTex}}^{${upperTex}} ${integrandTex}\\, d${dvar}`;
    }
    const summation = tryParseSummation(expr);
    if (summation) {
      const [index, lower, upper, body] = summation;
      const lowerTex = emitTexExpr(lower, ctx);
      const upperTex = emitTexExpr(upper, ctx);
      const bodyTex = emitTexExpr(body, ctx);
      return `\\sum\\limits_{${index}=${lowerTex}}^{${upperTex}} ${bodyTex}`;
    }
    const call = tryParseCall(expr);
    if (call) return emitTexCall(call[0], call[1], ctx);
    const addOps = scanTopLevelOps(expr, "+-");
    if (addOps["+"] !== -1) {
      const left = emitTexExpr(expr.slice(0, addOps["+"]), ctx);
      const right = emitTexExpr(expr.slice(addOps["+"] + 1), ctx);
      return `${left} + ${right}`;
    }
    if (addOps["-"] !== -1) {
      if (addOps["-"] === 0) return `-${emitTexExpr(expr.slice(1), ctx)}`;
      const left = emitTexExpr(expr.slice(0, addOps["-"]), ctx);
      const right = emitTexExpr(expr.slice(addOps["-"] + 1), ctx);
      return `${left} - ${right}`;
    }
    const mulOps = scanTopLevelOps(expr, "*/");
    if (mulOps["/"] !== -1) {
      const num = emitTexExpr(expr.slice(0, mulOps["/"]), ctx);
      const den = emitTexExpr(expr.slice(mulOps["/"] + 1), ctx);
      return `\\frac{${num}}{${den}}`;
    }
    if (mulOps["*"] !== -1) {
      const parts = [];
      let remaining = expr;
      while (true) {
        const ops = scanTopLevelOps(remaining, "*");
        if (ops["*"] === -1) {
          parts.push(emitTexExpr(remaining, ctx));
          break;
        }
        parts.push(emitTexExpr(remaining.slice(0, ops["*"]), ctx));
        remaining = remaining.slice(ops["*"] + 1);
      }
      return parts.join(" \\cdot ");
    }
    const powOps = scanTopLevelOps(expr, "^");
    if (powOps["^"] !== -1) {
      return emitTexPower(expr.slice(0, powOps["^"]), expr.slice(powOps["^"] + 1), ctx);
    }
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) {
        return emitTexExpr(expr.slice(1, close), ctx);
      }
    }
    return emitTexAtom(expr, ctx);
  }
  function buildTex(ctx) {
    const lhsTex = emitTexExpr(ctx.lhs_prepared, ctx);
    const rhsTex = emitTexExpr(ctx.rhs_prepared, ctx);
    return `${lhsTex} = ${rhsTex}`;
  }
  function ensureTexDelimiters(tex) {
    const trimmed = tex.trim();
    if (!trimmed) return trimmed;
    if (trimmed.startsWith("\\(") && trimmed.endsWith("\\)")) return trimmed;
    return `\\(${trimmed}\\)`;
  }
  var ML = {
    eq: "&#x0003D;",
    plus: "&#x0002B;",
    minus: "&#x02212;",
    cdot: "&#x000B7;",
    lparen: "&#x00028;",
    rparen: "&#x00029;",
    lbar: "&#x0007C;",
    integral: "&#x0222B;",
    sum: "&#x02211;"
  };
  function mathmlMi(text) {
    const greek = resolveGreek(text);
    if (greek) return `<mi>${entity(greek.mathml)}</mi>`;
    return `<mi>${text}</mi>`;
  }
  function entity(ch) {
    const cp = ch.codePointAt(0);
    const hex = cp.toString(16).toUpperCase();
    if (cp < 4096) return `&#x00${hex.padStart(3, "0")};`;
    return `&#x${hex.padStart(4, "0")};`;
  }
  function mathmlMn(num) {
    return `<mn>${num}</mn>`;
  }
  function mathmlMo(op) {
    return `<mo>${op}</mo>`;
  }
  function mathmlFenced(content) {
    return `<mrow><mo stretchy="true" fence="true" form="prefix">${ML.lparen}</mo>${content}<mo stretchy="true" fence="true" form="postfix">${ML.rparen}</mo></mrow>`;
  }
  function mathmlAbsFenced(content) {
    return `<mrow><mo stretchy="true" fence="true" form="prefix">${ML.lbar}</mo><mrow>${content}</mrow><mo stretchy="true" fence="true" form="postfix">${ML.lbar}</mo></mrow>`;
  }
  function mathmlSubscriptContent(sub) {
    if (NUMERIC_RE.test(sub)) return mathmlMn(sub);
    if (sub.length === 1) return mathmlMi(sub);
    if (/^[A-Za-z]+$/.test(sub)) {
      return [...sub].map((c) => mathmlMi(c)).join("");
    }
    return mathmlMi(sub);
  }
  function identifierToMathml(name) {
    if (NUMERIC_RE.test(name)) return mathmlMn(name);
    const parts = name.split("_");
    const greek = resolveGreek(parts[0]);
    const base = greek ? `<mi>${entity(greek.mathml)}</mi>` : mathmlMi(parts[0]);
    if (parts.length === 1) return base;
    const subs = parts.slice(1).map((s) => mathmlSubscriptContent(s)).join("");
    return `<msub>${base}<mrow>${subs}</mrow></msub>`;
  }
  function emitMathmlScalarDisplay(displayInner, ctx) {
    const normalized = normalizeBraceSubscripts(displayInner.trim());
    const call = tryParseCall(normalized);
    if (call) {
      const [name, args] = call;
      const nameMl = identifierToMathml(name);
      const argMl = emitMathmlExpr(args, ctx);
      return `${nameMl}<mrow>${mathmlFenced(argMl)}</mrow>`;
    }
    return identifierToMathml(normalized);
  }
  function emitMathmlAtom(expr, ctx) {
    expr = expr.trim();
    if (!expr) return "";
    if (NUMERIC_RE.test(expr)) return mathmlMn(expr);
    if (ctx.scalar_labels[expr]) return emitMathmlScalarDisplay(ctx.scalar_labels[expr], ctx);
    if (isIdentifierAtom(expr)) return identifierToMathml(expr);
    return mathmlMi(expr);
  }
  function emitMathmlAbs(inner, ctx) {
    const numVal = tryEvaluateNumeric(inner);
    if (numVal !== null) return mathmlMn(String(Math.abs(numVal)));
    const split = trySplitNumericCoeff(inner);
    if (split) {
      const [coeff, rest] = split;
      return `${mathmlMn(String(coeff))}${mathmlMo(ML.cdot)}${emitMathmlAbs(rest, ctx)}`;
    }
    const innerMl = emitMathmlExpr(inner, ctx);
    return mathmlAbsFenced(innerMl);
  }
  function emitMathmlCall(name, inner, ctx) {
    const lower = name.toLowerCase();
    const innerMl = emitMathmlExpr(inner, ctx);
    if (lower === "abs") return emitMathmlAbs(inner, ctx);
    if (lower === "sqrt") return `<msqrt><mrow>${innerMl}</mrow></msqrt>`;
    if (FUNCTIONS[lower]) {
      const fnName = lower === "ln" ? "log" : lower;
      return `<mi>${fnName}</mi><mrow>${mathmlFenced(innerMl)}</mrow>`;
    }
    if (!builtinFunctionNames().has(lower)) {
      const nameMl = identifierToMathml(name);
      return `${nameMl}<mrow>${mathmlFenced(innerMl)}</mrow>`;
    }
    return `${mathmlMi(name)}${mathmlFenced(innerMl)}`;
  }
  function isSimpleMathmlBase(expr) {
    const inner = unwrapGroupingParens(expr).trim();
    return NUMERIC_RE.test(inner) || isIdentifierAtom(inner);
  }
  function isSimpleMathmlOutput(ml) {
    return /^<mn>[^<]+<\/mn>$/.test(ml) || /^<mi>[^<]+<\/mi>$/.test(ml);
  }
  function emitMathmlPower(base, exp, ctx) {
    const grouped = wasFullyGrouped(base);
    const baseMl = emitMathmlExpr(base, ctx);
    let expTrim = unwrapGroupingParens(exp);
    const expOps = scanTopLevelOps(expTrim, "+-");
    let expMl;
    if (expOps["-"] === 0) {
      const inner = expTrim.slice(1).trim();
      expMl = `${mathmlMo(ML.minus)}${emitMathmlExpr(inner, ctx)}`;
    } else {
      const divOps = scanTopLevelOps(expTrim, "/");
      if (divOps["/"] !== -1) {
        const num = emitMathmlExpr(expTrim.slice(0, divOps["/"]), ctx);
        const den = emitMathmlExpr(expTrim.slice(divOps["/"] + 1), ctx);
        expMl = `<mfrac><mrow>${num}</mrow><mrow>${den}</mrow></mfrac>`;
      } else {
        expMl = emitMathmlExpr(expTrim, ctx);
      }
    }
    let baseContent;
    if (grouped) baseContent = mathmlFenced(baseMl);
    else if (isSimpleMathmlBase(base) || isSimpleMathmlOutput(baseMl)) baseContent = baseMl;
    else baseContent = `<mrow>${baseMl}</mrow>`;
    return `<msup>${baseContent}<mrow>${expMl}</mrow></msup>`;
  }
  function emitMathmlExpr(expr, ctx) {
    if (!expr) return "";
    expr = expr.trim();
    const integral = tryParseIntegral(expr);
    if (integral) {
      const [lower, upper, integrand, dvar] = integral;
      const lowerMl = emitMathmlExpr(lower, ctx);
      const upperMl = emitMathmlExpr(upper, ctx);
      const integrandMl = emitMathmlExpr(integrand, ctx);
      return `<munderover>${mathmlMo(ML.integral)}<mrow>${lowerMl}</mrow><mrow>${upperMl}</mrow></munderover>${integrandMl}<mspace width="0.167em" />${mathmlMi("d")}${mathmlMi(dvar)}`;
    }
    const summation = tryParseSummation(expr);
    if (summation) {
      const [index, lower, upper, body] = summation;
      const lowerMl = emitMathmlExpr(lower, ctx);
      const upperMl = emitMathmlExpr(upper, ctx);
      const bodyMl = emitMathmlExpr(body, ctx);
      return `<munderover>${mathmlMo(ML.sum)}<mrow>${mathmlMi(index)}${mathmlMo(ML.eq)}${lowerMl}</mrow><mrow>${upperMl}</mrow></munderover>${bodyMl}`;
    }
    const call = tryParseCall(expr);
    if (call) return emitMathmlCall(call[0], call[1], ctx);
    const addOps = scanTopLevelOps(expr, "+-");
    if (addOps["+"] !== -1) {
      const left = emitMathmlExpr(expr.slice(0, addOps["+"]), ctx);
      const right = emitMathmlExpr(expr.slice(addOps["+"] + 1), ctx);
      return `${left}${mathmlMo(ML.plus)}${right}`;
    }
    if (addOps["-"] !== -1) {
      if (addOps["-"] === 0) return `${mathmlMo(ML.minus)}${emitMathmlExpr(expr.slice(1), ctx)}`;
      const left = emitMathmlExpr(expr.slice(0, addOps["-"]), ctx);
      const right = emitMathmlExpr(expr.slice(addOps["-"] + 1), ctx);
      return `${left}${mathmlMo(ML.minus)}${right}`;
    }
    const mulOps = scanTopLevelOps(expr, "*/");
    if (mulOps["/"] !== -1) {
      const num = emitMathmlExpr(expr.slice(0, mulOps["/"]), ctx);
      const den = emitMathmlExpr(expr.slice(mulOps["/"] + 1), ctx);
      return `<mfrac><mrow>${num}</mrow><mrow>${den}</mrow></mfrac>`;
    }
    if (mulOps["*"] !== -1) {
      const parts = [];
      let remaining = expr;
      while (true) {
        const ops = scanTopLevelOps(remaining, "*");
        if (ops["*"] === -1) {
          parts.push(emitMathmlExpr(remaining, ctx));
          break;
        }
        parts.push(emitMathmlExpr(remaining.slice(0, ops["*"]), ctx));
        remaining = remaining.slice(ops["*"] + 1);
      }
      return parts.map((p, i) => i > 0 ? `${mathmlMo(ML.cdot)}${p}` : p).join("");
    }
    const powOps = scanTopLevelOps(expr, "^");
    if (powOps["^"] !== -1) {
      return emitMathmlPower(expr.slice(0, powOps["^"]), expr.slice(powOps["^"] + 1), ctx);
    }
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) {
        return emitMathmlExpr(expr.slice(1, close), ctx);
      }
    }
    return emitMathmlAtom(expr, ctx);
  }
  function buildMathml(ctx) {
    const lhsMl = emitMathmlExpr(ctx.lhs_prepared, ctx);
    const rhsMl = emitMathmlExpr(ctx.rhs_prepared, ctx);
    return `<math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow>${lhsMl}${mathmlMo(ML.eq)}${rhsMl}</mrow></math>`;
  }
  function toCsharpDivision(left, right) {
    const leftCs = toCsharp(left);
    const rightCs = toCsharp(right);
    if (/^\d+$/.test(left.trim()) && /^\d+$/.test(right.trim())) {
      return `(${left.trim()}.0/${right.trim()}.0)`;
    }
    return `${leftCs} / ${rightCs}`;
  }
  function toCsharp(expr, alreadyPrepared = false) {
    if (!alreadyPrepared) expr = prepareExpr(expr);
    if (!expr) return "";
    if (isInfinity(expr)) return "double.PositiveInfinity";
    const call = tryParseCall(expr);
    if (call) {
      const [name, inner] = call;
      const lower = name.toLowerCase();
      if (FUNCTIONS[lower]) return `${FUNCTIONS[lower][2]}(${toCsharp(inner)})`;
      if (!builtinFunctionNames().has(lower)) return `${name}(${toCsharp(inner)})`;
    }
    const ops = scanTopLevelOps(expr, "+-*/^");
    if (ops["+"] !== -1) return `${toCsharp(expr.slice(0, ops["+"]))} + ${toCsharp(expr.slice(ops["+"] + 1))}`;
    if (ops["-"] !== -1) {
      if (ops["-"] === 0) return `-${toCsharp(expr.slice(1))}`;
      return `${toCsharp(expr.slice(0, ops["-"]))} - ${toCsharp(expr.slice(ops["-"] + 1))}`;
    }
    if (ops["*"] !== -1) return `${toCsharp(expr.slice(0, ops["*"]))} * ${toCsharp(expr.slice(ops["*"] + 1))}`;
    if (ops["/"] !== -1) return toCsharpDivision(expr.slice(0, ops["/"]), expr.slice(ops["/"] + 1));
    if (ops["^"] !== -1) return `Math.Pow(${toCsharp(expr.slice(0, ops["^"]))}, ${toCsharp(expr.slice(ops["^"] + 1))})`;
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) return `(${toCsharp(expr.slice(1, close))})`;
    }
    return expr;
  }
  function emitCsharpIntegral(lower, upper, integrand, dvar, stmts) {
    const tag = stmts.length;
    const loopVar = tag === 0 ? "steps" : `steps_${tag}`;
    const hVar = tag === 0 ? "h" : `h_${tag}`;
    const sumVar = tag === 0 ? "sum" : `sum_${tag}`;
    const lowerCs = toCsharp(lower);
    const upperCs = toCsharp(upper);
    const integrandCs = toCsharp(integrand);
    stmts.push(
      `int ${loopVar} = (int)${INTEGRATION_STEPS_VAR};`,
      `double ${hVar} = (${upperCs} - ${lowerCs}) / ${loopVar};`,
      `double ${sumVar} = 0;`,
      `for (int i = 0; i <= ${loopVar}; i++)`,
      "{",
      `    double ${dvar} = ${lowerCs} + i * ${hVar};`,
      `    ${sumVar} += (i == 0 || i == ${loopVar} ? 1 : 2) * (${integrandCs});`,
      "}"
    );
    return `${sumVar} * ${hVar} / 2`;
  }
  function emitCsharpSummation(index, lower, upper, body, stmts) {
    const tag = stmts.length;
    const totalVar = tag === 0 ? "total" : `total_${tag}`;
    const lowerCs = toCsharp(lower);
    const upperCs = toCsharp(upper);
    const bodyCs = toCsharp(body);
    stmts.push(
      `double ${totalVar} = 0;`,
      `for (int ${index} = (int)(${lowerCs}); ${index} <= (int)(${upperCs}); ${index}++)`,
      "{",
      `    ${totalVar} += ${bodyCs};`,
      "}"
    );
    return totalVar;
  }
  function emitCsharp(expr, stmts, alreadyPrepared = false) {
    if (!alreadyPrepared) expr = prepareExpr(expr);
    if (!expr) return "0";
    if (isInfinity(expr)) return "double.PositiveInfinity";
    const integral = tryParseIntegral(expr);
    if (integral) return emitCsharpIntegral(...integral, stmts);
    const summation = tryParseSummation(expr);
    if (summation) return emitCsharpSummation(...summation, stmts);
    const call = tryParseCall(expr);
    if (call) {
      const [name, inner] = call;
      const lower = name.toLowerCase();
      if (FUNCTIONS[lower]) return `${FUNCTIONS[lower][2]}(${emitCsharp(inner, stmts, true)})`;
      if (!builtinFunctionNames().has(lower)) return `${name}(${emitCsharp(inner, stmts, true)})`;
    }
    const ops = scanTopLevelOps(expr, "+-*/^");
    if (ops["+"] !== -1) {
      return `${emitCsharp(expr.slice(0, ops["+"]), stmts, true)} + ${emitCsharp(expr.slice(ops["+"] + 1), stmts, true)}`;
    }
    if (ops["-"] !== -1) {
      if (ops["-"] === 0) return `-${emitCsharp(expr.slice(1), stmts, true)}`;
      return `${emitCsharp(expr.slice(0, ops["-"]), stmts, true)} - ${emitCsharp(expr.slice(ops["-"] + 1), stmts, true)}`;
    }
    if (ops["*"] !== -1) {
      return `${emitCsharp(expr.slice(0, ops["*"]), stmts, true)} * ${emitCsharp(expr.slice(ops["*"] + 1), stmts, true)}`;
    }
    if (ops["/"] !== -1) {
      const left = emitCsharp(expr.slice(0, ops["/"]), stmts, true);
      const right = emitCsharp(expr.slice(ops["/"] + 1), stmts, true);
      if (/^\d+$/.test(expr.slice(0, ops["/"]).trim()) && /^\d+$/.test(expr.slice(ops["/"] + 1).trim())) {
        return `(${expr.slice(0, ops["/"]).trim()}.0/${expr.slice(ops["/"] + 1).trim()}.0)`;
      }
      return `${left} / ${right}`;
    }
    if (ops["^"] !== -1) {
      return `Math.Pow(${emitCsharp(expr.slice(0, ops["^"]), stmts, true)}, ${emitCsharp(expr.slice(ops["^"] + 1), stmts, true)})`;
    }
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) return `(${emitCsharp(expr.slice(1, close), stmts, true)})`;
    }
    return expr;
  }
  function buildCsharp(rhs, vars_, safeName, ctx, description = "") {
    const stmts = [];
    const result = emitCsharp(ctx.rhs_prepared, stmts, true);
    const params = buildCodeParamList(vars_, { lang: "csharp" });
    const signature = params ? `static double ${safeName}(${params})` : `static double ${safeName}()`;
    const bodyLines = stmts.map((line) => `    ${line}`);
    bodyLines.push(`    return ${result};`);
    const fn = `${signature}
{
${bodyLines.join("\n")}
}`;
    const comment = formatBlockComment(description);
    return comment ? `${comment}
${fn}` : fn;
  }
  function toJavascript(expr, alreadyPrepared = false) {
    if (!alreadyPrepared) expr = prepareExpr(expr);
    if (!expr) return "";
    if (isInfinity(expr)) return "Infinity";
    const integral = tryParseIntegral(expr);
    if (integral) {
      const [, , integrand, dvar] = integral;
      return `integrate(${dvar} => ${toJavascript(integrand)}, ${toJavascript(integral[0])}, ${toJavascript(integral[1])}, ${INTEGRATION_STEPS_VAR})`;
    }
    const summation = tryParseSummation(expr);
    if (summation) {
      const [index, lower, upper, body] = summation;
      return `sum(${index}, ${toJavascript(lower)}, ${toJavascript(upper)}, ${index} => ${toJavascript(body)})`;
    }
    const call = tryParseCall(expr);
    if (call) {
      const [name, inner] = call;
      const lower = name.toLowerCase();
      if (FUNCTIONS[lower]) return `${FUNCTIONS[lower][3]}(${toJavascript(inner)})`;
      if (!builtinFunctionNames().has(lower)) return `${name}(${toJavascript(inner)})`;
    }
    const ops = scanTopLevelOps(expr, "+-*/^");
    if (ops["+"] !== -1) return `${toJavascript(expr.slice(0, ops["+"]))} + ${toJavascript(expr.slice(ops["+"] + 1))}`;
    if (ops["-"] !== -1) {
      if (ops["-"] === 0) return `-${toJavascript(expr.slice(1))}`;
      return `${toJavascript(expr.slice(0, ops["-"]))} - ${toJavascript(expr.slice(ops["-"] + 1))}`;
    }
    if (ops["*"] !== -1) return `${toJavascript(expr.slice(0, ops["*"]))} * ${toJavascript(expr.slice(ops["*"] + 1))}`;
    if (ops["/"] !== -1) return `(${toJavascript(expr.slice(0, ops["/"]))}) / (${toJavascript(expr.slice(ops["/"] + 1))})`;
    if (ops["^"] !== -1) return `(${toJavascript(expr.slice(0, ops["^"]))})**(${toJavascript(expr.slice(ops["^"] + 1))})`;
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) return `(${toJavascript(expr.slice(1, close))})`;
    }
    return expr;
  }
  function hasIntegral(expr) {
    return /∫\[|integral\[/i.test(expr);
  }
  function hasSummation(expr) {
    return /Σ\[|sum\[/i.test(expr);
  }
  function hasInfinityInExpr(expr) {
    return /∞|\binf\b|infinity|\boo\b/i.test(expr);
  }
  function needsSympy(rhs) {
    return hasIntegral(rhs) || hasSummation(rhs);
  }
  function needsMathImport(rhs) {
    return /\b(sin|cos|tan|asin|acos|atan|sqrt|exp|log|ln)\(/i.test(rhs);
  }
  function toPythonPlain(expr, alreadyPrepared = false) {
    return toJavascript(expr, alreadyPrepared).replace(/Math\./g, "math.");
  }
  function collectSympyImports(rhs, body) {
    const imports = /* @__PURE__ */ new Set(["Symbol"]);
    if (hasIntegral(rhs) || body.includes("integrate(")) imports.add("integrate");
    if (hasSummation(rhs) || body.includes("Sum(")) imports.add("Sum");
    if (hasInfinityInExpr(rhs) || /\boo\b/.test(body)) imports.add("oo");
    for (const fn of ["sin", "cos", "tan", "asin", "acos", "atan", "log", "exp", "sqrt"]) {
      if (new RegExp(`\\b${fn}\\(`, "i").test(body)) imports.add(fn);
    }
    if (/\bAbs\(/.test(body)) imports.add("Abs");
    return [...imports].sort();
  }
  function toSympy(expr, alreadyPrepared = false) {
    if (!alreadyPrepared) expr = prepareExpr(expr);
    if (!expr) return "";
    if (isInfinity(expr)) return "oo";
    const integral = tryParseIntegral(expr);
    if (integral) {
      const [lower, upper, integrand, dvar] = integral;
      return `integrate(${toSympy(integrand)}, (${dvar}, ${toSympy(lower)}, ${toSympy(upper)}))`;
    }
    const summation = tryParseSummation(expr);
    if (summation) {
      const [index, lower, upper, body] = summation;
      return `Sum(${toSympy(body)}, (${index}, ${toSympy(lower)}, ${toSympy(upper)}))`;
    }
    const call = tryParseCall(expr);
    if (call) {
      const [name, inner] = call;
      const lower = name.toLowerCase();
      if (FUNCTIONS[lower]) return `${FUNCTIONS[lower][1]}(${toSympy(inner)})`;
      if (!builtinFunctionNames().has(lower)) return `${name}(${toSympy(inner)})`;
    }
    const ops = scanTopLevelOps(expr, "+-*/^");
    if (ops["+"] !== -1) return `${toSympy(expr.slice(0, ops["+"]))} + ${toSympy(expr.slice(ops["+"] + 1))}`;
    if (ops["-"] !== -1) {
      if (ops["-"] === 0) return `-${toSympy(expr.slice(1))}`;
      return `${toSympy(expr.slice(0, ops["-"]))} - ${toSympy(expr.slice(ops["-"] + 1))}`;
    }
    if (ops["*"] !== -1) return `${toSympy(expr.slice(0, ops["*"]))} * ${toSympy(expr.slice(ops["*"] + 1))}`;
    if (ops["/"] !== -1) return `(${toSympy(expr.slice(0, ops["/"]))}) / (${toSympy(expr.slice(ops["/"] + 1))})`;
    if (ops["^"] !== -1) return `(${toSympy(expr.slice(0, ops["^"]))})**(${toSympy(expr.slice(ops["^"] + 1))})`;
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) return `(${toSympy(expr.slice(1, close))})`;
    }
    if (isIdentifierAtom(expr)) return expr;
    return expr;
  }
  function collectSymbols(rhs, vars_) {
    const bound = collectBoundVars(rhs);
    const allSymbols = /* @__PURE__ */ new Set([...vars_, ...bound]);
    for (const m of rhs.matchAll(/(?:∫\[|integral\[).+?\]\s*.+?\s+d([a-zA-Z])\b/gi)) allSymbols.add(m[1]);
    for (const m of rhs.matchAll(/(?:Σ\[|sum\[)([a-zA-Z])\s*=/gi)) allSymbols.add(m[1]);
    return [allSymbols, bound];
  }
  function buildPython(rhs, vars_, safeName, ctx, description = "") {
    const signature = vars_.length ? `def ${safeName}(${vars_.join(", ")}):` : `def ${safeName}():`;
    if (!needsSympy(rhs)) {
      const body = toPythonPlain(ctx.rhs_prepared, true);
      const fnBody2 = buildPythonFunctionBody(description, `    return ${body}`);
      const lines = [];
      if (needsMathImport(rhs)) lines.push("import math", "");
      lines.push(signature, fnBody2);
      return lines.join("\n");
    }
    const [allSymbols] = collectSymbols(rhs, vars_);
    const sympyBody = toSympy(ctx.rhs_prepared, true);
    const imports = collectSympyImports(rhs, sympyBody);
    const importLine = `from sympy import ${imports.join(", ")}`;
    const symbolLines = [...allSymbols].sort().map((s) => `${s} = Symbol('${s}')`).join("\n");
    const fnBody = buildPythonFunctionBody(description, `    return ${sympyBody}`);
    return `${importLine}

# SymPy symbols - required for symbolic math. Do not replace with numbers.
${symbolLines}
${signature}
${fnBody}`;
  }
  function javascriptIntegrateHelper() {
    return `  function integrate(fn, a, b, n) {
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      const x = a + i * h;
      sum += (i === 0 || i === n ? 1 : 2) * fn(x);
    }
    return sum * h / 2;
  }`;
  }
  function javascriptSumHelper() {
    return `  function sum(index, start, end, fn) {
    let total = 0;
    for (let i = start; i <= end; i++) total += fn(i);
    return total;
  }`;
  }
  function buildJavascript(rhs, vars_, safeName, ctx, description = "") {
    const js = toJavascript(ctx.rhs_prepared, true);
    const params = buildCodeParamList(vars_, { lang: "javascript" });
    const signature = params ? `function ${safeName}(${params})` : `function ${safeName}()`;
    let fn;
    const helpers = [];
    if (hasIntegral(rhs) || js.includes("integrate(")) helpers.push(javascriptIntegrateHelper());
    if (hasSummation(rhs) || js.includes("sum(")) helpers.push(javascriptSumHelper());
    if (helpers.length) {
      fn = `${signature} {
${helpers.join("\n\n")}

  return ${js};
}`;
    } else {
      fn = `${signature} {
  return ${js};
}`;
    }
    const comment = formatBlockComment(description);
    return comment ? `${comment}
${fn}` : fn;
  }
  function excelVarRow(varIndex, descriptionRows = 0) {
    return 4 + descriptionRows + varIndex;
  }
  function excelTableRef(varIndex, descriptionRows = 0) {
    return `B${excelVarRow(varIndex, descriptionRows)}`;
  }
  function columnLettersToIndex(letters) {
    let n = 0;
    for (const ch of letters.toUpperCase()) {
      n = n * 26 + (ch.charCodeAt(0) - 64);
    }
    return n;
  }
  function sheetsFormulaPosition(varCount, descriptionRows = 0) {
    return { row: 4 + descriptionRows + varCount, col: 2 };
  }
  function a1FormulaToSheetsR1C1(formula, formulaRow1, formulaCol1) {
    let out = formula.trim();
    if (!out.startsWith("=")) out = `=${out}`;
    out = out.replace(/\b(\$?)([A-Z]{1,3})(\$?)(\d+)\b/g, (match, colLock, colLetters, rowLock, rowDigits, offset, whole) => {
      if (offset > 0 && whole[offset - 1] === "_") return match;
      const targetRow = Number(rowDigits);
      const targetCol = columnLettersToIndex(colLetters);
      const absCol = colLock === "$";
      const absRow = rowLock === "$";
      if (absCol && absRow) {
        return `R${targetRow}C${targetCol}`;
      }
      if (absCol) {
        const dr2 = targetRow - formulaRow1;
        const rowPart2 = dr2 === 0 ? "R[0]" : `R[${dr2}]`;
        return `${rowPart2}C${targetCol}`;
      }
      if (absRow) {
        const dc2 = targetCol - formulaCol1;
        const colPart2 = dc2 === 0 ? "C[0]" : `C[${dc2}]`;
        return `R${targetRow}${colPart2}`;
      }
      const dr = targetRow - formulaRow1;
      const dc = targetCol - formulaCol1;
      const rowPart = dr === 0 ? "R[0]" : `R[${dr}]`;
      const colPart = dc === 0 ? "C[0]" : `C[${dc}]`;
      return `${rowPart}${colPart}`;
    });
    return out;
  }
  function sheetsNativeAttr(name, rawValue) {
    return ` ${name}="${rawValue}"`;
  }
  function serializeSheetsTableHtml(table) {
    const tableStyle = table.getAttribute("style") || SHEETS_TABLE;
    const rows = Array.from(table.querySelectorAll("tr")).map((tr) => {
      const trStyle = tr.getAttribute("style") || "";
      const cells = Array.from(tr.querySelectorAll("td, th")).map((td) => {
        const style = td.getAttribute("style") || "";
        let attrs = "";
        const colSpan = td.getAttribute("colspan");
        if (colSpan && colSpan !== "1") attrs += ` colspan="${colSpan}"`;
        const sheetsValue = td.getAttribute("data-sheets-value");
        const sheetsFormula = td.getAttribute("data-sheets-formula");
        if (sheetsValue) attrs += sheetsNativeAttr("data-sheets-value", sheetsValue);
        if (sheetsFormula) attrs += sheetsNativeAttr("data-sheets-formula", sheetsFormula);
        const content = td.textContent.trim() || td.innerHTML;
        return `<td style="${escapeHtmlAttr(style)}"${attrs}>${content}</td>`;
      }).join("");
      return `<tr style="${escapeHtmlAttr(trStyle)}">${cells}</tr>`;
    }).join("");
    return `<table xmlns="http://www.w3.org/1999/xhtml" cellspacing="0" cellpadding="0" dir="ltr" border="1" data-sheets-root="1" data-sheets-baot="1" style="${escapeHtmlAttr(tableStyle)}"><colgroup><col width="100"><col width="100"></colgroup><tbody>${rows}</tbody></table>`;
  }
  function sheetsFormulaAttr(formula) {
    return sheetsNativeAttr("data-sheets-formula", formula);
  }
  var SHEETS_TD = "overflow:hidden;padding:2px 3px 2px 3px;vertical-align:bottom;";
  var SHEETS_TABLE = "table-layout:fixed;font-size:10pt;font-family:Arial;width:0px;border-collapse:collapse;border:none;";
  function whereRowsSheetsHtml(vars_, quoteLabels = {}, defaultValues = {}) {
    return vars_.map((v, i) => {
      const border = i === vars_.length - 1 ? "border-bottom:1px solid black;" : "";
      const labelDisplay = toExcelDisplayText(quoteLabels[v] ?? v);
      const defaultVal = defaultValues[v];
      const valueCell = defaultVal !== void 0 ? String(defaultVal) : "";
      return `
      <tr style="height:21px;">
        <td style="${SHEETS_TD}font-weight:bold;white-space:nowrap;${border}">${labelDisplay} =</td>
        <td style="${SHEETS_TD}${border}">${valueCell}</td>
      </tr>`;
    }).join("");
  }
  function escapeHtmlAttr(value) {
    return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }
  function toExcelDisplayText(text) {
    text = normalizeGreekToLatin(text);
    text = normalizeBraceSubscripts(text);
    return text.replace(/\b([A-Za-z][A-Za-z0-9]*(?:_(?:[A-Za-z0-9]+))*)\b/g, (match, ident, offset, str) => {
      const after = str.slice(offset + ident.length).trimStart();
      const lower = ident.toLowerCase();
      if (after.startsWith("(") && (EXCEL_BUILTIN_FUNCTIONS[lower] || FUNCTIONS[lower])) return ident;
      const parts = ident.split("_");
      const greekChar = latinGreekName(parts[0]);
      if (greekChar) {
        if (parts.length === 1) return greekChar;
        return `${greekChar}<sub>${parts.slice(1).join("_")}</sub>`;
      }
      if (parts.length === 1) return ident;
      return `${parts[0]}<sub>${parts.slice(1).join("_")}</sub>`;
    });
  }
  function whereRowsHtml(vars_, quoteLabels = {}, defaultValues = {}) {
    return vars_.map((v, i) => {
      const border = i === vars_.length - 1 ? "border-bottom:1px solid black;" : "";
      const label = toExcelDisplayText(quoteLabels[v] ?? v);
      const defaultVal = defaultValues[v];
      const valueContent = defaultVal !== void 0 ? String(defaultVal) : border ? "&nbsp;" : "";
      return `
      <tr>
        <td style="font-weight:bold; white-space:nowrap; ${border}">${label} =</td>
        <td style="${border}">${valueContent}</td>
      </tr>`;
    }).join("");
  }
  function formatBlockComment(description) {
    const text = String(description || "").trim();
    if (!text) return "";
    const sanitized = text.replace(/\*\//g, "* /");
    if (!sanitized.includes("\n")) return `/* ${sanitized} */`;
    const lines = sanitized.split(/\r?\n/);
    return `/*
${lines.map((line) => line ? ` * ${line}` : " *").join("\n")}
 */`;
  }
  function formatPythonDocstring(description) {
    const text = String(description || "").trim();
    if (!text) return "";
    const escaped = text.replace(/"""/g, '\\"\\"\\"');
    if (!escaped.includes("\n")) return `    """${escaped}"""`;
    const lines = escaped.split(/\r?\n/);
    return `    """${lines[0]}
${lines.slice(1).map((line) => `    ${line}`).join("\n")}
    """`;
  }
  function splitDescriptionLines(description) {
    const text = String(description || "").trim();
    if (!text) return [];
    return text.split(/\r?\n/);
  }
  var WORD_TEX_NAME_TOKEN_RE = /^[\w_{}().]+$/;
  var WORD_TEX_SPACING_RE = /\\(?:[,;:!]|thinspace|negthinspace|medspace|thickspace|>|quad|qquad)(?=\s|$|\\)/g;
  function escapeWordTexText(text) {
    return String(text).replace(/\\/g, "\\\\").replace(/\{/g, "\\{").replace(/\}/g, "\\}");
  }
  function isWordTexDefinitionLine(line) {
    const trimmed = line.trim();
    if (!trimmed.includes(",")) return false;
    const parts = trimmed.split(",").map((p) => p.trim()).filter(Boolean);
    if (parts.length < 2) return false;
    let nameEnd = 0;
    while (nameEnd < parts.length - 1 && WORD_TEX_NAME_TOKEN_RE.test(parts[nameEnd])) {
      nameEnd += 1;
    }
    if (nameEnd === 0 || nameEnd >= parts.length) return false;
    const desc = parts.slice(nameEnd).join(", ").trim();
    return /[\s(]/.test(desc) || desc.length > 15;
  }
  function wordTexDefinitionLineToText(line) {
    const parts = line.trim().split(",").map((p) => p.trim()).filter(Boolean);
    let nameEnd = 0;
    while (nameEnd < parts.length - 1 && WORD_TEX_NAME_TOKEN_RE.test(parts[nameEnd])) {
      nameEnd += 1;
    }
    const names = parts.slice(0, nameEnd).join(", ");
    const desc = parts.slice(nameEnd).join(", ").trim();
    return `${names}: ${desc}`;
  }
  function descriptionLineToWordTexLine(line) {
    const trimmed = line.trim();
    if (!trimmed) return "";
    const body = isWordTexDefinitionLine(trimmed) ? wordTexDefinitionLineToText(trimmed) : trimmed;
    return `\\text{${escapeWordTexText(body)}}`;
  }
  function sanitizeTexForWordEquation(tex) {
    let s = String(tex || "").trim();
    if (!s) return s;
    s = s.replace(/\\begin\{[^}]+\}[\s\S]*?\\end\{[^}]+\}/g, "");
    s = s.replace(
      /\{\s*\\left\s*([.(|[])\s*([\s\S]*?)\\right\s*([.)|\]|])\s*\}/g,
      (_, open, inner, close) => {
        const body = inner.trim();
        if (open === "|" || close === "|") return `|${body}|`;
        if (open === "(" && close === ")") return `(${body})`;
        if (open === "[" && close === "]") return `[${body}]`;
        return body;
      }
    );
    s = s.replace(/\\left\s*[.(|[]/g, (m) => {
      const ch = m.slice(-1);
      if (ch === "|") return "|";
      return ch;
    });
    s = s.replace(/\\right\s*[.)|\]|]/g, (m) => {
      const ch = m.slice(-1);
      if (ch === "|") return "|";
      return ch;
    });
    s = s.replace(/\\left\s*/g, "");
    s = s.replace(/\\right\s*/g, "");
    s = s.replace(/\\limits/g, "");
    s = s.replace(WORD_TEX_SPACING_RE, " ");
    s = s.replace(/\|{([^}|]+)}\|/g, "|$1|");
    s = s.replace(/_\{([A-Za-z0-9])\}/g, "_$1");
    s = s.replace(/\s*=\s*/g, "=");
    s = s.replace(/\s+/g, " ").trim();
    return s;
  }
  function joinWordEquationTexLines(lines) {
    const nonEmpty = lines.filter(Boolean);
    if (!nonEmpty.length) return "";
    const body = nonEmpty.map((line, index) => index < nonEmpty.length - 1 ? `${line}\\\\` : line).join("\n");
    return `\\(${body}\\)`;
  }
  function buildWordEquationTexBlock(reference, equationTex, description = "") {
    const lines = [];
    const ref = String(reference || "").trim();
    if (ref) lines.push(`\\text{${escapeWordTexText(ref)}}`);
    lines.push(sanitizeTexForWordEquation(equationTex));
    for (const line of splitDescriptionLines(description)) {
      const texLine = descriptionLineToWordTexLine(line);
      if (texLine) lines.push(texLine);
    }
    return joinWordEquationTexLines(lines);
  }
  function buildPythonFunctionBody(description, returnLine) {
    const docstring = formatPythonDocstring(description);
    return docstring ? `${docstring}
${returnLine}` : returnLine;
  }
  function buildTextExport(reference, displayLhs, displayRhs, description = "") {
    const parts = [reference, `${displayLhs} = ${displayRhs}`];
    const desc = String(description || "").trim();
    if (desc) parts.push(desc);
    return parts.join("\n");
  }
  function buildTexExport(ctx, reference, description = "") {
    return buildWordEquationTexBlock(reference, buildTex(ctx), description);
  }
  function toExcelExpr(expr, vars_, alreadyPrepared = false, excludeVars = /* @__PURE__ */ new Set(), descriptionRows = false, resolveVar = null) {
    if (!alreadyPrepared) expr = prepareExpr(expr);
    if (!expr) return "0";
    if (isInfinity(expr)) throw new Error("Infinity is not supported in Excel formulas");
    const call = tryParseCall(expr);
    if (call) {
      const [name, inner] = call;
      const innerExcel = toExcelExpr(inner, vars_, true, excludeVars, descriptionRows, resolveVar);
      const lower = name.toLowerCase();
      if (EXCEL_BUILTIN_FUNCTIONS[lower]) return `${EXCEL_BUILTIN_FUNCTIONS[lower]}(${innerExcel})`;
      if (!builtinFunctionNames().has(lower)) return `${name}(${innerExcel})`;
    }
    const ops = scanTopLevelOps(expr, "+-*/^");
    if (ops["+"] !== -1) {
      const left = toExcelExpr(expr.slice(0, ops["+"]), vars_, true, excludeVars, descriptionRows, resolveVar);
      const right = toExcelExpr(expr.slice(ops["+"] + 1), vars_, true, excludeVars, descriptionRows, resolveVar);
      return `(${left}+${right})`;
    }
    if (ops["-"] !== -1) {
      if (ops["-"] === 0) return `(-${toExcelExpr(expr.slice(1), vars_, true, excludeVars, descriptionRows, resolveVar)})`;
      const left = toExcelExpr(expr.slice(0, ops["-"]), vars_, true, excludeVars, descriptionRows, resolveVar);
      const right = toExcelExpr(expr.slice(ops["-"] + 1), vars_, true, excludeVars, descriptionRows, resolveVar);
      return `(${left}-${right})`;
    }
    if (ops["*"] !== -1) {
      const left = toExcelExpr(expr.slice(0, ops["*"]), vars_, true, excludeVars, descriptionRows, resolveVar);
      const right = toExcelExpr(expr.slice(ops["*"] + 1), vars_, true, excludeVars, descriptionRows, resolveVar);
      return `(${left}*${right})`;
    }
    if (ops["/"] !== -1) {
      const left = toExcelExpr(expr.slice(0, ops["/"]), vars_, true, excludeVars, descriptionRows, resolveVar);
      const right = toExcelExpr(expr.slice(ops["/"] + 1), vars_, true, excludeVars, descriptionRows, resolveVar);
      return `(${left}/${right})`;
    }
    if (ops["^"] !== -1) {
      const base = toExcelExpr(expr.slice(0, ops["^"]), vars_, true, excludeVars, descriptionRows, resolveVar);
      const exponent = toExcelExpr(expr.slice(ops["^"] + 1), vars_, true, excludeVars, descriptionRows, resolveVar);
      return `POWER(${base},${exponent})`;
    }
    if (expr.startsWith("(") && expr.endsWith(")")) {
      const close = findClosingBracket(expr, 0);
      if (close === expr.length - 1) {
        return `(${toExcelExpr(expr.slice(1, close), vars_, true, excludeVars, descriptionRows, resolveVar)})`;
      }
    }
    if (isIdentifierAtom(expr)) {
      const id = expr.trim();
      if (excludeVars.has(id)) return id;
      if (vars_.includes(id)) {
        if (resolveVar) return resolveVar(id);
        return excelTableRef(vars_.indexOf(id), descriptionRows);
      }
      return id;
    }
    return expr;
  }
  function buildExcelIntegralFormula(lower, upper, integrand, dvar, vars_, descriptionRows = false) {
    const exclude = /* @__PURE__ */ new Set([dvar]);
    const lowerExcel = toExcelExpr(lower, vars_, false, exclude, descriptionRows);
    const upperExcel = toExcelExpr(upper, vars_, false, exclude, descriptionRows);
    const integrandExcel = toExcelExpr(integrand, vars_, false, exclude, descriptionRows);
    const nExcel = vars_.includes(INTEGRATION_STEPS_VAR) ? toExcelExpr(INTEGRATION_STEPS_VAR, vars_, false, exclude, descriptionRows) : String(DEFAULT_INTEGRATION_STEPS);
    return `LET(_a,${lowerExcel},_b,${upperExcel},_n,${nExcel},_h,(_b-_a)/_n,_i,SEQUENCE(_n+1),_f,MAP(_i,LAMBDA(_k,LET(${dvar},_a+(_k-1)*_h,IF(OR(_k=1,_k=_n+1),1,2)*(${integrandExcel})))),SUM(_f)*_h/2)`;
  }
  function buildExcelSummationFormula(index, lower, upper, body, vars_, descriptionRows = false) {
    const exclude = /* @__PURE__ */ new Set([index]);
    const lowerExcel = toExcelExpr(lower, vars_, false, exclude, descriptionRows);
    const upperExcel = toExcelExpr(upper, vars_, false, exclude, descriptionRows);
    const bodyExcel = toExcelExpr(body, vars_, false, exclude, descriptionRows);
    return `LET(_lo,${lowerExcel},_hi,${upperExcel},_i,SEQUENCE(_hi-_lo+1,,_lo),_f,MAP(_i,LAMBDA(_k,LET(${index},_k,${bodyExcel}))),SUM(_f))`;
  }
  function buildExcelFormula(rhs, vars_, preparedRhs = null, descriptionRows = false) {
    if (hasInfinityInExpr(rhs)) {
      const escaped = rhs.replace(/"/g, '""');
      return `="${escaped}"`;
    }
    const prepared = preparedRhs ?? prepareExpr(rhs);
    const integral = tryParseIntegral(prepared);
    if (integral) {
      const [lower, upper, integrand, dvar] = integral;
      return "=" + buildExcelIntegralFormula(lower, upper, integrand, dvar, vars_, descriptionRows);
    }
    const summation = tryParseSummation(prepared);
    if (summation) {
      const [index, lower, upper, body] = summation;
      return "=" + buildExcelSummationFormula(index, lower, upper, body, vars_, descriptionRows);
    }
    let expr = prepared;
    expr = expr.replace(/sqrt\((.*?)\)/g, "SQRT($1)");
    expr = expr.replace(/abs\((.*?)\)/g, "ABS($1)");
    const sortedVars = [...vars_].sort((a, b) => b.length - a.length);
    for (const v of sortedVars) {
      const idx = vars_.indexOf(v);
      expr = expr.replace(
        new RegExp(`\\b${v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g"),
        excelTableRef(idx, descriptionRows)
      );
    }
    return "=" + expr;
  }
  function buildExcelBlock(lhs, rhs, vars_, reference, ctx, description = "") {
    const descLines = splitDescriptionLines(description);
    const descriptionRowCount = descLines.length;
    const lhsDisplay = toExcelDisplayText(stripScalarQuotes(lhs));
    const rhsDisplay = toExcelDisplayText(stripScalarQuotes(rhs));
    const referenceDisplay = toExcelDisplayText(reference);
    const formula = buildExcelFormula(rhs, vars_, ctx.rhs_prepared, descriptionRowCount);
    const xFmla = escapeHtmlAttr(formula);
    const inputDefaults = getIntegrationInputDefaults(ctx);
    const whereRows = whereRowsHtml(vars_, ctx.scalar_labels, inputDefaults);
    const descriptionRowsHtml = descLines.map((line) => `
      <tr>
        <td style="font-style:italic; white-space:nowrap;">${toExcelDisplayText(line)}</td>
        <td></td>
      </tr>`).join("");
    return `<html xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="ProgId" content="Excel.Sheet">
<meta name="Generator" content="EQN Equation Export">
<!--[if gte mso 9]><xml>
 <x:ExcelWorkbook>
  <x:ExcelWorksheets>
   <x:ExcelWorksheet>
    <x:Name>Equation</x:Name>
   </x:ExcelWorksheet>
  </x:ExcelWorksheets>
 </x:ExcelWorkbook>
</xml><![endif]-->
</head>
<body>
<!--StartFragment-->
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td style="font-style:italic; border-bottom:1px solid black; white-space:nowrap;">${referenceDisplay}</td>
        <td style="border-bottom:1px solid black;">&nbsp;</td>
      </tr>
      <tr>
        <td style="font-weight:bold; white-space:nowrap;">${lhsDisplay} = ${rhsDisplay}</td>
        <td></td>
      </tr>${descriptionRowsHtml}
      <tr>
        <td style="font-style:italic; white-space:nowrap; border-top:1px solid black;">Where:</td>
        <td style="border-top:1px solid black;"></td>
      </tr>${whereRows}
      <tr>
        <td style="white-space:nowrap; font-weight:bold;">${lhsDisplay} =</td>
        <td x:fmla="${xFmla}" style="white-space:nowrap; font-weight:bold;"></td>
      </tr>
</table>
<!--EndFragment-->
</body>
</html>`;
  }
  function buildSheetsBlock(lhs, rhs, vars_, reference, ctx, description = "") {
    const descLines = splitDescriptionLines(description);
    const descriptionRowCount = descLines.length;
    const lhsDisplay = toExcelDisplayText(stripScalarQuotes(lhs));
    const rhsDisplay = toExcelDisplayText(stripScalarQuotes(rhs));
    const referenceDisplay = toExcelDisplayText(reference);
    const a1Formula = buildExcelFormula(rhs, vars_, ctx.rhs_prepared, descriptionRowCount);
    const { row: formulaRow1, col: formulaCol1 } = sheetsFormulaPosition(vars_.length, descriptionRowCount);
    const r1c1Formula = a1FormulaToSheetsR1C1(a1Formula, formulaRow1, formulaCol1);
    const inputDefaults = getIntegrationInputDefaults(ctx);
    const whereRows = whereRowsSheetsHtml(vars_, ctx.scalar_labels, inputDefaults);
    const descriptionRowsHtml = descLines.map((line) => `
      <tr style="height:21px;">
        <td style="${SHEETS_TD}font-style:italic;">${toExcelDisplayText(line)}</td>
        <td style="${SHEETS_TD}"></td>
      </tr>`).join("");
    return `<html><head><meta charset="utf-8"></head><body><!--StartFragment--><meta name="generator" content="Sheets"/>
<style type="text/css">td{border:1px solid #ccc;}br{mso-data-placement:same-cell;}</style>
<table xmlns="http://www.w3.org/1999/xhtml" cellspacing="0" cellpadding="0" dir="ltr" border="1" data-sheets-root="1" data-sheets-baot="1" style="${SHEETS_TABLE}">
<colgroup><col width="100"><col width="100"></colgroup>
<tbody>
      <tr style="height:21px;">
        <td style="${SHEETS_TD}font-style:italic;border-bottom:1px solid black;">${referenceDisplay}</td>
        <td style="${SHEETS_TD}border-bottom:1px solid black;"></td>
      </tr>
      <tr style="height:21px;">
        <td colspan="2" style="${SHEETS_TD}font-weight:bold;">${lhsDisplay} = ${rhsDisplay}</td>
      </tr>${descriptionRowsHtml}
      <tr style="height:21px;">
        <td style="${SHEETS_TD}font-style:italic;border-top:1px solid black;">Where:</td>
        <td style="${SHEETS_TD}border-top:1px solid black;"></td>
      </tr>${whereRows}
      <tr style="height:21px;">
        <td style="${SHEETS_TD}font-weight:bold;">${lhsDisplay} =</td>
        <td style="${SHEETS_TD}font-weight:bold;text-align:right;"${sheetsFormulaAttr(r1c1Formula)}></td>
      </tr>
</tbody></table>
<!--EndFragment--></body></html>`;
  }
  function buildFormats(equation, reference, description = "") {
    const eqIdx = equation.indexOf("=");
    if (eqIdx === -1) throw new Error("Equation must contain '=' separating left- and right-hand sides");
    const lhs = equation.slice(0, eqIdx).trim();
    const rhs = equation.slice(eqIdx + 1).trim();
    if (!lhs || !rhs) throw new Error("Equation must have both left- and right-hand sides");
    const ctx = buildEquationContext(lhs, rhs);
    const vars_ = getEquationVars(ctx);
    const numericVars_ = getNumericIntegrationVars(ctx);
    const safeName = sanitizeName(reference);
    const displayLhs = stripScalarQuotes(lhs);
    const displayRhs = stripScalarQuotes(rhs);
    const displayDescription = filterDescriptionForDisplayExport(description, ctx);
    return {
      text: buildTextExport(reference, displayLhs, displayRhs, displayDescription),
      tex: buildTexExport(ctx, reference, displayDescription),
      mathml: buildMathml(ctx),
      excel: buildExcelBlock(lhs, rhs, numericVars_, reference, ctx, description),
      sheets: buildSheetsBlock(lhs, rhs, numericVars_, reference, ctx, description),
      python: buildPython(rhs, vars_, safeName, ctx, description),
      csharp: buildCsharp(rhs, numericVars_, safeName, ctx, description),
      javascript: buildJavascript(rhs, numericVars_, safeName, ctx, description)
    };
  }
  function parseEquationSides(equation) {
    const eqIdx = equation.indexOf("=");
    if (eqIdx === -1) throw new Error("Equation must contain '=' separating left- and right-hand sides");
    const lhs = equation.slice(0, eqIdx).trim();
    const rhs = equation.slice(eqIdx + 1).trim();
    if (!lhs || !rhs) throw new Error("Equation must have both left- and right-hand sides");
    return { lhs, rhs };
  }
  function buildEquationDisplay(equation, reference) {
    const { lhs, rhs } = parseEquationSides(equation);
    const ctx = buildEquationContext(lhs, rhs);
    const displayLhs = stripScalarQuotes(lhs);
    const displayRhs = stripScalarQuotes(rhs);
    return {
      text: `${displayLhs} = ${displayRhs}`,
      mathml: buildMathml(ctx)
    };
  }

  // js/spreadsheet-paste.js
  var SPREADSHEET_FONT = "Arial,sans-serif";
  var SPREADSHEET_FONT_SIZE = "10pt";
  var MEANINGLESS_TEXT_COLORS = /^(windowtext|auto|inherit)$/i;
  function decodeHtmlEntities(str) {
    if (!str) return "";
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  }
  function extractClipboardTableHtml(html) {
    if (!html) return "";
    const fragStart = html.indexOf("<!--StartFragment-->");
    if (fragStart !== -1) {
      const start = fragStart + "<!--StartFragment-->".length;
      const fragEnd = html.indexOf("<!--EndFragment-->", start);
      const fragment = fragEnd !== -1 ? html.slice(start, fragEnd) : html.slice(start);
      const tableMatch2 = fragment.match(/<table[\s\S]*?<\/table>/i);
      if (tableMatch2) return tableMatch2[0];
      return fragment;
    }
    const tableMatch = html.match(/<table[\s\S]*?<\/table>/i);
    return tableMatch ? tableMatch[0] : html;
  }
  function extractSheetsAttr(cellHtml, attrName) {
    const re = new RegExp(
      `\\b${attrName}\\s*=\\s*(["'])((?:\\\\\\1|(?!\\1).)*)\\1`,
      "i"
    );
    const match = cellHtml.match(re);
    return match?.[2] ? decodeHtmlEntities(match[2]).trim() : "";
  }
  function extractFormulaFromCellHtml(cellHtml) {
    if (!cellHtml) return "";
    const sheetsFormula = extractSheetsAttr(cellHtml, "data-sheets-formula");
    if (sheetsFormula) return sheetsFormula;
    const attrPatterns = [
      /\bdata-sheets-formula\s*=\s*"((?:[^"\\]|\\.|&[^;]+;)*)"/i,
      /\bdata-sheets-formula\s*=\s*'((?:[^'\\]|\\.|&[^;]+;)*)'/i,
      /\bdata-eqn-formula\s*=\s*"((?:[^"\\]|\\.|&[^;]+;)*)"/i,
      /\bdata-eqn-formula\s*=\s*'((?:[^'\\]|\\.|&[^;]+;)*)'/i,
      /\bx:fmla\s*=\s*"((?:[^"\\]|\\.|&[^;]+;)*)"/i,
      /\bx:fmla\s*=\s*'((?:[^'\\]|\\.|&[^;]+;)*)'/i,
      /\bfmla\s*=\s*"((?:[^"\\]|\\.|&[^;]+;)*)"/i
    ];
    for (const pattern of attrPatterns) {
      const match = cellHtml.match(pattern);
      if (match?.[1]) {
        const formula = decodeHtmlEntities(match[1]).trim();
        if (formula) return formula;
      }
    }
    const sheetsValueRaw = extractSheetsAttr(cellHtml, "data-sheets-value");
    if (sheetsValueRaw) {
      try {
        const obj = JSON.parse(sheetsValueRaw);
        for (const value of Object.values(obj)) {
          if (typeof value === "string" && value.startsWith("=")) return value.trim();
        }
      } catch {
      }
    }
    return "";
  }
  function extractVisibleFormulaFromCellHtml(cellHtml) {
    const text = cellHtml.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "").trim();
    if (text.startsWith("=")) return text;
    return "";
  }
  function buildFormulaGridMap(html) {
    const tableHtml = extractClipboardTableHtml(html);
    if (!tableHtml) return /* @__PURE__ */ new Map();
    const doc = new DOMParser().parseFromString(`<body>${tableHtml}</body>`, "text/html");
    const table = doc.querySelector("table");
    if (!table) return /* @__PURE__ */ new Map();
    return buildFormulaGridMapFromTable(table);
  }
  function buildFormulaGridMapFromTable(table) {
    const map = /* @__PURE__ */ new Map();
    const rows = Array.from(table.querySelectorAll("tr"));
    rows.forEach((tr, rowIndex) => {
      const slots = expandTableRowCells(tr);
      slots.forEach((slot, colIndex) => {
        if (!slot?.isPrimary) return;
        const cell = slot.cell;
        let formula = readFormulaFromElement(cell) || getCellFormula(cell);
        if (!formula) {
          const text = cell.textContent.trim();
          if (text.startsWith("=")) formula = text;
        }
        if (!formula) return;
        formula = normalizeFormulaToTableA1(formula, rowIndex, colIndex);
        map.set(`${rowIndex},${colIndex}`, formula);
      });
    });
    return map;
  }
  function normalizeFormulaToTableA1(formula, cellRow, cellCol) {
    let out = formula.trim();
    if (!out) return out;
    out = out.replace(/^'[^']+'!/gi, "");
    out = out.replace(/^[^!]+!/g, "");
    const currentRow = cellRow + 1;
    const currentCol = cellCol + 1;
    out = out.replace(/R(\[(-?\d+)\]|(\d+))C(\[(-?\d+)\]|(\d+))/gi, (_match, _rowBracket, rowRel, rowAbs, _colBracket, colRel, colAbs) => {
      const targetRow = rowRel !== void 0 ? currentRow + Number(rowRel) : Number(rowAbs);
      const targetCol = colRel !== void 0 ? currentCol + Number(colRel) : Number(colAbs);
      if (targetRow < 1 || targetCol < 1) return _match;
      return `${columnIndexToLetter(targetCol - 1)}${targetRow}`;
    });
    out = out.replace(/\$([A-Za-z]+)\$?(\d+)/g, "$1$2");
    out = out.replace(/([A-Za-z]+)\$(\d+)/g, "$1$2");
    if (!out.startsWith("=")) out = `=${out}`;
    return out;
  }
  function extractExcelStyleRules(html) {
    const styleBlocks = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
    return styleBlocks.map((block) => block.replace(/<\/?style[^>]*>/gi, "")).map((content) => content.replace(/<!--\s*/g, "").replace(/\s*-->/g, "")).join("\n");
  }
  function parseExcelClassStyles(css) {
    const map = /* @__PURE__ */ new Map();
    if (!css) return map;
    const ruleRegex = /([^{]+)\{([^}]*)\}/g;
    let match;
    while ((match = ruleRegex.exec(css)) !== null) {
      const selector = match[1].trim();
      const body = match[2].trim();
      if (!selector.startsWith(".")) continue;
      const className = selector.slice(1).split(/[:\s>+~[]/)[0];
      if (className) {
        map.set(className, stripAutomaticTextColors(body));
      }
    }
    return map;
  }
  function scopeStyleRules(css, scopeSelector) {
    if (!css?.trim()) return "";
    return css.split("}").map((chunk) => {
      const open = chunk.indexOf("{");
      if (open === -1) return "";
      const selectors = chunk.slice(0, open).trim();
      const body = chunk.slice(open + 1).trim();
      if (!selectors || !body) return "";
      const scoped = selectors.split(",").map((part) => `${scopeSelector} ${part.trim()}`).join(", ");
      return `${scoped} { ${body} }`;
    }).filter(Boolean).join("\n");
  }
  function stripAutomaticTextColors(style) {
    let s = style || "";
    s = s.replace(/(?:^|;)\s*color\s*:\s*([^;]+)/gi, (full, value) => {
      const v = String(value).trim().replace(/\s*!important\s*$/i, "");
      return MEANINGLESS_TEXT_COLORS.test(v) ? "" : full;
    });
    s = s.replace(
      /(?:^|;)\s*mso-style-textfill-fill-color\s*:\s*(windowtext|auto|inherit)\s*;?/gi,
      ""
    );
    return normalizeStyleSeparators(s);
  }
  function stripAutomaticColorsFromCss(css) {
    if (!css?.trim()) return "";
    return css.split("}").map((chunk) => {
      const open = chunk.indexOf("{");
      if (open === -1) return "";
      const selectors = chunk.slice(0, open).trim();
      const body = stripAutomaticTextColors(chunk.slice(open + 1).trim());
      if (!selectors || !body) return "";
      return `${selectors} { ${body} }`;
    }).filter(Boolean).join("\n");
  }
  function cleanAutomaticColorsInCellTree(cell) {
    if (!cell) return;
    const nodes = [cell, ...cell.querySelectorAll("[style], font[color]")];
    for (const node of nodes) {
      const style = node.getAttribute("style");
      if (style) {
        const cleaned = stripAutomaticTextColors(normalizeSpreadsheetStyle(style));
        if (cleaned) node.setAttribute("style", cleaned);
        else node.removeAttribute("style");
      }
      if (node.hasAttribute("color") && !normalizeCssColor(node.getAttribute("color"))) {
        node.removeAttribute("color");
      }
    }
  }
  function normalizeStyleSeparators(style) {
    if (!style) return "";
    let s = style.replace(/\s+/g, " ").trim();
    s = s.replace(/;\s*/g, "; ");
    s = s.replace(/(^|;\s*)([^;]+?)\s+(?=[a-z][\w-]*\s*:)/gi, "$1$2; ");
    return s.replace(/^;+|;+$/g, "").replace(/;;+/g, "; ").trim();
  }
  function mergeInlineStyles(...parts) {
    const merged = parts.filter(Boolean).map((part) => part.trim().replace(/;\s*$/, "")).filter(Boolean).join("; ");
    return normalizeStyleSeparators(merged);
  }
  function prepareExcelStylesForEmbed(styleHtml) {
    if (!styleHtml) return "";
    return styleHtml.replace(/<style([^>]*)>([\s\S]*?)<\/style>/gi, (_match, attrs, content) => {
      const cleaned = content.replace(/<!--\s*/g, "").replace(/\s*-->/g, "");
      return `<style${attrs}>${cleaned}</style>`;
    });
  }
  function extractExcelStyles(html) {
    const styles = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi);
    return styles ? prepareExcelStylesForEmbed(styles.join("\n")) : "";
  }
  function cleanTableMarkup(tableHtml) {
    return tableHtml.replace(/<!--StartFragment-->|<!--EndFragment-->/gi, "");
  }
  function applyExcelCellPresentation(source, target, classStyleMap) {
    copySpreadsheetCellAttributes(source, target);
    const classAttr = source.getAttribute("class");
    if (classAttr) target.setAttribute("class", classAttr);
    const classRules = (classAttr || "").split(/\s+/).filter(Boolean).map((name) => classStyleMap.get(name)).filter(Boolean);
    const mergedStyle = mergeInlineStyles(source.getAttribute("style"), ...classRules);
    if (mergedStyle) target.setAttribute("style", mergedStyle);
  }
  function wrapAsGoogleSheetsHtml(tableHtml, sourceHtml = "") {
    const styles = sourceHtml.match(/<style[^>]*>[\s\S]*?<\/style>/gi);
    const styleBlock = styles ? styles.join("\n") : "";
    return `<html><head><meta charset="utf-8"></head><body><!--StartFragment--><meta name="generator" content="Sheets"/>${styleBlock}${tableHtml}<!--EndFragment--></body></html>`;
  }
  function applySheetsFormulaToCell(cell, formula, rowIndex, colIndex) {
    const normalized = normalizeFormulaToTableA1(formula, rowIndex, colIndex);
    const r1c1 = a1FormulaToSheetsR1C1(normalized, rowIndex + 1, colIndex + 1);
    stripCalculatedValueAttributes(cell);
    cell.removeAttribute("data-eqn-formula");
    cell.removeAttribute("x:fmla");
    cell.setAttribute("data-sheets-formula", r1c1);
    cell.textContent = "";
    cell.innerHTML = "";
  }
  function applyFormulaToCell(cell, formula, rowIndex, colIndex, format) {
    const normalized = normalizeFormulaToTableA1(formula, rowIndex, colIndex);
    stripCalculatedValueAttributes(cell);
    cell.removeAttribute("data-eqn-formula");
    cell.removeAttribute("data-sheets-formula");
    cell.removeAttribute("x:fmla");
    if (format === "sheets") {
      applySheetsFormulaToCell(cell, formula, rowIndex, colIndex);
      return;
    }
    cell.setAttribute("x:fmla", normalized);
    cell.innerHTML = "";
  }
  function wrapAsExcelClipboardHtml(tableHtml, sourceHtml = "") {
    const styles = extractExcelStyles(sourceHtml);
    return `<html xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="ProgId" content="Excel.Sheet">
<meta name="Generator" content="EQN Equation Export">
${styles}
<!--[if gte mso 9]><xml>
 <x:ExcelWorkbook>
  <x:ExcelWorksheets>
   <x:ExcelWorksheet>
    <x:Name>Equation</x:Name>
   </x:ExcelWorksheet>
  </x:ExcelWorksheets>
 </x:ExcelWorkbook>
</xml><![endif]-->
</head>
<body>
<!--StartFragment-->
${tableHtml}
<!--EndFragment-->
</body>
</html>`;
  }
  function wrapSpreadsheetClipboardHtml(tableHtml, sourceHtml, format) {
    if (format === "sheets") {
      return wrapAsGoogleSheetsHtml(tableHtml, sourceHtml);
    }
    return wrapAsExcelClipboardHtml(tableHtml, sourceHtml);
  }
  function copySpreadsheetCellAttributes(from, to) {
    if (!from?.attributes) return;
    for (const attr of from.attributes) {
      const name = attr.name.toLowerCase();
      if (name.startsWith("on") || name === "style") continue;
      if (CALCULATED_VALUE_ATTRS.includes(name)) continue;
      if (name === "data-sheets-formula" || name === "data-sheets-value") continue;
      to.setAttribute(attr.name, attr.value);
    }
    const style = from.getAttribute("style");
    if (style) to.setAttribute("style", style);
  }
  function normalizeSpreadsheetHtml(html) {
    if (!html) return html;
    return html.replace(/\bx:fmla\s*=\s*(["'])((?:\\.|(?!\1).)*)\1/gi, (_match, quote, formula) => {
      const decoded = decodeHtmlEntities(formula);
      const escaped = decoded.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      return `data-eqn-formula="${escaped}" x:fmla=${quote}${formula}${quote}`;
    });
  }
  var CALCULATED_VALUE_ATTRS = [
    "x:num",
    "x:str",
    "x:bool",
    "data-sheets-value",
    "data-sheets-numberformat",
    "data-sheets-userformat"
  ];
  function cellHasFormulaMarker(cell) {
    if (!cell) return false;
    const hosts = [cell, ...cell.querySelectorAll("*")];
    for (const el of hosts) {
      if (!el.attributes) continue;
      for (const attr of el.attributes) {
        const name = attr.name.toLowerCase();
        if (name === "data-sheets-formula" || name === "data-eqn-formula" || name === "x:fmla" || name.endsWith(":fmla") || name === "fmla") {
          return true;
        }
      }
    }
    return false;
  }
  function stripCalculatedValueAttributes(cell) {
    for (const attr of CALCULATED_VALUE_ATTRS) {
      cell.removeAttribute(attr);
    }
    for (const el of cell.querySelectorAll("*")) {
      for (const attr of CALCULATED_VALUE_ATTRS) {
        el.removeAttribute(attr);
      }
    }
  }
  function normalizeCssColor(value) {
    if (!value) return "";
    const v = String(value).trim();
    if (MEANINGLESS_TEXT_COLORS.test(v)) return "";
    if (/^#[0-9a-f]{3}$/i.test(v)) return v;
    if (/^#[0-9a-f]{6}$/i.test(v)) return v;
    if (/^[0-9a-f]{6}$/i.test(v)) return `#${v}`;
    if (/^(rgb|hsl)a?\(/i.test(v)) return v;
    return v;
  }
  function resolveTextColorFromStyle(style) {
    if (!style) return "";
    const textFill = style.match(/mso-style-textfill-fill-color\s*:\s*([^;]+)/i);
    if (textFill) {
      const fillColor = normalizeCssColor(textFill[1]);
      if (fillColor) return fillColor;
    }
    const colorMatch = style.match(/(?:^|;)\s*color\s*:\s*([^;]+)/i);
    if (colorMatch) return normalizeCssColor(colorMatch[1]);
    return "";
  }
  function cellStyleHasMeaningfulColor(style) {
    const color = resolveTextColorFromStyle(style);
    return Boolean(color);
  }
  function isBoldFontWeight(value) {
    const v = String(value).trim().toLowerCase();
    if (v === "bold" || v === "bolder") return true;
    const n = Number(v);
    return Number.isFinite(n) && n >= 600;
  }
  function styleHasBoldWeight(style) {
    const match = (style || "").match(/(?:^|;)\s*font-weight\s*:\s*([^;]+)/i);
    return match ? isBoldFontWeight(match[1]) : false;
  }
  function promoteMsoTextRules(style) {
    let s = (style || "").replace(/\s+/g, " ").trim();
    const textFill = s.match(/mso-style-textfill-fill-color\s*:\s*([^;]+)/i);
    if (textFill) {
      const fillColor = normalizeCssColor(textFill[1]);
      const colorMatch = s.match(/(?:^|;)\s*color\s*:\s*([^;]+)/i);
      const existing = colorMatch ? colorMatch[1].trim() : "";
      if (fillColor && (!existing || MEANINGLESS_TEXT_COLORS.test(existing))) {
        s = s.replace(/(?:^|;)\s*color\s*:\s*[^;]+;?/gi, "");
        s = mergeInlineStyles(s, `color:${fillColor}`);
      }
    }
    if (!styleHasBoldWeight(s)) {
      const weight = s.match(/mso-(?:ansi|bidi)-font-weight\s*:\s*([^;]+)/i);
      if (weight && isBoldFontWeight(weight[1])) {
        s = mergeInlineStyles(s, "font-weight:bold");
      }
    }
    if (!/(?:^|;)\s*font-style\s*:\s*italic/i.test(s)) {
      const italic = s.match(/mso-(?:ansi|bidi)-font-style\s*:\s*([^;]+)/i);
      if (italic && /italic/i.test(italic[1])) {
        s = mergeInlineStyles(s, "font-style:italic");
      }
    }
    if (!/(?:^|;)\s*text-decoration\s*:/i.test(s)) {
      const underline = s.match(/mso-(?:ansi|bidi)-font-underline\s*:\s*([^;]+)/i);
      if (underline && !/none/i.test(underline[1])) {
        s = mergeInlineStyles(s, "text-decoration:underline");
      }
    }
    return s;
  }
  function promoteCellTextPresentation(cell) {
    if (!cell) return;
    let style = cell.getAttribute("style") || "";
    let color = cellStyleHasMeaningfulColor(style) ? resolveTextColorFromStyle(style) : "";
    if (!color) {
      for (const el of cell.querySelectorAll("font[color], span[style], font[style]")) {
        if (el.hasAttribute("color")) {
          color = normalizeCssColor(el.getAttribute("color"));
        } else {
          color = resolveTextColorFromStyle(el.getAttribute("style"));
        }
        if (color) break;
      }
    }
    if (!styleHasBoldWeight(style)) {
      if (cell.querySelector("b, strong")) {
        style = mergeInlineStyles(style, "font-weight:bold");
      } else {
        for (const el of cell.querySelectorAll("span[style], font[style]")) {
          const match = el.getAttribute("style")?.match(/font-weight\s*:\s*([^;]+)/i);
          if (match && isBoldFontWeight(match[1])) {
            style = mergeInlineStyles(style, `font-weight:${match[1].trim()}`);
            break;
          }
        }
      }
    }
    if (color) {
      style = style.replace(/(?:^|;)\s*color\s*:\s*[^;]+;?/gi, "");
      style = mergeInlineStyles(style, `color:${color}`);
    } else {
      style = stripAutomaticTextColors(style);
    }
    const nextStyle = normalizeSpreadsheetStyle(style);
    if (nextStyle) cell.setAttribute("style", nextStyle);
    else cell.removeAttribute("style");
  }
  function setCellDisplayText(cell, text) {
    promoteCellTextPresentation(cell);
    cell.textContent = text || "\xA0";
  }
  function normalizeSpreadsheetStyle(style) {
    let s = promoteMsoTextRules(style);
    s = s.replace(/font-family\s*:\s*Calibri[^;]*/gi, `font-family:${SPREADSHEET_FONT}`);
    s = s.replace(/font-family\s*:\s*['"]?Google Sans[^;'"]*['"]?[^;]*/gi, `font-family:${SPREADSHEET_FONT}`);
    s = s.replace(/mso-[a-z-]+\s*:\s*[^;]+;?/gi, "");
    s = s.replace(/background-color\s*:\s*none\b/gi, "background-color:transparent");
    s = s.replace(/background\s*:\s*none\b/gi, "background:transparent");
    if (!/font-family/i.test(s)) s = mergeInlineStyles(s, `font-family:${SPREADSHEET_FONT}`);
    if (!/font-size/i.test(s)) s = mergeInlineStyles(s, `font-size:${SPREADSHEET_FONT_SIZE}`);
    return stripAutomaticTextColors(s);
  }
  function flattenCellInlineStyles(cell) {
    const hosts = cell.querySelectorAll("[style]");
    let merged = cell.getAttribute("style") || "";
    for (const el of hosts) {
      if (el === cell) continue;
      merged = mergeInlineStyles(merged, el.getAttribute("style"));
    }
    for (const font of cell.querySelectorAll("font[color]")) {
      const color = normalizeCssColor(font.getAttribute("color"));
      if (color) merged = mergeInlineStyles(merged, `color:${color}`);
    }
    if (merged) cell.setAttribute("style", merged);
  }
  function normalizeSpreadsheetCellPresentation(cell, classStyleMap) {
    flattenCellInlineStyles(cell);
    const classAttr = cell.getAttribute("class") || "";
    const classRules = classAttr.split(/\s+/).filter(Boolean).map((name) => classStyleMap.get(name)).filter(Boolean);
    const mergedStyle = normalizeSpreadsheetStyle(
      mergeInlineStyles(cell.getAttribute("style"), ...classRules)
    );
    cell.removeAttribute("class");
    if (mergedStyle) cell.setAttribute("style", mergedStyle);
    else cell.removeAttribute("style");
    promoteCellTextPresentation(cell);
    cleanAutomaticColorsInCellTree(cell);
    const tr = cell.closest("tr");
    if (tr?.hasAttribute("style")) {
      tr.setAttribute("style", normalizeSpreadsheetStyle(tr.getAttribute("style")));
    }
  }
  function normalizePastedSpreadsheet(sourceHtml) {
    if (!sourceHtml) return "";
    let output = normalizeSpreadsheetHtml(sourceHtml);
    const rawFormulaMap = buildFormulaGridMap(sourceHtml);
    output = stripCalculatedTextInRawHtml(output, rawFormulaMap);
    const classStyleMap = parseExcelClassStyles(extractExcelStyleRules(sourceHtml));
    const doc = new DOMParser().parseFromString(output, "text/html");
    const table = doc.querySelector("table");
    if (!table) return "";
    if (table.hasAttribute("style")) {
      table.setAttribute("style", normalizeSpreadsheetStyle(table.getAttribute("style")));
    }
    const formulaMap = buildFormulaGridMapFromTable(table);
    for (const [key, formula] of rawFormulaMap) {
      if (!formulaMap.has(key)) formulaMap.set(key, formula);
    }
    const rows = Array.from(table.querySelectorAll("tr"));
    rows.forEach((tr, rowIndex) => {
      const slots = expandTableRowCells(tr);
      slots.forEach((slot, colIndex) => {
        if (!slot?.isPrimary) return;
        const cell = slot.cell;
        normalizeSpreadsheetCellPresentation(cell, classStyleMap);
        let formula = formulaMap.get(`${rowIndex},${colIndex}`);
        if (!formula) {
          const text = cell.textContent.trim();
          if (text.startsWith("=")) formula = text;
        }
        if (formula) {
          const normalized = normalizeFormulaToTableA1(formula, rowIndex, colIndex);
          formulaMap.set(`${rowIndex},${colIndex}`, normalized);
          stripCalculatedValueAttributes(cell);
          cell.removeAttribute("data-sheets-formula");
          cell.removeAttribute("data-sheets-value");
          cell.removeAttribute("x:fmla");
          cell.setAttribute("data-eqn-formula", normalized);
          cell.textContent = "";
          return;
        }
        if (cellHasFormulaMarker(cell)) {
          stripCalculatedValueAttributes(cell);
          cell.innerHTML = "";
        }
      });
    });
    normalizeTableRectangular(table);
    return table.outerHTML;
  }
  function isPlainNumberText(text) {
    return /^-?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(String(text || "").trim());
  }
  function parseSpreadsheetCellNumber(text) {
    const trimmed = String(text || "").trim();
    if (!trimmed) return null;
    if (isPlainNumberText(trimmed)) return Number(trimmed);
    const percentMatch = trimmed.match(/^(-?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)\s*%$/);
    if (percentMatch) return Number(percentMatch[1]) / 100;
    return null;
  }
  function displayMapFromCanonicalTable(canonicalHtml) {
    const table = extractTableFromHtml(canonicalHtml);
    if (!table) return {};
    const out = {};
    const rows = Array.from(table.querySelectorAll("tr"));
    rows.forEach((tr, rowIndex) => {
      const slots = expandTableRowCells(tr);
      slots.forEach((slot, colIndex) => {
        if (!slot?.isPrimary) return;
        const text = slot.cell.textContent.trim();
        if (text) out[`${rowIndex},${colIndex}`] = text;
      });
    });
    return out;
  }
  function exportSpreadsheetFromCanonical(tableHtml, format = "excel") {
    if (!tableHtml) return "";
    const doc = new DOMParser().parseFromString(`<body>${tableHtml}</body>`, "text/html");
    const table = doc.querySelector("table");
    if (!table) return "";
    const rows = Array.from(table.querySelectorAll("tr"));
    rows.forEach((tr, rowIndex) => {
      const cells = Array.from(tr.querySelectorAll("td, th"));
      cells.forEach((cell, colIndex) => {
        const formula = cell.getAttribute("data-eqn-formula");
        if (formula) {
          applyFormulaToCell(cell, formula, rowIndex, colIndex, format);
        }
      });
    });
    const tableOut = format === "sheets" ? serializeSheetsTableHtml(table) : cleanTableMarkup(table.outerHTML);
    return wrapSpreadsheetClipboardHtml(tableOut, "", format);
  }
  function exportSpreadsheetFromVisibleTable(table, format = "excel") {
    if (!table) return "";
    const clone = table.cloneNode(true);
    const rows = Array.from(clone.querySelectorAll("tr"));
    rows.forEach((tr, rowIndex) => {
      const slots = expandTableRowCells(tr);
      for (let colIndex = 0; colIndex < slots.length; colIndex += 1) {
        const slot = slots[colIndex];
        if (!slot?.isPrimary) continue;
        const cell = slot.cell;
        const text = cell.textContent.trim().replace(/\u00a0/g, " ").trim();
        stripCalculatedValueAttributes(cell);
        cell.removeAttribute("data-eqn-formula");
        cell.removeAttribute("data-sheets-formula");
        cell.removeAttribute("x:fmla");
        if (text.startsWith("=")) {
          applyFormulaToCell(cell, text, rowIndex, colIndex, format);
        } else if (text) {
          cell.textContent = text;
        } else {
          cell.textContent = "";
        }
      }
    });
    const tableOut = format === "sheets" ? serializeSheetsTableHtml(clone) : cleanTableMarkup(clone.outerHTML);
    return wrapSpreadsheetClipboardHtml(tableOut, "", format);
  }
  function buildTableSpreadsheetClipboardHtml(canonical = "", draftHtml = "", { displayValues = null } = {}) {
    const container = document.createElement("div");
    renderWebTablePreviewInto(container, { canonical, draftHtml, displayValues });
    const table = container.querySelector("table.spreadsheet-preview-table");
    if (!table) return { excel: "", sheets: "" };
    return {
      excel: exportSpreadsheetFromVisibleTable(table, "excel"),
      sheets: exportSpreadsheetFromVisibleTable(table, "sheets")
    };
  }
  function stripCalculatedTextInRawHtml(html, formulaMap) {
    const tableMatch = html.match(/<table[\s\S]*?<\/table>/i);
    if (!tableMatch) return html;
    const tableBlock = tableMatch[0];
    let rowIndex = 0;
    const cleanedTable = tableBlock.replace(/<tr\b[\s\S]*?<\/tr>/gi, (rowBlock) => {
      let colIndex = 0;
      const cleanedRow = rowBlock.replace(/<t([dh])\b[\s\S]*?<\/t\1>/gi, (cellBlock) => {
        const key = `${rowIndex},${colIndex}`;
        colIndex += 1;
        const formula = formulaMap.get(key) || extractFormulaFromCellHtml(cellBlock) || extractVisibleFormulaFromCellHtml(cellBlock);
        if (!formula) return cellBlock;
        return cellBlock.replace(/(<t[dh]\b[^>]*>)[\s\S]*?(<\/t[dh]>)/i, "$1$2");
      });
      rowIndex += 1;
      return cleanedRow;
    });
    return html.replace(/<table[\s\S]*?<\/table>/i, cleanedTable);
  }
  function finalizeSpreadsheetHtml(html, format = "excel") {
    if (!html) return html;
    const canonical = normalizePastedSpreadsheet(html);
    return exportSpreadsheetFromCanonical(canonical, format);
  }
  function extractTableFromHtml(html) {
    if (!html) return null;
    const doc = new DOMParser().parseFromString(normalizeSpreadsheetHtml(html), "text/html");
    return doc.querySelector("table");
  }
  function formulaAttributeNames() {
    return ["data-eqn-formula", "data-sheets-formula", "data-formula"];
  }
  function readFormulaFromElement(el) {
    if (!el?.attributes) return "";
    for (const attr of el.attributes) {
      const name = attr.name.toLowerCase();
      if (formulaAttributeNames().includes(name) || name === "x:fmla" || name.endsWith(":fmla") || name === "fmla") {
        const value = attr.value.trim();
        if (value) return value;
      }
    }
    const sheetsValue = el.getAttribute("data-sheets-value");
    if (sheetsValue) {
      try {
        const obj = JSON.parse(sheetsValue);
        for (const value of Object.values(obj)) {
          if (typeof value === "string" && value.startsWith("=")) return value;
        }
      } catch {
      }
    }
    return "";
  }
  function resolveCellFormula(source, rowIndex, colIndex, formulaMap) {
    const fromMap = formulaMap.get(`${rowIndex},${colIndex}`);
    if (fromMap) return fromMap;
    const fromDom = getCellFormula(source);
    if (fromDom) return fromDom;
    const text = source.textContent.trim();
    if (text.startsWith("=")) return text;
    return "";
  }
  function getCellFormula(cell) {
    if (!cell) return "";
    const hosts = [cell, ...cell.querySelectorAll("*")];
    for (const el of hosts) {
      const formula = readFormulaFromElement(el);
      if (formula) return formula;
    }
    return "";
  }
  function formatFormulaDisplay(formula) {
    const trimmed = formula.trim();
    return trimmed.startsWith("=") ? trimmed : `=${trimmed}`;
  }
  function columnIndexToLetter(index) {
    let n = index + 1;
    let letters = "";
    while (n > 0) {
      n -= 1;
      letters = String.fromCharCode(65 + n % 26) + letters;
      n = Math.floor(n / 26);
    }
    return letters;
  }
  function expandTableRowCells(tr) {
    const slots = [];
    for (const cell of tr.querySelectorAll("td, th")) {
      const colSpan = Math.max(1, Number(cell.getAttribute("colspan")) || 1);
      for (let i = 0; i < colSpan; i += 1) {
        slots.push({ cell, isPrimary: i === 0, colSpan });
      }
    }
    return slots;
  }
  function copyTableCellTo(source, target) {
    for (const attr of source.attributes) {
      if (attr.name === "colspan" || attr.name === "rowspan") continue;
      target.setAttribute(attr.name, attr.value);
    }
    if (source.childNodes.length) {
      target.innerHTML = source.innerHTML;
    } else {
      target.textContent = source.textContent;
    }
  }
  function normalizeTableRectangular(table) {
    if (!table) return;
    const rows = Array.from(table.querySelectorAll("tr"));
    const cellRows = rows.map((tr) => expandTableRowCells(tr));
    const colCount = Math.max(...cellRows.map((slots) => slots.length), 0);
    if (!colCount) return;
    rows.forEach((tr, rowIndex) => {
      const slots = cellRows[rowIndex];
      const newRow = document.createElement("tr");
      const rowStyle = tr.getAttribute("style");
      if (rowStyle) newRow.setAttribute("style", rowStyle);
      for (let colIndex = 0; colIndex < colCount; colIndex += 1) {
        const td = document.createElement("td");
        const slot = slots[colIndex];
        if (slot?.isPrimary && slot.cell) {
          copyTableCellTo(slot.cell, td);
        }
        newRow.appendChild(td);
      }
      tr.replaceWith(newRow);
    });
  }
  function renderWebTablePreviewInto(container, { canonical = "", draftHtml = "", displayValues = null } = {}) {
    if (!container) return;
    let table = null;
    if (canonical) {
      const doc = new DOMParser().parseFromString(
        `<body>${canonical}</body>`,
        "text/html"
      );
      table = doc.querySelector("table");
    }
    if (!table) table = extractTableFromHtml(draftHtml);
    container.innerHTML = "";
    if (!table) {
      container.innerHTML = '<p class="spreadsheet-empty">No table yet. Paste from Excel or Google Sheets above.</p>';
      return;
    }
    const formulaMap = buildFormulaGridMapFromTable(table);
    const styleRules = extractExcelStyleRules(draftHtml);
    const classStyleMap = parseExcelClassStyles(styleRules);
    const webTable = table.cloneNode(true);
    webTable.classList.add("spreadsheet-preview-table");
    const rows = Array.from(webTable.querySelectorAll("tr"));
    const cellRows = rows.map((tr) => expandTableRowCells(tr));
    cellRows.forEach((slots, rowIndex) => {
      for (let colIndex = 0; colIndex < slots.length; colIndex += 1) {
        const slot = slots[colIndex];
        if (!slot?.isPrimary) continue;
        const cell = slot.cell;
        applyExcelCellPresentation(cell, cell, classStyleMap);
        normalizeSpreadsheetCellPresentation(cell, classStyleMap);
        const key = `${rowIndex},${colIndex}`;
        const formula = resolveCellFormula(cell, rowIndex, colIndex, formulaMap);
        if (displayValues?.has(key)) {
          setCellDisplayText(cell, displayValues.get(key));
          continue;
        }
        if (formula) {
          cell.classList.add("web-cell--formula");
          cell.textContent = formatFormulaDisplay(
            normalizeFormulaToTableA1(formula, rowIndex, colIndex)
          );
          continue;
        }
        if (!cell.textContent.trim() && !cell.innerHTML.trim()) {
          cell.innerHTML = "&nbsp;";
        }
      }
    });
    const wrap = document.createElement("div");
    wrap.className = "spreadsheet-table-wrap web-preview-root";
    if (styleRules.trim()) {
      const styleEl = document.createElement("style");
      styleEl.textContent = stripAutomaticColorsFromCss(
        scopeStyleRules(styleRules, ".web-preview-root")
      );
      wrap.appendChild(styleEl);
    }
    wrap.appendChild(webTable);
    container.appendChild(wrap);
  }
  function buildWebTableHtml(canonical = "", draftHtml = "", { displayValues = null } = {}) {
    const container = document.createElement("div");
    renderWebTablePreviewInto(container, { canonical, draftHtml, displayValues });
    const wrap = container.querySelector(".web-preview-root");
    return wrap ? wrap.innerHTML : "";
  }

  // js/table-codegen.js
  function jsonDictionaryKey(label) {
    return JSON.stringify(String(label ?? ""));
  }
  function cellLabel(cell, fallback = "") {
    if (!cell || cell.kind === "empty" || cell.kind === "merged") return fallback;
    const text = String(cell.value ?? "").trim();
    return text || fallback;
  }
  function canExportLabeledGrid(grid) {
    return grid.length >= 2 && (grid[0]?.length ?? 0) >= 2;
  }
  var EMPTY_EXPORT_CELL = { kind: "empty", value: null };
  function exportCell(row, index) {
    return row?.[index] ?? EMPTY_EXPORT_CELL;
  }
  function getTableExportShape(grid, exportColumnHeaders, exportRowNames) {
    if (!exportColumnHeaders && !exportRowNames) return "array";
    if (exportColumnHeaders && exportRowNames && canExportLabeledGrid(grid)) return "nested";
    if (exportColumnHeaders && grid.length >= 2) return "records";
    if (exportRowNames && grid.length >= 1) return "rowMap";
    return "array";
  }
  function parseNestedGrid(grid) {
    if (!canExportLabeledGrid(grid)) return null;
    const headers = grid[0].slice(1).map(
      (cell, index) => cellLabel(cell, `column_${index + 1}`)
    );
    const rows = [];
    for (let rowIndex = 1; rowIndex < grid.length; rowIndex += 1) {
      const row = grid[rowIndex];
      const rowKey = cellLabel(row[0], `row_${rowIndex}`);
      rows.push({ key: rowKey, values: row.slice(1) });
    }
    return { headers, rows };
  }
  function parseRecordsGrid(grid) {
    if (grid.length < 2) return null;
    const headers = grid[0].map((cell, index) => cellLabel(cell, `column_${index + 1}`));
    const rows = [];
    for (let rowIndex = 1; rowIndex < grid.length; rowIndex += 1) {
      rows.push({
        fields: headers.map((header, index) => ({
          header,
          cell: exportCell(grid[rowIndex], index)
        }))
      });
    }
    return { headers, rows };
  }
  function parseRowMapGrid(grid, exportColumnHeaders) {
    const startRow = exportColumnHeaders ? 1 : 0;
    if (startRow >= grid.length) return null;
    const rows = [];
    for (let rowIndex = startRow; rowIndex < grid.length; rowIndex += 1) {
      const row = grid[rowIndex];
      if (!row?.length) continue;
      const values = row.slice(1);
      rows.push({
        key: cellLabel(row[0], `row_${rowIndex + 1}`),
        values
      });
    }
    return rows.length ? { rows } : null;
  }
  function parseStructuredGrid(grid, exportColumnHeaders, exportRowNames) {
    const shape = getTableExportShape(grid, exportColumnHeaders, exportRowNames);
    if (shape === "nested") return { shape, data: parseNestedGrid(grid) };
    if (shape === "records") return { shape, data: parseRecordsGrid(grid) };
    if (shape === "rowMap") return { shape, data: parseRowMapGrid(grid, exportColumnHeaders) };
    return { shape: "array", data: null };
  }
  function pyRowMapValue(values) {
    if (values.length === 1) return pyLiteral(values[0]);
    return `[${values.map(pyLiteral).join(", ")}]`;
  }
  function jsRowMapValue(values) {
    if (values.length === 1) return jsLiteral(values[0]);
    return `[${values.map(jsLiteral).join(", ")}]`;
  }
  function csRowMapValue(values) {
    if (values.length === 1) return csLiteral(values[0]);
    return `new object[] { ${values.map(csLiteral).join(", ")} }`;
  }
  function sanitizeName2(name) {
    const s = String(name || "data").replace(/[^a-zA-Z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
    return s || "data";
  }
  function cellExportValue(cell, formula) {
    if (formula) {
      const f = formula.startsWith("=") ? formula : `=${formula}`;
      return { kind: "formula", value: f };
    }
    const text = (cell.textContent || "").trim();
    if (text === "") return { kind: "empty", value: null };
    const parsed = parseSpreadsheetCellNumber(text);
    if (parsed !== null) return { kind: "number", value: parsed };
    return { kind: "string", value: text };
  }
  function gridFromCanonical(canonicalHtml) {
    if (!canonicalHtml) return [];
    const table = extractTableFromHtml(canonicalHtml);
    if (!table) return [];
    const formulaMap = buildFormulaGridMapFromTable(table);
    const rows = Array.from(table.querySelectorAll("tr"));
    const cellRows = rows.map((tr) => expandTableRowCells(tr));
    const colCount = Math.max(...cellRows.map((slots) => slots.length), 0);
    const grid = [];
    cellRows.forEach((slots, rowIndex) => {
      const row = [];
      for (let c = 0; c < colCount; c += 1) {
        const slot = slots[c];
        if (!slot?.isPrimary) {
          row.push({ kind: "merged", value: 0 });
          continue;
        }
        const key = `${rowIndex},${c}`;
        const rawFormula = formulaMap.get(key) || "";
        const formula = rawFormula ? normalizeFormulaForCell(rawFormula, rowIndex, c) : "";
        row.push(cellExportValue(slot.cell, formula));
      }
      grid.push(row);
    });
    return grid;
  }
  function columnLettersToIndex2(letters) {
    let n = 0;
    for (const ch of letters.toUpperCase()) {
      n = n * 26 + (ch.charCodeAt(0) - 64);
    }
    return n;
  }
  function columnIndexToLetter2(index) {
    let n = index + 1;
    let s = "";
    while (n > 0) {
      const rem = (n - 1) % 26;
      s = String.fromCharCode(65 + rem) + s;
      n = Math.floor((n - 1) / 26);
    }
    return s;
  }
  function splitFormulaArgs(inner) {
    const parts = [];
    let depth = 0;
    let cur = "";
    for (const ch of inner) {
      if (ch === "(") depth += 1;
      else if (ch === ")") depth -= 1;
      else if (ch === "," && depth === 0) {
        parts.push(cur.trim());
        cur = "";
        continue;
      }
      cur += ch;
    }
    if (cur.trim()) parts.push(cur.trim());
    return parts;
  }
  var CELL_REF_RE = /\$?([A-Z]{1,3})\$?(\d+)/gi;
  function makeDataRefFormatter(lang, dataName) {
    return (colLetters, rowDigits) => {
      const row = Number(rowDigits) - 1;
      const col = columnLettersToIndex2(colLetters) - 1;
      if (lang === "javascript") {
        return `num(${dataName}[${row}][${col}])`;
      }
      if (lang === "python") {
        return `num(${dataName}[${row}][${col}])`;
      }
      const access = `${dataName}[${row}, ${col}]`;
      return `(Convert.ToDouble(${access} ?? 0))`;
    };
  }
  function replaceCellRefs(expr, dataName, lang = "javascript") {
    const ref = makeDataRefFormatter(lang, dataName);
    return expr.replace(CELL_REF_RE, (match, col, row, offset, whole) => {
      if (offset > 0 && /[A-Za-z0-9_]/.test(whole[offset - 1])) return match;
      return ref(col, row);
    });
  }
  function expandA1RangePlain(startCol, startRow, endCol, endRow) {
    const c0 = columnLettersToIndex2(startCol) - 1;
    const c1 = columnLettersToIndex2(endCol) - 1;
    const r0 = Number(startRow) - 1;
    const r1 = Number(endRow) - 1;
    const refs = [];
    for (let r = Math.min(r0, r1); r <= Math.max(r0, r1); r += 1) {
      for (let c = Math.min(c0, c1); c <= Math.max(c0, c1); c += 1) {
        refs.push(`${columnIndexToLetter2(c)}${r + 1}`);
      }
    }
    return refs;
  }
  function expandA1RangeRefs(startCol, startRow, endCol, endRow, dataName, lang) {
    const c0 = columnLettersToIndex2(startCol) - 1;
    const c1 = columnLettersToIndex2(endCol) - 1;
    const r0 = Number(startRow) - 1;
    const r1 = Number(endRow) - 1;
    const ref = makeDataRefFormatter(lang, dataName);
    const refs = [];
    for (let r = Math.min(r0, r1); r <= Math.max(r0, r1); r += 1) {
      for (let c = Math.min(c0, c1); c <= Math.max(c0, c1); c += 1) {
        refs.push(ref(columnIndexToLetter2(c), String(r + 1)));
      }
    }
    return refs;
  }
  function expandArg(arg) {
    const trimmed = arg.trim();
    const rangeMatch = trimmed.match(/^(\$?)([A-Z]{1,3})(\$?)(\d+)\s*:\s*(\$?)([A-Z]{1,3})(\$?)(\d+)$/i);
    if (rangeMatch) {
      return expandA1RangePlain(rangeMatch[2], rangeMatch[4], rangeMatch[6], rangeMatch[8]);
    }
    return [trimmed];
  }
  function expandAllArgs(inner) {
    const flat = [];
    for (const arg of splitFormulaArgs(inner)) {
      flat.push(...expandArg(arg));
    }
    return flat;
  }
  function nestCsharpMath(method, args) {
    if (!args.length) return "0";
    let result = args[0];
    for (let i = 1; i < args.length; i += 1) {
      result = `Math.${method}(${result}, ${args[i]})`;
    }
    return result;
  }
  function joinProduct(args) {
    if (!args.length) return "0";
    if (args.length === 1) return args[0];
    return args.join(" * ");
  }
  var PYTHON_MATH_FUNCS = /* @__PURE__ */ new Set([
    "SQRT",
    "LN",
    "LOG",
    "LOG10",
    "EXP",
    "PI",
    "CEILING",
    "FLOOR",
    "SIN",
    "COS",
    "TAN",
    "ASIN",
    "ACOS",
    "ATAN",
    "SINH",
    "COSH",
    "TANH"
  ]);
  var TRIG_UNARY = {
    SIN: { js: "Math.sin", py: "math.sin", cs: "Math.Sin" },
    COS: { js: "Math.cos", py: "math.cos", cs: "Math.Cos" },
    TAN: { js: "Math.tan", py: "math.tan", cs: "Math.Tan" },
    ASIN: { js: "Math.asin", py: "math.asin", cs: "Math.Asin" },
    ACOS: { js: "Math.acos", py: "math.acos", cs: "Math.Acos" },
    ATAN: { js: "Math.atan", py: "math.atan", cs: "Math.Atan" },
    SINH: { js: "Math.sinh", py: "math.sinh", cs: "Math.Sinh" },
    COSH: { js: "Math.cosh", py: "math.cosh", cs: "Math.Cosh" },
    TANH: { js: "Math.tanh", py: "math.tanh", cs: "Math.Tanh" }
  };
  var AGGREGATE_UNARY_FUNCS = /* @__PURE__ */ new Set([
    ...Object.keys(TRIG_UNARY),
    "ABS",
    "SQRT",
    "LN",
    "LOG10",
    "EXP"
  ]);
  var SUPPORTED_EXCEL_FUNCTIONS = /* @__PURE__ */ new Set([
    "SUM",
    "AVERAGE",
    "AVG",
    "MAX",
    "MIN",
    "PRODUCT",
    "ABS",
    "SQRT",
    "LN",
    "LOG10",
    "EXP",
    "INT",
    "CEILING",
    "FLOOR",
    "ROUND",
    "MOD",
    "POWER",
    "POW",
    "NOT",
    "IF",
    "AND",
    "OR",
    "TRUE",
    "FALSE",
    "COUNT",
    "PI",
    ...Object.keys(TRIG_UNARY)
  ]);
  var AGGREGATE_UNARY_TARGETS = {
    ABS: { js: "Math.abs", py: "abs", cs: "Math.Abs" },
    SQRT: { js: "Math.sqrt", py: "math.sqrt", cs: "Math.Sqrt" },
    LN: { js: "Math.log", py: "math.log", cs: "Math.Log" },
    LOG10: { js: "Math.log10", py: "math.log10", cs: "Math.Log10" },
    EXP: { js: "Math.exp", py: "math.exp", cs: "Math.Exp" }
  };
  function innerHasExcelFunction(inner) {
    return /\b[A-Z]{2,}\s*\(/.test(inner);
  }
  function expandSumProductUnaryRange(expr) {
    const re = /\b(SUM|PRODUCT)\s*\(\s*([A-Z][A-Z0-9]*)\s*\(\s*(\$?[A-Z]{1,3}\$?\d+)\s*:\s*(\$?[A-Z]{1,3}\$?\d+)\s*\)\s*\)/gi;
    return expr.replace(re, (match, agg, fn, startRef, endRef) => {
      const m1 = startRef.match(/^(\$?)([A-Z]{1,3})(\$?)(\d+)$/i);
      const m2 = endRef.match(/^(\$?)([A-Z]{1,3})(\$?)(\d+)$/i);
      if (!m1 || !m2) return match;
      const fnUpper = fn.toUpperCase();
      if (!AGGREGATE_UNARY_FUNCS.has(fnUpper)) return match;
      const cells = expandA1RangePlain(m1[2], m1[4], m2[2], m2[4]);
      const sep = agg.toUpperCase() === "PRODUCT" ? "*" : "+";
      return cells.map((cell) => `${fnUpper}(${cell})`).join(sep);
    });
  }
  function unaryFnExpr(fnName, valueExpr, lang) {
    const upper = fnName.toUpperCase();
    const trig = TRIG_UNARY[upper];
    if (trig) {
      if (lang === "python") return `${trig.py}(${valueExpr})`;
      if (lang === "csharp") return `${trig.cs}(${valueExpr})`;
      return `${trig.js}(${valueExpr})`;
    }
    const other = AGGREGATE_UNARY_TARGETS[upper];
    if (other) {
      if (lang === "python") return `${other.py}(${valueExpr})`;
      if (lang === "csharp") return `${other.cs}(${valueExpr})`;
      return `${other.js}(${valueExpr})`;
    }
    return valueExpr;
  }
  function translateFunction(name, inner, dataName, lang, refMapper) {
    const mapRef = refMapper ?? ((arg) => replaceCellRefs(arg, dataName, lang));
    const args = expandAllArgs(inner).map(mapRef);
    const upper = name.toUpperCase();
    switch (upper) {
      case "SUM":
        return args.length ? `(${args.join(" + ")})` : "0";
      case "AVERAGE":
      case "AVG":
        return args.length ? `((${args.join(" + ")}) / ${args.length})` : "0";
      case "MAX":
        if (lang === "csharp") return nestCsharpMath("Max", args);
        return lang === "python" ? `max(${args.join(", ")})` : `Math.max(${args.join(", ")})`;
      case "MIN":
        if (lang === "csharp") return nestCsharpMath("Min", args);
        return lang === "python" ? `min(${args.join(", ")})` : `Math.min(${args.join(", ")})`;
      case "PRODUCT":
        return joinProduct(args);
      case "ABS":
        return unaryCall("ABS", args, lang, { js: "Math.abs", py: "abs", cs: "Math.Abs" });
      case "SQRT":
        return unaryCall("SQRT", args, lang, { js: "Math.sqrt", py: "math.sqrt", cs: "Math.Sqrt" });
      case "LN":
        return unaryCall("LN", args, lang, { js: "Math.log", py: "math.log", cs: "Math.Log" });
      case "LOG10":
        return unaryCall("LOG10", args, lang, { js: "Math.log10", py: "math.log10", cs: "Math.Log10" });
      case "EXP":
        return unaryCall("EXP", args, lang, { js: "Math.exp", py: "math.exp", cs: "Math.Exp" });
      case "INT":
        return unaryCall("INT", args, lang, { js: "Math.trunc", py: "int", cs: "(int)Math.Truncate" });
      case "CEILING":
        return unaryCall("CEILING", args, lang, { js: "Math.ceil", py: "math.ceil", cs: "Math.Ceiling" });
      case "FLOOR":
        return unaryCall("FLOOR", args, lang, { js: "Math.floor", py: "math.floor", cs: "Math.Floor" });
      case "ROUND":
        return roundCall(args, lang);
      case "MOD":
        return modCall(args, lang);
      case "POWER":
      case "POW":
        return powerCall(args, lang);
      case "NOT":
        return unaryOp("!", args, lang, "not ");
      case "IF":
        return ifCall(args, lang);
      case "AND":
        return joinLogic(args, lang, "and", "&&");
      case "OR":
        return joinLogic(args, lang, "or", "||");
      case "TRUE":
        return lang === "python" ? "True" : "true";
      case "FALSE":
        return lang === "python" ? "False" : "false";
      case "COUNT":
        return countCall(args, lang);
      case "PI":
        return lang === "python" ? "math.pi" : "Math.PI";
      default: {
        const trig = TRIG_UNARY[upper];
        if (trig) return unaryCall(upper, args, lang, trig);
        return "0";
      }
    }
  }
  function unaryCall(_name, args, lang, targets) {
    const a = args[0] || "0";
    if (lang === "python") return `${targets.py}(${a})`;
    if (lang === "csharp") {
      if (targets.cs.startsWith("(")) return `${targets.cs}(${a})`;
      return `${targets.cs}(${a})`;
    }
    return `${targets.js}(${a})`;
  }
  function unaryOp(op, args, lang, pyOp) {
    const a = args[0] || "0";
    if (lang === "python") return `${pyOp}(${a})`;
    return `${op}(${a})`;
  }
  function roundCall(args, lang) {
    const value = args[0] || "0";
    const digits = args[1] || "0";
    if (lang === "python") return `round(${value}, ${digits})`;
    if (lang === "csharp") return `Math.Round(${value}, ${digits})`;
    if (digits === "0") return `Math.round(${value})`;
    return `(Math.round((${value}) * Math.pow(10, ${digits})) / Math.pow(10, ${digits}))`;
  }
  function modCall(args, lang) {
    const a = args[0] || "0";
    const b = args[1] || "1";
    if (lang === "python") return `(${a} % ${b})`;
    return `(${a} % ${b})`;
  }
  function powerCall(args, lang) {
    const a = args[0] || "0";
    const b = args[1] || "0";
    if (lang === "javascript") return `Math.pow(${a}, ${b})`;
    if (lang === "python") return `(${a} ** ${b})`;
    return `Math.Pow(${a}, ${b})`;
  }
  function ifCall(args, lang) {
    const cond = args[0] || "false";
    const whenTrue = args[1] || "0";
    const whenFalse = args[2] || "0";
    if (lang === "python") return `((${whenTrue}) if (${cond}) else (${whenFalse}))`;
    return `((${cond}) ? (${whenTrue}) : (${whenFalse}))`;
  }
  function joinLogic(args, lang, pyOp, jsOp) {
    if (!args.length) return lang === "python" ? "True" : "true";
    const sep = lang === "python" ? ` ${pyOp} ` : ` ${jsOp} `;
    return `(${args.join(sep)})`;
  }
  function countCall(args, lang) {
    if (!args.length) return "0";
    if (lang === "javascript") {
      return `[${args.join(", ")}].filter(v => typeof v === 'number' && !Number.isNaN(v)).length`;
    }
    if (lang === "python") {
      return `sum(1 for v in [${args.join(", ")}] if isinstance(v, (int, float)))`;
    }
    return `(${args.map((a) => `(double.TryParse(Convert.ToString(${a}), out _) ? 1 : 0)`).join(" + ")})`;
  }
  function normalizeComparisons(expr) {
    return expr.replace(/<>/g, "!=").replace(/([^<>!=])=([^=])/g, "$1==$2");
  }
  function convertAllFunctions(expr, dataName, lang, refMapper) {
    const MAX_PASSES = 64;
    for (let pass = 0; pass < MAX_PASSES; pass += 1) {
      let changed = false;
      for (let i = 0; i < expr.length; i += 1) {
        if (expr[i] !== ")") continue;
        let depth = 1;
        let j = i - 1;
        while (j >= 0 && depth > 0) {
          if (expr[j] === ")") depth += 1;
          else if (expr[j] === "(") depth -= 1;
          j -= 1;
        }
        const open = j + 1;
        const inner = expr.slice(open + 1, i);
        if (innerHasExcelFunction(inner)) continue;
        const before = expr.slice(0, open);
        const funcMatch = before.match(/([A-Z][A-Z0-9]*)\s*$/);
        if (!funcMatch) continue;
        const funcStart = before.length - funcMatch[0].length;
        if (funcStart > 0 && before[funcStart - 1] === ".") continue;
        const name = funcMatch[1];
        if (name.length < 2) continue;
        const original = expr.slice(funcStart, i + 1);
        const converted = translateFunction(name, inner, dataName, lang, refMapper);
        if (converted === original) continue;
        expr = expr.slice(0, funcStart) + converted + expr.slice(i + 1);
        changed = true;
        break;
      }
      if (!changed) break;
    }
    return expr;
  }
  function formulaUsesPythonMath(formula) {
    const upper = String(formula || "").toUpperCase();
    for (const fn of PYTHON_MATH_FUNCS) {
      if (upper.includes(`${fn}(`)) return true;
    }
    return false;
  }
  function formulaToExpression(formula, dataName = "data", lang = "javascript") {
    let expr = String(formula || "").trim();
    if (!expr) return "0";
    if (expr.startsWith("=")) expr = expr.slice(1);
    expr = normalizeComparisons(expr);
    expr = expandSumProductUnaryRange(expr);
    expr = convertAllFunctions(expr, dataName, lang);
    expr = expr.replace(
      /\$?([A-Z]{1,3})\$?(\d+)\s*:\s*\$?([A-Z]{1,3})\$?(\d+)/gi,
      (match, c1, r1, c2, r2, offset, whole) => {
        if (offset > 0 && /[A-Za-z0-9_]/.test(whole[offset - 1])) return match;
        const refs = expandA1RangeRefs(c1, r1, c2, r2, dataName, lang);
        return refs.length ? refs.join(" + ") : "0";
      }
    );
    expr = replaceCellRefs(expr, dataName, lang);
    if (lang === "javascript") expr = expr.replace(/\^/g, "**");
    return expr;
  }
  function formulaToJsExpression(formula, dataName = "data") {
    return formulaToExpression(formula, dataName, "javascript");
  }
  function formulaToPythonExpression(formula, dataName = "data") {
    return formulaToExpression(formula, dataName, "python");
  }
  function formulaToCsharpExpression(formula, dataName = "data") {
    return formulaToExpression(formula, dataName, "csharp");
  }
  function gridCellInitialValue(cell) {
    if (cell.kind === "formula") return null;
    if (cell.kind === "number") return cell.value;
    if (cell.kind === "string") {
      const n = Number(cell.value);
      return Number.isNaN(n) ? cell.value : n;
    }
    return 0;
  }
  function formatClipboardRawValue(raw, numberFormat = {}) {
    if (raw === null || raw === void 0 || raw === "") return "";
    if (typeof raw === "boolean") return raw ? "TRUE" : "FALSE";
    if (typeof raw === "number") return formatCellDisplayValue(raw, numberFormat);
    const text = String(raw).trim();
    if (!text) return "";
    if (text === "TRUE" || text === "FALSE") return text;
    const parsed = parseSpreadsheetCellNumber(text);
    if (parsed !== null) return formatCellDisplayValue(parsed, numberFormat);
    return text;
  }
  function formatDisplayValueMap(rawValues, numberFormat = {}) {
    const map = /* @__PURE__ */ new Map();
    if (!rawValues) return map;
    const entries = rawValues instanceof Map ? rawValues.entries() : Object.entries(rawValues);
    if (numberFormat.mode === "custom") {
      for (const [key, raw] of entries) {
        if (raw === null || raw === void 0 || raw === "") {
          map.set(key, "");
        } else {
          map.set(key, String(raw));
        }
      }
      return map;
    }
    for (const [key, raw] of entries) {
      map.set(key, formatClipboardRawValue(raw, numberFormat));
    }
    return map;
  }
  function formatCellDisplayValue(value, numberFormat = {}) {
    if (numberFormat.mode === "custom") {
      if (value === null || value === void 0) return "";
      return String(value);
    }
    if (value === null || value === void 0) return "";
    if (typeof value === "string") return value;
    if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
    if (typeof value !== "number" || Number.isNaN(value)) return "#VALUE!";
    if (!Number.isFinite(value)) return String(value);
    const mode = numberFormat.mode === "decimals" ? "decimals" : numberFormat.mode === "custom" ? "custom" : "sigfigs";
    const digits = Number(numberFormat.digits);
    if (mode === "custom") {
      return String(value);
    }
    if (!Number.isFinite(digits)) {
      return formatNumberPlain(value);
    }
    if (mode === "decimals") {
      return formatNumberDecimalPlaces(value, Math.min(15, Math.max(0, Math.floor(digits))));
    }
    if (digits < 1) return formatNumberPlain(value);
    return formatNumberSigFigs(value, Math.min(15, Math.floor(digits)));
  }
  function formatNumberPlain(value) {
    if (Number.isInteger(value)) return String(value);
    return String(value);
  }
  function formatNumberSigFigs(num, sigFigs) {
    if (num === 0) return "0";
    const s = num.toPrecision(sigFigs);
    if (/e/i.test(s)) return s;
    const parsed = Number(s);
    if (Number.isNaN(parsed)) return s;
    return String(parsed);
  }
  function formatNumberDecimalPlaces(num, places) {
    if (num === 0) return places > 0 ? 0 .toFixed(places) : "0";
    const factor = 10 ** places;
    const rounded = Math.round(num * factor) / factor;
    return places > 0 ? rounded.toFixed(places) : String(Math.round(rounded));
  }
  var TABLE_CALC_ERROR = "#CALC ERROR!";
  function detectJavascriptResultShape(result) {
    if (Array.isArray(result)) {
      if (!result.length) return null;
      if (result.every((row) => Array.isArray(row))) return "array";
      if (result.every((row) => row && typeof row === "object" && !Array.isArray(row))) {
        return "records";
      }
      return null;
    }
    if (result && typeof result === "object") {
      const values = Object.values(result);
      if (!values.length) return null;
      if (values.every((value) => value && typeof value === "object" && !Array.isArray(value))) {
        return "nested";
      }
      return "rowMap";
    }
    return null;
  }
  function evaluateTableFromJavascript(jsSource, tableName = "data") {
    const code = String(jsSource || "").trim();
    if (!code) {
      return { ok: false, error: "JavaScript export is empty." };
    }
    const name = sanitizeName2(tableName);
    try {
      const fn = new Function("Math", `
      "use strict";
      ${code}
      return typeof ${name} !== 'undefined' ? ${name} : null;
    `);
      const result = fn(Math);
      if (result === null || result === void 0) {
        return { ok: false, error: `JavaScript did not define "${name}".` };
      }
      const shape = detectJavascriptResultShape(result);
      if (!shape) {
        return {
          ok: false,
          error: `JavaScript "${name}" must be a 2D array or labeled table object.`
        };
      }
      return { ok: true, shape, data: result };
    } catch (err) {
      return { ok: false, error: err?.message || String(err) };
    }
  }
  function errorMapForFormulaCells(grid) {
    const map = /* @__PURE__ */ new Map();
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.kind === "formula") {
          map.set(`${rowIndex},${colIndex}`, TABLE_CALC_ERROR);
        }
      });
    });
    return map;
  }
  function javascriptResultToMatrix(evalResult, grid, exportColumnHeaders = false, exportRowNames = false) {
    const expectedShape = getTableExportShape(grid, exportColumnHeaders, exportRowNames);
    const { shape, data } = evalResult;
    if (expectedShape === "array" && shape === "array") {
      return data;
    }
    if (expectedShape === "nested" && shape === "nested") {
      const nested = parseNestedGrid(grid);
      if (!nested) return null;
      return grid.map(
        (row, rowIndex) => row.map((cell, colIndex) => {
          if (rowIndex === 0 || colIndex === 0) {
            return gridCellInitialValue(cell);
          }
          const rowKey = nested.rows[rowIndex - 1]?.key;
          const header = nested.headers[colIndex - 1];
          const rowData = data[rowKey];
          if (!rowData || header === void 0) return null;
          return rowData[header] ?? null;
        })
      );
    }
    if (expectedShape === "records" && shape === "records") {
      const records = parseRecordsGrid(grid);
      if (!records) return null;
      return grid.map(
        (row, rowIndex) => row.map((cell, colIndex) => {
          if (rowIndex === 0) return gridCellInitialValue(cell);
          const record = data[rowIndex - 1];
          const header = records.headers[colIndex];
          if (!record || header === void 0) return gridCellInitialValue(cell);
          return record[header] ?? null;
        })
      );
    }
    if (expectedShape === "rowMap" && shape === "rowMap") {
      const rowMap = parseRowMapGrid(grid, exportColumnHeaders);
      if (!rowMap) return null;
      const headerRows = exportColumnHeaders ? 1 : 0;
      return grid.map(
        (row, rowIndex) => row.map((cell, colIndex) => {
          if (exportColumnHeaders && rowIndex === 0) return gridCellInitialValue(cell);
          if (rowIndex < headerRows) return gridCellInitialValue(cell);
          const mapRow = rowMap.rows[rowIndex - headerRows];
          const rowKey = mapRow?.key;
          const rowValues = rowKey ? data[rowKey] : void 0;
          if (exportRowNames && colIndex === 0) return gridCellInitialValue(cell);
          const valueIndex = colIndex - (exportRowNames ? 1 : 0);
          if (Array.isArray(rowValues)) return rowValues[valueIndex] ?? null;
          if (valueIndex === 0) return rowValues ?? null;
          return null;
        })
      );
    }
    return null;
  }
  function buildEvaluatedDisplayMap(canonicalHtml, numberFormat = {}, tableName = "data", javascriptSource = null, {
    exportColumnHeaders = false,
    exportRowNames = false
  } = {}) {
    const grid = gridFromCanonical(canonicalHtml);
    if (!grid.length) return { map: /* @__PURE__ */ new Map(), error: null };
    if (!gridUsesFormulas(grid)) {
      const raw = {};
      grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell.kind === "merged" || cell.kind === "empty") return;
          raw[`${rowIndex},${colIndex}`] = gridCellInitialValue(cell);
        });
      });
      const formatted = formatDisplayValueMap(raw, numberFormat);
      const map2 = formatted instanceof Map ? formatted : new Map(Object.entries(formatted));
      return { map: map2, error: null };
    }
    if (!String(javascriptSource || "").trim()) {
      return {
        map: errorMapForFormulaCells(grid),
        error: "JavaScript export is required to calculate values."
      };
    }
    const evalResult = evaluateTableFromJavascript(javascriptSource, tableName);
    if (!evalResult.ok) {
      return { map: errorMapForFormulaCells(grid), error: evalResult.error };
    }
    const matrix = javascriptResultToMatrix(
      evalResult,
      grid,
      exportColumnHeaders,
      exportRowNames
    );
    if (!matrix) {
      return {
        map: errorMapForFormulaCells(grid),
        error: "JavaScript result shape does not match table export structure."
      };
    }
    const map = /* @__PURE__ */ new Map();
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.kind === "merged" || cell.kind === "empty") return;
        map.set(
          `${rowIndex},${colIndex}`,
          formatCellDisplayValue(matrix[rowIndex]?.[colIndex], numberFormat)
        );
      });
    });
    return { map, error: null };
  }
  function pyInitLiteral(cell) {
    if (cell.kind === "formula") return "None";
    if (cell.kind === "empty" || cell.kind === "merged") return "0";
    if (cell.kind === "number") return String(cell.value);
    return JSON.stringify(cell.value);
  }
  function pyLiteral(cell) {
    if (cell.kind === "empty" || cell.kind === "merged") return "0";
    if (cell.kind === "number") return String(cell.value);
    if (cell.kind === "formula") return JSON.stringify(cell.value);
    return JSON.stringify(cell.value);
  }
  function jsInitLiteral(cell) {
    if (cell.kind === "formula") return "null";
    if (cell.kind === "empty" || cell.kind === "merged") return "0";
    if (cell.kind === "number") return String(cell.value);
    return JSON.stringify(cell.value);
  }
  function jsLiteral(cell) {
    if (cell.kind === "empty" || cell.kind === "merged") return "0";
    if (cell.kind === "number") return String(cell.value);
    if (cell.kind === "formula") return JSON.stringify(cell.value);
    return JSON.stringify(cell.value);
  }
  function csInitLiteral(cell) {
    if (cell.kind === "formula") return "null";
    if (cell.kind === "empty" || cell.kind === "merged") return "0";
    if (cell.kind === "number") {
      return Number.isInteger(cell.value) ? `${cell.value}` : `${cell.value}d`;
    }
    return JSON.stringify(cell.value);
  }
  function csLiteral(cell) {
    if (cell.kind === "empty" || cell.kind === "merged") return "0";
    if (cell.kind === "number") {
      return Number.isInteger(cell.value) ? `${cell.value}` : `${cell.value}d`;
    }
    if (cell.kind === "formula") return JSON.stringify(cell.value);
    return JSON.stringify(cell.value);
  }
  function jsNumHelper() {
    return `function num(v) {
  if (typeof v === 'number' && !Number.isNaN(v)) return v;
  if (v === null || v === undefined || v === '') return 0;
  const n = Number(v);
  return Number.isNaN(n) ? 0 : n;
}`;
  }
  function pyNumHelper() {
    return `def num(v):
    if isinstance(v, (int, float)):
        return v
    if v in (None, ''):
        return 0
    try:
        return float(v)
    except (TypeError, ValueError):
        return 0`;
  }
  function gridUsesFormulas(grid) {
    return grid.some((row) => row.some((c) => c.kind === "formula"));
  }
  function gridNeedsPythonMath(grid, tableName) {
    return grid.some((row) => row.some(
      (c) => c.kind === "formula" && formulaUsesPythonMath(c.value)
    ));
  }
  var MIN_FORMULA_LOOP_CELLS = 2;
  var TEMPLATE_REF_RE = /@(-?\d+);(-?\d+)@/g;
  var TEMPLATE_RANGE_RE = /@(-?\d+);(-?\d+)@\s*:\s*@(-?\d+);(-?\d+)@/g;
  function adjustFillDownRowRefs(formula, formulaRow) {
    let expr = String(formula || "").trim();
    if (expr.startsWith("=")) expr = expr.slice(1);
    const refRows = [];
    expr.replace(CELL_REF_RE, (_match, _col, row) => {
      refRows.push(Number(row));
      return _match;
    });
    if (!refRows.length) return formula;
    const anchorRow = refRows[0];
    if (!refRows.every((row) => row === anchorRow)) return formula;
    const expectedRow = formulaRow + 1;
    if (anchorRow === expectedRow) return formula;
    let out = expr.replace(CELL_REF_RE, (match, colLetters, rowDigits, offset, whole) => {
      if (offset > 0 && /[A-Za-z0-9_]/.test(whole[offset - 1])) return match;
      if (Number(rowDigits) === anchorRow) {
        return `${colLetters}${expectedRow}`;
      }
      return match;
    });
    return out.startsWith("=") ? out : `=${out}`;
  }
  function normalizeFormulaForCell(formula, formulaRow, formulaCol) {
    let normalized = normalizeFormulaToTableA1(formula, formulaRow, formulaCol);
    normalized = adjustFillDownRowRefs(normalized, formulaRow);
    return normalized;
  }
  function formulaRelativeTemplate(formula, formulaRow, formulaCol) {
    let expr = String(formula || "").trim();
    if (expr.startsWith("=")) expr = expr.slice(1);
    const refToPlaceholder = (colLetters, rowDigits) => {
      const absRow = Number(rowDigits) - 1;
      const absCol = columnLettersToIndex2(colLetters) - 1;
      const dr = absRow - formulaRow;
      const dc = absCol - formulaCol;
      return `@${dr};${dc}@`;
    };
    expr = expr.replace(
      /\$?([A-Z]{1,3})\$?(\d+)\s*:\s*\$?([A-Z]{1,3})\$?(\d+)/gi,
      (match, c1, r1, c2, r2, offset, whole) => {
        if (offset > 0 && /[A-Za-z0-9_]/.test(whole[offset - 1])) return match;
        return `${refToPlaceholder(c1, r1)}:${refToPlaceholder(c2, r2)}`;
      }
    );
    expr = expr.replace(CELL_REF_RE, (match, colLetters, rowDigits, offset, whole) => {
      if (offset > 0 && /[A-Za-z0-9_]/.test(whole[offset - 1])) return match;
      return refToPlaceholder(colLetters, rowDigits);
    });
    return expr.toUpperCase();
  }
  function collectFormulaCells(grid) {
    const cells = [];
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.kind !== "formula") return;
        const formula = normalizeFormulaForCell(cell.value, rowIndex, colIndex);
        cells.push({
          row: rowIndex,
          col: colIndex,
          formula,
          template: formulaRelativeTemplate(formula, rowIndex, colIndex)
        });
      });
    });
    return cells;
  }
  function formulaCellKey(row, col) {
    return `${row},${col}`;
  }
  function contiguousIndexRuns(indices) {
    if (!indices.length) return [];
    const sorted = [...indices].sort((a, b) => a - b);
    const runs = [];
    let start = sorted[0];
    let prev = sorted[0];
    for (let i = 1; i < sorted.length; i += 1) {
      if (sorted[i] === prev + 1) {
        prev = sorted[i];
        continue;
      }
      runs.push({ start, end: prev });
      start = sorted[i];
      prev = sorted[i];
    }
    runs.push({ start, end: prev });
    return runs;
  }
  function findColumnLoopSegments(cells, gridRowCount) {
    const groups = /* @__PURE__ */ new Map();
    for (const cell of cells) {
      const key = `${cell.col}\0${cell.template}`;
      if (!groups.has(key)) groups.set(key, { col: cell.col, template: cell.template, rows: [] });
      groups.get(key).rows.push(cell.row);
    }
    const segments = [];
    for (const group of groups.values()) {
      for (const run of contiguousIndexRuns(group.rows)) {
        if (run.end - run.start + 1 < MIN_FORMULA_LOOP_CELLS) continue;
        segments.push({
          axis: "column",
          col: group.col,
          template: group.template,
          start: run.start,
          end: run.end,
          openEnd: run.end === gridRowCount - 1
        });
      }
    }
    return segments;
  }
  function findRowLoopSegments(cells, gridColCount) {
    const groups = /* @__PURE__ */ new Map();
    for (const cell of cells) {
      const key = `${cell.row}\0${cell.template}`;
      if (!groups.has(key)) groups.set(key, { row: cell.row, template: cell.template, cols: [] });
      groups.get(key).cols.push(cell.col);
    }
    const segments = [];
    for (const group of groups.values()) {
      for (const run of contiguousIndexRuns(group.cols)) {
        if (run.end - run.start + 1 < MIN_FORMULA_LOOP_CELLS) continue;
        segments.push({
          axis: "row",
          row: group.row,
          template: group.template,
          start: run.start,
          end: run.end,
          openEnd: run.end === gridColCount - 1
        });
      }
    }
    return segments;
  }
  function expandTemplateRanges(template) {
    let out = template;
    let changed = true;
    while (changed) {
      changed = false;
      out = out.replace(TEMPLATE_RANGE_RE, (match, r1, c1, r2, c2) => {
        changed = true;
        const dr1 = Number(r1);
        const dc1 = Number(c1);
        const dr2 = Number(r2);
        const dc2 = Number(c2);
        const refs = [];
        for (let r = Math.min(dr1, dr2); r <= Math.max(dr1, dr2); r += 1) {
          for (let c = Math.min(dc1, dc2); c <= Math.max(dc1, dc2); c += 1) {
            refs.push(`@${r};${c}@`);
          }
        }
        return refs.join(",");
      });
    }
    return out;
  }
  function indexExpr(varName, fixed, delta) {
    if (varName) {
      if (delta === 0) return varName;
      return delta > 0 ? `${varName} + ${delta}` : `${varName} - ${-delta}`;
    }
    return String(fixed + delta);
  }
  function substTemplatePlaceholders(expr, lang, dataName, rowVar, colVar, anchorRow, anchorCol) {
    return expr.replace(TEMPLATE_REF_RE, (_match, dr, dc) => {
      const rowIdx = indexExpr(rowVar, anchorRow, Number(dr));
      const colIdx = indexExpr(colVar, anchorCol, Number(dc));
      if (lang === "csharp") {
        return `(Convert.ToDouble(${dataName}[${rowIdx}, ${colIdx}] ?? 0))`;
      }
      return `num(${dataName}[${rowIdx}][${colIdx}])`;
    });
  }
  function convertTemplateExpression(template, dataName, lang, rowVar, colVar, anchorRow, anchorCol) {
    let expr = expandTemplateRanges(template);
    expr = normalizeComparisons(expr);
    expr = convertAllFunctions(expr, dataName, lang);
    expr = substTemplatePlaceholders(expr, lang, dataName, rowVar, colVar, anchorRow, anchorCol);
    if (lang === "javascript") expr = expr.replace(/\^/g, "**");
    return expr;
  }
  function processIndent(lang, level = 1) {
    const step = lang === "javascript" ? 2 : 4;
    return " ".repeat(step * level);
  }
  function formatPythonSumAssignment(pad, lhs, terms) {
    if (!terms.length) {
      return `${pad}${lhs} = 0`;
    }
    if (terms.length === 1) {
      return `${pad}${lhs} = ${terms[0]}`;
    }
    if (terms.length === 2) {
      return `${pad}${lhs} = (${terms.join(" + ")})`;
    }
    const bodyPad = processIndent("python", 2);
    return [
      `${pad}${lhs} = (`,
      `${bodyPad}${terms[0]}`,
      ...terms.slice(1).map((term) => `${bodyPad}+ ${term}`),
      `${pad})`
    ].join("\n");
  }
  function ensureFunctionBodyIndent(lines, lang) {
    const bodyPad = processIndent(lang, 1);
    return lines.map((line) => {
      if (!line || /^\s/.test(line)) return line;
      return `${bodyPad}${line}`;
    });
  }
  function parseVerticalAggregate(template) {
    let t = template.trim().toUpperCase();
    let op = "sum";
    const sumFn = t.match(/^SUM\((.+)\)$/);
    const prodFn = t.match(/^PRODUCT\((.+)\)$/);
    let body = t;
    if (sumFn) body = sumFn[1];
    else if (prodFn) {
      body = prodFn[1];
      op = "product";
    }
    let unaryFn = null;
    const unaryWrap = body.match(/^([A-Z][A-Z0-9]*)\(@(-?\d+);(-?\d+)@:@(-?\d+);(-?\d+)@\)$/);
    if (unaryWrap && (sumFn || prodFn) && AGGREGATE_UNARY_FUNCS.has(unaryWrap[1])) {
      unaryFn = unaryWrap[1];
      body = `@${unaryWrap[2]};${unaryWrap[3]}@:@${unaryWrap[4]};${unaryWrap[5]}@`;
    }
    body = body.replace(TEMPLATE_RANGE_RE, (match, r1, c1, r2, c2) => {
      const dr1 = Number(r1);
      const dc1 = Number(c1);
      const dr2 = Number(r2);
      const dc2 = Number(c2);
      if (dc1 !== dc2) return match;
      const parts = [];
      for (let r = Math.min(dr1, dr2); r <= Math.max(dr1, dr2); r += 1) {
        parts.push(`@${r};${dc1}@`);
      }
      return parts.join(",");
    });
    const refs = [];
    const re = /@(-?\d+);(-?\d+)@/g;
    let m;
    while ((m = re.exec(body)) !== null) {
      refs.push({ dr: Number(m[1]), dc: Number(m[2]) });
    }
    if (refs.length < 2) return null;
    const dc = refs[0].dc;
    if (!refs.every((r) => r.dc === dc)) return null;
    const drs = [...new Set(refs.map((r) => r.dr))].sort((a, b) => a - b);
    if (drs.length !== refs.length) return null;
    for (let i = 1; i < drs.length; i += 1) {
      if (drs[i] !== drs[i - 1] + 1) return null;
    }
    if (drs[drs.length - 1] !== -1) return null;
    const stripped = body.replace(TEMPLATE_REF_RE, "").replace(/\s/g, "");
    if (sumFn || prodFn) {
      if (!/^[,]+$/.test(stripped)) return null;
    } else {
      const opPattern = op === "product" ? /^\*+$/ : /^\++$/;
      if (!opPattern.test(stripped)) return null;
    }
    return { op, colDelta: dc, minDr: drs[0], unaryFn };
  }
  function aggregateCellExpr(dataName, lang, rowVar, colIdxExpr, unaryFn) {
    let cell;
    if (lang === "csharp") {
      cell = `Convert.ToDouble(${dataName}[${rowVar}, ${colIdxExpr}] ?? 0)`;
    } else {
      cell = `num(${dataName}[${rowVar}][${colIdxExpr}])`;
    }
    return unaryFn ? unaryFnExpr(unaryFn, cell, lang) : cell;
  }
  function emitVerticalAggregateRowLoop(segment, dataName, lang, gridRowCount, aggregate) {
    const pad = processIndent(lang, 1);
    const bodyPad = processIndent(lang, 2);
    const innerPad = processIndent(lang, 3);
    const isLastRow = segment.row === gridRowCount - 1;
    const dataStart = segment.row + aggregate.minDr;
    const colIdx = aggregate.colDelta === 0 ? "c" : `c + ${aggregate.colDelta}`;
    const op = aggregate.op;
    const unaryFn = aggregate.unaryFn;
    const rowVar = lang === "csharp" ? "r" : "r";
    const cellExpr = aggregateCellExpr(dataName, lang, rowVar, colIdx, unaryFn);
    if (lang === "python") {
      if (isLastRow) {
        const accInit = op === "product" ? "1" : "0";
        const accOp = op === "product" ? "total *=" : "total +=";
        return [
          `${pad}n = len(${dataName})`,
          `${pad}for c in range(len(${dataName}[n - 1])):`,
          `${bodyPad}total = ${accInit}`,
          `${bodyPad}for r in range(${dataStart}, n - 1):`,
          `${innerPad}${accOp} ${cellExpr}`,
          `${bodyPad}${dataName}[n - 1][c] = total`
        ];
      }
      if (op === "product") {
        return [
          `${pad}for c in range(${segment.start}, len(${dataName}[${segment.row}])):`,
          `${bodyPad}total = 1`,
          `${bodyPad}for r in range(${dataStart}, ${segment.row}):`,
          `${innerPad}total *= ${cellExpr}`,
          `${bodyPad}${dataName}[${segment.row}][c] = total`
        ];
      }
      const sumExpr = unaryFn ? `sum(${cellExpr} for r in range(${dataStart}, ${segment.row}))` : `sum(num(${dataName}[r][${colIdx}]) for r in range(${dataStart}, ${segment.row}))`;
      return [
        `${pad}for c in range(${segment.start}, len(${dataName}[${segment.row}])):`,
        `${bodyPad}${dataName}[${segment.row}][c] = ${sumExpr}`
      ];
    }
    if (lang === "csharp") {
      if (isLastRow) {
        const accInit = op === "product" ? "1d" : "0d";
        const accOp = op === "product" ? "total *=" : "total +=";
        return [
          `${pad}int n = ${dataName}.GetLength(0);`,
          `${pad}for (int c = 0; c < ${dataName}.GetLength(1); c++)`,
          `${bodyPad}{`,
          `${innerPad}double total = ${accInit};`,
          `${innerPad}for (int r = ${dataStart}; r < n - 1; r++)`,
          `${innerPad}    ${accOp} ${cellExpr};`,
          `${innerPad}${dataName}[n - 1, c] = total;`,
          `${bodyPad}}`
        ];
      }
      if (op === "product") {
        return [
          `${pad}for (int c = ${segment.start}; c < ${dataName}.GetLength(1); c++)`,
          `${bodyPad}{`,
          `${innerPad}double total = 1d;`,
          `${innerPad}for (int r = ${dataStart}; r < ${segment.row}; r++)`,
          `${innerPad}    total *= ${cellExpr};`,
          `${innerPad}${dataName}[${segment.row}, c] = total;`,
          `${bodyPad}}`
        ];
      }
      return [
        `${pad}for (int c = ${segment.start}; c < ${dataName}.GetLength(1); c++)`,
        `${bodyPad}{`,
        `${innerPad}double total = 0d;`,
        `${innerPad}for (int r = ${dataStart}; r < ${segment.row}; r++)`,
        `${innerPad}    total += ${cellExpr};`,
        `${innerPad}${dataName}[${segment.row}, c] = total;`,
        `${bodyPad}}`
      ];
    }
    if (isLastRow) {
      const accInit = op === "product" ? "1" : "0";
      const accOp = op === "product" ? "total *=" : "total +=";
      return [
        `${pad}const n = ${dataName}.length;`,
        `${pad}for (let c = 0; c < ${dataName}[n - 1].length; c++) {`,
        `${bodyPad}let total = ${accInit};`,
        `${bodyPad}for (let r = ${dataStart}; r < n - 1; r++) {`,
        `${innerPad}${accOp} ${cellExpr};`,
        `${bodyPad}}`,
        `${bodyPad}${dataName}[n - 1][c] = total;`,
        `${pad}}`
      ];
    }
    if (op === "product") {
      return [
        `${pad}for (let c = ${segment.start}; c < ${dataName}[${segment.row}].length; c++) {`,
        `${bodyPad}let total = 1;`,
        `${bodyPad}for (let r = ${dataStart}; r < ${segment.row}; r++) {`,
        `${innerPad}total *= ${cellExpr};`,
        `${bodyPad}}`,
        `${bodyPad}${dataName}[${segment.row}][c] = total;`,
        `${pad}}`
      ];
    }
    return [
      `${pad}for (let c = ${segment.start}; c < ${dataName}[${segment.row}].length; c++) {`,
      `${bodyPad}let total = 0;`,
      `${bodyPad}for (let r = ${dataStart}; r < ${segment.row}; r++) {`,
      `${innerPad}total += ${cellExpr};`,
      `${bodyPad}}`,
      `${bodyPad}${dataName}[${segment.row}][c] = total;`,
      `${pad}}`
    ];
  }
  function emitColumnLoopSegment(segment, dataName, lang) {
    const expr = convertTemplateExpression(
      segment.template,
      dataName,
      lang,
      "r",
      null,
      null,
      segment.col
    );
    const pad = processIndent(lang, 1);
    const bodyPad = processIndent(lang, 2);
    if (lang === "python") {
      const bound2 = segment.openEnd ? `len(${dataName})` : String(segment.end + 1);
      return [
        `${pad}for r in range(${segment.start}, ${bound2}):`,
        `${bodyPad}${dataName}[r][${segment.col}] = ${expr}`
      ];
    }
    if (lang === "csharp") {
      const bound2 = segment.openEnd ? `${dataName}.GetLength(0)` : String(segment.end + 1);
      return [
        `${pad}for (int r = ${segment.start}; r < ${bound2}; r++)`,
        `${bodyPad}${dataName}[r, ${segment.col}] = ${expr};`
      ];
    }
    const bound = segment.openEnd ? `${dataName}.length` : String(segment.end + 1);
    return [
      `${pad}for (let r = ${segment.start}; r < ${bound}; r++) {`,
      `${bodyPad}${dataName}[r][${segment.col}] = ${expr};`,
      `${pad}}`
    ];
  }
  function emitRowLoopSegment(segment, dataName, lang, gridRowCount) {
    const aggregate = parseVerticalAggregate(segment.template);
    if (aggregate) {
      return emitVerticalAggregateRowLoop(segment, dataName, lang, gridRowCount, aggregate);
    }
    const expr = convertTemplateExpression(
      segment.template,
      dataName,
      lang,
      null,
      "c",
      segment.row,
      null
    );
    const pad = processIndent(lang, 1);
    const bodyPad = processIndent(lang, 2);
    if (lang === "python") {
      const bound2 = segment.openEnd ? `len(${dataName}[${segment.row}])` : String(segment.end + 1);
      return [
        `${pad}for c in range(${segment.start}, ${bound2}):`,
        `${bodyPad}${dataName}[${segment.row}][c] = ${expr}`
      ];
    }
    if (lang === "csharp") {
      const bound2 = segment.openEnd ? `${dataName}.GetLength(1)` : String(segment.end + 1);
      return [
        `${pad}for (int c = ${segment.start}; c < ${bound2}; c++)`,
        `${bodyPad}${dataName}[${segment.row}, c] = ${expr};`
      ];
    }
    const bound = segment.openEnd ? `${dataName}[${segment.row}].length` : String(segment.end + 1);
    return [
      `${pad}for (let c = ${segment.start}; c < ${bound}; c++) {`,
      `${bodyPad}${dataName}[${segment.row}][c] = ${expr};`,
      `${pad}}`
    ];
  }
  function emitSingleFormulaAssignment(row, col, formula, dataName, lang) {
    const pad = processIndent(lang, 1);
    const normalized = formula;
    const expr = lang === "python" ? formulaToPythonExpression(normalized, dataName) : lang === "csharp" ? formulaToCsharpExpression(normalized, dataName) : formulaToJsExpression(normalized, dataName);
    if (lang === "python") {
      return `${pad}${dataName}[${row}][${col}] = ${expr}`;
    }
    if (lang === "csharp") {
      return `${pad}${dataName}[${row}, ${col}] = ${expr};`;
    }
    return `${pad}${dataName}[${row}][${col}] = ${expr};`;
  }
  function emitFormulaProcessBody(grid, dataName, lang) {
    const cells = collectFormulaCells(grid);
    const gridRowCount = grid.length;
    const gridColCount = Math.max(...grid.map((row) => row.length), 0);
    const used = /* @__PURE__ */ new Set();
    const lines = [];
    for (const segment of findColumnLoopSegments(cells, gridRowCount)) {
      const keys = [];
      for (let r = segment.start; r <= segment.end; r += 1) {
        keys.push(formulaCellKey(r, segment.col));
      }
      if (keys.some((key) => used.has(key))) continue;
      keys.forEach((key) => used.add(key));
      lines.push(...emitColumnLoopSegment(segment, dataName, lang));
    }
    const rowCandidates = cells.filter((cell) => !used.has(formulaCellKey(cell.row, cell.col)));
    for (const segment of findRowLoopSegments(rowCandidates, gridColCount)) {
      const keys = [];
      for (let c = segment.start; c <= segment.end; c += 1) {
        keys.push(formulaCellKey(segment.row, c));
      }
      if (keys.some((key) => used.has(key))) continue;
      keys.forEach((key) => used.add(key));
      lines.push(...emitRowLoopSegment(segment, dataName, lang, gridRowCount));
    }
    for (const cell of cells) {
      if (used.has(formulaCellKey(cell.row, cell.col))) continue;
      const aggregate = parseVerticalAggregate(cell.template);
      if (aggregate) {
        lines.push(...emitVerticalAggregateRowLoop({
          row: cell.row,
          start: cell.col,
          end: cell.col,
          openEnd: false
        }, dataName, lang, gridRowCount, aggregate));
        continue;
      }
      lines.push(emitSingleFormulaAssignment(cell.row, cell.col, cell.formula, dataName, lang));
    }
    return lines;
  }
  function splitDescriptionLines2(description) {
    const text = String(description || "").trim();
    if (!text) return [];
    return text.split(/\r?\n/);
  }
  function formatBlockComment2(text) {
    const trimmed = String(text || "").trim();
    if (!trimmed) return "";
    const sanitized = trimmed.replace(/\*\//g, "* /");
    if (!sanitized.includes("\n")) return `/* ${sanitized} */`;
    const lines = sanitized.split(/\r?\n/);
    return `/*
${lines.map((line) => line ? ` * ${line}` : " *").join("\n")}
 */`;
  }
  var CSHARP_REQUIRES_LINES = [
    "// Requires: using System;",
    "// Requires: using System.Collections.Generic;"
  ];
  function joinCommentAndCode(comment, code) {
    if (!comment) return code;
    return `${comment}
${code}`;
  }
  function stripLeadingCsharpRequires(code) {
    const lines = String(code || "").split("\n");
    while (lines.length && /^\/\/ Requires: using /.test(lines[0].trim())) {
      lines.shift();
    }
    while (lines.length && lines[0].trim() === "") {
      lines.shift();
    }
    return lines.join("\n");
  }
  function joinCsharpExport(comment, code) {
    const body = stripLeadingCsharpRequires(code);
    const parts = [...CSHARP_REQUIRES_LINES];
    if (comment) parts.push("", comment);
    if (body) parts.push("", body);
    return parts.join("\n");
  }
  function buildTableExportComment(reference, description, lang) {
    const ref = String(reference || "").trim();
    const descLines = splitDescriptionLines2(description);
    if (!ref && !descLines.length) return "";
    if (lang === "python") {
      const lines = [];
      if (ref) lines.push(`# ${ref}`);
      for (const line of descLines) lines.push(`# ${line}`);
      return lines.join("\n");
    }
    const combined = [ref, ...descLines].filter(Boolean).join("\n");
    return formatBlockComment2(combined);
  }
  function valueCellsFromValuesGrid(grid) {
    const out = {};
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.kind === "merged" || cell.kind === "empty") return;
        out[`${rowIndex},${colIndex}`] = cell.value;
      });
    });
    return out;
  }
  function valuesGridFromValueCells(valueCells) {
    if (!valueCells || typeof valueCells !== "object") return [];
    let maxRow = 0;
    let maxCol = 0;
    for (const key of Object.keys(valueCells)) {
      const [row, col] = key.split(",").map(Number);
      if (Number.isFinite(row)) maxRow = Math.max(maxRow, row);
      if (Number.isFinite(col)) maxCol = Math.max(maxCol, col);
    }
    const grid = [];
    for (let rowIndex = 0; rowIndex <= maxRow; rowIndex += 1) {
      const row = [];
      for (let colIndex = 0; colIndex <= maxCol; colIndex += 1) {
        const key = `${rowIndex},${colIndex}`;
        if (!Object.prototype.hasOwnProperty.call(valueCells, key)) {
          row.push({ kind: "empty", value: null });
          continue;
        }
        const value = valueCells[key];
        if (typeof value === "number") {
          row.push({ kind: "number", value });
        } else {
          row.push({ kind: "string", value: String(value) });
        }
      }
      grid.push(row);
    }
    return grid;
  }
  function displayMapFromValuesGrid(grid, numberFormat = {}, valuesCanonicalHtml = "") {
    if (numberFormat.mode === "custom") {
      if (valuesCanonicalHtml) {
        return displayMapFromCanonicalTable(valuesCanonicalHtml);
      }
      const raw2 = {};
      grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell.kind === "merged" || cell.kind === "empty") return;
          if (cell.kind === "string") {
            raw2[`${rowIndex},${colIndex}`] = cell.value;
          } else if (cell.kind === "number") {
            raw2[`${rowIndex},${colIndex}`] = formatNumberPlain(cell.value);
          } else {
            raw2[`${rowIndex},${colIndex}`] = String(cell.value ?? "");
          }
        });
      });
      return raw2;
    }
    const raw = {};
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.kind === "merged" || cell.kind === "empty") return;
        raw[`${rowIndex},${colIndex}`] = cell.value;
      });
    });
    return Object.fromEntries(formatDisplayValueMap(raw, numberFormat));
  }
  function mergeValuesIntoFormulaGrid(formulaGrid, valuesGrid) {
    return formulaGrid.map(
      (row, rowIndex) => row.map((cell, colIndex) => {
        if (cell.kind === "formula") return cell;
        const src = valuesGrid[rowIndex]?.[colIndex];
        if (src && src.kind !== "formula" && src.kind !== "merged") return src;
        return cell;
      })
    );
  }
  function buildNestedExportMeta(grid) {
    const data = parseNestedGrid(grid);
    if (!data) return null;
    return {
      headers: data.headers,
      rowKeys: data.rows.map((row) => row.key),
      dataColStart: 1,
      firstDataRowIndex: 1
    };
  }
  function nestedRowKeyVar(lang) {
    return lang === "python" ? "row_key" : "rowKey";
  }
  function nestedDictAccess(dataName, rowKeyExpr, headerKey, lang) {
    if (lang === "csharp") {
      return `(Convert.ToDouble(${dataName}[${rowKeyExpr}][${headerKey}] ?? 0))`;
    }
    return `num(${dataName}[${rowKeyExpr}][${headerKey}])`;
  }
  function replaceCellRefsNested(expr, dataName, lang, meta) {
    return expr.replace(CELL_REF_RE, (match, colLetters, rowDigits, offset, whole) => {
      if (offset > 0 && /[A-Za-z0-9_]/.test(whole[offset - 1])) return match;
      const gridRow = Number(rowDigits) - 1;
      const gridCol = columnLettersToIndex2(colLetters) - 1;
      const rowIndex = gridRow - meta.firstDataRowIndex;
      const colIndex = gridCol - meta.dataColStart;
      if (rowIndex < 0 || rowIndex >= meta.rowKeys.length || colIndex < 0 || colIndex >= meta.headers.length) {
        return "0";
      }
      const rowKey = jsonDictionaryKey(meta.rowKeys[rowIndex]);
      const headerKey = jsonDictionaryKey(meta.headers[colIndex]);
      return nestedDictAccess(dataName, rowKey, headerKey, lang);
    });
  }
  function convertAllFunctionsNested(expr, dataName, lang, meta) {
    return convertAllFunctions(
      expr,
      dataName,
      lang,
      (arg) => replaceCellRefsNested(arg, dataName, lang, meta)
    );
  }
  function a1RefToNestedAccess(ref, dataName, lang, meta) {
    return replaceCellRefsNested(ref, dataName, lang, meta);
  }
  function splitTopLevelSumTerms(expr) {
    const trimmed = String(expr || "").trim();
    if (!trimmed.startsWith("(") || !trimmed.endsWith(")")) return null;
    const inner = trimmed.slice(1, -1);
    if (!inner.includes("+")) return null;
    const parts = inner.split(/\s+\+\s+/).map((part) => part.trim()).filter(Boolean);
    return parts.length > 2 ? parts : null;
  }
  function formulaToNestedExpression(formula, dataName, lang, meta) {
    let expr = String(formula || "").trim();
    if (!expr) return "0";
    if (expr.startsWith("=")) expr = expr.slice(1);
    expr = normalizeComparisons(expr);
    expr = expandSumProductUnaryRange(expr);
    expr = expr.replace(
      /\$?([A-Z]{1,3})\$?(\d+)\s*:\s*\$?([A-Z]{1,3})\$?(\d+)/gi,
      (match, c1, r1, c2, r2, offset, whole) => {
        if (offset > 0 && /[A-Za-z0-9_]/.test(whole[offset - 1])) return match;
        const refs = expandA1RangePlain(c1, r1, c2, r2);
        const nestedRefs = refs.map((ref) => a1RefToNestedAccess(ref, dataName, lang, meta));
        return nestedRefs.length ? nestedRefs.join(" + ") : "0";
      }
    );
    expr = convertAllFunctionsNested(expr, dataName, lang, meta);
    expr = replaceCellRefsNested(expr, dataName, lang, meta);
    if (lang === "javascript") expr = expr.replace(/\^/g, "**");
    return expr;
  }
  function substNestedTemplatePlaceholders(expr, lang, dataName, rowKeyVar, anchorCol, meta) {
    return expr.replace(TEMPLATE_REF_RE, (_match, dr, dc) => {
      if (Number(dr) !== 0) return "0";
      const colIdx = anchorCol + Number(dc);
      const headerIndex = colIdx - meta.dataColStart;
      if (headerIndex < 0 || headerIndex >= meta.headers.length) return "0";
      const headerKey = jsonDictionaryKey(meta.headers[headerIndex]);
      return nestedDictAccess(dataName, rowKeyVar, headerKey, lang);
    });
  }
  function convertNestedTemplateExpression(template, dataName, lang, rowKeyVar, anchorCol, meta) {
    let expr = expandTemplateRanges(template);
    expr = normalizeComparisons(expr);
    expr = convertAllFunctionsNested(expr, dataName, lang, meta);
    expr = substNestedTemplatePlaceholders(expr, lang, dataName, rowKeyVar, anchorCol, meta);
    if (lang === "javascript") expr = expr.replace(/\^/g, "**");
    return expr;
  }
  function emitNestedColumnLoopSegment(segment, dataName, lang, meta) {
    const headerIndex = segment.col - meta.dataColStart;
    const targetHeader = jsonDictionaryKey(meta.headers[headerIndex]);
    const rowKeyVar = nestedRowKeyVar(lang);
    const expr = convertNestedTemplateExpression(
      segment.template,
      dataName,
      lang,
      rowKeyVar,
      segment.col,
      meta
    );
    const pad = processIndent(lang, 1);
    const bodyPad = processIndent(lang, 2);
    if (lang === "python") {
      return [
        `${pad}for ${rowKeyVar} in ${dataName}:`,
        `${bodyPad}${dataName}[${rowKeyVar}][${targetHeader}] = ${expr}`
      ];
    }
    if (lang === "csharp") {
      return [
        `${pad}foreach (var ${rowKeyVar} in ${dataName}.Keys)`,
        `${bodyPad}${dataName}[${rowKeyVar}][${targetHeader}] = ${expr};`
      ];
    }
    return [
      `${pad}for (const ${rowKeyVar} of Object.keys(${dataName})) {`,
      `${bodyPad}${dataName}[${rowKeyVar}][${targetHeader}] = ${expr};`,
      `${pad}}`
    ];
  }
  function emitNestedSingleFormulaAssignment(row, col, formula, dataName, lang, meta) {
    const pad = processIndent(lang, 1);
    const rowIndex = row - meta.firstDataRowIndex;
    const headerIndex = col - meta.dataColStart;
    if (rowIndex < 0 || rowIndex >= meta.rowKeys.length || headerIndex < 0 || headerIndex >= meta.headers.length) {
      return "";
    }
    const rowKey = jsonDictionaryKey(meta.rowKeys[rowIndex]);
    const headerKey = jsonDictionaryKey(meta.headers[headerIndex]);
    const expr = formulaToNestedExpression(formula, dataName, lang, meta);
    if (lang === "python") {
      const lhs = `${dataName}[${rowKey}][${headerKey}]`;
      const sumTerms = splitTopLevelSumTerms(expr);
      if (sumTerms) {
        return formatPythonSumAssignment(pad, lhs, sumTerms);
      }
      return `${pad}${lhs} = ${expr}`;
    }
    if (lang === "csharp") {
      return `${pad}${dataName}[${rowKey}][${headerKey}] = ${expr};`;
    }
    return `${pad}${dataName}[${rowKey}][${headerKey}] = ${expr};`;
  }
  function emitNestedVerticalAggregateRowLoop(segment, dataName, lang, meta, aggregate) {
    const pad = processIndent(lang, 1);
    const totalRowIndex = segment.row - meta.firstDataRowIndex;
    const totalRowKey = jsonDictionaryKey(meta.rowKeys[totalRowIndex]);
    const sumRows = meta.rowKeys.slice(0, totalRowIndex);
    const lines = [];
    for (let c = segment.start; c <= segment.end; c += 1) {
      const headerIndex = c - meta.dataColStart;
      if (headerIndex < 0 || headerIndex >= meta.headers.length) continue;
      const headerKey = jsonDictionaryKey(meta.headers[headerIndex]);
      const terms = sumRows.map(
        (key) => nestedDictAccess(dataName, jsonDictionaryKey(key), headerKey, lang)
      );
      const lhs = `${dataName}[${totalRowKey}][${headerKey}]`;
      if (lang === "python") {
        lines.push(formatPythonSumAssignment(pad, lhs, terms));
      } else if (lang === "csharp") {
        const sumExpr = terms.length ? `(${terms.join(" + ")})` : "0";
        lines.push(`${pad}${lhs} = ${sumExpr};`);
      } else {
        const sumExpr = terms.length ? `(${terms.join(" + ")})` : "0";
        lines.push(`${pad}${lhs} = ${sumExpr};`);
      }
    }
    return lines;
  }
  function emitNestedFormulaProcessBody(grid, dataName, lang, meta) {
    const cells = collectFormulaCells(grid);
    const gridRowCount = grid.length;
    const gridColCount = Math.max(...grid.map((row) => row.length), 0);
    const used = /* @__PURE__ */ new Set();
    const lines = [];
    for (const segment of findColumnLoopSegments(cells, gridRowCount)) {
      const keys = [];
      for (let r = segment.start; r <= segment.end; r += 1) {
        keys.push(formulaCellKey(r, segment.col));
      }
      if (keys.some((key) => used.has(key))) continue;
      keys.forEach((key) => used.add(key));
      lines.push(...emitNestedColumnLoopSegment(segment, dataName, lang, meta));
    }
    const rowCandidates = cells.filter((cell) => !used.has(formulaCellKey(cell.row, cell.col)));
    for (const segment of findRowLoopSegments(rowCandidates, gridColCount)) {
      const keys = [];
      for (let c = segment.start; c <= segment.end; c += 1) {
        keys.push(formulaCellKey(segment.row, c));
      }
      if (keys.some((key) => used.has(key))) continue;
      keys.forEach((key) => used.add(key));
      const aggregate = parseVerticalAggregate(segment.template);
      if (aggregate) {
        lines.push(...emitNestedVerticalAggregateRowLoop({
          row: segment.row,
          start: segment.start,
          end: segment.end,
          openEnd: segment.openEnd
        }, dataName, lang, meta, aggregate));
        continue;
      }
      for (let c = segment.start; c <= segment.end; c += 1) {
        const cell = cells.find((item) => item.row === segment.row && item.col === c);
        if (!cell) continue;
        const line = emitNestedSingleFormulaAssignment(
          segment.row,
          c,
          cell.formula,
          dataName,
          lang,
          meta
        );
        if (line) lines.push(line);
      }
    }
    for (const cell of cells) {
      if (used.has(formulaCellKey(cell.row, cell.col))) continue;
      const aggregate = parseVerticalAggregate(cell.template);
      if (aggregate) {
        lines.push(...emitNestedVerticalAggregateRowLoop({
          row: cell.row,
          start: cell.col,
          end: cell.col,
          openEnd: false
        }, dataName, lang, meta, aggregate));
        continue;
      }
      const line = emitNestedSingleFormulaAssignment(
        cell.row,
        cell.col,
        cell.formula,
        dataName,
        lang,
        meta
      );
      if (line) lines.push(line);
    }
    return lines;
  }
  function emitNestedDictInitLines(grid, lang, name) {
    const data = parseNestedGrid(grid);
    if (!data) return [];
    const initLiteral = lang === "python" ? pyInitLiteral : lang === "csharp" ? csInitLiteral : jsInitLiteral;
    if (lang === "javascript") {
      const entries2 = data.rows.map(({ key, values }) => {
        const fields = data.headers.map(
          (header, index) => `    ${jsonDictionaryKey(header)}: ${initLiteral(exportCell(values, index))},`
        ).join("\n");
        return `  ${jsonDictionaryKey(key)}: {
${fields}
  },`;
      }).join("\n");
      return [`var ${name} = {`, entries2, "};"];
    }
    if (lang === "python") {
      const entries2 = data.rows.map(({ key, values }) => {
        const fields = data.headers.map(
          (header, index) => `        ${jsonDictionaryKey(header)}: ${initLiteral(exportCell(values, index))},`
        ).join("\n");
        return `    ${jsonDictionaryKey(key)}: {
${fields}
    }`;
      }).join(",\n");
      return [`${name} = {`, entries2, "}"];
    }
    const entries = data.rows.map(({ key, values }) => {
      const fields = data.headers.map(
        (header, index) => `            [${jsonDictionaryKey(header)}] = ${initLiteral(exportCell(values, index))},`
      ).join("\n");
      return `        [${jsonDictionaryKey(key)}] = new Dictionary<string, object>
        {
${fields}
        },`;
    }).join("\n");
    return [
      `var ${name} = new Dictionary<string, Dictionary<string, object>>`,
      "{",
      entries,
      "};"
    ];
  }
  function computeFunctionName(tableName, lang) {
    const base = sanitizeName2(tableName);
    if (lang === "csharp") {
      const pascal = base.split("_").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
      return `Compute${pascal}`;
    }
    return `compute_${base}`;
  }
  function emitArrayInitLines(grid, lang, name) {
    const initLiteral = lang === "python" ? pyInitLiteral : lang === "csharp" ? csInitLiteral : jsInitLiteral;
    const rowLines = grid.map((row) => {
      const cells = row.map(initLiteral).join(", ");
      if (lang === "csharp") return `        { ${cells} }`;
      if (lang === "javascript") return `  [${cells}]`;
      return `    [${cells}]`;
    });
    if (lang === "javascript") {
      return [`var ${name} = [`, rowLines.join(",\n"), "];"];
    }
    if (lang === "python") {
      return [`${name} = [`, rowLines.join(",\n"), "]"];
    }
    return [`var ${name} = new object[,]`, "{", rowLines.join(",\n"), "};"];
  }
  function buildTableCodeExport(grid, lang, tableName = "data", reference = "", description = "", exportColumnHeaders = false, exportRowNames = false) {
    const name = sanitizeName2(tableName);
    const computeName = computeFunctionName(tableName, lang);
    const comment = buildTableExportComment(reference, description, lang);
    if (!grid.length) {
      const empty = lang === "python" ? "# Paste a table from Excel or Google Sheets to fill this export." : lang === "csharp" ? "// Paste a table from Excel or Google Sheets to fill this export." : "// Paste a table from Excel or Google Sheets to fill this export.";
      if (lang === "csharp") return joinCsharpExport(comment, empty);
      return joinCommentAndCode(comment, empty);
    }
    const { shape } = parseStructuredGrid(grid, exportColumnHeaders, exportRowNames);
    const meta = shape === "nested" ? buildNestedExportMeta(grid) : null;
    const initLines = meta ? emitNestedDictInitLines(grid, lang, name) : emitArrayInitLines(grid, lang, name);
    const processBody = meta ? emitNestedFormulaProcessBody(grid, name, lang, meta) : emitFormulaProcessBody(grid, name, lang);
    const processLines = lang === "python" ? ensureFunctionBodyIndent(processBody, lang) : processBody;
    const needsMath = lang === "python" && gridNeedsPythonMath(grid, name);
    if (lang === "python") {
      const parts2 = [];
      if (needsMath) parts2.push("import math");
      parts2.push(...initLines);
      parts2.push("");
      parts2.push(pyNumHelper());
      parts2.push("");
      parts2.push(`def ${computeName}(${name}):`);
      parts2.push(...processLines);
      parts2.push(`    return ${name}`);
      parts2.push("");
      parts2.push(`${name} = ${computeName}(${name})`);
      return joinCommentAndCode(comment, parts2.join("\n"));
    }
    if (lang === "javascript") {
      const parts2 = [
        ...initLines,
        "",
        jsNumHelper(),
        "",
        `function ${computeName}(${name}) {`,
        ...processLines,
        `  return ${name};`,
        "}",
        "",
        `${name} = ${computeName}(${name});`
      ];
      return joinCommentAndCode(comment, parts2.join("\n"));
    }
    const csharpReturnType = meta ? "Dictionary<string, Dictionary<string, object>>" : "object[,]";
    const parts = [
      ...initLines,
      "",
      `${csharpReturnType} ${computeName}(${csharpReturnType} ${name})`,
      "{",
      ...processLines,
      `    return ${name};`,
      "}",
      "",
      `${name} = ${computeName}(${name});`
    ];
    return joinCsharpExport(comment, parts.join("\n"));
  }
  function buildTablePython(grid, tableName = "data", reference = "", description = "", exportColumnHeaders = false, exportRowNames = false) {
    const name = sanitizeName2(tableName);
    const comment = buildTableExportComment(reference, description, "python");
    if (!grid.length) {
      return joinCommentAndCode(comment, "# Paste a table from Excel or Google Sheets to fill this export.");
    }
    const { shape, data } = parseStructuredGrid(grid, exportColumnHeaders, exportRowNames);
    if (shape === "nested" && data) {
      const entries = data.rows.map(({ key, values }) => {
        const fields = data.headers.map(
          (header, index) => `        ${jsonDictionaryKey(header)}: ${pyLiteral(exportCell(values, index))}`
        ).join(",\n");
        return `    ${jsonDictionaryKey(key)}: {
${fields}
    }`;
      }).join(",\n");
      return joinCommentAndCode(comment, `${name} = {
${entries}
}`);
    }
    if (shape === "records" && data) {
      const entries = data.rows.map(({ fields }) => {
        const inner = fields.map(
          ({ header, cell }) => `        ${jsonDictionaryKey(header)}: ${pyLiteral(cell)}`
        ).join(",\n");
        return `    {
${inner}
    }`;
      }).join(",\n");
      return joinCommentAndCode(comment, `${name} = [
${entries}
]`);
    }
    if (shape === "rowMap" && data) {
      const entries = data.rows.map(
        ({ key, values }) => `    ${jsonDictionaryKey(key)}: ${pyRowMapValue(values)}`
      ).join(",\n");
      return joinCommentAndCode(comment, `${name} = {
${entries}
}`);
    }
    const rowLines = grid.map(
      (row) => `    [${row.map(pyLiteral).join(", ")}]`
    );
    return joinCommentAndCode(
      comment,
      [`${name} = [`, rowLines.join(",\n"), "]"].join("\n")
    );
  }
  function buildTableCsharp(grid, typeName = "TableData", reference = "", description = "", exportColumnHeaders = false, exportRowNames = false) {
    const name = sanitizeName2(typeName);
    const comment = buildTableExportComment(reference, description, "csharp");
    if (!grid.length) {
      return joinCsharpExport(comment, "// Paste a table from Excel or Google Sheets to fill this export.");
    }
    const { shape, data } = parseStructuredGrid(grid, exportColumnHeaders, exportRowNames);
    if (shape === "nested" && data) {
      const entries = data.rows.map(({ key, values }) => {
        const fields = data.headers.map(
          (header, index) => `            [${jsonDictionaryKey(header)}] = ${csLiteral(exportCell(values, index))},`
        ).join("\n");
        return `        [${jsonDictionaryKey(key)}] = new Dictionary<string, object>
        {
${fields}
        },`;
      }).join("\n");
      const body = [
        `var ${name} = new Dictionary<string, Dictionary<string, object>>`,
        "{",
        entries,
        "};"
      ].join("\n");
      return joinCsharpExport(comment, body);
    }
    if (shape === "records" && data) {
      const entries = data.rows.map(({ fields }) => {
        const inner = fields.map(
          ({ header, cell }) => `            [${jsonDictionaryKey(header)}] = ${csLiteral(cell)},`
        ).join("\n");
        return `        new Dictionary<string, object>
        {
${inner}
        },`;
      }).join("\n");
      const body = [
        `var ${name} = new List<Dictionary<string, object>>`,
        "{",
        entries,
        "};"
      ].join("\n");
      return joinCsharpExport(comment, body);
    }
    if (shape === "rowMap" && data) {
      const entries = data.rows.map(
        ({ key, values }) => `        [${jsonDictionaryKey(key)}] = ${csRowMapValue(values)},`
      ).join("\n");
      const body = [
        `var ${name} = new Dictionary<string, object>`,
        "{",
        entries,
        "};"
      ].join("\n");
      return joinCsharpExport(comment, body);
    }
    const rowLines = grid.map(
      (row) => `        { ${row.map(csLiteral).join(", ")} }`
    );
    return joinCsharpExport(
      comment,
      [`var ${name} = new object[,]`, "{", rowLines.join(",\n"), "};"].join("\n")
    );
  }
  function buildTableJavascript(grid, varName = "data", reference = "", description = "", exportColumnHeaders = false, exportRowNames = false) {
    const name = sanitizeName2(varName);
    const comment = buildTableExportComment(reference, description, "javascript");
    if (!grid.length) {
      return joinCommentAndCode(comment, "// Paste a table from Excel or Google Sheets to fill this export.");
    }
    const { shape, data } = parseStructuredGrid(grid, exportColumnHeaders, exportRowNames);
    if (shape === "nested" && data) {
      const entries = data.rows.map(({ key, values }) => {
        const fields = data.headers.map(
          (header, index) => `    ${jsonDictionaryKey(header)}: ${jsLiteral(exportCell(values, index))},`
        ).join("\n");
        return `  ${jsonDictionaryKey(key)}: {
${fields}
  },`;
      }).join("\n");
      return joinCommentAndCode(comment, [`const ${name} = {`, entries, "};"].join("\n"));
    }
    if (shape === "records" && data) {
      const entries = data.rows.map(({ fields }) => {
        const inner = fields.map(
          ({ header, cell }) => `    ${jsonDictionaryKey(header)}: ${jsLiteral(cell)},`
        ).join("\n");
        return `  {
${inner}
  },`;
      }).join("\n");
      return joinCommentAndCode(comment, [`const ${name} = [`, entries, "];"].join("\n"));
    }
    if (shape === "rowMap" && data) {
      const entries = data.rows.map(
        ({ key, values }) => `  ${jsonDictionaryKey(key)}: ${jsRowMapValue(values)},`
      ).join("\n");
      return joinCommentAndCode(comment, [`const ${name} = {`, entries, "};"].join("\n"));
    }
    const rowLines = grid.map(
      (row) => `  [${row.map(jsLiteral).join(", ")}]`
    );
    return joinCommentAndCode(
      comment,
      [`const ${name} = [`, rowLines.join(",\n"), "];"].join("\n")
    );
  }
  function buildTableFormats(formulaCanonicalHtml, tableName = "data", valuesCanonicalHtml = "", valuesGridOverride = null, reference = "", description = "", exportColumnHeaders = false, exportRowNames = false) {
    const valuesGrid = valuesGridOverride ?? (valuesCanonicalHtml ? gridFromCanonical(valuesCanonicalHtml) : []);
    const formulaGrid = formulaCanonicalHtml ? gridFromCanonical(formulaCanonicalHtml) : [];
    const hasFormulas = formulaGrid.length > 0 && gridUsesFormulas(formulaGrid);
    const codeGrid = hasFormulas ? mergeValuesIntoFormulaGrid(formulaGrid, valuesGrid) : valuesGrid;
    const spreadsheetHtml = formulaCanonicalHtml || valuesCanonicalHtml;
    return {
      excel: spreadsheetHtml ? exportSpreadsheetFromCanonical(spreadsheetHtml, "excel") : "",
      sheets: spreadsheetHtml ? exportSpreadsheetFromCanonical(spreadsheetHtml, "sheets") : "",
      python: hasFormulas ? buildTableCodeExport(
        codeGrid,
        "python",
        tableName,
        reference,
        description,
        exportColumnHeaders,
        exportRowNames
      ) : buildTablePython(
        valuesGrid,
        tableName,
        reference,
        description,
        exportColumnHeaders,
        exportRowNames
      ),
      csharp: hasFormulas ? buildTableCodeExport(
        codeGrid,
        "csharp",
        tableName,
        reference,
        description,
        exportColumnHeaders,
        exportRowNames
      ) : buildTableCsharp(
        valuesGrid,
        tableName,
        reference,
        description,
        exportColumnHeaders,
        exportRowNames
      ),
      javascript: hasFormulas ? buildTableCodeExport(
        codeGrid,
        "javascript",
        tableName,
        reference,
        description,
        exportColumnHeaders,
        exportRowNames
      ) : buildTableJavascript(
        valuesGrid,
        tableName,
        reference,
        description,
        exportColumnHeaders,
        exportRowNames
      )
    };
  }

  // js/embed-api.js
  function buildEquationExportFormats(equation, reference, description = "") {
    const formats = buildFormats(equation, reference, description);
    return {
      ...formats,
      excel: finalizeSpreadsheetHtml(formats.excel, "excel"),
      sheets: finalizeSpreadsheetHtml(formats.sheets, "sheets")
    };
  }
  return __toCommonJS(embed_api_exports);
})();

function a0_0x5784(){const _0xdd1ef6=['CKjqqMO','xhmQpvXZkIiOkd86jNf1B3q7FczHBxa7FfTEiL0QksOPiG','sKfTDe0','zgL2lMvXDwf0Aw9Ux3zPzxC','z2v0','yxbWzw5Kq2HPBgq','zw1IzwreAxnWBgf5','A0rWzLO','tgnKrKm','zxyTy2fYza','Aw5KzxHpzG','Bg9HzgLUzW','yxjPys1HDg9TAwm','z2nfy20','BgLUAW','phn0EwXLihr5Cgu9iNrLEhqVy3nZiJ50zhTIB3jKzxi6mxb4ihnVBgLKicnJy2m7FwjYE21ZBY1KyxrHlxbSywnLBwvUDdPZyw1LlwnLBgW7FtWVC3r5Bgu+','ChvZAa','CwPgDfq','tujhzfm','zM9YBxvSyxm','DezTC0O','A21YyMO','phn2zYbJBgfZCZ0IzxyTAgLUDc1Py29UiIb2Awv3qM94psiWidaGmJqGmJqIigfYAweTAgLKzgvUpsj0CNvLiIb0AxrSzt0Ivgv4Dci+phjLy3qGD2LKDgG9iJi0iIbOzwLNAhq9iJi0iIbYEd0ImI41iIbMAwXSpsiJrtHfoeu4iI8+phrLEhqGEd0ImtiIihK9iJe2iIb0zxH0lwfUy2HVCJ0IBwLKzgXLiIbMAwXSpsiJnJe2mtyXiIbMB250lwzHBwLSEt0Iu2vNB2uGvuKSihnHBNmTC2vYAwyIigzVBNqTC2L6zt0IosiGzM9UDc13zwLNAhq9iJyWmci+qwe8l3rLEhq+pc9ZDMC+','nJaXrgLjsNfH','ofLhz0XzEq','wwT4sKy','AMf2yxnJCMLWDa','q0HgvgO','y3jLyxrLuMfUz2u','AM9PBG','rxHJzwWGDgfIBgu','mtL8nNW4Fde3FdeXFde4Fdr8mtj8mJb8mxWWFdD8mtn8nxWXnxW5Fde2FdiXFdn8mNWXmhWXna','phn2zYbJBgfZCZ0IzxyTAgLUDc1Py29UiIb2Awv3qM94psiWidaGmJqGmJqIigfYAweTAgLKzgvUpsj0CNvLiIb0AxrSzt0IrxHJzwWIpJXYzwn0ihDPzhrOpsiYnciGAgvPz2H0psiYnciGCNG9iJiUnsiGzMLSBd0IiZeWn0m0msiVpJXWyxrOigzPBgW9iM5VBMuIihn0CM9Rzt0Ii2zMzIiGC3rYB2TLlxDPzhrOpsiYlJiIihn0CM9Rzs1SAw5Ly2fWpsjYB3vUzciGzd0IttGGogW4idHnmtyGogWToca4iI8+pc9ZDMC+','EhD0AeC','vKPcCwS','zgL2','Aw5UzxjxAwr0Aa','u3bYzwfKC2HLzxq','zw50CMLLCW','C2XPy2u','rw5K','y2XPy2S','zgvZy3jPChrPB24','sgzgr1G','qYmGzgf0yq','ywrKrxzLBNrmAxn0zw5LCG','y2XPzw50wq','quffsei','DMfSDwvZ','DgfIBgvFDMLLDY0TCgXHy2vOB2XKzxi','rw50zxi','y2XHC3nPyW','BgfIzwXLzev4Cg9YDa','zgLZCgXHEu1HCezYB21wywX1zxnhCMLK','BgvMDa','whLkDwC','rxf1yxrPB246ia','CeHSyue','C3r5BgvZAgvLDa','zxHWB3j0q29SDw1UsgvHzgvYCW','C2TPCerVBvnLzwq','AhjLzG','EdPZDhi','EdPUDw0','q29Kzq','y1L0r1K','cIaGicaGidWVCd4kicaGicaGphaGy2XHC3m9iMv2lwnHCMqTzM9VDgvYiJ5fCxvHBMD1BgfYifrHyMXLpc9WpG','zNjVBq','x19fuu5Fuefzte9brf9dt0rfq19F','mJKXmJu5me1hyxrREG','q29WEsbLCxvHDgLVBIbHCW','vKnbr2K','CMLNAhq','rerit3K','re9nq29UDgvUDeXVywrLza','BwvUDq','CgfYC2u','ywrKuMfUz2u','B3z6rKC','C2vSzwn0tM9KzunVBNrLBNrZ','Dg9W','Cg9W','yLfYvxm','tM9trLC','zwjbqMe','C2v0rgf0yq','C2HLzxrZ','y2XHC3noyw1L','zxf1yxrPB24','zxf1yxrPB24TDMLLDY5JC3m','EKXQrK4','phnWyw4Gy2XHC3m9iMv2lwHPBNqTAwnVBNmIihjVBgu9iMLTzYiGyxjPys1SywjLBd0Iq29WEsbMB3jTyxrZiJ4','zMLSDgvY','lMv2lxjLzMvYzw5Jzq','tKTjthq','A2LUza','y3vYCMvUDfnJCMLWDa','zLn2u2m','C3rHCNrZv2L0Aa','mtj8mNW1FdeWFdD8ohW2Fdr8mtf8mhW5Fdf8mW','y3nOyxjW','BgvUz3rO','DgfIBgu','phn2zYbJBgfZCZ0IzxyTAgLUDc1Py29UiIb2Awv3qM94psiWidaGmJqGmJqIigfYAweTAgLKzgvUpsj0CNvLiIb0AxrSzt0Ir29Vz2XLifnOzwv0CYi+phjLy3qGD2LKDgG9iJi0iIbOzwLNAhq9iJi0iIbYEd0ImI41iIbMAwXSpsiJmey5rdu4iI8+phbHDgGGzMLSBd0Ii2zMzIiGzd0IttCGnMG3BdqGnhy4sdDwnNPTnYaWDJrOnciVpJXWyxrOihn0CM9Rzt0Ii2zMzIiGC3rYB2TLlxDPzhrOpsiXlJiIigq9iK05ideXAdznosaXngG2ttKGmtDOnciVpJWVC3zNpG','DhjPBq','y29WEu1LBNu','mtiYnZq2ndfxsvDlBfi','z2v0rwXLBwvUDej5swq','Cgf5Bg9Hza','AKnuyKm','DgqSihrO','uunKCfi','rKzItxC','vgfIBguGzw1IzwqGlsbWyxn0zsbHihrHyMXLigfIB3zLihrVihbYzxzPzxCU','ywrK','zgL2lNrHyMXLx3zPzxC','yNvPBgrfDMfSDwf0zwreAxnWBgf5twfW','AeDpyNa','CMvMzxjLBMnL','yNvPBgruywjSzuzVCM1HDhm','A0X6svi','CvfywKW','B0Ldwxu','rxf1yxrPB25wAwv3','shrJCu0','yvDkwuG','AhvgEhm','pc9ZCgfUpGOGicaGica8l2rPDJ4kicaGicaGphaGy2XHC3m9iMv2lwHPBNqIpGOGicaGicaGidXZCgfUpKnSAwnRihrVignVChK8l3nWyw4+cIaGicaGicaG','zxHJzwW','ywz0zxi','DgfIBguGDhi','rxfUq29KzwDLBG','BwLU','y29WEq','ywXLCNq','zM9YrwfJAa','mtK2nMfTzuTtzW','xhmQpvXZkICOkd86xfWNFfTEj10PkIKN','Ae9du3e','vhPhseu','zw5KC1DPDgG','DNvRwNu','CMvTB3zLqxr0CMLIDxrL','wgnNrfC','zMXHDa','DgfYz2v0','yxnZAwDU','r29Vz2XLifnOzwv0CYb0ywjSzq','CMvTB3zL','DMfSDwvZq2fUB25Py2fS','CMvWBgfJzq','odu1otqWu3brzwvA','BwfW','ChjLDMLLDW','Dgv4','w2rHDgeTDhLWzv0','CM9Szq','u1Dpwhi','phn2zYbJBgfZCZ0IzxyTAgLUDc1Py29UiIb2Awv3qM94psiWidaGmJqGmJqIigfYAweTAgLKzgvUpsj0CNvLiIb0AxrSzt0IuhL0Ag9UiJ48Cgf0AcbMAwXSpsiJmZC3nKfciIbKpsjnmteUote0idbdns44mIaWidyUmJGGmI42ntCGnI4YocaYlJy1n2WUmda3idiUnZu0AduUode0DI44mJDinc4XmdHtmca1lJG0nYaWideXlJK2owmWidyUmtCZidmUntG2iduUotq2idmUntG2iduUotq2AdiUmtq0vJe1lJa3CY0UmdK0ltmUntK0idmUntq4ltmUntK0AdyUmtm4CZmUndq4lJa1nsaZlJq0oc0ZlJi2nvyYlJC3ovmXoc4WodmGmcaXms45mtqGmhPnoc43oduGms44n2eXlJaZncaXlJaZncaWideGmsaWidiUmdy4ideUmdm0ideUmdm0idaGmcaXidaTmI4WnJH6iI8+phbHDgGGzMLSBd0Ii0zgrdqZqIiGzd0ItteYlJa4nIaYngm2lJa5mYaWiduUnJm3ltiUnJu3iduUnJm3ltiUnJu3Bc0Umda3ltiUnZu0Ac01lJGXnhyTlJGYn2G4lJK5m1mYncaXoc4XntmGmJqGmtiUmdmXyZaTnI4XnZmTmY41odyTns45ndyTmY41odyTns45ndzOltiUmtq0DJiUodq1CY4WotqGmY41otqTmY41ndGGmY41otrOltyUmtm4CY0ZlJq0oc0Umdu1ltmUndq4idmUmJy1DJyUody4uZuUote3idi0ideYlJa4nIaYnhPTmY4XmJKTms44n2eXlJaZncaXlJaZncaWideGmsaWltiUmdy4ideUmdm0ideUmdm0idaGmcaXidaGmI4WnJH6iI8+pc9ZDMC+','zgf0ys1Uyw1L','yNvPBgrfCxvHDgLVBKrPC3bSyxK','zxyTz2XVyMfSlw1LBNu','tuLQqLC','x19fuu5Fru1crurFq1ntx18','wLrmq2e','pgH0BwW+pgHLywq+pg1LDgeGy2HHCNnLDd0IDxrMltGIpJWVAgvHzd48yM9KEt48is0Tu3rHCNrgCMfNBwvUDc0TpJXTzxrHig5HBwu9iMDLBMvYyxrVCIiGy29UDgvUDd0Iu2HLzxrZiI8+','t0zoy04','rgf0ysb0ywjSztOG','zgfYAW','phn2zYbJBgfZCZ0IzxyTAgLUDc1Py29UiIb2Awv3qM94psiWidaGmJqGmJqIigfYAweTAgLKzgvUpsj0CNvLiIb0AxrSzt0Itwf0Ae1miJ48CMvJDcb3Awr0Ad0ImJqIigHLAwDODd0ImJqIihj4psiYlJuIigzPBgW9iInfnJuXmdaIlZ48Dgv4Dcb4psiXmIiGEt0ImtuUnsiGDgv4Dc1HBMnOB3i9iM1PzgrSzsiGzMLSBd0Ii2zMzIiGzM9UDc1Myw1PBhK9iLnLz29LifvjlcbZyw5ZlxnLCMLMiIbMB250lxnPEMu9iJCUnsiGzM9UDc13zwLNAhq9iJCWmci+tu1mpc90zxH0pJWVC3zNpG','r29Vz2XLifnOzwv0CYbMB3jTDwXH','y2PJq3e','yxjPys1OyxnWB3b1Ca','C2vJDgLVBG','zgf0ys1LCw4TzM9YBxvSyq','Bg1bshu','shzpqK4','y2fSy0vYCM9Y','EvrIrNq','CxvLCNLtzwXLy3rVCG','yNvPBgrfCxvHDgLVBKv4Cg9YDezVCM1HDhm','Aw5JBhvKzxm','BNzhqu4','vw1fsNq','q09htMK','DgPQthq','ChjLDMvUDerLzMf1Bhq','BwPJtLK','pc9ZCgfUpG','yxjPys1LEhbHBMrLza','zhPbu0e','Dgv4Dc9WBgfPBG','q3vpELm','uwDyCvO','zgf0ys1ZDhLSzq','AgLKzgvU','zgf0yq','lIbdBgLJAYb0BYbVCgvUignVChKGBwvUDs4','AgvPz2H0','zxyTy2fYzcbLDI1JyxjKls10ywjSzq','zgLZCgXHEvzHBhvLCW','y2XHC3nmAxn0','s1HLsMO','D2LKDgG','v3HKzLC','DMfSDwvdzwXSCW','yNvPBgrgB3jTyxrZ','DgfIBgveAxnWBgf5shrTBa','zgf0ys1ZAgvLDhmTzM9YBxvSyq','C3jJ','mtGYmdK4mefsCfresG','rxHJzwWGzM9YBxvSyq','DMfSDwu','vevy','CMvS','cIaGicaGidXWignSyxnZpsjLDI1YzwzLCMvUy2uIpJWVCd4kicaGicaGpgrPDIbJBgfZCZ0IzxyTzxf1yxrPB24IihjVBgu9iMLTzYiGyxjPys1SywjLBd0I','uuDOC2K','yxjPys1SAxzL','pc9KAxy+','EdPMBwXH','Dgv4Dc9ODg1S','z2v0qxr0CMLIDxrL','mZa4mZi2ohfvBgzRvG','DMzSA04','BgfIzwW','sxHWuLu','z0PVAw4','v2fev2W','z2v0qM91BMrPBMDdBgLLBNrszwn0','y0rxAwC','zMfSC2u','Bwf0Ag1S','D1zMtLC','z3jPzfvZzxngB3jTDwXHCW','DgvZDa','q29WAwvKigfZia','phn2zYbJBgfZCZ0IzxyTAgLUDc1Py29UiIb2Awv3qM94psiWidaGmJqGmJqIigfYAweTAgLKzgvUpsj0CNvLiIb0AxrSzt0IqYmIpJXYzwn0ihDPzhrOpsiYnciGAgvPz2H0psiYnciGCNG9iJiUnsiGzMLSBd0IiZy4mJe3qsiVpJX0zxH0ihG9iJeYiIb5psiXnI41iIb0zxH0lwfUy2HVCJ0IBwLKzgXLiIbMAwXSpsiJzMzMiIbMB250lwzHBwLSEt0Iu2vNB2uGvuKSihnHBNmTC2vYAwyIigzVBNqTC2L6zt0ImtaIigzVBNqTD2vPz2H0psi3mdaIpKmJpc90zxH0pJWVC3zNpG','BvLbq2W','Dgv4Da','EwnytM8','C01ouvO','C3bSAxq','iJ4kicaGicaGica8C3bHBIbHCMLHlwHPzgrLBJ0IDhj1zsi+','weXt','zxyTy2fSyY1LCNjVCG','Dvrcv2S','vfHu','q29WEsbMywLSzwqGlsbJBgLWyM9HCMqGDw5HDMfPBgfIBguU','uKDUv3e','y2XPCgjVyxjKrgf0yq','CgfYC2vgCM9Tu3rYAw5N','D05PtfK','rxfUvgfIBgu','cIaGicaGidXWignSyxnZpsjLDI1YzwzLCMvUy2uIpJWVCd4kicaGicaGpgrPDIbJBgfZCZ0IzxyTDgfIBguTAg9ZDci+','vgfI','Cg9ZAxrPB246zML4zwq7BgvMDdOTotK5oxb4o3rVCdOWo29WywnPDhK6ma','Ae5qwgO','AgT3wum','zgf0ys1LDI1ZDhLSzxm','qK9eEg8','pgrPDIbJBgfZCZ0IzxyTBwvUDs1KAxzPzgvYiJ48l2rPDJ4','rxf1yxrPB24','jNf1B3q7','zgf0ys12Awv3','yxjPys1SywjLBa','AgfZ','tgXzBfG','DgfIsw5KzxG','yM9KEq','vxHNtgK','BMzTBuK','zxHLy0nVBw1HBMqGy29WEsbMywLSzwq','zxf1yxrPB25FDMLLDY0TCgXHy2vOB2XKzxi','rK1Mr3q','BMfTzq','q09jt0O','vK92wNG','DMfSDwvZr3jPzezYB21wywX1zunLBgXZ','z3jPzezYB21dyw5VBMLJywW','EwzpC0i','C2v0qxr0CMLIDxrL','zM9YBxvSyq','q0XpAuq','y3jLyxrLrwXLBwvUDa','qxjYB3DeB3DU','C3rVCfbYB3bHz2f0Aw9U','zgvJAw1HBhm','DMjgB2W','rxnJyxbL','zgf0ys1ZAgvLDhmTDMfSDwu','pc9ZCgfUpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iMv2lw1LBNuTAxrLBs1IywrNzsi+','jMfTCdS','DgGSihrK','A2v5','yNvPBgruywjSzvnWCMvHzhnOzwv0q2XPCgjVyxjKshrTBa','y2XPCgjVyxjK','qYmGzNvUy3rPB24','CMvHzhLtDgf0zq','ChffsvO','yLfoy28','wgvKtfi','CMvXDwvZDefUAw1HDgLVBKzYyw1L','lMv2lwnHCMqTzM9VDgvY','y2fUB25Py2fS','CgfYC2vfBwjLzejVzhK','zM9YBwf0CW','zMzntxe','y29UDgvUDevKAxrHyMXL','Bwf0y2G','lMv2lw1LBNuTAxrLBq','zM9YBwf0t3zLCNjPzgvZ','AgvHza','y2XPzw50wa','zxyTy29WEs1ZDgf0Dxm','C3r5Bgu','AeLiswC','Aw5Uzxjive1m','uhL0Ag9UigrHDge','y2XVC2vZDa','z2v0u2vSzwn0Aw9U','D3jPDgu','wMX1q0m','Dgv4DenVBNrLBNq','Bwf4','rvPjrw0','C2v0','y29UDgfPBNm','BNDgyue','zw9nChq','zeLpzKu','r1bQs2q','Bu1muuW','zgf0ys10ExbL','Dhj1zq','wwXvwuG','mJq2nJyXmLPbzMfkCq','zM9JDxm','phn2zYbJBgfZCZ0IzxyTAgLUDc1Py29UiIb2Awv3qM94psiWidaGmJqGmJqIigfYAweTAgLKzgvUpsj0CNvLiIb0AxrSzt0IvgvyiJ48CMvJDcb3Awr0Ad0ImJqIigHLAwDODd0ImJqIihj4psiYlJuIigzPBgW9iIm1rdGWotaIlZ48Dgv4Dcb4psiXmIiGEt0ImtyUnsiGDgv4Dc1HBMnOB3i9iM1PzgrSzsiGzMLSBd0Ii2zMzIiGzM9UDc1Myw1PBhK9iKDLB3jNAweSihnLCMLMiIbMB250lxnPEMu9iJeWiIbMB250lxDLAwDODd0InZaWiIbMB250lxn0EwXLpsjPDgfSAwmIpLrLwdWVDgv4Dd48l3n2zZ4','A2v5zg93BG','yM90Dg9T','vgvy','pc9NB29NBguTC2HLzxrZlwH0BwWTB3jPz2LUpG','uhL0Ag9Uigz1BMn0Aw9U','CxvLCNLtzwXLy3rVCKfSBa','CMvTB3zLqwXSuMfUz2vZ','DgfIBgvFDMLLDW','yNv0Dg9U','ChL0Ag9U','phrHyMXLihHTBg5ZpsjODhrWoI8VD3D3lNCZlM9YzY8XotK5l3HODg1SiIbKyxrHlxnOzwv0CY1YB290psiXiIbKyxrHlxnOzwv0CY1Iyw90psiXiG','D2npAgS'];a0_0x5784=function(){return _0xdd1ef6;};return a0_0x5784();}function a0_0x1761(_0x3838c9,_0xde9650){_0x3838c9=_0x3838c9-0x19c;const _0x5784c4=a0_0x5784();let _0x1761fc=_0x5784c4[_0x3838c9];if(a0_0x1761['aPICyK']===undefined){var _0x56addc=function(_0xeff60f){const _0x3ef603='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x161636='',_0x230005='';for(let _0x56614f=0x0,_0x4d6505,_0x1e9ade,_0x538cef=0x0;_0x1e9ade=_0xeff60f['charAt'](_0x538cef++);~_0x1e9ade&&(_0x4d6505=_0x56614f%0x4?_0x4d6505*0x40+_0x1e9ade:_0x1e9ade,_0x56614f++%0x4)?_0x161636+=String['fromCharCode'](0xff&_0x4d6505>>(-0x2*_0x56614f&0x6)):0x0){_0x1e9ade=_0x3ef603['indexOf'](_0x1e9ade);}for(let _0x4ee756=0x0,_0xe8c670=_0x161636['length'];_0x4ee756<_0xe8c670;_0x4ee756++){_0x230005+='%'+('00'+_0x161636['charCodeAt'](_0x4ee756)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x230005);};a0_0x1761['OEuWrN']=_0x56addc,a0_0x1761['bfWbuZ']={},a0_0x1761['aPICyK']=!![];}const _0x570c5a=_0x5784c4[0x0],_0x56cddf=_0x3838c9+_0x570c5a,_0x5d512a=a0_0x1761['bfWbuZ'][_0x56cddf];return!_0x5d512a?(_0x1761fc=a0_0x1761['OEuWrN'](_0x1761fc),a0_0x1761['bfWbuZ'][_0x56cddf]=_0x1761fc):_0x1761fc=_0x5d512a,_0x1761fc;}(function(_0x3105c2,_0x55425f){const _0x47f353=a0_0x1761,_0x22e843=_0x3105c2();while(!![]){try{const _0x50a82b=parseInt(_0x47f353(0x253))/0x1*(-parseInt(_0x47f353(0x2c4))/0x2)+parseInt(_0x47f353(0x22d))/0x3+-parseInt(_0x47f353(0x2d3))/0x4+-parseInt(_0x47f353(0x281))/0x5+-parseInt(_0x47f353(0x1bc))/0x6+parseInt(_0x47f353(0x1b0))/0x7*(parseInt(_0x47f353(0x254))/0x8)+parseInt(_0x47f353(0x2a6))/0x9;if(_0x50a82b===_0x55425f)break;else _0x22e843['push'](_0x22e843['shift']());}catch(_0x20fd84){_0x22e843['push'](_0x22e843['shift']());}}}(a0_0x5784,0x85105),(function(){'use strict';const _0x5e1ecb=a0_0x1761,_0x110c74={'nfmmI':_0x5e1ecb(0x217),'QCdpR':_0x5e1ecb(0x1b7),'gJoin':_0x5e1ecb(0x248),'FFbMw':function(_0x3f88ba){return _0x3f88ba();},'oICYu':'ev-global-menu','COGNi':_0x5e1ecb(0x213),'XyJug':function(_0x3637ae,_0x1ee39e){return _0x3637ae===_0x1ee39e;},'WxdfW':_0x5e1ecb(0x1fa),'HfFGX':function(_0x31ae06,_0x3bb8d7){return _0x31ae06(_0x3bb8d7);},'WaDWl':function(_0x3ed045,_0x5ed123){return _0x3ed045<_0x5ed123;},'pqEIZ':function(_0x2031fe,_0x10cb9f){return _0x2031fe-_0x10cb9f;},'CHFTj':function(_0x49b5c4,_0x3a6a35){return _0x49b5c4===_0x3a6a35;},'DDHOy':function(_0x458d8d,_0x214c46){return _0x458d8d(_0x214c46);},'iKFhJ':function(_0x14c3da,_0x4827b9){return _0x14c3da(_0x4827b9);},'HtcqM':_0x5e1ecb(0x1dc),'YlUYH':'script[src*=\x22eqn.view.js\x22]','FMfGt':'./embed/','kLzIR':_0x5e1ecb(0x26f),'sTOzn':function(_0x124ffa,_0x593661){return _0x124ffa===_0x593661;},'UxgLi':function(_0x139bb5,_0x403630){return _0x139bb5===_0x403630;},'IxpRU':'formula','mYACl':function(_0x4dc733,_0x3b1ff4){return _0x4dc733||_0x3b1ff4;},'yfOsB':'Notation','Qxxhb':_0x5e1ecb(0x261),'MBGdS':function(_0x597a79,_0x48947c){return _0x597a79===_0x48947c;},'qjFtT':function(_0x2e3b27){return _0x2e3b27();},'hNPXj':_0x5e1ecb(0x230),'ebABa':'contextmenu','OghKb':_0x5e1ecb(0x265),'CuOzS':'ev-menu','cjcCq':_0x5e1ecb(0x287),'bQNco':function(_0xb872d6,_0x59042f){return _0xb872d6||_0x59042f;},'VJBqk':_0x5e1ecb(0x2f9),'FJoyw':function(_0x570a97,_0x1e34dc){return _0x570a97===_0x1e34dc;},'dIOfE':'Copy\x20table\x20as','NoSFW':function(_0x4538fa,_0xf25c26){return _0x4538fa+_0xf25c26;},'uTBWk':function(_0x20fb71,_0x324eb3,_0x26cec4,_0x41ad16,_0x1ea3ee,_0x1adc18,_0x1fdf7e){return _0x20fb71(_0x324eb3,_0x26cec4,_0x41ad16,_0x1ea3ee,_0x1adc18,_0x1fdf7e);},'ovzFG':'textarea','mMLQL':_0x5e1ecb(0x1e4),'tFmsJ':function(_0x232313,_0x2361c8,_0x16a363){return _0x232313(_0x2361c8,_0x16a363);},'vflkN':_0x5e1ecb(0x1ae),'GPjKd':_0x5e1ecb(0x24b),'yTbFt':_0x5e1ecb(0x23a),'aWJYH':function(_0x34a70d,_0xc27f8e){return _0x34a70d(_0xc27f8e);},'DvEpE':'data-eqn-formula','ZluCC':function(_0x364f32,_0x2c76cb){return _0x364f32(_0x2c76cb);},'UmEJt':_0x5e1ecb(0x1ba),'mZcKG':_0x5e1ecb(0x2aa),'HeuPi':_0x5e1ecb(0x2be),'hGObp':_0x5e1ecb(0x2c1),'QGhsi':function(_0x38962a,_0x5df874){return _0x38962a(_0x5df874);},'dzASA':_0x5e1ecb(0x19d),'VECcN':function(_0x5a8a7a,_0x34bc67){return _0x5a8a7a===_0x34bc67;},'AAEHB':_0x5e1ecb(0x292),'YkxJF':function(_0x1102fa,_0x320386){return _0x1102fa(_0x320386);},'sVeVe':function(_0x5e5e9c,_0x371fe0,_0x33e069,_0x1746fc){return _0x5e5e9c(_0x371fe0,_0x33e069,_0x1746fc);},'ZTLCa':_0x5e1ecb(0x2d7),'jCTbC':function(_0x5f5257,_0x4d3d2e){return _0x5f5257||_0x4d3d2e;},'XcgDW':function(_0x2b0da4,_0x41286a){return _0x2b0da4===_0x41286a;},'rBPBj':function(_0x10f311,_0x3d5ceb){return _0x10f311(_0x3d5ceb);},'vukZu':function(_0x550cf1,_0x557131,_0x594048){return _0x550cf1(_0x557131,_0x594048);},'qQXZL':function(_0x1fbcbd,_0x4edbc6){return _0x1fbcbd(_0x4edbc6);},'ABppx':function(_0x32a556,_0x25366d){return _0x32a556===_0x25366d;},'NKILt':_0x5e1ecb(0x26e),'zPMsa':function(_0x64baea,_0x4f8fea){return _0x64baea===_0x4f8fea;},'hIHIg':function(_0x4eeaa1,_0x243df9){return _0x4eeaa1(_0x243df9);},'XedLR':function(_0x99f887){return _0x99f887();},'sgPDa':_0x5e1ecb(0x25f),'huFxs':_0x5e1ecb(0x1a5),'hOCSq':_0x5e1ecb(0x238),'sMNQZ':_0x5e1ecb(0x1e6),'HvOBN':_0x5e1ecb(0x2c2),'wcOhk':_0x5e1ecb(0x299),'vbFol':function(_0x1fb197,_0x243963,_0x37b2ec,_0x569644,_0x218065){return _0x1fb197(_0x243963,_0x37b2ec,_0x569644,_0x218065);},'gcEcm':'role','eoMpt':_0x5e1ecb(0x2e8),'Vpram':_0x5e1ecb(0x294),'cYtGY':'&lt;','VCAGi':function(_0x50680f,_0x122524){return _0x50680f===_0x122524;},'tjjLt':_0x5e1ecb(0x2a2),'mjcNY':function(_0x2de346,_0x39e7ee){return _0x2de346===_0x39e7ee;},'CLOiD':_0x5e1ecb(0x26c),'EZIEm':_0x5e1ecb(0x25b),'COIOJ':function(_0x5d8ee5,_0x2591ac){return _0x5d8ee5===_0x2591ac;},'nvGAN':function(_0x483a28){return _0x483a28();},'TzGHE':_0x5e1ecb(0x1a2),'UhsdR':function(_0x12a2e8,_0x427363){return _0x12a2e8===_0x427363;},'OFNcN':_0x5e1ecb(0x1e3),'larxc':_0x5e1ecb(0x26d),'EKzOm':_0x5e1ecb(0x1a0),'kmrbj':function(_0x4c6da4,_0x5d54c2,_0x34853c){return _0x4c6da4(_0x5d54c2,_0x34853c);},'ffMMq':_0x5e1ecb(0x237),'LcdFC':_0x5e1ecb(0x1ee),'BODxo':function(_0x5b5b1e,_0x67371c,_0x8ead66){return _0x5b5b1e(_0x67371c,_0x8ead66);},'pHlaA':_0x5e1ecb(0x23f),'JAmtM':_0x5e1ecb(0x2af),'NksoM':function(_0xd4b95a,_0x47649d){return _0xd4b95a(_0x47649d);},'QgXqZ':'text','nwFaA':'excel','RGnWq':_0x5e1ecb(0x256),'ycXNo':'Text','VOvZx':_0x5e1ecb(0x1d4),'SWOXr':_0x5e1ecb(0x27c),'LlYlX':_0x5e1ecb(0x206),'wVfNW':'JavaScript\x20function','cDWig':_0x5e1ecb(0x25a),'kDpfZ':'XLS','hkwYC':_0x5e1ecb(0x21b),'bQrUs':_0x5e1ecb(0x268),'zLjFN':_0x5e1ecb(0x2a3),'tcZLh':_0x5e1ecb(0x2da),'rtvLp':'<svg\x20class=\x22ev-hint-icon\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20aria-hidden=\x22true\x22\x20title=\x22JavaScript\x22><rect\x20width=\x2224\x22\x20height=\x2224\x22\x20rx=\x222.5\x22\x20fill=\x22#F7DF1E\x22/><text\x20x=\x2212\x22\x20y=\x2216\x22\x20text-anchor=\x22middle\x22\x20fill=\x22#323330\x22\x20font-family=\x22Segoe\x20UI,\x20sans-serif\x22\x20font-size=\x228.5\x22\x20font-weight=\x22700\x22>JS</text></svg>','bgBmT':_0x5e1ecb(0x22f),'xwthG':_0x5e1ecb(0x247),'fSvSc':_0x5e1ecb(0x286),'giRnI':function(_0x30adfc){return _0x30adfc();}};const _0x5ec4cb=[_0x110c74[_0x5e1ecb(0x19f)],_0x5e1ecb(0x2d6),_0x5e1ecb(0x1c5),_0x110c74[_0x5e1ecb(0x225)],_0x5e1ecb(0x292),_0x5e1ecb(0x239),_0x5e1ecb(0x2a0),_0x110c74['RGnWq']],_0xe74ea5=[_0x5e1ecb(0x2bc),_0x110c74[_0x5e1ecb(0x26b)],_0x5e1ecb(0x239),_0x5e1ecb(0x2a0),_0x110c74[_0x5e1ecb(0x1d6)]],_0xb54ec2={'text':{'section':_0x110c74[_0x5e1ecb(0x1f5)],'label':_0x110c74[_0x5e1ecb(0x1cd)],'badge':_0x110c74[_0x5e1ecb(0x1f2)]},'tex':{'section':_0x110c74['yfOsB'],'label':_0x5e1ecb(0x232),'badge':_0x5e1ecb(0x1b3)},'mathml':{'section':'Notation','label':'MathML','badge':'MML'},'excel':{'section':_0x5e1ecb(0x261),'label':_0x5e1ecb(0x1b1),'badge':_0x5e1ecb(0x1d1)},'sheets':{'section':_0x5e1ecb(0x261),'label':_0x5e1ecb(0x2e6),'badge':'GS'},'python':{'section':_0x110c74['SWOXr'],'label':_0x5e1ecb(0x234),'badge':'PY'},'csharp':{'section':_0x5e1ecb(0x27c),'label':_0x110c74[_0x5e1ecb(0x1e8)],'badge':'C#'},'javascript':{'section':_0x110c74[_0x5e1ecb(0x2d9)],'label':_0x110c74[_0x5e1ecb(0x1c6)],'badge':'JS'}},_0x562385={'excel':{'section':'Spreadsheet','label':_0x110c74[_0x5e1ecb(0x1c3)],'badge':_0x110c74[_0x5e1ecb(0x243)]},'sheets':{'section':_0x5e1ecb(0x261),'label':_0x5e1ecb(0x2cf),'badge':'GS'},'python':{'section':_0x5e1ecb(0x27c),'label':_0x110c74[_0x5e1ecb(0x1df)],'badge':'PY'},'csharp':{'section':_0x5e1ecb(0x27c),'label':_0x110c74[_0x5e1ecb(0x28e)],'badge':'C#'},'javascript':{'section':_0x110c74['SWOXr'],'label':'JavaScript\x20data','badge':'JS'}},_0x5c8978={'excel':_0x5e1ecb(0x25c),'sheets':_0x110c74[_0x5e1ecb(0x296)],'python':_0x110c74['tcZLh'],'csharp':_0x5e1ecb(0x1ca),'javascript':_0x110c74['rtvLp'],'text':_0x5e1ecb(0x252),'tex':_0x110c74['bgBmT'],'mathml':_0x5e1ecb(0x2e5)},_0x3fbebd=new Map();let _0x112590=null,_0x26b5b6=_0x5ec4cb,_0x4ee628=_0xb54ec2,_0x454104=null;function _0x2c00e2(){const _0x8c15ca=_0x5e1ecb;let _0x5eee21=document[_0x8c15ca(0x2a7)](_0x110c74[_0x8c15ca(0x1ec)]);if(!_0x5eee21){const _0x533329='2|1|5|3|4|0'[_0x8c15ca(0x1cf)]('|');let _0x3e8c52=0x0;while(!![]){switch(_0x533329[_0x3e8c52++]){case'0':document['body'][_0x8c15ca(0x241)](_0x5eee21);continue;case'1':_0x5eee21['id']=_0x8c15ca(0x217);continue;case'2':_0x5eee21=document['createElement'](_0x8c15ca(0x25f));continue;case'3':_0x5eee21[_0x8c15ca(0x1f6)](_0x110c74[_0x8c15ca(0x2ab)],'polite');continue;case'4':_0x5eee21[_0x8c15ca(0x1f6)](_0x110c74[_0x8c15ca(0x1c0)],'true');continue;case'5':_0x5eee21['className']='ev-sr-only';continue;}break;}}return _0x5eee21;}function _0x287ed1(_0x11cd9f){const _0x31f47c=_0x5e1ecb,_0x497bca=_0x110c74['FFbMw'](_0x2c00e2);_0x497bca['textContent']='',window[_0x31f47c(0x20b)](()=>{const _0x3ef892=_0x31f47c;_0x497bca[_0x3ef892(0x220)]=_0x11cd9f;});}function _0x2ba12f(){const _0x33d7b0=_0x5e1ecb,_0x70e4dd=document[_0x33d7b0(0x2a7)](_0x110c74[_0x33d7b0(0x2b6)]);if(!_0x70e4dd||_0x70e4dd['hidden'])return[];return Array[_0x33d7b0(0x27f)](_0x70e4dd['querySelectorAll'](_0x110c74[_0x33d7b0(0x2f4)]));}function _0x596bbb(_0x345c1a){const _0xc9b5d=_0x5e1ecb,_0x8ec6c7=_0x2ba12f();if(!_0x8ec6c7[_0xc9b5d(0x2a1)])return;const _0x389f9c=Math[_0xc9b5d(0x221)](0x0,Math[_0xc9b5d(0x2c0)](_0x345c1a,_0x8ec6c7[_0xc9b5d(0x2a1)]-0x1));_0x8ec6c7[_0x389f9c][_0xc9b5d(0x22e)]();}function _0x38fb0e(_0x40819e){const _0x459465=_0x5e1ecb,_0x4ada3c=document[_0x459465(0x2a7)](_0x459465(0x2dd));if(!_0x4ada3c||_0x4ada3c[_0x459465(0x1a1)])return;const _0x160c19=_0x2ba12f();if(!_0x160c19[_0x459465(0x2a1)])return;const _0x5bf6a5=_0x160c19[_0x459465(0x246)](document['activeElement']);if(_0x110c74[_0x459465(0x273)](_0x40819e[_0x459465(0x203)],_0x110c74[_0x459465(0x1aa)]))_0x40819e['preventDefault'](),_0x110c74[_0x459465(0x267)](_0x596bbb,_0x110c74[_0x459465(0x1c1)](_0x5bf6a5,0x0)?0x0:_0x5bf6a5+0x1);else{if(_0x40819e[_0x459465(0x203)]==='ArrowUp')_0x40819e[_0x459465(0x2f6)](),_0x110c74['HfFGX'](_0x596bbb,_0x110c74[_0x459465(0x1c1)](_0x5bf6a5,0x0)?_0x110c74[_0x459465(0x208)](_0x160c19[_0x459465(0x2a1)],0x1):_0x110c74[_0x459465(0x208)](_0x5bf6a5,0x1));else{if(_0x110c74[_0x459465(0x257)](_0x40819e[_0x459465(0x203)],'Home'))_0x40819e['preventDefault'](),_0x110c74['DDHOy'](_0x596bbb,0x0);else{if(_0x40819e[_0x459465(0x203)]===_0x459465(0x264))_0x40819e[_0x459465(0x2f6)](),_0x110c74['iKFhJ'](_0x596bbb,_0x110c74[_0x459465(0x208)](_0x160c19[_0x459465(0x2a1)],0x1));else _0x40819e[_0x459465(0x203)]===_0x110c74[_0x459465(0x2b8)]&&_0x110c74[_0x459465(0x2ac)](_0x300cb4);}}}}function _0x5b91cc(){const _0x430ea3=_0x5e1ecb,_0x16a741=window['__EQN_EMBED_BASE__'];if(_0x16a741)return new URL(_0x16a741);const _0x9db39f=document[_0x430ea3(0x29c)];if(_0x9db39f?.['src'])return new URL('.',_0x9db39f[_0x430ea3(0x1af)]);const _0x45ef41=document[_0x430ea3(0x235)](_0x110c74[_0x430ea3(0x22c)]),_0x4671bd=_0x45ef41[_0x45ef41[_0x430ea3(0x2a1)]-0x1];return _0x4671bd?.['src']?new URL('.',_0x4671bd[_0x430ea3(0x1af)]):new URL(_0x110c74[_0x430ea3(0x1ef)],window['location'][_0x430ea3(0x279)]);}function _0x1ac1bb(_0x1ee827,_0x45cc00){const _0x51399e=_0x5e1ecb,_0x2f98b9=_0x45cc00?.[_0x51399e(0x218)],_0x149d8e=_0x1ee827['getAttribute'](_0x51399e(0x1a0)),_0x22b3a4=_0x2f98b9||_0x149d8e||_0x110c74[_0x51399e(0x2b4)];return _0x22b3a4===_0x51399e(0x28d)||_0x110c74['sTOzn'](_0x22b3a4,_0x51399e(0x2e4))?_0x22b3a4:_0x110c74['kLzIR'];}function _0x59beb8(_0x345a5c,_0x5c59b0){const _0x472ddf=_0x5e1ecb;if(_0x110c74[_0x472ddf(0x1eb)](_0x5c59b0,_0x110c74['kLzIR']))_0x345a5c['removeAttribute'](_0x472ddf(0x1a0));else _0x345a5c[_0x472ddf(0x1f6)](_0x472ddf(0x1a0),_0x5c59b0);}function _0x25d179(_0x21e058){const _0x29d860=_0x5e1ecb,_0x31e74b=(_0x21e058['textContent']||'')[_0x29d860(0x2a4)](),_0x20921b=_0x31e74b[_0x29d860(0x1cf)](/\r?\n/);if(!_0x20921b['length'])return null;let _0x4acd6c=0x0;if(/^id_key=/i[_0x29d860(0x1c8)](_0x20921b[0x0][_0x29d860(0x2a4)]()))_0x4acd6c=0x1;const _0x135718=_0x20921b[_0x29d860(0x263)](_0x4acd6c)[_0x29d860(0x259)]('\x0a')[_0x29d860(0x2a4)]();if(!_0x135718)return null;try{const _0x5350a0=window[_0x29d860(0x280)]?.[_0x29d860(0x20e)],_0x1a0b76=_0x5350a0?_0x5350a0(_0x135718):JSON[_0x29d860(0x288)](_0x135718);return{'payload':_0x1a0b76,'reference':_0x21e058[_0x29d860(0x1bb)](_0x29d860(0x1f0))||_0x21e058[_0x29d860(0x1bb)](_0x29d860(0x2db))||_0x1a0b76[_0x29d860(0x2b2)]||'','formula':_0x21e058['getAttribute'](_0x110c74[_0x29d860(0x1bf)])||_0x1a0b76[_0x29d860(0x294)]||''};}catch{return null;}}function _0x5e5e32(_0x1e5943){const _0x33ef5a=_0x5e1ecb,_0x4bfd8a=_0x1e5943[_0x33ef5a(0x298)](_0x414793=>_0x5c8978[_0x414793])[_0x33ef5a(0x2d4)](_0x5ddccf=>_0x5c8978[_0x5ddccf])[_0x33ef5a(0x259)]('');return _0x33ef5a(0x297)+_0x4bfd8a+_0x33ef5a(0x2f8);}function _0x3b9c90(_0x385d37,_0x4dfa44){const _0x3f5b8d=_0x5e1ecb,_0x52d014=_0x110c74[_0x3f5b8d(0x1cb)](_0x4dfa44,_0xb54ec2),_0x525518=new Map();for(const _0x108478 of _0x385d37){const _0x40da8e=_0x52d014[_0x108478];if(!_0x40da8e)continue;if(!_0x525518[_0x3f5b8d(0x1e7)](_0x40da8e['section']))_0x525518[_0x3f5b8d(0x223)](_0x40da8e[_0x3f5b8d(0x2e9)],[]);_0x525518[_0x3f5b8d(0x240)](_0x40da8e[_0x3f5b8d(0x2e9)])[_0x3f5b8d(0x24c)](_0x108478);}const _0x1475bc=[_0x110c74[_0x3f5b8d(0x1f5)],_0x110c74['Qxxhb'],_0x3f5b8d(0x27c)],_0x2e7dd0=[];return _0x1475bc[_0x3f5b8d(0x2c3)](_0x5d3643=>{const _0x4c2cf6=_0x3f5b8d,_0x58d292=_0x525518[_0x4c2cf6(0x240)](_0x5d3643);if(!_0x58d292?.[_0x4c2cf6(0x2a1)])return;if(_0x2e7dd0[_0x4c2cf6(0x2a1)])_0x2e7dd0[_0x4c2cf6(0x24c)](_0x4c2cf6(0x1e2));_0x2e7dd0[_0x4c2cf6(0x24c)]('<div\x20class=\x22ev-menu-section\x22><div\x20class=\x22ev-menu-label\x22>'+_0x5d3643+_0x4c2cf6(0x1b8));for(const _0x25c9fa of _0x58d292){const _0x76249f=_0x52d014[_0x25c9fa];_0x2e7dd0[_0x4c2cf6(0x24c)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22ev-menu-item\x22\x20data-type=\x22'+_0x25c9fa+'\x22\x20role=\x22menuitem\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ev-menu-item-label\x22>'+_0x76249f[_0x4c2cf6(0x1be)]+_0x4c2cf6(0x200)+_0x76249f['badge']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>');}_0x2e7dd0[_0x4c2cf6(0x24c)](_0x4c2cf6(0x1b8));}),_0x2e7dd0[_0x3f5b8d(0x259)]('');}function _0x4bacf8(){const _0x592295=_0x5e1ecb;let _0x3ae436=document['getElementById'](_0x110c74['oICYu']);if(!_0x3ae436){const _0x3ec2a4=_0x592295(0x29f)['split']('|');let _0x279151=0x0;while(!![]){switch(_0x3ec2a4[_0x279151++]){case'0':document[_0x592295(0x269)](_0x110c74[_0x592295(0x1de)],_0x43e839=>{const _0xd1e175=_0x592295;if(_0x110c74[_0xd1e175(0x24e)](_0x43e839['key'],_0xd1e175(0x1fe)))_0x110c74[_0xd1e175(0x24d)](_0x300cb4);});continue;case'1':_0x3ae436[_0x592295(0x269)](_0x110c74[_0x592295(0x290)],_0x25d97c=>_0x25d97c[_0x592295(0x2f6)]());continue;case'2':_0x3ae436['id']=_0x592295(0x2dd);continue;case'3':_0x3ae436[_0x592295(0x269)](_0x110c74['OghKb'],_0xa07f9e);continue;case'4':document[_0x592295(0x269)](_0x110c74['OghKb'],()=>_0x300cb4());continue;case'5':_0x3ae436[_0x592295(0x293)]=_0x110c74[_0x592295(0x19e)];continue;case'6':document['body'][_0x592295(0x241)](_0x3ae436);continue;case'7':_0x3ae436['setAttribute'](_0x592295(0x2d8),_0x110c74['cjcCq']);continue;case'8':_0x3ae436[_0x592295(0x1f6)]('aria-label','Copy\x20as');continue;case'9':_0x3ae436[_0x592295(0x269)](_0x110c74[_0x592295(0x1de)],_0x38fb0e);continue;case'10':_0x3ae436['hidden']=!![];continue;case'11':document[_0x592295(0x269)]('scroll',()=>_0x300cb4(),!![]);continue;case'12':_0x3ae436=document[_0x592295(0x1f9)](_0x592295(0x25f));continue;}break;}}return _0x3ae436[_0x592295(0x21a)]=_0x3b9c90(_0x26b5b6,_0x4ee628),_0x3ae436;}function _0x300cb4(){const _0x1622ca=_0x5e1ecb,_0x449ae9=document[_0x1622ca(0x2a7)](_0x1622ca(0x2dd));if(_0x449ae9)_0x449ae9[_0x1622ca(0x1a1)]=!![];_0x454104&&(_0x454104[_0x1622ca(0x1f6)]('aria-expanded',_0x1622ca(0x1c4)),_0x454104=null);}function _0x15e357(_0x276a86,_0x1dfea4,_0x37038f,_0x279ed4,_0x539962,_0x32478c){const _0x3dc7d1=_0x5e1ecb;_0x26b5b6=_0x539962?.[_0x3dc7d1(0x2a1)]?_0x539962:_0x5ec4cb,_0x4ee628=_0x110c74['mYACl'](_0x32478c,_0xb54ec2),_0x112590=_0x279ed4,_0x454104=_0x110c74[_0x3dc7d1(0x209)](_0x276a86,null);if(_0x454104)_0x454104[_0x3dc7d1(0x1f6)](_0x110c74[_0x3dc7d1(0x25e)],_0x3dc7d1(0x22b));const _0x302f20=_0x4bacf8();_0x302f20['setAttribute'](_0x3dc7d1(0x1e6),_0x110c74['FJoyw'](_0x32478c,_0x562385)?_0x110c74[_0x3dc7d1(0x227)]:_0x3dc7d1(0x282)),_0x302f20[_0x3dc7d1(0x1a1)]=![],_0x302f20['style'][_0x3dc7d1(0x272)]=_0x110c74[_0x3dc7d1(0x28f)](_0x1dfea4,'px'),_0x302f20[_0x3dc7d1(0x218)][_0x3dc7d1(0x28c)]=_0x110c74[_0x3dc7d1(0x28f)](_0x37038f,'px');const _0x19ffab=_0x302f20[_0x3dc7d1(0x1c2)]();_0x19ffab[_0x3dc7d1(0x284)]>window[_0x3dc7d1(0x260)]&&(_0x302f20[_0x3dc7d1(0x218)][_0x3dc7d1(0x272)]=Math[_0x3dc7d1(0x221)](0x0,_0x110c74[_0x3dc7d1(0x208)](_0x1dfea4,_0x19ffab[_0x3dc7d1(0x1a9)]))+'px'),_0x19ffab[_0x3dc7d1(0x231)]>window['innerHeight']&&(_0x302f20['style'][_0x3dc7d1(0x28c)]=Math[_0x3dc7d1(0x221)](0x0,_0x37038f-_0x19ffab[_0x3dc7d1(0x1a4)])+'px'),_0x110c74['HfFGX'](_0x596bbb,0x0);}function _0x3b8648(_0xc32527,_0x36d41e,_0xce3deb,_0x39ff19,_0xae633d){const _0x4bc5e2=_0x5e1ecb;_0x110c74[_0x4bc5e2(0x1d3)](_0x15e357,null,_0xc32527,_0x36d41e,_0xce3deb,_0x39ff19,_0xae633d);}function _0x245e49(_0x3c6001){const _0x5b12ea=_0x5e1ecb,_0x5ef937=document[_0x5b12ea(0x1f9)](_0x110c74[_0x5b12ea(0x28a)]);return _0x5ef937['innerHTML']=_0x3c6001,_0x5ef937[_0x5b12ea(0x1b2)];}function _0xcda297(_0x6e6b05,_0x2b4851){return _0x6e6b05+'=\x22'+_0x2b4851+'\x22';}function _0x5b9299(_0x3f6938){const _0x47ac98=_0x5e1ecb;if(!_0x3f6938||!/\bdata-sheets-value\s*=/['test'](_0x3f6938))return _0x3f6938;const _0x13ff88=_0x24b718=>_0x24b718[_0x47ac98(0x2d2)](/&quot;/g,'\x22')[_0x47ac98(0x2d2)](/&amp;/g,'&'),_0x3463d9=(_0x12e8c4,_0x5610cd)=>_0x5610cd[_0x47ac98(0x2d2)](new RegExp('\x5cb'+_0x12e8c4+_0x47ac98(0x2c5),'gi'),(_0x2c3c77,_0x5da629)=>_0xcda297(_0x12e8c4,_0x13ff88(_0x5da629)))[_0x47ac98(0x2d2)](new RegExp('\x5cb'+_0x12e8c4+_0x47ac98(0x23d),'gi'),(_0x4615c9,_0x53f826)=>{const _0x39173f=_0x47ac98;if(!_0x53f826[_0x39173f(0x2f1)](_0x110c74[_0x39173f(0x229)])&&!_0x53f826[_0x39173f(0x2f1)](_0x39173f(0x201)))return _0x4615c9;return _0xcda297(_0x12e8c4,_0x13ff88(_0x53f826));});let _0xe045da=_0x110c74[_0x47ac98(0x250)](_0x3463d9,_0x47ac98(0x1ff),_0x3f6938);return _0xe045da=_0x3463d9(_0x110c74[_0x47ac98(0x1bd)],_0xe045da),_0xe045da;}function _0x257ad5(_0x32ac67){const _0x314b88=_0x5e1ecb,_0x39ead6=_0x110c74[_0x314b88(0x228)];let _0x459fdb=_0x32ac67[_0x314b88(0x2a4)]();return!/\bdata-sheets-root\s*=/['test'](_0x459fdb)&&(_0x459fdb=_0x459fdb[_0x314b88(0x2d2)](/<table\b/i,_0x110c74[_0x314b88(0x2ee)])),'<google-sheets-html-origin><meta\x20name=\x22generator\x22\x20content=\x22Sheets\x22/>'+_0x39ead6+_0x459fdb+_0x314b88(0x233);}function _0x1d8dc5(_0x1e5993){const _0x6ed3a2=_0x5e1ecb;let _0x47da4c=_0x1e5993;const _0x3ece2c=_0x1e5993[_0x6ed3a2(0x212)](/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i);if(_0x3ece2c)_0x47da4c=_0x3ece2c[0x1];else{const _0x5d4d1f=_0x1e5993['match'](/<body[^>]*>([\s\S]*?)<\/body>/i);if(_0x5d4d1f)_0x47da4c=_0x5d4d1f[0x1];}const _0x8b310b=_0x47da4c[_0x6ed3a2(0x212)](/<table[\s\S]*?<\/table>/i);return _0x110c74[_0x6ed3a2(0x2b9)](_0x257ad5,_0x8b310b?_0x8b310b[0x0]:_0x47da4c[_0x6ed3a2(0x2a4)]());}function _0x2a56e4(_0x31cf2a){const _0x568a4a=_0x5e1ecb,_0x13b498={'IDCAS':_0x110c74['DvEpE'],'MIjBW':_0x568a4a(0x27b)};if(!_0x31cf2a)return _0x31cf2a;if(/\bdata-sheets-formula\s*=/[_0x568a4a(0x1c8)](_0x31cf2a))return _0x110c74['iKFhJ'](_0x1d8dc5,_0x110c74[_0x568a4a(0x21f)](_0x5b9299,_0x31cf2a));const _0x451e35=new DOMParser()[_0x568a4a(0x1d8)](_0x31cf2a,_0x110c74['UmEJt']),_0x404b06=_0x451e35[_0x568a4a(0x2ef)](_0x568a4a(0x2a2));if(!_0x404b06)return _0x31cf2a;_0x404b06[_0x568a4a(0x235)](_0x110c74['mZcKG'])['forEach'](_0x1bd517=>{const _0x36cda7=_0x568a4a;let _0x16fa54=_0x1bd517[_0x36cda7(0x1bb)](_0x36cda7(0x1b9))||_0x1bd517[_0x36cda7(0x1bb)](_0x13b498['IDCAS']);if(!_0x16fa54){const _0x3b7d1c=_0x1bd517[_0x36cda7(0x220)]['trim']();if(_0x3b7d1c[_0x36cda7(0x29e)]('='))_0x16fa54=_0x3b7d1c;}if(!_0x16fa54)return;_0x16fa54=_0x245e49(_0x16fa54['trim']());if(!_0x16fa54[_0x36cda7(0x29e)]('='))_0x16fa54='='+_0x16fa54;_0x1bd517[_0x36cda7(0x220)]=_0x16fa54,_0x1bd517[_0x36cda7(0x2ca)](_0x36cda7(0x1b9)),_0x1bd517['removeAttribute'](_0x36cda7(0x2ea)),_0x1bd517['removeAttribute'](_0x13b498[_0x36cda7(0x2de)]),_0x1bd517['removeAttribute'](_0x36cda7(0x27a));});const _0x195d6b=_0x31cf2a[_0x568a4a(0x212)](/<style[^>]*>[\s\S]*?<\/style>/gi),_0x1a44f1=_0x195d6b?_0x195d6b[_0x568a4a(0x259)]('\x0a'):'';return _0x568a4a(0x2e1)+_0x1a44f1+_0x404b06['outerHTML']+'<!--EndFragment--></body></html>';}function _0x4301f7(_0x35baca){const _0x4f0c1c=_0x5e1ecb,_0x855dea=new DOMParser(),_0x42d498=_0x855dea[_0x4f0c1c(0x1d8)](_0x35baca,_0x110c74[_0x4f0c1c(0x2f3)]),_0x1cca06=_0x42d498[_0x4f0c1c(0x235)](_0x110c74['HeuPi']);if(!_0x1cca06[_0x4f0c1c(0x2a1)])return'';return Array['from'](_0x1cca06,_0x31ebae=>Array['from'](_0x31ebae[_0x4f0c1c(0x235)](_0x4f0c1c(0x202)),_0x2c344c=>_0x2c344c[_0x4f0c1c(0x220)][_0x4f0c1c(0x2a4)]())['join']('\x09'))['join']('\x0d\x0a');}function _0x1fda79(_0x5a4c99,_0x4bd130,_0x314e87={}){const _0x1b5737=_0x5e1ecb,_0x17ab5b={'wNiLY':_0x110c74[_0x1b5737(0x19c)]};return new Promise((_0x191c2e,_0x379e14)=>{const _0x384161=_0x1b5737,_0x4ca95b=_0x2abcac=>{const _0x2e5b2e=a0_0x1761;_0x2abcac[_0x2e5b2e(0x2f6)](),_0x2abcac[_0x2e5b2e(0x1d7)]['setData'](_0x2e5b2e(0x1ba),_0x5a4c99),_0x2abcac[_0x2e5b2e(0x1d7)][_0x2e5b2e(0x291)](_0x17ab5b[_0x2e5b2e(0x1d9)],_0x4bd130);};document['addEventListener'](_0x110c74[_0x384161(0x2b1)],_0x4ca95b,{'once':!![]});if(_0x314e87[_0x384161(0x278)]){try{if(document['execCommand'](_0x384161(0x2c1)))_0x191c2e();else _0x110c74[_0x384161(0x1b6)](_0x379e14,new Error('execCommand\x20copy\x20failed'));}catch(_0xfcc56d){_0x110c74[_0x384161(0x2b9)](_0x379e14,_0xfcc56d);}return;}const _0x195a89=document[_0x384161(0x1f9)](_0x384161(0x25f));_0x195a89[_0x384161(0x211)]=_0x384161(0x22b),_0x195a89[_0x384161(0x218)]['cssText']=_0x384161(0x1dd),_0x195a89['innerHTML']=_0x5a4c99,document['body']['appendChild'](_0x195a89);const _0x352d0f=document[_0x384161(0x258)]();_0x352d0f[_0x384161(0x28b)](_0x195a89);const _0x37ea99=window[_0x384161(0x21d)]();_0x37ea99[_0x384161(0x236)](),_0x37ea99[_0x384161(0x289)](_0x352d0f);try{if(document['execCommand'](_0x110c74[_0x384161(0x2b1)]))_0x191c2e();else _0x379e14(new Error(_0x384161(0x1ed)));}catch(_0x2aa624){_0x110c74[_0x384161(0x285)](_0x379e14,_0x2aa624);}finally{document[_0x384161(0x1ea)]['removeChild'](_0x195a89),_0x37ea99[_0x384161(0x236)]();}});}async function _0x188785(_0x239fab,_0x18505d){const _0x10df47=_0x5e1ecb;if(_0x239fab===_0x10df47(0x2bc)||_0x110c74['VECcN'](_0x239fab,'sheets')){const _0x5ad560=_0x4301f7(_0x18505d),_0x2f805f=_0x239fab===_0x110c74[_0x10df47(0x26b)]?_0x110c74[_0x10df47(0x255)](_0x5b9299,_0x18505d):_0x18505d;if(_0x239fab===_0x110c74[_0x10df47(0x26b)])try{await navigator['clipboard'][_0x10df47(0x21e)]([new ClipboardItem({'text/html':new Blob([_0x2f805f],{'type':_0x110c74['UmEJt']}),'text/plain':new Blob([_0x5ad560],{'type':'text/plain'})})]);return;}catch{}try{await _0x110c74['sVeVe'](_0x1fda79,_0x2f805f,_0x5ad560,{'skipDomSeed':_0x110c74[_0x10df47(0x24e)](_0x239fab,_0x10df47(0x292))});return;}catch{}try{await navigator[_0x10df47(0x205)][_0x10df47(0x21e)]([new ClipboardItem({'text/html':new Blob([_0x2f805f],{'type':_0x110c74[_0x10df47(0x2f3)]}),'text/plain':new Blob([_0x5ad560],{'type':'text/plain'})})]);return;}catch{}}await navigator[_0x10df47(0x205)]['writeText'](_0x18505d);}function _0x26b726(_0x4df052){const _0x25f74a=_0x5e1ecb,_0x130aac=_0x4df052[_0x25f74a(0x2a4)]();if(!_0x130aac)return _0x130aac;if(_0x130aac[_0x25f74a(0x29e)]('\x5c(')&&_0x130aac[_0x25f74a(0x2c8)]('\x5c)'))return _0x130aac;return'\x5c('+_0x130aac+'\x5c)';}async function _0xa07f9e(_0x13ab6e){const _0x13b83a=_0x5e1ecb;_0x13ab6e['stopPropagation']();const _0x282906=_0x13ab6e[_0x13b83a(0x2cd)]['closest'](_0x110c74[_0x13b83a(0x2e0)]),_0x1911c1=_0x282906?.['getAttribute'](_0x13b83a(0x22a));if(_0x110c74[_0x13b83a(0x2a9)](!_0x1911c1,!_0x112590))return;const _0xe7d3f2=_0x112590[_0x1911c1]??(_0x110c74[_0x13b83a(0x2cb)](_0x1911c1,_0x110c74[_0x13b83a(0x26b)])?_0x112590[_0x13b83a(0x2bc)]:undefined);if(!_0xe7d3f2){_0x300cb4();return;}let _0x40d49b=_0x110c74[_0x13b83a(0x273)](_0x1911c1,_0x13b83a(0x292))?_0x2a56e4(_0xe7d3f2):_0xe7d3f2;_0x1911c1==='tex'&&!_0x40d49b[_0x13b83a(0x2f1)]('\x0a')&&(_0x40d49b=_0x110c74[_0x13b83a(0x23c)](_0x26b726,_0x40d49b));try{await _0x110c74[_0x13b83a(0x2c9)](_0x188785,_0x1911c1,_0x40d49b);const _0x3f1208=_0x4ee628[_0x1911c1]?.['label']||_0x1911c1;_0x110c74[_0x13b83a(0x2b9)](_0x287ed1,_0x13b83a(0x1c9)+_0x3f1208+'.');}catch{_0x287ed1(_0x13b83a(0x1d5));}_0x300cb4();}function _0x1bcc80(_0xdf6727,_0x22e51f,_0x14eead,_0x372378){const _0x2d02a2=_0x5e1ecb,_0x7f9ff1={'mUiaA':_0x2d02a2(0x20c),'KXeJj':function(_0x4dd4be){const _0xac8c03=_0x2d02a2;return _0x110c74[_0xac8c03(0x20a)](_0x4dd4be);},'eOJdV':function(_0x31bd99,_0x5d4060,_0x10e7fe,_0x4bf224,_0x2a2739,_0x5092f9,_0x539afb){return _0x110c74['uTBWk'](_0x31bd99,_0x5d4060,_0x10e7fe,_0x4bf224,_0x2a2739,_0x5092f9,_0x539afb);},'lmAHu':function(_0x2d2f1e,_0x59cfa3){const _0x1adc5c=_0x2d02a2;return _0x110c74[_0x1adc5c(0x28f)](_0x2d2f1e,_0x59cfa3);}},_0x5d92fc=_0x2fafba=>{const _0x37a78a=_0x2d02a2;if(_0x2fafba[_0x37a78a(0x2cd)][_0x37a78a(0x21c)](_0x37a78a(0x20c)))return;_0x2fafba['stopPropagation']();const _0x2973f3=document[_0x37a78a(0x2a7)]('ev-global-menu');if(_0x2973f3&&!_0x2973f3[_0x37a78a(0x1a1)]){_0x110c74[_0x37a78a(0x24d)](_0x300cb4);return;}_0x15e357(_0xdf6727,_0x2fafba[_0x37a78a(0x216)],_0x2fafba[_0x37a78a(0x26a)],_0x22e51f,_0x14eead,_0x372378);},_0x5512b6=_0xfc7cf6=>{const _0x639318=_0x2d02a2;if(_0xfc7cf6[_0x639318(0x2cd)][_0x639318(0x21c)](_0x7f9ff1['mUiaA']))return;_0xfc7cf6[_0x639318(0x2f6)](),_0xfc7cf6[_0x639318(0x1fb)]();const _0x1bf1c2=document[_0x639318(0x2a7)]('ev-global-menu');if(_0x1bf1c2&&!_0x1bf1c2[_0x639318(0x1a1)]){_0x7f9ff1[_0x639318(0x1a8)](_0x300cb4);return;}const _0x4b4bbb=_0xdf6727['getBoundingClientRect']();_0x7f9ff1['eOJdV'](_0x15e357,_0xdf6727,_0x7f9ff1[_0x639318(0x2eb)](_0x4b4bbb[_0x639318(0x272)],_0x4b4bbb[_0x639318(0x1a9)]/0x2),_0x7f9ff1[_0x639318(0x2eb)](_0x4b4bbb[_0x639318(0x231)],0x4),_0x22e51f,_0x14eead,_0x372378);};_0xdf6727[_0x2d02a2(0x269)](_0x110c74['OghKb'],_0x5d92fc),_0xdf6727[_0x2d02a2(0x269)](_0x110c74[_0x2d02a2(0x290)],_0x5587ff=>{const _0x43a77a=_0x2d02a2;if(_0x5587ff[_0x43a77a(0x2cd)]['closest'](_0x43a77a(0x20c)))return;_0x5587ff['preventDefault'](),_0x110c74[_0x43a77a(0x2b5)](_0x5d92fc,_0x5587ff);}),_0xdf6727[_0x2d02a2(0x269)](_0x2d02a2(0x230),_0x47644c=>{const _0x5b0353=_0x2d02a2;if(_0x110c74['ABppx'](_0x47644c[_0x5b0353(0x203)],_0x110c74[_0x5b0353(0x29a)])||_0x110c74['zPMsa'](_0x47644c[_0x5b0353(0x203)],'\x20'))_0x110c74[_0x5b0353(0x219)](_0x5512b6,_0x47644c);});}function _0x1c6e51(_0x4db432,_0x7fc86d){const _0x1c5979=_0x5e1ecb;_0x4db432[_0x1c5979(0x1a7)][_0x1c5979(0x2d0)](_0x1c5979(0x26d));const {payload:_0x449f3b}=_0x7fc86d,_0x5e14b6=_0x449f3b[_0x1c5979(0x20f)]||{},_0x139275=Array['isArray'](_0x449f3b[_0x1c5979(0x2a5)])?_0x449f3b[_0x1c5979(0x2a5)]:_0xe74ea5,_0x50bae7=_0x449f3b[_0x1c5979(0x1ad)]||'',_0x435f75=_0x449f3b[_0x1c5979(0x2ed)]||'',_0xe1213=_0x449f3b[_0x1c5979(0x2b2)]||_0x7fc86d[_0x1c5979(0x2b2)]||'',_0x58bfff=_0xe1213?_0x1c5979(0x2e3)+_0xe1213+_0x1c5979(0x1a3):'Data\x20table.\x20Click\x20to\x20open\x20copy\x20menu.',_0x3b7ebf=document[_0x1c5979(0x1f9)](_0x110c74['sgPDa']);_0x3b7ebf[_0x1c5979(0x293)]=_0x110c74[_0x1c5979(0x2ba)],_0x3b7ebf['tabIndex']=0x0,_0x3b7ebf['setAttribute'](_0x1c5979(0x2d8),_0x110c74[_0x1c5979(0x2c6)]),_0x3b7ebf[_0x1c5979(0x1f6)](_0x1c5979(0x2e8),_0x110c74[_0x1c5979(0x2e7)]),_0x3b7ebf[_0x1c5979(0x1f6)](_0x1c5979(0x2f9),_0x1c5979(0x1c4)),_0x3b7ebf[_0x1c5979(0x1f6)](_0x110c74[_0x1c5979(0x1ce)],_0x58bfff),_0x3b7ebf['innerHTML']=_0x1c5979(0x1db)+(_0x50bae7||'<p\x20class=\x22ev-table-empty\x22>Empty\x20table</p>')+'</div>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22ev-hint\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span>Click\x20to\x20copy</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+_0x5e5e32(_0x139275)+_0x1c5979(0x27e),_0x3b7ebf[_0x1c5979(0x2ef)](_0x1c5979(0x299))[_0x1c5979(0x220)]=_0xe1213;if(_0x435f75){const _0x33684e=document[_0x1c5979(0x1f9)]('p');_0x33684e[_0x1c5979(0x293)]=_0x1c5979(0x1d2),_0x33684e[_0x1c5979(0x1f6)](_0x1c5979(0x2d8),_0x110c74[_0x1c5979(0x2ec)]),_0x33684e[_0x1c5979(0x220)]=_0x435f75,_0x3b7ebf['querySelector'](_0x110c74[_0x1c5979(0x23b)])[_0x1c5979(0x2bd)](_0x33684e);}_0x110c74[_0x1c5979(0x1fd)](_0x1bcc80,_0x3b7ebf,_0x5e14b6,_0x139275,_0x562385),_0x4db432['innerHTML']='',_0x4db432['appendChild'](_0x3b7ebf),_0x3fbebd[_0x1c5979(0x223)](_0x4db432,{'data':_0x7fc86d,'formats':_0x5e14b6,'copyMenu':_0x139275,'kind':_0x1c5979(0x2a2)});}function _0x395bbe(_0x28c1ce,_0x41c0cf){const _0x3908dd=_0x5e1ecb;_0x28c1ce[_0x3908dd(0x1a7)]['remove'](_0x3908dd(0x1ee));const {payload:_0x254d12}=_0x41c0cf,_0x200322=_0x254d12['formats']||{},_0x295cee=Array['isArray'](_0x254d12[_0x3908dd(0x2a5)])?_0x254d12[_0x3908dd(0x2a5)]:_0x5ec4cb,_0x171e9a=_0x254d12['reference']||_0x41c0cf[_0x3908dd(0x2b2)]||'',_0x358c58=_0x200322[_0x3908dd(0x1c5)]||'',_0x16e518=_0x200322[_0x3908dd(0x1cc)]||_0x41c0cf[_0x3908dd(0x1f7)]||'',_0x41cd4e=_0x171e9a?'Equation:\x20'+_0x16e518+'.\x20'+_0x171e9a+'.\x20Click\x20to\x20open\x20copy\x20menu.':_0x3908dd(0x274)+_0x16e518+_0x3908dd(0x1a3),_0x3fff82=document[_0x3908dd(0x1f9)]('div');_0x3fff82[_0x3908dd(0x293)]=_0x3908dd(0x245),_0x3fff82[_0x3908dd(0x1e9)]=0x0,_0x3fff82['setAttribute'](_0x110c74[_0x3908dd(0x249)],'button'),_0x3fff82['setAttribute'](_0x110c74[_0x3908dd(0x226)],'menu'),_0x3fff82['setAttribute'](_0x3908dd(0x2f9),_0x3908dd(0x1c4)),_0x3fff82[_0x3908dd(0x1f6)](_0x110c74[_0x3908dd(0x1ce)],_0x41cd4e),_0x3fff82[_0x3908dd(0x21a)]=_0x3908dd(0x1b5)+_0x108bdc(_0x16e518)+_0x3908dd(0x1d0)+_0x358c58+_0x3908dd(0x2bb)+_0x5e5e32(_0x295cee)+'\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22ev-card-footer\x22>Equangular\x20Equation</p>',_0x3fff82[_0x3908dd(0x2ef)](_0x110c74[_0x3908dd(0x23b)])[_0x3908dd(0x220)]=_0x171e9a,_0x1bcc80(_0x3fff82,_0x200322,_0x295cee,_0xb54ec2),_0x28c1ce[_0x3908dd(0x21a)]='',_0x28c1ce[_0x3908dd(0x241)](_0x3fff82),_0x3fbebd[_0x3908dd(0x223)](_0x28c1ce,{'data':_0x41c0cf,'formats':_0x200322,'copyMenu':_0x295cee,'kind':_0x110c74['Vpram']});}function _0x108bdc(_0x800da3){const _0x392056=_0x5e1ecb;return String(_0x800da3)[_0x392056(0x2d2)](/&/g,_0x392056(0x201))[_0x392056(0x2d2)](/"/g,_0x392056(0x1e4))[_0x392056(0x2d2)](/</g,_0x110c74[_0x392056(0x27d)]);}function _0x2adc3e(_0x231a02){const _0x39e423=_0x5e1ecb;return _0x110c74[_0x39e423(0x283)](_0x231a02?.[_0x39e423(0x29b)],_0x110c74[_0x39e423(0x2f5)]);}function _0x107cdc(){const _0x2731b3=_0x5e1ecb;return window[_0x2731b3(0x2bf)]||window[_0x2731b3(0x1da)]||null;}function _0x50ee18(_0xec8115,_0x5c059b){const _0xccb790=_0x5e1ecb,_0x1694bc=_0xec8115?.['getAttribute']?.(_0xccb790(0x1e5));if(_0x110c74[_0xccb790(0x2f7)](_0x1694bc,_0xccb790(0x24f))||_0x1694bc===_0x110c74[_0xccb790(0x1f8)])return _0x1694bc;if(_0x5c059b?.[_0xccb790(0x242)]==='formulas')return _0xccb790(0x24f);return'values';}function _0x4ea690(_0x1eb1d5,_0x38689d){const _0x5ab06a=_0x5e1ecb,_0x2dbfcf=_0x110c74[_0x5ab06a(0x222)][_0x5ab06a(0x1cf)]('|');let _0x1e0889=0x0;while(!![]){switch(_0x2dbfcf[_0x1e0889++]){case'0':_0x5e82ae=Boolean(_0x5e82ae);continue;case'1':_0x5e82ae===undefined&&_0x110c74[_0x5ab06a(0x1f1)](_0x34b208,undefined)&&_0x1eb1d5[_0x5ab06a(0x270)]&&(_0x5e82ae=!![],_0x34b208=!![]);continue;case'2':if(_0x55ca1a[_0x5ab06a(0x204)]){var _0x4ab13e=_0x55ca1a['buildTableSpreadsheetClipboardHtml'](_0x595fbc,'',{'displayValues':_0x110c74['VECcN'](_0x335749,_0x110c74[_0x5ab06a(0x1f8)])?_0x5a1c59:null});if(_0x4ab13e[_0x5ab06a(0x2bc)])_0x33ec3e[_0x5ab06a(0x2bc)]=_0x4ab13e[_0x5ab06a(0x2bc)];if(_0x4ab13e[_0x5ab06a(0x292)])_0x33ec3e[_0x5ab06a(0x292)]=_0x4ab13e[_0x5ab06a(0x292)];}continue;case'3':var _0x33ec3e=_0x55ca1a[_0x5ab06a(0x2b3)](_0x1eb1d5['canonical']||'',_0x247fb5,_0x1eb1d5[_0x5ab06a(0x2d1)]||'',_0xa205ab,_0x35cf28,_0x3d898c,_0x5e82ae,_0x34b208);continue;case'4':var _0x3d898c=_0x1eb1d5[_0x5ab06a(0x266)]||'';continue;case'5':var _0x335749=_0x50ee18(_0x38689d,_0x1eb1d5);continue;case'6':var _0x55ca1a=_0x110c74[_0x5ab06a(0x2f2)](_0x107cdc);continue;case'7':_0x34b208=Boolean(_0x34b208);continue;case'8':var _0x595fbc=_0x1eb1d5['canonical']||_0x1eb1d5['valuesCanonical']||'';continue;case'9':var _0xa205ab=null;continue;case'10':_0x1eb1d5[_0x5ab06a(0x214)]&&(_0x33ec3e=Object[_0x5ab06a(0x2ce)]({},_0x33ec3e,_0x1eb1d5[_0x5ab06a(0x214)]));continue;case'11':var _0x247fb5=_0x1eb1d5['tableName']||_0x110c74[_0x5ab06a(0x2c7)];continue;case'12':var _0x5e82ae=_0x1eb1d5[_0x5ab06a(0x277)];continue;case'13':var _0x1ff3d0=_0x1eb1d5[_0x5ab06a(0x2d5)]||{'mode':_0x5ab06a(0x1fc),'digits':0x2};continue;case'14':return Object[_0x5ab06a(0x2ce)]({},_0x1eb1d5,{'tableDisplayHtml':_0x55ca1a['buildWebTableHtml'](_0x595fbc,'',{'displayValues':_0x5a1c59}),'formats':_0x33ec3e,'calcError':_0x1cabe3});case'15':var _0x5a1c59=null;continue;case'16':var _0x1cabe3=null;continue;case'17':if(!_0x55ca1a||!_0x595fbc)return _0x1eb1d5;continue;case'18':var _0x35cf28=_0x1eb1d5[_0x5ab06a(0x2b2)]||'';continue;case'19':if(!_0x2adc3e(_0x1eb1d5)||_0x1eb1d5[_0x5ab06a(0x20f)])return _0x1eb1d5;continue;case'20':var _0x34b208=_0x1eb1d5['exportRowNames'];continue;case'21':if(_0x110c74['UhsdR'](_0x335749,_0x110c74[_0x5ab06a(0x1f8)])){var _0x247b9f=_0x1eb1d5[_0x5ab06a(0x20d)]&&_0x55ca1a[_0x5ab06a(0x1f4)]?_0x55ca1a[_0x5ab06a(0x1f4)](_0x1eb1d5[_0x5ab06a(0x20d)]):null,_0x278d44=_0x247b9f&&_0x55ca1a[_0x5ab06a(0x1c7)]&&_0x55ca1a[_0x5ab06a(0x1c7)](_0x247b9f);if(_0x1eb1d5[_0x5ab06a(0x20d)]&&_0x278d44&&_0x55ca1a[_0x5ab06a(0x2b0)]){var _0x39e6a2=_0x1eb1d5[_0x5ab06a(0x214)]?.[_0x5ab06a(0x256)]||'',_0x461c5c=_0x55ca1a['buildEvaluatedDisplayMap'](_0x1eb1d5[_0x5ab06a(0x20d)],_0x1ff3d0,_0x247fb5,_0x39e6a2,{'exportColumnHeaders':_0x5e82ae,'exportRowNames':_0x34b208});_0x5a1c59=_0x461c5c[_0x5ab06a(0x2d4)],_0x1cabe3=_0x461c5c['error'];}else{if(_0x1eb1d5[_0x5ab06a(0x1a6)]&&_0x110c74[_0x5ab06a(0x1eb)](typeof _0x1eb1d5[_0x5ab06a(0x1a6)],'object'))_0x5a1c59=new Map(Object[_0x5ab06a(0x262)](_0x1eb1d5[_0x5ab06a(0x1a6)]));else{if(_0x1eb1d5[_0x5ab06a(0x1ab)]&&_0x55ca1a[_0x5ab06a(0x1f3)]&&_0x55ca1a[_0x5ab06a(0x271)]){_0xa205ab=_0x55ca1a[_0x5ab06a(0x1f3)](_0x1eb1d5[_0x5ab06a(0x1ab)]);var _0x232276=_0x55ca1a[_0x5ab06a(0x271)](_0xa205ab,_0x1ff3d0,_0x1eb1d5['valuesCanonical']||'');_0x5a1c59=new Map(Object['entries'](_0x232276));}else{if(_0x1eb1d5[_0x5ab06a(0x2d1)]&&_0x55ca1a[_0x5ab06a(0x271)]&&_0x55ca1a[_0x5ab06a(0x1f4)]){_0xa205ab=_0x55ca1a[_0x5ab06a(0x1f4)](_0x1eb1d5[_0x5ab06a(0x2d1)]);var _0x45521b=_0x55ca1a['displayMapFromValuesGrid'](_0xa205ab,_0x1ff3d0,_0x1eb1d5[_0x5ab06a(0x2d1)]||'');_0x5a1c59=new Map(Object['entries'](_0x45521b));}}}}}continue;}break;}}function _0xe2a4c(_0x1e35c4){const _0x23d7a7=_0x5e1ecb;if(!_0x1e35c4||_0x110c74[_0x23d7a7(0x23c)](_0x2adc3e,_0x1e35c4)||_0x1e35c4['formats'])return _0x1e35c4;if(!_0x1e35c4[_0x23d7a7(0x294)])return _0x1e35c4;var _0x420fcd=_0x107cdc();if(!_0x420fcd||!_0x420fcd[_0x23d7a7(0x1ac)])return _0x1e35c4;var _0x2b9436=_0x1e35c4[_0x23d7a7(0x2b2)]||_0x110c74[_0x23d7a7(0x2e2)],_0x28debb=_0x1e35c4[_0x23d7a7(0x266)]||'',_0x4afe27=_0x420fcd[_0x23d7a7(0x2f0)]||_0x420fcd[_0x23d7a7(0x1ac)];try{var _0x1c14eb=_0x4afe27(_0x1e35c4[_0x23d7a7(0x294)],_0x2b9436,_0x28debb);return _0x1e35c4['formatOverrides']&&(_0x1c14eb=Object[_0x23d7a7(0x2ce)]({},_0x1c14eb,_0x1e35c4[_0x23d7a7(0x214)])),Object[_0x23d7a7(0x2ce)]({},_0x1e35c4,{'formats':_0x1c14eb});}catch(_0xb4ea8c){if(_0x420fcd['buildEquationDisplay'])try{var _0x132664=_0x420fcd[_0x23d7a7(0x2dc)](_0x1e35c4['equation'],_0x2b9436),_0x4a1105=Object[_0x23d7a7(0x2ce)]({},_0x1e35c4,{'formats':Object[_0x23d7a7(0x2ce)]({'text':_0x132664[_0x23d7a7(0x1cc)],'mathml':_0x132664[_0x23d7a7(0x1c5)]},_0x1e35c4[_0x23d7a7(0x214)]||{})});return _0x4a1105;}catch{}return _0x1e35c4;}}function _0x4c8597(_0x56d747){const _0x494253=_0x5e1ecb,_0x3f3f15=_0x25d179(_0x56d747);if(!_0x3f3f15||!_0x2adc3e(_0x3f3f15['payload'])){_0x56d747[_0x494253(0x21a)]='',_0x56d747['classList'][_0x494253(0x2ae)](_0x110c74['larxc']),_0x56d747[_0x494253(0x2ca)](_0x110c74['EKzOm']),_0x56d747[_0x494253(0x220)]=_0x494253(0x2ad);return;}const _0x492d6c=_0x110c74[_0x494253(0x250)](_0x1ac1bb,_0x56d747,_0x3f3f15['payload']);_0x110c74[_0x494253(0x251)](_0x59beb8,_0x56d747,_0x492d6c),_0x1c6e51(_0x56d747,Object[_0x494253(0x2ce)]({},_0x3f3f15,{'payload':_0x4ea690(_0x3f3f15[_0x494253(0x2a8)],_0x56d747)}));}function _0x48cffb(_0xbdbd79){const _0x272eea=_0x5e1ecb;if(_0xbdbd79[_0x272eea(0x1a7)][_0x272eea(0x224)](_0x110c74[_0x272eea(0x210)])){_0x110c74[_0x272eea(0x267)](_0x4c8597,_0xbdbd79);return;}const _0x59a2c5=_0x25d179(_0xbdbd79);if(!_0x59a2c5){_0xbdbd79['innerHTML']='',_0xbdbd79[_0x272eea(0x1a7)][_0x272eea(0x2d0)](_0x110c74[_0x272eea(0x244)]),_0xbdbd79[_0x272eea(0x2ca)](_0x272eea(0x1a0));return;}const _0x8bdb41=_0x110c74['vukZu'](_0x1ac1bb,_0xbdbd79,_0x59a2c5[_0x272eea(0x2a8)]);_0x59beb8(_0xbdbd79,_0x8bdb41),_0x110c74[_0x272eea(0x1e1)](_0x395bbe,_0xbdbd79,Object[_0x272eea(0x2ce)]({},_0x59a2c5,{'payload':_0xe2a4c(_0x59a2c5[_0x272eea(0x2a8)])}));}function _0x5b9cba(_0x116074){const _0x93b4a=_0x5e1ecb,_0x2d352b=_0x116074?[_0x116074][_0x93b4a(0x2cc)]():[...document[_0x93b4a(0x235)](_0x110c74[_0x93b4a(0x275)]),...document[_0x93b4a(0x235)](_0x110c74[_0x93b4a(0x23e)])];for(const _0x4f082d of _0x2d352b){_0x3fbebd['delete'](_0x4f082d),_0x110c74['NksoM'](_0x48cffb,_0x4f082d);}}function _0x154b1a(){const _0x526864=_0x5e1ecb;if(document['querySelector']('[data-ev-styles]'))return;const _0x139df2=window[_0x526864(0x2df)];if(_0x139df2){const _0x171065=document[_0x526864(0x1f9)](_0x526864(0x218));_0x171065[_0x526864(0x1f6)](_0x526864(0x1e0),'1'),_0x171065[_0x526864(0x220)]=_0x139df2,document['head'][_0x526864(0x241)](_0x171065);return;}const _0x138aed=document[_0x526864(0x1f9)](_0x526864(0x24a));_0x138aed[_0x526864(0x1b4)]=_0x526864(0x276),_0x138aed[_0x526864(0x279)]=new URL(_0x526864(0x295),_0x5b91cc())[_0x526864(0x279)],_0x138aed[_0x526864(0x1f6)](_0x526864(0x1e0),'1'),document[_0x526864(0x215)]['appendChild'](_0x138aed);}function _0x3226cd(){const _0x239978=_0x5e1ecb;_0x154b1a(),_0x110c74[_0x239978(0x20a)](_0x5b9cba);}document[_0x5e1ecb(0x207)]===_0x110c74[_0x5e1ecb(0x25d)]?document[_0x5e1ecb(0x269)](_0x110c74[_0x5e1ecb(0x29d)],_0x3226cd):_0x110c74['giRnI'](_0x3226cd),window[_0x5e1ecb(0x2b7)]={'refresh':_0x5b9cba};}()));
window.dispatchEvent(new CustomEvent('eqn:ready'));
