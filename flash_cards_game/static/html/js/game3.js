function init() {
	var stage = new createjs.Stage("game");
	var canvas = document.getElementById("game");
	var scale = screen.width/window.innerWidth;
	var cw = canvas.width  = window.innerWidth//*scale;
	var ch = canvas.height = window.innerHeight//*scale;
	if (cw < 880) cw = canvas.width = 880;
	if (ch < 660) ch = canvas.height = 660;
	//создаем переменные
	var back = new createjs.Shape();//оси координат
	var line = new createjs.Shape(), ex_line = new createjs.Shape();//график
	var limit = new createjs.Shape();//пределы отрисовки графика
	var vx = 0,bd = 0,fx,vy = 0,alMax;
	var corx = new createjs.Text("x", "15px Verdana", "white");var cory = new createjs.Text("y", "15px Verdana", "white");
	var corsx=[],corsy=[],corsix=[],corsiy=[];
	var ufo = [];//картинки
	ufo[0] = new createjs.Bitmap("assets/UFO_1_.png");
	ufo[1] = new createjs.Bitmap("assets/UFO_2_.png");
	ufo[2] = new createjs.Bitmap("assets/UFO_3_.png");
	var blue_but = new createjs.Bitmap("assets/button_blue.png"),red_but = new createjs.Bitmap("assets/button_red.png"),green_but = new createjs.Bitmap("assets/button_green.png");
	var bang = new createjs.Bitmap("assets/bang.png"), ruins = new createjs.Bitmap("assets/city_fire.png"), city = new createjs.Bitmap("assets/city.png");
	var quest = new createjs.Bitmap("assets/quest.png");
	var aliens = [], cities = [], cityNum = 0, alTides = [], alCounts = [], marked = [];
	var cls = [],clst = [];//функции и их текст
	var d=1,dx=0,dy=0,lvl=0,seq=0,eq=0,alNum=0,td=0,steps=0,qsteps = 0,fd=0,ex_line_active = 0;
	var fun = [], sn = Math.floor((cw/1366 + ch/667)/2 * 30);
	var time = new createjs.Shape(), timer = new createjs.Shape();//таймер
	var date = new Date();
	var sc = 0,score = new createjs.Text("Очки: "+sc, "28px sans-serif", "black"), level = 1, level_text = new createjs.Text("Уровень: "+level+"/25", "28px sans-serif", "black");

	sn = 30;

	//отметки на осях
	while ((ch/2)+d*sn<ch-25) d++;
	dy = d-1; d=1;
	while ((cw/2+100)+d*sn<cw-50) d++;
	dx=d-1; d=1;
	var back_ground = new createjs.Shape(), back_ = new createjs.Bitmap("assets/back.png"), back_earth = new createjs.Bitmap("assets/earth.png"), back_moon = new createjs.Bitmap("assets/moon.png");
	back_ground.graphics.f("lavender").dr(0,0,cw,ch);
	back_.x = cw/2 + 100 - dx*sn; back_.y = ch/2 - dy*sn;
	back_.scaleX = 2*dx*sn/1900; back_.scaleY = 2*dy*sn/1300;
	back_earth.scaleX = back_earth.scaleY = 2*dx*sn/1900;
	back_earth.x = cw/2+100-dx*sn; back_earth.y = ch/2+dy*sn-255*back_earth.scaleY;
	back_moon.scaleX = back_moon.scaleY = 3*sn/120;
	back_moon.x = cw/2+100-(dx-2)*sn; back_moon.y = ch/2-4*sn;
	if (back_moon.y < ch/2+dy*sn-255*back_earth.scaleY-sn*27) back_moon.y = ch/2+dy*sn-255*back_earth.scaleY-sn*24;

	stage.addChild(back_ground,back_,back_earth,back_moon);

	while ((cw/2+100)+d*sn<cw-50) {
		back.graphics.beginStroke("white").moveTo((cw/2+100)+d*sn,ch/2-3).lineTo((cw/2+100)+d*sn,ch/2+3);//350
		back.graphics.beginStroke("white").moveTo((cw/2+100)-d*sn,ch/2-3).lineTo((cw/2+100)-d*sn,ch/2+3);//350
		back.graphics.beginStroke("grey").moveTo((cw/2+100)+d*sn,ch/2-dy*sn).lineTo((cw/2+100)+d*sn,ch/2+dy*sn);
		back.graphics.beginStroke("grey").moveTo((cw/2+100)-d*sn,ch/2-dy*sn).lineTo((cw/2+100)-d*sn,ch/2+dy*sn);
		corsx[d-1] = new createjs.Text(d, "10px Arial", "white");corsx[d-1].x=(cw/2+100)+d*sn-5;corsx[d-1].y=ch/2+5;
		corsix[d-1] = new createjs.Text(-d, "10px Arial", "white");corsix[d-1].x=(cw/2+100)-d*sn+5;corsix[d-1].y=ch/2+5;
		corsx[d-1].textAlign = "right";
		stage.addChild(corsx[d-1],corsix[d-1]);
		d++;
	} dx=d-1;d=1;

	while ((ch/2)+d*sn<ch-25) {
		back.graphics.beginStroke("grey").moveTo(cw/2+100-dx*sn,(ch/2)+d*sn).lineTo(cw/2+100+dx*sn,(ch/2)+d*sn);
		back.graphics.beginStroke("grey").moveTo(cw/2+100-dx*sn,(ch/2)-d*sn).lineTo(cw/2+100+dx*sn,(ch/2)-d*sn);
		back.graphics.beginStroke("white").moveTo(cw/2+97,(ch/2)+d*sn).lineTo(cw/2+103,(ch/2)+d*sn);//dx*sn
		back.graphics.beginStroke("white").moveTo(cw/2+97,(ch/2)-d*sn).lineTo(cw/2+103,(ch/2)-d*sn);//dx*sn
		corsy[d-1] = new createjs.Text(d, "10px Arial", "white");corsy[d-1].x=cw/2+105;corsy[d-1].y=(ch/2)-d*sn;
		corsiy[d-1] = new createjs.Text(-d, "10px Arial", "white");corsiy[d-1].x=cw/2+105;corsiy[d-1].y=(ch/2)+d*sn-15;
		stage.addChild(corsy[d-1],corsiy[d-1]);
		d++;
	} dy=d-1;

	//оси координат
	back.graphics.beginStroke("white").moveTo(cw/2+100-dx*sn,ch/2).lineTo(cw/2+100+dx*sn,ch/2);
	back.graphics.beginStroke("white").moveTo(cw/2+100,ch/2+dy*sn).lineTo(cw/2+100,ch/2-dy*sn);
	back.graphics.beginStroke("white").moveTo(cw/2+95,ch/2-dy*sn+10).lineTo(cw/2+100,ch/2-dy*sn).lineTo(cw/2+105,ch/2-dy*sn+10);
	back.graphics.beginStroke("white").moveTo(cw/2+100+dx*sn-10,ch/2-5).lineTo(cw/2+100+dx*sn,ch/2).lineTo(cw/2+100+dx*sn-10,ch/2+5);
	back.alpha = 0.3;

	score.x = 20; score.y = 370;
	level_text.x = 20; level_text.y = 520;
	corx.textAlign = cory.textAlign = "center"; corx.textBaseline = cory.textBaseline = "middle";
	cory.x = cw/2+100-sn/2; cory.y = ch/2-dy*sn+sn/2; corx.x = cw/2+100+dx*sn-sn/2; corx.y = ch/2-sn/2;

	//блокирующая область для функций типа гиперболы
	limit.graphics.f("#f2f2fc").dr(cw/2+100-dx*sn,0,2*dx*sn,ch/2-dy*sn)
	.dr(cw/2+100-dx*sn,ch/2+dy*sn,2*dx*sn,ch/2-dy*sn);

	back_ground.alpha = 0.51;
	limit.alpha = 1;

	stage.addChild(limit,back,corx,cory);

	//кнопка OK
	var zone = new createjs.Shape(),change = new createjs.Bitmap("assets/ok.png"),act = 0,inst = 0;
	zone.graphics.beginFill("#000").drawRect(0,0,180,40);
	change.hitArea = zone;
	change.x = 10; change.y = ch-50;

	change.on("click", function() {
		if ( cityNum >= 6 || level > 25 ) {all_clear();} else {clear_fun();}
		stage.removeChild(change);
		stage.addChild(time,timer);
	});

	function takeText() {
		return "Технологическое превосходство пришельцев давало о себе знать. У\nОбъединенной Армии Земли практически не было шансов победить.\nОднако, благодаря затянувшейся войне на фронте, землянам хватило\nвремени, чтобы разобраться с устройством маяка. Оказалось, что\nКвантовый Лазерный Телепортатор можно было использовать как\nлазерную пушку огромной мощности. Благодаря этой находке чаша весов\nсклонилась в сторону землян, и мы почти полностью отразили вторжение.\nТеперь нам осталось лишь добить инопланетян. Но управление маяком\nпришельцев оказалось довольно трудным. Луч часто двигался по\nхаотичной траектории. Поэтому спасение Земли зависит только от Вас.\n\n\nСможете ли Вы вспомнить школьные математические формулы и спасти\nмир? Уничтожьте остатки вторженцев, пользуясь пушкой грамотно, ибо\nкаждый промах является потенциально опасным для городов.";
	}

	//окно обучения
	var fin = new createjs.Shape();
	fin.graphics.beginStroke("darkslategrey").f("lavender").dr(0,0,500,350);
	fin.x = cw / 2 - fin.graphics.command.w / 2;
	fin.y = ch / 2 - fin.graphics.command.h / 2;
	var finCount = new createjs.Text("", "20px Verdana", "slategrey");
	var meetext = new createjs.Text("", "14px Arial","black");
	meetext.text = takeText();
	meetext.textAlign = finCount.textAlign = "center"; finCount.textBaseline = "center";
	finCount.x = cw/2; finCount.y = fin.y + 30;
	meetext.x = cw/2; meetext.y = fin.y + 14;

	//область для очков и жизней
	var scoremenu = new createjs.Shape();
	scoremenu.graphics.beginStroke("grey").f("lavender").dr(10,360,210,210);

	stage.addChild(line,time,timer,scoremenu,score, level_text);

	//города
	for (var i = 0; i < 6-cityNum; i++) {
		cities[i] = new createjs.Bitmap("assets/city.png");
		cities[i].x = 20 + (i%3)*60; cities[i].y = 420 + Math.floor(i/3)*50;//x=...2*sn -60-; y=...(5*sn/3) -50-
		//cities[i].scaleX = cities[i].scaleY = sn/128;
		stage.addChild(cities[i]);
	}

	//таймер
	time.graphics.beginStroke("black").f("green").dr(10,ch-45,180,30);
	timer.graphics.f("lavender").dr(190,ch-45,0,30);

	//кнопки для окна обучения
	zone = null; zone = new createjs.Shape();
	zone.graphics.beginFill("#000").drawRect(0,0,40,40); 
	quest.hitArea = zone;
	//quest.scaleX = quest.scaleY = 30/sn;
	quest.x = 200; quest.y = ch-50;

	quest.on("click",function() {
		if (inst === 0) {
			stage.addChild(fin,finOk,meetext);
			inst = 1;
		}
		else if (inst === 1) {
			stage.removeChild(fin,meetext,finOk);
			inst = 0;
		}
	});

	stage.addChild(quest);

	//создание табличек функций и их инопланетян
	for (var i = 0;i<4;i++) {
		//создание табличек функций и текста
		cls[i] = new createjs.Bitmap("assets/button_blue.png");
		zone = null; zone = new createjs.Shape();
		zone.graphics.beginFill("#000").drawRect(0,0,246,50); 
		cls[i].hitArea = zone;
		cls[i].x = 5; cls[i].y = 80*i+25;//cls[i].graphics.beginStroke("black").f("azure").dr(10,80*i+10,205,50);
		cls[i].num = i;
		clst[i] = new createjs.Text("y = x", "italic 25px sans-serif", "black");
		clst[i].x=25; clst[i].y=80*i+35;
		stage.addChild(cls[i], clst[i]);
		//создание окошек с инопланетянами
		alTides[i] = new createjs.Bitmap("assets/alien.png");
		alTides[i].scaleX = alTides[i].scaleY = 30/sn;
		alTides[i].x = 209; alTides[i].y = 80*i+35;
		stage.addChild(alTides[i]);
		alCounts[i] = new createjs.Text("0", "25px sans-serif", "black"); alCounts[i].textAlign = "center";
		alCounts[i].x = alTides[i].x+15; alCounts[i].y = alTides[i].y;
	}

	zone = null; zone = new createjs.Shape();
	zone.graphics.f("black").dr(0,0,180,40);
	var finOk = new createjs.Bitmap("assets/ok.png"); 
	finOk.hitArea = zone;
	finOk.x = cw/2-90; finOk.y = fin.y + fin.graphics.command.h - 56;
	finOk.on("click",function() {
		if (inst === 1) {
			stage.removeChild(fin,meetext,finOk);
			inst = 0;
		} else
		if (inst === 2) {
			inst = 0;
			all_again();
		}
	});

	//функция, которая все обновляет
	function clear_fun() {
		//обнуляем и создаем заново инопланетян и график
		stage.removeChild(line);
		line = null;
		line = new createjs.Shape();
		for (var j = 0;j<alNum;j++)
			stage.removeChild(aliens[j]);
		alNum = Rand(dy/4+dx/4,dx*3/4+dy*3/4)*1.175;
		alMax = 0;
		aliens = null;
		aliens = [];
		stage.update();

		//проверка по уровням
		if (level > 5) lvl = 1; else lvl = 0;
		if (level > 10) lvl = 2;
		if (level > 15) lvl = 3;
		for (var i = 0;i<4;i++) { 
			if (lvl === 1) {cls[i].lvl = Math.floor(Math.random()*4); if (cls[i].lvl > 0) cls[i].lvl = 1; else cls[i].lvl = 0; } else
			if (lvl === 2) {cls[i].lvl = Rand(0,10); if (cls[i].lvl > 6) cls[i].lvl = 2; else cls[i].lvl = 1;} else
			if (lvl > 2) {cls[i].lvl = Math.floor(Math.random()*100); if (cls[i].lvl >= 60) cls[i].lvl = 1; else if (cls[i].lvl >= 30) cls[i].lvl = 2; else cls[i].lvl = 3; } else cls[i].lvl = lvl;
			cls[i].al = 0; cls[i].chosen = 0;

			cls[i].image = blue_but.image; stage.update();
			stage.removeChild(alCounts[i]);
			stage.addChild(alTides[i]);

			//создание новых функций
			seq = 1;
			while (seq!=0) {
				seq = 0;
				cls[i].fun = Fun(cls[i].lvl,dx,dy);
				cls[i].decs = Decs(cls[i].lvl,cls[i].fun);
				for (var j=0;j<i;j++)
					if (cls[i].decs === cls[j].decs) seq = 1;
			}
			if (cls[i].lvl === 3 && cls[i].fun[0] === 0 && cls[i].fun[1] === 0) {cls[i].fun[2] = 0; cls[i].fun[1] = 1;}
			clst[i].text = cls[i].decs;		
		}


		//создание новых инопланетян
		for (var i=0;i<alNum;i++) {
			aliens[i] = new createjs.Bitmap("assets/UFO_1_.png");
			seq = Rand(0,2);
			aliens[i].image = ufo[seq].image;
			aliens[i].scaleX = aliens[i].scaleY = sn/30;
			aliens[i].exp = 0;

			eq = 1;
			steps = qsteps = 0;
			//ограничение на количество шагов
			while (eq!=0 && qsteps<8000) {
				eq = steps = 0;
				fd = aliens[i].fun = Math.floor(Rand(0,90)/20);
				seq = 1;
				//вторичное ограничение на кол-во шагов
				while (seq!=0 && steps<200) {
					seq = 0;
					aliens[i].x = Rand(-dx+1,dx-1);

					if (fd < 4) {
						if (cls[fd].lvl === 3 && Math.abs( cls[fd].fun[1] / cls[fd].fun[0] ) === aliens[i].x) seq = 1;
						aliens[i].y = Calc(aliens[i].x, cls[fd].lvl, cls[fd].fun, sn);
					} else 
						aliens[i].y = ch/2 - Rand((-dy+1)*sn,(dy-1)*sn);

					aliens[i].x = aliens[i].x*sn + cw/2 + 100 - sn/2;
					aliens[i].y = aliens[i].y - sn/2; 

					if ( aliens[i].y + sn > ch/2 + dy*sn || aliens[i].y - sn/2 < ch/2 - dy*sn ) seq = 1;
					for (var j = 0; j < i; j++)
						if (Math.abs(aliens[j].x - aliens[i].x) < sn && Math.abs(aliens[j].y - aliens[i].y) < sn) seq = 1;

					steps++;
					qsteps++;
				}
				if (steps >= 200) eq = 1;
			}
			//долго, да? ))
			//проверка на принадлежность инопланетянина к функциям
			if (qsteps >= 8000) {aliens[i] = null;alNum = i;} else {
				stage.addChild(aliens[i]);
				for (var j = 0; j < 4; j++) {
					d = (aliens[i].x - cw/2 - 100)/sn;
					while (d <= (aliens[i].x + sn - cw/2 - 100)/sn) {
						if (Math.abs(Calc(d, cls[j].lvl, cls[j].fun, sn) - aliens[i].y - sn/2) < sn/2 && aliens[i].exp === 0 ) {
							cls[j].al++;
							aliens[i].exp = 1;
						}
						d+=0.01;
					}
					aliens[i].exp = 0;
					if (cls[j].al > cls[alMax].al) alMax = j;
				}
			}
		}
		if (inst === 1) {
			stage.removeChild(fin,finOk,meetext);
			stage.addChild(fin,finOk,meetext);
		}
		date = null; date = new Date(); date.setSeconds(date.getSeconds() + 30);
		td = bd = timer.graphics.command.w = 0; //обнуляем таймер
		stage.update();
	}	

	//функция для объявления счета и обновления экрана
	function total(num) {
		td = bd = 1;
		level++; if (level < 26) level_text.text = "Уровень: "+level+"/25";
		if (num === -1) {cityNum++; cities[6-cityNum].image = ruins.image;}
		for (var k = 0; k<4; k++) {
			alCounts[k].text = cls[k].al;
			stage.removeChild(alTides[k]);
			stage.addChild(alCounts[k]);
			if (num === k && cls[k].al >= cls[alMax].al) {cls[k].image = green_but.image;} else {
				if (num === k) {cls[k].image = red_but.image; cityNum++; cities[6-cityNum].image = ruins.image;}
				if (cls[k].al >= cls[alMax].al) {cls[k].image = green_but.image;}
			}
		}
		stage.removeChild(time,timer);
		stage.addChild(change);
	};

	//события для каждой функции
	for (var i = 0; i<4;i++) {
		/*cls[i].on("mousedown",function(e){
			if (bd === 0) {
				e.target.graphics._fill.style = "gainsboro";stage.update();
			}
		})
		cls[i].on("pressup",function(e){
			if (e.target.graphics._fill.style === "gainsboro") {
				e.target.graphics._fill.style = "azure"; stage.update();
			}
		})*/
		cls[i].on("click",function(e){
			if (bd === 1 && e.target.chosen === 0 && ex_line_active === 0) {
			e.target.chosen = ex_line_active = 1;
			ex_line.alpha = 0.5;
			vx = -dx;
			stage.addChild(ex_line,line);
			stage.removeChild(limit,back,cory);
			stage.addChild(limit,back,cory);
			fx = Math.abs(e.target.fun[1]/e.target.fun[0]);
			while(vx <= dx && vx >= -dx-1) {
				if (e.target.lvl === 3) {
					if (fx >= vx-0.01 && fx <= vx+0.01 || -fx >= vx-0.01 && -fx <= vx+0.01) vx+=0.01;
				}
				ex_line.graphics.beginStroke("lightseagreen").setStrokeStyle(2)
				.moveTo(cw/2 + 100 + vx*sn, Calc(vx, e.target.lvl, e.target.fun, sn))
				.lineTo(cw/2+100+(vx+0.01)*sn, Calc(vx+0.01, e.target.lvl, e.target.fun, sn));
			
				vx+=0.01;
			}
			for (var j = 0; j < alNum; j++) {
				stage.removeChild(aliens[j]);
				stage.addChild(aliens[j]);
			}
			if (inst === 1) { //если окно обучения активно:
				stage.removeChild(fin,finOk,meetext);
				stage.addChild(fin,finOk,meetext);
			}
			stage.update();
			setTimeout(function() {stage.removeChild(ex_line); ex_line = new createjs.Shape(); ex_line_active = e.target.chosen = 0; stage.update();},1550);
			}

			if (bd === 0) {
			e.target.chosen = td = bd = 1;
			vx = -dx;
			stage.addChild(line);
			stage.removeChild(limit,back,cory);
			stage.addChild(limit,back,cory);

			fx = Math.abs(e.target.fun[1]/e.target.fun[0]);
			//рисуем график
			while(vx <= dx && vx >= -dx-1) {
				if (e.target.lvl === 3) {
					if (fx >= vx-0.01 && fx <= vx+0.01 || -fx >= vx-0.01 && -fx <= vx+0.01) vx+=0.01;
				}
				line.graphics.beginStroke("red").setStrokeStyle(2)
				.moveTo(cw/2 + 100 + vx*sn, Calc(vx, e.target.lvl, e.target.fun, sn))
				.lineTo(cw/2+100+(vx+0.01)*sn, Calc(vx+0.01, e.target.lvl, e.target.fun, sn));
			
				vx+=0.01;
			}

			//проверка на принадлежность инопланетян к функции
			for (var j = 0; j < alNum; j++) {
				stage.removeChild(aliens[j]);
				stage.addChild(aliens[j]);
				d = (aliens[j].x - cw/2 - 100)/sn;
				while (d <= (aliens[j].x + sn - cw/2 - 100)/sn) {

					/*line.graphics.beginStroke("green").setStrokeStyle(sn)
					.moveTo(cw/2 + 100 + d*sn, aliens[j].y+sn/2)
					.lineTo(cw/2+100+(d+0.01)*sn, aliens[j].y+sn/2);*/

					if (Math.abs(Calc(d, e.target.lvl, e.target.fun, sn) - aliens[j].y - sn/2) < sn/2 && aliens[j].exp === 0 ) {
						aliens[j].exp = 1;
						aliens[j].image = bang.image;
						aliens[j].scaleX = aliens[j].scaleY = sn/30;
						aliens[j].x -= 5; aliens[j].y -= 5;
					}

					d+=0.01;
				}
			}
			if (inst === 1) { //если окно обучения активно:
				stage.removeChild(fin,finOk,meetext);
				stage.addChild(fin,finOk,meetext);
			}
			stage.update();
			if (e.target.al >= cls[alMax].al) sc += Math.floor(300 * (180+timer.graphics.command.w)/180);
			setTimeout(function() {total(e.target.num)},500);
			if ( sc > 25000) sc = 25000; score.text = "Очки: "+sc;
			stage.update();
			}
		});
	}

	//функция для сброса всего
	function all_clear() {
		td = bd = inst = 2;
		stage.removeChild(line);
		line = null;
		line = new createjs.Shape();
		for (var j = 0;j<alNum;j++)
			stage.removeChild(aliens[j]);
		for (var j = 0;j<4;j++) {
			cls[j].image = blue_but.image;
			clst[j].text = "y = f(x)";
			stage.removeChild(alCounts[j]);
			stage.addChild(alTides[j]);
		}
		timer.graphics.command.w = 0;
		alMax = 0;
		aliens = null;
		aliens = [];
		meetext.y += 20;
		sc*= (6 - cityNum); score.text = "Очки: "+sc;
		stage.removeChild(finOk);
		if (level >= 25 && cityNum < 6) {finCount.text = "Победа";
			meetext.text = "Победа! Земля спасена, а пришельцы уничтожены! \nВы покрыты ореолом славы, и все почитают вас как своего спасителя! \nНо кто знает, что еще скрывается в глубинах космоса...";}
		else {finCount.text = "Поражение";
			meetext.text = "Поражение. Вы не смогли отстоять наш дом. \nТеперь самые крупные города планеты стерты с лица земли, \nа пришельцы безраздельно правят своими новыми рабами.";
		}
		stage.addChild(fin,finCount,meetext,finOk);

		stage.update();
	}

	function all_again() {
		sc = cityNum = 0; level = 1;
		level_text.text = "Уровень: "+level+"/25"; score.text = "Очки: "+sc;
		stage.removeChild(fin,finCount,meetext,finOk);
		for (var i = 0; i < 6; i++) {
			cities[i].image = city.image;
		}
		meetext.text = takeText();
		meetext.y -= 20;
		clear_fun();
	}

	createjs.Ticker.addEventListener("tick", tick);
	createjs.Ticker.setFPS(60);
	function tick() {
		if (td === 0) timer.graphics.command.w = 6*(date - new Date())/1000-180;//timer.graphics.command.w-=0.05;//180/3600;
		if (timer.graphics.command.w < -120) time.graphics._fill.style = "red"; else time.graphics._fill.style = "green";
		if ( (timer.graphics.command.w < -180 || new Date() > date ) && td === 0 ) {timer.graphics.command.w = 0; total(-1);} //проверка - время истекло
		stage.update();
	}
	clear_fun();
}