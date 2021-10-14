/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const titles = document.getElementsByClassName("target");

    Array.from(titles).forEach(function(elem) {
            elem.innerHTML = "Got it!"
        })
        /*-----------
            For cicle
        -------------*/
        // for (i = 0; i < titles.length; i++) {
        //     console.log(i)
        //     document.getElementsByClassName("target")[i].innerHTML = "something";
        // }




})();