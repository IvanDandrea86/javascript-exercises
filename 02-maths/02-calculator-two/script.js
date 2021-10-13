/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    const performOperation = operation => {
        switch(operation){
            case "addition" : {
                var x=document.getElementById("op-one").value
                var y=document.getElementById("op-two").value
                alert("The result is : " + (Number(x)+Number(y)));
                break;
            }
            
            
            case "substraction" : {
                var x=document.getElementById("op-one").value
                var y=document.getElementById("op-two").value
                alert("The result is : " + (Number(x)-Number(y)));
                break;
            }
            case "multiplication" :{
                var x=document.getElementById("op-one").value
                var y=document.getElementById("op-two").value
                alert("The result is : " + (Number(x)*Number(y)));
                break;
            }
            case "division" : {
                var x=document.getElementById("op-one").value
                var y=document.getElementById("op-two").value
                alert("The result is : " + (Number(x)/Number(y)));
                break;
            }

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
