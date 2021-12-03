/*
 * Cette fonction doit ajouter un nouveau message à la liste des messages existants
 *
 *
 * Voir le fichier de tests associé (spec/wallSpec.js)
 */
function wall(existingMessages, newMessage) {
    
    // expect(wall(history, "Hier, j'ai mangé une pomme !").length).toEqual(4);

    existingMessages.push(newMessage);
    return existingMessages;

}

export { wall };