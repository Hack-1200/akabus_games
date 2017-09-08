var send_operation = 0,
send_kolcifr1 = 2,
send_kolcifr2 = 1,
send_kolprim = 10,
send_module = 3,
send_interval = 1,
send_kolcifr =1,
send_kolslog = 6,
send_half = true;

function primenit(){
    $('#vvod_uroven').val(send_module);
    $('#vvod_operation').val(send_operation)
    $('#vvod_zad').val(send_kolprim)
    $('#vvod_kolslog').val(send_kolslog)
    $('#vvod_skorost').val(send_interval)
    $('#vvod_kolcifr').val(send_kolcifr)
    $('#vvod_kolcifr_first').val(send_kolcifr1);
    $('#vvod_kolcifr_second').val(send_kolcifr2);
    $('#vvod_half').val(send_half);
    $('#vvod_checked_cifr').val(whatchecked());
    }
    
function button_half_f(){
  if ( Button_half.classList.contains('active') ){
    Button_half.classList.remove('active');
    send_half = false;
  }
  else{
    Button_half.classList.add('active');
    send_half = true;
  }
  primenit();
}
  function whatchecked(){
  var arr=[];
    if (!isNaN(parseInt($("#button_1").html()))) {
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
    }
  return arr;
}

function skorost_1(){
  var t = Math.abs(parseFloat(prompt("Enter the time interval of delay within of 0.001 to 10 sec")));
  if (isNaN(t) || t <= 0) document.getElementById('Skorost_tablo').innerHTML = 1;
  else{
    document.getElementById('Skorost_tablo').innerHTML = t;
    send_interval = t;
  }
  primenit();
}

function skorost_plus(){
  var i = document.getElementById('Skorost_tablo').innerHTML;
  i = parseInt(i*10)/10;
  if (i >= 0 && i < 1) {
    i += 0.1;
     document.getElementById('Skorost_tablo').innerHTML = i.toFixed(1);
     send_interval = i.toFixed(1);
  }
  else if (i >= 1 && i < 2) {
    i+=0.2;
    document.getElementById('Skorost_tablo').innerHTML  = i.toFixed(1);
    send_interval = i.toFixed(1);
  }
  else if (i >= 2 && i < 5) {
    i+=0.5;
    document.getElementById('Skorost_tablo').innerHTML  = i.toFixed(1);
    send_interval = i.toFixed(1);
  }

  else {
    i+=1;
    document.getElementById('Skorost_tablo').innerHTML  = i;
    send_interval = i.toFixed(1);
  }
  primenit();
}

function skorost_minus(){
  var i = document.getElementById('Skorost_tablo').innerHTML;
  if (i > 0 && i <= 1) {
    i -= 0.1;
    if (i <= 0) {
      document.getElementById('Skorost_tablo').innerHTML = 0.005;
      send_interval = 0.005;
    }
    else {
      document.getElementById('Skorost_tablo').innerHTML = i.toFixed(1);
      send_interval = i.toFixed(1);
    }
  }
  else if (i > 1 && i <= 2) {
    i -= 0.2;
    document.getElementById('Skorost_tablo').innerHTML  = i.toFixed(1);
    send_interval = i.toFixed(1);
  }
  else if (i > 2 && i <= 5) {
    i -= 0.5;
    document.getElementById('Skorost_tablo').innerHTML  = i.toFixed(1);
    send_interval = i.toFixed(1);
  }

  else {
    i -= 1;
    document.getElementById('Skorost_tablo').innerHTML  = i;
    send_interval = i.toFixed(1);
  }
  primenit();
}

  function kolslog_plus(){
    if (document.getElementById('Kolslog_tablo').innerHTML < 50){
      send_kolslog++
      document.getElementById('Kolslog_tablo').innerHTML=send_kolslog.toString();
    } 
  }

  function kolslog_minus(){
    if (document.getElementById('Kolslog_tablo').innerHTML > 2){
      send_kolslog--
      document.getElementById('Kolslog_tablo').innerHTML=send_kolslog.toString();
    } 
  }

  function kolslog_10(){
    var t = Math.abs(parseFloat(prompt("Enter the number of summands in the range of 2 to 50")));
    if (isNaN(t) || t < 2 || t > 50) document.getElementById('Kolslog_tablo').innerHTML = 10;
    else{
      t = parseInt(t);
      document.getElementById('Kolslog_tablo').innerHTML = t;
      send_kolslog = parseInt(t)
    }
    primenit();
  }

function primer_enter(){

  var t = Math.abs(parseFloat(prompt("Enter a number of exercises from 1 to 50")));
  if (isNaN(t) || t > 50 || t < 1) {
    document.getElementById('Kolprim_tablo').innerHTML = 20;
    send_kolprim = 20
  }
  else{
    document.getElementById('Kolprim_tablo').innerHTML = parseInt(t);
    send_kolprim = parseInt(t)
  }
  primenit();

}

function kolprim_plus(){
    if (document.getElementById('Kolprim_tablo').innerHTML < 60){
      send_kolprim++
      document.getElementById('Kolprim_tablo').innerHTML = send_kolprim.toString();
    }
  primenit();   
  }

function kolprim_minus(){
    if (document.getElementById('Kolprim_tablo').innerHTML > 2){
      send_kolprim--
      document.getElementById('Kolprim_tablo').innerHTML = send_kolprim.toString();
    }
  primenit();   
  }


function kolcifr_1() {
  send_kolcifr = 1
  Button_Kolcifr_1.classList.add('active');
  Button_Kolcifr_2.classList.remove('active');
  Button_Kolcifr_3.classList.remove('active');
  Button_Kolcifr_4.classList.remove('active');
  document.getElementById('Kolcifr_tablo').innerHTML = 1;
  primenit();
}

function kolcifr_2() {
  send_kolcifr=2
  Button_Kolcifr_1.classList.remove('active');
  Button_Kolcifr_2.classList.add('active');
  Button_Kolcifr_3.classList.remove('active');
  Button_Kolcifr_4.classList.remove('active');
  document.getElementById('Kolcifr_tablo').innerHTML = 2;
  primenit();
}

function kolcifr_3() {
  send_kolcifr=3
  Button_Kolcifr_1.classList.remove('active');
  Button_Kolcifr_2.classList.remove('active');
  Button_Kolcifr_3.classList.add('active');
  Button_Kolcifr_4.classList.remove('active');
  document.getElementById('Kolcifr_tablo').innerHTML = 3;
  primenit();
}

function kolcifr_4() {
  send_kolcifr=4
  Button_Kolcifr_1.classList.remove('active');
  Button_Kolcifr_2.classList.remove('active');
  Button_Kolcifr_3.classList.remove('active');
  Button_Kolcifr_4.classList.add('active');
  document.getElementById('Kolcifr_tablo').innerHTML = 4;
  primenit();
}



function operation_plus() {
  send_operation=0
  Button_operation_plus.classList.add('active');
  Button_operation_minus.classList.remove('active');
  Button_operation_plus_minus.classList.remove('active');
  document.getElementById('Operation_tablo').innerHTML = 0;
  primenit();
}

function operation_minus() {
  send_operation =1
  Button_operation_plus.classList.remove('active');
  Button_operation_minus.classList.add('active');
  Button_operation_plus_minus.classList.remove('active');
  document.getElementById('Operation_tablo').innerHTML = 1;
  primenit();
}

function operation_plus_minus() {
  send_operation =2
  Button_operation_plus.classList.remove('active');
  Button_operation_minus.classList.remove('active');
  Button_operation_plus_minus.classList.add('active');
  document.getElementById('Operation_tablo').innerHTML = 2;
  primenit();
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
    primenit();
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
    primenit();
  }

  function check_1(){
    if (!button_drug.classList.contains('active')){
      if (button_1.classList.contains('active')) button_1.classList.remove('active')
      else button_1.className =  "btn btn-default active";
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
    primenit();
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
    primenit();
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
    primenit();
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
  primenit();
  }



  function button_prosto_f(){
    send_module = 1;
    if (button_prosto.classList.contains('active')){
      check_all();
    }
    else{
      button_6.classList.remove('hidden');
      button_7.classList.remove('hidden');
      button_8.classList.remove('hidden');
      button_9.classList.remove('hidden');
      document.getElementById('Level_tablo').innerHTML = 1;
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
    primenit();
  }

  function button_brat_f(){
    send_module = 2;
    if (button_brat.classList.contains('active')){
      check_all();
    }
    else{
    button_1.classList.remove('hidden');
    button_2.classList.remove('hidden');
    button_3.classList.remove('hidden');
    button_4.classList.remove('hidden');
    document.getElementById('Level_tablo').innerHTML = 2;
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
    primenit();
  }

  function button_drug_f(){
    send_module = 3;
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
    document.getElementById('Level_tablo').innerHTML = 3;
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
  primenit();
  }

  function button_combo_f(){
    send_module = 4;
    if (button_combo.classList.contains('active')){
      check_all();
    }
    else{
      button_6.classList.remove('hidden');
      button_7.classList.remove('hidden');
      button_8.classList.remove('hidden');
      button_9.classList.remove('hidden');
      document.getElementById('Level_tablo').innerHTML = 4;
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
    primenit();
  }

  function button_random_f(){
    send_module = 5;
    document.getElementById('Level_tablo').innerHTML = 5;
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
    primenit();
  }




function Kolprim_minus(){
  if ( send_kolprim > 1 ){
    send_kolprim--;

    $('#Kolprim_tablo').html(send_kolprim);
  }
  primenit()
}
function Kolprim_plus(){
  if ( send_kolprim < 60 ){
    send_kolprim++;
    $('#Kolprim_tablo').html(send_kolprim);
  }
  primenit()
}  
function operation_multi(){
  send_operation = 0;
  $('#Operation_tablo').html('0') 
  $('#Button_operation_multi').addClass('active') 
  $('#Button_operation_divide').removeClass('active') 
  $('#modal_multi_div_1').html('первого множителя')  
  $('#modal_multi_div_2').html('второго множителя')
  primenit()
}
function operation_divide(){
  send_operation = 1;
  $('#Operation_tablo').html('1') 
  $('#Button_operation_multi').removeClass('active') 
  $('#Button_operation_divide').addClass('active')
  $('#modal_multi_div_1').html('делимого')  
  $('#modal_multi_div_2').html('делителя')
  primenit() 
}


function Kolcifr1_f (k) {
  if ((send_operation == 0) && (k>4)){
    $('#Kolcifr1_tablo').html(4);
    send_kolcifr1 = 4;
  }
  else{
    $('#Kolcifr1_tablo').html(k);
    send_kolcifr1 = k;
  }  
  primenit()
}
function Kolcifr2_f (k) {
  $('#Kolcifr2_tablo').html(k);
 
  send_kolcifr2 = k;
  primenit()
}
function Kolcifr1_minus(){
  if ( send_kolcifr1 > 1 ){
    send_kolcifr1 -= 1
    $('#Kolcifr1_tablo').html(send_kolcifr1)
  }
    primenit()
}

function Kolcifr1_plus(){
  if (send_operation == 0) max = 4
  else max = 8;
  if ( send_kolcifr1 < max){
    send_kolcifr1 += 1
    $('#Kolcifr1_tablo').html(send_kolcifr1)
  }
    primenit()
}

function Kolcifr2_minus(){
  if ( send_kolcifr2 > 1 ){
    send_kolcifr2 -= 1
    $('#Kolcifr2_tablo').html(send_kolcifr2)
  }
    primenit()
}

function Kolcifr2_plus(){
  if ( send_kolcifr2 < 4 ){
    send_kolcifr2 += 1
    $('#Kolcifr2_tablo').html(send_kolcifr2)
  }
    primenit()
}