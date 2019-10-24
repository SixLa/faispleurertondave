////////////////////////////////// FONCTIONS DU CLICKER & DES OPTIONS A UPGRADER ////////////////////////////////// 

// VARIABLES DES OPTIONSUP : LES COMPTEURS
$AfficheCompteurLarmes = document.getElementById("CompteurLarmes"); // Maj compteur actuel de larmes
$AfficheMultiNbLarmesClic = document.getElementById("MultiNbLarmesClic"); // Maj multiplicateur nb de larmes par clic
$AfficheTotalLarmes = document.getElementById("TotalLarmes"); // Maj total des larmes accumulées
$AfficheLarmesParS = document.getElementById("LarmesSeconde"); // Maj larmes par seconde

var VTotalLarmes = 0; // Compteur Total des larmes accumulées
var VCompteurLarmes = 0; // Compteur actuel de larmes
var VMultiLarmes = 1; // Multiplicateur du nombre de larmes / clic
var	VLarmesParS = 0; // Nombre de larmes gagnées par sec automatiquement

// VARIABLES OPTIONUP1 : HTML
$AfficheNiveauOptionUp1 = document.getElementById("OptionUp1"); // Maj bouton OptionUp1 (niveau + prochain achat)
var NextAchatOptionUp1 = 20; // Prix de départ de l'OptionUp1
var VNiveauOptionUp1 = 1; // Niveau de l'OptionUp1

// VARIABLES OPTIONUP2 : JS
$AfficheNiveauOptionUp2 = document.getElementById("OptionUp2"); // Maj bouton OptionUp2 (niveau + prochain achat)
var NextAchatOptionUp2 = 50; // Prix de départ de l'OptionUp2
var VNiveauOptionUp2 = 1; // Niveau de l'OptionUp2

// VARIABLES OPTIONUP3 : PHP
$AfficheNiveauOptionUp3 = document.getElementById("OptionUp3"); // Maj bouton OptionUp3 (niveau + prochain achat)
var NextAchatOptionUp3 = 100; // Prix de départ de l'OptionUp3
var VNiveauOptionUp3 = 1; // Niveau de l'OptionUp3

// VARIABLES OPTIONUP4 : Python
$AfficheNiveauOptionUp4 = document.getElementById("OptionUp4"); // Maj bouton OptionUp4 (niveau + prochain achat)
var NextAchatOptionUp4 = 500; // Prix de départ de l'OptionUp4
var VNiveauOptionUp4 = 1; // Niveau de l'OptionUp4

// VARIABLES OPTIONUP5 : Ruby
$AfficheNiveauOptionUp5 = document.getElementById("OptionUp5"); // Maj bouton OptionUp5 (niveau + prochain achat)
var NextAchatOptionUp5 = 1000; // Prix de départ de l'OptionUp5
var VNiveauOptionUp5 = 1; // Niveau de l'OptionUp5

// VARIABLES OPTIONUP6 : Java
$AfficheNiveauOptionUp6 = document.getElementById("OptionUp6"); // Maj bouton OptionUp6 (niveau + prochain achat)
var NextAchatOptionUp6 = 5000; // Prix de départ de l'OptionUp6
var VNiveauOptionUp6 = 1; // Niveau de l'OptionUp6

// VARIABLES OPTIONUP7 : Elixir
$AfficheNiveauOptionUp7 = document.getElementById("OptionUp7"); // Maj bouton OptionUp7 (niveau + prochain achat)
var NextAchatOptionUp7 = 25000; // Prix de départ de l'OptionUp7
var VNiveauOptionUp7 = 1; // Niveau de l'OptionUp7

// VARIABLES OPTIONUP8 : C
$AfficheNiveauOptionUp8 = document.getElementById("OptionUp8"); // Maj bouton OptionUp8 (niveau + prochain achat)
var NextAchatOptionUp8 = 50000; // Prix de départ de l'OptionUp8
var VNiveauOptionUp8 = 1; // Niveau de l'OptionUp8



///////////////////////////// AJOUT LARMES AVEC CLICKER CANARD /////////////////////////////

	function ajoutLarmesClic() {
		VCompteurLarmes += VMultiLarmes;
		// VTotalLarmes += VMultiLarmes;
		$AfficheCompteurLarmes.innerHTML = "Compteur de larmes : " +Math.trunc(VCompteurLarmes);
		// $AfficheTotalLarmes.innerHTML = "Total des larmes accumulées : " +VTotalLarmes;
	}

	document.getElementById("clicker").onclick = ajoutLarmesClic;


/////////////////// OPTIONUP1 A UPGRADER : MULTIPLICATEUR HTML ///////////////////

	function incrementerOptionUp1() {
		
		// var VTruc = VTotalLarmes;
		if ((VCompteurLarmes - NextAchatOptionUp1) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp1;
			VMultiLarmes++;
			VNiveauOptionUp1++;	
			NextAchatOptionUp1 = NextAchatOptionUp1 * 2;
			// VTotalLarmes = VTruc + VCompteurLarmes;
				
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
			$AfficheNiveauOptionUp1.innerHTML = 'Niveau : ' +VNiveauOptionUp1+ ' / Coût prochain achat : ' +NextAchatOptionUp1;
			$AfficheMultiNbLarmesClic.innerHTML = 'Multiplicateur du nombre de larmes / clic : x ' +VMultiLarmes;
			// $AfficheTotalLarmes.innerHTML = 'Total des larmes accumulées : ' +VTotalLarmes;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp1 > 2) {
			$AfficheNiveauOptionUp2.disabled = false;
		}

		if (VNiveauOptionUp4 > 5 && VNiveauOptionUp1 > 9) {
			$AfficheNiveauOptionUp5.disabled = false;
		}
	}

	$AfficheNiveauOptionUp1.onclick = incrementerOptionUp1;


/////////////////// OPTIONUP2 A UPGRADER : AUTOCLIC JAVASCRIPT ///////////////////

	function plusCompteurLarmes() {
		VCompteurLarmes++;
		$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp2() {
		
		if ((VCompteurLarmes - NextAchatOptionUp2) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp2;
			NextAchatOptionUp2 = NextAchatOptionUp2 * 2;
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
			VNiveauOptionUp2++;
			$AfficheNiveauOptionUp2.innerHTML = 'Niveau : ' +VNiveauOptionUp2+ ' / Coût prochain achat : ' +NextAchatOptionUp2;
						
			setInterval(plusCompteurLarmes, 1000);
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
					
			VLarmesParS++;
			$AfficheLarmesParS.innerHTML = 'Larmes par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp2 > 4) {
			$AfficheNiveauOptionUp3.disabled = false;
		}

		if ((VNiveauOptionUp3 > 4) && (VNiveauOptionUp2 > 9)) {
			$AfficheNiveauOptionUp4.disabled = false;
		}

		if (VNiveauOptionUp6 > 19 && VNiveauOptionUp7 > 9 && VNiveauOptionUp2 > 14) {
			$AfficheNiveauOptionUp8.disabled = false;
		}
	}

	$AfficheNiveauOptionUp2.onclick = autoclicOptionUp2;


/////////////////// OPTIONUP3 A UPGRADER : AUTOCLIC PHP ///////////////////

	function plusCompteurLarmesOptionUp3() {
		VCompteurLarmes += 10;
		$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp3() {
		
		if ((VCompteurLarmes - NextAchatOptionUp3) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp3;
			NextAchatOptionUp3 = NextAchatOptionUp3 * 2;
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
			VNiveauOptionUp3++;
			$AfficheNiveauOptionUp3.innerHTML = 'Niveau : ' +VNiveauOptionUp3+ ' / Coût prochain achat : ' +NextAchatOptionUp3;
						
			setInterval(plusCompteurLarmesOptionUp3, 1000);
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
					
			VLarmesParS +=10 ;
			$AfficheLarmesParS.innerHTML = 'Larmes par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if ((VNiveauOptionUp3 > 4) && (VNiveauOptionUp2 > 9)) {
			$AfficheNiveauOptionUp4.disabled = false;
		}

		if (VNiveauOptionUp3 > 11 && VNiveauOptionUp5 > 5) {
		$AfficheNiveauOptionUp6.disabled = false;
		}
	}

	$AfficheNiveauOptionUp3.onclick = autoclicOptionUp3;


/////////////////// OPTIONUP4 A UPGRADER : MULTIPLICATEUR PYTHON ///////////////////

	function incrementerOptionUp4() {
		
		if ((VCompteurLarmes - NextAchatOptionUp4) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp4;
			VMultiLarmes = VMultiLarmes * 1.5;
			VNiveauOptionUp4++;	
			NextAchatOptionUp4 = NextAchatOptionUp4 * 2;
				
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
			$AfficheNiveauOptionUp4.innerHTML = 'Niveau : ' +VNiveauOptionUp4+ ' / Coût prochain achat : ' +NextAchatOptionUp4;
			$AfficheMultiNbLarmesClic.innerHTML = 'Multiplicateur du nombre de larmes / clic : x ' +VMultiLarmes;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp4 > 5 && VNiveauOptionUp1 > 9) {
			$AfficheNiveauOptionUp5.disabled = false;
		}
	}

	$AfficheNiveauOptionUp4.onclick = incrementerOptionUp4;


/////////////////// OPTIONUP5 A UPGRADER : AUTOCLIC RUBY ///////////////////

	function plusCompteurLarmesOptionUp5() {
		VCompteurLarmes += 50;
		$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp5() {
		
		if ((VCompteurLarmes - NextAchatOptionUp5) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp5;
			NextAchatOptionUp5 = NextAchatOptionUp5 * 2;
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
			VNiveauOptionUp5++;
			$AfficheNiveauOptionUp5.innerHTML = 'Niveau : ' +VNiveauOptionUp5+ ' / Coût prochain achat : ' +NextAchatOptionUp5;
						
			setInterval(plusCompteurLarmesOptionUp5, 1000);
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
					
			VLarmesParS += 50;
			$AfficheLarmesParS.innerHTML = 'Larmes par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp3 > 11 && VNiveauOptionUp5 > 5) {
			$AfficheNiveauOptionUp6.disabled = false;
		}

		if (VNiveauOptionUp5 > 14 && VNiveauOptionUp6 > 6) {
			$AfficheNiveauOptionUp7.disabled = false;
		}
	}

	$AfficheNiveauOptionUp5.onclick = autoclicOptionUp5;


/////////////////// OPTIONUP6 A UPGRADER : AUTOCLIC JAVA ///////////////////

	function plusCompteurLarmesOptionUp6() {
		VCompteurLarmes += 100;
		$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp6() {
		
		if ((VCompteurLarmes - NextAchatOptionUp6) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp6;
			NextAchatOptionUp6 = NextAchatOptionUp6 * 2;
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
			VNiveauOptionUp6++;
			$AfficheNiveauOptionUp6.innerHTML = 'Niveau : ' +VNiveauOptionUp6+ ' / Coût prochain achat : ' +NextAchatOptionUp6;
						
			setInterval(plusCompteurLarmesOptionUp6, 1000);
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
					
			VLarmesParS += 100;
			$AfficheLarmesParS.innerHTML = 'Larmes par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp5 > 14 && VNiveauOptionUp6 > 6) {
			$AfficheNiveauOptionUp7.disabled = false;
		}

		if (VNiveauOptionUp6 > 19 && VNiveauOptionUp7 > 9 && VNiveauOptionUp2 > 14) {
			$AfficheNiveauOptionUp8.disabled = false;
		}
	}

	$AfficheNiveauOptionUp6.onclick = autoclicOptionUp6;


/////////////////// OPTIONUP7 A UPGRADER : MULTIPLICATEUR ELIXIR ///////////////////

	function incrementerOptionUp7() {
		
		if ((VCompteurLarmes - NextAchatOptionUp7) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp7;
			VMultiLarmes = VMultiLarmes * 2;
			VNiveauOptionUp7++;	
			NextAchatOptionUp7 = NextAchatOptionUp7 * 2;
				
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
			$AfficheNiveauOptionUp7.innerHTML = 'Niveau : ' +VNiveauOptionUp7+ ' / Coût prochain achat : ' +NextAchatOptionUp7;
			$AfficheMultiNbLarmesClic.innerHTML = 'Multiplicateur du nombre de larmes / clic : x ' +VMultiLarmes;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp6 > 19 && VNiveauOptionUp7 > 9 && VNiveauOptionUp2 > 14) {
			$AfficheNiveauOptionUp8.disabled = false;
		}
	}

	$AfficheNiveauOptionUp7.onclick = incrementerOptionUp7;


/////////////////// OPTIONUP8 A UPGRADER : AUTOCLIC C ///////////////////

	function plusCompteurLarmesOptionUp8() {
		VCompteurLarmes += 500;
		$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp8() {
		
		if ((VCompteurLarmes - NextAchatOptionUp8) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp8;
			NextAchatOptionUp8 = NextAchatOptionUp8 * 2;
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
			VNiveauOptionUp8++;
			$AfficheNiveauOptionUp8.innerHTML = 'Niveau : ' +VNiveauOptionUp8+ ' / Coût prochain achat : ' +NextAchatOptionUp8;
						
			setInterval(plusCompteurLarmesOptionUp8, 1000);
			$AfficheCompteurLarmes.innerHTML = 'Compteur de larmes : ' +Math.trunc(VCompteurLarmes);
					
			VLarmesParS += 500;
			$AfficheLarmesParS.innerHTML = 'Larmes par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}
	}

	$AfficheNiveauOptionUp8.onclick = autoclicOptionUp8;