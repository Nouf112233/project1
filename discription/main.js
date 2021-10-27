   
const storagItem=JSON.parse(sessionStorage.getItem("SVisit"));
const visitItem=storagItem;
sessionStorage.removeItem("SVisit")

let p=1;
let a=1;
 

if(visitItem)
{

$("#maindis").html(`<div id="imgs"><button id="precedent" class="moreImg btn btn-outline-secondary"><</button>
<img src="${visitItem.imges[1]}" alt="dish picture" id="img" class="img"/>
<button id="appendage"  class="moreImg btn btn-outline-secondary">></button></div>
<h1 id="name" class="hdis">${visitItem.name}</h1> 
<p id="type">${visitItem.type}</p>
<div id="divIngredients"> 
    <h2 class="hdis">Ingredients :</h2> 
    <ul id="listIng" class="list"> </ul>
</div>
<div id="divsteps"> 
    <h2 class="hdis">Steps :</h2> 
    <ol id="listStep" class="list"> </ol>
</div>
`);


for(let i=0; i<visitItem.ingredients.length;i++)
{
    $("#listIng").append(`<li class="li"> ${visitItem.ingredients[i]}</li>`);
}

for(let i=0; i<visitItem.steps.length;i++)
{
    $("#listStep").append(`<li class="li"> ${visitItem.steps[i]}</li>`);
}


$("#precedent").click(()=>{
    if(p>0)
    {
        p--;
        document.getElementById("img").src =`${visitItem.imges[p]}`;

         
    }else{
        p=visitItem.imges.length-1;
        document.getElementById("img").src =`${visitItem.imges[p]}`;
    }
  
       
});


$("#appendage").click(()=>{
    if(a<visitItem.imges.length-1)
    {
        a++;
        document.getElementById("img").src =`${visitItem.imges[a]}`;

    }else{
        a=0;
        document.getElementById("img").src =`${visitItem.imges[a]}`;
    }
  
       
});


}