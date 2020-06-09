var ashen = 1;

function selectoutputitem(item){
	showoutputitem();
}

function showoutputitem(){
	
	var item = document.getElementById("output"),
		selectedValue = item.options[item.selectedIndex].value,
		array=selectedValue.split(","),
		min=array[0],
		max=array[1],
		emipoints=array[2],
		amount=array[3],
		ashen=array[4];
	
	document.getElementById("item_min").value = (min/amount)/ashen;
	document.getElementById("item_max").value = (max/amount)/ashen;
	document.getElementById("item_emipoints").value = emipoints;
	
	document.getElementById("item_min_new").value = min;
	document.getElementById("item_max_new").value = max;
	document.getElementById("item_amount_new").value = amount;
	document.getElementById("item_ashen_new").value = ashen;
	document.getElementById("item_emipoints_new").value = emipoints;
}

function showdetails(){
	if(document.getElementById("table_details").style.visibility == 'hidden'){
		document.getElementById("table_details").style.visibility = 'visible';
	}else{
		document.getElementById("table_details").style.visibility = 'hidden';
	}
}

function additempre(){
	var lange = document.getElementById("output").options.length;
	var abfragetext = document.getElementById("selecteditem").options[0].text;
	var allowed = true;
	for( var i=0; i <= lange-1;i++){
		if(document.getElementById("output").options[i].text == abfragetext){
			allowed = false;
			alert("Das Item ist bereits im Fahrteninventar");
			alert_text("Das Item ist bereits im Fahrteninventar.Nutze den Change button um die Anzahl des Items zuändern");
		};
		
	}
	if(allowed == true){
		additem();
	}
	
}

function alert_text(fehlermeldung){
	document.getElementById("alert_text").style.display = 'block';
	document.getElementById("alert_text").value = fehlermeldung;
}

function copyoption(quelle,ziel){
		var quelle_1 = document.getElementById(quelle),
			ziel_1 = document.getElementById(ziel),
			options = quelle_1.innerHTML,
			options = ziel_1.innerHTML + options;

		ziel_1.innerHTML = options;
}

function amount(){
	document.getElementById("item_amount_new").value = document.getElementById("amount").value;
	refreshdetailvalues();
	
}

function changeashen(checkbox){
	
	if(checkbox.checked == true){
		ashen = 2;
	}else if(checkbox.checked == false){
		ashen = 1;
	}
	document.getElementById("item_ashen_new").value = ashen;
	
	refreshdetailvalues();
}

function showdetailvalues(){
	
	var item = document.getElementById("selecteditem"),
		selectedValue = item.value,
		array=selectedValue.split(","),
		min=array[0],
		max=array[1],
		emipoints=array[2],
		amount=array[3],
		ashen=array[4];
		
	document.getElementById("item_min").value = min*amount*ashen;
	document.getElementById("item_max").value = max*amount*ashen;
	document.getElementById("item_amount").value = amount;
	document.getElementById("item_ashen").value = ashen;
	document.getElementById("item_emipoints").value = emipoints;
	
}

function refreshdetailvalues(){
	
	min = document.getElementById("item_min").value;
	max = document.getElementById("item_max").value;
	emipoints = document.getElementById("item_emipoints").value;
	amount = document.getElementById("amount").value;
	ashen = document.getElementById("item_ashen_new").value;
		
	document.getElementById("item_min_new").value = min*amount*ashen;
	document.getElementById("item_max_new").value = max*amount*ashen;
	document.getElementById("item_amount_new").value = amount;
	document.getElementById("item_ashen_new").value = ashen;
	document.getElementById("item_emipoints_new").value = emipoints;
}

function speicherwertein(liste){
		
	var item = document.getElementById(liste),
		selectedValue = item.options[item.selectedIndex].value,
		array=selectedValue.split(",");

	array[0] = document.getElementById("item_min_new").value;
	array[1] = document.getElementById("item_max_new").value;
	array[2] = document.getElementById("item_emipoints_new").value;
	array[3] = document.getElementById("item_amount_new").value;
	array[4] = document.getElementById("item_ashen_new").value;
	var value = array[0]+","+array[1]+","+array[2]+","+array[3]+","+array[4];
	item.options[item.selectedIndex].value = value;
}

function selectitem(item){

	document.getElementById("selecteditem").innerHTML = item.options[item.selectedIndex].outerHTML;
	
	
	showdetailvalues();
	refreshdetailvalues();
	
}

function additem(){

	
	speicherwertein("selecteditem");
	copyoption("selecteditem","output");
	sum();

	
}

function refresh(){
	sum();
}

function sum(){
	var wert_1 = 0,
		wert_2 = 0,
		sum_1 = 0,
		sum_2 = 0,
		wert = 0,
		emipoints =0,
		gold = 0,
		liste = document.getElementById("output"),
		lange = liste.options.length;
	
	for( var i = 0; i<=lange-1;i++){
		
		 wert = liste.options[i].value.split(",");
		 wert_1 =parseInt(wert[0]);
		 wert_2 =parseInt(wert[1]);
		sum_1 = parseInt(sum_1 + wert_1);
		sum_2 = parseInt(sum_2 + wert_2);
	}
	gold = (sum_1+sum_2)/2;
	document.getElementById("gesamt_min").value = sum_1;
	document.getElementById("gesamt_max").value = sum_2;
	document.getElementById("gesamt_gold").value = gold;
	document.getElementById("gesamt_emipoints").value = emipoints;
}

function change(){
	speicherwertein("output");
	refresh();
}

function deleteitem(){
	var item = document.getElementById("output").options[document.getElementById("output").selectedIndex];
	if(item.value != "0,0,0,0,0"){
	 item.outerHTML = '';
	}
	 refresh();
}


function deleteitem(){
	var item = document.getElementById("output").options[document.getElementById("output").selectedIndex];
	if(item.value != "0,0,0,0,0"){
	 item.outerHTML = '';
	}
	 refresh();
}








