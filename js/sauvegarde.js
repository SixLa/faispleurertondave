//==== SAUVEGARDE ====//

//==== ETAPE 01 ====//
//integrer la ligne suivante dans chaque fonction : localStorage.setItem("nom sauvgarde", valeur de notre fonction)//

//==== ETAPE 02 ====//
//Rassembler tous les localStorage de chaque fonction, dans une fonction//
function sauvegarde(){
	localStorage.setItem("fonction 1", resultat); 
	localStorage.setItem("fonction 2", incrementer);
	localStorage.setItem("fonction 3", autoclonage);
}

//==== ETAPE 03 - LE RELOAD ====//

//==== Créer une fonction Reload qui a pour but de rafraichir la page en temps réel en prenant n compte les sauvegarde//
//==== Faire appel à ctte fonction Reload à la fin de la page ====//
function reload(){
	resultat = parseInt (localStorage.getItem("fonction 1"));
	var incrementer = parseInt(localStorage.getItem("fonction 2"));
	var autoclonage = parseInt(localStorage.getItem("fonction 3"));
	document.getElementById("score").innerHTML=resultat;
	
}

