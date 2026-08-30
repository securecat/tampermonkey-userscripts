// ==UserScript==
// @name         TOKYOふたりSTORY - プロフィールを新しいタブで開く
// @namespace    tokyo-futari-story-newtab
// @version      1.1
// @description  プロフィール詳細を新しいタブで開く
// @author       https://github.com/securecat
// @match        https://mypage-tokyo.parms-net.jp/mypr/list*
// @match        https://mypage-tokyo.parms-net.jp/mypr/favorite
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // 検索結果：フォーム送信でプロフィールを開く場合
    const originalSubmit = HTMLFormElement.prototype.submit;

    HTMLFormElement.prototype.submit = function () {
        if (this.action.includes('/mypr/detail/')) {
            this.target = '_blank';
        }

        return originalSubmit.call(this);
    };

    // お気に入り一覧：プロフィールへのリンクを新しいタブで開く
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a[href*="/mypr/detail/"]').forEach(link => {
            link.target = '_blank';
        });
    });
})();
