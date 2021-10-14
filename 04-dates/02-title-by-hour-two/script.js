/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var hour_c = new Date().getHours()
    var min_c = new Date().getMinutes()
    const m = Number(min_c)
    const h = Number(hour_c)
    var time = m + (h * 60)
    var maxh = ((17 * 60) + 30)
    if ((time > 0) && (time < maxh)) {
        document.getElementById("target").innerHTML = "Good Morning";
    } else document.getElementById("target").innerHTML = "Good Evening";
})();