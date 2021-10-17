/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let insertHerto=(elem)=>{
        const head= document.getElementById("target")
        const title4=document.createElement('h4')
        const power=document.createElement('p')
        power.innerHTML=[...elem.abilities]
        const list = document.createElement('li')
        const strong=document.createElement("strong")
        strong.innerHTML=elem.name+"/"
        const em =document.createElement("em")
        em.innerHTML=elem.alterEgo
        title4.appendChild(strong)
        title4.appendChild(em)
        list.appendChild(title4)
        list.appendChild(power)
        head.appendChild(list)
    }


    document.getElementById("run").addEventListener("click",()=>{
        let url="http://localhost:3000/heroes"
        fetch(url)
        .then(response => response.json())
        .then(data => {
                let selected =document.getElementById("hero-id").value 
                let i=Number(selected)
                console.log(i)
                insertHerto(data[i])
        })
        .catch((error)=>{console.log("Id not in the list",error)})
    })
})();
