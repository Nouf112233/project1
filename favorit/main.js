

const listFavorit=JSON.parse(localStorage.getItem("SListAll")) 
;
  

//functions
const addlike=(i)=>{
    listFavorit[i].favorite= !listFavorit[i].favorite;
    rander(listFavorit);
}

const addvisit=(i)=>{
    listFavorit[i].visited=true;
    rander(listFavorit);
    sessionStorage.setItem("SVisit",JSON.stringify(listFavorit[i]));
    window.location.href="file:///C:/Users/noufa/OneDrive/Desktop/project1/discription/index.html";
}

const rander=(list)=>{
   
    $("#listBox").html("");
    for(let i=0 ; i<list.length ;i++)
    {
       if(list[i].favorite)
       {
     
         $("#listBox").append(`<div id="box-${i}" class="box"> 
         <img src=${list[i].imges[2]} alt="dish picture" class="imgBox" id="img-${i}">
         <div class="infoBox" >
         <h1 class="hBox" id="hBox-${i}">${list[i].name}<h1>
         <p class="pBox" id="pBox-${i}">${list[i].type}<p>
         <div id="divLV">
         <button id="butBox-${i}" class="butBox">. like .</button>
         <p id="visited-${i}" class="visited"> .visited. </p>
         </div>
         </div>
         </div>`);

         $("#visited-"+i).hide();

         if(list[i].favorite)
         {
            $("#butBox-"+i).addClass("favor");
            $("#butBox-" + i).html("un like")
           
         }
         

         if(list[i].visited)
         {
            $("#visited-"+i).show(); 
         }

         //event for like button
         $("#butBox-"+i).click(()=>{ addlike(i)});
         
         //event for vist click
         
         $("#img-"+i).click(() => {
            addvisit(i);
          });
          $("#hBox-"+i).click(() => {
              addvisit(i);
          });
          $("#pBox-"+i).click(() => {
              addvisit(i);
          });

        }   
    }

    localStorage.setItem("SListAll",JSON.stringify(listFavorit));// "SListAll"نرفع كل البيانات عاللوكل ستوريج اسم 


};
rander(listFavorit)

document.getElementById("searchBar").addEventListener("keyup",(e)=>{
    const searchCharacter=e.target.value.toLowerCase();
    const filterItem=listItem.filter(item=>{
        return item.name.toLocaleLowerCase().includes(searchCharacter)||item.type.toLocaleLowerCase().includes(searchCharacter);
    });
    
    rander(filterItem);
    
});
document.getElementById("searchBar").addEventListener("change",(e)=>{
   e.target.value="";
});


