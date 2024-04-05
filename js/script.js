document.getElementById('changeBackgroundButton').addEventListener('click', function() {
     var currentColor = document.body.style.backgroundColor;
     var newColor = getRandomColor();
 
     while (newColor === currentColor) {
         newColor = getRandomColor();
     }
 
     document.body.style.backgroundColor = newColor;
 });
 
 function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
 }
 