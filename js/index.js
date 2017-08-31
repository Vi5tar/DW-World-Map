var column = 0;
var row = 0;
var selection = "";
var theCodeArray = [];
var outputString = "";

$(document).ready(function() {
  $("#columnCount").html(column);
  $("#rowCount").html(row);
});

function placeGrass() {
  selection = "grassTile2";
  addSelection();
}

function placeTree() {
  selection = "treeTile";
  addSelection();
}

function placeMountain() {
  selection = "mountainTile";
  addSelection();
}

function placeHill() {
  selection = "hillTile";
  addSelection();
}

function placeWater() {
  selection = "waterTile";
  addSelection();
}

function placeTown() {
  selection = "townTile";
  addSelection();
}

function placeNBeach() {
  selection = "nBeachTile";
  addSelection();
}

function placeNWBeach() {
  selection = "nwBeachTile";
  addSelection();
}

function placeCastle() {
  selection = "castleTile";
  addSelection();
}

function placeNWSBeach() {
  selection = "nwsBeachTile";
  addSelection();
}

function placeWBeach() {
  selection = "wBeachTile";
  addSelection();
}

function placeEBeach() {
  selection = "eBeachTile";
  addSelection();
}

function placeSEBeach() {
  selection = "seBeachTile";
  addSelection();
}

function placeSBeach() {
  selection = "sBeachTile";
  addSelection();
}

function placeSwamp() {
  selection = "swampTile";
  addSelection();
}

function placeDesert() {
  selection = "desertTile";
  addSelection();
}

function minusRow() {
  row--;
  $("#rowCount").html(row);
}

function plusRow() {
  row++;
  $("#rowCount").html(row);
}

function minusColumn() {
  column--;
  $("#columnCount").html(column);
}

function plusColumn() {
  column++;
  $("#columnCount").html(column);
}

function matchRow() {
  column = row;
  $("#columnCount").html(column);
}

function addSelection() {
  theCodeArray.push('<div id="pos' + row + '-' + column + '" class="' + selection + '"></div>');
  writeToText();
}

function writeToText() {
  for (var i = 0; i < theCodeArray.length; i++) {
    outputString += theCodeArray[i];
    outputString += "\n";
  }
  document.getElementById("txt1").value = outputString;
  column++
  $("#columnCount").html(column);
  outputString = "";
}

function undo() {
  theCodeArray.pop();
  writeToText();
  column -= 2;
  $("#columnCount").html(column);
}

function clearCode() {
  theCodeArray = [];
  outputString = "";
  document.getElementById("txt1").value = "";
}
