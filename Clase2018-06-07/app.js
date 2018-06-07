console.log('Hello');
var changeColor= function(li) {
  li.style.backgroundColor='#F00';
}
window.onload= function () {
  var btnPlay = document.getElementById('play');
  console.log(btnPlay);
  btnPlay.onclick = function() {

    var liAlives = document.getElementsByClassName('alive')
    for (var i = 0; i < liAlives.length; i++) {
      changeColor(liAlives[i])
    }
  }
}
/*ejecuta todo despues del html */
