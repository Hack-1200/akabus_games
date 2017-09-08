function send_answer_in(){ 
    if (language_id==1){
      var prav_text = prav + " of " + vip + " time of completion: " +  vrema_vip + "\n" + examples;
    } else{
      var prav_text = prav + " из " + vip + " за " +  vrema_vip + "\n" + examples;
    }
    
    prav_percent = parseInt(prav/vip*100);
    send_answer(prav_percent,prav_text);
}
var examples = "";
function navbar_fill(){
  if (language_id==1){
    $("#modal_result_title").html("Result");
    $("#modal_result_p").html("Congratulations, you've done your training exercise !!! Here are your results:");
    $("#modal_result_again").html("To try one more time");
    $("#modal_result_send").html("Send");
    $("#modal_settings_title").html("Settings");
    $("#modal_result_title").html("Result");
    $("#modal_settings_modul").html("Module");
    $("#vipolneno_menu_h5").html("Done");
    $("#modal_settings_correctness").html("Correctness");
    $("#modal_settings_difficulty").html("Difficulty");
    $("#modal_settings_operations").html("Operations");
    $("#button_prosto").html("Simple");
    $("#button_prosto").attr("title","Simple count" );
    $("#button_brat").html("Brother");
    $("#button_brat").attr("title","Brothers help" );
    $("#button_drug").html("Friend");
    $("#button_drug").attr("title","Friends help" );
    $("#button_combo").html("Combo");
    $("#button_combo").attr("title","Combined count" );
    $("#button_random").html("Random");
    $("#Button_operation_plus").attr("title","Addition" );
    $("#Button_operation_minus").attr("title","Substraction" );
    $("#Button_operation_plus_minus").attr("title","Addition + Substraction" );
    $("#modal_settings_kolslog").html("Number of summands");
    $("#modal_settings_interval").html("Interval");
    $("#modal_settings_font").html("Font");
    $("#modal_settings_save").html("Save");
    $("#navbar_modul_title").html("Module");
    $("#navbar_operation_title").html("Operation");
    $("#navbar_difficulty_title").html("Difficulty");
    $("#navbar_kolslog_title").html("Number of summands");
    $("#navbar_interval_title").html("Interval");
    $("#navbar_mode_title").html("Mode");
  }
  switch (Level){
    case 1:
      button_prosto_f()
    break;
    case 2:
      
      button_brat_f()
      button_brat_f()
    break;
    case 3:
      button_drug_f()
      button_drug_f()
    break;
    case 4:
      
      button_combo_f()
      button_combo_f()
    break;
    case 5:
      
      button_random_f()
    break;
  } 
  switch (Operation){
    case 0:
     
      operation_plus()
    break;
    case 1:
      
      operation_minus()
    break;
    case 2:
     
      operation_plus_minus()
    break;
  }
  switch (Kolcifr){
    case 1:
      
      Kolcifr_1()
    break;
    case 2:
      
      Kolcifr_2()
    break;
    case 3:
      
      Kolcifr_3()
    break;
    case 4:
      
      Kolcifr_4()
    break;
  }
  for (var i=0; i<Checked_cifr.length;i++){
    if (Checked_cifr[i]!=0){
      button_id = "#button_" + Checked_cifr[i].toString()
      $(button_id).addClass("active")
    }
  }
  if (half==true) $("#Button_half").addClass("active")
  else $("#Button_half").removeClass("active")
  document.getElementById('navbar_Kolslog').innerHTML = '('+ Kolslog +')';
  
  if (language_id==1){
    document.getElementById('navbar_interval').innerHTML = '('+ parseFloat(Skorost/1000) +'sec)';
    document.getElementById('navbar_vipolneno_text').innerHTML = 'Done 0 of '+zad+' (0%)';
    document.getElementById('vipolneno_text').innerHTML = 'Done 0 of '+zad+' (0%)';
    document.getElementById('modal_pravilno_text').innerHTML = "Correct 0 of 0 (0%)";
  }
  else{
    document.getElementById('navbar_interval').innerHTML = '('+ parseFloat(Skorost/1000) +'сек)';
    document.getElementById('navbar_vipolneno_text').innerHTML = 'Вып 0 из '+zad+' (0%)';
    document.getElementById('vipolneno_text').innerHTML = 'Вып 0 из '+zad+' (0%)';
    document.getElementById('modal_pravilno_text').innerHTML = "Правильно 0 из 0 (0%)";
  }
    
  zad = parseInt(zad);
  Skorost = parseInt(Skorost);
  Kolslog = parseInt(Kolslog);
}

function unrandom_ekran_f(){
 random_ekran = false
      for (var i=1;i<=8;i++){
       window_heading_id = "#window_heading_" + i.toString()
       $(window_heading_id).css("visibility", "visible")
      } 
}      
function random_ekran_f(){
  synchro = true
  show_window_task_f(1)
  random_ekran = true
   for (var i=1;i<=8;i++){
    window_heading_id = "#window_heading_" + i.toString()
    $(window_heading_id).css("visibility", "hidden")
   } 
}
var random_ekran = false

var style = true, voice=true, interval = []
var ekran_number = 1;
var task = {};

function show_window_task_f(n){
 
  if (!(device.mobile() || device.tablet())){
    if (n==1 ) $("#window_heading_1").css("visibility","hidden")
    else if (n!=1 && random_ekran==false)  $("#window_heading_1").css("visibility","visible")
    ekran_number = parseInt(n);
    for (var i=0; i<=8; i++){
      window_task_id = "#window_task_" + i.toString();
      $(window_task_id).removeClass("col-lg-12 col-md-12 col-sm-12 col-lg-6 col-md-6 col-sm-6 col-lg-4 col-md-4 col-sm-4 col-lg-3 col-md-3 col-sm-3");
      $(window_task_id).addClass("hidden");
    }
    if (n<=3){
      for (var i=1; i<=n; i++){

        window_task_id = "#window_task_" + i.toString();
        col = "col-lg-" + parseInt(12/n) + " col-md-" + parseInt(12/n) + " col-sm-" + parseInt(12/n);
        $(window_task_id).addClass(col);
        $(window_task_id).css("height", "90vh");
        $(window_task_id).removeClass("hidden");
        Editbox_ekran_id = "#Editbox_ekran_" + i.toString();
        $(Editbox_ekran_id).css("height", "85vh");
        Editbox_otvet_id = "#Editbox_otvet_" + i.toString();
        vw = parseInt(100/(3*n)) + "vw"
        if (n==1) vw = parseInt(100/(4)) + "vw"
        if (n==3) { vh = "7vh";  $(Editbox_ekran_id).css("font-size", vw);}
        else {vh = "10vh"; $(Editbox_ekran_id).css("font-size", vw); }
        $(Editbox_otvet_id).css("font-size", vh);
        $(Editbox_otvet_id).css("height", "85vh");
      }
    }
    else if(n==4){
      for (var i=1; i<=n; i++){
        window_task_id = "#window_task_" + i.toString();
        col = "col-lg-6 col-md-6 col-sm-6";
        $(window_task_id).addClass(col);
        $(window_task_id).removeClass("hidden");
        $(window_task_id).css("height", "45vh");
        Editbox_ekran_id = "#Editbox_ekran_" + i.toString();
        $(Editbox_ekran_id).css("height", "40vh");
        vw = parseInt(100/(3*2)) + "vw"
        $(Editbox_ekran_id).css("font-size", vw);
        Editbox_otvet_id = "#Editbox_otvet_" + i.toString();
        $(Editbox_otvet_id).css("font-size", "5vh");
        $(Editbox_otvet_id).css("height", "40vh");
      }
    }  
    else if (n==5 || n==6){
      for (var i=1; i<=n; i++){
        window_task_id = "#window_task_" + i.toString();
        col = "col-lg-4 col-md-4 col-sm-4";
        $(window_task_id).addClass(col);
        $(window_task_id).removeClass("hidden");
        $(window_task_id).css("height", "45vh");
        Editbox_ekran_id = "#Editbox_ekran_" + i.toString();
        $(Editbox_ekran_id).css("height", "40vh");
        vw = parseInt(100/(3*3)) + "vw"
        $(Editbox_ekran_id).css("font-size", vw);
        Editbox_otvet_id = "#Editbox_otvet_" + i.toString();
        $(Editbox_otvet_id).css("font-size", "5vh");
        $(Editbox_otvet_id).css("height", "40vh");
      }
    }
    else{
      for (var i=1; i<=n; i++){
        window_task_id = "#window_task_" + i.toString();
        col = "col-lg-3 col-md-3 col-sm-3";
        $(window_task_id).addClass(col);
        $(window_task_id).removeClass("hidden");
        $(window_task_id).css("height", "45vh");
        Editbox_ekran_id = "#Editbox_ekran_" + i.toString();
        $(Editbox_ekran_id).css("height", "40vh");
        vw = parseInt(100/(3*4)) + "vw"
        $(Editbox_ekran_id).css("font-size", vw);
        Editbox_otvet_id = "#Editbox_otvet_" + i.toString();
        $(Editbox_otvet_id).css("font-size", "5vh");
        $(Editbox_otvet_id).css("height", "40vh");
      }
    }
  }
  else{
      $("#Editbox_ekran_1").css("font-size", "35vw");
      $("#Editbox_otvet_1").css("font-size", "7vh");
      $("#Editbox_ekran_1").css("height", "50vh");
      $("#Editbox_otvet_1").css("height", "50vh");
      $("#window_heading_1").addClass("hidden");
  }
}
function change_style(){
  if (style==true){
    style = false
    $("#window_task").removeClass('black_style8');
    $("#window_task").addClass('white_style');

    for (var i=0;i<=8; i++){
      window_heading_id = "#window_heading_" + i.toString();
      $(window_heading_id).removeClass("black_style");
      $(window_heading_id).addClass("white_style");
      Editbox_ekran_id = "#Editbox_ekran_" + i.toString();
      $(Editbox_ekran_id).css("color", "green");
      Editbox_otvet_id = "#Editbox_otvet_" + i.toString();
      $(Editbox_otvet_id).css("color", "green");
    }
    document.getElementById("navbar_logo").style.backgroundImage = "url(/static/custom/css/logo_rus.png)"  
    $("#button_start").removeClass('black_style');
    $("#button_start").addClass('white_style');
    for (var i=1;i<=27;i++){
      element_id = "#black_style_" + i.toString()
      $(element_id).removeClass('black_style');
      $(element_id).addClass('white_style');
    }
  }  
  else{
    style = true
    document.getElementById("navbar_logo").style.backgroundImage = "url(/static/custom/css/s5_logo.png)"  
    $("#window_task").addClass('black_style8');
    $("#window_task").removeClass('white_style');
    for (var i=0;i<=8; i++){
      window_heading_id = "#window_heading_" + i.toString();
      $(window_heading_id).addClass("black_style");
      $(window_heading_id).removeClass("white_style");
      Editbox_ekran_id = "#Editbox_ekran_" + i.toString();
      $(Editbox_ekran_id).css("color", "white");
      Editbox_otvet_id = "#Editbox_otvet_" + i.toString();
      $(Editbox_otvet_id).css("color", "white");
    }
    $("#button_start").addClass('black_style');
    $("#button_start").removeClass('white_style');
    for (var i=1;i<=27;i++){
      element_id = "#black_style_" + i.toString()
      $(element_id).addClass('black_style');
      $(element_id).removeClass('white_style');
    }
  }  
}

function changefont(){
  switch(document.getElementById('select').selectedIndex){
    case 0:
      Editbox_ekran_1.style.fontFamily = 'Source Sans Pro';
      Editbox_ekran_2.style.fontFamily = 'Source Sans Pro';
    break;
    case 1:
      Editbox_ekran_1.style.fontFamily = 'Showcard Gothic';
      Editbox_ekran_1.style.fontFamily = 'Showcard Gothic';
    break;
    case 2:
      Editbox_ekran_1.style.fontFamily = 'Jokerman';
      Editbox_ekran_1.style.fontFamily = 'Jokerman';
    break;
    case 3:
      Editbox_ekran_1.style.fontFamily = 'DFPOP1-W9';
      Editbox_ekran_1.style.fontFamily = 'DFPOP1-W9';
    break;
    case 4:
      Editbox_ekran_1.style.fontFamily = 'Playbill';
      Editbox_ekran_1.style.fontFamily = 'Playbill';
    break;
  }
}

var audio = new Audio();
var audio2 = new Audio();
var chered = true;
function soundClick(n) {
  if (chered == true) {
    audio.src = "/static/custom/audio/new_sound_"+n.toString() + '.mp3'
    audio.play()
  }
  else{
    audio2.src = "/static/custom/audio/new_sound_"+n.toString() + '.mp3'
    audio2.play()
  }
  chered = !chered
}

function soundClick2(u,r) {
    var t = 0;
    var music = "";
    if (r == 1){
        switch (u){
            case 0: 
                t = random_between(1,48);   
                music = 'new_incorrect-'+ t   + '.mp3';
            break;
            case 1:
                t = random_between(1,19);   
                music = 'new_correct-'+ t   + '.mp3';
            break;
            case 2:
                t = random_between(1,58);   
                music = 'new_present-'+ t   + '.mp3';
            break;
            
        }
        audio.src = "/static/custom/audio/" + music;
        audio.autoplay = true;
    }
    else audio.autoplay = false;
}



window.onload=function(){
  show_pravilno();
  show_vipolneno();
  show_window_task_f(1)
  for (var i=1; i<=8; i++) interval[i] = 1000;
  for (var i=1;i<=47;i++ ){
    var audio = document.createElement('audio');
    src = "/static/custom/audio/new_incorrect-"+ i + ".mp3"
    audio.setAttribute('src',src);
    audio.setAttribute('preload','preload');
  }  
  for (var i=1;i<=17;i++ ){
    var audio = document.createElement('audio');
    src = "/static/custom/audio/new_correct-"+ i + ".mp3"
    audio.setAttribute('src',src);
    audio.setAttribute('preload','preload');
  }  
  for (var i=1;i<=57;i++ ){
    var audio = document.createElement('audio');
    src = "/static/custom/audio/new_present-"+ i + ".mp3"
    audio.setAttribute('src',src);
    audio.setAttribute('preload','preload');
  }  
  for (var i=1;i<=4;i++ ){
    var audio = document.createElement('audio');
    src = "/static/custom/audio/new_sound_"+ i + ".mp3"
    audio.setAttribute('src',src);
    audio.setAttribute('preload','preload');
  }  
  if (language_id==1){
    for (var i=1;i<=99;i++ ){
      var audio = document.createElement('audio');
      src = "/static/custom/audio/numbers/eng_plus_"+ i + ".mp3"
      audio.setAttribute('src',src);
      audio.setAttribute('preload','preload');
    } 
    for (var i=1;i<=99;i++ ){
      var audio = document.createElement('audio');
      src = "/static/custom/audio/numbers/eng_minus_"+ i + ".mp3"
      audio.setAttribute('src',src);
      audio.setAttribute('preload','preload');
    } 
  }
  else{
    for (var i=1;i<=99;i++ ){
      var audio = document.createElement('audio');
      src = "/static/custom/audio/numbers/gplus_"+ i + ".mp3"
      audio.setAttribute('src',src);
      audio.setAttribute('preload','preload');
    } 
    for (var i=1;i<=99;i++ ){
      var audio = document.createElement('audio');
      src = "/static/custom/audio/numbers/gminus_"+ i + ".mp3"
      audio.setAttribute('src',src);
      audio.setAttribute('preload','preload');
    } 
  }
    
  change_background();
  for (var i=0; i<=8; i++){
        Editbox_ekran_id = "#Editbox_ekran_" + i.toString();
        $(Editbox_ekran_id).css("fontFamily", 'Showcard Gothic');
  }

  if (device.mobile() || device.tablet() ){
    $("#vipolneno_menu").removeClass("hidden")
    $("#navbar_logo").css("width","60")
    $("#navbar_parametrs").addClass("hidden")
    $("#keyboard").removeClass("hidden")
    Editbox_ekran_0.style.height = "50vh";
    Editbox_otvet_0.style.height = "50vh";
    Editbox_ekran_0.style.fontSize = "27vh"; 
    Editbox_otvet_0.style.fontSize = "6vh"; 
    for (var i=7;i<=18;i++){
      element_id = "black_style_"+i;
      document.getElementById(element_id).style.height = "8vh";
      document.getElementById(element_id).style.fontSize = "4vh";
    }
  } 
  else{
    $("#vipolneno_menu").addClass("hidden")
    $("#navbar_parametrs").removeClass("hidden")
    $("#keyboard").addClass("hidden")
    Editbox_ekran_0.style.height = "90vh";
    Editbox_otvet_0.style.height = "90vh";
    Editbox_ekran_0.style.fontSize = "50vh"; 
    Editbox_otvet_0.style.fontSize = "10vh"; 
    // Editbox_ekran_1.style.height = "90vh";
    // Editbox_otvet_1.style.height = "90vh";
    // Editbox_ekran_1.style.fontSize = "50vh"; 
    // Editbox_otvet_1.style.fontSize = "10vh"; 
  }
  // Editbox_ekran_0.value = "►";
  
//   if (device.mobile() || device.tablet()) {
//     if (language_id==1){ $('#Editbox_ekran_0').val("Wait a bit..."); } else{ $('#Editbox_ekran_0').val("Подождите немного..."); }
    
//     Editbox_ekran_0.style.fontSize = "5vw"
//   } 
//   if (language_id==1){ $('#Editbox_ekran_1').val("Wait a bit..."); } else{ $('#Editbox_ekran_1').val("Подождите немного..."); } 
//   Editbox_ekran_1.style.fontSize = "10vh";
//   setTimeout("start_ok = true; soundClick(1); $('#Editbox_ekran_1').val('►'); if (device.mobile() || device.tablet()) Editbox_ekran_0.style.fontSize = '27vh';  $('#Editbox_ekran_0').val('►'); Editbox_ekran_1.style.fontSize = '25vw';", 5000);

}

var image_schotchik = 0;
function save_examples(){
  example=""
  for (var i=1; i<=ekran_number; i++){
    for (var j=0; j<primer1[i].length; j++){
      if (parseInt(primer1[i][j])>0 && j!=0) example += "+" + primer1[i][j]
      else example += primer1[i][j]
    }
    example += student_answer
  }  
  examples += example + "\n"
}
function show_example(){
  for (var i=1; i<=ekran_number; i++){
    example = "\n";
    for (var j=0; j<primer1[i].length; j++){
      if (parseInt(primer1[i][j])>0 && j!=0) example += "+" + primer1[i][j]
      else example += primer1[i][j]
    }
    // example += "="+correct_answer[i]
    example += student_answer
    Editbox_otvet_id = "#Editbox_otvet_" + i.toString()
    $(Editbox_otvet_id).val(example)
  }  
}

function change_background(){
  image_schotchik = random_between(1,27)
  var image_fon = "fon_" + image_schotchik + ".jpg";
  document.body.style.backgroundImage = 'url(/static/custom/css/'+image_fon +')';
  image_schotchik = parseInt(image_schotchik);
}



function button_half_f(){
  if ( Button_half.classList.contains('active') ){
    Button_half.classList.remove('active');
    half = false;
  }
  else{
    Button_half.classList.add('active');
    half = true;
  }
}
function show_vipolneno(){
    var x = parseInt(vip/zad*100); 
    document.getElementById('navbar_vipolneno_progress').style.width = x + "%";
    if (language_id==1){
      document.getElementById('navbar_vipolneno_text').innerHTML = "Done " + vip + " of " + zad + " (" + x + "%)";
      document.getElementById('vipolneno_text').innerHTML = "Done " + vip + " of " + zad + " (" + x + "%)";
    } else{
      document.getElementById('navbar_vipolneno_text').innerHTML = "Выполнено " + vip + " из " + zad + " (" + x + "%)";
      document.getElementById('vipolneno_text').innerHTML = "Выполнено " + vip + " из " + zad + " (" + x + "%)";
    }
    
    document.getElementById('vipolneno_progress').style.width = x + "%";
    
    vip = parseInt(vip);
    zad = parseInt(zad);
}
var var_d = new Date();
var start_time = var_d.getTime();
var end_time = 0, vrema_vip = 0;
function show_result(){
    var_d = new Date();
    end_time = var_d.getTime();
    vrema_vip = parseInt((end_time - start_time)/1000);
    if (language_id==1){
      vrema_vip = parseInt(vrema_vip/60) + " min " + parseInt(vrema_vip % 60) + " sec "
      document.getElementById('modal_vrema_vip').innerHTML = " Time of completion: " +  vrema_vip +" / Date of completion: " + var_d.toLocaleDateString(); 
      document.getElementById('modal_vipolneno_progress').style.width = "100%";
      document.getElementById('modal_vipolneno_text').innerHTML = "Done " + vip + " of " + zad + " (100%)";
      vip = parseInt(vip);
      zad = parseInt(zad);
      var x = parseInt(prav/vip*100); 
      document.getElementById('modal_pravilno_progress').style.width = x + "%";
      document.getElementById('modal_pravilno_text').innerHTML = "Correct " + prav + " of " + vip + " (" + x + "%)";
    } 
    else{
      vrema_vip = parseInt(vrema_vip/60) + " мин " + parseInt(vrema_vip % 60) + " сек "
      document.getElementById('modal_vrema_vip').innerHTML = " Время выполнения: " +  vrema_vip +" / Дата выполнения: " + var_d.toLocaleDateString(); 
      document.getElementById('modal_vipolneno_progress').style.width = "100%";
      document.getElementById('modal_vipolneno_text').innerHTML = "Выполнено " + vip + " из " + zad + " (100%)";
      vip = parseInt(vip);
      zad = parseInt(zad);
      var x = parseInt(prav/vip*100); 
      document.getElementById('modal_pravilno_progress').style.width = x + "%";
      document.getElementById('modal_pravilno_text').innerHTML = "Правильно " + prav + " из " + vip + " (" + x + "%)";
    }
      
    vip = parseInt(vip);
    prav = parseInt(prav);
}
function show_pravilno(){
    if (vip == 0) x = 0;
    else x = parseInt(prav/vip*100); 
    document.getElementById('pravilno_progress').style.width = x + "%";
    document.getElementById('navbar_pravilno_progress').style.width = x + "%";
    if (language_id==1){
      document.getElementById('navbar_pravilno_text').innerHTML = "Correct " + prav + " of " + vip + " (" + x + "%)";
      document.getElementById('pravilno_text').innerHTML = "Correct " + prav + " of " + vip + " (" + x + "%)";
    } 
    else{
      document.getElementById('navbar_pravilno_text').innerHTML = "Правильно " + prav + " из " + vip + " (" + x + "%)";
      document.getElementById('pravilno_text').innerHTML = "Правильно " + prav + " из " + vip + " (" + x + "%)";
    }
      
    vip = parseInt(vip);
    prav = parseInt(prav);
}

function button_nastroyki_f(){
  $('#modal_settings').modal('show');
}


var example=""
function restart(){
  number_10=1
  Skorost = Skorost_default;
  Kolslog = Kolslog_default;
  prav = 0;
  vip = 0;
  start_time = var_d.getTime();
  show_pravilno(); 
  show_vipolneno();
  navbar_fill();
  examples = "";
}

function Kolcifr_1() {
  Button_Kolcifr_1.classList.add('active');
  Button_Kolcifr_2.classList.remove('active');
  Button_Kolcifr_3.classList.remove('active');
  Button_Kolcifr_4.classList.remove('active');
  Kolcifr = 1;
  document.getElementById('navbar_slojnost').innerHTML = '(1)';
}

function Kolcifr_2() {
  Button_Kolcifr_1.classList.remove('active');
  Button_Kolcifr_2.classList.add('active');
  Button_Kolcifr_3.classList.remove('active');
  Button_Kolcifr_4.classList.remove('active');
  Kolcifr = 2;
  document.getElementById('navbar_slojnost').innerHTML = '(10)';  
}

function Kolcifr_3() {
  Button_Kolcifr_1.classList.remove('active');
  Button_Kolcifr_2.classList.remove('active');
  Button_Kolcifr_3.classList.add('active');
  Button_Kolcifr_4.classList.remove('active');
  Kolcifr = 3;
  document.getElementById('navbar_slojnost').innerHTML = '(100)';
  
}

function Kolcifr_4() {
  Button_Kolcifr_1.classList.remove('active');
  Button_Kolcifr_2.classList.remove('active');
  Button_Kolcifr_3.classList.remove('active');
  Button_Kolcifr_4.classList.add('active');
  Kolcifr = 4;
  document.getElementById('navbar_slojnost').innerHTML = '(1000)';  
}



function operation_plus() {
  Button_operation_plus.classList.add('active');
  Button_operation_minus.classList.remove('active');
  Button_operation_plus_minus.classList.remove('active');
  Operation = 0;
  document.getElementById('navbar_operation').innerHTML = '(+)';
  
}

function operation_minus() {
  Button_operation_plus.classList.remove('active');
  Button_operation_minus.classList.add('active');
  Button_operation_plus_minus.classList.remove('active');
  Operation = 1;
  document.getElementById('navbar_operation').innerHTML = '(-)';
  
}

function operation_plus_minus() {
  Button_operation_plus.classList.remove('active');
  Button_operation_minus.classList.remove('active');
  Button_operation_plus_minus.classList.add('active');
  Operation = 2;
  document.getElementById('navbar_operation').innerHTML = '(+/-)';
  
}



 // Кнопка выбора всех видов слагаемых
function check_5(){
    if (button_prosto.classList.contains('active')){
      if (button_5.classList.contains('active')){
        button_5.classList.remove('active');
        button_6.classList.remove('active');
        button_7.classList.remove('active');
        button_8.classList.remove('active');
        button_9.classList.remove('active');
      }
      else{
        button_5.classList.add('active');
      }
    }
    else{
      if (button_5.classList.contains('active')){
        button_5.classList.remove('active');
      }
      else{
        button_5.classList.add('active')
      }
    }
    
  }

  function check_6(){
    if (button_prosto.classList.contains('active')){
      if (button_6.classList.contains('active')){
        button_6.classList.remove('active');
        button_7.classList.remove('active');
        button_8.classList.remove('active');
        button_9.classList.remove('active');
      }
      else{
        button_5.classList.add('active');
        button_6.classList.add('active');
      }
    }
    else{
      if (button_6.classList.contains('active')){
        button_6.classList.remove('active');
      }
      else{
        button_6.classList.add('active')
      }
    }
    
  }

  function check_7(){
    if (button_prosto.classList.contains('active')){
      if (button_7.classList.contains('active')){
        button_7.classList.remove('active');
        button_8.classList.remove('active');
        button_9.classList.remove('active');
      }
      else{
        button_5.classList.add('active');
        button_6.classList.add('active');
        button_7.classList.add('active');
      }
    }
    else{
      if (button_7.classList.contains('active')){
        button_7.classList.remove('active');
      }
      else{
        button_7.classList.add('active')
      }
    }
    
  }

  function check_8(){
    if (button_prosto.classList.contains('active')){
      if (button_8.classList.contains('active')){
        button_8.classList.remove('active');
        button_9.classList.remove('active');
      }
      else{
        button_5.classList.add('active');
        button_6.classList.add('active');
        button_7.classList.add('active');
        button_8.classList.add('active');
      }
    }
    else{
      if (button_8.classList.contains('active')){
        button_8.classList.remove('active');
      }
      else{
        button_8.classList.add('active')
      }
    }
    
  }

  function check_9(){
    if (button_prosto.classList.contains('active')){
      if (button_9.classList.contains('active')){
        button_9.classList.remove('active');
      }
      else{
        button_5.classList.add('active');
        button_6.classList.add('active');
        button_7.classList.add('active');
        button_8.classList.add('active');
        button_9.classList.add('active');
      }
    }
    else{
      if (button_9.classList.contains('active')){
        button_9.classList.remove('active');
      }
      else{
        button_9.classList.add('active')
      }
    }
  }
function check_all(){
    if (!button_check_all.classList.contains('active')){
    button_check_all.classList.add('active');
    if (!button_1.classList.contains('active')) button_1.classList.add('active');
    if (!button_2.classList.contains('active')) button_2.classList.add('active');
    if (!button_3.classList.contains('active')) button_3.classList.add('active');
    if (!button_4.classList.contains('active')) button_4.classList.add('active');
    if (!button_5.classList.contains('active')) button_5.classList.add('active');
    if (!button_6.classList.contains('active')) button_6.classList.add('active');
    if (!button_7.classList.contains('active')) button_7.classList.add('active');
    if (!button_8.classList.contains('active')) button_8.classList.add('active');
    if (!button_9.classList.contains('active')) button_9.classList.add('active');
  }
  else{
    button_check_all.classList.remove('active');
    if (button_1.classList.contains('active') && !button_1.classList.contains('hidden')) button_1.classList.remove('active');
    if (button_2.classList.contains('active') && !button_2.classList.contains('hidden')) button_2.classList.remove('active');
    if (button_3.classList.contains('active') && !button_3.classList.contains('hidden')) button_3.classList.remove('active');
    if (button_4.classList.contains('active') && !button_4.classList.contains('hidden')) button_4.classList.remove('active');
    if (button_5.classList.contains('active') && !button_5.classList.contains('hidden')) button_5.classList.remove('active');
    if (button_6.classList.contains('active') && !button_6.classList.contains('hidden')) button_6.classList.remove('active');
    if (button_7.classList.contains('active') && !button_7.classList.contains('hidden')) button_7.classList.remove('active');
    if (button_8.classList.contains('active') && !button_8.classList.contains('hidden')) button_8.classList.remove('active');
    if (button_9.classList.contains('active') && !button_9.classList.contains('hidden')) button_9.classList.remove('active');
  }
}

function button_prosto_f(){
    if (language_id==1){
      document.getElementById('navbar_modul').innerHTML = '(Sipmle)'; 
    } else{
      document.getElementById('navbar_modul').innerHTML = '(просто)'; 
    }
    
    if (button_prosto.classList.contains('active')){
      check_all();
    }
    else{
      button_6.classList.remove('hidden');
      button_7.classList.remove('hidden');
      button_8.classList.remove('hidden');
      button_9.classList.remove('hidden');
      Level = 1;
      button_prosto.classList.add('active');
      button_brat.classList.remove('active');
      button_drug.classList.remove('active');
      button_combo.classList.remove('active');
      button_random.classList.remove('active');

      button_check_all.classList.add('active');
      button_1.classList.add('active', 'hidden');
      button_2.classList.add('active', 'hidden');
      button_3.classList.add('active', 'hidden');
      button_4.classList.add('active', 'hidden');
      button_5.classList.add('active');
      button_6.classList.add('active');
      button_7.classList.add('active');
      button_8.classList.add('active');
      button_9.classList.add('active');
    }
    
  }

  function button_brat_f(){
    if (language_id==1){
      document.getElementById('navbar_modul').innerHTML = '(Brother)'; 
    } else{
      document.getElementById('navbar_modul').innerHTML = '(брат)'; 
    }
   
    if (button_brat.classList.contains('active')){
      check_all();
    }
    else{
    button_1.classList.remove('hidden');
    button_2.classList.remove('hidden');
    button_3.classList.remove('hidden');
    button_4.classList.remove('hidden');
    Level = 2;
    button_prosto.classList.remove('active');
    button_brat.classList.add('active');
    button_drug.classList.remove('active');
    button_combo.classList.remove('active');
    button_random.classList.remove('active');

    button_check_all.classList.add('active');
    button_1.classList.add('active');
    button_2.classList.add('active');
    button_3.classList.add('active');
    button_4.classList.add('active');
    button_5.classList.add('active', 'hidden');
    button_6.classList.add('active', 'hidden');
    button_7.classList.add('active', 'hidden');
    button_8.classList.add('active', 'hidden');
    button_9.classList.add('active', 'hidden');
    }
    
  }

  function button_drug_f(){
    if (language_id==1){
      document.getElementById('navbar_modul').innerHTML = '(friend)'; 
    } else{
      document.getElementById('navbar_modul').innerHTML = '(друг)'; 
    }
    
    if (button_drug.classList.contains('active')){
      check_all();
    }
    else{
    button_1.classList.remove('hidden');
    button_2.classList.remove('hidden');
    button_3.classList.remove('hidden');
    button_4.classList.remove('hidden');
    button_5.classList.remove('hidden');
    button_6.classList.remove('hidden');
    button_7.classList.remove('hidden');
    button_8.classList.remove('hidden');
    button_9.classList.remove('hidden');
    Level = 3;
    button_prosto.classList.remove('active');
    button_brat.classList.remove('active');
    button_drug.classList.add('active');
    button_combo.classList.remove('active');
    button_random.classList.remove('active');

    button_check_all.classList.add('active');
    button_1.classList.add('active');
    button_2.classList.add('active');
    button_3.classList.add('active');
    button_4.classList.add('active');
    button_5.classList.add('active');
    button_6.classList.add('active');
    button_7.classList.add('active');
    button_8.classList.add('active');
    button_9.classList.add('active');
  }
  
  }

  function button_combo_f(){
    if (language_id==1){
      document.getElementById('navbar_modul').innerHTML = '(combo)'; 
    } else{
      document.getElementById('navbar_modul').innerHTML = '(комбо)'; 
    }
    if (button_combo.classList.contains('active')){
      check_all();
    }
    else{
      button_6.classList.remove('hidden');
      button_7.classList.remove('hidden');
      button_8.classList.remove('hidden');
      button_9.classList.remove('hidden');
      Level = 4;
      button_prosto.classList.remove('active');
      button_brat.classList.remove('active');
      button_drug.classList.remove('active');
      button_combo.classList.add('active');
      button_random.classList.remove('active');

      button_check_all.classList.add('active');
      button_1.classList.add('active', 'hidden');
      button_2.classList.add('active', 'hidden');
      button_3.classList.add('active', 'hidden');
      button_4.classList.add('active', 'hidden');
      button_5.classList.add('active', 'hidden');
      button_6.classList.add('active');
      button_7.classList.add('active');
      button_8.classList.add('active');
      button_9.classList.add('active');
    }
    
  }

  function button_random_f(){
    if (language_id==1){
      document.getElementById('navbar_modul').innerHTML = '(random)'; 
    } else{
      document.getElementById('navbar_modul').innerHTML = '(произв)'; 
    }
    
    Level = 5;
    button_prosto.classList.remove('active');
    button_brat.classList.remove('active');
    button_drug.classList.remove('active');
    button_combo.classList.remove('active');
    button_random.classList.add('active');

    button_check_all.classList.add('active');
    button_1.classList.add('active', 'hidden');
    button_2.classList.add('active', 'hidden');
    button_3.classList.add('active', 'hidden');
    button_4.classList.add('active', 'hidden');
    button_5.classList.add('active', 'hidden');
    button_6.classList.add('active', 'hidden');
    button_7.classList.add('active', 'hidden');
    button_8.classList.add('active', 'hidden');
    button_9.classList.add('active', 'hidden');   
  }
function sychro_f(){
  synchro = true
  for (var j=1; j<=8;j++){
    interval_id = "#interval_"+j.toString()
    $(interval_id).html($('#Skorost_tablo').html())
    interval[j] = parseInt($('#Skorost_tablo').html()*1000)
  }
}



document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13|| e.keyCode === 32) {
        start_0();
    }
    return false;
}


function random_between(n,m){
  var t = n + randomInteger(m - n);
  return t;
}


function randomInteger (n) {
  var d = Math.floor(Math.random()*(n-0.0001))
  return d;
}
function power10(n){
  var d = 1;
  for (var i = 1; i <= n; i++) {
    d *= 10; 
  }
  return d;
}

function duplicat(b, c) {
    for (var d = [], e = {}, f = {}, a = 0; a < b.length; a++) e[b[a]] = !0;
    for (a = 0; a < c.length; a++) f[c[a]] = !0;
    for (var g in e) f[g] && d.push(g);
    return d;
};
function include(a,arr){
  var c = false, i = 0;
  while (c == false && i<arr.length) {
    if (a == arr[i++]) c = true;  
  }
  if (c == false) arr.push(a);
  return arr;
};

function exclude(a,arr){
  var c = false, i = 0;
  while (c == false && i < arr.length) {
    if (a == arr[i++]) {
      c = true;
    } 
  }
  if (c == true) {
    arr.splice(i-1,1);
  }
  return arr;
}

var 
chislo = 0,
chislo_plus_all = 0,
znak = 0,
schotchik = 0,
// Kolslog = 0,
// Kolcifr = 1,
cifr = [],
Level_Operation = 0,
// Level =1,
// Operation = 2,
// Skorost = 0,
possible_checked_var = [],
chislo_plus = [],
vip = 0,
prav = 0,
wb_Timer1,
// half = true,
// Checked_cifr = [],
prav_percent = 0,
progress_up = 0,
progress_up_key = true,
progress_down_key = true;

if (language_id == 1){
  var correct = [ 'Well done!', 'Delicious!', 'Doing good', 'This is awesome!', 'Incredible!',
  'Excellent!', 'Excellent!', 'Great!', "It's amazing!", 'Effectively', 'You win!',
  'Terrific!', 'Witty!', 'Perfect job!' , "That's it!", 'Wonderful!',
  'Amazing!', 'It bothers the conscience!', "That's better! ",'Good answer!',
  'You deserved it! ',' Sublime! ',' What are you capable of! ',' Keep it up! '," Well, it's an event! ",
  'You can!', 'Good work!', 'You are better now!', "You're on the right!", 'Do you know how to count?!',
  'Well prepared', 'Do you think playing!', "You're on your way!", 'At the highest level!', 'Wow!',
  'What progress!', 'I like that!', 'Unusually!', 'Brilliant!', 'You can be proud of!',
  'Wonderful!', 'Beauty', 'There are no words!', 'Workshop!', "You're a wizard!",
  'This is brilliant!', 'Good work!', 'You have a good head!' ,"It's nice to look at!", 'Charming!',
  "You're smart!", 'Reasonable answer!', 'This paper!' ,'This is worthy of praise!', "You're right!",
  'Exciting', 'correct answer', 'Right!', 'Another level!'];
}
else{ 
  var correct = ['Молодец!','Восхитительно!','Хорошо делаешь!','Это внушительно!','Невероятно!',
  'Отлично!','Превосходно!','Прекрасно!','Поразительно!','Эффектно!','Ты преуспеваешь!',
  'Потрясающе!','Остроумно!','Безупречная работа!','То, что надо!','Чудесно!',
  'Изумительно!','Потрудился на совесть!','Уже лучше!','Хороший ответ!',
  'Ты это заслужил!','Блистательнно!','Какой ты способный!','Так держать!','Ну, это событие!',
  'Ты смог!','Хорошо получается!','Сейчас лучше!','Ты справился!','Ты умеешь считать!',
  'Хорошо подготовился!','Ты считаешь играя!','Ты на правильном пути!','На высшем уровне!','Здорово!',
  'Какой прогресс!','Это мне нравится!','Необыкновенно!','Блестяще!','Можешь гордиться!',
  'Замечательно!','Красота!','Нет слов!','Мастерски!','Ты настоящий мастер!',
  'Это гениально!','Хорошо получается!','У тебя светлая голова!','Приятно смотреть!','Очаровательно!',
  'Ты сообразителен!','Разумный ответ!','Стоящая работа!','Это достойно похвалы!','Ты прав!',
  'Захватывающе!','Правильный ответ!','Правильно!','Другой уровень!'];
}



 const POSSIBLE_CONST_PROSTO = 
[[[[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,5,6,7,8],[0,1,2,5,6,7],[0,1,5,6],[0,5],[0,1,2,3,4],[0,1,2,3],[0,1,2],[0,1],[0]],
   [[],[],[],[],[],[],[],[],[],[]]],

 [[[],[],[],[],[],[],[],[],[],[]],
   [[0],[0,1],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,5],[0,1,5,6],[0,1,2,5,6,7],[0,1,2,3,5,6,7,8],[0,1,2,3,4,5,6,7,8,9]]],

 [[[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,5,6,7,8],[0,1,2,5,6,7],[0,1,5,6],[0,5],[0,1,2,3,4],[0,1,2,3],[0,1,2],[0,1],[0]],
   [[0],[0,1],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,5],[0,1,5,6],[0,1,2,5,6,7],[0,1,2,3,5,6,7,8],[0,1,2,3,4,5,6,7,8,9]]]];

const POSSIBLE_CONST_BRAT =  
[[[[1,2,3,4],[4],[3,4],[2,3,4],[1,2,3,4],[0,1,2,3,4],[0,1,2,3],[0,1,2],[0,1],[0]],
   [[0],[0,1],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,5],[5],[5,6],[5,6,7],[5,6,7,8]]],

 [[[5,6,7,8],[5,6,7,8],[5,6,7],[5,6],[0,5],[0,1,2,3],[0,1,2],[0,1],[0,1],[0]],
   [[0],[0,1],[0,1,2],[0,1,2,3],[0,1,2,3,4],[1,2,3,4],[2,3,4],[3,4],[4],[1,2,3,4]]],
   
 [[[1,2,3,4],[4],[3,4],[2,3,4],[1,2,3,4],[0,1,2,3,4],[0,1,2,3],[0,1,2],[0,1],[0]],
   [[0],[0,1],[0,1,2],[0,1,2,3],[0,1,2,3,4],[1,2,3,4],[2,3,4],[3,4],[4],[0,1,2,3,4,5,6,7,8,9]]]]; 


const POSSIBLE_CONST_DRUG =
[[[[3,4,5,6,7],[4,9],[4,3,8,9],[4,3,2,7,8,9],[6,7,8,9],[5],[4,5,9],[3,4,5,8,9],[2,3,4,5,7,8,9],[1,2,3,4,5,6,7,8,9]],
   [[],[],[],[],[],[],[],[],[],[]]],

 [[[],[],[],[],[],[],[],[],[],[]],
  [[1,2,3,4,5,6,7,8,9],[2,3,4,5,7,8,9],[3,4,5,8,9],[4,5,9],[5],[6,7,8,9],[4,3,2,7,8,9],[4,3,8,9],[4,9],[3,4,5,6,7]]],

 [[[3,4,5,6,7],[4,9],[4,3,8,9],[4,3,2,7,8,9],[6,7,8,9],[5],[4,5,9],[3,4,5,8,9],[2,3,4,5,7,8,9],[1,2,3,4,5,6,7,8,9]],
   [[1,2,3,4,5,6,7,8,9],[2,3,4,5,7,8,9],[3,4,5,8,9],[4,5,9],[5],[6,7,8,9],[4,3,2,7,8,9],[4,3,8,9],[4,9],[3,4,5,6,7]]]];

const POSSIBLE_CONST_COMBO = 
[[[[5,6,7,8],[5,6,7],[3,4,5,6],[2,3,4,5],[6,7,8,9],[6,7,8,9],[6,7,8],[6,7],[6,7,8],[6,7,8,9]],
   [[],[],[],[],[],[],[],[],[],[]]],

 [[[],[],[],[],[],[],[],[],[],[]],
  [[6,7,8,9],[6,7,8],[6,7,8,9],[6,7,8],[6,7,8,9],[1,2,3],[1,2,3,4],[1,2,3,4,5],[1,2,3,4,5,6],[5,6,7,8]]],

 [[[1,2,3,4,5,6,7,8],[5,6,7,9],[3,4,5,6],[2,3,4,5],[6,7,8,9],[6,7,8,9],[6,7,8],[6,7],[6,7,8],[6,7,8,9]],
   [[6,7,8,9],[6,7,8],[6,7,8,9],[6,7,8],[6,7,8,9],[1,2,3],[1,2,3,4],[1,2,3,4,5],[1,2,3,4,5,6],[1,2,3,4,5,6,7,8]]]];




function whatchecked(){
  var arr=[];
      arr.push(0);
      if (button_1.classList.contains('active')) arr.push(1);
      if (button_2.classList.contains('active')) arr.push(2);
      if (button_3.classList.contains('active')) arr.push(3);
      if (button_4.classList.contains('active')) arr.push(4);
      if (button_5.classList.contains('active')) arr.push(5);
      if (button_6.classList.contains('active')) arr.push(6);
      if (button_7.classList.contains('active')) arr.push(7);
      if (button_8.classList.contains('active')) arr.push(8);
      if (button_9.classList.contains('active')) arr.push(9);
      if (arr.length == 1) arr.push(1);
  return arr;
}

function possible_checked (n,m){
  var arrchecked = Checked_cifr.slice();
  var initial = 
  [[[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,5,6,7,8],[0,1,2,5,6,7],[0,1,5,6],[0,5],[0,1,2,3,4],[0,1,2,3],[0,1,2],[0,1],[0]],
   [[0],[0,1],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,5],[0,1,5,6],[0,1,2,5,6,7],[0,1,2,3,5,6,7,8],[0,1,2,3,4,5,6,7,8,9]]];
  var arr_possible = [[[],[],[],[],[],[],[],[],[],[]],
                     [[],[],[],[],[],[],[],[],[],[]]];
  if (n == 2){
      for (var j = 0; j <= 1; j++){
      for (var k = 0; k <= 9; k++){
        arr_possible[j][k] = initial[j][k].slice();
      }
    }     
    }
  switch (parseInt(n)) {
    case 1:
      for (var j = 0; j <= 1; j++){
        for (var k = 0; k <= 9; k++){
          arr_possible[j][k] = duplicat(arrchecked, POSSIBLE_CONST_PROSTO[m][j][k]);
          if (arr_possible[j][k].length == 0){
            arr_possible[j][k] = initial[j][k].slice();
          }
        }
      }
    break;  
    case 2:
      for (var j = 0; j <= 1; j++){
        for (var k = 0; k <= 9; k++){
          arr_possible[j][k] = POSSIBLE_CONST_BRAT[m][j][k].slice();
          }
      }
      switch (parseInt(m)){
        case 0: 
          for (var k = 1; k <= 4; k++){
            arr_possible[0][k] = duplicat(arrchecked, POSSIBLE_CONST_BRAT[m][0][k]);
            if (arr_possible[0][k].length == 0 || arr_possible[0][k] == 0){
              arr_possible[0][k] = initial[0][k].slice();
            }
          }
        break;
        case 1:           
          for (var k = 5; k <= 8; k++){
            arr_possible[1][k] = duplicat(arrchecked, POSSIBLE_CONST_BRAT[m][1][k]);
            if (arr_possible[1][k].length == 0 || arr_possible[1][k] == 0){
              arr_possible[1][k] = initial[1][k].slice();
            }
          }
        break;  
        case 2:
          for (var k = 1; k <= 4; k++){
            arr_possible[0][k] = duplicat(arrchecked, POSSIBLE_CONST_BRAT[m][0][k]);
            if (arr_possible[0][k].length == 0 || arr_possible[0][k] == 0){
              arr_possible[0][k] = initial[0][k].slice();
            }
          }
          for (var k = 5; k <= 8; k++){
            arr_possible[1][k] = duplicat(arrchecked, POSSIBLE_CONST_BRAT[m][1][k]);
            if (arr_possible[1][k].length == 0 || arr_possible[1][k] == 0){
              arr_possible[1][k] = initial[1][k].slice();
            }
          }
        break;
      } 
    break;  
    case 3:
      var r = 1, p = 1;
      switch (parseInt(m)) {
        case 0: r = 0; p = 0; break;
        case 1: r = 1; p = 1; break;
        case 2: r = 0; p = 1; break;
      }
      for (var j = r; j <= p; j++){
        for (var k = 0; k <= 9; k++){
          arr_possible[j][k] = duplicat(arrchecked, POSSIBLE_CONST_DRUG[m][j][k]);
          if (arr_possible[j][k].length == 0){
            arr_possible[j][k] = initial[j][k].slice();
          }
        }
      }
    break;  
    case 4:
      // var r = 1, p = 1;
      switch (parseInt(m)) {
        case 0: 
          for (var k = 0; k <= 4; k++){
            arr_possible[0][k] = POSSIBLE_CONST_COMBO[0][0][k].slice();
          }
          for (var k = 5; k <= 9; k++){
            arr_possible[0][k] = duplicat(arrchecked, POSSIBLE_CONST_COMBO[0][0][k]);
            if (arr_possible[0][k].length == 0){
              arr_possible[0][k] =  duplicat([6,7,8,9], POSSIBLE_CONST_DRUG[2][0][k]); 
            }
            if (arr_possible[0][k].length == 0){
              arr_possible[0][k] =  initial[0][k].slice(); 
            }
          }
        break;
        case 1:
          for (var k = 6; k <= 9; k++){
            arr_possible[1][k] = POSSIBLE_CONST_COMBO[1][1][k].slice();
          }
          for (var k = 0; k <= 5; k++){
            arr_possible[1][k] = duplicat(arrchecked, POSSIBLE_CONST_COMBO[1][1][k]);
            if (arr_possible[1][k].length == 0 /*|| arr_possible[j][k] == 0*/){
              arr_possible[1][k] =  duplicat([6,7,8,9],POSSIBLE_CONST_DRUG[2][1][k]);
            }
            if (arr_possible[1][k].length == 0){
              arr_possible[1][k] =  initial[1][k].slice(); 
            }
          }
        break;
        case 2: 
          for (var k = 0; k <= 4; k++){
            arr_possible[0][k] = POSSIBLE_CONST_COMBO[0][0][k].slice();
          }
          for (var k = 5; k <= 9; k++){
            arr_possible[0][k] = duplicat(arrchecked, POSSIBLE_CONST_COMBO[0][0][k]);
            if (arr_possible[0][k].length == 0){
              arr_possible[0][k] =  duplicat([6,7,8,9], POSSIBLE_CONST_DRUG[2][0][k]); 
            }
            if (arr_possible[0][k].length == 0){
              arr_possible[0][k] =  initial[0][k].slice(); 
            }
          }
          for (var k = 6; k <= 9; k++){
            arr_possible[1][k] = POSSIBLE_CONST_COMBO[1][1][k].slice();
          }
          for (var k = 0; k <= 5; k++){
            arr_possible[1][k] = duplicat(arrchecked, POSSIBLE_CONST_COMBO[1][1][k]);
            if (arr_possible[1][k].length == 0 /*|| arr_possible[j][k] == 0*/){
              arr_possible[1][k] =  duplicat([6,7,8,9],POSSIBLE_CONST_DRUG[2][1][k]);
            }
            if (arr_possible[1][k].length == 0){
              arr_possible[1][k] =  initial[1][k].slice(); 
            }
          }


        break;
      }
    break;

    case 5:
      for (var i = 0; i <= 9; i++) {
        for (var j = 0; j<=1; j++){
          arr_possible[j][i] = [1,2,3,4,5,6,7,8,9];
        } 
      }
    break;  
  }
  return arr_possible;  
}

function TimerStop() {
  clearInterval(wb_Timer1);
}
var primer_num=0; primer_num_n = [0,0,0,0,0,0,0,0,0]
colors = ["#ff9999", "#dbefff", "#ffdb99", "#d199ff", "#ffff99","#19ff19","#9999ff"]
colors2 = ["red","purple","orange","DarkBlue","#ffd919","green","blue"]
var color_num = 0, primer1=[];

function show_ekran_n(n){
 if (primer_num_n[n] == primer1[n].length - 1){
    clearInterval(timer[n]); 
    document.getElementById('button_start').innerHTML = "✐";
    document.getElementById('black_style_16').innerHTML = "✐";
 
        Editbox_ekran_id ="#Editbox_ekran_" + n.toString();
        $(Editbox_ekran_id).val("")
      
    if (!(device.mobile() || device.tablet())){
          Editbox_ekran_id ="#Editbox_ekran_" + n.toString();
          $(Editbox_ekran_id).removeAttr("readOnly")
      document.getElementById("Editbox_ekran_1").focus();
    }
  }
  else{
    if (color_num % 6 == 0) color_num = 0
    if (style == true){
      
        Editbox_ekran_id ="#Editbox_ekran_" + n.toString();
        $(Editbox_ekran_id).css("color",colors[(color_num + n)%6])
      
    }
    else {
      
        Editbox_ekran_id ="#Editbox_ekran_" + n.toString();
        $(Editbox_ekran_id).css("color",colors2[(color_num + n)%6])
      
    }
    color_num++     
    primer_num_n[n]++
    
        Editbox_ekran_id ="#Editbox_ekran_" + n.toString();
        if (  isNaN(primer1[n][primer_num_n[n]]) ) {
          $(Editbox_ekran_id).val("")
        }  
        else  {
          $(Editbox_ekran_id).val(primer1[n][primer_num_n[n]])
        }
  }
}
var ekrans = [1,2,3,4,5,6,7,8]
function show_ekran(){
  
  if (primer_num == primer.length - 1){
    TimerStop()
    document.getElementById('button_start').innerHTML = "✐";
    document.getElementById('black_style_16').innerHTML = "✐";
    for (var i = 1; i<=ekran_number; i++){
        Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
        $(Editbox_ekran_id).val("")
      } 
    if (!(device.mobile() || device.tablet())){
      if (synchro==true && random_ekran==true ){
        show_window_task_f(1)
      }
      for (var i = 1; i<=ekran_number; i++){
          Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
          $(Editbox_ekran_id).removeAttr("readOnly")
        }
      
      document.getElementById("Editbox_ekran_1").focus();
    }
  }
  else{
      color_num++     
      primer_num++
    if (synchro==true && random_ekran==true ){
      for (var i = 1; i<=8; i++){
          Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
          $(Editbox_ekran_id).val("")
        }
        number_of_ekran =  ekrans[randomInteger(ekrans.length)]
        Editbox_ekran_id ="#Editbox_ekran_" + number_of_ekran;

        ekrans.splice( $.inArray(number_of_ekran, ekrans), 1 );
        if (ekrans.length == 0) ekrans = [1,2,3,4,5,6,7,8]
        if (style == true) $(Editbox_ekran_id).css("color",colors[(color_num)%6])
        else $(Editbox_ekran_id).css("color",colors2[(color_num)%6])
        $(Editbox_ekran_id).val(primer1[1][primer_num])
      }
      else{
    if (color_num % 6 == 0) color_num = 0
    if (style == true){
      for (var i = 1; i<=ekran_number; i++){
        Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
        $(Editbox_ekran_id).css("color",colors[(color_num + i)%6])
      }
    }
    else {
      
      for (var i = 1; i<=ekran_number; i++){
        Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
        $(Editbox_ekran_id).css("color",colors2[(color_num + i)%6])
      }
    }
    
    for (var i = 1; i<=ekran_number; i++){
        Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
        if (  isNaN(primer1[i][primer_num]) ) {
          $(Editbox_ekran_id).val("")
        }  
        else  {
          $(Editbox_ekran_id).val(primer1[i][primer_num])
        }
      }
    }  
    if ((ekran_number == 1) && (voice == true) && (Kolcifr <= 2) && (Skorost >= 700)) sound_number_f(primer[primer_num])
    else soundClick(2)
  }
}
var timer1, timer2, timer3, timer4, mus = false;
chered = true;
function sound_number_f(n){
  n = parseInt(n)
  if (language_id==1){
    if (n>0){
      sound_number = "eng_plus_" + n + ".mp3"
    }
    else{
      n = (-n)
      sound_number = "eng_minus_" + n + ".mp3"
    }
  }
  else{
    if (n>0){
      sound_number = "gplus_" + n + ".mp3"
    }
    else{
      n = (-n)
      sound_number = "gminus_" + n + ".mp3"
    }
  }
    
  if (chered == true) {
    audio.src = '/static/custom/audio/numbers/' + sound_number;
    audio.play();
  }
  else{
    audio2.src = '/static/custom/audio/numbers/' + sound_number;
    audio2.play();
  }
  chered = !chered; 
}
mus2=false
var start_ok = true;
function start_0(){ 
  if (vip == zad) {
                show_result();
                $('#modal_result').modal('show');
                if (mus2==false){
                    soundClick2(2,1);
                    mus2 = true;
                }
                
  }
  else{

    if (start_ok==true){
      if (mus == true){
        mus = false;
        audio.pause();
      }

      else{ 

        if (document.getElementById('button_start').innerHTML == "►"){
          for (var i=1; i <= ekran_number; i++){
              window_task_id ="#window_task_" + i.toString();
              $(window_task_id).addClass("hidden") 
            }
          $("#window_task_0").removeClass("hidden")
          for (var i=1; i<=8; i++){
              Editbox_ekran_id = "#Editbox_ekran_" + i;
              Editbox_otvet_id = "#Editbox_otvet_" + i;
              window_heading_id = "#window_heading_" + i;
              $(Editbox_ekran_id).removeClass("hidden")
              $(Editbox_otvet_id).addClass("hidden")
              $(window_heading_id).removeClass("panel-success panel-danger")
          }   

          document.getElementById('button_start').innerHTML = "✖";
          document.getElementById('black_style_16').innerHTML = "■";
          soundClick(1); 
          if (style == true){
            Editbox_ekran_1.style.color = "white"
            Editbox_ekran_2.style.color = "white"
          }
          else{
            Editbox_ekran_1.style.color = "#543ae8"
            Editbox_ekran_2.style.color = "#543ae8"
          }
          primer = []
          Editbox_ekran_0.value = 3;
          timer1 = setTimeout("soundClick(1); Editbox_ekran_0.value = 2;", 500);
          timer2 = setTimeout("soundClick(1); Editbox_ekran_0.value = 1;", 1000);
          timer3 = setTimeout(function(){
              soundClick(1);  
              Editbox_ekran_0.value = 'Start';
            }, 1500);
          timer4 = setTimeout("$('#button_start').html('►'); $('#window_task_0').addClass('hidden'); start();  ", 2500);
        }
        else if (document.getElementById('button_start').innerHTML == "✖") {
          document.getElementById('button_start').innerHTML = "►";
          document.getElementById('black_style_16').innerHTML = "►";
          clearTimeout(timer1); 
          clearTimeout(timer2); 
          clearTimeout(timer3); 
          clearTimeout(timer4); 
          Editbox_ekran_0.value = "►";
        }

        else {
          start();
         
        }
      }      
    } 
  }   
}
function generate(){
      stop_cycle = false
      schotchik = 0 
      chislo = 0;
      cifr = [];
      chislo_plus = [];
      primer_num=0
      primer_num_n = [0,0,0,0,0,0,0,0,0]
      primer = [] 
      for (i = 0; i < Kolcifr ; i++) {
        var t =  possible_checked(Level,Operation);
        possible_checked_var[i] = t.slice();
      }
  switch (parseInt(Level_Operation)) {
        case 10: {
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(4);
            chislo += cifr[i]*power10(i);
          }
          var i = Kolcifr - 1;
          cifr[i] = 1 + randomInteger(3);
          chislo += cifr[i]*power10(i);
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_simple_add()
          }
          
        } 
        break;

        case 11: {
          chislo = 0;
          var t = Checked_cifr.slice();
          t.splice( $.inArray(0, t), 1 );
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = t[randomInteger(t.length)]
            chislo += cifr[i]*power10(i);
          }
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_simple_sub()
          }
         
        }
        break;

        case 12: {
          chislo = 0;
          var t = Checked_cifr.slice();
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = t[randomInteger(t.length)]
            chislo += cifr[i]*power10(i);
          }
          t.splice( $.inArray(0, t), 1 );
          i = Kolcifr - 1;
          cifr[i] = t[randomInteger(t.length)]
          chislo += cifr[i]*power10(i);

          primer.push(chislo)
          while (stop_cycle == false){
            calculate_simple_add_sub()
          }

        } 
        break;

        case 20: {
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(5);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(3);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_brother_add()
          }
         
        } 
        break;

        case 21: {
          chislo = 0;
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = 5+randomInteger(5);
            chislo += cifr[i]*power10(i);
          }
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_brother_sub()
          }
        }
        break;

        case 22: {
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_brother_add_sub()
          }
         
        } 
        break;

        case 30: {
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_friend_add()
          }
        
        } 
        break;

        case 31: {
          znak = 1;
          chislo = 0;
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_friend_sub()
          }
         
        } 
        break;

        case 32: {
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_friend_add_sub()
          }
         
        } 
        break;

        case 40: {
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_combo_add()
          }
         
        } 
        break;

        case 41: {
          znak = 1;
          chislo = 0;
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_combo_sub()
          }
          
        } 
        break;

        case 42: {
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_combo_add_sub()
          }
         
        } 
        break;
        case 50: {
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_random_add()
          }
         
        } 
        break;

        case 51: {
          znak = 1;
          chislo = 0;
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_random_sub()
          }
          
        } 
        break;

        case 52: {
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          ;
          primer.push(chislo)
          while (stop_cycle == false){
            calculate_random_add_sub()
          }
         
        } 
        break;
      }
}

function skorost_plus(){
  
  var i = document.getElementById('Skorost_tablo').innerHTML;
  i = parseInt(i*10)/10;
  if (i >= 0 && i < 10) {
    i += 0.1;
    interval[1]+=100
     document.getElementById('Skorost_tablo').innerHTML = i.toFixed(1);
     if (language_id==1){
        document.getElementById('navbar_interval').innerHTML = '('+ i.toFixed(1)+ ' sec)';
     }
     else{
        document.getElementById('navbar_interval').innerHTML = '('+ i.toFixed(1)+ ' сек)';
     }
     
  }
}
  
function skorost_minus(){
  var i = document.getElementById('Skorost_tablo').innerHTML;
  // i = Math.ceil(i*10/10);
  if (i > 0) {
    i -= 0.1;
    interval[1]+=100
    if (i < 0.2) {
      document.getElementById('Skorost_tablo').innerHTML = 0.1; 
      interval[1]=100
      if (language_id==1){
        document.getElementById('navbar_interval').innerHTML = '(0.1 sec)';
      }
      else{
          document.getElementById('navbar_interval').innerHTML = '(0.1 сек)';
      }
    }
    else{ 
     document.getElementById('Skorost_tablo').innerHTML = i.toFixed(1);
      if (language_id==1){
        document.getElementById('navbar_interval').innerHTML = '('+ i.toFixed(1)+ ' sec)';
      }
      else{
          document.getElementById('navbar_interval').innerHTML = '('+ i.toFixed(1)+ ' сек)';
      }
    }  
  }
}

  function Kolslog_plus(){
    if (document.getElementById('Kolslog_tablo').innerHTML < 60){
      Kolslog++
      document.getElementById('navbar_Kolslog').innerHTML = '(' + Kolslog.toString() + ')';
      document.getElementById('Kolslog_tablo').innerHTML = Kolslog.toString()
   }
  }

  function Kolslog_minus(){
    if (document.getElementById('Kolslog_tablo').innerHTML > 2){
      Kolslog--
      document.getElementById('navbar_Kolslog').innerHTML = '(' + Kolslog.toString() + ')';
      document.getElementById('Kolslog_tablo').innerHTML = Kolslog.toString()
   }
  }

 number_10=1
 var timer = [], synchro=true;
function start(){
 
  switch (document.getElementById('button_start').innerHTML){
    case "►":
    for (var i = 1; i<=8; i++){
          Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
          $(Editbox_ekran_id).attr("readOnly","readOnly")
          $(Editbox_ekran_id).removeClass("hidden")
          Editbox_otvet_id ="#Editbox_otvet_" + i.toString();
          $(Editbox_otvet_id).addClass("hidden")
        }
       $("#window_task_0").addClass("hidden")
        for (var i=1; i <= ekran_number; i++){
          window_task_id ="#window_task_" + i.toString();
          $(window_task_id).removeClass("hidden")
        }
      stop_cycle = false

      document.getElementById('button_start').innerHTML = "■";
      // Skorost = parseInt(document.getElementById('Skorost_tablo').innerHTML*1000);  
      // Kolslog = parseInt(document.getElementById('Kolslog_tablo').innerHTML);
      // Checked_cifr = whatchecked();
      Level_Operation = Level*10 + Operation; 
      
      if (synchro==true && random_ekran==true && ekran_number==1){
        for (var i = 1; i<=8; i++){
          Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
          $(Editbox_ekran_id).val("")
        }
        generate();
        primer1[1] = primer.slice()
        number_of_ekran = ekrans[randomInteger(ekrans.length)]
        Editbox_ekran_id ="#Editbox_ekran_" + number_of_ekran;
        ekrans.splice( $.inArray(number_of_ekran, ekrans), 1 );;
        if (ekrans.length == 0) ekrans = [1,2,3,4,5,6,7,8]
        $(Editbox_ekran_id).val(primer1[1][0])
      }
      else{
        for (var i = 1; i<=ekran_number; i++){
          generate();
          primer1[i] = primer.slice()
          Editbox_ekran_id ="#Editbox_ekran_" + i.toString();
          $(Editbox_ekran_id).val(primer1[i][primer_num])
        } 
      }
      if ((voice ==true) && (ekran_number==1) && (Kolcifr <= 2) && random_ekran==false && (Skorost >= 700)) sound_number_f(primer1[1][0])
      else soundClick(2) 
       primer = primer1[1].slice()
       for (var i=2; i<=ekran_number; i++){
        if (primer1[i].length >= primer.length)
          primer = primer1[i].slice()
       }
      if (synchro==true && random_ekran==false) wb_Timer1 = setInterval("show_ekran()", Skorost)
      else if (synchro==true && random_ekran==true && ekran_number==1){
        show_window_task_f(8);
        
        wb_Timer1 = setInterval("show_ekran()", Skorost)
      }  
      else{
        switch (ekran_number){
          case 1: 
            timer[1] = setInterval(function(){ show_ekran_n(1)}, interval[1]);
          break;
          case 2: 
            timer[1] = setInterval(function(){ show_ekran_n(1)}, interval[1]);
            timer[2] = setInterval(function(){ show_ekran_n(2)}, interval[2]);
          break;
          case 3: 
            timer[1] = setInterval(function(){ show_ekran_n(1)}, interval[1]);
            timer[2] = setInterval(function(){ show_ekran_n(2)}, interval[2]);
            timer[3] = setInterval(function(){ show_ekran_n(3)}, interval[3]);
          break;
          case 4: 
            timer[1] = setInterval(function(){ show_ekran_n(1)}, interval[1]);
            timer[2] = setInterval(function(){ show_ekran_n(2)}, interval[2]);
            timer[3] = setInterval(function(){ show_ekran_n(3)}, interval[3]);
            timer[4] = setInterval(function(){ show_ekran_n(4)}, interval[4]);
          break;
          case 5: 
            timer[1] = setInterval(function(){ show_ekran_n(1)}, interval[1]);
            timer[2] = setInterval(function(){ show_ekran_n(2)}, interval[2]);
            timer[3] = setInterval(function(){ show_ekran_n(3)}, interval[3]);
            timer[4] = setInterval(function(){ show_ekran_n(4)}, interval[4]);
            timer[5] = setInterval(function(){ show_ekran_n(5)}, interval[5]);
          break;
          case 6: 
            timer[1] = setInterval(function(){ show_ekran_n(1)}, interval[1]);
            timer[2] = setInterval(function(){ show_ekran_n(2)}, interval[2]);
            timer[3] = setInterval(function(){ show_ekran_n(3)}, interval[3]);
            timer[4] = setInterval(function(){ show_ekran_n(4)}, interval[4]);
            timer[5] = setInterval(function(){ show_ekran_n(5)}, interval[5]);
            timer[6] = setInterval(function(){ show_ekran_n(6)}, interval[6]);
          break;
          case 7: 
            timer[1] = setInterval(function(){ show_ekran_n(1)}, interval[1]);
            timer[2] = setInterval(function(){ show_ekran_n(2)}, interval[2]);
            timer[3] = setInterval(function(){ show_ekran_n(3)}, interval[3]);
            timer[4] = setInterval(function(){ show_ekran_n(4)}, interval[4]);
            timer[5] = setInterval(function(){ show_ekran_n(5)}, interval[5]);
            timer[6] = setInterval(function(){ show_ekran_n(6)}, interval[6]);
            timer[7] = setInterval(function(){ show_ekran_n(7)}, interval[7]);
          break;
          case 8: 
            timer[1] = setInterval(function(){ show_ekran_n(1)}, interval[1]);
            timer[2] = setInterval(function(){ show_ekran_n(2)}, interval[2]);
            timer[3] = setInterval(function(){ show_ekran_n(3)}, interval[3]);
            timer[4] = setInterval(function(){ show_ekran_n(4)}, interval[4]);
            timer[5] = setInterval(function(){ show_ekran_n(5)}, interval[5]);
            timer[6] = setInterval(function(){ show_ekran_n(6)}, interval[6]);
            timer[7] = setInterval(function(){ show_ekran_n(7)}, interval[7]);
            timer[8] = setInterval(function(){ show_ekran_n(8)}, interval[8]);
          break;
        }
      }
      
      chislo = parseInt(chislo);
    break;
    case "■":
    $("#window_task_0").removeClass("hidden")
        for (var i=1; i <= ekran_number; i++){
          window_task_id ="#window_task_" + i.toString();
          $(window_task_id).addClass("hidden")
        }
        Editbox_ekran_0.value = "►"
      audio.pause();
      audio.currentTime = 0.0;
      document.getElementById('button_start').innerHTML = "►";
      document.getElementById('black_style_16').innerHTML = "►";
      TimerStop();
      for (var i=1;i<=ekran_number;i++) clearInterval(timer[i]); 

    break;
    case "✐":
      document.getElementById('button_start').innerHTML = "►";
      document.getElementById('black_style_16').innerHTML = "►";
      vip+=ekran_number
        correct_answer = []
        for (var i=1; i<=ekran_number; i++){
          correct_answer[i] = 0; 
          for (var j=0; j<primer1[i].length; j++){
            correct_answer[i]+=parseInt(primer1[i][j])
          }
        }
        prom_prav = 0
        for (var i=1; i<=ekran_number; i++){
          Editbox_ekran_id = "#Editbox_ekran_" + i;
          Editbox_otvet_id = "#Editbox_otvet_" + i;
          window_heading_id = "#window_heading_" + i;
          points_id = "#points_" + i;
          $(Editbox_ekran_id).addClass("hidden")
          $(Editbox_otvet_id).removeClass("hidden")

          if (parseInt($(Editbox_ekran_id).val()) == correct_answer[i]){
            student_answer = " = " + parseInt($(Editbox_ekran_id).val()) + " ✔ ("+ correct_answer[i]  + ")"
            text = "\n"+ parseInt($(Editbox_ekran_id).val()) + " = " + correct_answer[i] + "\n"+ correct[randomInteger(59)];  
            prav++
            prom_prav++
            $(window_heading_id).addClass("panel-success")
            $(points_id).html(parseInt($(points_id).html()) + 10)

          }
          else{
            student_answer = " ≠ " + parseInt($(Editbox_ekran_id).val()) + " ✘ ("+ correct_answer[i]  + ")"
            if (language_id==1){
              text = "\n" + "Oops, a little mistake"+ "\n" + parseInt($(Editbox_ekran_id).val()) + " ≠ " + correct_answer[i]  
            } else{
              text = "\n" + "Упс, ошибочка"+ "\n" + parseInt($(Editbox_ekran_id).val()) + " ≠ " + correct_answer[i]  
            }
            
            $(window_heading_id).addClass("panel-danger") 
          }
          save_examples()
          $(Editbox_otvet_id).val(text)
        } 

        if (prom_prav> parseInt(0.5*ekran_number)){
          soundClick2(1,1);
          progress_up++;
        }
        else{
          soundClick2(0,1);
          progress_up--;
        }

      if (progress ==true){
        switch (progress_up){
          case 2:
            progress_up = 0;
            if (progress_up_key == false) Kolslog_plus();
            else skorost_minus();
            progress_up_key = !progress_up_key;
          break;
          case -2:  
            progress_up = 0;
            if (progress_down_key == false) Kolslog_minus();
            else skorost_plus();
            progress_down_key = !progress_down_key;
          break;  
        }
      }
      show_pravilno();
      show_vipolneno();
      primer_num = 0;
      primer_num_n = [0,0,0,0,0,0,0,0,0]
      if (vip == zad) {
            show_result();
            $('#modal_result').modal('show');
            soundClick2(2,1);
            mus = true;
      }
    break;
  } 
}
var student_answer = ""
var progress=true;
function yes_no(a,arr){ 
  var c = false, i = 0;
  while (c == false && i<arr.length) {
    if (a == arr[i++]) c = true;  
  }
  return c;
}
var primer = [], primer2 = [], stop_cycle = false;
function ravno(){
  stop_cycle = true;
}
function chislo_plus_f(){
  chislo += chislo_plus_all;
  primer.push(chislo_plus_all)
  chislo = parseInt(chislo);
  chislo_plus_all = parseInt(chislo_plus_all);
}

function chislo_minus_f(){
  chislo -= chislo_plus_all;
  ch = "-" + chislo_plus_all.toString()
  primer.push(ch) 
  chislo = parseInt(chislo);
  chislo_plus_all = parseInt(chislo_plus_all);
}

function calculate_simple_add() {
  var max_chislo = 0;
  if (yes_no(5,Checked_cifr)) {
    for (var i = 0; i < Kolcifr; i++){
      max_chislo += 9*power10(i); 
    }
  } 
  else{
    for (var i = 0; i < Kolcifr; i++){
      max_chislo += 4*power10(i); 
    }
  } 
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (chislo == max_chislo || schotchik == Kolslog) {
    ravno();
  }
  else {
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      for (var i = 0; i < Kolcifr; i++) {
        var p = possible_checked_var[i][znak][cifr[i]].slice();
        if (p.length == 0 || p[0] == 0) {
          possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
          p = possible_checked_var[i][znak][cifr[i]].slice();
        }
        chislo_plus[i] = p[randomInteger(p.length)];
        chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
      
    for (var i = 0; i < Kolcifr; i++) {
      cifr[i] += parseInt(chislo_plus[i]);
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }
    chislo_plus_f();
  }
}


function calculate_simple_sub() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (chislo == 0 || schotchik == Kolslog) {
    ravno();    
  }
  else {
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      for (var i = 0; i < Kolcifr; i++) {
        var p = possible_checked_var[i][1][cifr[i]];
        if (p.length == 0 || p[0] == 0) {
          possible_checked_var[i][1][cifr[i]] = POSSIBLE_CHECKED_CONST[1][cifr[i]].slice();
          p = possible_checked_var[i][1][cifr[i]];
        }
        chislo_plus[i] = p[randomInteger(p.length)];
        chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
      
    for (var i = 0; i < Kolcifr; i++) {
      cifr[i] -= parseInt(chislo_plus[i]);
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }
    chislo_minus_f();
  }
}
function calculate_simple_add_sub() { 
  chislo = parseInt(chislo);
  var max_chislo_4 = 0, l = Checked_cifr.length-1; 
  if (l == 4){
    for (var i = 0; i < Kolcifr; i++){
      max_chislo_4 += 4*power10(i); 
    }
  }
  var max_chislo = power10(Kolcifr) - 1;
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    var vspom_chislo = 0;
    for (var i = 0; i < Kolcifr; i++){
      vspom_chislo += 5*power10(i);
    }
    
    switch (chislo){
      case 0: znak = 0; break;
      case vspom_chislo: znak = 0; break;
      case max_chislo: znak = 1; break;
      case max_chislo_4: 
        if ( l == 4 ) znak = 1; else znak = randomInteger(2); break;
      default: znak = randomInteger(2); break;
    }
    var razmer = parseInt((chislo.toString()).length);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
      var uio = chislo%power10(Kolcifr-1);
      switch (chislo%power10(Kolcifr-1)){
        case 0: znak = 0; break;
        case parseInt(vspom_chislo/10): znak = 0; break;
        case parseInt(max_chislo/10): znak = 1; break;
        case parseInt(max_chislo_4/10): 
          if ( l == 4 ) znak = 1; else znak = randomInteger(2); break;
        default: znak = randomInteger(2); break;    
      }
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      
      for (var i = 0; i < Kolcifr - per; i++) {
        var p = possible_checked_var[i][znak][cifr[i]].slice();
        if (p.length == 0 || p[0] == 0) {
          possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
          p = possible_checked_var[i][znak][cifr[i]].slice();
        }
        chislo_plus[i] = p[randomInteger(p.length)];
        chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
    for (var i = 0; i < Kolcifr-per; i++) {
      if (znak == 0)  cifr[i] += parseInt(chislo_plus[i]);
      else cifr[i] -= parseInt(chislo_plus[i]);
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }

    if (znak == 0) {
      chislo_plus_f();
    }
    else {
      chislo_minus_f();
    }
  }
}

function calculate_brother_add() {
  var max_chislo = power10(Kolcifr)-1;
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    var vspom_chislo1 = 0, vspom_chislo2 = 0;
    for (var i = 0; i < Kolcifr; i++){
      vspom_chislo1 += 5*power10(i);
      vspom_chislo2 += 7*power10(i);
    }
    if (chislo >= vspom_chislo2) znak = 1;
    else if (chislo < vspom_chislo1) znak = 0;
    else znak = randomInteger(2);
    var razmer = parseInt((chislo.toString()).length);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
      switch (chislo%power10(Kolcifr-1)){
        case 0: znak = 0; break;
        case parseInt(max_chislo/10): znak = 1; break;
        default: znak = randomInteger(2); break;    
      }
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      for (var i = 0; i < Kolcifr-per; i++) {
        var p = possible_checked_var[i][znak][cifr[i]].slice();
        if (p.length == 0 || p[0] == 0) {
          possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
          p = possible_checked_var[i][znak][cifr[i]].slice();
        }
        chislo_plus[i] = p[randomInteger(p.length)];
        chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < Kolcifr-per; i++) {
      if (znak == 0)  cifr[i] += parseInt(chislo_plus[i]);
      else cifr[i] -= parseInt(chislo_plus[i]);
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }

    if (znak == 0) {
      chislo_plus_f();
    }
    else {
      chislo_minus_f();
    }
  }
}

function calculate_brother_sub() {
  var max_chislo = power10(Kolcifr)-1;
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    var vspom_chislo1 = 0;
    for (var i = 0; i < Kolcifr; i++){
      vspom_chislo1 += 5*power10(i);    
    }
    if (chislo < vspom_chislo1) znak = 0;
    else znak = 1;
    var razmer = parseInt((chislo.toString()).length);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 &&  schotchik % 2 == 1){  
      per = 1;
      switch (chislo%power10(Kolcifr-1)){
        case 0: znak = 0; break;
        case parseInt(max_chislo/10): znak = 1; break;
        default: znak = randomInteger(2); break;    
      }
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      for (var i = 0; i < Kolcifr-per; i++) {
        var p = possible_checked_var[i][znak][cifr[i]].slice();
        if (p.length == 0 || p[0] == 0) {
          possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
          p = possible_checked_var[i][znak][cifr[i]].slice();
        }
        chislo_plus[i] = p[randomInteger(p.length)];
        chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < Kolcifr-per; i++) {
      if (cifr[i]>=5 && cifr[i] <= 8) {
        for (var k = 5; k <= 9; k++){
          possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
          possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
        }   
      } 
      else {
        for (var k = 0; k <= 4; k++){
          possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
          possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
        }   
      } 
      if (znak == 0)  cifr[i] += parseInt(chislo_plus[i]);
      else cifr[i] -= parseInt(chislo_plus[i]);
    }

    if (znak == 0) chislo_plus_f();
    else chislo_minus_f();
  }
}

function calculate_brother_add_sub() {
  var max_chislo = power10(Kolcifr)-1;
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    var vspom_chislo1 = 0, vspom_chislo2 = 0;
    for (var i = 0; i < Kolcifr; i++){
      vspom_chislo1 += 5*power10(i);
      vspom_chislo2 += 7*power10(i);
    }
    if (chislo >= vspom_chislo2) znak = 1;
    else if (chislo < vspom_chislo1) znak = 0;
    else znak = randomInteger(2);
    var razmer = parseInt((chislo.toString()).length);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
      switch (chislo%power10(Kolcifr-1)){
        case 0: znak = 0; break;
        case parseInt(max_chislo/10): znak = 1; break;
        default: znak = randomInteger(2); break;    
      }
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      for (var i = 0; i < Kolcifr-per; i++) {
        var p = possible_checked_var[i][znak][cifr[i]].slice();
          if (p.length == 0 || p[0] == 0) {
            possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
            p = possible_checked_var[i][znak][cifr[i]].slice();
          }
          chislo_plus[i] = p[randomInteger(p.length)];
          chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < Kolcifr-per; i++) {
      if (znak == 0)  cifr[i] += parseInt(chislo_plus[i]);
      else cifr[i] -= parseInt(chislo_plus[i]);
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }

    if (znak == 0) chislo_plus_f();
    else chislo_minus_f();
  } 
}

function calculate_friend_add() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    var razmer = parseInt((chislo.toString()).length);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      for (var i = 0; i < Kolcifr-per; i++) {
        var p = possible_checked_var[i][znak][cifr[i]].slice();
        if (p.length == 0 || p[0] == 0) {
          possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
          p = possible_checked_var[i][znak][cifr[i]].slice();
        }
        chislo_plus[i] = p[randomInteger(p.length)];
        chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < Kolcifr-per; i++) {
      
        for (var k = 0; k <= 9; k++){
          possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
          possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
        }
      
    }
    chislo_plus_f();
    cifr.length = 0;
    for (var i = 0; i < Kolcifr; i++) {
      cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
    }
      
  }
}

function calculate_friend_sub() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  var razmer = 0;
  razmer = parseInt((chislo.toString()).length);
  
  if (razmer == 1 || schotchik == Kolslog) {
    ravno();
  }
  else {
    var per = 0;
    if (half == true && razmer > 2  && Kolcifr > 1 && schotchik % 2 == 1){  
      per = 1;
    } 
    else per = 0;
    do { 
      chislo_plus_all = 0;
      chislo_plus = undefined;
      chislo_plus = [];
      for (var i = 0; i < razmer - 1 - per; i++) {
        var p = possible_checked_var[i][1][cifr[i]];
        if (p.length == 0 || p[0] == 0) {
          possible_checked_var[i][1][cifr[i]] = POSSIBLE_CHECKED_CONST[1][cifr[i]].slice();
          p = possible_checked_var[i][1][cifr[i]];
        }
        chislo_plus[i] = p[randomInteger(p.length)];
        chislo_plus_all += chislo_plus[i]*power10(i);
      }   
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < razmer - 1 - per; i++) {
      for (var k = 0; k <= 9; k++){
        
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }

    chislo_minus_f();
    razmer = parseInt((chislo.toString()).length);
    cifr.length = 0;
    for (var i = 0; i < razmer; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    cifr.length = razmer - 1;   
  

  }
}

function calculate_friend_add_sub() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  var razmer = 0;
  razmer = parseInt((chislo.toString()).length);
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    if (razmer <= Kolcifr) znak = 0;
    else znak =  randomInteger(2);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      if (znak == 0){
        for (var i = 0; i < Kolcifr - per; i++) {
          var p = possible_checked_var[i][znak][cifr[i]].slice();
          if (p.length == 0 || p[0] == 0) {
            possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
            p = possible_checked_var[i][znak][cifr[i]].slice();
          }
          chislo_plus[i] = p[randomInteger(p.length)];
          chislo_plus_all += chislo_plus[i]*power10(i);     
        }
      }
      else{
        if (razmer > Kolcifr){
          for (var i = 0; i < Kolcifr - per; i++) {
            var p = possible_checked_var[i][znak][cifr[i]].slice();
            if (p.length == 0 || p[0] == 0) {
              possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
              p = possible_checked_var[i][znak][cifr[i]].slice();
            }
            chislo_plus[i] = p[randomInteger(p.length)];
            chislo_plus_all += chislo_plus[i]*power10(i);     
          }
        }
        else{
          for (var i = 0; i < razmer - 1; i++) {
            var p = possible_checked_var[i][znak][cifr[i]].slice();
            if (p.length == 0 || p[0] == 0) {
              possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
              p = possible_checked_var[i][znak][cifr[i]].slice();
            }
            chislo_plus[i] = p[randomInteger(p.length)];
            chislo_plus_all += chislo_plus[i]*power10(i);     
          }
        } 
      } 
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < Kolcifr - per; i++) {
      
        for (var k = 0; k <= 9; k++){
          possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
          possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
        }
      
    }
    if (znak == 0) {
      chislo_plus_f();
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    }
    else {
      chislo_minus_f();
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    } 
  }
}
  
function calculate_combo_add() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    var razmer = parseInt((chislo.toString()).length);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      for (var i = 0; i < Kolcifr-per; i++) {
        var p = possible_checked_var[i][znak][cifr[i]].slice();
          if (p.length == 0 || p[0] == 0) {
            possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
            p = possible_checked_var[i][znak][cifr[i]].slice();
          }
          chislo_plus[i] = p[randomInteger(p.length)];
          chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
    for (var i = 0; i < Kolcifr-per; i++) {
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }
      chislo_plus_f();
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
  
  }
}

function calculate_combo_sub() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation).slice();
  
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  var razmer = 0;
  razmer = parseInt((chislo.toString()).length);
  
  if (razmer == 1 || schotchik == Kolslog) {
    ravno();
  }
  else {
    var per = 0;
    if (half == true && razmer > 2 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
    } 
    else per = 0;
    do { 
      chislo_plus_all = 0;
      chislo_plus = undefined;
      chislo_plus = [];
      
      
      for (var i = 0; i < razmer - 1 - per; i++) {
        var p = possible_checked_var[i][1][cifr[i]];
          if (p.length == 0 || p[0] == 0) {
            possible_checked_var[i][1][cifr[i]] = POSSIBLE_CHECKED_CONST[1][cifr[i]].slice();
            p = possible_checked_var[i][1][cifr[i]];
          }
          chislo_plus[i] = p[randomInteger(p.length)];
          chislo_plus_all += chislo_plus[i]*power10(i);
      }   
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < razmer - 1 - per; i++) {
      for (var k = 0; k <= 4; k++){
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }

    chislo_minus_f();
    razmer = parseInt((chislo.toString()).length);  
    cifr.length = 0;
    for (var i = 0; i < razmer; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    cifr.length = razmer - 1;   
  }
}

function calculate_combo_add_sub() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  var razmer = 0;
  razmer = parseInt((chislo.toString()).length);
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    if (razmer <= Kolcifr) znak = 0;
    else znak =  randomInteger(2);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      if (znak == 0){
        for (var i = 0; i < Kolcifr - per; i++) {
          var p = possible_checked_var[i][znak][cifr[i]].slice();
            if (p.length == 0 || p[0] == 0) {
              possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
              p = possible_checked_var[i][znak][cifr[i]].slice();
            }
            chislo_plus[i] = p[randomInteger(p.length)];
            chislo_plus_all += chislo_plus[i]*power10(i);     
        }
      }
      else{
        if (razmer > Kolcifr){
          for (var i = 0; i < Kolcifr - per; i++) {
            var p = possible_checked_var[i][znak][cifr[i]].slice();
              if (p.length == 0 || p[0] == 0) {
                possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
                p = possible_checked_var[i][znak][cifr[i]].slice();
              }
              chislo_plus[i] = p[randomInteger(p.length)];
              chislo_plus_all += chislo_plus[i]*power10(i);     
          }
        }
        else{
          for (var i = 0; i < razmer - 1; i++) {
            var p = possible_checked_var[i][znak][cifr[i]].slice();
              if (p.length == 0 || p[0] == 0) {
                possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
                p = possible_checked_var[i][znak][cifr[i]].slice();
              }
              chislo_plus[i] = p[randomInteger(p.length)];
              chislo_plus_all += chislo_plus[i]*power10(i);     
          }
        } 
      } 
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < Kolcifr - per; i++) {
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }
    if (znak == 0) {
      chislo_plus_f();
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    }
    else {
      chislo_minus_f();
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }     
    }
  }
}

function calculate_random_add() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    var razmer = parseInt((chislo.toString()).length);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
    } 
    else per = 0;   
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      for (var i = 0; i < Kolcifr - per; i++) {
        var p = possible_checked_var[i][znak][cifr[i]].slice();
          if (p.length == 0 || p[0] == 0) {
            possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
            p = possible_checked_var[i][znak][cifr[i]].slice();
          }
          chislo_plus[i] = p[randomInteger(p.length)];
          chislo_plus_all += chislo_plus[i]*power10(i);     
      }
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < Kolcifr - per; i++) {
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }
    chislo_plus_f();
    cifr.length = 0;
    for (var i = 0; i < Kolcifr; i++) {
      cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
    }
  }
}

function calculate_random_sub() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  var razmer = 0;
  razmer = parseInt((chislo.toString()).length);
  
  if (razmer == 1 || schotchik == Kolslog) {
    ravno();
  }
  else {
    var per = 0;
    if (half == true && razmer > 2 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
    } 
    else per = 0;
    do { 
      chislo_plus_all = 0;
      chislo_plus = undefined;
      chislo_plus = [];
      
      
      for (var i = 0; i < razmer - 1 - per; i++) {
        var p = possible_checked_var[i][1][cifr[i]];
          if (p.length == 0 || p[0] == 0) {
            possible_checked_var[i][1][cifr[i]] = POSSIBLE_CHECKED_CONST[1][cifr[i]].slice();
            p = possible_checked_var[i][1][cifr[i]];
          }
          chislo_plus[i] = p[randomInteger(p.length)];
          chislo_plus_all += chislo_plus[i]*power10(i);
      }   
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < razmer - 1 - per; i++) {
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }
    chislo_minus_f();
    razmer = parseInt((chislo.toString()).length);  
    cifr.length = 0;
    for (var i = 0; i < razmer; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    cifr.length = razmer - 1; 
  }
}

function calculate_random_add_sub() { 
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  var razmer = 0;
  razmer = parseInt((chislo.toString()).length);
  if (schotchik == Kolslog) {
    ravno();
  }
  else {
    if (razmer <= Kolcifr) znak = 0;
    else znak =  randomInteger(2);
    var per = 0;
    if (half == true && razmer > 1 && Kolcifr > 1 && schotchik % 2 == 1){ 
      per = 1;
    } 
    else per = 0;
    do {
      chislo_plus_all = 0;
      chislo_plus = [];
      if (znak == 0){
        for (var i = 0; i < Kolcifr - per; i++) {
          var p = possible_checked_var[i][znak][cifr[i]].slice();
            if (p.length == 0 || p[0] == 0) {
              possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
              p = possible_checked_var[i][znak][cifr[i]].slice();
            }
            chislo_plus[i] = p[randomInteger(p.length)];
            chislo_plus_all += chislo_plus[i]*power10(i);     
        }
      }
      else{
        if (razmer > Kolcifr){
          for (var i = 0; i < Kolcifr - per; i++) {
            var p = possible_checked_var[i][znak][cifr[i]].slice();
              if (p.length == 0 || p[0] == 0) {
                possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
                p = possible_checked_var[i][znak][cifr[i]].slice();
              }
              chislo_plus[i] = p[randomInteger(p.length)];
              chislo_plus_all += chislo_plus[i]*power10(i);     
          }
        }
        else{
          for (var i = 0; i < razmer - 1; i++) {
            var p = possible_checked_var[i][znak][cifr[i]].slice();
              if (p.length == 0 || p[0] == 0) {
                possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
                p = possible_checked_var[i][znak][cifr[i]].slice();
              }
              chislo_plus[i] = p[randomInteger(p.length)];
              chislo_plus_all += chislo_plus[i]*power10(i);     
          }
        } 
      } 
    } while (chislo_plus_all == 0);
    
    for (var i = 0; i < Kolcifr - per; i++) {
      for (var k = 0; k <= 9; k++){
        possible_checked_var[i][0][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][0][k]), 1 );
        possible_checked_var[i][1][k].splice( $.inArray(chislo_plus[i], possible_checked_var[i][1][k]), 1 );
      } 
    }

    if (znak == 0) {
      chislo_plus_f();
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    }
    else {
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
      chislo_minus_f();
    }
  }
}