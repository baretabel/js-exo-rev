function affichage_debug() {
    var debug='Ceci est un message qui permet le debugguage';
    console.log(debug);
    
}
function affichage_popup() {
    var popup='Ceci est un message d\'avertissement';
    alert(popup);
    
}
//var nom= prompt("Votre nom est :");
//var prenom= prompt("Votre prénom est :");
//confirm('Votre nom est :'+nom+' '+prenom);
function don_de_bille() {
    var bille=14
    var demand=prompt("Combien de bille voulez-vous ?")
    if (bille<=demand){
        alert("Tu n'es vraiment pas gentil, je ne peux pas t'en donner autant");
        don_de_bille();
    }else if(bille>demand){
        var rest=bille-demand
        alert("D'accord, tu m'en a pris "+demand +" et il m'en reste"+rest);
    }
}
don_de_bille();