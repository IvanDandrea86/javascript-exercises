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
    function hasNumbertwo(pass) {
        var x = (pass.match(/\d/g) || []).length
        return x
    }
    var count = 1;
    var elem = document.getElementById("pass-one")
    elem.addEventListener("keypress", () => {
        let y = 0
        count++;
        y = hasNumbertwo(elem.value)
        if ((count > 8) && (y >= 2)) {
            document.getElementById("validity").innerHTML = ("ok")
        }


    })
    console.log(elem.value)
})();