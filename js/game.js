function newgame(){
	health = 100;
	layer = 1;
	room = 1;
}
function refresh(){
	x=document.getElementById("health");
	x.innerHTML="生命 "+health;
	x=document.getElementById("layerAndRoom");
	x.innerHTML="你当前在第"+layer+"层第"+room+"个房间。";
}
newgame()
refresh()