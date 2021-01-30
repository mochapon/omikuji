'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.1) {
      btn.textContent = '中吉'; // 10%
    } else if (n < 0.4) {
      btn.textContent = '大吉'; // 40%
    } else {
      btn.textContent = '凶'; // 50%
    }
  });

  window.onload = function(){
    const dateObj = new Date();
    const y = dateObj.getFullYear();
    const m = dateObj.getMonth() + 1;
    const d = dateObj.getDate();
    const yb = "日月火水木金土".charAt(dateObj.getDay());
    document.getElementById("currentDate").innerHTML = y+"年"+m+"月"+d+"日("+yb+")";
  }

}