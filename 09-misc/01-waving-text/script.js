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
        let max = (min + (max_const * increse))
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
    var size = 18
    var amp = 8
    var freq = 5
    waveText(spans_ele, freq, size, amp);
    addId(spans_ele, "char")


    var randomspeed = Math.floor(Math.random() * 10000) + 10
    console.log(randomspeed)

    var timer = setInterval(wave, randomspeed)


    function wave() {
        for (i = 0; i <= spans_ele.length; i++) {
            var p = document.getElementById("char-" + i)
            p.style.fontSize = size + amp
            amp += amp
        }
        clearInterval(timer)
    }



})();