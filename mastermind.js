let couleurPossible = ["jaune", "vert", "rouge", "bleu"];
let nombrePion = [`${couleurPossible}`, `${couleurPossible}`];
const codeBreakerEssai = 12;
let propositioncodeBreaker = prompt(
  `choisi 2 couleurs parmis les 4: ${couleurPossible}`
);

//----------------------ETAPE 1-------------------------------------------------------------

/* //function pour savoir si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre:
1-Convertir "propositioncodeBreaker" en tableau
2-Condition: If (propositioncodeBreaker === couleurpossible && propositioncodeBreaker === nombrePion.length){
        return true }
        else  {propositioncodeBreaker} */

/* //Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non:
Function GamePlay (){
Condition: If (propositioncodeBreaker === nombrePion){
  return true 
  alert ("Bravo tu as trouvé")
}else {
  alert ("Faux, recommences")
} }*/

/* //Une fonction qui gère la partie (continuer tant que/fin si gagné):
1-Convertir propositioncodeBreaker en nombre:
      propositioncodeBreaker = Number.propositioncodeBreaker()
2-let soustractEssai = codeBreakerEssai - propositioncodeBreaker
3-Boucle: While (GamePlay !==true){
   return soustractEssai
 }
 4-Condition: If (soustractEssai === 0){
   alert ("game over")
 }
 */

//-----------------------ETAPE 2--------------------------------------------------------------

couleurPossible = [
  "jaune",
  "vert",
  "rouge",
  "bleu",
  "violet",
  "gris",
  "noir",
  "rose",
];
nombrePion = [
  `${couleurPossible}`,
  `${couleurPossible}`,
  `${couleurPossible}`,
  `${couleurPossible}`,
];

//on lance les fonctions

//---------------------ETAPE 3----------------------------------------------------------------

//------------------ETAPE 4-----------------------------------------------------------------
// avec la méthode Math.random()
