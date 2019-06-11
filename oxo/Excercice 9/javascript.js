function affichage_debug() {
    var debug = 'Ceci est un message qui permet le debugguage';
    console.log(debug);

}
function affichage_popup() {
    var popup = 'Ceci est un message d\'avertissement';
    alert(popup);

}
//var nom= prompt("Votre nom est :");
//var prenom= prompt("Votre prénom est :");
//confirm('Votre nom est :'+nom+' '+prenom);
function don_de_bille() {
    var bille = 14
    var demand = prompt("Combien de bille voulez-vous ?")
    if (bille <= demand) {
        alert("Tu n'es vraiment pas gentil, je ne peux pas t'en donner autant");
        don_de_bille();
    } else if (bille > demand) {
        var rest = bille - demand
        alert("D'accord, tu m'en a pris " + demand + " et il m'en reste" + rest);
    }
}
function contrôle_identite() {
    var age = prompt("Quel âge avez-vous ?");
    if (age < 18) {
        alert("Vous êtes mineur");
    } else if (age >= 18) {
        alert("Vous êtes majeur");
    }

}
function liste() {

    var li = ['naze', 'gamin', 'capron', 'attoumani', 'adbou', 'morel', 'cyprien', 'vellien', 'baret', 'lauret'];
    alert(li);
    var rep = prompt("Demander à l'utilisateur ce qu'il veut : \n\n1- Mettre le tableau dans l'ordre \n2- Inverser complètement le tableau");
    if (rep == 1) {
        li = li.sort();
        alert(li);
    } else if (rep == 2) {
        li = li.sort();
        li = li.reverse();
        alert(li);
    } else {
        liste();
    }

}var un = 1;
    var cinquante = 2;
    var vingt = 2;
    var dix = 1;
function distrib() {
    var boisson = ['Coca', 'Sprite', 'Orangina', '7Up', 'Aloe Vera', 'Lipton Ice tea'];
    var num = ['16', '17', '18', '19', '20', '21'];
    var prix = ['1.20', ' 1.00', '1.50', '1.60', '1.40', '1.10'];
    
    var choix = prompt("Choix: " + num[0] + "." + boisson[0] + "  " + num[1] + "." + boisson[1] + "  " + num[2] + "." + boisson[2] + "  " + num[3] + "." + boisson[3] + "  " + num[4] + "." + boisson[4] + "  " + num[5] + "." + boisson[5]);
    if (choix == num[0]) {

        var paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
        while (true) {
            prix[0] = parseFloat(prix[0], 10)
            paye = parseFloat(paye, 10)
            if (paye == 1 && un > 0) {
                prix[0] = prix[0] - paye;
                prix[0] = Math.round(prix[0] * 100) / 100;
                un--;
                paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.50 && cinquante > 0) {
                prix[0] = prix[0] - paye;
                prix[0] = Math.round(prix[0] * 100) / 100;
                cinquante--;
                paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.20 && vingt > 0) {
                prix[0] = prix[0] - paye;
                prix[0] = Math.round(prix[0] * 100) / 100;
                vingt--;
                paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.10 && dix > 0) {
                prix[0] = prix[0] - paye;
                prix[0] = Math.round(prix[0] * 100) / 100;
                dix--;
                paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else {
                paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } if (prix[0] <= 0) {
                distrib();
            }

        }

    } else if (choix == num[1]) {
        while (true) {
            prix[1] = parseFloat(prix[1], 10)
            paye = parseFloat(paye, 10)
            if (paye == 1 && un > 0) {
                prix[1] = prix[1] - paye;
                prix[1] = Math.round(prix[0] * 100) / 100;
                un--;
                paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.50 && cinquante > 0) {
                prix[1] = prix[1] - paye;
                prix[1] = Math.round(prix[1] * 100) / 100;
                cinquante--;
                paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.20 && vingt > 0) {
                prix[1] = prix[1] - paye;
                prix[1] = Math.round(prix[1] * 100) / 100;
                vingt--;
                paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.10 && dix > 0) {
                prix[1] = prix[1] - paye;
                prix[1] = Math.round(prix[1] * 100) / 100;
                dix--;
                paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else {
                paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } if (prix[0] <= 0) {
                distrib();
            }
        }

    } else if (choix == num[2]) {
        while (true) {
            prix[2] = parseFloat(prix[2], 10)
            paye = parseFloat(paye, 10)
            if (paye == 1 && un > 0) {
                prix[2] = prix[2] - paye;
                prix[2] = Math.round(prix[2] * 100) / 100;
                un--;
                paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.50 && cinquante > 0) {
                prix[2] = prix[2] - paye;
                prix[2] = Math.round(prix[2] * 100) / 100;
                cinquante--;
                paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.20 && vingt > 0) {
                prix[2] = prix[2] - paye;
                prix[2] = Math.round(prix[2] * 100) / 100;
                vingt--;
                paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else if (paye == 0.10 && dix > 0) {
                prix[2] = prix[2] - paye;
                prix[2] = Math.round(prix[2] * 100) / 100;
                dix--;
                paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } else {
                paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
            } if (prix[2] <= 0) {
                distrib();
            }
        }

    } else if (choix == num[3]) {
        while (true) {
            prix[3]=parseFloat(prix[3],10)
            paye=parseFloat(paye,10)
            if(paye==1 && un>0){
                prix[3]= prix[3]-paye;
                prix[3]=Math.round(prix[3]*100)/100;
                un--;
                paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.50 && cinquante>0){
                prix[3]= prix[3]-paye;
                prix[3]=Math.round(prix[3]*100)/100;
                cinquante--;
                paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.20 && vingt>0){
                prix[3]= prix[3]-paye;
                prix[3]=Math.round(prix[3]*100)/100;
                vingt--;
                paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.10 && dix>0){
                prix[3]= prix[3]-paye;
                prix[3]=Math.round(prix[3]*100)/100;
                dix--;
                paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else{
                paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }if(prix[3]<=0){
                distrib();
        }
    }

    } else if (choix == num[4]) {
        while (true) {
            prix[4]=parseFloat(prix[4],10)
            paye=parseFloat(paye,10)
            if(paye==1 && un>0){
                prix[4]= prix[4]-paye;
                prix[4]=Math.round(prix[4]*100)/100;
                un--;
                paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.50 && cinquante>0){
                prix[4]= prix[4]-paye;
                prix[4]=Math.round(prix[4]*100)/100;
                cinquante--;
                paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.20 && vingt>0){
                prix[4]= prix[4]-paye;
                prix[4]=Math.round(prix[4]*100)/100;
                vingt--;
                paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.10 && dix>0){
                prix[4]= prix[4]-paye;
                prix[4]=Math.round(prix[4]*100)/100;
                dix--;
                paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else{
                paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }if(prix[4]<=0){
                distrib();
        }
    }

    } else if (choix == num[5]) {
        while (true) {
            prix[5]=parseFloat(prix[5],10)
            paye=parseFloat(paye,10)
            if(paye==1 && un>0){
                prix[5]= prix[5]-paye;
                prix[5]=Math.round(prix[5]*100)/100;
                un--;
                paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.50 && cinquante>0){
                prix[5]= prix[5]-paye;
                prix[5]=Math.round(prix[5]*100)/100;
                cinquante--;
                paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.20 && vingt>0){
                prix[5]= prix[5]-paye;
                prix[5]=Math.round(prix[5]*100)/100;
                vingt--;
                paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else if(paye==0.10 && dix>0){
                prix[5]= prix[5]-paye;
                prix[5]=Math.round(prix[5]*100)/100;
                dix--;
                paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }else{
                paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" +un+" pièce de 1€ | "+cinquante+"pièces de 0,50€ | "+vingt+" pièce de 0,20€ | "+dix+" pièce de 0,10€ ]");
            }if(prix[5]<=0){
                distrib();
        }
    }

    } else {
        distrib();
    }


} distrib();
