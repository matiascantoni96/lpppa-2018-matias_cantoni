console.log("perfdas<");

var play = function () {
  var cells = Board.getCells();
  Board.updateCells(cells)
}
window.onload = function() {/* Se ejecuta luego de que se cargue todo el html */
  Board.createCells();
  var btnPlay = Board.getPlayButton();
  btnPlay.onclick = play;
}
