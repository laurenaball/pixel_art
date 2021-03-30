// Select color input
var color = document.getElementById('colorPicker');
// Select size input
const rows = document.getElementById('inputHeight').value;
const columns = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()
var form = document.getElementById('sizePicker');
form.addEventListener('submit', function(event){
event.preventDefault();
makeGrid(rows, columns)
});

function makeGrid(height, width) {
  var table = document.getElementById('pixelCanvas');
  for (var i = 0; i<height; i++){
    var row = table.insertRow();
    for (var j = 0; j<width; j++){
      var cell = row.insertCell();
      cell.addEventListener('click', function(event){
        event.target.style.backgroundColor = color.value;})
    }
  }
}
