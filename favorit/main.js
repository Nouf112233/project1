//const listFavorit=JSON.parse(localStorage."اسم العنصر باللوكل");
let long=6;

//functions
const addlike=(i)=>{
    list[i].favorite= !list[i].favorite;
    
   // rander(long);
}

const addvisit=(i)=>{
    list[i].visited=true;
    rander(long);
    //sessionStorage.setItem("SVisit",JSON.stringify(list[i]));
   // window.location.href=``//أعطيه رابط صفحة الديسكربشن

}

const rander=()=>{
    //let favorit=[];
    $("#divmain").html("");
    for(let i=0 ; i<long ;i++)
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
            $("#box-"+i).addClass("favor");
            favorit.push(list[i]);

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
    // نرفع كل المفضله عاللوكل ستورج اسم "SListFavor"
    // "SListAll"نرفع كل البيانات عاللوكل ستوريج اسم 

};
rander()

$("#butAdd").click(()=>{
    if(long+6>=list.length)
    {
        long=list.length;
        $("#butAdd").hide();
        

    }else{
        long+=6;
    }
    rander(long);
});

