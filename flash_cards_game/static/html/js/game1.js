function init() {         
    var canvas = document.getElementById("demoCanvas");
    var cw = canvas.width  = window.innerWidth;         
    var ch = canvas.height = window.innerHeight;         
    var stage = new createjs.Stage("demoCanvas");
    var circleSize = cw / 13.5;   
    var cloud = [];
    var okButton = 0;
    var boom = [];
    var cloudBack = []; 
    var cloudSpeed = [];
    var cloudSpeedBack = [];     
    var circleByY = 10;
    var robots = [];
    robots[0] = new createjs.Bitmap("assets/UFO_3.png"); robots[1] = new createjs.Bitmap("assets/UFO_2.png"); robots[2] = new createjs.Bitmap("assets/UFO_1.png");
    var circles = [];
    var minSpeedF = 0.15;
    var minSpeedB = 0.1;
    var maxSpeedF = 0.35;
    var maxSpeedB = 0.2;         
    var texts = [];
    var arr, arrStringChecker, arrHelper;          
    var numberToMatrix = 0;       
    var arrRandomIzDevyati = [-1, -1, -1, -1, -1, -1, -1, -1, -1];         
    var i = 0, j = 0, h = 0, t = 0, gunTextHelper = 0, textForBound = 0, date, time = 62, wave = 1, counts = 10;
    var textSize = circleSize / 3.3 ;         
    var counter = new createjs.Shape(), count = 0, counText = new createjs.Text("Счет: "+count, textSize+"px sans-serif", "slategrey");
    counText.textBaseline = "middle"; counText.x = circleSize / 2; counText.y = ch - circleSize / 3;
    var help_but = new createjs.Bitmap("assets/quest.png"), helper = new createjs.Shape(), help_counter = new createjs.Text("", textSize+"px Verdana", "#001133"), help = new createjs.Text("В середине XX века студенты-археологи во время\n летней практики нашли древний артефакт пришельцев. \nБританские ученые выяснили, что это устройство\n почти мгновенно могло передавать очереди сигналов\n на огромные расстояния, и назвали его Квантовым\n Лазерным Телепортатором. Но на самом деле этот\n артефакт оказался маяком – когда очередная\n цивилизация доходила в своем развитии того уровня,\n чтобы начать использовать данное устройство,\n на планету нападали пришельцы и порабощали\n аборигенов. Так на Землю хлынули полчища кораблей\n инопланетян. Они были защищены неизвестными\n электро-магнитными полями, и поэтому боевой\n мощи землян было недостаточно, чтобы пробить их\n броню. Сотрудники лаборатории «ALTAIR» смогли\n разработать пушку, стреляющую ЭМИ-зарядами,\n которые блокировали щиты и электронику пришельцев.\n Вам всего лишь нужно правильно выбирать цель для\n выстрела, которая подходит под ваш заряд. Но разные\n корабли используют разные системы счисления:\n красные корабли – обладают двоичным кодом;\n оранжевые – восьмеричным;\n голубые – шестнадцатеричным.\n Стойте до конца – отбивайтесь от атак инопланетян.\n Не позволяйте им подлетать близко к планете.\n И быть может, Вам удастся отстоять наш дом…",textSize/2.4+"px Verdana","black");
    var zone = new createjs.Shape();

    helper.graphics.setStrokeStyle(3).beginStroke("lightsteelblue").f("#C5E2F9").dr(cw/2-2*circleSize,ch/2-2.5*circleSize,4*circleSize,5*circleSize);
    counter.graphics.f("#001133").dr(0,ch,cw,-circleSize * 0.84);

    help.textAlign = help_counter.textAlign = "center"; help.textBaseline = help_counter.textBaseline = "middle"; help.x = help_counter.x = cw/2; help.y = help_counter.y = ch/2;
    help.y = ch/2-2.5*circleSize*0.8;
    help_but.scaleX = help_but.scaleY = 1.5 * textSize / 40;
    help_but.x = cw - 2 * circleSize / 3; help_but.y = ch  -circleSize * 0.65; help_but.cliq = 0;

    stage.addChild(counter,counText,help_but);

    var okButton = new createjs.Bitmap("assets/ok.png");
    var okBounds = okButton.getBounds();
    okButton.setBounds(okBounds.x, okBounds.y, okBounds.width, okBounds.height);
    okButton.regX = okBounds.width/2;
    okButton.regY = okBounds.height;
    okButton.x = cw/2;
    okButton.y = ch - (ch/2-2.5*circleSize*0.9);

    var okEnd = new createjs.Bitmap("assets/ok.png");
    var okBoundsEnd = okEnd.getBounds();
    okEnd.setBounds(okBoundsEnd.x, okBoundsEnd.y, okBoundsEnd.width, okBoundsEnd.height);
    okEnd.regX = okBoundsEnd.width/2;
    okEnd.regY = okBoundsEnd.height;
    okEnd.x = cw/2;
    okEnd.y = ch - (ch/2-2.5*circleSize*0.9);

    var gun = new createjs.Bitmap("assets/panel.png");
    var bounds = gun.getBounds();
    gun.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
    gun.regX = bounds.width /2;
    gun.regY = bounds.height;
    gun.scaleX = gun.scaleY = circleSize / 190;
    gun.x = cw / 2;
    gun.y = ch;

    var gunText = new createjs.Text("ALTAIR","10px Arial","white");
    gunText.font =  "bold " + textSize + "px Arial";   
    gunText.textAlign = "center";  
    gunText.x = cw / 2;
    gunText.y = ch - 100;


    var pricel = new createjs.Bitmap("assets/pricel.png");
    var bounds1 = pricel.getBounds();                          
    pricel.setBounds(bounds1.x, bounds1.y, bounds1.width, bounds1.height);
    pricel.regX = bounds1.width /2;
    pricel.regY = bounds1.height /2;
    pricel.scaleX = 0.3;
    pricel.scaleY = 0.3;

    //рандом для заполнения шаров интервал от 1 до 30
    function Rand(m,n) {
        return Math.floor(Math.random()*(n-m+1)+m);
    }

    function random(){                                                 
        return Rand(2,counts);
    }

    function randomHelper(){                                                 
        return Math.floor(Math.random() * 9) ;
    }
       
    function shuffle(o, k){
        for(var j, x, z, i = o.length; i; j = Math.floor(Math.random() * i)) {
            x = o[i];
            z = k[i];
            o[i] = o[j];
            k[i] = k[j];
            o[j] = x;
            k[j] = z;
            --i;
        }
        return o;
    }

    function matrixArray(rows,columns){
        arr = [];
        arrStringChecker = [];
        arrHelper = [];
        circles = [];
        texts = [];
        boom = [];
      	for(var i = 0; i < rows ; i++) {
            arr[i] = [];
            arrStringChecker[i] = [];
            arrHelper[i] = [];
            circles[i] = [];
            texts[i] = [];
            boom[i] = [];
            var j = 0;
            while (j < 3) {
                arr[i][j] = random().toString(2);
                arrStringChecker[i][j] = 2;
                j++;
            }
            while(j < 6){
                arr[i][j] = random().toString(8);
                arrStringChecker[i][j] = 8;
                j++;
            }
            while(j < 9){
                arr[i][j] = random().toString(16).toUpperCase();
                arrStringChecker[i][j] = 16;
                j++;
            }
            arr[i] = shuffle(arr[i],arrStringChecker[i]);
      		}
    }
    matrixArray(circleByY,9);


    function textCreation(){
        for(var i = 0; i < circleByY; i++){
            for(var j = 0; j < 9;j++){
                texts[i][j] = new createjs.Text(arr[i][j],"10px Arial","white");
                texts[i][j].font =  "bold " + textSize + "px Arial";
                texts[i][j].textAlign = "center"; texts[i][j].textBaseline = "middle";
                texts[i][j].x = (circleSize * j) + (circleSize / 2) + (cw / 2) - (circleSize * 9 / 2);
                texts[i][j].y = -ch;//(circleSize * i) + (circleSize * i) - (circleSize / 2) - (ch/40) * (new Date() - date)/1000;                 
                stage.addChild(texts[i][j]);
                stage.update();
            }
        }
    }


    function circleCreation(){
        zone = null;zone = new createjs.Shape();
        zone.graphics.f("black").drawCircle(185 / 2, 185 / 2, 185 / 2);
        for (var i = 0; i < circleByY; i++){
            for(var j = 0; j < 9; j++) {
                circles[i][j] = new createjs.Bitmap("assets/UFO_1.png");
                circles[i][j].hitArea = zone;
                if(arrStringChecker[i][j] == 16) circles[i][j].image = robots[2].image;
                if(arrStringChecker[i][j] == 8) circles[i][j].image = robots[1].image;
                if(arrStringChecker[i][j] == 2) circles[i][j].image = robots[0].image;
                circles[i][j].scaleX = circles[i][j].scaleY = circleSize / 185;
                circles[i][j].x = (circleSize * j) + (circleSize / 2) + (cw / 2) - (circleSize * 9 / 2) - circleSize / 2 ;
                circles[i][j].y = (circleSize * i) + (circleSize / 2) - (circleSize * circleByY) - circleSize / 2;
                circles[i][j].count_y = circles[i][j].y;
                boom[i][j] = 0;
                stage.addChild(circles[i][j]);  
                stage.update();
            }
        } 
    }

    stage.on("stagemousedown", function(event) {                       
        pricel.scaleX = 0.1;
        pricel.scaleY = 0.1;
    })        

    stage.on("stagemouseup", function(event) {
        pricel.scaleX = 0.3;
        pricel.scaleY = 0.3;
    })

    zone = null; zone = new createjs.Shape();
    zone.graphics.f("black").dr(0, 0, 40, 40);
    help_but.hitArea = zone;
    help_but.on("click", function() {
        if (help_but.cliq === 0) {
            help_but.cliq = 1;
            stage.removeChild(pricel);
            stage.addChild(helper,help,okButton,pricel);
        } else {
            help_but.cliq = 0;
            stage.removeChild(helper,help,okButton);
        }
    })

    var zoneButton = new createjs.Shape();
    zoneButton.graphics.f("black").dr(0, 0, okBounds.width, okBounds.height);
    okButton.hitArea = zoneButton;
    okButton.on("click", function(){
        help_but.cliq = 0;
        stage.removeChild(helper,help,okButton);
    })

    createjs.Ticker.addEventListener("tick", animation);
    function animation() {
        for(var i = 0; i < 5; i++){
            cloud[i].x += cloudSpeed[i];
            if(cloud[i].x > cw){
                cloud[i].x = -479 * cloud[i].scaleX;
                cloud[i].y = Rand(0,ch - (345 * (2100 / cw) - circleSize * 0.84));
                cloudSpeed[i] =Math.random() * (maxSpeedF - minSpeedF) + minSpeedF;
            }
        }
        for(var i = 0;i < 9; i++){
            cloudBack[i].x += cloudSpeedBack[i];
            if(cloudBack[i].x > cw){
                cloudBack[i].x = -419 * cloudBack[i].scaleX;
                cloudBack[i].y = Rand(0,ch - (345 * (2100 / cw) - circleSize * 0.84));
                cloudSpeedBack[i] = Math.random() * (maxSpeedB - minSpeedB) + minSpeedB;
            }
        }
        for(var i = 0; i < circleByY; i++) {
            for(var j = 0; j < 9; j++) {
                if (circles != null) {
                    if (typeof(circles[i][j]) === "object") {
                        if (circles[i][j].y + circleSize - counter.graphics.command.h < ch) {
                            circles[i][j].y = circles[i][j].count_y - (ch/time) * (date - new Date())/1000 + ch;
                            texts[i][j].y = circles[i][j].y + 17 * circleSize / 64;
                        } else end();
                    }
                    if (typeof(boom[i][j]) === "object") boom[i][j].alpha -= 0.05;
                }
            }
        }

        //angleOfGun();
        pricel.x = stage.mouseX;
        pricel.y = stage.mouseY;
        pricel.rotation += 2;

        stage.update();
    }

    textForBound = randomForMainAction();
    gunText = new createjs.Text(textForBound,"10px Arial","white");
    gunText.font =  "bold " + textSize + "px Arial";   
    gunText.textAlign = "center";  gunText.textBaseline = "middle";
    gunText.x = cw / 2;
    gunText.y = ch - 11 * circleSize / 20;
    stage.update();

    function mainAction(){
        for(var i = 0; i < circleByY; i++){
            for (var j = 0; j < 9; j++) {
                circles[i][j].i = i;
                circles[i][j].j = j;
                circles[i][j].addEventListener("mousedown", function(e) {
                    hren = parseInt(arr[e.target.i][e.target.j], arrStringChecker[e.target.i][e.target.j]).toString(10);
                    if(e.target.i == circleByY - 1 || arr[e.target.i + 1][e.target.j] == -1){
                        if(textForBound == hren || textForBound === "~"){
                            if(e.target.j - 1 != -1 && circles[e.target.i][e.target.j - 1] != -1){
                            stage.removeChild(boom[e.target.i][e.target.j]);
                            boom[e.target.i][e.target.j - 1] = new createjs.Bitmap("assets/boom.png");
                            boom[e.target.i][e.target.j - 1].x = circles[e.target.i][e.target.j - 1].x;
                            boom[e.target.i][e.target.j - 1].y = circles[e.target.i][e.target.j - 1].y;
                            boom[e.target.i][e.target.j - 1].scaleX = boom[e.target.i][e.target.j - 1].scaleY = circleSize / 185;
                            stage.addChild(boom[e.target.i][e.target.j - 1]);
                            }
                            
                            if(e.target.j +1 != 9 && circles[e.target.i][e.target.j + 1] != -1){
                            stage.removeChild(boom[e.target.i][e.target.j]);
                            boom[e.target.i][e.target.j + 1] = new createjs.Bitmap("assets/boom.png");
                            boom[e.target.i][e.target.j + 1].x = circles[e.target.i][e.target.j + 1].x;
                            boom[e.target.i][e.target.j + 1].y = circles[e.target.i][e.target.j + 1].y;
                            boom[e.target.i][e.target.j + 1].scaleX = boom[e.target.i][e.target.j + 1].scaleY = circleSize / 185;
                            stage.addChild(boom[e.target.i][e.target.j + 1]);
                            }
                            stage.removeChild(boom[e.target.i][e.target.j]);
                            boom[e.target.i][e.target.j] = new createjs.Bitmap("assets/boom.png");
                            boom[e.target.i][e.target.j].x = circles[e.target.i][e.target.j].x;
                            boom[e.target.i][e.target.j].y = circles[e.target.i][e.target.j].y;
                            boom[e.target.i][e.target.j].scaleX = boom[e.target.i][e.target.j].scaleY = circleSize / 185;
                            stage.addChild(boom[e.target.i][e.target.j]);

                            
                            stage.removeChild(arr[e.target.i][e.target.j]);
                            arr[e.target.i][e.target.j] = -1;
                            stage.removeChild(arr[e.target.i][e.target.j - 1]);
                            arr[e.target.i][e.target.j - 1] = -1;
                            stage.removeChild(arr[e.target.i][e.target.j + 1]);
                            arr[e.target.i][e.target.j + 1] = -1;

                            stage.removeChild(circles[e.target.i][e.target.j]);
                            circles[e.target.i][e.target.j] = -1;
                            stage.removeChild(circles[e.target.i][e.target.j - 1]);
                            circles[e.target.i][e.target.j - 1] = -1;
                            stage.removeChild(circles[e.target.i][e.target.j + 1]);
                            circles[e.target.i][e.target.j + 1] = -1;

                            stage.removeChild(texts[e.target.i][e.target.j]);
                            texts[e.target.i][e.target.j] = -1;
                            stage.removeChild(texts[e.target.i][e.target.j - 1]);
                            texts[e.target.i][e.target.j - 1] = -1;
                            stage.removeChild(texts[e.target.i][e.target.j + 1]);
                            texts[e.target.i][e.target.j + 1] = -1;

                            for (var i = e.target.i; i < circleByY; i++) {
                                for (var j = e.target.j-1; j <= e.target.j+1; j++) {
                                    stage.removeChild(circles[i][j],texts[i][j]);
                                    if(j != -1 || j!= 9){
                                        if(typeof circles[i][j] === "object"){
                                            boom[i][j] = new createjs.Bitmap("assets/boom.png");
                                            boom[i][j].x = circles[i][j].x;
                                            boom[i][j].y = circles[i][j].y;
                                            boom[i][j].scaleX = boom[i][j].scaleY = circleSize / 185;
                                            stage.addChild(boom[i][j]);   
                                        }
                                    }
                                    circles[i][j] = texts[i][j] = arr[i][j] = -1;               
                                }
                            }
                            if (help_but.cliq === 1) {
                                stage.removeChild(helper,help,okButton,pricel);
                                stage.addChild(helper,help,okButton,pricel);
                            }
                            count = count + 80, counText.text = "Счет: "+count;
                        } else {count = count - 143; counText.text = "Счет: "+count;}
                        arrRandomIzDevyati = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
                        gunText.color = "white";
                        gunText.text = textForBound = randomForMainAction();
                    }
                    stage.update();
                });
            }
        }
        stage.update();
    }


    function randomIzDevyati(){
        for(var i = 8; i >= 0; i--){
            for(var j = circleByY-1; j >= 0; j--){
                if(arr[j][i] != -1){
                    arrRandomIzDevyati[i] = parseInt(arr[j][i], arrStringChecker[j][i]).toString(10);
                    break;
                } 
            }
        }
    }


    function randomForMainAction(){
        randomIzDevyati();
        gunTextHelper = arrRandomIzDevyati[Rand(0,8)];
        while(gunTextHelper == -1){
            gunTextHelper = arrRandomIzDevyati[Rand(0,8)];
            if(t == 32){
                if(gunTextHelper == -1) {
                    recover();
                }
                break;
            }
            t++;
        }
        t = Rand(1,100);
        if (t < 10 && gunTextHelper != -1) {gunText.color = "gold"; gunTextHelper = "~";}
        t = 0; 
        return gunTextHelper;
    }

    createjs.Ticker.setInterval(30);
    createjs.Ticker.setFPS(60);
    function annihilation() {
        for(var i = 0; i < circleByY; i++){
            for (var j = 0; j < 9; j++) {
                stage.removeChild(texts[i][j],circles[i][j]);
                stage.removeChild(boom[i][j]);
            }
        }
        arr = arrStringChecker = arrHelper = circles = texts = null;
        stage.removeChild(gun, gunText, pricel,boom);
    }
    function recover() {
        annihilation();
        help_counter.text = wave+"-Я ВОЛНА";
        stage.removeChild(help,helper,okButton); help_but.cliq = 0;
        stage.addChild(help_counter);
        matrixArray(circleByY,9);
        setTimeout(function(){
            circleCreation();
            textCreation();
            mainAction();
            gunText.text = textForBound = randomForMainAction();
            stage.removeChild(help_counter);
            stage.addChild(gun, gunText,pricel);
            time*=0.97;wave++;
            if (counts < 32) counts+=2;
            date = null; date = new Date(); date.setSeconds(date.getSeconds() + time);
        }, 2000);
    }
    function end() {
        annihilation();
        help_counter.text = "ВАШ СЧЕТ: "+count + "\n \nПо всей Земле\n инопланетянам еще\n продолжают оказывать\n сопротивление, а для \nВас эта война уже\n закончена.";
        help_counter.y = ch/2-2.5*circleSize*0.8;

        var zoneButtonEnd = new createjs.Shape();
        zoneButtonEnd.graphics.f("black").dr(0, 0, okBoundsEnd.width, okBoundsEnd.height);
        okEnd.hitArea = zoneButtonEnd;
        okEnd.on("click", function(){
            location.reload();
            stage.removeChild(helper,help_counter,okEnd,pricel);
        })

        stage.removeChild(counText, help_but,okButton);
        stage.addChild(helper,help_counter,okEnd,pricel);
    }


    function cloudsCreation(){
        var clouds_footter = new createjs.Bitmap("assets/clouds_footter.png");
        clouds_footter.scaleX = clouds_footter.scaleY = cw/ 2100 ;
        clouds_footter.scaleY = 0.65;
        clouds_footter.x = 0;
        clouds_footter.y = ch - 345 * clouds_footter.scaleY - circleSize*0.84;


        for(var i = 0; i < 9; i++){
            cloudBack[i] = new createjs.Bitmap("assets/oblaka_b/cloud"+ (i+1) +"b.png");
            cloudBack[i].x = Rand(0,cw);
            cloudBack[i].y = Rand(0,ch - (345 * (2100 / cw) - circleSize * 0.84));
            cloudSpeedBack[i] =Math.random() * (maxSpeedB - minSpeedB) + minSpeedB;
            stage.addChild(cloudBack[i]);
        }

        for(var i = 0; i < 5; i++){
            cloud[i] = new createjs.Bitmap("assets/oblaka_f/cloud"+ (i+1) +"f.png");
            cloud[i].x = Rand(0,cw);
            cloud[i].y = Rand(0,ch - (345 * (2100 / cw) - circleSize * 0.84));
            cloudSpeed[i] =Math.random() * (maxSpeedF - minSpeedF) + minSpeedF;
            stage.addChild(cloud[i]);
        }
        stage.addChild(clouds_footter); 
        stage.update();
    }

    cloudsCreation();
    recover();
stage.update();
}