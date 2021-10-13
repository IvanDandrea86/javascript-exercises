/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",()=>{
        var sum=0;
        const array =Array.from({length: 10}, () => Math.floor(Math.random() * 100)+1);
        for (i=1;i<=10; i++){
            document.getElementById("n-"+i).innerHTML =array[i-1];  
            sum = sum + array[i-1];
        }
        var average=sum/10;
        var max=Math.max(...array);
        var min=Math.min(...array);
       
        document.getElementById("max").innerHTML =max;
        document.getElementById("min").innerHTML =min;
        document.getElementById("sum").innerHTML =sum;
        document.getElementById("average").innerHTML =average;
    })
})();
