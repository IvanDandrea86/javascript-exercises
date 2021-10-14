/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firsname = firstname;
            this.lastname = lastname
        }
        get fullName() {
            return `${this.firsname} ${this.lastname}`;
        }

        set fullName(val) {
            const parts = val.split(' ');
            this.firstname = parts[0];
            this.lastname = parts[1];
        }
    }
    document.getElementById("run").addEventListener("click", () => {

        let p = new Person("Ivan", "Caro")
        console.log(p.fullName)
        p.fullName = "Ivan Manzo"
        console.log(p.fullName)

    })




    // your code here
})();