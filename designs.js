// Select color input
var color = document.getElementById('colorPicker');
// Select size input
const columns = document.getElementById('inputHeight').value;
const rows = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()
var form = document.getElementById('sizePicker');
form.addEventListener('submit', makeGrid);


function makeGrid() {
  var table = document.createElement('table')
  for (var i = 0; i<columns; i++){
    var row = table.insertRow();
    for (var j = 0; j<rows; j++){
      var cell = row.insertCell();
      cell.addEventListener('click', colorSquare(cell))
    }
  }
}

function colorSquare(cell) {
  cell.style.backgroundColor = color.value;
}
