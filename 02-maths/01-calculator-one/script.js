/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("addition").addEventListener("click", () => {
        let x= document.getElementById("op-one").value;
        let y= document.getElementById("op-two").value;
        alert("The result is : " + (Number(x)+Number(y)))
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let x= document.getElementById("op-one").value;
        let y= document.getElementById("op-two").value;
        alert("The result is : "+(Number(x)-Number(y)))
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let x= document.getElementById("op-one").value;
        let y= document.getElementById("op-two").value;
        alert("The result is : "+(Number(x)*Number(y)))
    });

    document.getElementById("division").addEventListener("click", () => {
        let x= document.getElementById("op-one").value;
        let y= document.getElementById("op-two").value;
        alert("The result is : "+(Number(x)/Number(y)))
    });
})();
