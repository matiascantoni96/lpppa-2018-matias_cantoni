console.log("2das");

var play = function () {
  var liAlives = Board.getCells();
   Board.updateCells(liAlives);
}

var init = function () {
  Game.init();
  Game.start();
  }

  //var btnPlay = Board.getPlayButton();
  //btnPlay.onclick = play;

window.onload = init;
