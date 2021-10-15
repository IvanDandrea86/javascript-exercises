/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {






    function addClass(target, _className) {
        target.forEach(elem => {
            elem.classList.add(_className)
        })
    }

    function addAttribute(elem, attribute, val) {
        var att = document.createAttribute(attribute);
        att.value = val;
        elem.setAttributeNode(att);
    }

    function addId(target, idName) {
        target.forEach(function(elem, i) {
            var att = document.createAttribute("id");
            att.value = (idName + "-" + i);
            elem.setAttributeNode(att);
        })
    }
    /* --------
    Transfor p in span for each character
    -----------*/
    const text = document.getElementById("target")
    const strText = text.textContent;
    var i = 10;
    const array = Array.from(strText)
    text.innerHTML = " "
    for (let i = 0; i < array.length; i++) {
        text.innerHTML += "<span>" + (array[i].toLowerCase()) + "</span>"
    }

    const spans_ele = document.querySelectorAll(".material span")

    spans_ele.forEach(elem => {
        addAttribute(elem, "style", "display:none")
    })

    addId(spans_ele, "char")
    var randomspeed = Math.floor(Math.random() * 100) + 10
    console.log(randomspeed)

    setInterval(typeWrite, randomspeed)
    var count = 0

    function typeWrite() {
        const p = document.getElementById("char-" + count)
        addAttribute(p, "style", "display:innline-block")
        count++
    }



})();