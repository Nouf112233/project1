//const listFavorit=JSON.parse(localStorage."SListAll");


//functions
const addlike=(i)=>{
    list[i].favorite= !list[i].favorite;
    rander(listFavorit);
}

const addvisit=(i)=>{
    list[i].visited=true;
    rander(listFavorit);
    sessionStorage.setItem("SVisit",JSON.stringify(list[i]));
    window.location.href="file:///C:/Users/noufa/OneDrive/Desktop/project1/discription/index.html";
}

const rander=(list)=>{
    //let favorit=[];
    $("#divmain").html("");
    for(let i=0 ; i<list.length ;i++)
    {
       
     
         $("#divmain").append(`<div id="box-${i}" class="box"> 
         <img src=${list[i].imges[2]} alt="dish picture" class="imgBox">
         <div class="infoBox">
         <h1 class="hBox">${list[i].name}<h1>
         <p class="pBox">${list[i].type}<p>
         <button id="butBox-${i}" class="butBox">like</button>
         </div>
         </div>`);

         if(list[i].favorite)
         {
            $("#butBox-"+i).addClass("favor");
            favorit.push(list[i]);
         }else{
            $("#butBox-"+i).removeClass("favor");
         }


         if(list[i].visited)
         {
            $("#box-"+i).addClass("visit")
            
         }

         //event for like button
         $("#butBox-"+i).click(()=>{ addlike(i)});
         
         //event for vist click
         $("#box-"+i).dblclick(()=>{ addvisit(i)});

    }
     //localStorage."SListFavor"=JSON.stringify(listAll); //   نرفع كل المفضله عاللوكل ستورج اسم "SListFavor"
    //localStorage."SListAll"=JSON.stringify(favorit);// "SListAll"نرفع كل البيانات عاللوكل ستوريج اسم 


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



