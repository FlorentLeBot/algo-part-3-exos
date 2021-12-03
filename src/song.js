/*
 * retourner la chanson en fonction du nombre de kilomètres
 *
 * ex: song(2) =>
 *      1 km à pied, ça use, ça use, ça use,
 *      1 km à pied, ça use les souliers
 *      2 km à pied, ça use, ça use, ça use,
 *      2 km à pied, ça use les souliers
 *
 * Voir le fichier de tests associé (spec/songSpec.js)
 */
function song(km) {
    let km = "";
    let resultat = km + " km à pied, ça use, ça use" + "<br>" + km + " km à pied, ça use les souliers";
    for (km = 0; km<=100; km++ ){
        return resultat;
    }
    return song();
}

export { song };