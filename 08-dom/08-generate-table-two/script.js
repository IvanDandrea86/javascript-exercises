/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var trg = document.getElementById("target")
    var thead = document.createElement('table')
    var tbody = document.createElement("tbody")
    trg.appendChild(thead)
    thead.appendChild(tbody)
        // Creating and adding data to first row of the table
    for (y = 1; y <= 10; y++) {
        let row = document.createElement('tr');
        for (i = 1; i <= 10; i++) {
            var cell = document.createElement('td');
            /*------------
            Text node Method
            --------------*/
            // var cellText = document.createTextNode;
            // cell.appendChild(cellText);
            cell.innerHTML = (i * y)
            row.appendChild(cell);
        }
        //row added to end of table body
        tbody.appendChild(row);
    }


})();