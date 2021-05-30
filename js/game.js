function newgame(){
	health = 100;
	layer = 1;
	room = 1;
	actionPoint = 4;
	药物 = 0;
	金币 = 0;
	攻击力 = 1;
}
function refresh(){
	x=document.getElementById("health");
	x.innerHTML="生命 "+health;
	x=document.getElementById("layerAndRoom");
	x.innerHTML="你当前在第"+layer+"层第"+room+"个房间。";
	ap=document.getElementById("actionPoint");
	ap.innerHTML="点击图片执行动作，当前还剩下"+actionPoint+"点行动点";
}
function hidetext(){
	show=document.getElementById("show");
	show.innerHTML= " ";
}
function showtext(inner){
	show=document.getElementById("show");
	show.innerHTML=inner;
}
function seartch(){
	hidetext();
	if (actionPoint>=3)
	{
		actionPoint=actionPoint-3;
		var searchPoint=Math.floor(Math.random() * 3);	
		if (searchPoint==1)
		{
			药物 = 药物+1;
			showtext("你获得了一个绷带。");
		}
		else if (searchPoint==2)
		{
			金币 = 金币+1;
			showtext("你获得了一个金币。");
		}
		else
		{
			攻击力 = 攻击力+1;
			showtext("你获得了一个武器配件！攻击力+1。");
		}
		refresh();
	}
}
function treat(){
	hidetext();
	if (actionPoint>=2)
	{
		if (药物>=1)
		{
			actionPoint=actionPoint-2;
			药物=药物-1;
			health=health+5;
			showtext("你使用了一个绷带。生命+5。");
		}
		else
		{
			showtext("你没有绷带了！");
		}
		refresh();
	}
}
function 下一个房间(){
	hidetext();
	actionPoint = 4;
	if (room==10)
	{
		layer=layer+1;
		room = 1;
		showtext("你进入了一个新楼层！");
	}
	else
	{
		room=room+1;
		showtext("你进入了一个新房间！");
	}
	refresh();
}
newgame();
refresh();
