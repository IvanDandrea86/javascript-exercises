/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function hasNumber(myString) {
        return /\d/.test(myString);
    }
    var count = 1;
    var elem = document.getElementById("pass-one")
    elem.addEventListener("keypress", () => {

        count++;
        if ((count > 8) && ((hasNumber(elem.value)))) {
            document.getElementById("validity").innerHTML = ("ok")
        }
    })
})();