// ==UserScript==
// @name         Notion - リンクとボタン枠の視認性改善
// @namespace    https://github.com/securecat/tampermonkey-userscripts
// @version      1.0
// @description  Notion のリンク・メンション・未入力プロパティの薄いグレー文字を濃い青にし、下線を標準の太さに、ボタンブロックの枠を見やすい色にします
// @author       https://github.com/securecat
// @match        https://app.notion.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(`
    /* テーマごとのリンク色 */
    :root,
    .notion-light-theme {
      --tm-notion-link-color: #00118F;
      --tm-notion-button-border-color: #949494;
    }

    .notion-dark-theme {
      --tm-notion-link-color: #99F2FF;
    }

    /*
     * リンク（.notion-link-token）と各種メンション（.notion-text-mention-token）
     * ページメンション・外部オブジェクト・リンクメンション・ユーザー/日付メンションは
     * すべて .notion-text-mention-token を併せ持っている
     */
    .notion-link-token,
    .notion-text-mention-token {
      color: var(--tm-notion-link-color) !important;
    }

    /* 内側の span に付いている半透明・極細下線・薄い下線色を、ブラウザ標準の下線に戻す */
    :is(.notion-link-token, .notion-text-mention-token) span {
      opacity: 1 !important;
      text-decoration-thickness: auto !important;
      text-decoration-color: currentColor !important;
      text-underline-offset: auto !important;
    }

    /* メンションの「@」が 60% の透明度で混ぜられているのを解除 */
    .notion-text-mention-token [style*="currentColor 60%"] {
      color: inherit !important;
    }

    /* ページプロパティの「未入力」（クリックで編集できる値欄） */
    .notion-page-block > [data-popup-origin] [style*="--c-texTer"],
    .notion-page-block > [data-testid="property-value"] [style*="--c-texTer"] {
      color: var(--tm-notion-link-color) !important;
    }

    /* ボタンブロックの枠線 */
    [role="button"][style*="border: 1px solid var(--ca-borPriTra)"] {
      border-color: var(--tm-notion-button-border-color) !important;
    }
  `);
})();
