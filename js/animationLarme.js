// ==== ANIMATION LARME JS === //
function foihgi(){
document.getElementById("idtest").classList.add("blabla"); // Fonction pour faire pleurer //
var newDiv = document.createElement("img");               // Créer une nouvelle div
        document.body.insertBefore(newDiv, idtest);      // Insérer la nouvelle div avant "jeu"
        newDiv.src = 'larmel.png';
        setTimeout(function() { newDiv.remove(); }, 900); // Démarrer le timer pour supprimer la div
        newDiv.className += "blabla";       // Ajoute la class "blabla", ce qui lance l'animation CSS