/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function startSlot(b, i) {

        b.removeEventListener("click", startSlot);

        var slot1 = setInterval(function() {
            // inp1 = document.getElementById("part-one")
            let min = i.getAttribute("data-min")
            let max = i.getAttribute("data-max")
            console.log("Started");
            random = getRandomArbitrary(Number(min), Number(max))
            i.value = random.toString()
            b.addEventListener("click", () => {
                b.addEventListener("click", startSlot);
                clearInterval(slot1)
            });

        }, 100);
    }




    var bt1 = document.getElementById("fix-part-one")
    var bt2 = document.getElementById("fix-part-two")
    var bt3 = document.getElementById("fix-part-three")
    var bt4 = document.getElementById("fix-part-four")
    var i1 = document.getElementById("part-one")
    var i2 = document.getElementById("part-two")
    var i3 = document.getElementById("part-three")
    var i4 = document.getElementById("part-four")
    var value = document.getElementById("target")

    bt1.addEventListener("click", startSlot(bt1, i1));
    // bt2.addEventListener("click", startSlot);
    // bt3.addEventListener("click", startSlot);
    // bt4.addEventListener("click", startSlot);





})();