var input;

var bierAantal = 0;
var wijnAantal = 0;
var frisAantal = 0;

var bierTotaal = 0;
var wijnTotaal = 0;
var frisTotaal = 0;
var prijsTotaal = 0;

var prijsBier = 3.50;
var prijsWijn = 4.20;
var prijsFris = 2.20;

start();

//Dit is om de app te starten.
function start() {
	while(input !="stop"){
	input = prompt("Wilt u fris, bier, wijn of snacks?");

	if (input.toLowerCase().trim() == "bier") {
		bierAantal = bierAantal + parseInt(prompt("Hoeveel bier wilt u?"));
	}
	else if(input.toLowerCase().trim() == "wijn") {
		wijnAantal = wijnAantal + parseInt(prompt("Hoeveel wijn wilt u?"));
	}
	else if(input.toLowerCase().trim() == "fris") {
		frisAantal = frisAantal + parseInt(prompt("Hoeveel fris wilt u?"));
	}
	}
}

