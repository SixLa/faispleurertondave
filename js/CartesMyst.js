var VCarteMyst1, VCarteMyst2, VCarteMyst3, VCarteMyst4, VCarteMyst5, VCarteMyst6;
var VChanceDeLancmt;

// Variables de la modale de l'event 1
var VModalCarteMyst1 = document.getElementById("ModalCarteMyst1");
var VModalCarteMyst2 = document.getElementById("ModalCarteMyst2");
var VModalCarteMyst3 = document.getElementById("ModalCarteMyst3");
var VModalCarteMyst4 = document.getElementById("ModalCarteMyst4");
var VModalCarteMyst5 = document.getElementById("ModalCarteMyst5");
var VModalCarteMyst6 = document.getElementById("ModalCarteMyst6");

// Les modales pour les cartes mystères

// Modale 1

var VBtn1 = document.getElementById("Btn1");
var span = document.getElementsByClassName("close")[0];

function Modal1(){
	function TexteModal1() {
		VModalCarteMyst1.style.display = "block";
	}
	TexteModal1()
	span.onclick = function() {
		VModalCarteMyst1.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == VModalCarteMyst1) {
			VModalCarteMyst1.style.display = "none";
		}
	}
}

// Modale 2

function Modal2(){
	function TexteModal2() {
		VModalCarteMyst2.style.display = "block";
	}
	TexteModal2()
	span.onclick = function() {
		VModalCarteMyst2.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == VModalCarteMyst2) {
			VModalCarteMyst2.style.display = "none";
		}
	}
}

// Modale 3

function Modal3(){
	function TexteModal3() {
		VModalCarteMyst3.style.display = "block";
	}
	TexteModal3()
	span.onclick = function() {
		VModalCarteMyst3.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == VModalCarteMyst3) {
			VModalCarteMyst3.style.display = "none";
		}
	}
}

// Modale 4

function Modal4(){
	function TexteModal4() {
		VModalCarteMyst4.style.display = "block";
	}
	TexteModal4()
	span.onclick = function() {
		VModalCarteMyst4.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == VModalCarteMyst4) {
			VModalCarteMyst4.style.display = "none";
		}
	}
}

// Modale 5

function Modal5(){
	function TexteModal5() {
		VModalCarteMyst5.style.display = "block";
	}
	TexteModal5()
	span.onclick = function() {
		VModalCarteMyst5.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == VModalCarteMyst5) {
			VModalCarteMyst5.style.display = "none";
		}
	}
}

// Modale 6

function Modal6(){
	function TexteModal6() {
		VModalCarteMyst6.style.display = "block";
	}
	TexteModal6()
	span.onclick = function() {
		VModalCarteMyst6.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == VModalCarteMyst6) {
			VModalCarteMyst6.style.display = "none";
		}
	}
}

//Lancer un évènement aléatoire


function EventRandom() {
	var VNombreRandom = Math.floor(Math.random() * 7);

		// CarteMyst1 : 25% des larmes actuelles en moins.

		function CarteMyst1() {
			VCompteurLarmes = (VCompteurLarmes)-(VCompteurLarmes)/4;
			Modal1();
		}


		// CarteMyst2 : 50% des larmes actuelles en moins.

		function CarteMyst2() {
			VCompteurLarmes = (VCompteurLarmes)-(VCompteurLarmes)/2;
			Modal2();
		}

		// CarteMyst3 : 75% des larmes actuelles en moins.

		function CarteMyst3() {
			VCompteurLarmes = (VCompteurLarmes)-((VCompteurLarmes)/4)*3;
			Modal3();
		}

		// CarteMyst4 : 25% des larmes actuelles en plus.

		function CarteMyst4() {
			VCompteurLarmes = (VCompteurLarmes)+(VCompteurLarmes)/4;
			Modal4();
		}

		// CarteMyst5 : 50% des larmes actuelles en plus.

		function CarteMyst5() {
			VCompteurLarmes = (VCompteurLarmes)+(VCompteurLarmes)/2;
			Modal5();

		}

		// CarteMyst6 : 75% des larmes actuelles en plus.

		function CarteMyst6() {
			VCompteurLarmes = (VCompteurLarmes)+((VCompteurLarmes)/4)*3;
			Modal6();
		}


	// Lancer la bonne fonction

	if (VNombreRandom==1) {CarteMyst1()} 
		else if (VNombreRandom==2) {CarteMyst2()}
			else if (VNombreRandom==3) {CarteMyst3()} 
				else if (VNombreRandom==4) {CarteMyst4()} 
					else if (VNombreRandom==5) {CarteMyst5()} 
						else {CarteMyst6()}

							$AfficheCompteurLarmes.innerHTML = "Compteur de larmes : " +Math.trunc(VCompteurLarmes);
					}

// Quand on appuie sur le bouton canard, savoir si l'event va se déclencher

function LancmtEvent() {
	VChanceDeLancmt = Math.floor(Math.random() * 101);
	if (VChanceDeLancmt<6) {EventRandom()} 
}