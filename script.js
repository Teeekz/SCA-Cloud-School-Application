const arrRecipe = [];

// create recipre object
class Recipe{
    constructor(title,ingredients,instructions,appliances){
        this.title = title;
        this.ingredients= ingredients;
        this.instructions= instructions;
        this.appliances= appliances;
    }

    getTitle(){
        let displayTitle = this.title;
        return displayTitle;
    }
    getIngred(){
        let displayIngred = this.ingredients;
        return displayIngred;
    }
    getInstru(){
        let displayInstru = this.instructions;
        return displayInstru;
    }
    getApplian(){
        let displayApplian = this.appliances;
        return displayApplian;
    }   
}

// fetch data from JSON file into object
fetch('allRecipes.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    
    .catch(function (err) {
        console.log('error: ' + err);
});

// display data in JSON file
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].title + ' ' + data[i].tag;
        mainContainer.appendChild(div);
    }
}

//wite new recipe object to JSON

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('allRecipes', { title:"Choccake", 
  recipe:{
      ingredients:["cocoa","eggs","milk","flour"],
      instructions:["Sieve flour","mix all ingredients","ensure that batter is smooth","cook untill bubbles"],
      appliances:["bowl","whisk","cake pan"]

  },
  tag:"Dessert" })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  
// var newData = { title:"Choccake", 
//         recipe:{
//             ingredients:["cocoa","eggs","milk","flour"],
//             instructions:["Sieve flour","mix all ingredients","ensure that batter is smooth","cook untill bubbles"],
//             appliances:["bowl","whisk","cake pan"]

//         },
//         tag:"Dessert"
//  };




// class Recipes{
//     constructor(title,ingredients,instructions,appliances){
//         this.title = title;
//         this.ingredients= ingredients;
//         this.instructions= instructions;
//         this.appliances= appliances;
//     }

//     getTitle(){
//         let displayTitle = this.title;
//         return displayTitle;
//     }
//     getIngred(){
//         let displayIngred = this.ingredients;
//         return displayIngred;
//     }
//     getInstru(){
//         let displayInstru = this.instructions;
//         return displayInstru;
//     }
//     getApplian(){
//         let displayApplian = this.appliances;
//         return displayApplian;
//     }   
// }

// function getData(){
    
//     fetch("./allRecipes.JSON")
//     .then(response => {
//        return response.json();
//     })
//     .then(data => console.log(data));
// }

//display new Recipe 
function getRecipe(){
    
    let displayRecipe = 
    document.getElementById("displayRecipe");
    if (displayRecipe.style.display === "none") {
        displayRecipe.style.display = "block";
    } else {
        displayRecipe.style.display = "none";
    }
    // return displayRecipe;
}


console.log("Working");




// let newAdd = new Recipe(getElementById("addTitle").)
let recipeInfo = new Recipe("Pancakes", "flour, eggs, milk, sugar, salt, vanilla","Mix all ingredients in a bowl until smooth","bowl, spoon, measuring cup" );
        document.getElementById("choice").innerHTML =
        "the recipe selected is "+ recipeInfo.getTitle();
        document.getElementById("ingred").innerHTML =
        "the ingredients needed are: "+ recipeInfo.getIngred();
        document.getElementById("instru").innerHTML =
        "the instructions are as follows: "+ recipeInfo.getInstru();
        document.getElementById("applian").innerHTML =
        "the ingredients needed are: "+ recipeInfo.getApplian();
        
        