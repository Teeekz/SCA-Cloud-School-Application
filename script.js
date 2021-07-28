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


  
// var newData = { title:"Choccake", 
//         recipe:{
//             ingredients:["cocoa","eggs","milk","flour"],
//             instructions:["Sieve flour","mix all ingredients","ensure that batter is smooth","cook untill bubbles"],
//             appliances:["bowl","whisk","cake pan"]

//         },
//         tag:"Dessert"
//  };




class Recipes{
    constructor(title,ingredients=[],instructions=[],appliances=[]){
        this.title = title;
        this.ingredients= ingredients;
        this.instructions= instructions;
        this.appliances= appliances;
    }

    getTitle(x){
        let displayTitle = this.x;
        return displayTitle;
    }
    getIngred(y){
        let displayIngred = this.y;
        return displayIngred;
    }
    getInstru(z){
        let displayInstru = this.z;
        return displayInstru;
    }
    getApplian(w){
        let displayApplian = this.w;
        return displayApplian;
    }   
}
function newRec(t,i,s,a){
    t= document.getElementById("ftitle").value;
    i= document.getElementById("breakfastSelect").options[breakfastSelect.selectedIndex].text;
    s= document.getElementById("textArea").value;
     //split mytext by nextline = "\n" 
     var myArray = s.split("\n");

     //to check the result
     var result = '';
     for(i=0;i<myArray.length;i++)
     {
         result += myArray[i]+"<br>";
     }
 
     document.getElementById("result").innerHTML = result;
    let ave= new Recipes(t,i,s,a);
    return ave;
}

function textToArray() {
    //object to contain data
    
    //assign value of textarea to mytext
    var myText = document.getElementById("textArea").value;
    var mySteps = document.getElementById("StepsTextarea1").value;
    var myAppli =document.getElementById("appliTextarea1").value
    //split mytext by nextline = "\n" 
    var myArray = myText.split("\n");
    var myArray2 = mySteps.split("\n");
    var myArray3 = myAppli.split("\n");
    //to check the result
    var result = '';
    var arrList =[];
    var arrSteps =[];
    var arrAppli =[];
    for(i=0;i<myArray.length;i++)
    {
        var temp ="";
        temp = myArray[i];
        result += myArray[i]+"<br>";
        console.log("added Ingredients");
        arrList[i]= temp;
    }
    for(k=0; k<myArray2.length;k++);{
        var temp2 ="";
        temp2 = myArray2[k];
        result += myArray2[k]+"<br>";
        console.log("added Instructions");
        arrSteps[k]= temp2;
    }
    for(l=0; l<myArray3.length;l++);{
        var temp3 ="";
        temp3 = myArray3[l];
        result += myArray3[l]+"<br>";
        console.log("added Appliances");
        arrAppli[l]= temp3;
    }

    document.getElementById("result").innerHTML = result;    
    var recipMethod;
    recipMethod = {
        "ingredients":arrList ,
        "instructions": arrSteps,
        "appliances": arrAppli
    };
    return console.log(recipMethod);
}

function getname(){
    let temp = document.getElementById("breakfastSelect").options[breakfastSelect.selectedIndex].text;
    return console.log(temp);
}
//get json files data
/*function getData(){
    
    fetch("./allRecipes.JSON")
    .then(response => {
       return response.json();
    })
    .then(data => console.log(data));
}*/

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

//getname();
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
        
        