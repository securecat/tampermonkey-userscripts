// ==UserScript==
// @name         TOKYOふたりSTORY - コピー・右クリック禁止を解除
// @namespace    https://github.com/securecat/tampermonkey-userscripts
// @version      1.0
// @description  テキスト選択、コピー、右クリック等を妨げる処理を解除する
// @author       https://github.com/securecat
// @match        https://mypage-tokyo.parms-net.jp/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // イベントによる操作禁止を解除
    const blockedEvents = [
        'mousedown',
        'contextmenu',
        'selectstart',
        'copy',
        'keydown',
        'keypress',
        'keyup'
    ];

    const stopPropagation = function (event) {
        event.stopPropagation();
    };

    blockedEvents.forEach(type => {
        document.addEventListener(type, stopPropagation, true);
    });

    // CSSによるテキスト選択禁止を解除
    const style = document.createElement('style');

    style.textContent = `
        *,
        *::before,
        *::after {
            user-select: auto !important;
            -webkit-user-select: auto !important;
            -moz-user-select: auto !important;
            -ms-user-select: auto !important;
        }
    `;

    (document.head || document.documentElement).appendChild(style);

})();
