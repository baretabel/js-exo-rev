function affichage_debug() {
    var debug='Ceci est un message qui permet le debugguage';
    console.log(debug);
    
}
function affichage_popup() {
    var popup='Ceci est un message d\'avertissement';
    alert(popup);
    
}
var nom= prompt("Votre nom est :");
var prenom= prompt("Votre prénom est :");
confirm('Votre nom est :'+nom+' '+prenom);