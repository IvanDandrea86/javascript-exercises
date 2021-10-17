/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",()=>{
        let insertNewHero=(elem)=>{
            console.log("i Work")
            var count = Object.keys(elem).length;
            let hero_name=document.getElementById("hero-name").value
            let ego=document.getElementById("hero-alter-ego").value
            let powers=document.getElementById("hero-powers").value
            var power_split = powers.split(' ');
            const newHero = {
                id: count+1,
                name: hero_name,
                alterEgo: ego,
                abilities: power_split
            }
        return fetch( "http://localhost:3000/heroes", {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHero),
        })
          .then(response => response.json())
    }

    let url="http://localhost:3000/heroes"
        fetch(url)
        .then(response => response.json())
        .then(data =>     insertNewHero(data))
    .catch(error => error);
        
    })
    
})();
