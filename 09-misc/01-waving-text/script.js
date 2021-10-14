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
    var val = 8;
    var increse=8
    var min=8;
    var max=48;

    spans.forEach(elem => {
        var att = document.createAttribute("style");
        att.value = "font-size:" + +val + "px";
        elem.setAttributeNode(att);
        val=val+increse
        console.log(val)
        if (val >max){
                temp=val
            while(temp>max){
                var att = document.createAttribute("style");
                att.value = "font-size:" + +val + "px";
                elem.setAttributeNode(att);
                console.log(val)
                val=val-increse
                if (val<min){
                    temp=max-1
                }
            }
        }
        
    })
    
})();