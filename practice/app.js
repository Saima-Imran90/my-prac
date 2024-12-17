let Api=fetch("https://www.freetestapi.com/api/v1/movies");
Api.then((items) => items.json())
.then((data) => {
  
console.log(data);

let card=data.map((info) =>{
    return`
    <div id="card">
    <img src="${info.poster}" class="image"/>
    <h1>${info.title}</h1>
    <p><b>Rating:</b>${info.rating}</p>
    <p>Release Year:${info.year}</p>
    `
});
let box=document.getElementById("box");
 box.innerHTML=card.join("");
})
.catch((error) => {console.error("Error fetching data:", error)});


