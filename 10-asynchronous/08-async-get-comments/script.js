/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function showPost(){
        try{ 
            await window.lib.getPosts()
            
            .then((articles)=>{
                for(elem in articles){
                    var id=articles[elem].id
                     window.lib.getComments(id)
                    .then((comments)=>{
                    articles[elem].comment=[...comments]
                    console.log(articles[elem]) 
                    elem--
                    })
                }
            })
        }
        catch {console.log("And error occured")}
        finally {console.log("Posts are printed")}

    }

    document.getElementById("run").addEventListener("click",()=>{
             showPost()
             


            
    })
})();
