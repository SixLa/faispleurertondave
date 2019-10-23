var VCompteurLarmes = 1000;
var VLarmesParS = 8000;
var VCarteMyst1, VCarteMyst2, VCarteMyst3, VCarteMyst4, VCarteMyst5, VCarteMyst6


// Lancer l'aléatoire

function EventRandom() {
	var NombreRandom = Math.floor(Math.random() * 7);

	// CarteMyst1 : Pendant 10 secondes le montant de L/S est divisé par 2.

	function CarteMyst1() {
			VLarmesParS = VLarmesParS/2;
			alert("CarteMyst1 " + VLarmesParS);
		}

		
	


/*

setInterval(i++, 1000);
setInterval(50 = 100, 10000);
 while i = 10
 	100 = 50



 */












	// CarteMyst2 : 25% des larmes actuelles en moins.

	function CarteMyst2() {
		VCompteurLarmes = (VCompteurLarmes)-(VCompteurLarmes)/4;
		alert("CarteMyst2 "+VCompteurLarmes);
	}

	// CarteMyst3 : Le compteur s'arrête pendant 5 secondes.

	function CarteMyst3() {
		VCompteurLarmes=3;
		alert("CarteMyst3");
	}

	// CarteMyst4 : Pendant 10 secondes le montant de L/S est multiplié par 2

	function CarteMyst4() {
		VLarmesParS = (VLarmesParS)*2;
		alert("CarteMyst4");
	}

	// CarteMyst5 : 25% des larmes actuelles en plus.

	function CarteMyst5() {
		VCompteurLarmes = (VCompteurLarmes)+(VCompteurLarmes)/4;
		alert("CarteMyst5 "+VCompteurLarmes);
	}

	// CarteMyst6 : Pendant 5 secondes le montant de L/S est multiplié par 10.

	function CarteMyst6() {
		VLarmesParS = (VLarmesParS)*10;
		alert("CarteMyst6");
	}


// Lancer la bonne fonction

if (NombreRandom==1) {CarteMyst1()} 
	else if (NombreRandom==2) {CarteMyst2()}
		else if (NombreRandom==3) {CarteMyst3()} 
			else if (NombreRandom==4) {CarteMyst4()} 
				else if (NombreRandom==5) {CarteMyst5()} 
					else {CarteMyst6()}
				}
