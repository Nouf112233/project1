//const listFavorit=JSON.parse(localStorage."SListAll");


//functions
const addlike=(i)=>{
    list[i].favorite= !list[i].favorite;
    rander(long);
}

const addvisit=(i)=>{
    list[i].visited=true;
    rander(long);
    sessionStorage.setItem("SVisit",JSON.stringify(list[i]));
    window.location.href="file:///C:/Users/noufa/OneDrive/Desktop/project1/discription/index.html";
}

const rander=()=>{
    //let favorit=[];
    $("#divmain").html("");
    for(let i=0 ; i<listFavorit.length ;i++)
    {
       
     
         $("#divmain").append(`<div id="box-${i}" class="box"> 
         <img src=${listFavorit[i].imges[2]} alt="dish picture" class="imgBox">
         <div class="infoBox">
         <h1 class="hBox">${listFavorit[i].name}<h1>
         <p class="pBox">${listFavorit[i].type}<p>
         <button id="butBox-${i}" class="butBox">like</button>
         </div>
         </div>`);

         if(listFavorit[i].favorite)
         {
            $("#box-"+i).addClass("favor");
            favorit.push(list[i]);

         }
         if(listFavorit[i].visited)
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
rander()



