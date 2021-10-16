/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var local=window.localStorage.getItem("counter")
    console.log(local)
    var count=local
    document.getElementById("increment").addEventListener("click",()=>{
        document.getElementById("target").innerHTML=count
       count++ 
       window.localStorage.setItem("counter",count)
    })
})();
