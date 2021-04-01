// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');


// When size is submitted by the user, call makeGrid(), set rows and columns
// to input values
var form = document.getElementById('sizePicker');
form.addEventListener('submit', function(event){
  event.preventDefault();
  const rows = height.value;
  const columns = width.value;
  makeGrid(rows, columns)
});

// Use input values to create rows for the heights and add width number
// of cells to each row. Adds event listener to each cell to color when 
// clicked
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
