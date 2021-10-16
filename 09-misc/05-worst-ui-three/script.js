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
   
    function startSlot(b,inp) {
        console.log("Started");
        b.removeEventListener("click", startSlot);
        b.addEventListener("click", stopSlot);
        let min = inp.getAttribute("data-min")
        let max = inp.getAttribute("data-max")
        let data = getRandomArbitrary(Number(min), Number(max))
        inp.innerHTML = data.toString()

    }
    function stopSlot(b){
        console.log("Stop");
        b.removeEventListener("click",stopSlot);
        b.addEventListener("click", startSlot);
    }

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
    var check1 = 0;
    var check2 = 0;
    var check3 = 0;
    var check4 = 0;
    const performOperation = button => {    
        switch (button) {
            case "fix-part-one":
                {   if ((check1 %2 ===0)){
                    startSlot(bt1,i1)
                    check1++
                    }
                    else{
                        stopSlot(bt1)
                        check1++
                    }
                    // let min = i1.getAttribute("data-min")
                    // let max = i1.getAttribute("data-max")
                    // startSlot(check, i1, min, max)
                    break;
                }

            case "fix-part-two":
                {   
                    if ((check2 %2 ===0)){
                        startSlot(bt2)
                        check2++
                        }
                        else{
                            stopSlot(bt2)
                            check2++
                        }
                    let min = i2.getAttribute("data-min")
                    let max = i2.getAttribute("data-max")
                     var data = getRandomArbitrary(Number(min), Number(max))

                     i2.innerHTML = data.toString()

                    break;
                }
            case "fix-part-three":
                {
                    if ((check3 %2 ===0)){
                        startSlot(bt3)
                        check3++
                        }
                        else{
                            stopSlot(bt3)
                            check3++
                        }
                    let min = i3.getAttribute("data-min")
                    let max = i3.getAttribute("data-max")
                    var data = getRandomArbitrary(Number(min), Number(max))

                    i3.innerHTML = data.toString()

                    break;
                }
            case "fix-part-four":
                {
                    if ((check4 %2 ===0)){
                        startSlot(bt4)
                        check4++
                        }
                        else{
                            stopSlot(bt4)
                            check4++
                        }
                    let min = i4.getAttribute("data-min")
                    let max = i4.getAttribute("data-max")
                    var data = getRandomArbitrary(Number(min), Number(max))

                    i4.innerHTML = data.toString()

                    break;
                }

        }

        value.innerHTML = (i1.innerHTML) + (i2.innerHTML) + (i3.innerHTML) + (i4.innerHTML)
    };


    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener("click",() => (performOperation($btn.id), false),
        ),
    );
})();