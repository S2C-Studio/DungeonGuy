function newgame(){
	health = 100;
	layer = 1;
	room = 1;
	actionPoint = 100;
	bag = new Array();
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
	if (actionPoint>=3)
	{
		actionPoint=actionPoint-3;
		var searchPoint=Math.floor(Math.random() * 3);	
		if (searchPoint==1)
		{
			var length=bag.length;
			bag[length]="绷带";
			show=document.getElementById("show");
			show.innerHTML="你获得了一个绷带。";
		}
		refresh();
	}
}
newgame();
refresh();
