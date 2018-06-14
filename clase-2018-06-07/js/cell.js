var Cell = {
  isAlive: false,
  changeColor: function(li) {
    li.style.backgroundColor='#F00'
  },
  toggle: function (evt) {
    var cell= evt.target;
    if (cell.className === 'alive') {
        cell.className='';
    }
    else {
      cell.className='alive';
    }
  }
}
