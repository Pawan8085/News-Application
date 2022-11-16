// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();
let obj=JSON.parse(localStorage.getItem('news'));
let append = () =>{
    let container=document.getElementById('detailed_news');
    let img=document.createElement('img');
    img.src=obj.image;
    let h3=document.createElement('h3');
    h3.innerText=obj.title;
    let p=document.createElement('p');
    p.innerText=obj.description;
    container.append(img,h3,p);
}
console.log(obj)
append()
document.getElementById('search_input').addEventListener("keypress",function(event){
    if(event.key=='Enter'){
        let query=document.getElementById('search_input').value;
        localStorage.setItem('query',query);
        window.location.href='search.html'
    }
});
