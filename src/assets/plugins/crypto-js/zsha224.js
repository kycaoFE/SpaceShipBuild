(function(root){var exports=undefined,module=undefined,require=undefined;var define=undefined;var self=root,window=root,global=root,globalThis=root;(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_algo=C.algo;var SHA256=C_algo.SHA256;/**
 * SHA-224 hash algorithm.
 */var SHA224=C_algo.SHA224=SHA256.extend({_doReset:function(){this._hash=new WordArray.init([0xc1059ed8,0x367cd507,0x3070dd17,0xf70e5939,0xffc00b31,0x68581511,0x64f98fa7,0xbefa4fa4]);},_doFinalize:function(){var hash=SHA256._doFinalize.call(this);hash.sigBytes-=4;return hash;}});/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA224('message');
 *     var hash = CryptoJS.SHA224(wordArray);
 */C.SHA224=SHA256._createHelper(SHA224);/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA224(message, key);
 */C.HmacSHA224=SHA256._createHmacHelper(SHA224);}).call(root);})(// The environment-specific global.
function(){if(typeof globalThis!=='undefined')return globalThis;if(typeof self!=='undefined')return self;if(typeof window!=='undefined')return window;if(typeof global!=='undefined')return global;if(typeof this!=='undefined')return this;return{};}.call(this));