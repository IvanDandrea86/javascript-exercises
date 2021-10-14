/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
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
            if (p1 === p2) {
                const inputs = document.querySelectorAll(".field input")
                inputs.forEach(i => {
                    var att = document.createAttribute("style");
                    att.value = "border-color:green; color:green;";
                    i.setAttributeNode(att);
                })

                /*----------------
                Long stupid version
                ------------*/
                // let result = document.getElementById("pass-one")
                // var att = document.createAttribute("style");
                // att.value = "border-color:green; background-color:green;";
                // result.setAttributeNode(att);
                // let result2 = document.getElementById("pass-two")
                // var att2 = document.createAttribute("style");
                // att2.value = "border-color:green; background-color:green;";
                // result2.setAttributeNode(att2);
            } else {
                const inputs = document.querySelectorAll(".field input")
                inputs.forEach(i => {
                    var att = document.createAttribute("style");
                    att.value = "border-color:red; color:red;";
                    i.setAttributeNode(att);
                })


                /*----------------
                    Long stupid version
                    ------------*/
                // let result = document.getElementById("pass-one")
                // var att = document.createAttribute("style");
                // att.value = "border-color:red; background-color:red;";
                // result.setAttributeNode(att);
                // let result2 = document.getElementById("pass-two")
                // var att2 = document.createAttribute("style");
                // att2.value = "border-color:red; background-color:red;";
                // result2.setAttributeNode(att2);

            }
        })
        // your code here
})();