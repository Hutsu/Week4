import "./styles.css";

//document.getElementById("app").innerHTML = `
//<h1>Hello Vanilla!</h1>
//<div>
//  We use Parcel to bundle this sandbox, you can find more info about Parcel
//  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
//</div>
//`;

import "./styles.css";

document.getElementById("board").innerHTML = `
<h1>Tic Tac Toe!</h1>
<h2>PLAYER 1 plays with X</h2>
<h3>PLAYER 2 plays with O </h3>`;

var count = 0;

var timerVar;

var barElem = document.getElementById("myBar");

var width = 0;

var body = document.body,
  table = document.createElement("table");

function createTable() {
  for (var i = 0; i < 5; i++) {
    var tableRow = table.insertRow();
    for (var j = 0; j < 5; j++) {
      if (i === 1 && j === 5) {
        break;
      } else {
        var tableCell = tableRow.insertCell();
        var cellText = document.createTextNode("");
        tableCell.appendChild(cellText);
        if (i === 1 && j === 1) {
          tableCell.setAttribute("rowSpan", "1");
        }
      }
    }
  }
}

createTable();

body.appendChild(table);

onclick(table);

function onclick(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function() {
        innerText(this);
      };
    }
  }
}

function innerText(tableCell) {
  timer();
  stopFunction();
  if (count % 2 === 0) {
    if (tableCell.innerHTML === "") {
      tableCell.style.backgroundColor = "rgb(124, 252, 0)";
      tableCell.innerHTML = "X";
      checkWin(table);
      checkDraw(table);
      barFunction();
      count++;
    } else {
      alert("This cell has already been selected");
    }
  } else {
    if (tableCell.innerHTML === "") {
      tableCell.style.backgroundColor = "rgb(250, 128, 114)";
      tableCell.innerHTML = "O";
      checkWin(table);
      checkDraw(table);
      barFunction();
      count++;
    } else {
      alert("This cell has already been selected");
    }
  }
}

function checkWin(table) {
  var mark = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var row1 = 0;
    var row2 = 0;
    var row3 = 0;
    var row4 = 0;
    var row5 = 0;
    var col1 = 0;
    var col2 = 0;
    var col3 = 0;
    var col4 = 0;
    var col5 = 0;
    var diag1 = 0;
    var diag2 = 0;

    for (var j = 0; j < 5; j++) {
      if (table.rows[0].cells[j].innerHTML === mark[i]) {
        row1++;
      }
      if (table.rows[1].cells[j].innerHTML === mark[i]) {
        row2++;
      }
      if (table.rows[2].cells[j].innerHTML === mark[i]) {
        row3++;
      }
      if (table.rows[3].cells[j].innerHTML === mark[i]) {
        row4++;
      }
      if (table.rows[4].cells[j].innerHTML === mark[i]) {
        row5++;
      }
      if (table.rows[j].cells[0].innerHTML === mark[i]) {
        col1++;
      }
      if (table.rows[j].cells[1].innerHTML === mark[i]) {
        col2++;
      }
      if (table.rows[j].cells[2].innerHTML === mark[i]) {
        col3++;
      }
      if (table.rows[j].cells[3].innerHTML === mark[i]) {
        col4++;
      }
      if (table.rows[j].cells[4].innerHTML === mark[i]) {
        col5++;
      }
      if (table.rows[j].cells[j].innerHTML === mark[i]) {
        diag1++;
      }
      var reduce = 4 - j;
      if (table.rows[j].cells[reduce].innerHTML === mark[i]) {
        diag2++;
      }
    }

    if (
      row1 === 5 ||
      row2 === 5 ||
      row3 === 5 ||
      row4 === 5 ||
      row5 === 5 ||
      col1 === 5 ||
      col2 === 5 ||
      col3 === 5 ||
      col4 === 5 ||
      col5 === 5 ||
      diag1 === 5 ||
      diag2 === 5
    ) {
      if (mark[i] === "X") {
        alert("Player 1 won!");
        clearTable(table);
        count = 1;
      }

      if (mark[i] === "O") {
        alert("Player 2 won!");
        clearTable(table);
        count = 1;
      }
    }
  }
}

function clearTable(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerHTML = "";
    }
  }
  for (var k = 0, row; (row = table.rows[k]); k++) {
    for (var h = 0, col; (col = row.cells[h]); h++) {
      col.style.backgroundColor = "white";
    }
  }
}

function checkDraw(table) {
  var count = 0;
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      if (
        table.rows[i].cells[j].innerHTML === "X" ||
        table.rows[i].cells[j].innerHTML === "O"
      ) {
        count++;
      }
  }
  if (count === 25) {
    alert("It's a draw!");
    clearTable(table);
    count = 0;
  }
}

function resetWidth() {
  width = 0;
  barElem.style.width = width + "%";
  barElem.innerHTML = width + "%";
}
function timer() {
  resetWidth();
  clearInterval(id);
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      resetWidth();
      clearInterval(id);
    } else {
      width++;
      barElem.style.width = width + "%";
      barElem.innerHTML = Math.round(width / 10) + "s";
    }
  }
}
function barFunction() {
  timerVar = setTimeout(timeOut, 10000);
}
function stopFunction() {
  clearTimeout(timerVar);
}
function timeOut() {
  alert("TIMEOUT!");
  timer();
  count++;
}
