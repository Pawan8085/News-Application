// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();

let getData =  async (query)=>{
    try{
        const url=`https://masai-api.herokuapp.com/news?q=${query}`;
        let res=await fetch(url);
        let data=await res.json();
        console.log(data);
        append(data.articles)
    }
    catch (err){
        console.log(err);
    }
}

let append = (data) =>{
    console.log(data)
    let container=document.getElementById('results');
    container.innerHTML=null;
    data.forEach(element => {
        let div=document.createElement('div');
        div.setAttribute('class','news');
        let img=document.createElement('img');
        let textdiv=document.createElement('div');
        img.src=element.urlToImage;
        let h3=document.createElement('h3')
        h3.innerText=element.title;
        let p2=document.createElement('p')

        p2.innerText=element.description;
        textdiv.append(h3,p2)
        div.append(img,textdiv);
        div.addEventListener('click',func);
        function func(){
            let obj={
                image:element.urlToImage,
                title:element.title,
                description:element.description
            }
            localStorage.setItem('news',JSON.stringify(obj));
            window.location.href="news.html"
        }
        container.append(div);

    });
}
document.getElementById('search_input').addEventListener("keypress",function(event){
    if(event.key=='Enter'){
        let query=document.getElementById('search_input').value;
        getData(query);
        
    }
});
let mquery=localStorage.getItem('query');
getData(mquery)
