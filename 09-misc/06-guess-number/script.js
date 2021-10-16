/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    var win=false
    var secret=getRandomArbitrary(1,100)
    var x  = +prompt("Guess the number :",x)
    var guess=0
    
    while (win === false){
        if (x===secret){
            alert ("you Win in "+guess+"tries")
            win =true   
                }
            else if(x < secret){
                alert("Too low")
                 x= +prompt("Guess the number :",x)
                guess++
                }
                else {
            alert("Too big")
            x= +prompt("Guess the number :",x)
            guess++
        
    }
}
})();
