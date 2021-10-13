/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function fact(n){
        //base case 
        if (n == 0 || n ==1){
            return 1;   
        }
        // recursive case
        else{
            return n * fact(n-1);
        }
    }
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", () => {
        let x = document.getElementById("op-one").value;
        let num=Number(x);
        let factorial=fact(num);
        alert("The factorial of "+num+" is "+ factorial);
    });
})();
