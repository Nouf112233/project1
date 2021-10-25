//const listFavorit=JSON.parse(localStorage."SListAll");
listFavorit=[ {
    name: "Karak tea with French coffee with hazelnuts",
    type: "Hot drinks",
    ingredients: [
      "Two cans of evaporated milk",
      "3 tablespoons of tea",
      "sugar as desired",
      "3 Hill pods",
      "3 cloves",
      "2 tablespoons French coffee with hazelnuts",
    ],
    steps: [
      `In the teapot we put the tea and then the sugar.`,
      `We pour hot water and raise the fire until the tea with sugar boils completely\.`,
      `Add the evaporated milk, then the cardamom and cloves, then the French coffee with hazelnuts\.`,
      `Leave it on a low heat and boil completely and enjoy the most delicious karak\.`,
    ],
    imges: ["../img/franchCofee.jpg", "../img/karak.jpg", "../img/karak2.jpg"],
    favorite: false,
    visited: false,
  },
  {
    name: "Chicken kabsa",
    type: "Saudi food",
    ingredients: [
      "2 chicken pieces halved",
      "3 small onions chopped",
      "3 garlic cloves, minced",
      `Adla spices: cardamom, black pepper, white pepper, cloves, two black lemons, oud darsin, bay leaves`,
      "spoonful of crushed spices",
      "Small spoon of crushed black lemon",
      `teaspoon crushed cardamom`,
      `teaspoon ground black pepper`,
      `ground turmeric`,
      `maggi cube`,
      `Two cups of rice (the best family rice) soaked in hot water for an hour`,
      `2 onions, chopped to taste, wings or small squares`,
      `2 grated carrots`,
      `Few ground black pepper`,
      `Few ground cumin`,
      `Few crushed black lemon`,
      `Pinch of sugar "the secret of the flavour"`,
      `pinch saffron powder`,
      ``,
    ],
    steps: [
      `Saute the onions until they wilt, then add the spices and garlic, and saute them a little`,
      `Put the chicken and garnish it`,
      `Put the mentioned spices and saute them`,
      `Put boiling water and salt on it`,
      `If the chicken is cooked, take it out and put it in the oven to brown`,
      `Boil the rice and weigh the water so that my prose will not be much`,
      `If the rice is dry, I will shorten it`,
      `And the stuffing, saute the onions and put all the spices mentioned with it and the carrots`,
      `Put it on rice to give it flavour`,
      `A sprinkle of parsley for beauty and wellness`,
    ],
    imges: ["../img/كبسة1.jpg", "../img/كبسة2.jpg", "../img/كبسة3.jpg"],
    favorite: false,
    visited: false,
  },
  {
    name: "Kasadia",
    type: "Sandwich",
    ingredients: [
      `Boneless chicken cut into cubes.`,
      `Onion chopped small cubes.`,
      `mashed garlic`,
      `Garlic powder and onion powder.`,
      `Colored bell pepper cut into cubes.`,
      `Tomatoes cut into cubes.`,
      `Salt and black pepper.`,
      `Paprika.`,
      `Tortilla bread.`,
      `Optional "mayonnaise, liquid cheese".`,
      `Grated mozzarella cheese.`,
      `Shredded cheddar cheese.`,
    ],
    steps: [
      `Season the chicken well with salt, pepper, paprika, garlic powder and onion powder and set aside.`,
      `Prepare a hot frying pan with a little oil and let it get very hot.`,
      `Put the chicken pieces and fry them until their color changes, then put the chicken in very hot oil, so that it keeps its juices and does not dry out.`,
      `Put chopped onions, cold pepper, garlic and stir well.`,
      `Add the diced tomatoes, stir and leave until the chicken is cooked and the vegetables are wilted, and then turn off the heat.`,
      `If using mayonnaise and liquid cheese, they are added at this stage and stirred with the rest of the ingredients.`,
      `Take the tortilla bread and put the chicken on one half of it, and spread the grated cheddar and mozzarella cheese.`,
      `Fold the tortilla so that it is in the shape of a semicircle.`,
      `Drizzle the bread with oil on both sides and toast it in a toaster or on a hot non-stick frying pan.`,
      `Cut and serve with fries.`,
    ],
    imges: ["../img/كساديا.jpg", "../img/كساديا2.jpg", "../img/كساديا3.jpg"],
    favorite: false,
    visited: false,
  }];
  

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
    $("#listBox").html("");
    for(let i=0 ; i<listFavorit.length ;i++)
    {
       
     
         $("#listBox").append(`<div id="box-${i}" class="box"> 
         <img src=${list[i].imges[2]} alt="dish picture" class="imgBox">
         <div class="infoBox">
         <h1 class="hBox">${list[i].name}<h1>
         <p class="pBox">${list[i].type}<p>
         <button id="butBox-${i}" class="butBox">. like .</button>
         </div>
         </div>`);

         if(list[i].favorite)
         {
            $("#butBox-"+i).addClass("favor");
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


