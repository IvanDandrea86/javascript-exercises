function startSlot(b, i) {
    console.log("Started");
    b.removeEventListener("click", startSlot);
    b.addEventListener("click", stopSlot);



}

function stopSlot(b) {
    console.log("Stop");
    b.removeEventListener("click", stopSlot);
    b.addEventListener("click", startSlot);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function run(inp) {
    let min = inp.getAttribute("data-min")
    let max = inp.getAttribute("data-max")
    let data = getRandomArbitrary(Number(min), Number(max))
    inp.value = data.toString()
    console.log(inp.innerHTML)
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
            {
                setInterval(run(i1), 500)
                if ((check1 % 2 === 0)) {
                    startSlot(bt1, i1)
                    check1++
                } else {
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
                if ((check2 % 2 === 0)) {
                    startSlot(bt2)
                    check2++
                } else {
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
                if ((check3 % 2 === 0)) {
                    startSlot(bt3)
                    check3++
                } else {
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
                if ((check4 % 2 === 0)) {
                    startSlot(bt4)
                    check4++
                } else {
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
    $btn.addEventListener("click", () => (performOperation($btn.id), false), ),
);