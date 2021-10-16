/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
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





    var bt1 = document.getElementById("part-one")
    var bt2 = document.getElementById("part-two")
    var bt3 = document.getElementById("part-three")
    var bt4 = document.getElementById("part-four")
    var value = document.getElementById("target")

    const performOperation = button => {
        switch (button) {
            case "part-one":
                {
                    let min = bt1.getAttribute("data-min")
                    let max = bt1.getAttribute("data-max")
                    let data = getRandomArbitrary(Number(min), Number(max))


                    bt1.innerHTML = data.toString()

                    break;
                }

            case "part-two":
                {
                    let min = bt2.getAttribute("data-min")
                    let max = bt2.getAttribute("data-max")
                    var data = getRandomArbitrary(Number(min), Number(max))

                    bt2.innerHTML = data.toString()

                    break;
                }
            case "part-three":
                {
                    let min = bt3.getAttribute("data-min")
                    let max = bt3.getAttribute("data-max")
                    var data = getRandomArbitrary(Number(min), Number(max))

                    bt3.innerHTML = data.toString()

                    break;
                }
            case "part-four":
                {
                    let min = bt4.getAttribute("data-min")
                    let max = bt4.getAttribute("data-max")
                    var data = getRandomArbitrary(Number(min), Number(max))

                    bt4.innerHTML = data.toString()

                    break;
                }

        }

        value.innerHTML = (bt1.innerHTML) + (bt2.innerHTML) + (bt3.innerHTML) + (bt4.innerHTML)
    };


    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

})();