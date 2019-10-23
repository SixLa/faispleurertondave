var VCarteMyst1, VCarteMyst2, VCarteMyst3, VCarteMyst4, VCarteMyst5, VCarteMyst6;
var VChanceDeLancmt;

function EventRandom() {
	var VNombreRandom = Math.floor(Math.random() * 7);

		// CarteMyst1 : Pendant 10 secondes le montant de L/S est divisé par 2.

		function CarteMyst1() {
			VLarmesParS = VLarmesParS/2;
			alert("CarteMyst1 " + VLarmesParS);
		}

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

	if (VNombreRandom==1) {CarteMyst1()} 
		else if (VNombreRandom==2) {CarteMyst2()}
			else if (VNombreRandom==3) {CarteMyst3()} 
				else if (VNombreRandom==4) {CarteMyst4()} 
					else if (VNombreRandom==5) {CarteMyst5()} 
						else {CarteMyst6()}
					}

// Quand on appuie sur le bouton canard, savoir si l'event va se déclencher

function LancmtEvent() {
	VChanceDeLancmt = Math.floor(Math.random() * 101);
	if (VChanceDeLancmt<6) {EventRandom()} 
}
