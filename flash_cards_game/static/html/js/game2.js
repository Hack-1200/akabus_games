function init() {
    var stage = new createjs.Stage("gameCanvas");
    var canvas = document.getElementById("gameCanvas");
    var cw = canvas.width = window.innerWidth;
    var ch = canvas.height = window.innerHeight;
    var buttons = [];
    var buttonSize, textSize, digitCount = 2, w_rate = 0, h_rate = 0, clicked = 0;

    if (ch > cw) {
        buttonSize = ch / 18;
        h_rate = 1;
    } else {
        buttonSize = cw / 18;
        w_rate = 1;
    }
    textSize = buttonSize / 3;

    var num = 0, real_num = 0, num_number = 5, num_time = 5000, numbers = [], timeId, times, time = new createjs.Text("||||||||||", 0.83*textSize+"px Arial", "#82CFCF"), timeBack = new createjs.Text("||||||||||", 1.5*textSize+"px Comic Sans Ms", "silver"), num_count = new createjs.Text(num,2.0*textSize+"px Comic Sans Ms","#82CFCF");
    time.textAlign = timeBack.textAlign = "right"; //time.textBaseline = timeBack.textBaseline = "middle";

    function Rand(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function return_helpText() {
        return "Инструкция к игре";
    }

    var background = new createjs.Bitmap("assets/background.jpg");
    background.scaleX = background.scaleY = (cw > ch) * cw / 1920 + (cw <= ch) * ch / 1080;
    background.x = cw / 2 - background.scaleX * 1920 / 2;
    background.y = ch / 2 - background.scaleY * 1080 / 2;

    var field = new createjs.Bitmap("assets/calc_panel.png");
    var scale = field.scaleX = field.scaleY = w_rate * (cw / 4.5) / 469 + h_rate * (ch / 2) / 801;
    field.x = cw / 2 - scale * 469 / 2;
    field.y = ch / 2 - scale * 801 / 2;

    num_count.x = (cw / 2);
    num_count.y = ch / 2 - scale * 801 / 4;
    num_count.textAlign = "center";num_count.textBaseline = "middle";

    var helpField = new createjs.Shape();
    helpField.graphics.beginStroke("lightsteelblue").setStrokeStyle(textSize / 6).f("#2f534a").dr(0,0, scale * (469 - 60), scale * (801 / 2));
    helpField.x = cw / 2 - scale * (469 / 2 - 30);
    helpField.y = ch / 2 - scale * (60);

    var helpText = new createjs.Text(return_helpText(),textSize/2+"px Arial","#82CFCF")
    helpText.x = cw / 2 - scale * (469 / 2 - 40);
    helpText.y = ch / 2 - scale * (60 - 5);

    var help = new createjs.Container();
    help.addChild(helpField,helpText);

    var helpButton = new createjs.Bitmap("assets/quest2.png");
    var zone = new createjs.Shape();
    zone.graphics.f("#000").dc(20,20,20);
    helpButton.hitArea = zone;
    helpButton.scaleX = helpButton.scaleY = scale;
    helpButton.alpha = 0.8;
    helpButton.x = cw / 2 + scale * (469 / 2 - 40 - 40);
    helpButton.y = ch / 2 - scale * (801 / 4 - 40 - 20);
    helpButton.click = 0;
    helpButton.addEventListener("click", function() {
        if (!helpButton.click) {
            helpButton.click = 1;
            stage.addChild(help);
        } else {
            helpButton.click = 0;
            stage.removeChild(help);
        }
    })

    var score_count = 0, level = 0, score = new createjs.Text("Очки: "+score_count,0.74*textSize+"px Arial Black","#82CFCF");
    score.x = cw / 2 - scale * (469 / 2 - 40); 
    score.y = ch / 2 - scale * (801 / 2 - 60 - 10);

    time.x = timeBack.x = cw / 2 + scale * (469 / 2 - 40); 
    time.y = timeBack.y = ch / 2 - scale * (801 / 2 - 60 - 10);

    stage.addChild(background,field,score,time,helpButton);

    function Rec() {
        time.text = "";
        for (var i = 0; i < times; i++) time.text += "|";
        for (var i = times; i < 10; i++) time.text += "";
        if (times > 0) {
            timeId = setTimeout(function() {times--; Rec()}, 1000);
        } else {
            num_count.text = "= "+real_num;
            numbers[num_number].text = "Время вышло!";
            Again();
        }
    }

    function Buttons(){
        var b_num = 1;
        var zone = new createjs.Shape();
        zone.graphics.f("#000").dr(0,0,106,77);
        for (var i = 0; i < 12; i++){
            buttons[i] = new createjs.Bitmap("assets/button_0.png");
            buttons[i].hitArea = zone;
            buttons[i].count = i-2;
            if (i > 2) buttons[i].image.src = "assets/button_"+buttons[i].count+".png";
            buttons[i].scaleX = buttons[i].scaleY = scale;
            
            buttons[i].x = (cw / 2) - scale * (469 / 2 - 60) + i % 3 * scale * Math.floor((469 - 60 * 2) / 3) //- (cw/4 - buttonSize/2) * w_rate;
            buttons[i].y = ch / 2 - scale * (60 + 77) + (4-Math.floor(i / 3)) * scale * Math.floor((801 / 2) / 4) //+ (ch/5 - buttonSize/2) * h_rate;
            stage.addChild(buttons[i]);
            stage.update();
        }
        buttons[1].count = 0;
        buttons[0].image.src = "assets/button_delete.png"; buttons[2].image.src = "assets/button_equal.png";
        buttons[0].addEventListener("click", function() {
            if (times > 0 && !clicked && !helpButton.click) {
                num = 0;//Math.floor(num / 10);
                num_count.text = num;
            }
        })
        buttons[2].addEventListener("click", function() {
            if (times > 0 && !clicked && !helpButton.click) {
                clicked = 1;
                if (num === parseInt(real_num)) {
                    score_count += times * 100; score.text = "Очки: "+score_count;
                    level++; 
                    num_count.text = "= "+real_num;
                    numbers[num_number].text = "Правильно!";
                    clearTimeout(timeId);
                    for (var i = 0; i < num_number; i++)
                        stage.removeChild(numbers[i]);
                    stage.addChild(numbers[num_number]);
                    setTimeout(function() {stage.removeChild(numbers[num_number]); Change();}, 3000);
                } else {
                    num_count.text = "= "+real_num;
                    numbers[num_number].text = "Неправильно!";
                    Again();
                }
            }
        })

    }

    function Clicks() {
        for (var i = 1; i < 12; i++) {
            if (i != 2)
            buttons[i].addEventListener("mousedown", function(e) {
                if (times > 0 && !clicked && !helpButton.click) {
                    if (num < Math.pow(10,6)) num = 10 * num + e.target.count;
                    //num = Math.floor(num / 10); 
                    num_count.text = num;
                }
            })
        }
    }

    function timeRec(i) {
        if (i <= num_number) timeId = setTimeout(function() {
            stage.removeChild(numbers[i]);
            i++;
            //if (helpButton.click != 1) 
                stage.addChild(numbers[i]);
            timeRec(i);
            if (i === num_number) {
                //if (helpButton.click != 1) 
                    stage.addChild(num_count);
                clicked = 0;
            }
        }, num_time); else {
            Rec();
        }
    }

    function Numbers(){
        numbers = [];
        for ( var i = 0; i <= num_number; i++ ){
            numbers[i] = new createjs.Text();
            numbers[i].textAlign = "center"; numbers[i].textBaseline = "middle";
            numbers[i].x = cw / 2 //* h_rate + 3*cw/4 * w_rate; 
            numbers[i].y = ch / 2 - scale * 801 / 4 //* h_rate + ch/2 * w_rate;
            numbers[i].font = 2.0*textSize+"px Comic Sans Ms";
            numbers[i].color = "#82CFCF";
        }
        numbers[0].text = Rand(1, Math.pow(10, digitCount-1)); 
        numbers[num_number].text = "= ?";
        numbers[num_number].y += scale * 801 / 4 / 3;
        numbers[num_number].font = 1.0*textSize+"px Comic Sans Ms";
        var v_num = numbers[0].text;
        for (var i = 1; i < num_number; i++) {
            if (level % 5 <= 2) {
                do 
                    if (Rand(0,2) === 0) numbers[i].text = Rand(-Math.pow(10,digitCount-1), -1); else numbers[i].text = Rand(1, Math.pow(10,digitCount-1)); 
                while (v_num + numbers[i].text <= 0 || Math.abs(numbers[i].text) === Math.abs(numbers[i-1].text) || v_num + numbers[i].text >= Math.pow(10,digitCount-1));
            } else {
                do 
                    if (Rand(0,2) === 0) numbers[i].text = Rand(-Math.pow(10,digitCount-1), -1); else numbers[i].text = Rand(1, Math.pow(10,digitCount-1)); 
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
    function Change() {
        num = num_count.text = 0;
        stage.removeChild(num_count);
        for (var i = 0; i < num_number+1; i++) {
            stage.removeChild(numbers[i]);
        }
        numbers = null; numbers = [];
        time.text = "||||||||||"; times = 10; clicked = 1;
        if (level / 5 < 6) {
            digitCount = Math.floor(level / 5) + 2;
            num_time = 5000 - Math.floor(level % 5) * 1000;
            Numbers();
        } else {
            Win();
        }
    }
    function Again() {
        for (var i = 0; i < num_number; i++)
            stage.removeChild(numbers[i]);
        stage.addChild(numbers[num_number]);
        clearTimeout(timeId);
        setTimeout(function() {
            score_count = 0; score.text = "Очки: "+score_count; level = 0;
            stage.removeChild(numbers[num_number]);
            Change();
        }, 3000 );
    }
    function Win() {
        helpButton.click = 0;
        stage.removeChild(help);
        stage.removeChild(time,score,helpButton);
        helpText.text = "Здорово! Вы помогли разобрать шифр \nпришельцев. Теперь-то мы точно сможем \nотслеживать их планы. Ученые Земли \nблагодарны Вам за помощь.";
        num_count.text = "Ваш счет: "+score_count;
        num_count.font = 1.0 * textSize + "px Arial Black";
        helpText.y = ch / 2 - scale * (801 / 2 - 60) + textSize / 2;
        stage.addChild(helpText, num_count);
        setTimeout(function() {
            score_count = 0; score.text = "Очки: "+score_count; level = 0;
            num_count.font = 2 * textSize + "px Comic Sans Ms";
            stage.removeChild(helpText);
            help.addChild(helpText);
            helpText.text = return_helpText();
            helpText.y = ch / 2 - scale * (60 - 5);
            stage.addChild(time,score,helpButton);
            Change();
        }, 5000);
    }
    Buttons();
    Clicks();
    Change();
    stage.update();
}   