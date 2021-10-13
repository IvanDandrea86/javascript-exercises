/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var array=new Array();

    document.getElementById("run").addEventListener("click",()=>{
        var year=document.getElementById("year").value;
        
        for (i=1; i<=12;i++){
            var d = new Date();
            d.setFullYear(year,i,13);
            var w= weekday[d.getDay()];
            if (w ==="Fri"){
                array.push(monthNames[i-1]);
            }
        }
        alert(array)
    })
})();
