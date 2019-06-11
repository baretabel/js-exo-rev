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
function contrôle_identite() {
    var age=prompt("Quel âge avez-vous ?");
    if(age<18){
        alert("Vous êtes mineur");
    }else if(age>=18){
        alert("Vous êtes majeur");
    }
    
}
function liste() {
   
    var li=['naze', 'gamin', 'capron', 'attoumani', 'adbou', 'morel', 'cyprien', 'vellien', 'baret', 'lauret'];
    alert(li);
    var rep=prompt("Demander à l'utilisateur ce qu'il veut : \n\n1- Mettre le tableau dans l'ordre \n2- Inverser complètement le tableau");
    if(rep==1){
        li=li.sort();
        alert(li);
    }else if (rep==2){
        li=li.sort();
        li=li.reverse();
        alert(li);
    }else{
        liste();
    }
    
}liste();