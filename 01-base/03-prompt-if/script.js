/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var answare= prompt("Did you want a piece of cake ?");
    // added a case sensitive control on the yes answare
    if (answare.toLocaleLowerCase() === "yes"){
        alert ("No proble! Take your piece...");
    }
        else alert ("You can't refuse a piece of cake!");
    
})();
