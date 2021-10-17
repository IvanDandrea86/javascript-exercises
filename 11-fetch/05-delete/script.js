/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",()=>{
      let getHeroId=(elem)=>{
        console.log("i Work")
        let hero_id=document.getElementById("hero-id").value
        // let hero_name=document.getElementById("hero-name").value
        // let ego=document.getElementById("hero-alter-ego").value
        // let powers=document.getElementById("hero-powers").value
        // var power_split = powers.split(' ');
        const newHero = elem[hero_id-1]
        console.log(newHero)
    return fetch( "http://localhost:3000/heroes", {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHero),
    })
      .then(response =>   response.json())
}

let url="http://localhost:3000/heroes"
    fetch(url)
    .then(response => response.json())
    .then(data =>getHeroId(data))
    .catch(error => error);
    
})
       
    


   
})();
