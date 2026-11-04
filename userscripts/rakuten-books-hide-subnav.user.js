// ==UserScript==
// @name         楽天ブックス - 下層メニュー非表示
// @namespace    https://github.com/securecat/tampermonkey-userscripts
// @version      1.0
// @description  楽天ブックスのグローバルナビのホバーで表示される下層メニューを非表示にします
// @author       https://github.com/securecat
// @match        https://books.rakuten.co.jp/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const hideSubMenus = () => {
        document.querySelectorAll('#js-subGenre .sub-genre-popup').forEach(el => {
            el.style.setProperty('display', 'none', 'important');
        });
    };

    // DOMが構築された後にも実行
    const observer = new MutationObserver(() => {
        hideSubMenus();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
    });

    hideSubMenus();
})();
