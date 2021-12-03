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

    let song = "";

    for (let nbKm = 1; nbKm <= km; nbKm++){
        song += nbKm + " km à pied, ça use, ça use, ça use,\n" + nbKm + " km à pied, ça use les souliers\n";
    }
    return song;
 }

export { song };