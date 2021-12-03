/*
 * Retourner la moyenne des valeurs du tableau
 * ex: [4, 8] => 6 car (4+8)/2
 * ex: [6, 8, 10] => 8 car (6+8+10)/3
 */

function average(scores)
{  
    
    var n = scores.length;
    var somme=0;
    for(let i=0; i<n; i++)
    {
        somme += scores[i];
    }
    var resultat = somme / n;
    return resultat;
 
}

export {
    average
};