# Tampermonkey Userscripts

[Tampermonkey](https://www.tampermonkey.net/)で使用する個人的なユーザースクリプト集です。誰かの役に立つかもしれないということで公開しておきます。対象サイトのURLやロジックが変更になった等で動作しなくなる可能性があります。自己責任でご利用ください。

## Installation

各 `.user.js` ファイルをダウンロードし、Tampermonkey のダッシュボードからユーザースクリプトとして追加してください。

## Scripts

### 宝くじ公式サイト - 下層メニュー非表示

宝くじ公式サイト `https://www.takarakuji-official.jp/` の左メニューをホバーした時に出る下層メニューが、スマートに閉じる操作が分からないうえに複数が重なって表示されるなどして邪魔でしかないため、これを非表示にします。

[Install / View](./takarakuji-official-hide-subnav.user.js)

### TOKYOふたりSTORY - プロフィールと写真を新しいタブで開く

TOKYOふたりSTORY `https://mypage-tokyo.parms-net.jp/` の検索結果一覧・お気に入り一覧・紹介一覧・お見合い一覧で、プロフィールページのURLを空のタブにコピペする手間を省きます。

[Install / View](./tokyo-futari-story-newtab.user.js)

### TOKYOふたりSTORY - コピペ禁止解除

TOKYOふたりSTORY `https://mypage-tokyo.parms-net.jp/` のコピペ禁止を解除して、待ち合わせの日時や場所の情報をカレンダーに転記しやすくします。

[Install / View](./tokyo-futari-story-copy.user.js)
