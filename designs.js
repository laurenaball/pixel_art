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
});//?? To clarify, so now I am still running addEventListener on form and
//passing (event = 'submit', function(event)) but now the
//function is a new function that 1. prevents the default and then
//2. calls the makeGrid function (passing it the rows and columns values)

function makeGrid(height, width) {
  var table = document.getElementById('pixelCanvas');
  for (var i = 0; i<height; i++){
    var row = table.insertRow();
    for (var j = 0; j<width; j++){
      var cell = row.insertCell();
      cell.addEventListener('click', colorSquare(cell))//is this right syntax?
    }//It doesn't matter if I write as below, right?:
    //cell.addEventListener('click', function(cell){
    //cell.style.backgroundColor = color.value;}
  }
}

function colorSquare(cell) {
  cell.style.backgroundColor = color.value;
}
