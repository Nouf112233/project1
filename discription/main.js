   
const storagItem=JSON.parse(sessionStorage.getItem("SVisit"));
const visitItem=storagItem;
sessionStorage.removeItem("SVisit")

let p=1;
let a=1;
 

if(visitItem)
{
$("#imgs").html(`<button id="precedent" class="moreImg"><</button>
<img src="${visitItem.imges[1]}" alt="dish picture" id="img" class="img"/>
<button id="appendage"  class="moreImg">></button>`);


$("#maindis").html(`<h1 id="name">${visitItem.name}</h1> 
<p id="type">${visitItem.type}</p>
<div id="divIngredients"> 
    <h2>Ingredients :</h2> 
    <ul id="listIng"> </ul>
</div>
<div id="divsteps"> 
    <h2>Steps :</h2> 
    <ol id="listStep"> </ol>
</div>
`);


for(let i=0; i<visitItem.ingredients.length;i++)
{
    $("#listIng").append(`<li> ${visitItem.ingredients[i]}</li>`);
}

for(let i=0; i<visitItem.steps.length;i++)
{
    $("#listStep").append(`<li> ${visitItem.steps[i]}</li>`);
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