//Instantiate Objects
//Scores has attributes which represent the given team's score against any type
var scores = new Object();
//Immune has attributes which represent the given team's number of immunities against certain types
var immune = new Object();
//Placeholder for the previous selection, will have an attribute for each select box handler
var prev = new Object();

//Attributes of the scores object
scores.nor = 0;
scores.fir = 0;
scores.wat = 0;
scores.gra = 0;
scores.ele = 0;
scores.ice = 0;
scores.fgh = 0;
scores.poi = 0;
scores.gro = 0;
scores.fly = 0;
scores.psy = 0;
scores.bug = 0;
scores.rck = 0;
scores.gho = 0;
scores.dra = 0;
scores.drk = 0;
scores.ste = 0;
scores.fai = 0;
//Attributes of the immune object
immune.nor = 0;
immune.ele = 0;
immune.fgh = 0;
immune.poi = 0;
immune.gro = 0;
immune.psy = 0;
immune.gho = 0;
immune.dra = 0;
//Attribues of the prev Object
prev.t1 = "null";
prev.t2 = "null";
prev.t3 = "null";
prev.t4 = "null";
prev.t5 = "null";
prev.t6 = "null";
prev.t7 = "null";
prev.t8 = "null";
prev.t9 = "null";
prev.t10 = "null";
prev.t11 = "null";
prev.t12 = "null";

//Getter functions for the type select boxes
function getType1(){
	//Reference the form
	var theForm = document.forms["types"];
	//Reference the correct select box from the form
	var formType = theForm.elements["type1"];
	//Get the selected value
	var retType = formType.value;
	//Return the selected value
	return retType;
}
//The above method gets repeated for all 12 select boxes
function getType2(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type2"];
	var retType = formType.value;
	return retType;
}

function getType3(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type3"];
	var retType = formType.value;
	return retType;
}

function getType4(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type4"];
	var retType = formType.value;
	return retType;
}

function getType5(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type5"];
	var retType = formType.value;
	return retType;
}

function getType6(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type6"];
	var retType = formType.value;
	return retType;
}

function getType7(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type7"];
	var retType = formType.value;
	return retType;
}

function getType8(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type8"];
	var retType = formType.value;
	return retType;
}

function getType9(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type9"];
	var retType = formType.value;
	return retType;
}

function getType10(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type10"];
	var retType = formType.value;
	return retType;
}

function getType11(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type11"];
	var retType = formType.value;
	return retType;
}

function getType12(){
	var theForm = document.forms["types"];
	var formType = theForm.elements["type12"];
	var retType = formType.value;
	return retType;
}

//Increment and decrement functions for the score of each type
function norInc(){
	scores.nor = scores.nor + 1;
}

function norDec(){
	scores.nor = scores.nor - 1;
}

function watInc(){
	scores.wat = scores.wat + 1;
}

function watDec(){
	scores.wat = scores.wat - 1;
}

function firInc(){
	scores.fir = scores.fir + 1;
}

function firDec(){
	scores.fir = scores.fir - 1;
}

function graInc(){
	scores.gra = scores.gra + 1;
}

function graDec(){
	scores.gra = scores.gra - 1;
}

function eleInc(){
	scores.ele = scores.ele + 1;
}

function eleDec(){
	scores.ele = scores.ele - 1;
}

function iceInc(){
	scores.ice = scores.ice + 1;
}

function iceDec(){
	scores.ice = scores.ice - 1;
}

function fghInc(){
	scores.fgh = scores.fgh + 1;
}

function fghDec(){
	scores.fgh = scores.fgh - 1;
}

function poiInc(){
	scores.poi = scores.poi + 1;
}

function poiDec(){
	scores.poi = scores.poi - 1;
}

function groInc(){
	scores.gro = scores.gro + 1;
}

function groDec(){
	scores.gro = scores.gro - 1;
}

function flyInc(){
	scores.fly = scores.fly + 1;
}

function flyDec(){
	scores.fly = scores.fly - 1;
}

function psyInc(){
	scores.psy = scores.psy + 1;
}

function psyDec(){
	scores.psy = scores.psy - 1;
}

function bugInc(){
	scores.bug = scores.bug + 1;
}

function bugDec(){
	scores.bug = scores.bug - 1;
}

function rckInc(){
	scores.rck = scores.rck + 1;
}

function rckDec(){
	scores.rck = scores.rck - 1;
}

function ghoInc(){
	scores.gho = scores.gho + 1;
}

function ghoDec(){
	scores.gho = scores.gho - 1;
}

function draInc(){
	scores.dra = scores.dra + 1;
}

function draDec(){
	scores.dra = scores.dra - 1;
}

function drkInc(){
	scores.drk = scores.drk + 1;
}

function drkDec(){
	scores.drk = scores.drk - 1;
}

function steInc(){
	scores.ste = scores.ste + 1;
}

function steDec(){
	scores.ste = scores.ste - 1;
}

function faiInc(){
	scores.fai = scores.fai + 1;
}

function faiDec(){
	scores.fai = scores.fai - 1;
}

function norImmInc(){
	immune.nor = immune.nor + 1;
}

function norImmDec(){
	immune.nor = immune.nor - 1;
}

function eleImmInc(){
	immune.ele = immune.ele + 1;
}

function eleImmDec(){
	immune.ele = immune.ele - 1;
}

function fghImmInc(){
	immune.fgh = immune.fgh + 1;
}

function fghImmDec(){
	immune.fgh = immune.fgh - 1;
}

function poiImmInc(){
	immune.poi = immune.poi + 1;
}

function poiImmDec(){
	immune.poi = immune.poi - 1;
}

function groImmInc(){
	immune.gro = immune.gro + 1;
}

function groImmDec(){
	immune.gro = immune.gro - 1;
}

function psyImmInc(){
	immune.psy = immune.psy + 1;
}

function psyImmDec(){
	immune.psy = immune.psy - 1;
}

function ghoImmInc(){
	immune.gho = immune.gho + 1;
}

function ghoImmDec(){
	immune.gho = immune.gho - 1;
}

function draImmInc(){
	immune.dra = immune.dra + 1;
}

function draImmDec(){
	immune.dra = immune.dra - 1;
}

//Function takes all of the scores, ties them to the correct element in the HTML, and draws them
//This function is called at the end of every onchange handler so the score updates every time a box is changed
function drawScores(){

	var divObjnor = document.getElementById( 'norScore' );
	divObjnor.innerHTML = scores.nor + "  ";

	var divObjfir = document.getElementById( 'firScore' );
	divObjfir.innerHTML = scores.fir + "  ";

	var divObjwat = document.getElementById( 'watScore' );
	divObjwat.innerHTML = scores.wat + "  ";

	var divObjgra = document.getElementById( 'graScore' );
	divObjgra.innerHTML = scores.gra + "  ";

	var divObjele = document.getElementById( 'eleScore' );
	divObjele.innerHTML = scores.ele + "  ";

	var divObjice = document.getElementById( 'iceScore' );
	divObjice.innerHTML = scores.ice + "  ";

	var divObjfgh = document.getElementById( 'fghScore' );
	divObjfgh.innerHTML = scores.fgh + "  ";

	var divObjpoi = document.getElementById( 'poiScore' );
	divObjpoi.innerHTML = scores.poi + "  ";

	var divObjfly = document.getElementById( 'flyScore' );
	divObjfly.innerHTML = scores.fly + "  ";

	var divObjgro = document.getElementById( 'groScore' );
	divObjgro.innerHTML = scores.gro + "  ";

	var divObjpsy = document.getElementById( 'psyScore' );
	divObjpsy.innerHTML = scores.psy + "  ";

	var divObjbug = document.getElementById( 'bugScore' );
	divObjbug.innerHTML = scores.bug + "  ";

	var divObjrck = document.getElementById( 'rckScore' );
	divObjrck.innerHTML = scores.rck + "  ";

	var divObjgho = document.getElementById( 'ghoScore' );
	divObjgho.innerHTML = scores.gho + "  ";

	var divObjdra = document.getElementById( 'draScore' );
	divObjdra.innerHTML = scores.dra + "  ";

	var divObjste = document.getElementById( 'steScore' );
	divObjste.innerHTML = scores.ste + "  ";

	var divObjdrk = document.getElementById( 'drkScore' );
	divObjdrk.innerHTML = scores.drk + "  ";

	var divObjfai = document.getElementById( 'faiScore' );
	divObjfai.innerHTML = scores.fai + "  ";

	var divObjImmNor = document.getElementById( 'immuNor' );
	divObjImmNor.innerHTML = immune.nor + " immune to Normal";

	var divObjImmEle = document.getElementById( 'immuEle' );
	divObjImmEle.innerHTML = immune.ele + " immune to Electric";

	var divObjImmFgh = document.getElementById( 'immuFgh' );
	divObjImmFgh.innerHTML = immune.fgh + " immune to Fighting";

	var divObjImmPoi = document.getElementById( 'immuPoi' );
	divObjImmPoi.innerHTML = immune.poi + " immune to Poison";

	var divObjImmGro = document.getElementById( 'immuGro' );
	divObjImmGro.innerHTML = immune.gro + " immune to Ground";

	var divObjImmPsy = document.getElementById( 'immuPsy' );
	divObjImmPsy.innerHTML = immune.psy + " immune to Psychic";

	var divObjImmGho = document.getElementById( 'immuGho' );
	divObjImmGho.innerHTML = immune.gho + " immune to Ghost";

	var divObjImmDra = document.getElementById( 'immuDra' );
	divObjImmDra.innerHTML = immune.dra + " immune to Dragon";
}

//This is the onchange handler for box1.  This function is repeated for the other boxes, the only thing that changes is the index of each reference.
function box1(){
	//The first switch evaluates the last selected type.  If a select box changes its selection, the effects of the previous selection must 
	//be undone before the effects of the new selection are applied.  This switch handles this.  All of the attributes of the prev object start
	//as null by default, so this switch does noting the first time a select box is used or is otherwise switched from none to a type.
	var holder = prev.t1;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	//This switch reads the current type selection and applies the appropriate changes
	var test = getType1();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	//Set the previous type to the current selection for the next time this function is called
	prev.t1 = getType1();
	//Call the drawScores function so the scores on screen update
	drawScores();
}
//The above function is now repeated for boxes 2 through 12

function box2(){
	var holder = prev.t2;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType2();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t2 = getType2();
	drawScores();
}

function box3(){
	var holder = prev.t3;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType3();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t3 = getType3();
	drawScores();
}

function box4(){
	var holder = prev.t4;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType4();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t4 = getType4();
	drawScores();
}

function box5(){
	var holder = prev.t5;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType5();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t5 = getType5();
	drawScores();
}

function box6(){
	var holder = prev.t6;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType6();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t6 = getType6();
	drawScores();
}

function box7(){
	var holder = prev.t7;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType7();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t7 = getType7();
	drawScores();
}

function box8(){
	var holder = prev.t8;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType8();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t8 = getType8();
	drawScores();
}

function box9(){
	var holder = prev.t9;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType9();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t9 = getType9();
	drawScores();
}

function box10(){
	var holder = prev.t10;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType10();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t10 = getType10();
	drawScores();
}

function box11(){
	var holder = prev.t11;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType11();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t11 = getType11();
	drawScores();
}

function box12(){
	var holder = prev.t12;
	switch( holder ){
		case( "Null" ):
			break;
		case( "Normal" ):
			fghInc();
			ghoImmDec();
			break;
		case( "Water" ):
			firDec();
			watDec();
			graInc();
			eleInc();
			iceDec();
			steDec();
			break;
		case( "Fire" ):
			firDec();
			watInc();
			graDec();
			iceDec();
			groInc();
			bugDec();
			rckInc();
			steDec();
			faiDec();
			break;
		case( "Grass" ):
			firInc();
			watDec();
			graDec();
			eleDec();
			iceInc();
			poiInc();
			groDec();
			flyInc();
			bugInc();
			break;
		case( "Electric" ):
			eleDec();
			groInc();
			flyDec();
			steDec();
			break;
		case( "Ice" ):
			firInc();
			iceDec();
			fghInc();
			rckInc();
			steInc();
			break;
		case( "Fighting" ):
			flyInc();
			psyInc();
			bugDec();
			rckDec();
			drkDec();
			faiInc();
			break;
		case( "Poison" ):
			graDec();
			fghDec();
			poiDec();
			groInc();
			psyInc();
			bugDec();
			faiDec();
			break;
		case( "Flying" ):
			graDec();
			eleInc();
			fghDec();
			groImmDec();
			bugDec();
			rckInc();
			break;
		case( "Ground" ):
			watInc();
			graInc();
			eleImmDec();
			iceInc();
			poiDec();
			rckDec();
			break;  
		case( "Psychic" ):
			fghDec();
			psyDec();
			bugInc();
			ghoInc();
			drkInc();
			break;
		case( "Bug" ):
			firInc();
			graDec();
			fghDec();
			groDec();
			flyInc();
			rckInc();
			break;
		case( "Rock" ):
			norDec();
			firDec();
			watInc();
			graInc();
			fghInc();
			poiDec();
			groInc();
			flyDec();
			steInc();
			break;
		case( "Ghost" ):
			norImmDec();
			fghImmDec();
			poiDec();
			bugDec();
			ghoInc();
			drkInc();
			break;
		case( "Dragon" ):
			firDec();
			watDec();
			graDec();
			eleDec();
			iceInc();
			drkInc();
			faiInc();
			break;
		case( "Steel" ):
			norDec();
			firInc();
			graDec();
			iceDec();
			fghInc();
			poiImmDec();
			groInc();
			flyDec();
			psyDec();
			bugDec();
			rckDec();
			draDec();
			steDec();
			faiDec();
			break;
		case( "Dark" ):
			fghInc();
			psyImmDec();
			bugInc();
			ghoDec();
			drkDec();
			faiInc();
			break;
		case( "Fairy" ):
			fghDec();
			poiInc();
			bugDec();
			draImmDec();
			drkDec();
			steInc();
			break;
	}
	var test = getType12();
	 switch ( test ) {
		case( "Null" ):
			break;
		case( "Normal" ):
			fghDec();
			ghoImmInc();
			break;
		case( "Water" ):
			firInc();
			watInc();
			graDec();
			eleDec();
			iceInc();
			steInc();
			break;
		case( "Fire" ):
			firInc();
			watDec();
			graInc();
			iceInc();
			groDec();
			bugInc();
			rckDec();
			steInc();
			faiInc();
			break;
		case( "Grass" ):
			firDec();
			watInc();
			graInc();
			eleInc();
			iceDec();
			poiDec();
			groInc();
			flyDec();
			bugDec();
			break;
		case( "Electric" ):
			eleInc();
			groDec();
			flyInc();
			steInc();
			break;
		case( "Ice" ):
			firDec();
			iceInc();
			fghDec();
			rckDec();
			steDec();
			break;
		case( "Fighting" ):
			flyDec();
			psyDec();
			bugInc();
			rckInc();
			drkInc();
			faiDec();
			break;
		case( "Poison" ):
			graInc();
			fghInc();
			poiInc();
			groDec();
			psyDec();
			bugInc();
			faiInc();
			break;
		case( "Flying" ):
			graInc();
			eleDec();
			fghInc();
			groImmInc();
			bugInc();
			rckDec();
			break;
		case( "Ground" ):
			watDec();
			graDec();
			eleImmInc();
			iceDec();
			poiInc();
			rckInc();
			break;  
		case( "Psychic" ):
			fghInc();
			psyInc();
			bugDec();
			ghoDec();
			drkDec();
			break;
		case( "Bug" ):
			firDec();
			graInc();
			fghInc();
			groInc();
			flyDec();
			rckDec();
			break;
		case( "Rock" ):
			norInc();
			firInc();
			watDec();
			graDec();
			fghDec();
			poiInc();
			groDec();
			flyInc();
			steDec();
			break;
		case( "Ghost" ):
			norImmInc();
			fghImmInc();
			poiInc();
			bugInc();
			ghoDec();
			drkDec();
			break;
		case( "Dragon" ):
			firInc();
			watInc();
			graInc();
			eleInc();
			iceDec();
			drkDec();
			faiDec();
			break;
		case( "Steel" ):
			norInc();
			firDec();
			graInc();
			iceInc();
			fghDec();
			poiImmInc();
			groDec();
			flyInc();
			psyInc();
			bugInc();
			rckInc();
			draInc();
			steInc();
			faiInc();
			break;
		case( "Dark" ):
			fghDec();
			psyImmInc();
			bugDec();
			ghoInc();
			drkInc();
			faiDec();
			break;
		case( "Fairy" ):
			fghInc();
			poiDec();
			bugInc();
			draImmInc();
			drkInc();
			steDec();
			break;
	}
	prev.t12 = getType12();
	drawScores();
}
