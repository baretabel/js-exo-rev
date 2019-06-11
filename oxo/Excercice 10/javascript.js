function petank() {
    while (true) {
        var dist = entierAleatoire(5, 8);
        var joueur1 = prompt("Distance du cochonet " + dist + "m\nJoueur 1 lancez la boule \n Force de 1 à 10");
        if (joueur1 == 1 || joueur1 == 2 || joueur1 == 3 || joueur1 == 4 || joueur1 == 5 || joueur1 == 6 || joueur1 == 7 || joueur1 == 8 || joueur1 == 9 || joueur1 == 10) {
            var joueur2 = prompt("Distance du cochonet " + dist + "m\nJoueur 2 lancez la boule \n Force de 1 à 10");
            while (true) {
                if (joueur2 == 1 || joueur2 == 2 || joueur2 == 3 || joueur2 == 4 || joueur2 == 5 || joueur2 == 6 || joueur2 == 7 || joueur2 == 8 || joueur2 == 9 || joueur2 == 10) {
                    joueur1 = parseFloat(joueur1);
                    joueur2 = parseFloat(joueur2);
                    joueur1 = decimalAleatoire((joueur1 - 0.5), joueur1);
                    joueur1 = Math.round(joueur1 * 100) / 100;
                    joueur2 = decimalAleatoire((joueur2 - 0.5), joueur2);
                    joueur2 = Math.round(joueur2 * 100) / 100;

                    var cou1 = joueur1 - joueur2;
                    if (cou1 < 0) {
                        cou1 = 1;
                    }
                    cou1 = Math.round(cou1 * 100) / 100;


                    var cou2 = joueur2 - joueur1;
                    if (cou2 < 0) {
                        cou2 = 1;
                    }
                    cou2 = Math.round(cou2 * 100) / 100;
                    console.log(cou1);
                    console.log(cou2);
                    if (cou1 < 0.15 || cou2 < 0.15) {
                        var stock = joueur1
                        var plus = decimalAleatoire(0.1, 0.2);
                        plus = Math.round(plus * 100) / 100;
                        joueur1 = joueur1 + plus
                        joueur1 = Math.round(joueur1 * 100) / 100;
                        alert("Le joueur 1 à été touché");

                    }
                    if (joueur1 < dist) {
                        var entr1 = dist - joueur1;
                    } else if (joueur1 > dist) {
                        var entr1 = joueur1 - dist;
                    }
                    if (joueur2 < dist) {
                        var entr2 = dist - joueur2;
                    } else if (joueur2 > dist) {
                        var entr2 = joueur2 - dist;
                    }
                    if (cou1 > 0.15 && cou2 > 0.15) {
                        if (entr1 < entr2) {
                            alert("Distance du cochonet " + dist + "m\n Le joueur1 à lancer à " + joueur1 + "m\n Le joueur2 à lancer à " + joueur2 + "m\nLe Joueur 1 à gagné ");
                            break;
                        } else if (entr2 < entr1) {
                            alert("Distance du cochonet " + dist + "m\n Le joueur1 à lancer à " + joueur1 + "m\n Le joueur2 à lancer à " + joueur2 + "m\nLe Joueur 2 à gagné ");
                            break;
                        }
                    } else if (cou1 < 0.15 || cou2 < 0.15) {
                        if (entr1 < entr2) {
                            alert("Distance du cochonet " + dist + "m\n Le joueur1 à lancer à " + stock + "m\nApres avoir été touché il s'est déplacer de " + plus + "m\nMaintenant le joueur se trouve à " + joueur1 + "m\n Le joueur2 à lancer à " + joueur2 + "m\nLe Joueur 1 à gagné ");
                            break;
                        } else if (entr2 < entr1) {
                            alert("Distance du cochonet " + dist + "m\n Le joueur1 à lancer à " + stock + "m\nApres avoir été touché il s'est déplacer de " + plus + "m\nMaintenant le joueur se trouve à " + joueur1 + "m\n Le joueur2 à lancer à " + joueur2 + "m\nLe Joueur 2 à gagné ");
                            break;
                        }

                    }
                } else {
                    joueur2 = prompt("Distance du cochonet " + dist + "m\nJoueur 2 lancez la boule \n Force de 1 à 10");
                }
            }
        } else {
            joueur1 = prompt("Distance du cochonet " + dist + "m\nJoueur 1 lancez la boule \n Force de 1 à 10");
        }
    }

}
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function decimalAleatoire(min, max) {
    return Math.random() * (max - min) + min;
}

petank();


// dist J1
// dist J2
// dist J1 mod 