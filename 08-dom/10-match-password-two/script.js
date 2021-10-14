/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var p1 = document.getElementById("pass-one").value
        var p2 = document.getElementById("pass-two").value
        if (p1 != p2) {
            const inputs = document.querySelectorAll(".field input")
            inputs.forEach(i => {
                var att = document.createAttribute("class");
                att.value = "error";
                i.setAttributeNode(att);

            })
        }
    })
})();