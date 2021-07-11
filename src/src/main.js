function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


  var cursor = document.getElementById('cursor');
  document.addEventListener('mousemove'
  , function(e){
    var x = e.ClientX;
    var y = e.ClientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
  