import { useState, useEffect } from "react";

function News() {
    
let [New, SetNew] = useState([])
let Count=0;//criado para controlar os grupos de 5 noticias
useEffect(() => {
    const fetchNews = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const newsData = await response.json()
        SetNew(newsData.slice(Count, (Count+5)))
        Count += 5;
        console.log(Count)
        if(Count==100){Count=0}
        
    }
    const timer= setInterval(() =>{
        fetchNews()
    }, 3000)
    return () => clearInterval(timer)
}, [])

    return(
        <div>
            <h1>Noticias do dia</h1>
            {
             New.map((article)=>(
                <div key={article.id}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                </div>
             ))
            }
        
        </div>
    )
}

export default News