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
    

    

    var bt1 = document.getElementById("fix-part-one")
    var bt2 = document.getElementById("fix-part-two")
    var bt3 = document.getElementById("fix-part-three")
    var bt4 = document.getElementById("fix-part-four")
    var i1 = document.getElementById("part-one")
    var i2 = document.getElementById("part-two")
    var i3 = document.getElementById("part-three")
    var i4 = document.getElementById("part-four")
    var value = document.getElementById("target")

    bt1.addEventListener("click", startSlot)

    function startSlot() {
        bt1.removeEventListener("click",startSlot)
        var slot1 = setInterval(function() {
        let min = i1.getAttribute("data-min")
        let max = i1.getAttribute("data-max")
        console.log("Started");
        random = getRandomArbitrary(Number(min), Number(max))
        i1.value = "+"+random.toString()
        bt1.addEventListener("click", ()=>{
            bt1.addEventListener("click", startSlot)
            value.innerHTML = (i1.value) + (i2.value) + (i3.value) + (i4.value)
            clearInterval(slot1)  
        })
        
    }, 100);
};
    
    bt2.addEventListener("click", startSlot2);
    function startSlot2() {
        bt2.removeEventListener("click",startSlot2)
        var slot2 = setInterval(function() {
        let min = i2.getAttribute("data-min")
        let max = i2.getAttribute("data-max")
        console.log("Started");
        random = getRandomArbitrary(Number(min), Number(max))
        i2.value = random.toString()

        bt2.addEventListener("click", ()=>{
            bt2.addEventListener("click", startSlot2)
            value.innerHTML = (i1.value) + (i2.value) + (i3.value) + (i4.value)
            clearInterval(slot2)  
        })
    }, 100);
};
    bt3.addEventListener("click", startSlot3);
   
    function startSlot3() {
        bt3.removeEventListener("click",startSlot3)
        var slot3 = setInterval(function() {
        let min = i3.getAttribute("data-min")
        let max = i3.getAttribute("data-max")
        console.log("Started");
        random = getRandomArbitrary(Number(min), Number(max))
        i3.value = random.toString()

        bt3.addEventListener("click", ()=>{
            bt3.addEventListener("click", startSlot3)
            value.innerHTML = (i1.value) + (i2.value) + (i3.value) + (i4.value)
            clearInterval(slot3)  
        })
    }, 100);
    };
    bt4.addEventListener("click", startSlot4);
    function startSlot4() {
        bt4.removeEventListener("click",startSlot4)
        var slot4 = setInterval(function() {
        let min = i4.getAttribute("data-min")
        let max = i4.getAttribute("data-max")
        console.log("Started");
        random = getRandomArbitrary(Number(min), Number(max))
        i4.value = random.toString()

        bt4.addEventListener("click", ()=>{
            bt4.addEventListener("click", startSlot4)
            value.innerHTML = (i1.value) + (i2.value) + (i3.value) + (i4.value)
            clearInterval(slot4)  
        })
    }, 100);
};


console.log(value.innerHTML)



})();