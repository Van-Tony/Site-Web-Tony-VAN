


function choisirPhrasesOuMots()
{
    
    choixphrases = prompt(`Choisissez entre jouer avec des "phrases" ou "mots"`)

    return choixphrases
    
}

function lancerBoucleDeJeu(choix)
{
    switch (choix)
    {
    case "phrases":
        for (i = 0 ; i < listeDePhrases.length ; i++)
        {
            choix = prompt("Ecrivez la phrase : " + listeDePhrases[i])

            if(choix === listeDePhrases[i])
            {
                
                score++
                
            }

        }
    break

    case "mots":
        for (i = 0 ; i < listeDeMots.length ; i++)
            {
                choix = prompt("Ecrivez le mot : " + listeDeMots[i])
                if (choix === listeDeMots[i])
                {
                    score++
                }
            }    
    break
    }
}
function afficherResultat()
{
    let texteAffichageScore = `Bravo ! Votre score total est ${score} sur ${listeDeMots.length}.`
    console.log("Bravo ! Votre score total est de " + score + "sur" + listeDeMots.length)
}

let score = 0

function lancerJeu()
{

    let choix = choisirPhrasesOuMots()
    lancerBoucleDeJeu(choix)
    afficherResultat()
}



