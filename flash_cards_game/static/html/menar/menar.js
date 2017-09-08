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
[[[[0,1,2,3,4,5,6,7],[9],[8,9],[7,8,9],[6,7,8,9],[5],[4,5,9],[3,4,5,8,9],[2,3,4,5,7,8],[1,2,3,4,5,6,7]],
   [[],[],[],[],[],[],[],[],[],[]]],

 [[[],[],[],[],[],[],[],[],[],[]],
  [[1,2,3,4,5,6,7,8,9],[2,3,4,5,7,8,9],[3,4,5,8,9],[4,5,9],[5],[6,7,8,9],[7,8,9],[8,9],[9],[0,1,2,3,4,5,6,7]]],

 [[[0,1,2,3,4,5,6,7,8,9],[9],[8,9],[7,8,9],[6,7,8,9],[5],[4,5,9],[3,4,5,8,9],[2,3,4,5,7,8,9],[1,2,3,4,5,6,7,8,9]],
   [[1,2,3,4,5,6,7,8,9],[2,3,4,5,7,8,9],[3,4,5,8,9],[4,5,9],[5],[6,7,8,9],[7,8,9],[8,9],[9],[0,1,2,3,4,5,6,7,8,9]]]];

const POSSIBLE_CONST_COMBO = 
[[[[5,6,7,8],[5,6,7],[5,6],[5],[6,7,8,9],[6,7,8,9],[6,7,8],[6,7],[6],[6,7,8,9]],
   [[],[],[],[],[],[],[],[],[],[]]],

 [[[],[],[],[],[],[],[],[],[],[]],
  [[6,7,8,9],[6],[6,7],[6,7,8],[6,7,8,9],[1,2,3],[1,2,3,4],[1,2,3,4,5],[1,2,3,4,5,6],[5,6,7,8]]],

 [[[5,6,7,8],[5,6,7],[5,6],[5],[6,7,8,9],[6,7,8,9],[6,7,8],[6,7],[6],[6,7,8,9]],
   [[6,7,8,9],[6],[6,7],[6,7,8],[6,7,8,9],[1,2,3],[1,2,3,4],[1,2,3,4,5],[1,2,3,4,5,6],[5,6,7,8]]]];

function soundClick(n) {
  var audio = new Audio(); // Создаём новый элемент Audio
	switch (n){
		case 1: 
			audio.src = 'snd_1.wav'; // Указываем путь к звуку "клика"
  			audio.autoplay = true;
  		break;
  		
  		case 2: 
			audio.src = 'snd_2.wav'; // Указываем путь к звуку "клика"
  			audio.autoplay = true;
  		break;

  		case 3: 
			audio.src = 'snd_3.wav'; // Указываем путь к звуку "клика"
  			audio.autoplay = true;
  		break;

  		case 4: 
			audio.src = 'snd_4.wav'; // Указываем путь к звуку "клика"
  			audio.autoplay = true;
  		break;	
	}  
  	// audio.src = 'snd_2.wav'; // Указываем путь к звуку "клика"
  	// audio.autoplay = true; // Автоматически запускаем
}


function kolslog_plus(){
	KolSlog_tablo.value++;
}

function kolslog_minus(){
	if (KolSlog_tablo.value > 2) KolSlog_tablo.value--;
}
function skorost_plus(){
	var i = Skorost_tablo.value;
	i = parseInt(i*10)/10;
	if (i >= 0 && i < 1) {
		i += 0.1;
		 Skorost_tablo.value = i.toFixed(1);
	}
	else if (i >= 1 && i < 2) {
		i+=0.2;
		Skorost_tablo.value  = i.toFixed(1);
	}
	else if (i >= 2 && i < 5) {
		i+=0.5;
		Skorost_tablo.value  = i.toFixed(1);
	}
	// else if (i <= 0) Skorost_tablo.value = 0;
	else {
		i+=1;
		Skorost_tablo.value  = i/*.toFixed(1)*/;
	}
}
	
function skorost_minus(){
	var i = Skorost_tablo.value;
	// i = Math.ceil(i*10/10);
	if (i > 0 && i <= 1) {
		i -= 0.1;
		if (i < 0.2) Skorost_tablo.value = 0.1;
		else Skorost_tablo.value = i.toFixed(1);
	}
	else if (i > 1 && i <= 2) {
		i -= 0.2;
		Skorost_tablo.value  = i.toFixed(1);
	}
	else if (i > 2 && i <= 5) {
		i -= 0.5;
		Skorost_tablo.value  = i.toFixed(1);
	}
	// else if (i <= 0) Skorost_tablo.value = 0.1;
	else {
		i -= 1;
		Skorost_tablo.value  = i/*.toFixed(1)*/;
	}
}

function mouseover(){
	this.style.background = "#808080";
}

function kolcifr_1 () {
	Shape_cifr_1.style.background = "#9EC32D";
	Shape_cifr_10.style.background = "#808080";
	Shape_cifr_100.style.background = "#808080";
	Shape_cifr_1000.style.background = "#808080";

	KolCifr_tablo.value = 1;
}

function kolcifr_2 () {
	Shape_cifr_1.style.background = "#808080";
	Shape_cifr_10.style.background = "#9EC32D";
	Shape_cifr_100.style.background = "#808080";
	Shape_cifr_1000.style.background = "#808080";

	KolCifr_tablo.value = 2;
}

function kolcifr_3 () {
	Shape_cifr_1.style.background = "#808080";
	Shape_cifr_10.style.background = "#808080";
	Shape_cifr_100.style.background = "#9EC32D";
	Shape_cifr_1000.style.background = "#808080";

	KolCifr_tablo.value = 3;
}

function kolcifr_4 () {
	Shape_cifr_1.style.background = "#808080";
	Shape_cifr_10.style.background = "#808080";
	Shape_cifr_100.style.background = "#808080";
	Shape_cifr_1000.style.background = "#9EC32D";

	KolCifr_tablo.value = 4;
}

function operation_plus() {
	Shape_operation_plus.style.background = "#9EC32D";
	Shape_operation_minus.style.background = "#808080";
	Shape_operation_plus_minus.style.background = "#808080";

	Combobox_operation.value = 0;
}

function operation_minus() {
	Shape_operation_plus.style.background = "#808080";
	Shape_operation_minus.style.background = "#9EC32D";
	Shape_operation_plus_minus.style.background = "#808080";

	Combobox_operation.value = 1;
}

function operation_plus_minus() {
	Shape_operation_plus.style.background = "#808080";
	Shape_operation_minus.style.background = "#808080";
	Shape_operation_plus_minus.style.background = "#9EC32D";

	Combobox_operation.value = 2;
}

function button_prosto(){
	Shape_prosto.style.background = "#9EC32D";
	Shape_brat.style.background = "#808080";
	Shape_drug.style.background = "#808080";
	Shape_combo.style.background = "#808080";
	Shape_random.style.background = "#808080";

	Combobox_level.value = 1;
	wb_Form_prosto.style.visibility = "visible";
	wb_Form_brat.style.visibility = "hidden" ;
	wb_Form_drug.style.visibility = "hidden" ;
	wb_Form_combo.style.visibility = "hidden" ;
}
function button_brat(){
	Shape_prosto.style.background = "#808080";
	Shape_brat.style.background = "#9EC32D";
	Shape_drug.style.background = "#808080";
	Shape_combo.style.background = "#808080";
	Shape_random.style.background = "#808080";

	Combobox_level.value = 2;
	wb_Form_prosto.style.visibility = "hidden";
	wb_Form_brat.style.visibility = "visible" ;
	wb_Form_drug.style.visibility = "hidden" ;
	wb_Form_combo.style.visibility = "hidden" ;
}
function button_drug(){
	Shape_prosto.style.background = "#808080";
	Shape_brat.style.background = "#808080";
	Shape_drug.style.background = "#9EC32D";
	Shape_combo.style.background = "#808080";
	Shape_random.style.background = "#808080";

	Combobox_level.value = 3;
	wb_Form_prosto.style.visibility = "hidden";
	wb_Form_brat.style.visibility = "hidden" ;
	wb_Form_drug.style.visibility = "visible" ;
	wb_Form_combo.style.visibility = "hidden" ;
}
function button_combo(){
	Shape_prosto.style.background = "#808080";
	Shape_brat.style.background = "#808080";
	Shape_drug.style.background = "#808080";
	Shape_combo.style.background = "#9EC32D";
	Shape_random.style.background = "#808080";

	Combobox_level.value = 4;
	wb_Form_prosto.style.visibility = "hidden";
	wb_Form_brat.style.visibility = "hidden" ;
	wb_Form_drug.style.visibility = "hidden" ;
	wb_Form_combo.style.visibility = "visible" ;
}

function button_random(){
	Shape_prosto.style.background = "#808080";
	Shape_brat.style.background = "#808080";
	Shape_drug.style.background = "#808080";
	Shape_combo.style.background = "#808080";
	Shape_random.style.background = "#9EC32D";

	Combobox_level.value = 4;
	wb_Form_prosto.style.visibility = "hidden";
	wb_Form_brat.style.visibility = "hidden" ;
	wb_Form_drug.style.visibility = "hidden" ;
	wb_Form_combo.style.visibility = "hidden" ;
}

// function show(){
// 	// var t = parseInt(Combobox_level.value);
// 	switch (parseInt(Combobox_level.value)){
// 		case 1: 
		
// 			wb_Form_prosto.style.visibility = "visible";
// 			wb_Form_brat.style.visibility = "hidden" ;
// 			wb_Form_drug.style.visibility = "hidden" ;
// 			wb_Form_combo.style.visibility = "hidden" ;

			
// 		break;

// 		case 2: 
// 			wb_Form_prosto.style.visibility = "hidden";
// 			wb_Form_brat.style.visibility = "visible" ;
// 			wb_Form_drug.style.visibility = "hidden" ;
// 			wb_Form_combo.style.visibility = "hidden" ;
// 		break;

// 		case 3: 
// 			wb_Form_prosto.style.visibility = "hidden";
// 			wb_Form_brat.style.visibility = "hidden" ;
// 			wb_Form_drug.style.visibility = "visible" ;
// 			wb_Form_combo.style.visibility = "hidden" ;
// 		break;

// 		case 4: 
// 			wb_Form_prosto.style.visibility = "hidden";
// 			wb_Form_brat.style.visibility = "hidden" ;
// 			wb_Form_drug.style.visibility = "hidden" ;
// 			wb_Form_combo.style.visibility = "visible" ;
// 		break;

// 		case 5: 
// 			wb_Form_prosto.style.visibility = "hidden";
// 			wb_Form_brat.style.visibility = "hidden" ;
// 			wb_Form_drug.style.visibility = "hidden" ;
// 			wb_Form_combo.style.visibility = "hidden" ;
// 		break;
// 	}
// }



function check_5(){
	if (CheckboxProstoye5.checked == false){
		CheckboxProstoye6.checked = false;
		CheckboxProstoye7.checked = false;
		CheckboxProstoye8.checked = false;
		CheckboxProstoye9.checked = false;
	}
}

function check_6(){
	if (CheckboxProstoye6.checked == true){
		CheckboxProstoye5.checked = true;
	}
	else {
		CheckboxProstoye7.checked = false;
		CheckboxProstoye8.checked = false;
		CheckboxProstoye9.checked = false;
	}
}

function check_7(){
	if (CheckboxProstoye7.checked == true){
		CheckboxProstoye5.checked = true;
		CheckboxProstoye6.checked = true;
	}
	else{
		CheckboxProstoye8.checked = false;
		CheckboxProstoye9.checked = false;
	}
}

function check_8(){
	if (CheckboxProstoye8.checked == true){
		CheckboxProstoye5.checked = true;
		CheckboxProstoye6.checked = true;
		CheckboxProstoye7.checked = true;
	}
	else{
		CheckboxProstoye9.checked = false;
	}
}

function check_9(){
	if (CheckboxProstoye9.checked == true){
		CheckboxProstoye5.checked = true;
		CheckboxProstoye6.checked = true;
		CheckboxProstoye7.checked = true;
		CheckboxProstoye8.checked = true;
	}
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

function whatchecked(n){
	var arr=[], arrosn=[];
	switch (parseInt(n)) {
		case 1: 
			include(0,arr);
			if (CheckboxProstoye14.checked == true) {
				include(1,arr);
				include(2,arr);
				include(3,arr);
				include(4,arr);
			}
			if (CheckboxProstoye5.checked == true) include(5,arr);
			if (CheckboxProstoye6.checked == true) include(6,arr);	
			if (CheckboxProstoye7.checked == true) include(7,arr);
			if (CheckboxProstoye8.checked == true) include(8,arr);
			if (CheckboxProstoye9.checked == true) include(9,arr);
			
			arrosn = arr;
			arr = [];
		break;

		case 2:
			include(0,arr);
			if (CheckboxBrat1.checked == true) include(1,arr);
			if (CheckboxBrat2.checked == true) include(2,arr);
			if (CheckboxBrat3.checked == true) include(3,arr);
			if (CheckboxBrat4.checked == true) include(4,arr);
			if (CheckboxBrat59.checked == true){	
				include(5,arr);
				include(6,arr);
				include(7,arr);
				include(8,arr);
				include(9,arr);
			}
			
			arrosn = arr;
			arr = [];
		break;
		case 3:
			include(0,arr);
			if (CheckboxDrug1.checked == true) include(1,arr); 
			if (CheckboxDrug2.checked == true) include(2,arr);
			if (CheckboxDrug3.checked == true) include(3,arr);
			if (CheckboxDrug4.checked == true) include(4,arr);
			if (CheckboxDrug5.checked == true) include(5,arr);
			if (CheckboxDrug6.checked == true) include(6,arr);
			if (CheckboxDrug7.checked == true) include(7,arr);
			if (CheckboxDrug8.checked == true) include(8,arr);
			if (CheckboxDrug9.checked == true) include(9,arr);
			
			arrosn = arr;
			arr = [];
		break;
		case 4:	
			include(0,arr);
			if (CheckboxCombo6.checked == true) include(6,arr);
			if (CheckboxCombo7.checked == true) include(7,arr);
			if (CheckboxCombo8.checked == true) include(8,arr);
			if (CheckboxCombo9.checked == true) include(9,arr);

			if (CheckboxCombo15.checked == true) {
			include(1,arr);
			include(2,arr);
			include(3,arr);
			include(4,arr);
			include(5,arr);	
			}
			
			arrosn = arr;
			arr = [];	
		break;	
		case 5:
			arrosn = [0,1,2,3,4,5,6,7,8,9]
		break;
}
	arr = [];
	return arrosn;
};

function possible_checked (n,m){
	var arrchecked = whatchecked(n);

	var initial = 
	[[[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,5,6,7,8],[0,1,2,5,6,7],[0,1,5,6],[0,5],[0,1,2,3,4],[0,1,2,3],[0,1,2],[0,1],[0]],
   [[0],[0,1],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,5],[0,1,5,6],[0,1,2,5,6,7],[0,1,2,3,5,6,7,8],[0,1,2,3,4,5,6,7,8,9]]];
	if (n == 1 || n == 3 || n == 4) var arr_possible = [[[],[],[],[],[],[],[],[],[],[]],
   								   [[],[],[],[],[],[],[],[],[],[]]];
	else {

		var arr_possible =  [[[],[],[],[],[],[],[],[],[],[]],
   								   [[],[],[],[],[],[],[],[],[],[]]];
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
					if (arr_possible[j][k].length == 0 /*|| arr_possible[j][k] == 0*/){
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
					if (arr_possible[j][k].length == 0 /*|| arr_possible[j][k] == 0*/){
						arr_possible[j][k] = initial[j][k].slice();
					}
				}
			}

		break;	

		case 4:
			var r = 1, p = 1;
			 switch (parseInt(m)) {
		 		case 0: r = 0; p = 0; break;
		 		case 1: r = 1; p = 1; break;
		 		case 2: r = 0; p = 1; break;
			 }
			for (var j = r; j <= p; j++){
				for (var k = 0; k <= 9; k++){
					arr_possible[j][k] = duplicat(arrchecked, POSSIBLE_CONST_COMBO[m][j][k]);
					if (arr_possible[j][k].length == 0 /*|| arr_possible[j][k] == 0*/){
						arr_possible[j][k] = initial[j][k].slice();
					}
				}
			}
		break;

		case 5:
			for (var i = 0; i <= 9; i++) {
				for (var j = 0; j<=1; j++){
					arr_possible[j][i] = [0,1,2,3,4,5,6,7,8,9];
				}
				
			}
		break;	
	}
	
	return arr_possible;	
}

function test(){
	var  n = Combobox_level.value, m = Combobox_operation.value;
	Editbox21.value = possible_checked(n,m)[0][0];
	Editbox22.value = possible_checked(n,m)[0][1];
	Editbox23.value = possible_checked(n,m)[0][2];
	Editbox24.value = possible_checked(n,m)[0][3];
	Editbox25.value = possible_checked(n,m)[0][4];
	Editbox26.value = possible_checked(n,m)[0][5];
	Editbox27.value = possible_checked(n,m)[0][6];
	Editbox28.value = possible_checked(n,m)[0][7];
	Editbox29.value = possible_checked(n,m)[0][8];
	Editbox30.value = possible_checked(n,m)[0][9];
	Editbox31.value = possible_checked(n,m)[1][0];
	Editbox32.value = possible_checked(n,m)[1][1];
	Editbox33.value = possible_checked(n,m)[1][2];
	Editbox34.value = possible_checked(n,m)[1][3];
	Editbox35.value = possible_checked(n,m)[1][4];
	Editbox36.value = possible_checked(n,m)[1][5];
	Editbox37.value = possible_checked(n,m)[1][6];
	Editbox38.value = possible_checked(n,m)[1][7];
	Editbox39.value = possible_checked(n,m)[1][8];
	Editbox40.value = possible_checked(n,m)[1][9];
}

var 
chislo = 0,
chislo_plus_all = 0,
znak = 0,
schotchik = 0,
KolSlog = 0,
KolCifr = 0,
cifr = [],
Uroven_Operation = 0,
Uroven =0,
Operation = 0,
Skorost = 0,
possible_checked_var = [],
chislo_plus = [],
vip = 0,
prav = 0;

var wb_Timer1;
function TimerStart() {
	switch (Uroven_Operation){
      	case 10: wb_Timer1 = setInterval("calculate_simple_add()", Skorost); break;
      	case 11: wb_Timer1 = setInterval("simple_sub()", Skorost); break;
      	case 12: wb_Timer1 = setInterval("simple_add_sub()", Skorost); break;

      	case 20: wb_Timer1 = setInterval("brother_add()", Skorost); break;
      	case 21: wb_Timer1 = setInterval("brother_sub()", Skorost); break;
      	case 22: wb_Timer1 = setInterval("brother_add_sub()", Skorost); break;

      	case 30: wb_Timer1 = setInterval("friend_add()", Skorost); break;
      	case 31: wb_Timer1 = setInterval("friend_sub()", Skorost); break;
      	case 32: wb_Timer1 = setInterval("friend_add_sub()", Skorost); break;

      	case 40: wb_Timer1 = setInterval("combo_add()", Skorost); break;
      	case 41: wb_Timer1 = setInterval("combo_sub()", Skorost); break;
      	case 42: wb_Timer1 = setInterval("combo_add_sub()", Skorost); break;

      	case 50: wb_Timer1 = setInterval("random_add()", Skorost); break;
      	case 51: wb_Timer1 = setInterval("random_sub()", Skorost); break;
      	case 52: wb_Timer1 = setInterval("random_add_sub()", Skorost); break;
      }
}

function TimerStop() {
	clearInterval(wb_Timer1);
}


function start(){
	switch (Button_start.value){
		case "Старт": 
			Editbox_otvet.value = "";
			Editbox_ekran.value = "";
			Uroven = parseInt(Combobox_level.value);
			Operation = parseInt(Combobox_operation.value);
			Skorost = parseInt(Skorost_tablo.value*1000);	
			Uroven_Operation = Uroven*10 + Operation;
			KolSlog = parseInt(KolSlog_tablo.value);
			KolCifr = parseInt(KolCifr_tablo.value);	
			schotchik = 0;
			Button_start.value = "Отмена";
			// POSSIBLE_CHECKED_CONST = possible_checked(Uroven,Operation);
			chislo = 0;
			cifr = [];
			chislo_plus = [];

			// if (Uroven_Operation == 31 || Uroven_Operation == 41) {
			// 	for (i = 0; i <= KolCifr ; i++) {
			// 		var t =  possible_checked(Uroven,Operation);
			// 		possible_checked_var[i] = t.slice();
			// 	}
			// }	
			// else {
				for (i = 0; i < KolCifr ; i++) {
					var t =  possible_checked(Uroven,Operation);
					possible_checked_var[i] = t.slice();
				}
			// }	
			switch (parseInt(Uroven_Operation)) {
				case 10: {
					znak = 0;
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(4);
						chislo += cifr[i]*power10(i);
					}
					var i = KolCifr - 1;
					cifr[i] = 1 + randomInteger(3);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_simple_add()", Skorost);
				} 
				break;

				case 11: {
					// znak = 1;
					chislo = 0;
					var t = whatchecked(1);
					exclude(0,t);
					for (var i = 0; i < KolCifr; i++){
						cifr[i] = t[randomInteger(t.length)]
						chislo += cifr[i]*power10(i);
					}
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_simple_sub()", Skorost);
				}
				break;

				case 12: {
					chislo = 0;
					var t = whatchecked(1);
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = t[randomInteger(t.length)]
						chislo += cifr[i]*power10(i);
					}
					exclude(0,t);
					i = KolCifr - 1;
					cifr[i] = t[randomInteger(t.length)]
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_simple_add_sub()", Skorost);
				} 
				break;

				case 20: {
					znak = 0;
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(5);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr - 1;
					cifr[i] = 2 + randomInteger(3);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_brother_add()", Skorost);
				} 
				break;

				case 21: {
					chislo = 0;
					for (var i = 0; i < KolCifr; i++){
						cifr[i] = 5+randomInteger(5);
						chislo += cifr[i]*power10(i);
					}
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_brother_sub()", Skorost);
				}
				break;

				case 22: {
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr - 1;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_brother_add_sub()", Skorost);
				} 
				break;

				case 30: {
					znak = 0;
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr - 1;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_friend_add()", Skorost);
				} 
				break;

				case 31: {
					znak = 1;
					chislo = 0;
					for (var i = 0; i < KolCifr; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_friend_sub()", Skorost);
				} 
				break;

				case 32: {
					znak = 0;
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr - 1;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_friend_add_sub()", Skorost);
				} 
				break;

				case 40: {
					znak = 0;
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr - 1;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_combo_add()", Skorost);
				} 
				break;

				case 41: {
					znak = 1;
					chislo = 0;
					for (var i = 0; i < KolCifr; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_combo_sub()", Skorost);
				} 
				break;

				case 42: {
					znak = 0;
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr - 1;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_combo_add_sub()", Skorost);
				} 
				break;
				case 50: {
					znak = 0;
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr - 1;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_random_add()", Skorost);
				} 
				break;

				case 51: {
					znak = 1;
					chislo = 0;
					for (var i = 0; i < KolCifr; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_random_sub()", Skorost);
				} 
				break;

				case 52: {
					znak = 0;
					chislo = 0;
					for (var i = 0; i < KolCifr-1; i++){
						cifr[i] = randomInteger(10);
						chislo += cifr[i]*power10(i);
					}
					i = KolCifr - 1;
					cifr[i] = 2 + randomInteger(8);
					chislo += cifr[i]*power10(i);
					soundClick(2);
					Editbox_ekran.value = chislo;
					wb_Timer1 = setInterval("calculate_random_add_sub()", Skorost);
				} 
				break;
			}
			soundClick(2);
					Editbox_ekran.value = chislo;
			TextArea1.value = chislo;
			chislo = parseInt(chislo);
		break;
		case "Отмена":
			Editbox_ekran.value = "";
			Button_start.value = "Старт";
			TimerStop();
		break;
		case "Ответ":
			Button_start.value = "Старт";
 			// soundClick(2);
					Editbox_ekran.value = chislo;
 			vip++;
 			Editbox_vip.value = vip;
 			if (parseInt(Editbox_otvet.value) == parseInt(Editbox_ekran.value)){
 				soundClick(3);
 				Editbox_otvet.value = "Правильно";
 				prav++;
 				Editbox_prav.value = prav;
 			}
 			else{
 				soundClick(4);
 				Editbox_otvet.style.size = 20;
 				Editbox_otvet.value = "Неправильно";
 			}
 		break;
	}	
}

function calculate_simple_add() {
	var max_chislo = 0, l = whatchecked(1).length-1; 
	for (var i = 0; i < KolCifr; i++){
		max_chislo += whatchecked(1)[l]*power10(i); 
	}
	
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (chislo == max_chislo || schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][znak][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
						p = possible_checked_var[i][znak][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
			
		for (var i = 0; i < KolCifr; i++) {
			cifr[i] += parseInt(chislo_plus[i]);
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		chislo += chislo_plus_all;
		
		soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
		TextArea1.value += "+" + chislo_plus_all ;
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	// Editbox1.value = possible_checked_var[0][0][0];
	// Editbox2.value = possible_checked_var[0][0][1];
	// Editbox3.value = possible_checked_var[0][0][2];
	// Editbox4.value = possible_checked_var[0][0][3];
	// Editbox5.value = possible_checked_var[0][0][4];
	// Editbox6.value = possible_checked_var[0][0][5];
	// Editbox7.value = possible_checked_var[0][0][6];
	// Editbox8.value = possible_checked_var[0][0][7];
	// Editbox9.value = possible_checked_var[0][0][8];
	// Editbox10.value = possible_checked_var[0][0][9];
	// Editbox11.value = possible_checked_var[0][1][0];
	// Editbox12.value = possible_checked_var[0][1][1];
	// Editbox13.value = possible_checked_var[0][1][2];
	// Editbox14.value = possible_checked_var[0][1][3];
	// Editbox15.value = possible_checked_var[0][1][4];
	// Editbox16.value = possible_checked_var[0][1][5];
	// Editbox17.value = possible_checked_var[0][1][6];
	// Editbox18.value = possible_checked_var[0][1][7];
	// Editbox19.value = possible_checked_var[0][1][8];
	// Editbox20.value = possible_checked_var[0][1][9];

	// Editbox21.value = possible_checked_var[1][0][0];
	// Editbox22.value = possible_checked_var[1][0][1];
	// Editbox23.value = possible_checked_var[1][0][2];
	// Editbox24.value = possible_checked_var[1][0][3];
	// Editbox25.value = possible_checked_var[1][0][4];
	// Editbox26.value = possible_checked_var[1][0][5];
	// Editbox27.value = possible_checked_var[1][0][6];
	// Editbox28.value = possible_checked_var[1][0][7];
	// Editbox29.value = possible_checked_var[1][0][8];
	// Editbox30.value = possible_checked_var[1][0][9];
	// Editbox31.value = possible_checked_var[1][1][0];
	// Editbox32.value = possible_checked_var[1][1][1];
	// Editbox33.value = possible_checked_var[1][1][2];
	// Editbox34.value = possible_checked_var[1][1][3];
	// Editbox35.value = possible_checked_var[1][1][4];
	// Editbox36.value = possible_checked_var[1][1][5];
	// Editbox37.value = possible_checked_var[1][1][6];
	// Editbox38.value = possible_checked_var[1][1][7];
	// Editbox39.value = possible_checked_var[1][1][8];
	// Editbox40.value = possible_checked_var[1][1][9];

	}
}

function calculate_simple_sub() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (chislo == 0 || schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][1][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][1][cifr[i]] = POSSIBLE_CHECKED_CONST[1][cifr[i]].slice();
						p = possible_checked_var[i][1][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
			
		for (var i = 0; i < KolCifr; i++) {
			cifr[i] -= parseInt(chislo_plus[i]);
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		chislo -= chislo_plus_all;
		if (chislo == 0) {
			Button_start.value = "Ответ";
			Editbox_ekran.value = "=";
			TimerStop();
			
		}
		else{
			soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
			TextArea1.value += "-" + chislo_plus_all ;
			chislo = parseInt(chislo);
			chislo_plus_all = parseInt(chislo_plus_all);
		}
	}
}

function calculate_simple_add_sub() {
	var max_chislo_4 = 0, l = whatchecked(1).length-1; 
	if (l == 4){
		for (var i = 0; i < KolCifr; i++){
		max_chislo_4 += whatchecked(1)[l]*power10(i); 
	}
	}
	
	var max_chislo = power10(KolCifr) - 1;
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		var vspom_chislo = 0;
		for (var i = 0; i < KolCifr; i++){
			vspom_chislo += 5*power10(i);
		}
		
		switch (chislo){
			case 0: znak = 0; break;
			case vspom_chislo: znak = 0; break;
			case max_chislo: znak = 1; break;
			case max_chislo_4: 
				if ( l == 4 ) znak = 1; else znak = randomInteger(2); break;
			default: znak = randomInteger(2);
		}
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][znak][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
						p = possible_checked_var[i][znak][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			if (znak == 0) 	cifr[i] += parseInt(chislo_plus[i]);
			else cifr[i] -= parseInt(chislo_plus[i]);
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		if (znak == 0) {
			chislo += chislo_plus_all;
			// <audio src="snd_2.wav" autoplay></audio>;
			soundClick(2);
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all ;
		}
		else {
			chislo -= chislo_plus_all;
			
			soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
			TextArea1.value += "-" + chislo_plus_all ;
		}
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	
	}
}

function calculate_brother_add() {
	var max_chislo = power10(KolCifr)-1;
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		var vspom_chislo1 = 0, vspom_chislo2 = 0;
		for (var i = 0; i < KolCifr; i++){
			vspom_chislo1 += 5*power10(i);
			vspom_chislo2 += 7*power10(i);
		}
		if (chislo >= vspom_chislo2) znak = 1;
		else if (chislo < vspom_chislo1) znak = 0;
		else znak = randomInteger(2);
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][znak][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
						p = possible_checked_var[i][znak][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			if (znak == 0) 	cifr[i] += parseInt(chislo_plus[i]);
			else cifr[i] -= parseInt(chislo_plus[i]);
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		if (znak == 0) {
			chislo += chislo_plus_all;
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all ;
		}
		else {
			chislo -= chislo_plus_all;
			soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
			TextArea1.value += "-" + chislo_plus_all ;
		}
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	
	}
}

function calculate_brother_sub() {
	var max_chislo = power10(KolCifr)-1;
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		var vspom_chislo1 = 0;
		for (var i = 0; i < KolCifr; i++){
			vspom_chislo1 += 5*power10(i);		
		}
		if (chislo < vspom_chislo1) znak = 0;
		else znak = 1;
		// var vspom_chislo1 = false;
		// var l = 0;
		// do {
		// 	if (cifr[l++]>=5) vspom_chislo1 = true;
		// } while (vspom_chislo1 == false || l < KolCifr - 1)
		// if (vspom_chislo1 == false) znak = 0;
		// else znak = randomInteger(2);
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][znak][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
						p = possible_checked_var[i][znak][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
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
			if (znak == 0) 	cifr[i] += parseInt(chislo_plus[i]);
			else cifr[i] -= parseInt(chislo_plus[i]);
		}

		if (znak == 0) {
			chislo += chislo_plus_all;
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all ;
		}
		else {
			chislo -= chislo_plus_all;
			soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
			TextArea1.value += "-" + chislo_plus_all ;
		}
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	

	}
}

function calculate_brother_add_sub() {
	var max_chislo = power10(KolCifr)-1;
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		var vspom_chislo1 = 0, vspom_chislo2 = 0;
		for (var i = 0; i < KolCifr; i++){
			vspom_chislo1 += 5*power10(i);
			vspom_chislo2 += 7*power10(i);
		}
		if (chislo >= vspom_chislo2) znak = 1;
		else if (chislo < vspom_chislo1) znak = 0;
		else znak = randomInteger(2);
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][znak][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
						p = possible_checked_var[i][znak][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			if (znak == 0) 	cifr[i] += parseInt(chislo_plus[i]);
			else cifr[i] -= parseInt(chislo_plus[i]);
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		if (znak == 0) {
			chislo += chislo_plus_all;
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all ;
		}
		else {
			chislo -= chislo_plus_all;
			soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
			TextArea1.value += "-" + chislo_plus_all ;
		}
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	

	}	
}

function calculate_friend_add() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][znak][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
						p = possible_checked_var[i][znak][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

			chislo += chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all ;
		
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	
	}
}

function calculate_friend_sub() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	var razmer = 0;
	razmer = parseInt((chislo.toString()).length);
	
	if (razmer == 1 || schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		do { 
			chislo_plus_all = 0;
			chislo_plus = undefined;
			chislo_plus = [];
			
			
			for (var i = 0; i < razmer - 1; i++) {
				var p = possible_checked_var[i][1][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][1][cifr[i]] = POSSIBLE_CHECKED_CONST[1][cifr[i]].slice();
						p = possible_checked_var[i][1][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);
			}		
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < razmer - 1; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		chislo -= chislo_plus_all;
		razmer = parseInt((chislo.toString()).length);
		cifr.length = 0;	
		for (var i = 0; i < razmer; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
 		cifr.length = razmer - 1;	
		soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
		TextArea1.value += "-" + chislo_plus_all  ;
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);	
	

	}
}

function calculate_friend_add_sub() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	var razmer = 0;
	razmer = parseInt((chislo.toString()).length);
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		if (razmer == 1) znak = 0;
		else znak =  randomInteger(2) /*randomInteger(8) % 2*/;
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			if (znak == 0){
				for (var i = 0; i < KolCifr; i++) {
					var p = possible_checked_var[i][znak][cifr[i]];
						if (p.length == 0 || p[0] == 0) {
							possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
							p = possible_checked_var[i][znak][cifr[i]];
						}
						chislo_plus[i] = p[randomInteger(p.length)];
						chislo_plus_all += chislo_plus[i]*power10(i);			
				}
			}
			else{
				if (razmer > KolCifr){
					for (var i = 0; i < KolCifr; i++) {
						var p = possible_checked_var[i][znak][cifr[i]];
							if (p.length == 0 || p[0] == 0) {
								possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
								p = possible_checked_var[i][znak][cifr[i]];
							}
							chislo_plus[i] = p[randomInteger(p.length)];
							chislo_plus_all += chislo_plus[i]*power10(i);			
					}
				}
				else{
					for (var i = 0; i < razmer - 1; i++) {
						var p = possible_checked_var[i][znak][cifr[i]];
							if (p.length == 0 || p[0] == 0) {
								possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
								p = possible_checked_var[i][znak][cifr[i]];
							}
							chislo_plus[i] = p[randomInteger(p.length)];
							chislo_plus_all += chislo_plus[i]*power10(i);			
					}
				}	
			}	
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}
		// razmer = parseInt((chislo.toString()).length);	
		
 		// cifr.length = razmer - 1;
		if (znak == 0) {
			chislo += chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all  ;
		}
		else {
			chislo -= chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
			TextArea1.value += "-" + chislo_plus_all  ;
		}

		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	
	

	}
}
	
function calculate_combo_add() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][znak][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
						p = possible_checked_var[i][znak][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

			chislo += chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all ;
		
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);

	}
}

function calculate_combo_sub() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation).slice();
	
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	var razmer = 0;
	razmer = parseInt((chislo.toString()).length);
	
	if (razmer == 1 || schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		do { 
			chislo_plus_all = 0;
			chislo_plus = undefined;
			chislo_plus = [];
			
			
			for (var i = 0; i < razmer - 1; i++) {
				var p = possible_checked_var[i][1][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][1][cifr[i]] = POSSIBLE_CHECKED_CONST[1][cifr[i]].slice();
						p = possible_checked_var[i][1][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);
			}		
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < razmer - 1; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		chislo -= chislo_plus_all;
		razmer = parseInt((chislo.toString()).length);	
		cifr.length = 0;
		for (var i = 0; i < razmer; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
 		cifr.length = razmer - 1;	
		soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
		TextArea1.value += "-" + chislo_plus_all  ;
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);	
	
	}
}

function calculate_combo_add_sub() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	var razmer = 0;
	razmer = parseInt((chislo.toString()).length);
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		if (razmer == 1) znak = 0;
		else znak =  randomInteger(2) /*randomInteger(8) % 2*/;
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			if (znak == 0){
				for (var i = 0; i < KolCifr; i++) {
					var p = possible_checked_var[i][znak][cifr[i]];
						if (p.length == 0 || p[0] == 0) {
							possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
							p = possible_checked_var[i][znak][cifr[i]];
						}
						chislo_plus[i] = p[randomInteger(p.length)];
						chislo_plus_all += chislo_plus[i]*power10(i);			
				}
			}
			else{
				if (razmer > KolCifr){
					for (var i = 0; i < KolCifr; i++) {
						var p = possible_checked_var[i][znak][cifr[i]];
							if (p.length == 0 || p[0] == 0) {
								possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
								p = possible_checked_var[i][znak][cifr[i]];
							}
							chislo_plus[i] = p[randomInteger(p.length)];
							chislo_plus_all += chislo_plus[i]*power10(i);			
					}
				}
				else{
					for (var i = 0; i < razmer - 1; i++) {
						var p = possible_checked_var[i][znak][cifr[i]];
							if (p.length == 0 || p[0] == 0) {
								possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
								p = possible_checked_var[i][znak][cifr[i]];
							}
							chislo_plus[i] = p[randomInteger(p.length)];
							chislo_plus_all += chislo_plus[i]*power10(i);			
					}
				}	
			}	
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}
		// razmer = parseInt((chislo.toString()).length);	
		
 		// cifr.length = razmer - 1;
		if (znak == 0) {
			chislo += chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all  ;
		}
		else {
			chislo -= chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
			TextArea1.value += "-" + chislo_plus_all  ;
		}

		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	
	}
}

function calculate_random_add() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			for (var i = 0; i < KolCifr; i++) {
				var p = possible_checked_var[i][znak][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
						p = possible_checked_var[i][znak][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);			
			}
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

			chislo += chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all ;
		
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	
	}
}

function calculate_random_sub() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	var razmer = 0;
	razmer = parseInt((chislo.toString()).length);
	
	if (razmer == 1 || schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		do { 
			chislo_plus_all = 0;
			chislo_plus = undefined;
			chislo_plus = [];
			
			
			for (var i = 0; i < razmer - 1; i++) {
				var p = possible_checked_var[i][1][cifr[i]];
					if (p.length == 0 || p[0] == 0) {
						possible_checked_var[i][1][cifr[i]] = POSSIBLE_CHECKED_CONST[1][cifr[i]].slice();
						p = possible_checked_var[i][1][cifr[i]];
					}
					chislo_plus[i] = p[randomInteger(p.length)];
					chislo_plus_all += chislo_plus[i]*power10(i);
			}		
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < razmer - 1; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		chislo -= chislo_plus_all;
		razmer = parseInt((chislo.toString()).length);	
		cifr.length = 0;
		for (var i = 0; i < razmer; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
 		cifr.length = razmer - 1;	
		soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
		TextArea1.value += "-" + chislo_plus_all  ;
		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);	
	
	}
}

function calculate_random_add_sub() {
	var POSSIBLE_CHECKED_CONST =  possible_checked(Uroven,Operation);
	
	chislo_plus = []; chislo_plus_all = 0;
	schotchik++;
	
	var razmer = 0;
	razmer = parseInt((chislo.toString()).length);
	if (schotchik == KolSlog) {
		TimerStop();
		Button_start.value = "Ответ";
		Editbox_ekran.value = "=";
	}
	else {
		if (razmer == 1) znak = 0;
		else znak =  randomInteger(2);
		do {
			chislo_plus_all = 0;
			chislo_plus = [];
			if (znak == 0){
				for (var i = 0; i < KolCifr; i++) {
					var p = possible_checked_var[i][znak][cifr[i]];
						if (p.length == 0 || p[0] == 0) {
							possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
							p = possible_checked_var[i][znak][cifr[i]];
						}
						chislo_plus[i] = p[randomInteger(p.length)];
						chislo_plus_all += chislo_plus[i]*power10(i);			
				}
			}
			else{
				if (razmer > KolCifr){
					for (var i = 0; i < KolCifr; i++) {
						var p = possible_checked_var[i][znak][cifr[i]];
							if (p.length == 0 || p[0] == 0) {
								possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
								p = possible_checked_var[i][znak][cifr[i]];
							}
							chislo_plus[i] = p[randomInteger(p.length)];
							chislo_plus_all += chislo_plus[i]*power10(i);			
					}
				}
				else{
					for (var i = 0; i < razmer - 1; i++) {
						var p = possible_checked_var[i][znak][cifr[i]];
							if (p.length == 0 || p[0] == 0) {
								possible_checked_var[i][znak][cifr[i]] = POSSIBLE_CHECKED_CONST[znak][cifr[i]].slice();
								p = possible_checked_var[i][znak][cifr[i]];
							}
							chislo_plus[i] = p[randomInteger(p.length)];
							chislo_plus_all += chislo_plus[i]*power10(i);			
					}
				}	
			}	
		} while (chislo_plus_all == 0);
		
		for (var i = 0; i < KolCifr; i++) {
			for (var k = 0; k <= 9; k++){
			 	exclude(chislo_plus[i],possible_checked_var[i][0][k]);
			 	exclude(chislo_plus[i],possible_checked_var[i][1][k]);
			}	
		}

		if (znak == 0) {
			chislo += chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "+" + chislo_plus_all;
			TextArea1.value += "+" + chislo_plus_all  ;
		}
		else {
			chislo -= chislo_plus_all;
			cifr.length = 0;
			for (var i = 0; i < KolCifr; i++) {
 				cifr[i] = parseInt((chislo % power10(i + 1))/power10(i));
 			}
			soundClick(2);
			Editbox_ekran.value = "-" + chislo_plus_all;
			TextArea1.value += "-" + chislo_plus_all  ;
		}

		chislo = parseInt(chislo);
		chislo_plus_all = parseInt(chislo_plus_all);
	
	}
}










