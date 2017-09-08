function navbar_fill(){
  if (language_id==1){
    $("#modal_result_title").html("Result");
    $("#modal_result_p").html("Congratulations, you've done your training exercise !!! Here are your results:");
    $("#modal_result_again").html("To try one more time");
    $("#modal_result_send").html("Send");
    $("#modal_settings_title").html("Settings");
    $("#modal_result_title").html("Result");
    $("#vipolneno_menu_h5").html("Done");
    $("#modal_settings_correctness").html("Correctness");
    $("#modal_settings_difficulty").html("Difficulty");
    $("#modal_settings_operations").html("Operations");
    
    $("#Button_operation_multi").attr("title","Multiplication" );
    $("#Button_operation_divide").attr("title","Division" );
    $("#Button_operation_multi").html("Multiplication" );
    $("#Button_operation_divide").html("Division" );
    
    $("#modal_settings_kolprim_title").html("Number of exapmles");
    $("#modal_settings_kolcifr1_title").html("Number of digits");
    $("#modal_settings_kolcifr2_title").html("Number of digits");
    $("#modal_multi_div_1").html("of the first multiplier");
    $("#modal_multi_div_2").html("of the second multiplier");
    $("#modal_settings_save").html("Save");
    $("#navbar_operation_title").html("Operation");


  }
  if (language_id==1){
    switch (Operation){
      case 0:
        $("#Button_operation_multi").addClass("active")
        $("#Button_operation_divide").removeClass("active")
        $("#modal_multi_div_1").html("of the first multiplier")
        $("#modal_multi_div_2").html("of the second multiplier")
        $("#navbar_operation").html("Multiplication")
        $("#navbar_text1").html("1st multiplier") 
        $("#navbar_text2").html("2nd multiplier") 
      break;
      case 1:
        $("#Button_operation_multi").removeClass("active")
        $("#Button_operation_divide").addClass("active")
        $("#modal_multi_div_1").html("в делимом")
        $("#modal_multi_div_2").html("в делителе")
        $("#navbar_operation").html("Деление")
        $("#navbar_text1").html("Делимое") 
        $("#navbar_text2").html("Делитель") 
    }
  } else{
    switch (Operation){
      case 0:
        $("#Button_operation_multi").addClass("active")
        $("#Button_operation_divide").removeClass("active")
        $("#modal_multi_div_1").html("в первом множителе")
        $("#modal_multi_div_2").html("во втором множителе")
        $("#navbar_operation").html("Умножение")
        $("#navbar_text1").html("1-й множитель") 
        $("#navbar_text2").html("2-й множитель") 
      break;
      case 1:
        $("#Button_operation_multi").removeClass("active")
        $("#Button_operation_divide").addClass("active")
        $("#modal_multi_div_1").html("в делимом")
        $("#modal_multi_div_2").html("в делителе")
        $("#navbar_operation").html("Деление")
        $("#navbar_text1").html("Делимое") 
        $("#navbar_text2").html("Делитель") 
    }
  }
    
  $("#Kolcifr1_tablo").html(Kolcifr1) 
  $("#navbar_Kolcifr1").html(Kolcifr1)
  $("#Kolcifr2_tablo").html(Kolcifr2) 
  $("#navbar_Kolcifr2").html(Kolcifr2)
  if (language_id==1){ $("#navbar_vipolneno_text").html("Done 0 of "+ zad) } else{ $("#navbar_vipolneno_text").html("Выполненно 0 из "+ zad) }
 
}

function show_pravilno(){
  prav = allcorrect;
  done = done;
    if (done == 0) x = 0;
    else{ 
        x = parseInt(prav/done*100); 
    }    
    if (language_id==1){
      document.getElementById('navbar_pravilno_text').innerHTML = "Correct " + prav + " of " + done + " (" + x + "%)";
      document.getElementById('pravilno_text').innerHTML = "Correct " + prav + " of " + done + " (" + x + "%)";
    } 
    else{
      document.getElementById('navbar_pravilno_text').innerHTML = "Правильно " + prav + " из " + done + " (" + x + "%)";
      document.getElementById('pravilno_text').innerHTML = "Правильно " + prav + " из " + done + " (" + x + "%)";
    }
    done = parseInt(done);
    prav = parseInt(prav);
}

function show_vipolneno(){
    var x = parseInt(done/zad*100); 
    document.getElementById('navbar_vipolneno_progress').style.width = x + "%";
    if (language_id==1){
      document.getElementById('navbar_vipolneno_text').innerHTML = "Done " + done + " of " + zad + " (" + x + "%)";
      document.getElementById('vipolneno_text').innerHTML = "Done " + done + " of " + zad + " (" + x + "%)";
    } else{
      document.getElementById('navbar_vipolneno_text').innerHTML = "Выполнено " + done + " из " + zad + " (" + x + "%)";
      document.getElementById('vipolneno_text').innerHTML = "Выполнено " + done + " из " + zad + " (" + x + "%)";
    }
    
    document.getElementById('vipolneno_progress').style.width = x + "%";
    
    done = parseInt(done);
    zad = parseInt(zad);
}

function show_result(){
    var_d = new Date();
    end_time = var_d.getTime();
    vrema_vip = parseInt((end_time - start_time)/1000);
    if (language_id==1){
      vrema_vip = parseInt(vrema_vip/60) + " мин " + parseInt(vrema_vip % 60) + " сек " ;
      vrema_vip = parseInt(vrema_vip/60) + " min " + parseInt(vrema_vip % 60) + " sec "
      document.getElementById('modal_vrema_vip').innerHTML = " Time of completion: " +  vrema_vip +" / Date of completion: " + var_d.toLocaleDateString(); 
      document.getElementById('modal_vipolneno_progress').style.width = "100%";
      document.getElementById('modal_vipolneno_text').innerHTML = "Done " + done + " of " + zad + " (100%)";
      done = parseInt(done);
      zad = parseInt(zad);
      var x = parseInt(allcorrect/done*100); 
      document.getElementById('modal_pravilno_progress').style.width = x + "%";
      document.getElementById('modal_pravilno_text').innerHTML = "Correct " + allcorrect + " of " + done + " (" + x + "%)";
    } else{
      vrema_vip = parseInt(vrema_vip/60) + " мин " + parseInt(vrema_vip % 60) + " сек " ;
      document.getElementById('modal_vrema_vip').innerHTML = " Время выполнения: " +  vrema_vip +" / Дата выполнения: " + var_d.toLocaleDateString(); 
      document.getElementById('modal_vipolneno_progress').style.width = "100%";
      document.getElementById('modal_vipolneno_text').innerHTML = "Выполнено " + done + " из " + zad + " (100%)";
      done = parseInt(done);
      zad = parseInt(zad);
      var x = parseInt(allcorrect/done*100); 
      document.getElementById('modal_pravilno_progress').style.width = x + "%";
      document.getElementById('modal_pravilno_text').innerHTML = "Правильно " + allcorrect + " из " + done + " (" + x + "%)";
    }
      
    done = parseInt(done);
    allcorrect = parseInt(allcorrect);
}

function send_answer_in(){ 
    prav= allcorrect;
    if (language_id==1){
      var prav_text = prav + " of " + done + " time of completion: " +  vrema_vip + "\n" + examples;
    } else{
      var prav_text = prav + " из " + done + " за " +  vrema_vip + "\n" + examples;
    }
    
    prav_percent = parseInt(prav/done*100);
    send_answer(prav_percent,prav_text);
}

var start_time, end_time;

window.onload=function(){
  show_progress()
  navbar_fill()
  var_d = new Date();
  start_time = var_d.getTime();
  change_background();
  if (device.mobile() || device.tablet()) {
    create_table(1); 
    $("#name_title").addClass("hidden")
    $("#points_title").addClass("hidden")
    $("#table_schot_2").addClass("hidden")
    $("#table_schot_1").addClass('small-size')
    $("#table_schot_1").removeClass('big-size')
    $("#table_schot_1").removeClass('very-big-size')
    $("#user_answer_1").addClass('small-size')
    $("#user_answer_1").removeClass('big-size')
    $("#user_answer_1").removeClass('very-big-size')
    document.getElementById('navbar_ul').classList.add("hidden");
    document.getElementById('Kolprim_panel').classList.add("hidden");
  }
  else{
    if (zad >=6 ) create_table(6)
    else create_table(zad)
    $("#user_answer_1").removeClass("disabled")
    document.getElementById('navbar_ul').classList.remove("hidden");
  }  
}

function clean_table(){
  while (table_schot_1.rows.length > 0){
        table_schot_1.deleteRow(0);
      }
  Kolprim = 0;    
}
function restart(){
  correct = 0
  allcorrect = 0
  done = 0
  show_progress()
  examples = ""
}
function show_progress(){
  if (done == 0) x = 0;
  else x = parseInt(allcorrect/done*100);    
  document.getElementById('pravilno_progress').style.width = x + "%";
  document.getElementById('navbar_pravilno_progress').style.width = x + "%";
  if (language_id==1){
    $("#navbar_pravilno_text").html("Correct " + allcorrect.toString() + " of " + done.toString() + " (" + x + "%)")
    $("#pravilno_text").html("Correct " + allcorrect.toString() + " of " + done.toString() + " (" + x + "%)")
  } else{
    $("#navbar_pravilno_text").html("Правильно " + allcorrect.toString() + " из " + done.toString() + " (" + x + "%)")
    $("#pravilno_text").html("Правильно " + allcorrect.toString() + " из " + done.toString() + " (" + x + "%)")
  }
    
  x = parseInt(done/zad*100);
  document.getElementById('navbar_vipolneno_progress').style.width = x + "%";
  if (language_id==1){
    $("#navbar_vipolneno_text").html("Correct " + done.toString() + " of " + zad.toString() + " (" + x + "%)")
  } else{
    $("#navbar_vipolneno_text").html("Выполнено " + done.toString() + " из " + zad.toString() + " (" + x + "%)")
  }
  
}
// var Kolcifr1 = 2
// var Kolcifr2 = 1
// var Operation = 0
var examples = "";
mus=false;
function generate(){
  if (done >= zad) {
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
        clean_table()
        if (zad >=6 ) {
          if (zad - done >= 6) create_table(6)
          else create_table(zad - done)
        }    
        else create_table(zad)
        if ((!device.mobile() && !device.tablet()) ){
              user_answer_1.readOnly = false;
              document.getElementById("user_answer_1").focus();
            }
        document.getElementById("user_answer_1").focus();    
        soundClick2(0,0);
        soundClick(1);
        $("#button_start").html("✐");
        if (zad - done < Kolprim) Kolprim = zad - done 
        for (var i = 1;i <= Kolprim; i++ ){
          row_id = "#row_"+i;
          $(row_id).removeClass("danger")
          $(row_id).removeClass("success")
          user_answer_id = "#user_answer_"+i;
          $(user_answer_id).val("")
          problem_id = "#problem_"+i;
          correct_answer_id = "#correct_answer_" + i;
          $(correct_answer_id).addClass("invisible");
          switch (Operation){
            case 0:
              number1 = random_between(power10(Kolcifr1-1) + 1,power10(Kolcifr1));
              number2 = random_between(power10(Kolcifr2-1) + 1,power10(Kolcifr2));
              correct_answer = number1*number2;
              problem_p = number1.toString() + "×" + number2.toString();
              if (!device.tablet() && !device.mobile()) problem_p+="="
            break;
            case 1:
              if (Kolcifr1 <= Kolcifr2){
                Kolcifr1 = Kolcifr2 + 1;
                $("#Kolcifr1_tablo").html(Kolcifr1)
                $("#navbar_Kolcifr1").html(Kolcifr1)
              }
              check = false;
              while (check == false){
                number2 = random_between(power10(Kolcifr2-1)+1,power10(Kolcifr2));
                correct_answer =  random_between(power10(Kolcifr1-Kolcifr2-1),power10(Kolcifr1-Kolcifr2));
                number1 = number2*correct_answer
                if (number1.toString().length == Kolcifr1)
                  check = true;
              } 
              problem_p = number1.toString() + " : " + number2.toString();
              if (!device.tablet() && !device.mobile()) problem_p += "="
            break;  
          }
          
          $(problem_id).html(problem_p);
          $(correct_answer_id).html(correct_answer);
        }
      break;  
      case "✐":
        correct = 0;
        $("#button_start").html("►")
        for (var i=1; i<=Kolprim; i++){
          problem_id = "#problem_"+i;
          row_id = "#row_"+i;
          user_answer_id = "#user_answer_" + i;
          correct_answer_id = "#correct_answer_" + i;
          points_id = "#points_" + i;
          if (!isNaN(parseInt($(points_id).html()))) points = parseInt($(points_id).html())
          else points = 0;
          
          $(correct_answer_id).removeClass("invisible");
          if (parseInt($(correct_answer_id).html()) == parseInt($(user_answer_id).val())){
            $(row_id).addClass("success")
            points += 10;
            correct++;
            $(points_id).html(points)
            if ($(user_answer_id).val() == "" ) user_answer = " - "
            else  user_answer = $(user_answer_id).val()
            problem_p = $(problem_id).html().slice(0,-1)
            examples += problem_p + " = " + user_answer + " ✔ " + "\n"
          }
          else{
            $(row_id).addClass("danger")
            if ($(user_answer_id).val() == "" ) user_answer = " - "
            else  user_answer = $(user_answer_id).val()
            problem_p = $(problem_id).html().slice(0,-1)  
            examples += problem_p + " ≠ " + user_answer + " ✖ " + "(" + $(correct_answer_id).html() + ")\n"
          }
        }
        
        if (Kolprim == 1) half_Kolprim = 1
        else half_Kolprim = parseInt(Kolprim*0.5)
        if (correct >= half_Kolprim) soundClick2(1,1)
        else soundClick2(0,1)

        done += Kolprim;  
        allcorrect += correct;
        show_progress();
        show_vipolneno();
      break;
    } 
  }  
}
  
var allcorrect = 0, correct = 0, done = 0;
function Kolprim_enter(){

  var t = Math.abs(parseFloat(prompt("Введите количество примеров от 1 до 16")));
  if (isNaN(t) || t > 16 || t < 1) {
    document.getElementById('Kolprim_tablo').innerHTML = 6;
    document.getElementById('navbar_Kolprim').innerHTML = 6;
    create_table(6);
  }
  else{
    t = parseInt(t);
    document.getElementById('Kolprim_tablo').innerHTML = t;
    document.getElementById('navbar_Kolprim').innerHTML = t;
    create_table(parseInt(t));
  }
  
}
function button_settings_f(){
    $('#modal_settings').modal('show');
  }
var Kolprim = 0
function create_table(k){
  if (device.mobile() || device.tablet()) {
    Kolprim = 1;
    
    $("#left_border").removeClass('hidden')
    $("#keyboard").removeClass('hidden')
    $("#name_title").addClass('hidden')
    $("#points_title").addClass('hidden')
    $("#correct_answer_title").addClass('hidden')
    $("#user_answer_title").addClass('hidden')
    $("#table_schot_1").addClass('small-size')
    $("#table_schot_1").removeClass('big-size')
    $("#table_schot_1").removeClass('very-big-size')
    $("#window_zadaniye_2").addClass("hidden");
    $("#window_zadaniye_1").removeClass("hidden");
    var newrow= document.all.table_schot_1.insertRow(); 
        var id = "row_1"
        newrow.setAttribute('id',id);
        
        var points = newrow.insertCell();
        var id = "points_1"
        points.setAttribute('id',id);
        $(points).addClass( "hidden" )

        var problem = newrow.insertCell();
        var id = "problem_1"
        problem.setAttribute('id',id);  
        problem.setAttribute('style','text-align:center;')
        if (language_id==1){$(problem).html("Example")} else{$(problem).html("Задание")}


    var newrow= document.all.table_schot_1.insertRow();    
        var newcell_for_input=newrow.insertCell()
        var input = document.createElement("INPUT")
        id= "user_answer_1" 
        input.setAttribute('id',id);
        input.setAttribute('readonly','readonly');
        input.setAttribute('style','text-align:center; background-color: #000000');
        newcell_for_input.appendChild(input)
        $(input).addClass( "black_style2 form-control small-size" )

    var newrow= document.all.table_schot_1.insertRow();    
        var correct = newrow.insertCell()
        id = "correct_answer_1"
        correct.setAttribute('id',id); 
        $(correct).addClass( "invisible" )
        correct.setAttribute('style','text-align:center;')
        if (language_id==1){$(correct).html("Correct")} else{$(correct).html("Правильный ответ")}
        
  }
  else{      
      if ( k <= 8 ){
        if (k<=4){
          $("#table_schot_1").removeClass('small-size')
          $("#table_schot_1").removeClass('big-size')
          $("#table_schot_1").addClass('very-big-size')
          $("#left_border").removeClass("col-lg-3");
          // $("#left_border").removeClass("col-lg-2");
          $("#left_border").addClass("col-lg-1");
          $("#window_zadaniye_1").removeClass("col-lg-6");
          // $("#window_zadaniye_1").removeClass("col-lg-8");
          $("#window_zadaniye_1").addClass("col-lg-10");
        }
        else if (k<=6 && k>=5){
          $("#table_schot_1").removeClass('small-size')
          $("#table_schot_1").addClass('big-size'); $("#table_schot_1").removeClass('very-big-size'); 
         $("#left_border").removeClass("col-lg-3");
          // $("#left_border").removeClass("col-lg-2");
          $("#left_border").addClass("col-lg-1");
          $("#window_zadaniye_1").removeClass("col-lg-6");
          // $("#window_zadaniye_1").removeClass("col-lg-8");
          $("#window_zadaniye_1").addClass("col-lg-10");
        }
        else{
          $("#table_schot_1").removeClass('big-size')
          $("#table_schot_1").addClass('small-size'); $("#table_schot_1").removeClass('very-big-size'); 
          $("#left_border").removeClass("col-lg-1");
          // $("#left_border").removeClass("col-lg-2");
          $("#left_border").addClass("col-lg-3");
          $("#window_zadaniye_1").removeClass("col-lg-10");
          // $("#window_zadaniye_1").removeClass("col-lg-8");
          $("#window_zadaniye_1").addClass("col-lg-6");
        }
        $("#window_zadaniye_1").removeClass("hidden");
        $("#window_zadaniye_2").addClass("hidden");
        $("#left_border").removeClass("hidden");
        // $("#window_zadaniye_1").removeClass("col-lg-6");
        // $("#window_zadaniye_1").addClass("col-lg-10");
        if (k > Kolprim){
          for (var i = Kolprim+1; i <= k; i++){
            var newrow= document.all.table_schot_1.insertRow();
            id= "row_" + i.toString(); 
            newrow.setAttribute('id',id);

            var name = newrow.insertCell()
            name.innerText = i; 
            var id = "name_" + i.toString(); 
            name.setAttribute('id',id); 
            name.setAttribute('onclick',"var tx = this.innerHTML; this.innerHTML = prompt('Введите имя'); if (this.innerHTML == '') this.innerHTML = tx; return false;");

            var points = newrow.insertCell();
            var id = "points_" + i.toString(); 
            points.setAttribute('id',id);
            points.innerText = "-"


            var problem = newrow.insertCell();
            var id = "problem_" + i.toString(); 
            problem.setAttribute('id',id);  
            problem.setAttribute('style','text-align:right;')

            var newcell_for_input=newrow.insertCell()
            var input = document.createElement("INPUT")
            id= "user_answer_" + i.toString(); 
            input.setAttribute('id',id);
            
            if (i==1){
              input.setAttribute('autofocus','autofocus');
              input.setAttribute('readonly','readonly');
              input.setAttribute('style','background-color: #000000');
            }
            newcell_for_input.appendChild(input)
            $(input).addClass( "black_style2 form-control small-size" )
            
            var correct = newrow.insertCell()
            id = "correct_answer_" + i.toString(); 
            correct.setAttribute('id',id); $(correct).addClass( "invisible" )
          } 
        }
        else{
          if (Kolprim < 8){
            for (var i = Kolprim; i > k; i--){ 
              table_schot_1.deleteRow(i-1);
            } 
          }
          else{
            for (var i = Kolprim; i > 8; i--){ 
              table_schot_2.deleteRow(0);
            }
            for (var i = 8; i > k; i--){ 
              table_schot_1.deleteRow(i-1);
            } 
          }  
        }

        Kolprim = k;      
      }
      else{
        $("#table_schot_1").removeClass('big-size')
        $("#table_schot_1").addClass('small-size'); 
        $("#table_schot_1").removeClass('very-big-size');
        $("#window_zadaniye_1").removeClass("hidden");
        $("#window_zadaniye_2").removeClass("hidden");
        $("#left_border").addClass("hidden");
        $("#window_zadaniye_1").removeClass("col-lg-10");
        $("#window_zadaniye_1").addClass("col-lg-6");
        if (k > Kolprim){
          if (Kolprim > 8){
            for (var i=Kolprim+1; i<=k; i++){
              var newrow= document.all.table_schot_2.insertRow();
              id= "row_" + i.toString(); 
              newrow.setAttribute('id',id);

              var name = newrow.insertCell()
              name.innerText = i; 
            var id = "name_" + i.toString(); 
            name.setAttribute('id',id); 
              name.setAttribute('onclick',"var tx = this.innerHTML; this.innerHTML = prompt('Введите имя'); if (this.innerHTML == '') this.innerHTML = tx; return false;");

              var points = newrow.insertCell();
              var id = "points_" + i.toString(); 
              points.setAttribute('id',id);
              points.innerText = "-"

              var problem = newrow.insertCell();
              var id = "problem_" + i.toString(); 
              problem.setAttribute('id',id); problem.setAttribute('style','text-align:right');


              var newcell_for_input=newrow.insertCell()
              var input = document.createElement("INPUT")
              id= "user_answer_" + i.toString(); 
              input.setAttribute('id',id);
              if (i==1)
                input.setAttribute('autofocus','autofocus');
              newcell_for_input.appendChild(input)
              $(input).addClass( "black_style2 form-control" )

              var correct = newrow.insertCell()
              id = "correct_answer_" + i.toString(); 
              correct.setAttribute('id',id); $("correct").addClass( "hidden" )
            } 
          }
          else{
            for (var i=Kolprim +1; i<=8; i++){
              var newrow= document.all.table_schot_1.insertRow();
              id= "row_" + i.toString(); 
              newrow.setAttribute('id',id);

              var name = newrow.insertCell()
              name.innerText = i; 
            var id = "name_" + i.toString(); 
            name.setAttribute('id',id); 
              name.setAttribute('onclick',"var tx = this.innerHTML; this.innerHTML = prompt('Введите имя'); if (this.innerHTML == '') this.innerHTML = tx; return false;");

              var points = newrow.insertCell();
              var id = "points_" + i.toString(); 
              points.setAttribute('id',id);
              points.innerText = "-"

              var problem = newrow.insertCell();
              var id = "problem_" + i.toString(); 
              problem.setAttribute('id',id); problem.setAttribute('style','text-align:right');


              var newcell_for_input=newrow.insertCell()
              var input = document.createElement("INPUT")
              id= "user_answer_" + i.toString(); 
              input.setAttribute('id',id);
              if (i==1)
                input.setAttribute('autofocus','autofocus');
              newcell_for_input.appendChild(input)
              $(input).addClass( "black_style2 form-control" )

              var correct = newrow.insertCell()
              id = "correct_answer_" + i.toString(); 
              correct.setAttribute('id',id); $("correct").addClass( "hidden" )
            } 
            for (var i=9; i<=k; i++){
              var newrow= document.all.table_schot_2.insertRow();
              id= "row_" + i.toString(); 
              newrow.setAttribute('id',id);

              var name = newrow.insertCell()
              name.innerText = i; 
            var id = "name_" + i.toString(); 
            name.setAttribute('id',id); 
              name.setAttribute('onclick',"var tx = this.innerHTML; this.innerHTML = prompt('Введите имя'); if (this.innerHTML == '') this.innerHTML = tx; return false;");

              var points = newrow.insertCell();
              var id = "points_" + i.toString(); 
              points.setAttribute('id',id);
              points.innerText = "-"

              var problem = newrow.insertCell();
              var id = "problem_" + i.toString(); 
              problem.setAttribute('id',id); problem.setAttribute('style','text-align:right');


              var newcell_for_input=newrow.insertCell()
              var input = document.createElement("INPUT")
              id= "user_answer_" + i.toString(); 
              input.setAttribute('id',id);
              if (i==1)
                input.setAttribute('autofocus','autofocus');
              newcell_for_input.appendChild(input)
              $(input).addClass( "black_style2 form-control" )

              var correct = newrow.insertCell()
              id = "correct_answer_" + i.toString(); 
              correct.setAttribute('id',id); $("correct").addClass( "hidden" )
            } 
          }  
        }
        else{
           for (var i = Kolprim; i > k; i--){ 
              table_schot_2.deleteRow( i - 9 );
             }
        }
        Kolprim = k;    
      }   
      for (i=1;i<=Kolprim;i++){
              user_answer_id= "#user_answer_" + i.toString(); 
              if (Kolprim <=4 ){
                $(user_answer_id).removeClass( "small-size" )
                $(user_answer_id).removeClass( "big-size" )
                $(user_answer_id).addClass( "very-big-size" )
              }
              else if (Kolprim<=6 && Kolprim>=5){
                $(user_answer_id).removeClass( "small-size" )
                $(user_answer_id).addClass( "big-size" )
              } 
              else{
                $(user_answer_id).removeClass( "big-size" )
                $(user_answer_id).addClass( "small-size" )
              } 
          }
  }    
}  




var image_schotchik = 0;
function change_background(){
  // if (image_schotchik > 26) image_schotchik = 1;
  // else{
  //   image_schotchik++;
  // } 
  image_schotchik = 1 + randomInteger(26)
  var image_fon = "fon_" + image_schotchik + ".jpg";
  document.body.style.backgroundImage = 'url(/static/custom/css/'+image_fon +')';
  image_schotchik = parseInt(image_schotchik);
}


document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13|| e.keyCode === 32) {
        generate();
    }
    return false;

}

var audio = new Audio();

function soundClick2(u,r) {

    // var audio = new Audio();
  var t = 0;
  var music = "";
  if (r == 1){
    switch (u){
      case 0: 
        t = random_between(1,48); 
        music = 'incorrect-'+ t   + '.mp3';
      break;
      case 1:
        t = random_between(1,19); 
        music = 'correct-'+ t   + '.mp3';
      break;
      case 2:
        t = random_between(1,58); 
        music = 'present-'+ t   + '.mp3';
      break;
      
    }
    audio.src = "/static/custom/audio/" + music;
    audio.autoplay = true;
  }
  else audio.autoplay = false;
}
function soundClick(n) {
  // var audio = new Audio(); 
    switch (n){
        case 1: 
            audio.src = '/static/custom/audio/snd_1.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true;
        break;
        
        case 2: 
            audio.src = '/static/custom/audio/snd_2.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true;
        break;

        case 3: 
            audio.src = '/static/custom/audio/snd_3.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true;
        break;

        case 4: 
            audio.src = '/static/custom/audio/snd_4.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true;
        break;  
    } 
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

correct = ['Молодец!','Восхитительно!','Хорошо делаешь!','Это внушительно!','Невероятно!',
'Отлично!','Превосходно!','Прекрасно!','Поразительно!','Эффектно!','Ты преуспеваешь!',
'Потрясающе!','Остроумно!','Безупречная работа!','То, что надо!','Чудесно!',
'Изумительно!','Потрудился на совесть!','Уже лучше!','Хороший ответ!',
'Ты это заслужил!','Блистательнно!','Какой ты способный!','Так держать!','Ну, это событие!',
'Ты смог!','Хорошо получается!','Сейчас лучше!','Ты справился!','Ты умеешь считать!',
'Хорошо подготовился!','Ты считаешь играя!','Ты на правильном пути!','На высшем уровне!','Здорово!',
'Какой прогресс!','Это мне нравится!','Необыкновенно!','Блестяще!','Можешь гордиться!',
'Замечательно!','Красота!','Нет слов!','Мастерски!','Ты настоящий мастер!',
'Это гениально!','Хорошо получается!','У тебя светлая голова!','Приятно смотреть!','Очаровательно!',
'Ты ссобразителен!','Разумный ответ!','Стоящая работа!','Это достойно похвалы!','Ты прав!',
'Захватывающе!','Правильный ответ!','Правильно!','Другой уровень!'];