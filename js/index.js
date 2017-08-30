var column = 0;
var row = 0;
var selection = "";
var theCodeArray = [];
var outputString = "";

function placeGrass() {
  selection = "grassTile2";
  writeSelection();
}

function placeTree() {
  selection = "treeTile";
  writeSelection();
}

function placeMountain() {
  selection = "mountainTile";
  writeSelection();
}

function writeSelection() {
  theCodeArray.push('<div id="pos' + row + '-' + column + '" class="' + selection + '"></div>');
  for (var i = 0; i < theCodeArray.length; i++) {
    outputString += theCodeArray[i];
    outputString += "\n";
  }
  document.getElementById("txt1").value = outputString;
  column++
  outputString = "";
}
