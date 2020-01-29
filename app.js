var haveMoney;
var fastFood;
var homeMade;
var type;
var restaurant;
var dontWantIt;

haveMoney = true;
fastFood = false;
homeMade = "no";
type = "burger";
restaurant = "deli";



if(haveMoney){
    if(fastFood){
        if(type === "burgers"){
            console.log("5guys");
        }else if(type === "wings"){
            console.log("ATown");
        }else(type === "salad"){
            console.log("TopDog");
        }
    }
    if(restaurant){
        if(type === "buffet"){
            console.log("Chinese Palace");
        }else if(type === "steak"){
            console.log("Outback");
        }else(type === "deli"){
            console.log("Jason's");
        }
    }
} else {
    if (homeMade){
        console.log("go home");
    }else if (dontWantIt){
        console.log("Ask Friend");
    } else {
        console.log("starve");
    }
}







/*


if(haveMoney){
  if(fastFood){
    if(type === "burgers"){
        console.log("5guys"); 
      } else if(type === "wings"){
         console.log("ATown");
      } else if(type === "salad"){
         console.log("Topdog");
      }

  if(restaurant){
   if(type === "buffet"){
       console.log("Chinese");
     } else if(type === "steak"){
       console.log("Outback");
     } else if(type === "deli"){
       console.log("Jason's");
     }
   
  
  } else if(homeMade === "yes"){
      console.log("go home"); 
  } else(homeMade === "no"){
      console.log("starve");
  } else if(homeMade === "I don't like it"){
      console.log("ask a friend");
  }
}
}

*/