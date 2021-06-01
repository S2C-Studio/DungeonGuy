function newgame(){
	health = 100;
	layer = 1;
	room = 1;
	actionPoint = 5;
	药物 = 0;
	金币 = 0;
	攻击力 = 1;
	是否战斗中=0;
	beenFight=0;
}
function showFightEnd()
{
	怪物血量=25;
	怪物攻击力=5;
	是否战斗中=1;
	for (;怪物血量>0&&health>0;)
	{
		怪物血量=怪物血量-攻击力;
		health=health-怪物攻击力;
	}
	if (怪物血量>0)
	{
		showtext("游戏结束，刷新以重新开始游戏。");
	}
	else
	{
		showtext("你胜利了！获得了5个金币。");
		金币=金币+5;
		是否战斗中=0;
	}
	beenFight=1;
	refresh();
}
function fighttest()
{
	if (beenFight==0)
	{
	if (room==8)
	{
		if (layer>1)
		{
			是否战斗中=1;
			showtext("你遇到了一个怪物……请等待以查看结果。");
			setTimeout(showFightEnd,3000)
		}
	}
	}
}
function refresh(){
	x=document.getElementById("health");
	x.innerHTML="生命 "+health;
	x=document.getElementById("layerAndRoom");
	x.innerHTML="你当前在第"+layer+"层第"+room+"个房间。";
	ap=document.getElementById("actionPoint");
	ap.innerHTML="点击图片执行动作，当前还剩下"+actionPoint+"点行动点，还有"+金币+"个金币。";
	商店图标=document.getElementById("shopImage");
	if (room==4)
	{
		商店图标.src="img/shop.png";
	}
	else
	{
		商店图标.src="img/noShop.png";
	}
	fighttest()
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
	if (是否战斗中==0)
	{
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
}
function treat(){
	hidetext();
	if (是否战斗中==0)
	{
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
}
function 下一个房间(){
	hidetext();
	if (是否战斗中==0)
	{
	actionPoint = 5;
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
	beenFight=0;
	refresh();
	}
}
function 商店(){
	if (是否战斗中==0)
	{
	if (room==4)
	{
		var random=Math.random();
		if (random>0.5)
		{
			var 商品="稀有武器配件";
		}
		else
		{
			var 商品="绷带";
		}
		if (商品=="稀有武器配件")
		{
			if (金币>=4)
			{
				金币=金币-4;
				showtext("购买稀有武器配件成功。攻击力增加5点。");
				攻击力=攻击力+5;
				console.log(攻击力);
			}
			else
			{
				showtext("金币不足。")
			}
		}
		else if (商品=="绷带")
		{
			if (金币>=3)
			{
				金币=金币-3;
				showtext("购买绷带成功。");
				药物=药物+1;
				console.log(药物);
			}
			else
			{
				showtext("金币不足。")
			}
		}
	else
	{
		showtext("未开放。");
		}
	}
	}
	refresh()
}
function seartchButtonTouch()
{
	if (是否战斗中==0)
	{
		seatchButton=document.getElementById("seartchButton");
		seatchButton.src="img/seartch buttonTouch.png";
	}
}
function seartchButtonLeave()
{
	seatchButton=document.getElementById("seartchButton");
	seatchButton.src="img/seartch button.png";
}
function pillButtonTouch()
{
	if (是否战斗中==0)
	{
		seatchButton=document.getElementById("pillButton");
		seatchButton.src="img/pillTouch.png";
	}
}
function pillButtonLeave()
{
	seatchButton=document.getElementById("pillButton");
	seatchButton.src="img/pill.png";
}
function continueButtonTouch()
{
	if (是否战斗中==0)
	{
		seatchButton=document.getElementById("continue");
		seatchButton.src="img/continueTouch.png";
	}
}
function continueButtonLeave()
{
	seatchButton=document.getElementById("continue");
	seatchButton.src="img/continue.png";
}
function shopButtonTouch()
{
	if (room==4)
	{
		if (是否战斗中==0)
		{
			seatchButton=document.getElementById("shopImage");
			seatchButton.src="img/shopTouch.png";
		}
	}
}
function shopButtonLeave()
{
	seatchButton=document.getElementById("shopImage");
	seatchButton.src="img/shop.png";
}
newgame();
refresh();
