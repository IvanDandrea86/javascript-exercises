/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var check = false;
    while (check === false) {
        var age = prompt("Insert your age.")
        var sex = prompt("Insert your sex.")
        var city = prompt("Insert your city.")
       // alert("Age :" + age + "\r\n" + "Sex :" + sex + "\r\n" + "City :" + city + "\r\n")
        check = confirm("Age :" + age + "\r\n" + "Sex :" + sex + "\r\n" + "City :" + city + "\r\n"+"Is this the correct information??");
        
        

    }
})();
