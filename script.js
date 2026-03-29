document.addEventListener("DOMContentLoaded", function() {
  const firstRowCells = document.querySelectorAll("tr:first-child td");

firstRowCells.forEach(td => {
  const text = td.textContent;
  const splitText = text.match(/.{1,7}/g); // 7文字ずつ区切る
  if (splitText) {
    td.innerHTML = splitText.join("<br>");
  }
});

const cells = document.querySelectorAll("tr:nth-child(7) td");

cells.forEach((td, index) => {
  if (index === 0) {
    // 1列目
    td.style.textAlign = "center";
    td.style.verticalAlign = "middle";
  } else {
    // 2列目以降
    td.style.textAlign = "left";
    td.style.verticalAlign = "top";
    td.style.paddingLeft = "8px";
  }
});

document.querySelectorAll('.reveal').forEach(el => {
  el.addEventListener('click', function() {
    this.textContent = this.dataset.answer;
  });
});
});
