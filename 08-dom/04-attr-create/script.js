/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var img = document.getElementById("source")
    img_link = img.getAttribute("data-image")
    console.log(img_link)
    var img_tag = document.createElement('img')
    document.getElementById("target").appendChild(img_tag)
    var select_image = document.querySelector("img")
    select_image.src = img_link
    var myobj = document.getElementById("source");
    myobj.remove();

})();