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


    // let insertNewHero=(elem)=>{
    //         console.log("i Work")
    //         var count = Object.keys(elem).length;
    //         let hero_name=document.getElementById("hero-name").value
    //         let ego=document.getElementById("hero-alter-ego").value
    //         let powers=document.getElementById("hero-powers").value
    //         var power_split = powers.split(' ');
    //         const newHero = {
    //             id: count+1,
    //         name: hero_name,
    //         alterEgo: ego,
    //         abilities: power_split
    //         }
            
    //         console.log(newHero)
    //         return elem
            
    //         // console.log(name)
    //         // console.log(ego)
    //         // console.log(powers)
    // }
    document.getElementById("run").addEventListener("click",()=>{
        let url="http://localhost:3000/heroes"
        fetch(url)
        .then(response => response.json())
        .then(data => {
            var count = Object.keys(data).length;  
        })
        let hero_name=document.getElementById("hero-name").value
            let ego=document.getElementById("hero-alter-ego").value
            let powers=document.getElementById("hero-powers").value
            var power_split = powers.split(' ');
            const newHero = {
                id: count=1,
            name: hero_name,
            alterEgo: ego,
            abilities: power_split
            } 
        const data =newHero
        fetch( "http://localhost:3000/heroes", {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:',data);
            })
          .catch((error) => {
            console.error('Error:', error);
            });
    })
    
})();
