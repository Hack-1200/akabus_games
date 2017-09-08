var canvas = document.getElementById("game");
var cw = window.innerWidth;
var ch = window.innerHeight;
if (cw < 880) cw = canvas.width = 880;
if (ch < 660) ch = canvas.height = 660;

function Scale(e,n) {
	e.scaleX = ch/n/e.image.width;
	e.scaleY = ch/n/e.image.height;
}

function Rand(m,n) {
	return Math.floor(Math.random()*(n-m+1)+m);
}

function Rang() {
	var C = prompt("How much?..");
	var changes = [];
	for (var i = 0; i < C; i++)
		changes[i] = prompt("What?");
	n = Math.random();
	for (var i = 1; i <= C; i++) 
		if (n < i/C && n >= (i-1)/C) {console.log(changes[i-1]);alert(changes[i-1]);
	}
}

function Fun(l,x,y) {
	var f = [0, 0, 0, 0];
	var exRandom = Rand(0,2);
	if (l === 0) {
		f[0] = 0;
		f[1] = Rand(-y+1,y-1);
	}

	if (l === 1) {
		f[0] = Rand(-y/3,y/3);
		if (exRandom === 1 && f[0] != 0)
			f[0] = 1/f[0];
		f[1] = Rand(-y/2,y/2);
	}

	if (l === 2) {

		f[0] = Rand(-y/5,y/5);

		if (exRandom === 1 && f[0] != 0) 
			f[0] = 1/f[0];

		f[1] = Rand(-y/3,y/3);

		if (f[0] < 0)
			f[2] = Rand(0,y/2); else
		if (f[0] > 0)
			f[2] = Rand(-y/2,0); else
		f[2] = Rand(-y/2,y/2);

	}

	if (l === 3) {
		f[0] = Rand(-y/3,y/3);
		f[1] = Rand(-y/3,y/3);
		f[2] = Rand(-y/3,y/3);
		f[3] = Rand(-y/2,y/2);
	}

	return f;
}

function Calc(x,l,fun,sn) {
	var y = 0;
	if (l < 2) {
		y = ch/2 - ( fun[0] * x + fun[1] ) * sn;
	} else

	if (l === 2) {
		y = ch/2 - ( fun[0] * Math.pow( -x , 2 ) + fun[1] * x + fun[2] ) * sn;
	} else

	if (l === 3) {
		y = ch/2 - ( fun[2] / ( fun[0] * x + fun[1] ) + fun[3] ) * sn;
	}

	return y;
}

function Decs(l,fun) {
	var decs = "y = ";
	if (l < 2) {
		if (fun[0] === 0 && fun[1] === 0 ) decs = decs + "0"; else
		if (fun[0] === -1) decs = decs + "–x"; else
		if (fun[0] === 1) decs = decs + "x"; else
		if (Math.abs(fun[0]) < 1 && fun[0] < 0) decs = decs + "–x/" + Math.abs(1/fun[0]); else
		if (Math.abs(fun[0]) < 1 && fun[0] != 0) decs = decs + "x/" + 1/fun[0]; else
		if (fun[0] < 0) decs = decs + "–" + Math.abs(fun[0]) + "x"; else
		if (fun[0] != 0) decs = decs + fun[0] + "x";

		if (fun[1] > 0 && fun[0] != 0) decs = decs + "+" + fun[1]; else
		if (fun[1] < 0) decs = decs + "–" + Math.abs(fun[1]); else
		if (fun[1] != 0) decs = decs + fun[1];
	}

	if (l === 2) {
		if (fun[0] === 0 && fun[1] === 0 && fun[2] === 0) decs = decs + "0"; else
		if (fun[0] === -1) decs = decs + "–x²"; else
		if (fun[0] === 1) decs = decs + "x²"; else
		if (Math.abs(fun[0]) < 1 && fun[0] < 0) decs = decs + "–x²/" + Math.abs(1/fun[0]); else
		if (Math.abs(fun[0]) < 1 && fun[0] != 0) decs = decs + "x²/" + 1/fun[0]; else
		if (fun[0] < 0) decs = decs + "–" + Math.abs(fun[0]) + "x²"; else
		if (fun[0] != 0) decs = decs + fun[0] + "x²";
		if (fun[1] === 1 && fun[0] === 0) decs = decs + "x"; else
		if (fun[1] === 1 && fun[0] != 0) decs = decs + "+x"; else
		if (fun[1] > 0 && fun[0] != 0) decs = decs + "+" + fun[1] + "x"; else
		if (fun[1] === -1) decs = decs + "–x"; else
		if (fun[1] < 0) decs = decs + "–" + Math.abs(fun[1]) + "x"; else
		if (fun[1] != 0) decs = decs + fun[1] + "x";
		if (fun[2] > 0 && (fun[1] != 0 || fun[0] != 0)) decs = decs + "+" + fun[2]; else
		if (fun[2] < 0) decs = decs + "–" + Math.abs(fun[2]); else
		if (fun[2] != 0) decs = decs + fun[2];
	}

	if (l === 3) {
		if ((fun[0] === 0 && fun[1] === 0 || fun[2] === 0) && fun[3] === 0) decs = decs + "0"; else
		if ((fun[0] != 0 || fun[1] != 0) && fun[2] != 0) {
		decs = decs + fun[2];
		decs = decs + "/(";
		if (fun[0] === -1) decs = decs + "–x"; else
		if (fun[0] === 1) decs = decs + "x"; else
		if (fun[0] < 0) decs = decs + "–" + Math.abs(fun[0]) + "x"; else
		if (fun[0] != 0) decs = decs + fun[0] + "x";
		if (fun[1] > 0 && fun[0] != 0) decs = decs + "+" + fun[1]; else
		if (fun[1] < 0) decs = decs + "–" + Math.abs(fun[1]); else
		if (fun[1] != 0) decs = decs + fun[1];
		decs = decs + ")";}
		if ((fun[0] === 0 && fun[1] === 0 || fun[2] === 0) && fun[3] != 0) decs = decs + fun[3]; else
		if (fun[3] > 0) decs = decs + "+" + fun[3]; else
		if (fun[3] < 0) decs = decs + "–" + Math.abs(fun[3]); else
		if (fun[3] != 0) decs = decs + fun[3];
	}

	return decs;
}
