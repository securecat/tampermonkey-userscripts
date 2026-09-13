// ==UserScript==
// @name         楽天ブックス - 下層メニュー非表示
// @namespace    https://github.com/securecat/tampermonkey-userscripts
// @version      1.0
// @description  楽天ブックスのグローバルナビのホバーで表示される下層メニューを非表示にします
// @author       https://github.com/securecat
// @match        https://books.rakuten.co.jp/search*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .sub-genre-popup {
            display: none !important;
        }
    `);
})();
