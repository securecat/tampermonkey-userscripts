// ==UserScript==
// @name         宝くじ公式サイト - 下層メニュー非表示
// @namespace    https://github.com/securecat/tampermonkey-userscripts
// @version      1.0
// @description  宝くじ公式サイトのグローバルナビのホバーで出る下層メニューを非表示にします
// @author       https://github.com/securecat
// @match        https://www.takarakuji-official.jp/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .l_globalNav_sub {
            display: none !important;
        }
    `);
})();
