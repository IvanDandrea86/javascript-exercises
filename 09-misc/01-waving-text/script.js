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
    const text = document.getElementById("target")
    const strText = text.textContent;
    var i = 10;
    const array = Array.from(strText)
    text.innerHTML = " "
    for (let i = 0; i < array.length; i++) {
        text.innerHTML += "<span>" + array[i] + "</span>"
        document.querySelectorAll("span")
    }
    var spans = document.querySelectorAll("span")
    var x = 12;
    spans.forEach(elem => {
        var att = document.createAttribute("style");
        att.value = "font-size:" + x + "px";
        elem.setAttributeNode(att);
        if (x > 42) {
            x = x - 4
        } else {
            x = x + 4;
        }
        console.log(x)

    })
    console.log(spans)
})();