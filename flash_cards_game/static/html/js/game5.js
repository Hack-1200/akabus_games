function init() {
    var stage = new createjs.Stage("gameCanvas");
    var canvas = document.getElementById("gameCanvas");
    var cw = canvas.width = window.innerWidth;
    var ch = canvas.height = window.innerHeight;
    var wood = [], wood_line = [];
    var circleSize, textSize, circleCount = 2, w_rate = 0, h_rate = 0, clicked = 0;

    if (ch > cw) {
        circleSize = ch / 18;
        h_rate = 1;
    } else {
        circleSize = cw / 18;
        w_rate = 1;
    }
    textSize = circleSize / 3;

    var num = 0, real_num = 0, num_number = 3, num_time = 5000, numbers = [], timeId, times, time = new createjs.Text("||||||||||", 1.5*textSize+"px Comic Sans Ms", "black"), timeBack = new createjs.Text("||||||||||", 1.5*textSize+"px Comic Sans Ms", "silver");
    //time.textAlign = timeBack.textAlign = "center"; 
    time.textBaseline = timeBack.textBaseline = "middle";
    time.x = timeBack.x = cw / 2 + 1.75 * circleSize; 
    time.y = timeBack.y = ch / 2 + (circleSize * 4 * 0.6) + circleSize * 1.25; 

    function Rand(min, max){     
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function return_help_text() {
        return "Инструкция к игре";
    }

    var background = new createjs.Shape();
    background.graphics.f("white").dr(0,0,cw,ch);

    var abacus_line = new createjs.Shape(), abacus_ring = new createjs.Shape();

    var zone = new createjs.Shape();
    zone.graphics.f("#000").dc(100 / 2, 100 / 2, 100 / 2);
    var the_red_button = new createjs.Bitmap("assets/reload.png");
    the_red_button.hitArea = zone;
    the_red_button.scaleX = the_red_button.scaleY = circleSize / 100;

    var the_green_button = new createjs.Bitmap("assets/play.png");
    the_green_button.hitArea = zone;
    the_green_button.scaleX = the_green_button.scaleY = the_red_button.scaleX;

    help_button = new createjs.Bitmap("assets/quest3.png");
    help_button.hitArea = zone;
    help_button.scaleX = help_button.scaleY = the_red_button.scaleX;

    the_red_button.x = cw / 2 + circleSize * 0.5;
    the_green_button.x = cw / 2 - circleSize * 1.5;
    the_green_button.y = the_red_button.y = ch / 2 + (circleSize * 4 * 0.6) + 0.75 * circleSize;
    help_button.x = cw / 2 - circleSize / 2;
    help_button.y = ch / 2 + (circleSize * 4 * 0.6) + circleSize * 0.75;

    var help_field = new createjs.Shape();
    help_field.graphics.beginStroke("lightsteelblue").setStrokeStyle(textSize / 6).f("white").dr(0, 0, circleSize * 8, circleSize * 3)
    help_field.x = cw / 2 - help_field.graphics.command.w / 2;
    help_field.y = ch / 2 - help_field.graphics.command.h / 2;

    var help_text = new createjs.Text(return_help_text(),textSize / 2.15 +"px Arial", "darkslategrey");
    help_text.x = help_field.x + textSize / 2;
    help_text.y = help_field.y + textSize / 2;

    var help_link = new createjs.Text("abakus-center.ru",textSize / 2 +"px Arial", "slategrey")
    help_link.textAlign = "center"; help_link.textBaseline = "middle";
    help_link.x = cw / 2;
    help_link.y = help_field.y + textSize / 2.15 * 10.25 + textSize / 2;
    var zone = new createjs.Shape();
    zone.graphics.f("#000").dr(-circleSize, -textSize / 2, circleSize * 2, textSize)
    help_link.hitArea = zone;
    help_link.addEventListener("click", function() {
        document.location.href = "http://abakus-center.ru/index.php/obuchenie/online-obuchenie";
    })

    var help = new createjs.Container();
    help.addChild(help_field,help_text,help_link);
    help.added = 0; help.reachable = 1;

    var blue_bead = new createjs.Bitmap("assets/blue_bead.png");
    var pink_bead = new createjs.Bitmap("assets/pink_bead.png");

    var score_count = 0, level = 0, score = new createjs.Text("Счет: "+score_count,textSize+"px Comic Sans Ms","darkslategrey");
    score.textAlign = "right"; score.textBaseline = "middle";
    score.x = cw / 2 - 1.75 * circleSize; 
    score.y = ch / 2 + (circleSize * 4 * 0.6) + circleSize * 1.25; 
    stage.addChild(background,abacus_line,the_red_button,the_green_button,help_button,score,time);

    the_red_button.addEventListener("click", function() {
        resetIt();
    })

    the_green_button.addEventListener("click", function() {
        if (times > 0 && clicked === 0) {
            clicked = 1;
            if (num === real_num) {
                score_count += times * 100; score.text = "Счет: "+score_count;
                level++; 
                numbers[num_number].font = 1.2*textSize+"px Comic Sans Ms";
                numbers[num_number].text = "= "+real_num+"\nПравильно!";
                clearTimeout(timeId);
                for (var i = 0; i < num_number; i++)
                    stage.removeChild(numbers[i]);
                stage.addChild(numbers[num_number]);
                setTimeout(function() {stage.removeChild(numbers[num_number]); Change();}, 3000);
            } else {
                numbers[num_number].font = 1.2*textSize+"px Comic Sans Ms";
                numbers[num_number].text = "= "+real_num+"\nНеправильно!";
                Again();
            }
        }
    })

    function remove_help() {
        help.added = 0;
        stage.removeChild(help);
    }

    help_button.addEventListener("click", function() {
        if (help.reachable) {
            if (!help.added) {
                help.added = 1;
                stage.addChild(help);
            } else {
                remove_help();
            }
        }
    })

    for ( var i = 0; i < circleCount; i++){
        wood[i] = [];
    }

    function Rec() {
        time.text = "";
        for (var i = 0; i < times; i++) time.text += "|";
        for (var i = times; i < 10; i++) time.text += "";
        if (times > 0) {
            timeId = setTimeout(function() {times--; Rec()}, 1000);
        } else {
            numbers[num_number].font = 1.2*textSize+"px Comic Sans Ms";
            numbers[num_number].text = "= "+real_num+"\nВремя вышло!";
            Again();
        }
    }

    function timeRec(i) {
        if (i < num_number) timeId = setTimeout(function() {
            stage.removeChild(numbers[i]);
            i++;
            stage.addChild(numbers[i]);
            timeRec(i);
        }, num_time); else Rec();
    }

    function Circle(){
        abacus_line.graphics.beginStroke("#190f18").setStrokeStyle(textSize / 3)
        .moveTo(0,0).lineTo(9 * circleSize / 8 * circleCount - circleSize / 8 - textSize / 3, 0);

        abacus_ring.graphics.beginStroke("#190f18").setStrokeStyle(textSize / 3).drawRoundRect(0, 0, 9 * circleSize / 8 * circleCount + textSize / 3, 9 * circleSize / 8 * 4 * 0.54 + 3 * circleSize, 43);
        abacus_ring.graphics.beginStroke().setStrokeStyle().f("white").drawRect(textSize / 6, textSize / 6, 9 * circleSize / 8 * (circleCount), 9 * circleSize / 8 * 4 * 0.54 + 3 * circleSize - textSize / 3)
        abacus_ring.x = cw / 2 - textSize / 6 - (9 * circleSize / 8 * circleCount / 2);
        abacus_ring.y = ch / 2 - (9 * circleSize / 8 * 4 * 0.54 + 3 * circleSize) / 2;

        abacus_line.x = abacus_ring.x + circleSize / 8 + textSize / 6;
        abacus_line.y = abacus_ring.y + textSize / 6 + circleSize / 8 + circleSize * 3 * 0.6 - textSize / 6;

        var zone = new createjs.Shape();
        zone.graphics.f("#000").dr(0,0,100,54);

        stage.addChild(abacus_ring);
        for ( var i = 0; i < circleCount; i++){
            wood[i] = [];
            wood_line[i] = new createjs.Bitmap("assets/candy_cane.png");
            //wood_line[i].graphics.beginStroke("#190f18").setStrokeStyle(textSize / 4)
            wood_line[i].scaleX = wood_line[i].scaleY = ( circleSize * 4 * 0.54 + 3 * circleSize - textSize / 3 ) / 2675;
            //.moveTo((circleSize * i) + (circleSize / 2) + (cw / 2) - (circleSize * circleCount / 2), (circleSize / 2) + (ch / 2 - circleSize) - (circleSize * 2) - circleSize / 2)
            //.lineTo((circleSize * i) + (circleSize / 2) + (cw / 2) - (circleSize * circleCount / 2), (circleSize * 4 * 0.54) + (circleSize / 2) + (ch / 2 + circleSize) - (circleSize * 2) + circleSize / 2);
            wood_line[i].x = abacus_ring.x + textSize / 3 + circleSize / 2 + 9 * circleSize / 8 * i - 51 * wood_line[i].scaleX / 2;
            wood_line[i].y = abacus_ring.y + textSize / 6 + circleSize / 8;
            stage.addChild(wood_line[i]);
            for ( var j = 0; j < 5; j++){ 
                wood[i][j] = new createjs.Bitmap();
                wood[i][j].image = blue_bead.image;
                wood[i][j].hitArea = zone;
                wood[i][j].scaleX = wood[i][j].scaleY = (circleSize) / 100;
                wood[i][j].x = abacus_ring.x + textSize / 3 + 9 * circleSize / 8 * i;
                wood[i][j].y = wood_line[i].y + 3 * circleSize * 0.6 + circleSize * (j+1) * 0.54;
                wood[i][j].i = i; wood[i][j].j = j; wood[i][j].was_clicked = 1;
                stage.addChild(wood[i][j]);
                stage.update();
            }
            wood[i][0].image = pink_bead.image;
            wood[i][0].y = wood_line[i].y;
            stage.update();
        }
        stage.addChild(abacus_line);
    }

    function Clicks() {
        for (var i = 0; i < circleCount; i++) {
            for ( var j = 0; j < 5; j++){ 
                wood[i][j].addEventListener("mousedown", function(e) {
                    if (!help.added) {
                        var v_num = 0;
                        if (e.target.j === 0) {
                            e.target.y += (circleSize * 0.6 + 54 * e.target.scaleY) * e.target.was_clicked;
                            v_num += 5 * Math.pow(10, circleCount - e.target.i - 1) * e.target.was_clicked;
                            e.target.was_clicked *= -1;
                        } else {
                            e.target.y -= (circleSize * 0.54 * 2) * e.target.was_clicked;
                            v_num += Math.pow(10, circleCount - e.target.i - 1) * e.target.was_clicked;
                            e.target.was_clicked *= -1;
                            var k = e.target.j+e.target.was_clicked;
                            while (k < 5 && k > 0 && wood[e.target.i][k].was_clicked*(-1) === e.target.was_clicked) {
                                wood[e.target.i][k].y += (circleSize * 0.54 * 2) * e.target.was_clicked;
                                v_num -= Math.pow(10, circleCount - e.target.i - 1) * e.target.was_clicked;
                                wood[e.target.i][k].was_clicked *= -1;
                                k+=e.target.was_clicked;
                            }
                        }
                        num += v_num;
                        //num_count.text = num;
                    }
                })
            }
        }
    }

    function Numbers(){
        numbers = [];
        for ( var i = 0; i < num_number+1; i++ ){
            numbers[i] = new createjs.Text();
            numbers[i].textAlign = "center"; numbers[i].textBaseline = "middle";
            numbers[i].x = cw / 2; 
            numbers[i].y = abacus_ring.y - 2.5 * textSize;
            numbers[i].font = 3*textSize+"px Comic Sans Ms";
        }
        numbers[0].text = Rand(1, Math.pow(10, circleCount-1)); 
        numbers[num_number].text = "= ?";
        var v_num = numbers[0].text;

        for (var i = 1; i < num_number; i++) {
            if (level % 5 <= 2) {
                do 
                    if (Rand(0,2) === 0) numbers[i].text = Rand(-Math.pow(10,circleCount-1), -1); else numbers[i].text = Rand(1, Math.pow(10,circleCount-1)); 
                while (v_num + numbers[i].text <= 0 || Math.abs(numbers[i].text) === Math.abs(numbers[i-1].text) || v_num + numbers[i].text >= Math.pow(10,circleCount-1));
            } else {
                do 
                    if (Rand(0,2) === 0) numbers[i].text = Rand(-Math.pow(10,circleCount-1), -1); else numbers[i].text = Rand(1, Math.pow(10,circleCount-1)); 
                while (v_num + numbers[i].text <= 0 || Math.abs(numbers[i].text) === Math.abs(numbers[i-1].text));
            }
            v_num += numbers[i].text;
        }
        real_num = v_num;
        stage.addChild(numbers[0]);
        timeRec(0);

        stage.update();

    }

    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setFPS(60);
    function tick() {
        stage.update();
    }
    function resetIt() {
        for (var i = 0; i < circleCount; i++) {
            for (var j = 0; j < 5; j++) {
                stage.removeChild(wood[i][j]);
            }
            stage.removeChild(wood_line[i]);
            wood[i] = wood_line[i] = null;
        }
        stage.removeChild(abacus_line,abacus_ring);
        abacus_line = null; abacus_line = new createjs.Shape();
        abacus_ring = null; abacus_ring = new createjs.Shape();
        num = 0; //num_count.text = 0;
        if (level / 5 < 6) {
            circleCount = Math.floor(level / 5) + 2;
            num_time = 5000 - Math.floor(level % 5) * 1000;
        }
        Circle();
        Clicks();
        if (help.added) {
            stage.addChild(help);
        }
    }
    function Change() {
        resetIt();
        for (var i = 0; i < num_number; i++) {
            stage.removeChild(numbers[i]);
        }
        numbers = null; numbers = [];
        time.text = "||||||||||"; times = 10; clicked = 0;
        if (level / 5 < 6) Numbers(); else Win();
    }
    function Again() {
        for (var i = 0; i < num_number; i++)
            stage.removeChild(numbers[i]);
        stage.addChild(numbers[num_number]);
        clearTimeout(timeId);
        setTimeout(function() {
            score_count = 0; score.text = "Счет: "+score_count; level = 0;
            stage.removeChild(numbers[num_number]);
            Change();
        }, 3000 );
    }
    function Win() {
        clicked = help.added = 1; help.reachable = 0;
        help_text.text = "Вы отлично справились с поставленной задачей. Капитаны всех звездолетов успешно преодолели \nзаградительные заслоны и атакуют планету пришельцев. Победа за нами! Ваше имя будет увековечено \nв сердцах жителей Земли, как героя, сыгравшего ключевую роль в защите нашего дома!";
        stage.addChild(help);
        help.removeChild(help_link);
        stage.removeChild(help_link);
        setTimeout(function() {
            score_count = 0; score.text = "Счет: "+score_count; level = 0;
            help.reachable = 1;
            help.added = 0;
            help_text.text = return_help_text();
            stage.removeChild(help);
            help.addChild(help_link);
            Change();
        }, 5000);
    }
    Change();
    stage.update();
}   