var canvas = document.getElementById('jogo');
var context = canvas.getContext('2d');

var player = new Image()
player.src = '../img/mecas/mecaLaranja.png'

player.onload = function(){
    context.drawImage(player, 50,50,80,100);
}