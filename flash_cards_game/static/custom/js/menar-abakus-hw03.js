
function show_pravilno(){
    if (vip == 0) x = 0;
    else x = parseInt(prav/vip*100); 
    document.getElementById('pravilno_progress').style.width = x + "%";
    document.getElementById('navbar_pravilno_progress').style.width = x + "%";
    if (language_id==1){
      document.getElementById('navbar_pravilno_text').innerHTML = "Correct " + prav + " of " + vip + " (" + x + "%)";
      document.getElementById('navbar_pravilno_text').innerHTML = "Correct " + prav + " of " + vip + " (" + x + "%)";
    } 
    else{
      document.getElementById('navbar_pravilno_text').innerHTML = "Правильно " + prav + " из " + vip + " (" + x + "%)";
      document.getElementById('pravilno_text').innerHTML = "Правильно " + prav + " из " + vip + " (" + x + "%)";
    }
      
    vip = parseInt(vip);
    prav = parseInt(prav);
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

function send_answer_in(){ 
    if (language_id==1){
      var prav_text = prav + " of " + vip + " time of completion: " +  vrema_vip + "\n" + examples;
    } else{
      var prav_text = prav + " из " + vip + " за " +  vrema_vip + "\n" + examples;
    }
    
    prav_percent = parseInt(prav/vip*100);
    send_answer(prav_percent,prav_text);
}

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
    $("#modal_settings_kolstolb").html("Number of columns");
    $("#modal_settings_font").html("Font");
    $("#modal_settings_save").html("Save");
    $("#navbar_modul_title").html("Module");
    $("#navbar_operation_title").html("Operation");
    $("#navbar_difficulty_title").html("Difficulty");
    $("#navbar_kolslog_title").html("Number of summands");
    $("#navbar_kolstolb_title").html("Number of columns");
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
  document.getElementById('navbar_vipolneno_text').innerHTML = 'Вып 0 из '+zad+' (0%)';
  document.getElementById('vipolneno_text').innerHTML = 'Вып 0 из '+zad+' (0%)';
  zad = parseInt(zad);
  Kolslog = parseInt(Kolslog);
}
function restart(){
  document.getElementById('percent_1').innerHTML =0;
  prav_1 = 0;
  prav = 0;
  vip = 0;
  show_pravilno();
  show_vipolneno();
  examples = "";
}


var style = true;
function change_style(){
  if (style==true){
    style = false
    // document.body.style.backgroundImage = ""
    for (var i=1;i<=22;i++){
      element_id = "#black_style_" + i.toString()
      $(element_id).removeClass('black_style');
      $(element_id).addClass('white_style');
    }
    for (var i=1;i<=12;i++){
      element_id = "#Editbox_otvet_" + i.toString()
      $(element_id).removeClass('black_style');
      $(element_id).addClass('white_style');
      element_id = "Editbox_otvet_" + i.toString()
      document.getElementById(element_id).style.backgroundColor = "white"
      element_id = "#window_otvet_" + i.toString()
      $(element_id).removeClass('black_style');
      $(element_id).addClass('white_style');
      element_id = "#table_schot_" + i.toString()
      $(element_id).removeClass('black_style');
      $(element_id).addClass('white_style');
    }
     document.getElementById("navbar_logo").style.backgroundImage = "url(/static/custom/css/logo_rus.png)"
     $("#button_calc_start").removeClass('black_style');
     $("#button_calc_start").addClass('white_style');
     $("#button_start").addClass('white_style');
     $("#button_start").removeClass('black_style');
  }  
  else{
    style = true
    // change_background()
    for (var i=1;i<=11;i++){
      element_id = "#black_style_" + i.toString()
      $(element_id).addClass('black_style');
      $(element_id).removeClass('white_style');
    }
    for (var i=1;i<=12;i++){
      element_id = "#Editbox_otvet_" + i.toString()
      $(element_id).addClass('black_style');
      $(element_id).removeClass('white_style');
      element_id = "Editbox_otvet_" + i.toString()
      document.getElementById(element_id).style.backgroundColor = "black"
      element_id = "#window_otvet_" + i.toString()
      $(element_id).addClass('black_style');
      $(element_id).removeClass('white_style');
      element_id = "#table_schot_" + i.toString()
      $(element_id).addClass('black_style');
      $(element_id).removeClass('white_style');
    }
    $("#button_start").addClass('black_style');
    $("#button_calc_start").addClass('black_style');
    $("#button_calc_start").removeClass('white_style');
     $("#button_start").removeClass('white_style');
    document.getElementById("navbar_logo").style.backgroundImage = "url(/static/custom/css/s5_logo.png)"
   
  } 
}
var image_schotchik = 0;
function change_background(){

  image_schotchik = random_between(1,27)
  var image_fon = "fon_" + image_schotchik + ".jpg";
  document.body.style.backgroundImage = 'url(/static/custom/css/'+image_fon +')';
  image_schotchik = parseInt(image_schotchik);
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
    src = "/static/custom/audio/new_snd_"+ i + ".mp3"
    audio.setAttribute('src',src);
    audio.setAttribute('preload','preload');
  }  
  change_background();
  if (device.mobile() || device.tablet()) {
    primer_raspred(1); 
    $("#keyboard").removeClass("hidden")
    document.getElementById('navbar_panel_kolstolb').classList.add("hidden");
    document.getElementById('panel_kolstolb').classList.add("hidden");
  }
  else{
    $("#keyboard").addClass("hidden")
    document.getElementById('navbar_panel_kolstolb').classList.remove("hidden");
    document.getElementById('panel_kolstolb').classList.remove("hidden");
  } 
}
window.onresize=function(){
  if (device.mobile() || device.tablet() || document.body.clientWidth < 900) {
    primer_raspred(1); 
    document.getElementById('navbar_panel_kolstolb').classList.add("hidden");
    document.getElementById('panel_kolstolb').classList.add("hidden");
  }
  else{
    document.getElementById('navbar_panel_kolstolb').classList.remove("hidden");
    document.getElementById('panel_kolstolb').classList.remove("hidden");
  } 
}
function primer_raspred(kolstolb_ras){
  switch (kolstolb_ras){
    case 1:
      Kolstolb = 1;
      document.getElementById('window_pusto_left').className = "col-lg-2 col-md-2 col-sm-2 ";
      // document.getElementById('window_pusto_right').className = "col-lg-4 col-md-4 col-sm-4 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-8 col-md-8 col-sm-8 ";
      document.getElementById('window_zadaniye_2').className = "hidden";
      document.getElementById('window_zadaniye_3').className = "hidden";
      document.getElementById('window_zadaniye_4').className = "hidden";
      document.getElementById('window_zadaniye_5').className = "hidden";
      document.getElementById('window_zadaniye_6').className = "hidden";
      document.getElementById('window_zadaniye_7').className = "hidden";
      document.getElementById('window_zadaniye_8').className = "hidden";
      document.getElementById('window_zadaniye_9').className = "hidden";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 2:
      Kolstolb = 2;
      document.getElementById('window_pusto_left').className = "col-lg-3 col-md-3 col-sm-3 ";
      // document.getElementById('window_pusto_right').className = "col-lg-3 col-md-3 col-sm-3 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-3 col-md-3 col-sm-3 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-3 col-md-3 col-sm-3 ";
      document.getElementById('window_zadaniye_3').className = "hidden";
      document.getElementById('window_zadaniye_4').className = "hidden";
      document.getElementById('window_zadaniye_5').className = "hidden";
      document.getElementById('window_zadaniye_6').className = "hidden";
      document.getElementById('window_zadaniye_7').className = "hidden";
      document.getElementById('window_zadaniye_8').className = "hidden";
      document.getElementById('window_zadaniye_9').className = "hidden";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 3:
      Kolstolb = 3;
      document.getElementById('window_pusto_left').className = "col-lg-3 col-md-3 col-sm-3 ";
      // document.getElementById('window_pusto_right').className = "col-lg-3 col-md-3 col-sm-3 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_4').className = "hidden";
      document.getElementById('window_zadaniye_5').className = "hidden";
      document.getElementById('window_zadaniye_6').className = "hidden";
      document.getElementById('window_zadaniye_7').className = "hidden";
      document.getElementById('window_zadaniye_8').className = "hidden";
      document.getElementById('window_zadaniye_9').className = "hidden";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 4:
      Kolstolb = 4;
      document.getElementById('window_pusto_left').className = "col-lg-2 col-md-2 col-sm-2 ";
      // document.getElementById('window_pusto_right').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_5').className = "hidden";
      document.getElementById('window_zadaniye_6').className = "hidden";
      document.getElementById('window_zadaniye_7').className = "hidden";
      document.getElementById('window_zadaniye_8').className = "hidden";
      document.getElementById('window_zadaniye_9').className = "hidden";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 5:
      Kolstolb = 5;
      document.getElementById('window_pusto_left').className = "col-lg-1 col-md-1 col-sm-1 ";
      // document.getElementById('window_pusto_right').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_5').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_6').className = "hidden";
      document.getElementById('window_zadaniye_7').className = "hidden";
      document.getElementById('window_zadaniye_8').className = "hidden";
      document.getElementById('window_zadaniye_9').className = "hidden";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 6:
      Kolstolb = 6;
      document.getElementById('window_pusto_left').className = "hidden";
      // document.getElementById('window_pusto_right').className = "hidden";
      document.getElementById('window_zadaniye_1').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_5').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_6').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_7').className = "hidden";
      document.getElementById('window_zadaniye_8').className = "hidden";
      document.getElementById('window_zadaniye_9').className = "hidden";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 7:
      Kolstolb = 7;
      document.getElementById('window_pusto_left').className = "col-lg-2 col-md-2 col-sm-2 ";
      // document.getElementById('window_pusto_right').className = "col-lg-3 col-md-3 col-sm-3 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_5').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_6').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_7').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_8').className = "hidden";
      document.getElementById('window_zadaniye_9').className = "hidden";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 8:
      Kolstolb = 8;
      document.getElementById('window_pusto_left').className = "col-lg-2 col-md-2 col-sm-2 ";
      // document.getElementById('window_pusto_right').className = "col-lg-2 col-md-2 col-sm-2 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_5').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_6').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_7').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_8').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_9').className = "hidden";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 9:
      Kolstolb = 9;
      document.getElementById('window_pusto_left').className = "col-lg-2 col-md-2 col-sm-2 ";
      // document.getElementById('window_pusto_right').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_5').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_6').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_7').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_8').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_9').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_10').className = "hidden";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 10:
      Kolstolb = 10;
      document.getElementById('window_pusto_left').className = "col-lg-1 col-md-1 col-sm-1 ";
      // document.getElementById('window_pusto_right').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_1').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_5').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_6').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_7').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_8').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_9').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_10').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_11').className = "hidden";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 11:
      Kolstolb = 11;
      document.getElementById('window_pusto_left').className = "col-lg-1 col-md-1 col-sm-1 ";
      // document.getElementById('window_pusto_right').className = "hidden";
      document.getElementById('window_zadaniye_1').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_5').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_6').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_7').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_8').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_9').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_10').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_11').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_12').className = "hidden";
    break;
    case 12:
      Kolstolb = 12;
      document.getElementById('window_pusto_left').className = "hidden";
      // document.getElementById('window_pusto_right').className = "hidden";
      document.getElementById('window_zadaniye_1').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_2').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_3').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_4').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_5').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_6').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_7').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_8').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_9').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_10').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_11').className = "col-lg-1 col-md-1 col-sm-1 ";
      document.getElementById('window_zadaniye_12').className = "col-lg-1 col-md-1 col-sm-1 ";
    break;

  }
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



  function button_nastroyki_f(){
    $('#modal_settings').modal('show');
  }

  function Kolslog_plus(){
    if (document.getElementById('Kolslog_tablo').innerHTML < 10) document.getElementById('navbar_Kolslog').innerHTML = '(' + ++document.getElementById('Kolslog_tablo').innerHTML + ')';
  }

  function Kolslog_minus(){
    if (document.getElementById('Kolslog_tablo').innerHTML > 2) document.getElementById('navbar_Kolslog').innerHTML =  '(' + --document.getElementById('Kolslog_tablo').innerHTML + ')';
  }

  function Kolslog_10(){
    var t = Math.abs(parseFloat(prompt("Введите количество чисел в интервале 2 до 10")));
    if (isNaN(t) || t < 2 || t > 10) document.getElementById('Kolslog_tablo').innerHTML = 10;
    else{
      t = parseInt(t);
      document.getElementById('Kolslog_tablo').innerHTML = t;
    }
      
    }


 // Кнопки изменения скорости



function kolstolb_enter(){

  var t = Math.abs(parseFloat(prompt("Введите количество примеров от 1 до 10")));
  if (isNaN(t) || t > 10 || t < 1) {
    document.getElementById('Kolstolb_tablo').innerHTML = 1;
    document.getElementById('navbar_kolstolb').innerHTML = '('+ 1+ ')';
    primer_raspred(1);
    Kolstolb = 1;
  }
  else{
    Kolstolb = parseInt(t);
    document.getElementById('Kolstolb_tablo').innerHTML = Kolstolb;
    document.getElementById('navbar_kolstolb').innerHTML = '('+ Kolstolb+ ')';
    Kolstolb = parseInt(Kolstolb);
    primer_raspred(Kolstolb);
  }
  
}

function kolstolb_plus(){
    if (Kolstolb < 10){
      Kolstolb++;
      primer_raspred(Kolstolb);
      document.getElementById('navbar_kolstolb').innerHTML = '('+ Kolstolb + ')';
      document.getElementById('Kolstolb_tablo').innerHTML = Kolstolb;
      Kolstolb = parseInt(Kolstolb);
    }   
  }

  function kolstolb_minus(){
    if (Kolstolb > 1){ 
      Kolstolb--;
      primer_raspred(Kolstolb);
      document.getElementById('navbar_kolstolb').innerHTML = '('+ Kolstolb + ')';
      document.getElementById('Kolstolb_tablo').innerHTML = Kolstolb;
      Kolstolb = parseInt(Kolstolb);
    } 
  }


function Kolslog_plus(){
  if (document.getElementById('Kolslog_tablo').innerHTML < 10) document.getElementById('navbar_Kolslog').innerHTML = '(' + ++document.getElementById('Kolslog_tablo').innerHTML +')';
}

function Kolslog_minus(){
  if (document.getElementById('Kolslog_tablo').innerHTML > 2) document.getElementById('navbar_Kolslog').innerHTML =  '(' + --document.getElementById('Kolslog_tablo').innerHTML +')';
}

function Kolslog_10(){
  var t = Math.abs(parseFloat(prompt("Введите количество чисел в интервале 2 до 60")));
  if (isNaN(t) || t < 2 || t > 60){
    document.getElementById('Kolslog_tablo').innerHTML = 10;
    document.getElementById('navbar_Kolslog').innerHTML = '('+ 10+')';
  } 
  else{
    t = parseInt(t);
    document.getElementById('Kolslog_tablo').innerHTML = t;
    document.getElementById('navbar_Kolslog').innerHTML = '('+ t+')';
  }
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
    Level = 1;
    if (language_id==1){ document.getElementById('navbar_modul').innerHTML = '(simple)'; } else{ document.getElementById('navbar_modul').innerHTML = '(просто)'; }
    
    if (button_prosto.classList.contains('active')){
      check_all();
    }
    else{
      button_6.classList.remove('hidden');
      button_7.classList.remove('hidden');
      button_8.classList.remove('hidden');
      button_9.classList.remove('hidden');
      
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
    Level = 2;
    if (language_id==1){document.getElementById('navbar_modul').innerHTML = '(brother)'; } else{document.getElementById('navbar_modul').innerHTML = '(брат)'; }
    
    if (button_brat.classList.contains('active')){
      check_all();
    }
    else{
    button_1.classList.remove('hidden');
    button_2.classList.remove('hidden');
    button_3.classList.remove('hidden');
    button_4.classList.remove('hidden');
    
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
    Level = 3;
    if (language_id==1){document.getElementById('navbar_modul').innerHTML = '(friend)'; } else{document.getElementById('navbar_modul').innerHTML = '(друг)'; }
    
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
    Level = 4;
    if (language_id==1){document.getElementById('navbar_modul').innerHTML = '(combo)';} else{document.getElementById('navbar_modul').innerHTML = '(комбо)';}
     
    if (button_combo.classList.contains('active')){
      check_all();
    }
    else{
      button_6.classList.remove('hidden');
      button_7.classList.remove('hidden');
      button_8.classList.remove('hidden');
      button_9.classList.remove('hidden');
      
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
    if (language_id==1){document.getElementById('navbar_modul').innerHTML = '(random)'; } else{document.getElementById('navbar_modul').innerHTML = '(произв)'; }
    
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

document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13|| e.keyCode === 32) {
        start_2();
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
// Kolslog = 4,
// Kolcifr = 1,
Kolstolb = 1,
cifr = [],
Level_Operation = 12,
// Level = 1,
// Operation = 2,
possible_checked_var = [],
chislo_plus = [],
vip = 0,
half = true,
// Checked_cifr = [],
prav = 0;

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
function generate(){
      chislo = 0;
      cifr = [];
      chislo_plus = [];
      switch (parseInt(Level_Operation)) {
        case 10: 
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(4);
            chislo += cifr[i]*power10(i);
          }
          var i = Kolcifr - 1;
          cifr[i] = 1 + randomInteger(3);
          chislo += cifr[i]*power10(i); 
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_simple_add();
        
        break;

        case 11: 
          // znak = 1;
          chislo = 0;
          var t = Checked_cifr.slice();
          exclude(0,t);
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = t[randomInteger(t.length)]
            chislo += cifr[i]*power10(i);
          }
          
           
           
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_simple_sub();
        
        break;

        case 12: 
          chislo = 0;
          var t = Checked_cifr.slice();
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = t[randomInteger(t.length)]
            chislo += cifr[i]*power10(i);
          }
          exclude(0,t);
          i = Kolcifr - 1;
          cifr[i] = t[randomInteger(t.length)]
          chislo += cifr[i]*power10(i);
          show_first_last(number); schotchik = 0; 
          for (var i = 1; i<= Kolslog; i++) calculate_simple_add_sub(i);
        
        break;

        case 20: 
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(5);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(3);
          chislo += cifr[i]*power10(i);
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_brother_add();
        
        break;

        case 21: 
          chislo = 0;
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = 5+randomInteger(5);
            chislo += cifr[i]*power10(i);
          }

          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_brother_sub();
        
        break;

        case 22: 
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_brother_add_sub();
        
        break;

        case 30: 
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_friend_add();
        
        break;

        case 31: 
          znak = 1;
          chislo = 0;
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_friend_sub();
        
        break;

        case 32: 
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);

          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_friend_add_sub();
        
        break;

        case 40: 
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          
           
           
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_combo_add();
        
        break;

        case 41: 
          znak = 1;
          chislo = 0;
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          
           
           
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_combo_sub();
        
        break;

        case 42: 
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          
           
           
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_combo_add_sub();
        
        break;
        case 50: 
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          
           
           
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_random_add();
        
        break;

        case 51: 
          znak = 1;
          chislo = 0;
          for (var i = 0; i < Kolcifr; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_random_sub();
         
        break;

        case 52: 
          znak = 0;
          chislo = 0;
          for (var i = 0; i < Kolcifr-1; i++){
            cifr[i] = randomInteger(10);
            chislo += cifr[i]*power10(i);
          }
          i = Kolcifr - 1;
          cifr[i] = 2 + randomInteger(8);
          chislo += cifr[i]*power10(i);
          
           
           
          show_first_last(number); schotchik = 0; 
          for (var i=1; i<= Kolslog; i++) calculate_random_add_sub();
         
        break;
}
}



var  
prav_1 = 0,
prav_2 = 0,
prav_3 = 0,
prav_4 = 0,
prav_5 = 0,
prav_6 = 0,
prav_7 = 0, 
prav_8 = 0,
prav_9 = 0,
prav_10 = 0,
prav_11 = 0,
prav_12 = 0;

var prav_percent = 0, number = 0;

function start_2(){

  if (!(device.mobile() || device.tablet())){
            Editbox_otvet_1.readOnly = false;
            document.getElementById("Editbox_otvet_1").focus();
          }
  if (vip == zad) {
                show_result();
                $('#modal_result').modal('show');
                if (mus==false){
                    soundClick2(2,1);
                    mus = true;
                }
                
  }
  else{
    switch (document.getElementById('button_start').innerHTML){
   
      case "►":
        for (var i=1; i<=1; i++){
          Editbox_otvet_id = "#Editbox_otvet_" + i.toString();
          window_otvet_id = "#window_otvet_" + i.toString();
          $(Editbox_otvet_id).css({
            "background-color": "black"
          })
          $(window_otvet_id).removeClass("panel-danger");
          $(window_otvet_id).removeClass("panel-success");
        }
        
          soundClick(2);
          while (table_schot_1.rows.length > 0){
            table_schot_1.deleteRow(0);
          }
          while (table_schot_2.rows.length > 0){
            table_schot_2.deleteRow(0);
          }
          while (table_schot_3.rows.length > 0){
            table_schot_3.deleteRow(0);
          }
          while (table_schot_4.rows.length > 0){
            table_schot_4.deleteRow(0);
          }
          while (table_schot_5.rows.length > 0){
            table_schot_5.deleteRow(0);
          }
          while (table_schot_6.rows.length > 0){
            table_schot_6.deleteRow(0);
          }
          while (table_schot_7.rows.length > 0){
            table_schot_7.deleteRow(0);
          }
          while (table_schot_8.rows.length > 0){
            table_schot_8.deleteRow(0);
          }
          while (table_schot_9.rows.length > 0){
            table_schot_9.deleteRow(0);
          }
          while (table_schot_10.rows.length > 0){
            table_schot_10.deleteRow(0);
          } 
          while (table_schot_11.rows.length > 0){
            table_schot_11.deleteRow(0);
          }
          while (table_schot_12.rows.length > 0){
            table_schot_12.deleteRow(0);
          }

          Editbox_otvet_1.value = "";
          Editbox_otvet_2.value = "";
          Editbox_otvet_3.value = "";
          Editbox_otvet_4.value = "";
          Editbox_otvet_5.value = "";
          Editbox_otvet_6.value = "";
          Editbox_otvet_7.value = "";
          Editbox_otvet_8.value = "";
          Editbox_otvet_9.value = "";
          Editbox_otvet_10.value = "";
          Editbox_otvet_11.value = "";
          Editbox_otvet_12.value = "";

          // Level = parseInt(document.getElementById('Level_tablo').innerHTML);
          // Operation = parseInt(document.getElementById('Operation_tablo').innerHTML);
          // Checked_cifr = whatchecked();
          Level_Operation = Level*10 + Operation;
          // Kolslog = parseInt(document.getElementById('Kolslog_tablo').innerHTML);
          // Kolcifr = parseInt(document.getElementById('Kolcifr_tablo').innerHTML);  
          schotchik = 0;

          document.getElementById('button_start').innerHTML = "✐";
          document.getElementById('button_calc_start').innerHTML = "✐";
          var font_size_table = 0; 
          if (device.mobile() || device.tablet()) font_size_table = 20;
            else{
            if (Kolslog <= 6){
              font_size_table = parseInt(280/(Kolslog+1));  
            }
            else{ 
              font_size_table = parseInt(280/(Kolslog+1)); 
            }
          }
            table_schot_1.style.fontSize = font_size_table; 
            table_schot_2.style.fontSize = font_size_table; 
            table_schot_3.style.fontSize = font_size_table; 
            table_schot_4.style.fontSize = font_size_table; 
            table_schot_5.style.fontSize = font_size_table; 
            table_schot_6.style.fontSize = font_size_table; 
            table_schot_7.style.fontSize = font_size_table; 
            table_schot_8.style.fontSize = font_size_table; 
            table_schot_9.style.fontSize = font_size_table; 
            table_schot_10.style.fontSize = font_size_table;
              table_schot_11.style.fontSize = font_size_table; 
            table_schot_12.style.fontSize = font_size_table;
            Editbox_otvet_1.style.fontSize = font_size_table;
            Editbox_otvet_2.style.fontSize = font_size_table;
            Editbox_otvet_3.style.fontSize = font_size_table;
            Editbox_otvet_4.style.fontSize = font_size_table;
            Editbox_otvet_5.style.fontSize = font_size_table;
            Editbox_otvet_6.style.fontSize = font_size_table;
            Editbox_otvet_7.style.fontSize = font_size_table;
            Editbox_otvet_8.style.fontSize = font_size_table;
            Editbox_otvet_9.style.fontSize = font_size_table;
            Editbox_otvet_10.style.fontSize = font_size_table;
            Editbox_otvet_11.style.fontSize = font_size_table;
            Editbox_otvet_12.style.fontSize = font_size_table;
            Editbox_otvet_1.style.height = font_size_table + 10;
            Editbox_otvet_2.style.height = font_size_table + 10;
            Editbox_otvet_3.style.height = font_size_table + 10;
            Editbox_otvet_4.style.height = font_size_table + 10;
            Editbox_otvet_5.style.height = font_size_table + 10;
            Editbox_otvet_6.style.height = font_size_table + 10;
            Editbox_otvet_7.style.height = font_size_table + 10;
            Editbox_otvet_8.style.height = font_size_table + 10;
            Editbox_otvet_9.style.height = font_size_table + 10;
            Editbox_otvet_10.style.height = font_size_table + 10;
            Editbox_otvet_11.style.height = font_size_table + 10;
            Editbox_otvet_12.style.height = font_size_table + 10;
            

          for (var i = 0; i < Kolcifr ; i++) {
            var t =  possible_checked(Level,Operation);
            possible_checked_var[i] = t.slice();
          }
          
          number = 1; 
          while (number <= Kolstolb) {
            generate();
            number++;
          } 
        
      break;  
      case "✐":
     


        document.getElementById('button_start').innerHTML = "►";
        document.getElementById('button_calc_start').innerHTML = "►";

        schotchik = 0; 
       
          
          
        var kol = 0;
        if (parseInt(Editbox_otvet_1.value) == otvet_1) {
          window_otvet_1.classList.remove("panel-danger","panel-default"); 
          window_otvet_1.classList.add("panel-success");
          examples += " = " + otvet_1.toString() + " ✔ (";
          examples += chislo.toString();  
          examples += ")\n"; 
            kol++;
            prav_1++;
            if (device.mobile() || device.tablet())
            Editbox_otvet_1.value = parseInt(Editbox_otvet_1.value) + " = " + otvet_1.toString() + " ✔ "
            else{
              var newcell = document.all.table_schot_1.insertRow().insertCell()
              $(newcell).addClass("success-2")
              newcell.innerText = parseInt(Editbox_otvet_1.value)
              $("#Editbox_otvet_1").css({
                "background-color": "blue"
              })
               Editbox_otvet_1.value =  "[" + otvet_1.toString() + "]"
            }        
        } 
        else{
          window_otvet_1.classList.remove("panel-success","panel-default"); 
          window_otvet_1.classList.add("panel-danger");
          examples += " ≠ " + parseInt(Editbox_otvet_1.value) + " ✘ (";
          examples += chislo.toString();  
          examples += ")\n"; 
          if (device.mobile() || device.tablet())
          Editbox_otvet_1.value = parseInt(Editbox_otvet_1.value) + " ≠ " + otvet_1.toString() + " ✘ "
          else{
              var newcell = document.all.table_schot_1.insertRow().insertCell()
              $(newcell).addClass("danger-2")
               newcell.innerText = parseInt(Editbox_otvet_1.value)
              $("#Editbox_otvet_1").css({
                "background-color": "blue"
              })
               Editbox_otvet_1.value =  "[" + otvet_1.toString() + "]"
            } 
        }
        if (parseInt(Editbox_otvet_2.value) == otvet_2) {
          window_otvet_2.classList.remove("panel-danger","panel-default"); 
          window_otvet_2.classList.add("panel-success");
            kol++;
            prav_2++;
          var newcell = document.all.table_schot_2.insertRow().insertCell()
              $(newcell).addClass("success-2")
               newcell.innerText = parseInt(Editbox_otvet_2.value)
              $("#Editbox_otvet_2").css({
                "background-color": "blue"
              })
               Editbox_otvet_2.value =  "[" + otvet_2.toString() + "]"
        } 
        else{
          window_otvet_2.classList.remove("panel-success","panel-default"); 
          window_otvet_2.classList.add("panel-danger");
          var newcell = document.all.table_schot_2.insertRow().insertCell()
              $(newcell).addClass("danger-2")
               newcell.innerText = parseInt(Editbox_otvet_2.value)
              $("#Editbox_otvet_2").css({
                "background-color": "blue"
              })
               Editbox_otvet_2.value =  "[" + otvet_2.toString() + "]"
        }
        if (parseInt(Editbox_otvet_3.value) == otvet_3) {
          window_otvet_3.classList.remove("panel-danger","panel-default"); 
          window_otvet_3.classList.add("panel-success");
            kol++;
            prav_3++;
            var newcell = document.all.table_schot_3.insertRow().insertCell()
              $(newcell).addClass("success-2")
              newcell.innerText = otvet_3 
              $("#Editbox_otvet_3").css({
                "background-color": "green"
              })
        } 
        else{
          window_otvet_3.classList.remove("panel-success","panel-default"); 
          window_otvet_3.classList.add("panel-danger");
          var newcell = document.all.table_schot_3.insertRow().insertCell()
              $(newcell).addClass("success-2")
              newcell.innerText = otvet_3 
              $("#Editbox_otvet_3").css({
                "background-color": "red"
              })
        }
        if (parseInt(Editbox_otvet_4.value) == otvet_4) {
          window_otvet_4.classList.remove("panel-danger","panel-default"); 
          window_otvet_4.classList.add("panel-success");
            kol++;
            prav_4++;
          var newcell = document.all.table_schot_4.insertRow().insertCell()
              $(newcell).addClass("success-2")
              newcell.innerText = otvet_4   
        } 
        else{
          window_otvet_4.classList.remove("panel-success","panel-default"); 
          window_otvet_4.classList.add("panel-danger");
           var newcell = document.all.table_schot_4.insertRow().insertCell()
              $(newcell).addClass("success-2")
              newcell.innerText = otvet_4  
        }
        if (parseInt(Editbox_otvet_5.value) == otvet_5) {
          window_otvet_5.classList.remove("panel-danger","panel-default"); 
          window_otvet_5.classList.add("panel-success");
            kol++;
            prav_5++;
           var newcell = document.all.table_schot_5.insertRow().insertCell()
              $(newcell).addClass("success-2")
              newcell.innerText = otvet_5    
        } 
        else{
          window_otvet_5.classList.remove("panel-success","panel-default"); 
          window_otvet_5.classList.add("panel-danger");
          var newcell = document.all.table_schot_5.insertRow().insertCell()
              $(newcell).addClass("success-2")
              newcell.innerText = otvet_5 
        }
        if (parseInt(Editbox_otvet_6.value) == otvet_6) {
          window_otvet_6.classList.remove("panel-danger","panel-default"); 
          window_otvet_6.classList.add("panel-success");
            kol++;
            prav_6++;
          var newcell = document.all.table_schot_6.insertRow().insertCell()
              $(newcell).addClass("success-2")
              newcell.innerText = otvet_6   
        } 
        else{
          window_otvet_6.classList.remove("panel-success","panel-default"); 
          window_otvet_6.classList.add("panel-danger");
          var newcell = document.all.table_schot_6.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_6 
        }
        if (parseInt(Editbox_otvet_7.value) == otvet_7) {
          window_otvet_7.classList.remove("panel-danger","panel-default"); 
          window_otvet_7.classList.add("panel-success");
            kol++;
            prav_7++;
          var newcell = document.all.table_schot_7.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_7   
        } 
        else{
          window_otvet_7.classList.remove("panel-success","panel-default"); 
          window_otvet_7.classList.add("panel-danger");
          var newcell = document.all.table_schot_7.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_7 
        }
        if (parseInt(Editbox_otvet_8.value) == otvet_8) {
          window_otvet_8.classList.remove("panel-danger","panel-default"); 
          window_otvet_8.classList.add("panel-success");
            kol++;
            prav_8++;
          var newcell = document.all.table_schot_8.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_8  
        } 
        else{
          window_otvet_8.classList.remove("panel-success","panel-default"); 
          window_otvet_8.classList.add("panel-danger");
          var newcell = document.all.table_schot_8.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_8  
        }
        if (parseInt(Editbox_otvet_9.value) == otvet_9) {
          window_otvet_9.classList.remove("panel-danger","panel-default"); 
          window_otvet_9.classList.add("panel-success");
            kol++;
            prav_9++;
          var newcell = document.all.table_schot_9.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_9   
        } 
        else{
          window_otvet_9.classList.remove("panel-success","panel-default"); 
          window_otvet_9.classList.add("panel-danger");
          var newcell = document.all.table_schot_9.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_9  
        }
        if (parseInt(Editbox_otvet_10.value) == otvet_10) {
          window_otvet_10.classList.remove("panel-danger","panel-default"); 
          window_otvet_10.classList.add("panel-success");
            kol++;
            prav_10++;
          var newcell = document.all.table_schot_10.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_10   
        } 
        else{
          window_otvet_10.classList.remove("panel-success","panel-default"); 
          window_otvet_10.classList.add("panel-danger");
          var newcell = document.all.table_schot_10.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_10  
        }
        if (parseInt(Editbox_otvet_11.value) == otvet_11) {
          window_otvet_11.classList.remove("panel-danger","panel-default"); 
          window_otvet_11.classList.add("panel-success");
            kol++;
            prav_11++;
          var newcell = document.all.table_schot_11.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_11    
        } 
        else{
          window_otvet_11.classList.remove("panel-success","panel-default"); 
          window_otvet_11.classList.add("panel-danger");
          var newcell = document.all.table_schot_11.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_11 
        }
        if (parseInt(Editbox_otvet_12.value) == otvet_12) {
          window_otvet_12.classList.remove("panel-danger","panel-default"); 
          window_otvet_12.classList.add("panel-success");
            kol++;
            prav_12++;
          var newcell = document.all.table_schot_12.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_12   
        } 
        else{
          window_otvet_12.classList.remove("panel-success","panel-default"); 
          window_otvet_12.classList.add("panel-danger");
          var newcell = document.all.table_schot_12.insertRow().insertCell()
          $(newcell).addClass("success-2")
          newcell.innerText = otvet_12 
        }
        document.getElementById('percent_1').innerHTML =10*prav_1;
        document.getElementById('percent_2').innerHTML =10*prav_2;
        document.getElementById('percent_3').innerHTML =10*prav_3;
        document.getElementById('percent_4').innerHTML =10*prav_4;
        document.getElementById('percent_5').innerHTML =10*prav_5;
        document.getElementById('percent_6').innerHTML =10*prav_6;
        document.getElementById('percent_7').innerHTML =10*prav_7;
        document.getElementById('percent_8').innerHTML =10*prav_8;
        document.getElementById('percent_9').innerHTML =10*prav_9;
        document.getElementById('percent_10').innerHTML =10*prav_10;
        document.getElementById('percent_11').innerHTML =10*prav_11;
        document.getElementById('percent_12').innerHTML =10*prav_12;      
        prav += kol;
        vip += Kolstolb;
        // document.getElementById('pravilno_progress').style.width = parseInt(prav/vip*100)+ "%";
        // document.getElementById('navbar_pravilno_progress').style.width = parseInt(prav/vip*100)+ "%";
        // vip = parseInt(vip);
        // prav = parseInt(prav);
      //  x = parseInt(prav/vip*100);
      //  document.getElementById('pravilno_text').innerHTML = "Правильно " +  prav + " из " + vip + " (" + x + "%)";
      //  document.getElementById('navbar_pravilno_text').innerHTML ="Правильно " + prav + " из " + vip + " (" + x + "%)";
        // vip = parseInt(vip);
        // prav = parseInt(prav);
        if (Kolstolb == 1) var polkolstolb = 1;
        else var polkolstolb = parseInt(Kolstolb/2);
        if (kol >= polkolstolb) soundClick2(1,1); else soundClick2(0,1);
        show_pravilno();
        show_vipolneno();
        if (vip == zad) {
          show_result();
          $('#modal_result').modal('show');
          soundClick2(2,1);
          mus = true;
        }
        
      break;
    }
  } 
}

function yes_no(a,arr){ 
  var c = false, i = 0;
  while (c == false && i<arr.length) {
    if (a == arr[i++]) c = true;  
  }
  return c;
}

var 
otvet_1 = 0, 
otvet_2 = 0,
otvet_3 = 0, 
otvet_4 = 0,
otvet_5 = 0,
otvet_6 = 0, 
otvet_7 = 0,
otvet_8 = 0, 
otvet_9 = 0,
otvet_10 = 0,
otvet_11 = 0, 
otvet_12 = 0;
var examples = "" 
function show_first_last(number){

      switch(number){
        case 1:
          var newrow= document.all.table_schot_1.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
          examples += chislo.toString();
        break;
        case 2:
          var newrow= document.all.table_schot_2.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 3:
          var newrow= document.all.table_schot_3.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 4:
          var newrow= document.all.table_schot_4.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 5:
          var newrow= document.all.table_schot_5.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 6:
          var newrow= document.all.table_schot_6.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 7:
          var newrow= document.all.table_schot_7.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 8:
          var newrow= document.all.table_schot_8.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 9:
          var newrow= document.all.table_schot_9.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 10:
          var newrow= document.all.table_schot_10.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 11:
          var newrow= document.all.table_schot_11.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
        case 12:
          var newrow= document.all.table_schot_12.insertRow(); 
          var newcell=newrow.insertCell(); 
          newcell.innerText = chislo;
        break;
      }
}

function ravno(number){
  switch(number){
        case 1:
          var newrow= document.all.table_schot_1.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          // document.getElementById('button_start').innerHTML = "Проверь";
          if (!(device.mobile() || device.tablet())){
            Editbox_otvet_1.readOnly = false;
            document.getElementById("Editbox_otvet_1").focus();
          }
          otvet_1 = chislo;
          
        break;
        case 2:
          var newrow= document.all.table_schot_2.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          // document.getElementById('button_start_2').innerHTML = "Проверь";
          Editbox_otvet_2.readOnly = false;
          otvet_2 = chislo;
        break;
        case 3:
          var newrow= document.all.table_schot_3.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          // document.getElementById('button_start_3').innerHTML = "Проверь";
          Editbox_otvet_3.readOnly = false;
          otvet_3 = chislo;
        break;
        case 4:
          var newrow= document.all.table_schot_4.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          // document.getElementById('button_start_4').innerHTML = "Проверь";
          Editbox_otvet_4.readOnly = false;
          otvet_4 = chislo;
        break;
        case 5:
          var newrow= document.all.table_schot_5.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          Editbox_otvet_5.readOnly = false;
          otvet_5 = chislo;
        break;
        case 6:
          var newrow= document.all.table_schot_6.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          Editbox_otvet_6.readOnly = false;
          otvet_6 = chislo;
        break;
        case 7:
          var newrow= document.all.table_schot_7.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          Editbox_otvet_7.readOnly = false;
          otvet_7 = chislo;
        break;
        case 8:
          var newrow= document.all.table_schot_8.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          Editbox_otvet_8.readOnly = false;
          otvet_8 = chislo;
        break;
        case 9:
          var newrow= document.all.table_schot_9.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          Editbox_otvet_9.readOnly = false;
          otvet_9 = chislo;
        break;
        case 10:
          var newrow= document.all.table_schot_10.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          Editbox_otvet_10.readOnly = false;
          otvet_10 = chislo;
        break;
        case 11:
          var newrow= document.all.table_schot_11.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          Editbox_otvet_11.readOnly = false;
          otvet_11 = chislo;
        break;
        case 12:
          var newrow= document.all.table_schot_12.insertRow(); 
          var newcell=newrow.insertCell(); 
          //newcell.innerText = "=";
          Editbox_otvet_12.readOnly = false;
          otvet_12 = chislo;
        break;
      } 
  document.getElementById('button_start').innerHTML = "✐";
  document.getElementById('button_calc_start').innerHTML = "✐";
  Editbox_otvet_1.value = ""; 
}
function chislo_plus_f(number){
  chislo += chislo_plus_all;
  switch(number){
    case 1:
      var newrow= document.all.table_schot_1.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
      newcell.style.height = 30
      examples += " + " + chislo_plus_all.toString();
    break;
    case 2:
      var newrow= document.all.table_schot_2.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 3:
      var newrow= document.all.table_schot_3.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 4:
      var newrow= document.all.table_schot_4.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 5:
      var newrow= document.all.table_schot_5.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText =  chislo_plus_all;
    break;
    case 6:
      var newrow= document.all.table_schot_6.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 7:
      var newrow= document.all.table_schot_7.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 8:
      var newrow= document.all.table_schot_8.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 9:
      var newrow= document.all.table_schot_9.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 10:
      var newrow= document.all.table_schot_10.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 11:
      var newrow= document.all.table_schot_11.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
    case 12:
      var newrow= document.all.table_schot_12.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = chislo_plus_all;
    break;
  }
  chislo = parseInt(chislo);
  chislo_plus_all = parseInt(chislo_plus_all);
}

function chislo_minus_f(number){
  chislo -= chislo_plus_all;
  switch(number){
    case 1:
      var newrow= document.all.table_schot_1.insertRow(); 
      var newcell=newrow.insertCell(); 
      examples += " - " + chislo_plus_all.toString();
      newcell.innerText = "-"+ chislo_plus_all;
      newcell.style.height = 30

    break;
    case 2:
      var newrow= document.all.table_schot_2.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
    case 3:
      var newrow= document.all.table_schot_3.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+chislo_plus_all;
    break;
    case 4:
      var newrow= document.all.table_schot_4.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+chislo_plus_all;
    break;
    case 5:
      var newrow= document.all.table_schot_5.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
    case 6:
      var newrow= document.all.table_schot_6.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
    case 7:
      var newrow= document.all.table_schot_7.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
    case 8:
      var newrow= document.all.table_schot_8.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
    case 9:
      var newrow= document.all.table_schot_9.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
    case 10:
      var newrow= document.all.table_schot_10.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
    case 11:
      var newrow= document.all.table_schot_11.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
    case 12:
      var newrow= document.all.table_schot_12.insertRow(); 
      var newcell=newrow.insertCell(); 
      newcell.innerText = "-"+ chislo_plus_all;
    break;
  }
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
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }
    chislo_plus_f(number);
  }
}


function calculate_simple_sub() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (chislo == 0 || schotchik == Kolslog) {
    ravno(number);    
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }
    chislo_minus_f(number);
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
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }

    if (znak == 0) {
      chislo_plus_f(number);
    }
    else {
      chislo_minus_f(number);
    }
  }
}

function calculate_brother_add() {
  var max_chislo = power10(Kolcifr)-1;
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (schotchik == Kolslog) {
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }

    if (znak == 0) {
      chislo_plus_f(number);
    }
    else {
      chislo_minus_f(number);
    }
  }
}

function calculate_brother_sub() {
  var max_chislo = power10(Kolcifr)-1;
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (schotchik == Kolslog) {
    ravno(number);
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
          exclude(chislo_plus[i],possible_checked_var[i][0][k]);
          exclude(chislo_plus[i],possible_checked_var[i][1][k]);
        }   
      } 
      else {
        for (var k = 0; k <= 4; k++){
          exclude(chislo_plus[i],possible_checked_var[i][0][k]);
          exclude(chislo_plus[i],possible_checked_var[i][1][k]);
        }   
      } 
      if (znak == 0)  cifr[i] += parseInt(chislo_plus[i]);
      else cifr[i] -= parseInt(chislo_plus[i]);
    }

    if (znak == 0) chislo_plus_f(number);
    else chislo_minus_f(number);
  }
}

function calculate_brother_add_sub() {
  var max_chislo = power10(Kolcifr)-1;
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  
  if (schotchik == Kolslog) {
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }

    if (znak == 0) chislo_plus_f(number);
    else chislo_minus_f(number);
  } 
}

function calculate_friend_add() {
  var POSSIBLE_CHECKED_CONST =  possible_checked(Level,Operation);
  chislo_plus = []; chislo_plus_all = 0;
  schotchik++;
  if (schotchik == Kolslog) {
    ravno(number);
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
      if (chislo_plus[i]==8 || chislo_plus[i]==9){
        for (var k = 0; k <= 9; k++){
          exclude(chislo_plus[i],possible_checked_var[i][0][k]);
          exclude(chislo_plus[i],possible_checked_var[i][1][k]);
        }
      }
    }
    chislo_plus_f(number);
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
    ravno(number);
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
        if (chislo_plus[i]==8 || chislo_plus[i] == 9)
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }

    chislo_minus_f(number);
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
    ravno(number);
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
      if (chislo_plus[i]==8 || chislo_plus[i]==9){
        for (var k = 0; k <= 9; k++){
          exclude(chislo_plus[i],possible_checked_var[i][0][k]);
          exclude(chislo_plus[i],possible_checked_var[i][1][k]);
        }
      }
    }
    if (znak == 0) {
      chislo_plus_f(number);
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    }
    else {
      chislo_minus_f(number);
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
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }
      chislo_plus_f(number);
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
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }

    chislo_minus_f(number);
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
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }
    if (znak == 0) {
      chislo_plus_f(number);
      cifr.length = 0;
      for (var i = 0; i < Kolcifr; i++) {
        cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
      }
    }
    else {
      chislo_minus_f(number);
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
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }
    chislo_plus_f(number);
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
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }
    chislo_minus_f(number);
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
    ravno(number);
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
        exclude(chislo_plus[i],possible_checked_var[i][0][k]);
        exclude(chislo_plus[i],possible_checked_var[i][1][k]);
      } 
    }

    if (znak == 0) {
      chislo_plus_f(number);
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
      chislo_minus_f(number);
    }
  }
}