// ==UserScript==
// @name         TOKYOふたりSTORY - プロフィールと写真を新しいタブで開く
// @namespace    tokyo-futari-story-newtab
// @version      1.5
// @description  プロフィールと写真を新しいタブで開く
// @author       https://github.com/securecat
// @match        https://mypage-tokyo.parms-net.jp/mypr/list*
// @match        https://mypage-tokyo.parms-net.jp/mypr/favorite
// @match        https://mypage-tokyo.parms-net.jp/mypr/detail/*
// @match        https://mypage-tokyo.parms-net.jp/recommend/list
// @match        https://mypage-tokyo.parms-net.jp/contact/list
// @match        https://mypage-tokyo.parms-net.jp/profilebox/*
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

    document.addEventListener('DOMContentLoaded', () => {

        // お気に入り一覧：プロフィールへのリンクを新しいタブで開く
        document.querySelectorAll('a[href*="/mypr/detail/"]').forEach(link => {
            link.target = '_blank';
        });

        // 紹介一覧・お見合い一覧：プロフィールを新しいタブで開く
        document.querySelectorAll('a.win_pop[data-action*="/profilebox/"]').forEach(link => {
            const newLink = link.cloneNode(true);

            newLink.href = link.dataset.action;
            newLink.target = '_blank';
            newLink.classList.remove('win_pop');
            newLink.removeAttribute('onclick');
            newLink.removeAttribute('data-action');

            link.replaceWith(newLink);
        });

        // リンクで包まれていないプロフィール写真：新しいタブで開く
        document.querySelectorAll('img.profile_photo').forEach(img => {
            if (img.parentElement.tagName === 'A') {
                return;
            }

            const link = document.createElement('a');

            link.href = img.src;
            link.target = '_blank';

            img.replaceWith(link);
            link.appendChild(img);
        });

        // ライトボックスのプロフィール写真：ライトボックスを無効にして新しいタブで開く
        document.querySelectorAll('a.boxer img.profile_photo[alt="プライベート写真"]').forEach(img => {
            const oldLink = img.closest('a');
            const newLink = oldLink.cloneNode(true);

            newLink.classList.remove('boxer');
            newLink.target = '_blank';

            oldLink.replaceWith(newLink);
        });

    });

})();
