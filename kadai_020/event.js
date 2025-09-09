// id="btn" のボタン要素を取得
const btn = document.getElementById('btn');

// id="text"の h2　要素を取得
const text = document.getElementById('text');

//ボタンがクリックされたときの処理を登録
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});