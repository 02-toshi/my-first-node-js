'use strict';
// number という定数に、process.argv[2] の値を代入
// process.argv は Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列
// なぜ添字として 2 番を使っているかというと、0 番には node コマンドのファイルのパスが入り、
// 1 番には実行しているプログラムのファイルのパスが入る、という決まりがあるため
// コマンドの後ろに書いた最初の引数は process.argv[2]
// ここでは与えられた引数がfalsyであれば0を代入し、truthyな引数であればそれをnumberに代入するということをしている
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 0; i<= number; i++) {
    sum = sum + i;
}
console.log(sum);