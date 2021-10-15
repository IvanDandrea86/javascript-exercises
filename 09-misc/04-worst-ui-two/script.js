/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var rangeInput = document.getElementById("slider").value;
    var buttonInput = document.getElementById("btn");

    if (buttonInput.addEventListener) {
        buttonInput.addEventListener("click", testtest, false);
    } else if (buttonInput.attachEvent) {
        buttonInput.attachEvent('onclick', testtest);
    }

    function testtest(e) {
        if (rangeInput > 0 && rangeInput < 5) {
            alert("First");
        } else {
            alert("Second");
        }
    }
})();