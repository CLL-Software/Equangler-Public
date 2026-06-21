(function () {
  'use strict';
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
  var current = document.currentScript;
  if (current && current.src) {
    Object.defineProperty(window, '__EQN_EMBED_BASE__', {
      value: new URL('.', current.src).href,
      writable: false,
      configurable: false,
      enumerable: false,
    });
  }
})();
function a0_0x18e2(_0x2c9673,_0x470437){_0x2c9673=_0x2c9673-0xbc;var _0x31a9db=a0_0x31a9();var _0x18e2a8=_0x31a9db[_0x2c9673];if(a0_0x18e2['vsZIkA']===undefined){var _0x1c4f78=function(_0x12e551){var _0x4bad23='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x55aebd='',_0x44757b='';for(var _0x2c7b5a=0x0,_0x2e8bf7,_0x1f1d0a,_0x412797=0x0;_0x1f1d0a=_0x12e551['charAt'](_0x412797++);~_0x1f1d0a&&(_0x2e8bf7=_0x2c7b5a%0x4?_0x2e8bf7*0x40+_0x1f1d0a:_0x1f1d0a,_0x2c7b5a++%0x4)?_0x55aebd+=String['fromCharCode'](0xff&_0x2e8bf7>>(-0x2*_0x2c7b5a&0x6)):0x0){_0x1f1d0a=_0x4bad23['indexOf'](_0x1f1d0a);}for(var _0xa64861=0x0,_0x207dff=_0x55aebd['length'];_0xa64861<_0x207dff;_0xa64861++){_0x44757b+='%'+('00'+_0x55aebd['charCodeAt'](_0xa64861)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x44757b);};a0_0x18e2['YTKbPR']=_0x1c4f78,a0_0x18e2['jZDeLI']={},a0_0x18e2['vsZIkA']=!![];}var _0x4fe798=_0x31a9db[0x0],_0x2f1c49=_0x2c9673+_0x4fe798,_0x50dfbc=a0_0x18e2['jZDeLI'][_0x2f1c49];return!_0x50dfbc?(_0x18e2a8=a0_0x18e2['YTKbPR'](_0x18e2a8),a0_0x18e2['jZDeLI'][_0x2f1c49]=_0x18e2a8):_0x18e2a8=_0x50dfbc,_0x18e2a8;}(function(_0x496d00,_0x2fbe21){var _0x4df631=a0_0x18e2,_0x3cfb2b=_0x496d00();while(!![]){try{var _0x45f90e=-parseInt(_0x4df631(0xbd))/0x1+parseInt(_0x4df631(0xbf))/0x2+parseInt(_0x4df631(0xc0))/0x3*(-parseInt(_0x4df631(0xc2))/0x4)+parseInt(_0x4df631(0xc3))/0x5*(parseInt(_0x4df631(0xbe))/0x6)+-parseInt(_0x4df631(0xbc))/0x7*(parseInt(_0x4df631(0xc5))/0x8)+parseInt(_0x4df631(0xc6))/0x9*(-parseInt(_0x4df631(0xc1))/0xa)+parseInt(_0x4df631(0xc7))/0xb*(parseInt(_0x4df631(0xc4))/0xc);if(_0x45f90e===_0x2fbe21)break;else _0x3cfb2b['push'](_0x3cfb2b['shift']());}catch(_0x16f937){_0x3cfb2b['push'](_0x3cfb2b['shift']());}}}(a0_0x31a9,0x6342f),(function(){'use strict';}()));function a0_0x31a9(){var _0x17f55e=['owvjyuPtDq','mZK4nJq4ohHSCuvXqq','n0vYt3rQCG','nJG0ntC5D3DhuMjO','nMnbswv1uq','ntu2otCWuvrXAMno','mte5nJyXmg1ns1LMta','nty5nZq1mfjHDfv2Bq','nfnbzxLruG','mZq0nJKXnvzRuvvevG','nJbYt1bKz0y','ntC2mteXmMXnsevtvq'];a0_0x31a9=function(){return _0x17f55e;};return a0_0x31a9();}
(function(_0x3e951d,_0x18a5c3){var _0x173a76=a0_0x5e8a,_0x43f0e5=_0x3e951d();while(!![]){try{var _0x1f0490=parseInt(_0x173a76(0xe7))/0x1+-parseInt(_0x173a76(0xe9))/0x2*(parseInt(_0x173a76(0xe8))/0x3)+parseInt(_0x173a76(0xd8))/0x4*(parseInt(_0x173a76(0xcd))/0x5)+-parseInt(_0x173a76(0xd1))/0x6*(-parseInt(_0x173a76(0xd6))/0x7)+parseInt(_0x173a76(0xcc))/0x8+-parseInt(_0x173a76(0xe1))/0x9*(-parseInt(_0x173a76(0xe2))/0xa)+-parseInt(_0x173a76(0xdd))/0xb*(parseInt(_0x173a76(0xdb))/0xc);if(_0x1f0490===_0x18a5c3)break;else _0x43f0e5['push'](_0x43f0e5['shift']());}catch(_0x341ea8){_0x43f0e5['push'](_0x43f0e5['shift']());}}}(a0_0x1372,0xefab2),(function(){'use strict';var _0x570272=a0_0x5e8a,_0x1238b6={'JlKnj':function(_0x38c6d9,_0x7f7402){return _0x38c6d9<_0x7f7402;},'CVVDl':function(_0x1bd942,_0x1fc0e5){return _0x1bd942%_0x1fc0e5;},'clwau':function(_0x5684d9,_0x5271f6){return _0x5684d9<_0x5271f6;},'SYBLm':function(_0x3d3250,_0xc51ed5){return _0x3d3250(_0xc51ed5);},'UeBjs':_0x570272(0xd4),'LytGi':_0x570272(0xe0),'oMiRE':_0x570272(0xeb),'MAkaD':_0x570272(0xda)};var _0x5cefa1=_0x1238b6[_0x570272(0xea)],_0x197c23=new TextEncoder()[_0x570272(0xdf)](_0x1238b6[_0x570272(0xce)]);function _0x5cbe2c(_0x46ab46){var _0x1519c6=_0x570272,_0x9bdb9=new Uint8Array(_0x46ab46[_0x1519c6(0xcb)]);for(var _0x133955=0x0;_0x1238b6[_0x1519c6(0xed)](_0x133955,_0x46ab46[_0x1519c6(0xcb)]);_0x133955+=0x1){_0x9bdb9[_0x133955]=_0x46ab46[_0x133955]^_0x197c23[_0x1238b6[_0x1519c6(0xca)](_0x133955,_0x197c23[_0x1519c6(0xcb)])];}return _0x9bdb9;}function _0x1a481f(_0x5019e9){var _0x435b0a=_0x570272,_0x58ccf1='';for(var _0x1dedd7=0x0;_0x1238b6[_0x435b0a(0xdc)](_0x1dedd7,_0x5019e9[_0x435b0a(0xcb)]);_0x1dedd7+=0x1){_0x58ccf1+=String[_0x435b0a(0xd9)](_0x5019e9[_0x1dedd7]);}return _0x1238b6['SYBLm'](btoa,_0x58ccf1);}function _0x3b38b2(_0x78c07c){var _0x9e5e96=_0x570272,_0x40c963=_0x1238b6[_0x9e5e96(0xe4)](atob,_0x78c07c),_0x12ea39=new Uint8Array(_0x40c963[_0x9e5e96(0xcb)]);for(var _0x34d899=0x0;_0x34d899<_0x40c963[_0x9e5e96(0xcb)];_0x34d899+=0x1){_0x12ea39[_0x34d899]=_0x40c963['charCodeAt'](_0x34d899);}return _0x12ea39;}function _0x42473e(_0x241f74){var _0x58cb77=_0x570272,_0xdf0b18=_0x5cbe2c(_0x1238b6[_0x58cb77(0xe4)](_0x3b38b2,_0x241f74[_0x58cb77(0xec)]())),_0x11f2cd=new TextDecoder()[_0x58cb77(0xe5)](_0xdf0b18);return JSON[_0x58cb77(0xe3)](_0x11f2cd);}function _0x558889(_0x23e391){var _0x1fc5c2=_0x570272,_0x322de3=_0x1fc5c2(0xd2)[_0x1fc5c2(0xd7)]('|'),_0x2f18c9=0x0;while(!![]){switch(_0x322de3[_0x2f18c9++]){case'0':var _0x5ced9f=_0x23e391[_0x1fc5c2(0xec)]();continue;case'1':if(!_0x5ced9f)throw new Error(_0x1238b6[_0x1fc5c2(0xe6)]);continue;case'2':if(_0x5ced9f[_0x1fc5c2(0xde)](_0x5cefa1))return _0x42473e(_0x5ced9f[_0x1fc5c2(0xd0)](_0x5cefa1[_0x1fc5c2(0xcb)]));continue;case'3':if(_0x5ced9f[_0x1fc5c2(0xde)]('{'))return JSON[_0x1fc5c2(0xe3)](_0x5ced9f);continue;case'4':throw new Error(_0x1238b6['LytGi']);continue;}break;}}Object[_0x570272(0xd3)](window,_0x570272(0xcf),{'value':Object[_0x570272(0xd5)]({'parseEmbedBody':_0x558889,'PAYLOAD_PREFIX':_0x5cefa1}),'writable':![],'configurable':![],'enumerable':![]});}()));function a0_0x5e8a(_0x3b7454,_0x2eb912){_0x3b7454=_0x3b7454-0xca;var _0x137269=a0_0x1372();var _0x5e8a45=_0x137269[_0x3b7454];if(a0_0x5e8a['CicXdZ']===undefined){var _0xa7715=function(_0x25528a){var _0x57f23d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4d9551='',_0x12b7fb='';for(var _0x5d7ffa=0x0,_0x4bcd55,_0x3b891d,_0xa452f4=0x0;_0x3b891d=_0x25528a['charAt'](_0xa452f4++);~_0x3b891d&&(_0x4bcd55=_0x5d7ffa%0x4?_0x4bcd55*0x40+_0x3b891d:_0x3b891d,_0x5d7ffa++%0x4)?_0x4d9551+=String['fromCharCode'](0xff&_0x4bcd55>>(-0x2*_0x5d7ffa&0x6)):0x0){_0x3b891d=_0x57f23d['indexOf'](_0x3b891d);}for(var _0x4e2a49=0x0,_0x3e408c=_0x4d9551['length'];_0x4e2a49<_0x3e408c;_0x4e2a49++){_0x12b7fb+='%'+('00'+_0x4d9551['charCodeAt'](_0x4e2a49)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x12b7fb);};a0_0x5e8a['rdCtRe']=_0xa7715,a0_0x5e8a['dngzto']={},a0_0x5e8a['CicXdZ']=!![];}var _0x45af57=_0x137269[0x0],_0x50b112=_0x3b7454+_0x45af57,_0x5c62a4=a0_0x5e8a['dngzto'][_0x50b112];return!_0x5c62a4?(_0x5e8a45=a0_0x5e8a['rdCtRe'](_0x5e8a45),a0_0x5e8a['dngzto'][_0x50b112]=_0x5e8a45):_0x5e8a45=_0x5c62a4,_0x5e8a45;}function a0_0x1372(){var _0x1569cc=['vwvcANm','mte4nZaYn3vxqKDMua','m3LssvLyzG','mZe5mZG1nfnSDLHivW','B01PuKu','zxfUx3yXpq','DhjPBq','sMXlBMO','q1zwrgW','BgvUz3rO','mteZnZa5nJbAqKj1u3C','nwjiCLnmsG','tufRyuq','x19fuu5Fuefzte9brf9dt0rfq19F','C2XPy2u','nJu3odCYnfjbuhDkqW','mhWXFdj8m3W0','zgvMAw5LuhjVCgvYDhK','rw1WDhKGzw1IzwqGCgf5Bg9Hza','zNjLzxPL','n2vxv1blzW','C3bSAxq','ndiWmdK2ngXcswPYtW','zNjVBunOyxjdB2rL','rvfolMvTyMvKlNbHEwXVywqUDJe','mtuZotCYz2Lpvgzm','y2X3yxu','mZm3n3vttvzOBq','C3rHCNrZv2L0Aa','zw5JB2rL','vw5YzwnVz25PEMvKigvTyMvKihbHEwXVywqGzM9YBwf0','mtu4nJm3mdzNv3flsxa','mtbnzMrhqLK','CgfYC2u','u1Lctg0','zgvJB2rL'];a0_0x1372=function(){return _0x1569cc;};return a0_0x1372();}
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

(function () {
  'use strict';

  const DEFAULT_COPY_MENU = [
    'text', 'tex', 'mathml', 'excel', 'sheets', 'python', 'csharp', 'javascript',
  ];

  const TABLE_DEFAULT_COPY_MENU = [
    'excel', 'sheets', 'python', 'csharp', 'javascript',
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

  const TABLE_MENU_DEFS = {
    excel: { section: 'Spreadsheet', label: 'Excel table', badge: 'XLS' },
    sheets: { section: 'Spreadsheet', label: 'Google Sheets table', badge: 'GS' },
    python: { section: 'Code', label: 'Python data', badge: 'PY' },
    csharp: { section: 'Code', label: 'C# data', badge: 'C#' },
    javascript: { section: 'Code', label: 'JavaScript data', badge: 'JS' },
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

  const instances = new Map();
  let activeFormats = null;
  let activeCopyMenu = DEFAULT_COPY_MENU;
  let activeMenuDefs = MENU_DEFS;
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
        reference: el.getAttribute('name')
          || el.getAttribute('data-name')
          || payload.reference
          || '',
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

  function buildMenuHtml(copyMenu, menuDefs) {
    const defs = menuDefs || MENU_DEFS;
    const sections = new Map();
    for (const type of copyMenu) {
      const def = defs[type];
      if (!def) continue;
      if (!sections.has(def.section)) sections.set(def.section, []);
      sections.get(def.section).push(type);
    }

    const sectionOrder = ['Notation', 'Spreadsheet', 'Code'];
    const parts = [];

    sectionOrder.forEach((sectionName) => {
      const types = sections.get(sectionName);
      if (!types?.length) return;
      if (parts.length) parts.push('<div class="ev-menu-divider"></div>');
      parts.push(`<div class="ev-menu-section"><div class="ev-menu-label">${sectionName}</div>`);
      for (const type of types) {
        const def = defs[type];
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
      menu.setAttribute('aria-label', 'Copy as');
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
    menu.innerHTML = buildMenuHtml(activeCopyMenu, activeMenuDefs);
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

  function showMenuAtAnchor(anchorEl, clientX, clientY, formats, copyMenu, menuDefs) {
    activeCopyMenu = copyMenu?.length ? copyMenu : DEFAULT_COPY_MENU;
    activeMenuDefs = menuDefs || MENU_DEFS;
    activeFormats = formats;
    menuAnchorEl = anchorEl || null;
    if (menuAnchorEl) menuAnchorEl.setAttribute('aria-expanded', 'true');

    const menu = ensureMenu();
    menu.setAttribute('aria-label', menuDefs === TABLE_MENU_DEFS ? 'Copy table as' : 'Copy equation as');
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

  function showMenu(clientX, clientY, formats, copyMenu, menuDefs) {
    showMenuAtAnchor(null, clientX, clientY, formats, copyMenu, menuDefs);
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
    if (type === 'tex' && !clipboardOutput.includes('\n')) {
      clipboardOutput = ensureTexDelimiters(clipboardOutput);
    }

    try {
      await copyFormat(type, clipboardOutput);
      const label = activeMenuDefs[type]?.label || type;
      announceCopy(`Copied as ${label}.`);
    } catch {
      announceCopy('Copy failed - clipboard unavailable.');
    }
    hideMenu();
  }

  function attachCardMenuHandlers(wrapper, formats, copyMenu, menuDefs) {
    const openMenuFromPointer = (e) => {
      if (e.target.closest('.ev-card-footer')) return;
      e.stopPropagation();
      const menu = document.getElementById('ev-global-menu');
      if (menu && !menu.hidden) {
        hideMenu();
        return;
      }
      showMenuAtAnchor(wrapper, e.clientX, e.clientY, formats, copyMenu, menuDefs);
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
        menuDefs,
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
  }

  function renderTableCard(el, data) {
    el.classList.remove('table_view--placeholder');
    const { payload } = data;
    const formats = payload.formats || {};
    const copyMenu = Array.isArray(payload.copyMenu) ? payload.copyMenu : TABLE_DEFAULT_COPY_MENU;
    const tableHtml = payload.tableDisplayHtml || '';
    const calcError = payload.calcError || '';
    const reference = payload.reference || data.reference || '';

    const cardLabel = reference
      ? `Data table: ${reference}. Click to open copy menu.`
      : 'Data table. Click to open copy menu.';

    const wrapper = document.createElement('div');
    wrapper.className = 'ev-card ev-card--table';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'button');
    wrapper.setAttribute('aria-haspopup', 'menu');
    wrapper.setAttribute('aria-expanded', 'false');
    wrapper.setAttribute('aria-label', cardLabel);
    wrapper.innerHTML = `
      <p class="ev-reference"></p>
      <div class="ev-table-host">${tableHtml || '<p class="ev-table-empty">Empty table</p>'}</div>
      <p class="ev-hint">
        <span>Click to copy</span>
        ${buildHintIcons(copyMenu)}
      </p>
      <p class="ev-card-footer">Equangular Table</p>`;

    wrapper.querySelector('.ev-reference').textContent = reference;

    if (calcError) {
      const err = document.createElement('p');
      err.className = 'ev-calc-error';
      err.setAttribute('role', 'alert');
      err.textContent = calcError;
      wrapper.querySelector('.ev-reference').after(err);
    }

    attachCardMenuHandlers(wrapper, formats, copyMenu, TABLE_MENU_DEFS);

    el.innerHTML = '';
    el.appendChild(wrapper);
    instances.set(el, { data, formats, copyMenu, kind: 'table' });
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
      ? `Equation: ${plainEquation}. ${reference}. Click to open copy menu.`
      : `Equation: ${plainEquation}. Click to open copy menu.`;

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
        <span>Click to copy</span>
        ${buildHintIcons(copyMenu)}
      </p>
      <p class="ev-card-footer">Equangular Equation</p>`;

    wrapper.querySelector('.ev-reference').textContent = reference;

    attachCardMenuHandlers(wrapper, formats, copyMenu, MENU_DEFS);

    el.innerHTML = '';
    el.appendChild(wrapper);
    instances.set(el, { data, formats, copyMenu, kind: 'equation' });
  }

  function escapeAttr(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;');
  }

  function isTablePayload(payload) {
    return payload?.kind === 'table';
  }

  function getCodegen() {
    return window.EqnCodegen || window.EqnTable || null;
  }

  function resolveTableView(el, payload) {
    const fromAttr = el?.getAttribute?.('data-view');
    if (fromAttr === 'formulas' || fromAttr === 'values') return fromAttr;
    if (payload?.embedDisplay === 'formulas') return 'formulas';
    return 'values';
  }

  function expandTablePayload(payload, el) {
    if (!isTablePayload(payload) || payload.formats) return payload;

    var C = getCodegen();
    var tableCanonical = payload.canonical || payload.valuesCanonical || '';
    if (!C || !tableCanonical) return payload;

    var tableName = payload.tableName || 'data';
    var reference = payload.reference || '';
    var description = payload.description || '';
    var exportColumnHeaders = payload.exportColumnHeaders;
    var exportRowNames = payload.exportRowNames;
    if (exportColumnHeaders === undefined && exportRowNames === undefined && payload.labeledExport) {
      exportColumnHeaders = true;
      exportRowNames = true;
    }
    exportColumnHeaders = Boolean(exportColumnHeaders);
    exportRowNames = Boolean(exportRowNames);
    var preview = payload.preview || { mode: 'decimals', digits: 2 };
    var tableView = resolveTableView(el, payload);
    var displayValues = null;
    var valuesGridForFormats = null;
    var calcError = null;

    if (tableView === 'values') {
      var formulaGrid = payload.canonical && C.gridFromCanonical
        ? C.gridFromCanonical(payload.canonical)
        : null;
      var hasFormulaCells = formulaGrid && C.gridUsesFormulas && C.gridUsesFormulas(formulaGrid);

      if (payload.canonical && hasFormulaCells && C.buildEvaluatedDisplayMap) {
        var jsSource = payload.formatOverrides?.javascript || '';
        var evaluated = C.buildEvaluatedDisplayMap(
          payload.canonical,
          preview,
          tableName,
          jsSource,
          {
            exportColumnHeaders: exportColumnHeaders,
            exportRowNames: exportRowNames,
          },
        );
        displayValues = evaluated.map;
        calcError = evaluated.error;
      } else if (payload.displayValues && typeof payload.displayValues === 'object') {
        displayValues = new Map(Object.entries(payload.displayValues));
      } else if (payload.valueCells && C.valuesGridFromValueCells && C.displayMapFromValuesGrid) {
        valuesGridForFormats = C.valuesGridFromValueCells(payload.valueCells);
        var rawFromCells = C.displayMapFromValuesGrid(
          valuesGridForFormats,
          preview,
          payload.valuesCanonical || '',
        );
        displayValues = new Map(Object.entries(rawFromCells));
      } else if (payload.valuesCanonical && C.displayMapFromValuesGrid && C.gridFromCanonical) {
        valuesGridForFormats = C.gridFromCanonical(payload.valuesCanonical);
        var rawDisplay = C.displayMapFromValuesGrid(
          valuesGridForFormats,
          preview,
          payload.valuesCanonical || '',
        );
        displayValues = new Map(Object.entries(rawDisplay));
      }
    }

    var formats = C.buildTableFormats(
      payload.canonical || '',
      tableName,
      payload.valuesCanonical || '',
      valuesGridForFormats,
      reference,
      description,
      exportColumnHeaders,
      exportRowNames,
    );
    if (C.buildTableSpreadsheetClipboardHtml) {
      var clip = C.buildTableSpreadsheetClipboardHtml(
        tableCanonical,
        '',
        { displayValues: tableView === 'values' ? displayValues : null },
      );
      if (clip.excel) formats.excel = clip.excel;
      if (clip.sheets) formats.sheets = clip.sheets;
    }
    if (payload.formatOverrides) {
      // Safety-critical: python/javascript/csharp overrides must match builder preview.
      formats = Object.assign({}, formats, payload.formatOverrides);
    }

    return Object.assign({}, payload, {
      tableDisplayHtml: C.buildWebTableHtml(tableCanonical, '', { displayValues: displayValues }),
      formats: formats,
      calcError: calcError,
    });
  }

  function expandEquationPayload(payload) {
    if (!payload || isTablePayload(payload) || payload.formats) return payload;
    if (!payload.equation) return payload;

    var C = getCodegen();
    if (!C || !C.buildFormats) return payload;

    var reference = payload.reference || 'Equation';
    var description = payload.description || '';
    var build = C.buildEquationExportFormats || C.buildFormats;
    try {
      var formats = build(payload.equation, reference, description);
      if (payload.formatOverrides) {
        // Safety-critical: python/javascript/csharp overrides must match builder preview.
        formats = Object.assign({}, formats, payload.formatOverrides);
      }
      return Object.assign({}, payload, { formats: formats });
    } catch (err) {
      if (C.buildEquationDisplay) {
        try {
          var display = C.buildEquationDisplay(payload.equation, reference);
          var fallback = Object.assign({}, payload, {
            formats: Object.assign({ text: display.text, mathml: display.mathml }, payload.formatOverrides || {}),
          });
          return fallback;
        } catch {
          /* fall through */
        }
      }
      return payload;
    }
  }

  function processTableElement(el) {
    const parsed = parseEmbedDiv(el);
    if (!parsed || !isTablePayload(parsed.payload)) {
      el.innerHTML = '';
      el.classList.add('table_view--placeholder');
      el.removeAttribute('data-style');
      el.textContent = 'Table embed - paste a table above to preview.';
      return;
    }

    const cardStyle = resolveCardStyle(el, parsed.payload);
    applyCardStyle(el, cardStyle);

    renderTableCard(el, Object.assign({}, parsed, {
      payload: expandTablePayload(parsed.payload, el),
    }));
  }

  function processElement(el) {
    if (el.classList.contains('table_view')) {
      processTableElement(el);
      return;
    }

    const parsed = parseEmbedDiv(el);
    if (!parsed) {
      el.innerHTML = '';
      el.classList.remove('equation_view--placeholder');
      el.removeAttribute('data-style');
      return;
    }

    const cardStyle = resolveCardStyle(el, parsed.payload);
    applyCardStyle(el, cardStyle);

    renderCard(el, Object.assign({}, parsed, {
      payload: expandEquationPayload(parsed.payload),
    }));
  }

  function refresh(target) {
    const elements = target
      ? [target].flat()
      : [
        ...document.querySelectorAll('div.equation_view'),
        ...document.querySelectorAll('div.table_view'),
      ];

    for (const el of elements) {
      instances.delete(el);
      processElement(el);
    }
  }

  function injectStylesheet() {
    if (document.querySelector('[data-ev-styles]')) return;
    const inlineCss = window.__EQN_EMBED_CSS__;
    if (inlineCss) {
      const style = document.createElement('style');
      style.setAttribute('data-ev-styles', '1');
      style.textContent = inlineCss;
      document.head.appendChild(style);
      return;
    }
    // Bundled eqn-secure.js always inlines CSS; external link is dev-only fallback.
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

window.dispatchEvent(new CustomEvent('eqn:ready'));
