function changeBulbImage() {
  var img = document.getElementById('bulbImg');
  if (img.src.match('boff.jpg')) {
      img.src = 'bon.jpg';
  } else {
      img.src = 'boff.jpg';
  }
}
