const quiz = [
  {
    question: "歴代のゲーム機で最も売れたのはどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  }, {
    question: "2023年にリリースされたゼルダシリーズのタイトルは？",
    answers: [
      "ゼルダの伝説 ブレス オブ ザ ワイルド",
      "ゼルダの伝説 スカイウォードソード",
      "ゼルダの伝説 ティアーズ オブ ザ キングダム",
      "ゼルダの伝説 時のオカリナ"
    ],
    correct: "ゼルダの伝説 ティアーズ オブ ザ キングダム"
  }, {
    question: "初代ポケットモンスター（赤・緑）で、最初に選べるポケモンではないのは？",
    answers: [
      "フシギダネ",
      "ヒトカゲ",
      "ゼニガメ",
      "ピカチュウ"
    ],
    correct: "ピカチュウ"
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuize = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuize();

//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuize();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "点です！");
  }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
  clickHandler(e);
  });
  handlerIndex++;
}