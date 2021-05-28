function newgame(){
	health = 100;
	layer = 1;
	room = 1;
	actionPoint = 3;
}
function refresh(){
	x=document.getElementById("health");
	x.innerHTML="生命 "+health;
	x=document.getElementById("layerAndRoom");
	x.innerHTML="你当前在第"+layer+"层第"+room+"个房间。";
	ap=document.getElementById("actionPoint");
	ap.innerHTML="点击图片执行动作，当前还剩下"+actionPoint+"点行动点";
}
function seartch(){
	console.log("seartch")
}
newgame();
refresh();
