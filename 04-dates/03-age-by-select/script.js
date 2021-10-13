/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function calculate_age(dob) { 
        // Get the time. ECMAScript 5. - Get the time (milliseconds since January 1, 1970)
        var diff_ms = Date.now() - dob.getTime(); 
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    document.getElementById("run").addEventListener("click",()=>{

        const day= document.getElementById("dob-day").value;
        const month= document.getElementById("dob-month").value;
        const year= document.getElementById("dob-year").value;
        
        alert("Your age is "+ calculate_age(new Date(year, month, day)));
    })
  
})();
