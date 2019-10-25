// ==== ANIMATION LARME JS === //

function animationLarme(){

	document.getElementById("imgLarmeGauche").classList.add("animLarme"); // Fonction pour faire pleurer //
	var newDiv = document.createElement("img");               // Créer une nouvelle div

        document.getElementById('positionLarmeGauche').insertBefore(newDiv, imgLarmeGauche);      // Insérer la nouvelle div avant "jeu"
        newDiv.src = 'images/larme.png';
        setTimeout(function() { newDiv.remove(); }, 900); // Démarrer le timer pour supprimer la div
        newDiv.className += "animLarme";       // Ajoute la class "animLarme", ce qui lance l'animation CSS
}

function animationLarmeDroite(){

	document.getElementById("imgLarmeDroite").classList.add("animLarme");
	var newDiv2 = document.createElement("img");  

	document.getElementById('positionLarmeDroite').insertBefore(newDiv2, imgLarmeDroite);
        newDiv2.src = 'images/larme.png';
        setTimeout(function() { newDiv2.remove(); }, 900); // Démarrer le timer pour supprimer la div
        newDiv2.className += "animLarme";       // Ajoute la class "animLarme", ce qui lance l'animation CSS
}