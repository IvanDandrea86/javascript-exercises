/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var trg = document.getElementById("target")
    var thead = document.createElement('table')
    trg.appendChild(thead)
        // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Header"
    row_1.appendChild(heading_1);
    thead.appendChild(row_1);
    for (i = 0; i < 10; i++) {
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = "row-" + (i + 1)
        row_2.appendChild(row_2_data_1);
        thead.appendChild(row_2);
    }
})();