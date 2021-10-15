/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function waveText(spans, max_const, min, increse) {
        let max = (min + increse) * max_const
        let val = min
        spans.forEach(elem => {
            let check = false
            if (val <= max) {
                addAttribute(elem, "style", ("font-size:" + val + "px"))
                val += increse
            } else {
                while (check === false)
                    if (val > min) {
                        addAttribute(elem, "style", ("font-size:" + val + "px"))
                        val -= increse
                    } else { check = true }
            }
        })
    }

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

    waveText(spans_ele, 5, 16, 8);

    // var j
    // while (j < 1000) {
    //     for (let i = 0; i < spans_ele.length; i++) {
    //         let temp = spans_ele[i]
    //         spans_ele[i] = spans_ele[i + 1]
    //     }
    //     j++
    // }
    // spans_ele.forEach(elem => {
    //     addAttribute(elem, "style", "font-size: 12px")
    // })
    // spans_ele.forEach(elem => {
    //     addAttribute(elem, "style", "font-size: 16px")
    // })

    // waveText(spans_ele, 5, 16, 8);
    // addId(spans_ele, "char")
    // addClass(spans_ele, "char")
})();