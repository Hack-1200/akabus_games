function init() {
    var stage = new createjs.Stage("gameCanvas");
    var canvas = document.getElementById("gameCanvas");
    var cw = canvas.width = window.innerWidth;
    var ch = canvas.height = window.innerHeight;

    function Rand(min, max) {
    	return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function mixing() {
    	stage.addChild(buttons[1],buttonTexts[1]);
    	var c = 0, n = 0;
    	for (var i = 0; i < 3; i++) {
    		n = Rand(0,2); c = buttons[i].text; buttons[i].text = buttons[n].text; buttons[n].text = c;
    		buttonTexts[i].text = buttons[i].text; buttonTexts[n].text = buttons[n].text;
    	}
    }

    function numbersForButtons() {
    	var b1 = 0, b2 = 0, b3 = 0;
    	do {
    		if (level_num >= 12) b1 = Rand(150,500); else if (level_num >= 7) b1 = Rand(35, 70); else b1 = Rand(4, 15);
    		if (level_num >= 12) b2 = Rand(150,500); else if (level_num >= 7) b2 = Rand(35, 70); else b2 = Rand(4, 15);
    	} while (b2 % 2 === b1 % 2);
    	if (Rand(0,1) === 0) b1 *= -1; b2 *= -(b1 / Math.abs(b1));
    	buttons[0].text = buttonTexts[0].text = b1; buttons[2].text = buttonTexts[2].text = b2;
    	buttons[0].n = buttons[2].n = 0;
    	if (level_num >= 7) {
    		do {
	    		if (level_num >= 12) b3 = Rand(150,500); else b3 = Rand(35,70);
	    	} while (Math.abs(b3) === Math.abs(b1) || Math.abs(b3) === Math.abs(b2));
	    	if (Rand(0,1) === 0) b3 *= -1;
    		buttons[1].text = buttonTexts[1].text = b3;
    		buttons[1].n = 0;
    	}
    	stage.update();
    }

    function findTarget() {
    	if (level_num >= 12) position.text = Rand(-1500,1500); else if (level_num >= 7) position.text = Rand(-350, 350); else position.text = Rand(-45, 45);
    	//if (Rand(0,1) === 0) position.text *= -1;
    	target_num = position.text;
    	do {
    		if (level_num >= 12) maxSteps = Rand(20,30); else if (level_num >= 7) maxSteps = Rand(12, 20); else maxSteps = Rand(5, 12);
	    	if (level_num >= 7) {
		    	for (var i = 0; i < maxSteps; i++) {
		    		var n = Rand(0,2);
		    		target_num += buttons[n].text;
		    		buttons[n].n++;
		    	}
		    } else {
		    	for (var i = 0; i < maxSteps; i++) {
		    		if (Rand(0,1) === 1) {target_num += buttons[2].text; buttons[2].n++} else {target_num += buttons[0].text; buttons[0].n++;}
		    	}
		    }
		} while (target_num === position.text || buttons[0].n === maxSteps || buttons[1].n === maxSteps || buttons[2].n === maxSteps);
		for (var i = 0;i<3;i++) buttons[i].n = null;
	    target.text = "Цель: "+target_num;
    }

    function update() {
    	position.fixed = 0;
    	steps = 0;
    	stage.removeChild(buttons[1],buttonTexts[1]);
    	level.text = "Уровень: "+level_num;
    	score.text = "Очки: "+score_num;
	    position.font = 2.5*textSize+"px Comic Sans Ms";
	    numbersForButtons();
	    findTarget();
	    if (level_num >= 7) mixing();
	    stage.update();
    }

    function ending() {
    	clearTimeout(timeId);
    	stage.removeChild(target);
    	position.text = "Ваш счет: "+score_num;
    	position.font = 1.0*textSize+"px Arial Black";
    	position.fixed = 1;
    	score.text = "Очки: "+score_num;
    	if (level_num > 15) {
    		helpText.text = "Победа! Базы захвачены, либо уничтожены. \nЗемляне исследуют новые полученные \nтехнологии, а человечество еще на шаг\nприблизилось к долгожданной победе.";
    		helpText.x = cw / 2;
    		helpText.y = ch / 2 - scale * (800 / 2 - 78) + textSize;
    		helpText.textAlign = "center";
    		stage.addChild(help);
    	}
    	stage.update();
    	var timeId = setTimeout(function() {
    		stage.removeChild(help);
    		helpText.x = cw / 2 - scale * (528 / 2 - 44);
    		helpText.y = ch / 2 - scale * (800 / 2 - 78);
    		helpText.text = return_helpText();
    		helpText.textAlign = "left";
	    	level_num = 1;
	    	score_num = 0;
	    	stage.addChild(target);
	    	update();
	    }, 5000);
    }

    function levelUp() {
    	position.fixed = 1;
	    if (steps <= maxSteps ) {
	    	score_num += 175 * level_num; 
		    level_num++;
	    	if (level_num > 15) ending(); else update();
	    } else {
	    	position.text = "Превышено максимальное\nколичество шагов";
	    	position.font = 0.7*textSize+"px Comic Sans Ms";
		    score_num -= (steps - maxSteps) * Math.floor(175 / maxSteps) * level_num;
    		score.text = "Очки: "+score_num;
	    	stage.update();
		    timeId = setTimeout(function() {
			    level_num++;
		    	if (level_num > 15) ending(); else update();
	    	}, 3000);
	    }
    }

    function helpClick() {
        if (helpButton.click) {
            helpButton.click = 0;
            stage.removeChild(help);
            stage.addChild(position,level,score,target);
        }
        stage.update();
    }

    function return_helpText() {
    	return "Отбив нападение пришельцев, земляне решили \nвоспользоваться ситуацией и совершить ответ-\nный удар с целью уничтожения врага до его \nповторной атаки. Для достижения цели были \nвзяты полуразрушенные корабли пришельцев, \nтак как они обладали большей мощью по срав-\nнению с человеческими. Готовясь к запуску, \nкомандование обнаружило, что системы гипер-\nпрыжков пришельцев были испорчены. Но \nкоманда исследователей нашла способ \nзапустить их. Так что возможность добраться \nдо их баз все же есть. Твоя задача взять в руки \nгиперпрыжковый измеритель, и провести флот \nк базам, расположенным в различных секторах \nнашей галактики, поочередно используя \nгиперпрыжки в разные стороны.";
    }

    var background = new createjs.Bitmap("assets/background2.jpg");
    var field = new createjs.Bitmap("assets/panel2.png");//Shape();
    var buttons = [], buttonTexts = [];
    var cn = cw; if (cw < ch) cn = ch; 
    var textSize = cn / 48;
    var maxSteps = 0, steps = 1;
    var target_num = 0, level_num = 1, score_num = 0;
    var again_button = new createjs.Bitmap("assets/again.png")//Shape();
    var zone = new createjs.Shape();
    zone.graphics.f("#000").drawRect(0,0,457,101);
    again_button.hitArea = zone;
    var target = new createjs.Text("Цель: "+target_num, 0.79*textSize+"px Arial Black", "#82CFCF"), position = new createjs.Text(0, 3*textSize+"px Comic Sans Ms", "#82CFCF");

    background.scaleX = background.scaleY = (cw > ch) * cw / 1907 + (cw <= ch) * ch / 1080;
    background.x = cw / 2 - background.scaleX * 1907 / 2;
    background.y = ch / 2 - background.scaleY * 1080 / 2;

    var scale = (cn / 4) / 528;

    var helpText = new createjs.Text(return_helpText(),textSize/2.25+"px Arial","#82CFCF")
    helpText.x = cw / 2 - scale * (528 / 2 - 44);
    helpText.y = ch / 2 - scale * (800 / 2 - 78);

    var help = new createjs.Container();
    help.addChild(helpText);

    var helpButton = new createjs.Bitmap("assets/quest2.png");
    var zone = new createjs.Shape();
    zone.graphics.f("#000").dc(20,20,20);
    helpButton.hitArea = zone;
    helpButton.scaleX = helpButton.scaleY = scale;
    helpButton.alpha = 0.8;
    helpButton.x = cw / 2 + scale * (528 / 2 - 40 - 50);
    helpButton.y = ch / 2 - scale * (20);
    helpButton.click = 0;
    helpButton.addEventListener("click", function() {
	    if (!position.fixed) {
	        if (!helpButton.click) {
	            helpButton.click = 1;
	            stage.removeChild(position,target,level,score);
	            stage.addChild(help);
	        } else {
	            helpClick();
	        }
	        stage.update();
	    }
    })

    again_button.scaleX = again_button.scaleY = field.scaleX = field.scaleY = (cn / 4) / 528; 
    field.x = cw / 2 - 264 * scale;
    field.y = ch / 2 - 400 * scale;

    target.textAlign = position.textAlign = "center"; position.textBaseline = "middle";
    target.x = position.x = cw / 2; target.y = ch / 2 - 70 * scale; position.y = ch / 2 - 150 * scale;

    var level = new createjs.Text("Уровень: "+level_num, 0.67*textSize+"px Arial Black", "#82CFCF"), score = new createjs.Text("Очки: "+score_num, 0.67*textSize+"px Arial Black", "#82CFCF");
    level.textAlign = "right"; //level.textBaseline = score.textBaseline = "top";
    level.x = cw / 2 + (264 - (528 - 457) / 2 - 20) * scale; score.x = cw / 2 + ((528 - 457) / 2 - 264 + 20) * scale; 
    level.y = score.y = ch / 2 + ((528 - 457) - 400) * scale;

    //field.graphics.beginStroke("black").setStrokeStyle(1).beginFill("moccasin").drawRoundRect(0, 0, cw / 3 , cw / 4, 20)

    //again_button.graphics.beginFill("orangered").dc(0, 0, 2 * textSize / 3);
    again_button.x = cw / 2 - again_button.scaleX * 457 / 2;
    again_button.y = ch / 2 + again_button.scaleY * (-101 + 400 - (528 - 457) / 2);
    again_button.addEventListener("click", function() {
    	helpClick();
    	if (!position.fixed)
    		ending();
    })
    stage.addChild(background, field, level, score, target, position, again_button, helpButton);

    for (var i = 0; i < 3; i++) {
    	buttons[i] = new createjs.Bitmap("assets/button.png");
	    var zone = new createjs.Shape();
	    zone.graphics.f("#000").drawRect(0,0,141,102);
    	buttons[i].hitArea = zone;
    	buttonTexts[i] = new createjs.Text(0, 1.3*textSize+"px Arial Black", "white");
    	buttonTexts[i].textAlign = "center"; buttonTexts[i].textBaseline = "middle";
    	buttons[i].scaleX = buttons[i].scaleY = scale;
	    buttons[i].x = again_button.x + i * ((528 / 3) - (528 - 457) / 4) * scale;
	    buttons[i].y = again_button.y - 101 * buttons[i].scaleY * 1.5;
	    buttons[i].text = buttonTexts[i].text;
	    buttons[i].addEventListener("click", function (e) {
	    	helpClick();
	    	if (position.fixed === 0) {
		    	steps++;
		    	position.text = position.text + e.target.text;
		    	if (position.text === target_num) 
		    		levelUp();
		    	stage.update();
		    }
	    })
	    buttonTexts[i].x = buttons[i].x + scale * 141 / 2;
	    buttonTexts[i].y = buttons[i].y + scale * 102 / 2;
    	stage.addChild(buttons[i],buttonTexts[i]);
    }

    update();
    stage.update();

}