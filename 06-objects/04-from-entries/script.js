/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //function to make map
    const buildMap = (key, value) => {
        const map = new Map();
        for (let i = 0; i < key.length; i++) {
            map.set(key[i], value[i]);
        };
        return map;
    };
    document.getElementById("run").addEventListener("click", () => {
        const keys = ["name", "species", "age", "gender", "color"];
        const values = ["Skitty", "cat", 9, "female", "tabby"];
        const mapping = buildMap(keys, values)
            // function to create object from a map
        obj = Object.fromEntries(mapping)
            // var obj = Object.fromEntries(values)
        console.log(obj)
    })

})();