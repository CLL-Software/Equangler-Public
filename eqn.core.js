(function () {
  'use strict';

  var PAYLOAD_PREFIX = 'eqn_v1=';
  var KEY_BYTES = new TextEncoder().encode('EQN.embed.payload.v1');

  function xorBytes(bytes) {
    var out = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i += 1) {
      out[i] = bytes[i] ^ KEY_BYTES[i % KEY_BYTES.length];
    }
    return out;
  }

  function bytesToBase64(bytes) {
    var binary = '';
    for (var i = 0; i < bytes.length; i += 1) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  function base64ToBytes(b64) {
    var binary = atob(b64);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  function decodePayload(encoded) {
    var bytes = xorBytes(base64ToBytes(encoded.trim()));
    var json = new TextDecoder().decode(bytes);
    return JSON.parse(json);
  }

  function parseEmbedBody(body) {
    var trimmed = body.trim();
    if (!trimmed) throw new Error('Empty embed payload');

    if (trimmed.startsWith(PAYLOAD_PREFIX)) {
      return decodePayload(trimmed.slice(PAYLOAD_PREFIX.length));
    }

    if (trimmed.startsWith('{')) {
      return JSON.parse(trimmed);
    }

    throw new Error('Unrecognized embed payload format');
  }

  Object.defineProperty(window, '__EQN_PAYLOAD_CODEC__', {
    value: Object.freeze({ parseEmbedBody, PAYLOAD_PREFIX }),
    writable: false,
    configurable: false,
    enumerable: false,
  });
})();
