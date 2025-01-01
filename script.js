// ボタンの要素を取得
const backToTopButton = document.getElementById("page_top_btn");

// ボタンの表示・非表示を制御する関数
function toggleBackToTopButton() {
  const scrollTop = window.scrollY;
  const isScrollable = document.documentElement.scrollHeight > window.innerHeight;

  if (scrollTop === 0 || !isScrollable) {
    backToTopButton.style.display = "none";  // 最上位またはスクロール不要時は非表示
  } else {
    backToTopButton.style.display = "block"; // それ以外の時に表示
  }
}

// スクロール時と画面サイズ変更時に表示を切り替え
window.onscroll = toggleBackToTopButton;
window.onresize = toggleBackToTopButton;

// 初回読み込み時にチェック
toggleBackToTopButton();
